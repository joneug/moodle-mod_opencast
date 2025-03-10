<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Prints an instance of mod_opencast.
 *
 * @package     mod_opencast
 * @copyright   2020 Tobias Reischmann <tobias.reischmann@wi.uni-muenster.de>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

use mod_opencast\local\opencasttype;
use mod_opencast\local\output_helper;

require(__DIR__ . '/../../config.php');
require_once(__DIR__ . '/lib.php');
require_once($CFG->dirroot . '/course/modlib.php');
require_once($CFG->libdir . '/gradelib.php');
require_once($CFG->libdir.'/completionlib.php');

global $OUTPUT, $DB, $PAGE;

// Course_module ID, or ...
$id = optional_param('id', 0, PARAM_INT);

// ... module instance id.
$o = optional_param('o', 0, PARAM_INT);

$episode = optional_param('e', null, PARAM_ALPHANUMEXT);

if ($id) {
    $cm = get_coursemodule_from_id('opencast', $id, 0, false, MUST_EXIST);
    $course = $DB->get_record('course', ['id' => $cm->course], '*', MUST_EXIST);
    $moduleinstance = $DB->get_record('opencast', ['id' => $cm->instance], '*', MUST_EXIST);
} else if ($o) {
    $moduleinstance = $DB->get_record('opencast', ['id' => $o], '*', MUST_EXIST);
    $course = $DB->get_record('course', ['id' => $moduleinstance->course], '*', MUST_EXIST);
    $cm = get_coursemodule_from_instance('opencast', $moduleinstance->id, $course->id, false, MUST_EXIST);
} else {
    throw new moodle_exception('missingidandcmid', 'mod_opencast');
}

require_login($course, true, $cm);

$modulecontext = context_module::instance($cm->id);

if ($episode) {
    $PAGE->set_url('/mod/opencast/view.php', ['id' => $cm->id, 'e' => $episode]);
} else {
    $PAGE->set_url('/mod/opencast/view.php', ['id' => $cm->id]);
}

$PAGE->set_title(format_string($moduleinstance->name));
$PAGE->set_heading(format_string($course->fullname));
$PAGE->set_context($modulecontext);

$viewlist = optional_param('list', null, PARAM_BOOL);
if ($viewlist !== null) {
    require_sesskey();
    if ($viewlist) {
        set_user_preference('mod_opencast/list', '1');
    } else {
        unset_user_preference('mod_opencast/list');
    }
    redirect($PAGE->url);
    die();
}

$event = \mod_opencast\event\course_module_viewed::create([
    'objectid' => $moduleinstance->id,
    'context' => $modulecontext,
]);
$event->add_record_snapshot('course', $course);
$event->add_record_snapshot('opencast', $moduleinstance);
$event->trigger();

// Completion.
$completion = new completion_info($course);
$completion->set_module_viewed($cm);

if ($moduleinstance->type == opencasttype::EPISODE) {
    output_helper::output_episode($moduleinstance->ocinstanceid, $moduleinstance->opencastid, $moduleinstance->id);
} else if ($moduleinstance->type == opencasttype::SERIES) {
    if ($episode) {
        output_helper::output_episode($moduleinstance->ocinstanceid, $episode, $moduleinstance->id, $moduleinstance->opencastid);
    } else {
        output_helper::output_series($moduleinstance);
    }
} else if ($moduleinstance->type == opencasttype::UPLOAD) {
    // Redirect to the upload video page in the mod_opencast by default.
    $messagetext = get_string('uploadlandinginfo', 'mod_opencast');
    $messagestatus = \core\output\notification::NOTIFY_INFO;
    $url = new moodle_url('/mod/opencast/uploadvideo.php', ['cmid' => $cm->id]);
    // Check the addvideo capability from block_opencast.
    $coursecontext = context_course::instance($course->id);
    if (!has_capability('block/opencast:addvideo', $coursecontext)) {
        // If capability is not met, redirect back with message.
        $url = new moodle_url('/course/view.php', ['id' => $course->id]);
        $messagetext = get_string('uploadnotallowed', 'mod_opencast');
        $messagestatus = \core\output\notification::NOTIFY_ERROR;
    } else if (empty($moduleinstance->uploaddraftitemid)) {
        // If the file draft id is not avialable, we remove the instance and redirect back with message.
        $url = new moodle_url('/course/view.php', ['id' => $course->id]);
        $messagetext = get_string('uploadmissingfile', 'mod_opencast');
        $messagestatus = \core\output\notification::NOTIFY_ERROR;

        // Delete this module as it is faulty.
        course_delete_module($cm->id);
        opencast_delete_instance($moduleinstance->id);
    }
    // Perform the redirect.
    redirect($url, $messagetext, null, $messagestatus);
} else if ($moduleinstance->type == opencasttype::UPLOADED) {
    $url = new moodle_url('/course/view.php', ['id' => $course->id]);
    $uploadjob = $DB->get_record('block_opencast_uploadjob', ['id' => $moduleinstance->uploadjobid]);
    if (empty($uploadjob) || empty($uploadjob->opencasteventid)) {
        $messagetext = get_string('uploadinprogress', 'mod_opencast', $moduleinstance->name);
        $messagestatus = \core\output\notification::NOTIFY_INFO;
        // Delete this module as it is faulty.
        if (empty($uploadjob)) {
            course_delete_module($cm->id);
            opencast_delete_instance($moduleinstance->id);
            $messagetext = get_string('uploadjobmissing', 'mod_opencast');
            $messagestatus = \core\output\notification::NOTIFY_ERROR;
        }
        redirect($url, $messagetext, null, $messagestatus);
    }
    $opencasteventid = $uploadjob->opencasteventid;
    $apibridge = \block_opencast\local\apibridge::get_instance($moduleinstance->ocinstanceid);
    $video = $apibridge->get_opencast_video($opencasteventid);
    if ($video->video->processing_state != 'SUCCEEDED') {
        $messagetext = get_string('uploadedvideoisbeingprocesses', 'mod_opencast', $moduleinstance->name);
        $messagestatus = \core\output\notification::NOTIFY_INFO;
        redirect($url, $messagetext, null, $messagestatus);
    } else {
        try {
            // Gather more information about this module so that we can update the module info in the end.
            list($unusedcm, $unusedcontext, $unusedmodule, $opencastmoduledata, $unusedcw) =
                get_moduleinfo_data($cm , $course);

            // Using a dummy parameter 'opencastmodtype' to be replaced with type at when updating record in db.
            $opencastmoduledata->opencastmodtype = opencasttype::EPISODE;
            $opencastmoduledata->opencastid = $opencasteventid;
            $opencastmoduledata->intro = '';
            // Update the module info directly.
            update_module($opencastmoduledata);
            output_helper::output_episode($opencastmoduledata->ocinstanceid, $opencastmoduledata->opencastid,
                $opencastmoduledata->id);
        } catch (\Exception $e) {
            \core\notification::warning($e->getMessage());
        }
    }
} else {
    throw new coding_exception('This opencast activity is neither a episode nor a series.');
}
