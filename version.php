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
 * Plugin version and other meta-data are defined here.
 *
 * @package     mod_opencast
 * @copyright   2024 Thomas Niedermaier <thomas.niedermaier@uni-muenster.de>
 * @copyright   2020 Tobias Reischmann <tobias.reischmann@wi.uni-muenster.de>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$plugin->component = 'mod_opencast';
$plugin->release = 'v4.5-r4';
$plugin->version = 2024111103;
$plugin->requires = 2024100700; // Requires Moodle 4.5+.
$plugin->supported = [405, 405];
$plugin->maturity = MATURITY_STABLE;
$plugin->dependencies = [
    'tool_opencast' => 2024111103,
];
