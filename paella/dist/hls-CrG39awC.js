function ji(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ur = { exports: {} };
(function(n, t) {
  (function(e) {
    var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, r = /^(?=([^\/?#]*))\1([^]*)$/, i = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
      // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
      // E.g
      // With opts.alwaysNormalize = false (default, spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
      // With opts.alwaysNormalize = true (not spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
      buildAbsoluteURL: function(l, h, d) {
        if (d = d || {}, l = l.trim(), h = h.trim(), !h) {
          if (!d.alwaysNormalize)
            return l;
          var c = o.parseURL(l);
          if (!c)
            throw new Error("Error trying to parse base URL.");
          return c.path = o.normalizePath(
            c.path
          ), o.buildURLFromParts(c);
        }
        var u = o.parseURL(h);
        if (!u)
          throw new Error("Error trying to parse relative URL.");
        if (u.scheme)
          return d.alwaysNormalize ? (u.path = o.normalizePath(u.path), o.buildURLFromParts(u)) : h;
        var g = o.parseURL(l);
        if (!g)
          throw new Error("Error trying to parse base URL.");
        if (!g.netLoc && g.path && g.path[0] !== "/") {
          var f = r.exec(g.path);
          g.netLoc = f[1], g.path = f[2];
        }
        g.netLoc && !g.path && (g.path = "/");
        var m = {
          // 2c) Otherwise, the embedded URL inherits the scheme of
          // the base URL.
          scheme: g.scheme,
          netLoc: u.netLoc,
          path: null,
          params: u.params,
          query: u.query,
          fragment: u.fragment
        };
        if (!u.netLoc && (m.netLoc = g.netLoc, u.path[0] !== "/"))
          if (!u.path)
            m.path = g.path, u.params || (m.params = g.params, u.query || (m.query = g.query));
          else {
            var E = g.path, y = E.substring(0, E.lastIndexOf("/") + 1) + u.path;
            m.path = o.normalizePath(y);
          }
        return m.path === null && (m.path = d.alwaysNormalize ? o.normalizePath(u.path) : u.path), o.buildURLFromParts(m);
      },
      parseURL: function(l) {
        var h = s.exec(l);
        return h ? {
          scheme: h[1] || "",
          netLoc: h[2] || "",
          path: h[3] || "",
          params: h[4] || "",
          query: h[5] || "",
          fragment: h[6] || ""
        } : null;
      },
      normalizePath: function(l) {
        for (l = l.split("").reverse().join("").replace(i, ""); l.length !== (l = l.replace(a, "")).length; )
          ;
        return l.split("").reverse().join("");
      },
      buildURLFromParts: function(l) {
        return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment;
      }
    };
    n.exports = o;
  })();
})(Ur);
var vs = Ur.exports;
function Us(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    t && (s = s.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), e.push.apply(e, s);
  }
  return e;
}
function at(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Us(Object(e), !0).forEach(function(s) {
      zi(n, s, e[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Us(Object(e)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(e, s));
    });
  }
  return n;
}
function qi(n, t) {
  if (typeof n != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var s = e.call(n, t);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Xi(n) {
  var t = qi(n, "string");
  return typeof t == "symbol" ? t : String(t);
}
function zi(n, t, e) {
  return t = Xi(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function tt() {
  return tt = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
    }
    return n;
  }, tt.apply(this, arguments);
}
const F = Number.isFinite || function(n) {
  return typeof n == "number" && isFinite(n);
}, Qi = Number.isSafeInteger || function(n) {
  return typeof n == "number" && Math.abs(n) <= Ji;
}, Ji = Number.MAX_SAFE_INTEGER || 9007199254740991;
let p = /* @__PURE__ */ function(n) {
  return n.MEDIA_ATTACHING = "hlsMediaAttaching", n.MEDIA_ATTACHED = "hlsMediaAttached", n.MEDIA_DETACHING = "hlsMediaDetaching", n.MEDIA_DETACHED = "hlsMediaDetached", n.BUFFER_RESET = "hlsBufferReset", n.BUFFER_CODECS = "hlsBufferCodecs", n.BUFFER_CREATED = "hlsBufferCreated", n.BUFFER_APPENDING = "hlsBufferAppending", n.BUFFER_APPENDED = "hlsBufferAppended", n.BUFFER_EOS = "hlsBufferEos", n.BUFFER_FLUSHING = "hlsBufferFlushing", n.BUFFER_FLUSHED = "hlsBufferFlushed", n.MANIFEST_LOADING = "hlsManifestLoading", n.MANIFEST_LOADED = "hlsManifestLoaded", n.MANIFEST_PARSED = "hlsManifestParsed", n.LEVEL_SWITCHING = "hlsLevelSwitching", n.LEVEL_SWITCHED = "hlsLevelSwitched", n.LEVEL_LOADING = "hlsLevelLoading", n.LEVEL_LOADED = "hlsLevelLoaded", n.LEVEL_UPDATED = "hlsLevelUpdated", n.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", n.LEVELS_UPDATED = "hlsLevelsUpdated", n.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", n.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", n.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", n.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", n.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", n.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", n.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", n.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", n.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", n.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", n.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", n.CUES_PARSED = "hlsCuesParsed", n.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", n.INIT_PTS_FOUND = "hlsInitPtsFound", n.FRAG_LOADING = "hlsFragLoading", n.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", n.FRAG_LOADED = "hlsFragLoaded", n.FRAG_DECRYPTED = "hlsFragDecrypted", n.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", n.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", n.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", n.FRAG_PARSED = "hlsFragParsed", n.FRAG_BUFFERED = "hlsFragBuffered", n.FRAG_CHANGED = "hlsFragChanged", n.FPS_DROP = "hlsFpsDrop", n.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", n.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", n.ERROR = "hlsError", n.DESTROYING = "hlsDestroying", n.KEY_LOADING = "hlsKeyLoading", n.KEY_LOADED = "hlsKeyLoaded", n.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", n.BACK_BUFFER_REACHED = "hlsBackBufferReached", n.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", n;
}({}), $ = /* @__PURE__ */ function(n) {
  return n.NETWORK_ERROR = "networkError", n.MEDIA_ERROR = "mediaError", n.KEY_SYSTEM_ERROR = "keySystemError", n.MUX_ERROR = "muxError", n.OTHER_ERROR = "otherError", n;
}({}), D = /* @__PURE__ */ function(n) {
  return n.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", n.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", n.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", n.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", n.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", n.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", n.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", n.MANIFEST_LOAD_ERROR = "manifestLoadError", n.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", n.MANIFEST_PARSING_ERROR = "manifestParsingError", n.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", n.LEVEL_EMPTY_ERROR = "levelEmptyError", n.LEVEL_LOAD_ERROR = "levelLoadError", n.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", n.LEVEL_PARSING_ERROR = "levelParsingError", n.LEVEL_SWITCH_ERROR = "levelSwitchError", n.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", n.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", n.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", n.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", n.FRAG_LOAD_ERROR = "fragLoadError", n.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", n.FRAG_DECRYPT_ERROR = "fragDecryptError", n.FRAG_PARSING_ERROR = "fragParsingError", n.FRAG_GAP = "fragGap", n.REMUX_ALLOC_ERROR = "remuxAllocError", n.KEY_LOAD_ERROR = "keyLoadError", n.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", n.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", n.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", n.BUFFER_APPEND_ERROR = "bufferAppendError", n.BUFFER_APPENDING_ERROR = "bufferAppendingError", n.BUFFER_STALLED_ERROR = "bufferStalledError", n.BUFFER_FULL_ERROR = "bufferFullError", n.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", n.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", n.INTERNAL_EXCEPTION = "internalException", n.INTERNAL_ABORTED = "aborted", n.UNKNOWN = "unknown", n;
}({});
const _t = function() {
}, ns = {
  trace: _t,
  debug: _t,
  log: _t,
  warn: _t,
  info: _t,
  error: _t
};
let zt = ns;
function Zi(n) {
  const t = self.console[n];
  return t ? t.bind(self.console, `[${n}] >`) : _t;
}
function tn(n, ...t) {
  t.forEach(function(e) {
    zt[e] = n[e] ? n[e].bind(n) : Zi(e);
  });
}
function en(n, t) {
  if (typeof console == "object" && n === !0 || typeof n == "object") {
    tn(
      n,
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    );
    try {
      zt.log(`Debug logs enabled for "${t}" in hls.js version 1.5.20`);
    } catch {
      zt = ns;
    }
  } else
    zt = ns;
}
const v = zt, sn = /^(\d+)x(\d+)$/, Bs = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class J {
  constructor(t) {
    typeof t == "string" && (t = J.parseAttrList(t)), tt(this, t);
  }
  get clientAttrs() {
    return Object.keys(this).filter((t) => t.substring(0, 2) === "X-");
  }
  decimalInteger(t) {
    const e = parseInt(this[t], 10);
    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
  }
  hexadecimalInteger(t) {
    if (this[t]) {
      let e = (this[t] || "0x").slice(2);
      e = (e.length & 1 ? "0" : "") + e;
      const s = new Uint8Array(e.length / 2);
      for (let r = 0; r < e.length / 2; r++)
        s[r] = parseInt(e.slice(r * 2, r * 2 + 2), 16);
      return s;
    } else
      return null;
  }
  hexadecimalIntegerAsNumber(t) {
    const e = parseInt(this[t], 16);
    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
  }
  decimalFloatingPoint(t) {
    return parseFloat(this[t]);
  }
  optionalFloat(t, e) {
    const s = this[t];
    return s ? parseFloat(s) : e;
  }
  enumeratedString(t) {
    return this[t];
  }
  bool(t) {
    return this[t] === "YES";
  }
  decimalResolution(t) {
    const e = sn.exec(this[t]);
    if (e !== null)
      return {
        width: parseInt(e[1], 10),
        height: parseInt(e[2], 10)
      };
  }
  static parseAttrList(t) {
    let e;
    const s = {}, r = '"';
    for (Bs.lastIndex = 0; (e = Bs.exec(t)) !== null; ) {
      let i = e[2];
      i.indexOf(r) === 0 && i.lastIndexOf(r) === i.length - 1 && (i = i.slice(1, -1));
      const a = e[1].trim();
      s[a] = i;
    }
    return s;
  }
}
function rn(n) {
  return n !== "ID" && n !== "CLASS" && n !== "START-DATE" && n !== "DURATION" && n !== "END-DATE" && n !== "END-ON-NEXT";
}
function nn(n) {
  return n === "SCTE35-OUT" || n === "SCTE35-IN";
}
class Br {
  constructor(t, e) {
    if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e) {
      const s = e.attr;
      for (const r in s)
        if (Object.prototype.hasOwnProperty.call(t, r) && t[r] !== s[r]) {
          v.warn(`DATERANGE tag attribute: "${r}" does not match for tags with ID: "${t.ID}"`), this._badValueForSameId = r;
          break;
        }
      t = tt(new J({}), s, t);
    }
    if (this.attr = t, this._startDate = new Date(t["START-DATE"]), "END-DATE" in this.attr) {
      const s = new Date(this.attr["END-DATE"]);
      F(s.getTime()) && (this._endDate = s);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    if (this._endDate)
      return this._endDate;
    const t = this.duration;
    return t !== null ? new Date(this._startDate.getTime() + t * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const t = this.attr.decimalFloatingPoint("DURATION");
      if (F(t))
        return t;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && F(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class);
  }
}
class _e {
  constructor() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var z = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class $r {
  constructor(t) {
    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
      [z.AUDIO]: null,
      [z.VIDEO]: null,
      [z.AUDIOVIDEO]: null
    }, this.baseurl = t;
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(t, e) {
    const s = t.split("@", 2);
    let r;
    s.length === 1 ? r = (e == null ? void 0 : e.byteRangeEndOffset) || 0 : r = parseInt(s[1]), this._byteRange = [r, parseInt(s[0]) + r];
  }
  get byteRange() {
    return this._byteRange ? this._byteRange : [];
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = vs.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(t) {
    this._url = t;
  }
}
class Fe extends $r {
  constructor(t, e) {
    super(e), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new _e(), this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = t;
  }
  get decryptdata() {
    const {
      levelkeys: t
    } = this;
    if (!t && !this._decryptdata)
      return null;
    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
      const e = this.levelkeys.identity;
      if (e)
        this._decryptdata = e.getDecryptData(this.sn);
      else {
        const s = Object.keys(this.levelkeys);
        if (s.length === 1)
          return this._decryptdata = this.levelkeys[s[0]].getDecryptData(this.sn);
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null || !F(this.programDateTime))
      return null;
    const t = F(this.duration) ? this.duration : 0;
    return this.programDateTime + t * 1e3;
  }
  get encrypted() {
    var t;
    if ((t = this._decryptdata) != null && t.encrypted)
      return !0;
    if (this.levelkeys) {
      const e = Object.keys(this.levelkeys), s = e.length;
      if (s > 1 || s === 1 && this.levelkeys[e[0]].encrypted)
        return !0;
    }
    return !1;
  }
  setKeyFormat(t) {
    if (this.levelkeys) {
      const e = this.levelkeys[t];
      e && !this._decryptdata && (this._decryptdata = e.getDecryptData(this.sn));
    }
  }
  abortRequests() {
    var t, e;
    (t = this.loader) == null || t.abort(), (e = this.keyLoader) == null || e.abort();
  }
  setElementaryStreamInfo(t, e, s, r, i, a = !1) {
    const {
      elementaryStreams: o
    } = this, l = o[t];
    if (!l) {
      o[t] = {
        startPTS: e,
        endPTS: s,
        startDTS: r,
        endDTS: i,
        partial: a
      };
      return;
    }
    l.startPTS = Math.min(l.startPTS, e), l.endPTS = Math.max(l.endPTS, s), l.startDTS = Math.min(l.startDTS, r), l.endDTS = Math.max(l.endDTS, i);
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: t
    } = this;
    t[z.AUDIO] = null, t[z.VIDEO] = null, t[z.AUDIOVIDEO] = null;
  }
}
class an extends $r {
  constructor(t, e, s, r, i) {
    super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new _e(), this.duration = t.decimalFloatingPoint("DURATION"), this.gap = t.bool("GAP"), this.independent = t.bool("INDEPENDENT"), this.relurl = t.enumeratedString("URI"), this.fragment = e, this.index = r;
    const a = t.enumeratedString("BYTERANGE");
    a && this.setByteRange(a, i), i && (this.fragOffset = i.fragOffset + i.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: t
    } = this;
    return !!(t.audio || t.video || t.audiovideo);
  }
}
const on = 10;
class ln {
  constructor(t) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = t;
  }
  reloaded(t) {
    if (!t) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const e = this.lastPartSn - t.lastPartSn, s = this.lastPartIndex - t.lastPartIndex;
    this.updated = this.endSN !== t.endSN || !!s || !!e || !this.live, this.advanced = this.endSN > t.endSN || e > 0 || e === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(t.misses * 0.6) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay;
  }
  get hasProgramDateTime() {
    return this.fragments.length ? F(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || on;
  }
  get drift() {
    const t = this.driftEndTime - this.driftStartTime;
    return t > 0 ? (this.driftEnd - this.driftStart) * 1e3 / t : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var t;
    return (t = this.partList) != null && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    var t;
    return (t = this.fragments) != null && t.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var t;
    return (t = this.partList) != null && t.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get lastPartSn() {
    var t;
    return (t = this.partList) != null && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
}
function Ss(n) {
  return Uint8Array.from(atob(n), (t) => t.charCodeAt(0));
}
function hn(n) {
  const t = as(n).subarray(0, 16), e = new Uint8Array(16);
  return e.set(t, 16 - t.length), e;
}
function dn(n) {
  const t = function(e, s, r) {
    const i = e[s];
    e[s] = e[r], e[r] = i;
  };
  t(n, 0, 3), t(n, 1, 2), t(n, 4, 5), t(n, 6, 7);
}
function cn(n) {
  const t = n.split(":");
  let e = null;
  if (t[0] === "data" && t.length === 2) {
    const s = t[1].split(";"), r = s[s.length - 1].split(",");
    if (r.length === 2) {
      const i = r[0] === "base64", a = r[1];
      i ? (s.splice(-1, 1), e = Ss(a)) : e = hn(a);
    }
  }
  return e;
}
function as(n) {
  return Uint8Array.from(unescape(encodeURIComponent(n)), (t) => t.charCodeAt(0));
}
const Wt = typeof self < "u" ? self : void 0;
var X = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, dt = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function Ne(n) {
  switch (n) {
    case dt.FAIRPLAY:
      return X.FAIRPLAY;
    case dt.PLAYREADY:
      return X.PLAYREADY;
    case dt.WIDEVINE:
      return X.WIDEVINE;
    case dt.CLEARKEY:
      return X.CLEARKEY;
  }
}
var ee = {
  CENC: "1077efecc0b24d02ace33c1e52e2fb4b",
  CLEARKEY: "e2719d58a985b3c9781ab030af78d30e",
  PLAYREADY: "9a04f07998404286ab92e65be0885f95",
  WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
};
function Ue(n) {
  if (n === ee.WIDEVINE)
    return X.WIDEVINE;
  if (n === ee.PLAYREADY)
    return X.PLAYREADY;
  if (n === ee.CENC || n === ee.CLEARKEY)
    return X.CLEARKEY;
}
function Be(n) {
  switch (n) {
    case X.FAIRPLAY:
      return dt.FAIRPLAY;
    case X.PLAYREADY:
      return dt.PLAYREADY;
    case X.WIDEVINE:
      return dt.WIDEVINE;
    case X.CLEARKEY:
      return dt.CLEARKEY;
  }
}
function se(n) {
  const {
    drmSystems: t,
    widevineLicenseUrl: e
  } = n, s = t ? [X.FAIRPLAY, X.WIDEVINE, X.PLAYREADY, X.CLEARKEY].filter((r) => !!t[r]) : [];
  return !s[X.WIDEVINE] && e && s.push(X.WIDEVINE), s;
}
const Gr = function(n) {
  return Wt != null && (n = Wt.navigator) != null && n.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
}();
function un(n, t, e, s) {
  let r;
  switch (n) {
    case X.FAIRPLAY:
      r = ["cenc", "sinf"];
      break;
    case X.WIDEVINE:
    case X.PLAYREADY:
      r = ["cenc"];
      break;
    case X.CLEARKEY:
      r = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${n}`);
  }
  return fn(r, t, e, s);
}
function fn(n, t, e, s) {
  return [{
    initDataTypes: n,
    persistentState: s.persistentState || "optional",
    distinctiveIdentifier: s.distinctiveIdentifier || "optional",
    sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
    audioCapabilities: t.map((r) => ({
      contentType: `audio/mp4; codecs="${r}"`,
      robustness: s.audioRobustness || "",
      encryptionScheme: s.audioEncryptionScheme || null
    })),
    videoCapabilities: e.map((r) => ({
      contentType: `video/mp4; codecs="${r}"`,
      robustness: s.videoRobustness || "",
      encryptionScheme: s.videoEncryptionScheme || null
    }))
  }];
}
function Kr(n) {
  const t = new Uint16Array(n.buffer, n.byteOffset, n.byteLength / 2), e = String.fromCharCode.apply(null, Array.from(t)), s = e.substring(e.indexOf("<"), e.length), r = new DOMParser().parseFromString(s, "text/xml").getElementsByTagName("KID")[0];
  if (r) {
    const i = r.childNodes[0] ? r.childNodes[0].nodeValue : r.getAttribute("VALUE");
    if (i) {
      const a = Ss(i).subarray(0, 16);
      return dn(a), a;
    }
  }
  return null;
}
function Ft(n, t, e) {
  return Uint8Array.prototype.slice ? n.slice(t, e) : new Uint8Array(Array.prototype.slice.call(n, t, e));
}
const Ls = (n, t) => t + 10 <= n.length && n[t] === 73 && n[t + 1] === 68 && n[t + 2] === 51 && n[t + 3] < 255 && n[t + 4] < 255 && n[t + 6] < 128 && n[t + 7] < 128 && n[t + 8] < 128 && n[t + 9] < 128, Vr = (n, t) => t + 10 <= n.length && n[t] === 51 && n[t + 1] === 68 && n[t + 2] === 73 && n[t + 3] < 255 && n[t + 4] < 255 && n[t + 6] < 128 && n[t + 7] < 128 && n[t + 8] < 128 && n[t + 9] < 128, Qt = (n, t) => {
  const e = t;
  let s = 0;
  for (; Ls(n, t); ) {
    s += 10;
    const r = Oe(n, t + 6);
    s += r, Vr(n, t + 10) && (s += 10), t += s;
  }
  if (s > 0)
    return n.subarray(e, e + s);
}, Oe = (n, t) => {
  let e = 0;
  return e = (n[t] & 127) << 21, e |= (n[t + 1] & 127) << 14, e |= (n[t + 2] & 127) << 7, e |= n[t + 3] & 127, e;
}, gn = (n, t) => Ls(n, t) && Oe(n, t + 6) + 10 <= n.length - t, As = (n) => {
  const t = Yr(n);
  for (let e = 0; e < t.length; e++) {
    const s = t[e];
    if (Hr(s))
      return vn(s);
  }
}, Hr = (n) => n && n.key === "PRIV" && n.info === "com.apple.streaming.transportStreamTimestamp", mn = (n) => {
  const t = String.fromCharCode(n[0], n[1], n[2], n[3]), e = Oe(n, 4), s = 10;
  return {
    type: t,
    size: e,
    data: n.subarray(s, s + e)
  };
}, Yr = (n) => {
  let t = 0;
  const e = [];
  for (; Ls(n, t); ) {
    const s = Oe(n, t + 6);
    t += 10;
    const r = t + s;
    for (; t + 8 < r; ) {
      const i = mn(n.subarray(t)), a = pn(i);
      a && e.push(a), t += i.size + 10;
    }
    Vr(n, t) && (t += 10);
  }
  return e;
}, pn = (n) => n.type === "PRIV" ? En(n) : n.type[0] === "W" ? Tn(n) : yn(n), En = (n) => {
  if (n.size < 2)
    return;
  const t = Rt(n.data, !0), e = new Uint8Array(n.data.subarray(t.length + 1));
  return {
    key: n.type,
    info: t,
    data: e.buffer
  };
}, yn = (n) => {
  if (n.size < 2)
    return;
  if (n.type === "TXXX") {
    let e = 1;
    const s = Rt(n.data.subarray(e), !0);
    e += s.length + 1;
    const r = Rt(n.data.subarray(e));
    return {
      key: n.type,
      info: s,
      data: r
    };
  }
  const t = Rt(n.data.subarray(1));
  return {
    key: n.type,
    data: t
  };
}, Tn = (n) => {
  if (n.type === "WXXX") {
    if (n.size < 2)
      return;
    let e = 1;
    const s = Rt(n.data.subarray(e), !0);
    e += s.length + 1;
    const r = Rt(n.data.subarray(e));
    return {
      key: n.type,
      info: s,
      data: r
    };
  }
  const t = Rt(n.data);
  return {
    key: n.type,
    data: t
  };
}, vn = (n) => {
  if (n.data.byteLength === 8) {
    const t = new Uint8Array(n.data), e = t[3] & 1;
    let s = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
    return s /= 45, e && (s += 4772185884e-2), Math.round(s);
  }
}, Rt = (n, t = !1) => {
  const e = Sn();
  if (e) {
    const h = e.decode(n);
    if (t) {
      const d = h.indexOf("\0");
      return d !== -1 ? h.substring(0, d) : h;
    }
    return h.replace(/\0/g, "");
  }
  const s = n.length;
  let r, i, a, o = "", l = 0;
  for (; l < s; ) {
    if (r = n[l++], r === 0 && t)
      return o;
    if (!(r === 0 || r === 3))
      switch (r >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          o += String.fromCharCode(r);
          break;
        case 12:
        case 13:
          i = n[l++], o += String.fromCharCode((r & 31) << 6 | i & 63);
          break;
        case 14:
          i = n[l++], a = n[l++], o += String.fromCharCode((r & 15) << 12 | (i & 63) << 6 | (a & 63) << 0);
          break;
      }
  }
  return o;
};
let $e;
function Sn() {
  if (!navigator.userAgent.includes("PlayStation 4"))
    return !$e && typeof self.TextDecoder < "u" && ($e = new self.TextDecoder("utf-8")), $e;
}
const vt = {
  hexDump: function(n) {
    let t = "";
    for (let e = 0; e < n.length; e++) {
      let s = n[e].toString(16);
      s.length < 2 && (s = "0" + s), t += s;
    }
    return t;
  }
}, Le = Math.pow(2, 32) - 1, Ln = [].push, Wr = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function rt(n) {
  return String.fromCharCode.apply(null, n);
}
function jr(n, t) {
  const e = n[t] << 8 | n[t + 1];
  return e < 0 ? 65536 + e : e;
}
function U(n, t) {
  const e = qr(n, t);
  return e < 0 ? 4294967296 + e : e;
}
function $s(n, t) {
  let e = U(n, t);
  return e *= Math.pow(2, 32), e += U(n, t + 4), e;
}
function qr(n, t) {
  return n[t] << 24 | n[t + 1] << 16 | n[t + 2] << 8 | n[t + 3];
}
function Ge(n, t, e) {
  n[t] = e >> 24, n[t + 1] = e >> 16 & 255, n[t + 2] = e >> 8 & 255, n[t + 3] = e & 255;
}
function An(n) {
  const t = n.byteLength;
  for (let e = 0; e < t; ) {
    const s = U(n, e);
    if (s > 8 && n[e + 4] === 109 && n[e + 5] === 111 && n[e + 6] === 111 && n[e + 7] === 102)
      return !0;
    e = s > 1 ? e + s : t;
  }
  return !1;
}
function V(n, t) {
  const e = [];
  if (!t.length)
    return e;
  const s = n.byteLength;
  for (let r = 0; r < s; ) {
    const i = U(n, r), a = rt(n.subarray(r + 4, r + 8)), o = i > 1 ? r + i : s;
    if (a === t[0])
      if (t.length === 1)
        e.push(n.subarray(r + 8, o));
      else {
        const l = V(n.subarray(r + 8, o), t.slice(1));
        l.length && Ln.apply(e, l);
      }
    r = o;
  }
  return e;
}
function Rn(n) {
  const t = [], e = n[0];
  let s = 8;
  const r = U(n, s);
  s += 4;
  let i = 0, a = 0;
  e === 0 ? (i = U(n, s), a = U(n, s + 4), s += 8) : (i = $s(n, s), a = $s(n, s + 8), s += 16), s += 2;
  let o = n.length + a;
  const l = jr(n, s);
  s += 2;
  for (let h = 0; h < l; h++) {
    let d = s;
    const c = U(n, d);
    d += 4;
    const u = c & 2147483647;
    if ((c & 2147483648) >>> 31 === 1)
      return v.warn("SIDX has hierarchical references (not supported)"), null;
    const g = U(n, d);
    d += 4, t.push({
      referenceSize: u,
      subsegmentDuration: g,
      // unscaled
      info: {
        duration: g / r,
        start: o,
        end: o + u - 1
      }
    }), o += u, d += 4, s = d;
  }
  return {
    earliestPresentationTime: i,
    timescale: r,
    version: e,
    referencesCount: l,
    references: t
  };
}
function Xr(n) {
  const t = [], e = V(n, ["moov", "trak"]);
  for (let s = 0; s < e.length; s++) {
    const r = e[s], i = V(r, ["tkhd"])[0];
    if (i) {
      let a = i[0];
      const o = U(i, a === 0 ? 12 : 20), l = V(r, ["mdia", "mdhd"])[0];
      if (l) {
        a = l[0];
        const h = U(l, a === 0 ? 12 : 20), d = V(r, ["mdia", "hdlr"])[0];
        if (d) {
          const c = rt(d.subarray(8, 12)), u = {
            soun: z.AUDIO,
            vide: z.VIDEO
          }[c];
          if (u) {
            const g = V(r, ["mdia", "minf", "stbl", "stsd"])[0], f = Dn(g);
            t[o] = {
              timescale: h,
              type: u
            }, t[u] = at({
              timescale: h,
              id: o
            }, f);
          }
        }
      }
    }
  }
  return V(n, ["moov", "mvex", "trex"]).forEach((s) => {
    const r = U(s, 4), i = t[r];
    i && (i.default = {
      duration: U(s, 12),
      flags: U(s, 20)
    });
  }), t;
}
function Dn(n) {
  const t = n.subarray(8), e = t.subarray(86), s = rt(t.subarray(4, 8));
  let r = s;
  const i = s === "enca" || s === "encv";
  if (i) {
    const a = V(t, [s])[0].subarray(s === "enca" ? 28 : 78);
    V(a, ["sinf"]).forEach((o) => {
      const l = V(o, ["schm"])[0];
      if (l) {
        const h = rt(l.subarray(4, 8));
        if (h === "cbcs" || h === "cenc") {
          const d = V(o, ["frma"])[0];
          d && (r = rt(d));
        }
      }
    });
  }
  switch (r) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const a = V(e, ["avcC"])[0];
      r += "." + re(a[1]) + re(a[2]) + re(a[3]);
      break;
    }
    case "mp4a": {
      const a = V(t, [s])[0], o = V(a.subarray(28), ["esds"])[0];
      if (o && o.length > 12) {
        let l = 4;
        if (o[l++] !== 3)
          break;
        l = Ke(o, l), l += 2;
        const h = o[l++];
        if (h & 128 && (l += 2), h & 64 && (l += o[l++]), o[l++] !== 4)
          break;
        l = Ke(o, l);
        const d = o[l++];
        if (d === 64)
          r += "." + re(d);
        else
          break;
        if (l += 12, o[l++] !== 5)
          break;
        l = Ke(o, l);
        const c = o[l++];
        let u = (c & 248) >> 3;
        u === 31 && (u += 1 + ((c & 7) << 3) + ((o[l] & 224) >> 5)), r += "." + u;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const a = V(e, ["hvcC"])[0], o = a[1], l = ["", "A", "B", "C"][o >> 6], h = o & 31, d = U(a, 2), c = (o & 32) >> 5 ? "H" : "L", u = a[12], g = a.subarray(6, 12);
      r += "." + l + h, r += "." + d.toString(16).toUpperCase(), r += "." + c + u;
      let f = "";
      for (let m = g.length; m--; ) {
        const E = g[m];
        (E || f) && (f = "." + E.toString(16).toUpperCase() + f);
      }
      r += f;
      break;
    }
    case "dvh1":
    case "dvhe": {
      const a = V(e, ["dvcC"])[0], o = a[2] >> 1 & 127, l = a[2] << 5 & 32 | a[3] >> 3 & 31;
      r += "." + Tt(o) + "." + Tt(l);
      break;
    }
    case "vp09": {
      const a = V(e, ["vpcC"])[0], o = a[4], l = a[5], h = a[6] >> 4 & 15;
      r += "." + Tt(o) + "." + Tt(l) + "." + Tt(h);
      break;
    }
    case "av01": {
      const a = V(e, ["av1C"])[0], o = a[1] >>> 5, l = a[1] & 31, h = a[2] >>> 7 ? "H" : "M", d = (a[2] & 64) >> 6, c = (a[2] & 32) >> 5, u = o === 2 && d ? c ? 12 : 10 : d ? 10 : 8, g = (a[2] & 16) >> 4, f = (a[2] & 8) >> 3, m = (a[2] & 4) >> 2, E = a[2] & 3;
      r += "." + o + "." + Tt(l) + h + "." + Tt(u) + "." + g + "." + f + m + E + "." + Tt(1) + "." + Tt(1) + "." + Tt(1) + ".0";
      break;
    }
  }
  return {
    codec: r,
    encrypted: i
  };
}
function Ke(n, t) {
  const e = t + 5;
  for (; n[t++] & 128 && t < e; )
    ;
  return t;
}
function re(n) {
  return ("0" + n.toString(16).toUpperCase()).slice(-2);
}
function Tt(n) {
  return (n < 10 ? "0" : "") + n;
}
function In(n, t) {
  if (!n || !t)
    return n;
  const e = t.keyId;
  return e && t.isCommonEncryption && V(n, ["moov", "trak"]).forEach((s) => {
    const r = V(s, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
    let i = V(r, ["enca"]);
    const a = i.length > 0;
    a || (i = V(r, ["encv"])), i.forEach((o) => {
      const l = a ? o.subarray(28) : o.subarray(78);
      V(l, ["sinf"]).forEach((h) => {
        const d = zr(h);
        if (d) {
          const c = d.subarray(8, 24);
          c.some((u) => u !== 0) || (v.log(`[eme] Patching keyId in 'enc${a ? "a" : "v"}>sinf>>tenc' box: ${vt.hexDump(c)} -> ${vt.hexDump(e)}`), d.set(e, 8));
        }
      });
    });
  }), n;
}
function zr(n) {
  const t = V(n, ["schm"])[0];
  if (t) {
    const e = rt(t.subarray(4, 8));
    if (e === "cbcs" || e === "cenc")
      return V(n, ["schi", "tenc"])[0];
  }
  return null;
}
function bn(n, t) {
  return V(t, ["moof", "traf"]).reduce((e, s) => {
    const r = V(s, ["tfdt"])[0], i = r[0], a = V(s, ["tfhd"]).reduce((o, l) => {
      const h = U(l, 4), d = n[h];
      if (d) {
        let c = U(r, 4);
        if (i === 1) {
          if (c === Le)
            return v.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), o;
          c *= Le + 1, c += U(r, 8);
        }
        const u = d.timescale || 9e4, g = c / u;
        if (F(g) && (o === null || g < o))
          return g;
      }
      return o;
    }, null);
    return a !== null && F(a) && (e === null || a < e) ? a : e;
  }, null);
}
function kn(n, t) {
  let e = 0, s = 0, r = 0;
  const i = V(n, ["moof", "traf"]);
  for (let a = 0; a < i.length; a++) {
    const o = i[a], l = V(o, ["tfhd"])[0], h = U(l, 4), d = t[h];
    if (!d)
      continue;
    const c = d.default, u = U(l, 0) | (c == null ? void 0 : c.flags);
    let g = c == null ? void 0 : c.duration;
    u & 8 && (u & 2 ? g = U(l, 12) : g = U(l, 8));
    const f = d.timescale || 9e4, m = V(o, ["trun"]);
    for (let E = 0; E < m.length; E++) {
      if (e = Cn(m[E]), !e && g) {
        const y = U(m[E], 4);
        e = g * y;
      }
      d.type === z.VIDEO ? s += e / f : d.type === z.AUDIO && (r += e / f);
    }
  }
  if (s === 0 && r === 0) {
    let a = 1 / 0, o = 0, l = 0;
    const h = V(n, ["sidx"]);
    for (let d = 0; d < h.length; d++) {
      const c = Rn(h[d]);
      if (c != null && c.references) {
        a = Math.min(a, c.earliestPresentationTime / c.timescale);
        const u = c.references.reduce((g, f) => g + f.info.duration || 0, 0);
        o = Math.max(o, u + c.earliestPresentationTime / c.timescale), l = o - a;
      }
    }
    if (l && F(l))
      return l;
  }
  return s || r;
}
function Cn(n) {
  const t = U(n, 0);
  let e = 8;
  t & 1 && (e += 4), t & 4 && (e += 4);
  let s = 0;
  const r = U(n, 4);
  for (let i = 0; i < r; i++) {
    if (t & 256) {
      const a = U(n, e);
      s += a, e += 4;
    }
    t & 512 && (e += 4), t & 1024 && (e += 4), t & 2048 && (e += 4);
  }
  return s;
}
function wn(n, t, e) {
  V(t, ["moof", "traf"]).forEach((s) => {
    V(s, ["tfhd"]).forEach((r) => {
      const i = U(r, 4), a = n[i];
      if (!a)
        return;
      const o = a.timescale || 9e4;
      V(s, ["tfdt"]).forEach((l) => {
        const h = l[0], d = e * o;
        if (d) {
          let c = U(l, 4);
          if (h === 0)
            c -= d, c = Math.max(c, 0), Ge(l, 4, c);
          else {
            c *= Math.pow(2, 32), c += U(l, 8), c -= d, c = Math.max(c, 0);
            const u = Math.floor(c / (Le + 1)), g = Math.floor(c % (Le + 1));
            Ge(l, 4, u), Ge(l, 8, g);
          }
        }
      });
    });
  });
}
function Pn(n) {
  const t = {
    valid: null,
    remainder: null
  }, e = V(n, ["moof"]);
  if (e.length < 2)
    return t.remainder = n, t;
  const s = e[e.length - 1];
  return t.valid = Ft(n, 0, s.byteOffset - 8), t.remainder = Ft(n, s.byteOffset - 8), t;
}
function gt(n, t) {
  const e = new Uint8Array(n.length + t.length);
  return e.set(n), e.set(t, n.length), e;
}
function Gs(n, t) {
  const e = [], s = t.samples, r = t.timescale, i = t.id;
  let a = !1;
  return V(s, ["moof"]).map((o) => {
    const l = o.byteOffset - 8;
    V(o, ["traf"]).map((h) => {
      const d = V(h, ["tfdt"]).map((c) => {
        const u = c[0];
        let g = U(c, 4);
        return u === 1 && (g *= Math.pow(2, 32), g += U(c, 8)), g / r;
      })[0];
      return d !== void 0 && (n = d), V(h, ["tfhd"]).map((c) => {
        const u = U(c, 4), g = U(c, 0) & 16777215, f = (g & 1) !== 0, m = (g & 2) !== 0, E = (g & 8) !== 0;
        let y = 0;
        const T = (g & 16) !== 0;
        let A = 0;
        const R = (g & 32) !== 0;
        let S = 8;
        u === i && (f && (S += 8), m && (S += 4), E && (y = U(c, S), S += 4), T && (A = U(c, S), S += 4), R && (S += 4), t.type === "video" && (a = xn(t.codec)), V(h, ["trun"]).map((I) => {
          const b = I[0], x = U(I, 0) & 16777215, O = (x & 1) !== 0;
          let C = 0;
          const w = (x & 4) !== 0, j = (x & 256) !== 0;
          let _ = 0;
          const H = (x & 512) !== 0;
          let N = 0;
          const G = (x & 1024) !== 0, P = (x & 2048) !== 0;
          let M = 0;
          const q = U(I, 4);
          let K = 8;
          O && (C = U(I, K), K += 4), w && (K += 4);
          let Y = C + l;
          for (let Z = 0; Z < q; Z++) {
            if (j ? (_ = U(I, K), K += 4) : _ = y, H ? (N = U(I, K), K += 4) : N = A, G && (K += 4), P && (b === 0 ? M = U(I, K) : M = qr(I, K), K += 4), t.type === z.VIDEO) {
              let et = 0;
              for (; et < N; ) {
                const st = U(s, Y);
                if (Y += 4, _n(a, s[Y])) {
                  const ct = s.subarray(Y, Y + st);
                  Qr(ct, a ? 2 : 1, n + M / r, e);
                }
                Y += st, et += st + 4;
              }
            }
            n += _ / r;
          }
        }));
      });
    });
  }), e;
}
function xn(n) {
  if (!n)
    return !1;
  const t = n.indexOf("."), e = t < 0 ? n : n.substring(0, t);
  return e === "hvc1" || e === "hev1" || // Dolby Vision
  e === "dvh1" || e === "dvhe";
}
function _n(n, t) {
  if (n) {
    const e = t >> 1 & 63;
    return e === 39 || e === 40;
  } else
    return (t & 31) === 6;
}
function Qr(n, t, e, s) {
  const r = Jr(n);
  let i = 0;
  i += t;
  let a = 0, o = 0, l = 0;
  for (; i < r.length; ) {
    a = 0;
    do {
      if (i >= r.length)
        break;
      l = r[i++], a += l;
    } while (l === 255);
    o = 0;
    do {
      if (i >= r.length)
        break;
      l = r[i++], o += l;
    } while (l === 255);
    const h = r.length - i;
    let d = i;
    if (o < h)
      i += o;
    else if (o > h) {
      v.error(`Malformed SEI payload. ${o} is too small, only ${h} bytes left to parse.`);
      break;
    }
    if (a === 4) {
      if (r[d++] === 181) {
        const c = jr(r, d);
        if (d += 2, c === 49) {
          const u = U(r, d);
          if (d += 4, u === 1195456820) {
            const g = r[d++];
            if (g === 3) {
              const f = r[d++], m = 31 & f, E = 64 & f, y = E ? 2 + m * 3 : 0, T = new Uint8Array(y);
              if (E) {
                T[0] = f;
                for (let A = 1; A < y; A++)
                  T[A] = r[d++];
              }
              s.push({
                type: g,
                payloadType: a,
                pts: e,
                bytes: T
              });
            }
          }
        }
      }
    } else if (a === 5 && o > 16) {
      const c = [];
      for (let f = 0; f < 16; f++) {
        const m = r[d++].toString(16);
        c.push(m.length == 1 ? "0" + m : m), (f === 3 || f === 5 || f === 7 || f === 9) && c.push("-");
      }
      const u = o - 16, g = new Uint8Array(u);
      for (let f = 0; f < u; f++)
        g[f] = r[d++];
      s.push({
        payloadType: a,
        pts: e,
        uuid: c.join(""),
        userData: Rt(g),
        userDataBytes: g
      });
    }
  }
}
function Jr(n) {
  const t = n.byteLength, e = [];
  let s = 1;
  for (; s < t - 2; )
    n[s] === 0 && n[s + 1] === 0 && n[s + 2] === 3 ? (e.push(s + 2), s += 2) : s++;
  if (e.length === 0)
    return n;
  const r = t - e.length, i = new Uint8Array(r);
  let a = 0;
  for (s = 0; s < r; a++, s++)
    a === e[0] && (a++, e.shift()), i[s] = n[a];
  return i;
}
function On(n) {
  const t = n[0];
  let e = "", s = "", r = 0, i = 0, a = 0, o = 0, l = 0, h = 0;
  if (t === 0) {
    for (; rt(n.subarray(h, h + 1)) !== "\0"; )
      e += rt(n.subarray(h, h + 1)), h += 1;
    for (e += rt(n.subarray(h, h + 1)), h += 1; rt(n.subarray(h, h + 1)) !== "\0"; )
      s += rt(n.subarray(h, h + 1)), h += 1;
    s += rt(n.subarray(h, h + 1)), h += 1, r = U(n, 12), i = U(n, 16), o = U(n, 20), l = U(n, 24), h = 28;
  } else if (t === 1) {
    h += 4, r = U(n, h), h += 4;
    const c = U(n, h);
    h += 4;
    const u = U(n, h);
    for (h += 4, a = 2 ** 32 * c + u, Qi(a) || (a = Number.MAX_SAFE_INTEGER, v.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = U(n, h), h += 4, l = U(n, h), h += 4; rt(n.subarray(h, h + 1)) !== "\0"; )
      e += rt(n.subarray(h, h + 1)), h += 1;
    for (e += rt(n.subarray(h, h + 1)), h += 1; rt(n.subarray(h, h + 1)) !== "\0"; )
      s += rt(n.subarray(h, h + 1)), h += 1;
    s += rt(n.subarray(h, h + 1)), h += 1;
  }
  const d = n.subarray(h, n.byteLength);
  return {
    schemeIdUri: e,
    value: s,
    timeScale: r,
    presentationTime: a,
    presentationTimeDelta: i,
    eventDuration: o,
    id: l,
    payload: d
  };
}
function Mn(n, ...t) {
  const e = t.length;
  let s = 8, r = e;
  for (; r--; )
    s += t[r].byteLength;
  const i = new Uint8Array(s);
  for (i[0] = s >> 24 & 255, i[1] = s >> 16 & 255, i[2] = s >> 8 & 255, i[3] = s & 255, i.set(n, 4), r = 0, s = 8; r < e; r++)
    i.set(t[r], s), s += t[r].byteLength;
  return i;
}
function Fn(n, t, e) {
  if (n.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let s, r;
  s = 0, r = new Uint8Array();
  let i;
  s > 0 ? (i = new Uint8Array(4), t.length > 0 && new DataView(i.buffer).setUint32(0, t.length, !1)) : i = new Uint8Array();
  const a = new Uint8Array(4);
  return e && e.byteLength > 0 && new DataView(a.buffer).setUint32(0, e.byteLength, !1), Mn(
    [112, 115, 115, 104],
    new Uint8Array([
      s,
      0,
      0,
      0
      // Flags
    ]),
    n,
    // 16 bytes
    i,
    r,
    a,
    e || new Uint8Array()
  );
}
function Nn(n) {
  const t = [];
  if (n instanceof ArrayBuffer) {
    const e = n.byteLength;
    let s = 0;
    for (; s + 32 < e; ) {
      const r = new DataView(n, s), i = Un(r);
      t.push(i), s += i.size;
    }
  }
  return t;
}
function Un(n) {
  const t = n.getUint32(0), e = n.byteOffset, s = n.byteLength;
  if (s < t)
    return {
      offset: e,
      size: s
    };
  if (n.getUint32(4) !== 1886614376)
    return {
      offset: e,
      size: t
    };
  const r = n.getUint32(8) >>> 24;
  if (r !== 0 && r !== 1)
    return {
      offset: e,
      size: t
    };
  const i = n.buffer, a = vt.hexDump(new Uint8Array(i, e + 12, 16)), o = n.getUint32(28);
  let l = null, h = null;
  if (r === 0) {
    if (t - 32 < o || o < 22)
      return {
        offset: e,
        size: t
      };
    h = new Uint8Array(i, e + 32, o);
  } else if (r === 1) {
    if (!o || s < e + 32 + o * 16 + 16)
      return {
        offset: e,
        size: t
      };
    l = [];
    for (let d = 0; d < o; d++)
      l.push(new Uint8Array(i, e + 32 + d * 16, 16));
  }
  return {
    version: r,
    systemId: a,
    kids: l,
    data: h,
    offset: e,
    size: t
  };
}
let ie = {};
class Jt {
  static clearKeyUriToKeyIdMap() {
    ie = {};
  }
  constructor(t, e, s, r = [1], i = null) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = t, this.uri = e, this.keyFormat = s, this.keyFormatVersions = r, this.iv = i, this.encrypted = t ? t !== "NONE" : !1, this.isCommonEncryption = this.encrypted && t !== "AES-128";
  }
  isSupported() {
    if (this.method) {
      if (this.method === "AES-128" || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case dt.FAIRPLAY:
        case dt.WIDEVINE:
        case dt.PLAYREADY:
        case dt.CLEARKEY:
          return ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(t) {
    if (!this.encrypted || !this.uri)
      return null;
    if (this.method === "AES-128" && this.uri && !this.iv) {
      typeof t != "number" && (this.method === "AES-128" && !this.iv && v.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), t = 0);
      const s = Bn(t);
      return new Jt(this.method, this.uri, "identity", this.keyFormatVersions, s);
    }
    const e = cn(this.uri);
    if (e)
      switch (this.keyFormat) {
        case dt.WIDEVINE:
          this.pssh = e, e.length >= 22 && (this.keyId = e.subarray(e.length - 22, e.length - 6));
          break;
        case dt.PLAYREADY: {
          const s = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = Fn(s, null, e), this.keyId = Kr(e);
          break;
        }
        default: {
          let s = e.subarray(0, 16);
          if (s.length !== 16) {
            const r = new Uint8Array(16);
            r.set(s, 16 - s.length), s = r;
          }
          this.keyId = s;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let s = ie[this.uri];
      if (!s) {
        const r = Object.keys(ie).length % Number.MAX_SAFE_INTEGER;
        s = new Uint8Array(16), new DataView(s.buffer, 12, 4).setUint32(0, r), ie[this.uri] = s;
      }
      this.keyId = s;
    }
    return this;
  }
}
function Bn(n) {
  const t = new Uint8Array(16);
  for (let e = 12; e < 16; e++)
    t[e] = n >> 8 * (15 - e) & 255;
  return t;
}
const Zr = /\{\$([a-zA-Z0-9-_]+)\}/g;
function Ks(n) {
  return Zr.test(n);
}
function ht(n, t, e) {
  if (n.variableList !== null || n.hasVariableRefs)
    for (let s = e.length; s--; ) {
      const r = e[s], i = t[r];
      i && (t[r] = os(n, i));
    }
}
function os(n, t) {
  if (n.variableList !== null || n.hasVariableRefs) {
    const e = n.variableList;
    return t.replace(Zr, (s) => {
      const r = s.substring(2, s.length - 1), i = e == null ? void 0 : e[r];
      return i === void 0 ? (n.playlistParsingError || (n.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${r}"`)), s) : i;
    });
  }
  return t;
}
function Vs(n, t, e) {
  let s = n.variableList;
  s || (n.variableList = s = {});
  let r, i;
  if ("QUERYPARAM" in t) {
    r = t.QUERYPARAM;
    try {
      const a = new self.URL(e).searchParams;
      if (a.has(r))
        i = a.get(r);
      else
        throw new Error(`"${r}" does not match any query parameter in URI: "${e}"`);
    } catch (a) {
      n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`));
    }
  } else
    r = t.NAME, i = t.VALUE;
  r in s ? n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${r}"`)) : s[r] = i || "";
}
function $n(n, t, e) {
  const s = t.IMPORT;
  if (e && s in e) {
    let r = n.variableList;
    r || (n.variableList = r = {}), r[s] = e[s];
  } else
    n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`));
}
function Ut(n = !0) {
  return typeof self > "u" ? void 0 : (n || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function Gn(n) {
  return typeof self < "u" && n === self.ManagedMediaSource;
}
const Ae = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function Kn(n, t) {
  const e = Ae[t];
  return !!e && !!e[n.slice(0, 4)];
}
function Ve(n, t, e = !0) {
  return !n.split(",").some((s) => !ti(s, t, e));
}
function ti(n, t, e = !0) {
  var s;
  const r = Ut(e);
  return (s = r == null ? void 0 : r.isTypeSupported(Zt(n, t))) != null ? s : !1;
}
function Zt(n, t) {
  return `${t}/mp4;codecs="${n}"`;
}
function Hs(n) {
  if (n) {
    const t = n.substring(0, 4);
    return Ae.video[t];
  }
  return 2;
}
function Re(n) {
  return n.split(",").reduce((t, e) => {
    const s = Ae.video[e];
    return s ? (s * 2 + t) / (t ? 3 : 2) : (Ae.audio[e] + t) / (t ? 2 : 1);
  }, 0);
}
const He = {};
function Vn(n, t = !0) {
  if (He[n])
    return He[n];
  const e = {
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"]
  }[n];
  for (let s = 0; s < e.length; s++)
    if (ti(e[s], "audio", t))
      return He[n] = e[s], e[s];
  return n;
}
const Hn = /flac|opus/i;
function De(n, t = !0) {
  return n.replace(Hn, (e) => Vn(e.toLowerCase(), t));
}
function Ys(n, t) {
  return n && n !== "mp4a" ? n : t && t.split(",")[0];
}
function Yn(n) {
  const t = n.split(",");
  for (let e = 0; e < t.length; e++) {
    const s = t[e].split(".");
    if (s.length > 2) {
      let r = s.shift() + ".";
      r += parseInt(s.shift()).toString(16), r += ("000" + parseInt(s.shift()).toString(16)).slice(-4), t[e] = r;
    }
  }
  return t.join(",");
}
const Ws = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, js = /#EXT-X-MEDIA:(.*)/g, Wn = /^#EXT(?:INF|-X-TARGETDURATION):/m, qs = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#EXT-X-BYTERANGE:*(.+)/.source,
  // next segment's byterange, group 4 => range spec (x@y)
  /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
  // next segment's program date/time group 5 => the datetime spec
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), jn = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class Lt {
  static findGroup(t, e) {
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      if (r.id === e)
        return r;
    }
  }
  static resolve(t, e) {
    return vs.buildAbsoluteURL(e, t, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(t) {
    return Wn.test(t);
  }
  static parseMasterPlaylist(t, e) {
    const s = Ks(t), r = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: s
    }, i = [];
    Ws.lastIndex = 0;
    let a;
    for (; (a = Ws.exec(t)) != null; )
      if (a[1]) {
        var o;
        const h = new J(a[1]);
        ht(r, h, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
        const d = os(r, a[2]), c = {
          attrs: h,
          bitrate: h.decimalInteger("BANDWIDTH") || h.decimalInteger("AVERAGE-BANDWIDTH"),
          name: h.NAME,
          url: Lt.resolve(d, e)
        }, u = h.decimalResolution("RESOLUTION");
        u && (c.width = u.width, c.height = u.height), qn(h.CODECS, c), (o = c.unknownCodecs) != null && o.length || i.push(c), r.levels.push(c);
      } else if (a[3]) {
        const h = a[3], d = a[4];
        switch (h) {
          case "SESSION-DATA": {
            const c = new J(d);
            ht(r, c, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
            const u = c["DATA-ID"];
            u && (r.sessionData === null && (r.sessionData = {}), r.sessionData[u] = c);
            break;
          }
          case "SESSION-KEY": {
            const c = Xs(d, e, r);
            c.encrypted && c.isSupported() ? (r.sessionKeys === null && (r.sessionKeys = []), r.sessionKeys.push(c)) : v.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${d}"`);
            break;
          }
          case "DEFINE": {
            {
              const c = new J(d);
              ht(r, c, ["NAME", "VALUE", "QUERYPARAM"]), Vs(r, c, e);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const c = new J(d);
            ht(r, c, ["SERVER-URI", "PATHWAY-ID"]), r.contentSteering = {
              uri: Lt.resolve(c["SERVER-URI"], e),
              pathwayId: c["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            r.startTimeOffset = zs(d);
            break;
          }
        }
      }
    const l = i.length > 0 && i.length < r.levels.length;
    return r.levels = l ? i : r.levels, r.levels.length === 0 && (r.playlistParsingError = new Error("no levels found in manifest")), r;
  }
  static parseMasterPlaylistMedia(t, e, s) {
    let r;
    const i = {}, a = s.levels, o = {
      AUDIO: a.map((h) => ({
        id: h.attrs.AUDIO,
        audioCodec: h.audioCodec
      })),
      SUBTITLES: a.map((h) => ({
        id: h.attrs.SUBTITLES,
        textCodec: h.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let l = 0;
    for (js.lastIndex = 0; (r = js.exec(t)) !== null; ) {
      const h = new J(r[1]), d = h.TYPE;
      if (d) {
        const c = o[d], u = i[d] || [];
        i[d] = u, ht(s, h, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
        const g = h.LANGUAGE, f = h["ASSOC-LANGUAGE"], m = h.CHANNELS, E = h.CHARACTERISTICS, y = h["INSTREAM-ID"], T = {
          attrs: h,
          bitrate: 0,
          id: l++,
          groupId: h["GROUP-ID"] || "",
          name: h.NAME || g || "",
          type: d,
          default: h.bool("DEFAULT"),
          autoselect: h.bool("AUTOSELECT"),
          forced: h.bool("FORCED"),
          lang: g,
          url: h.URI ? Lt.resolve(h.URI, e) : ""
        };
        if (f && (T.assocLang = f), m && (T.channels = m), E && (T.characteristics = E), y && (T.instreamId = y), c != null && c.length) {
          const A = Lt.findGroup(c, T.groupId) || c[0];
          Qs(T, A, "audioCodec"), Qs(T, A, "textCodec");
        }
        u.push(T);
      }
    }
    return i;
  }
  static parseLevelPlaylist(t, e, s, r, i, a) {
    const o = new ln(e), l = o.fragments;
    let h = null, d = 0, c = 0, u = 0, g = 0, f = null, m = new Fe(r, e), E, y, T, A = -1, R = !1, S = null;
    for (qs.lastIndex = 0, o.m3u8 = t, o.hasVariableRefs = Ks(t); (E = qs.exec(t)) !== null; ) {
      R && (R = !1, m = new Fe(r, e), m.start = u, m.sn = d, m.cc = g, m.level = s, h && (m.initSegment = h, m.rawProgramDateTime = h.rawProgramDateTime, h.rawProgramDateTime = null, S && (m.setByteRange(S), S = null)));
      const O = E[1];
      if (O) {
        m.duration = parseFloat(O);
        const C = (" " + E[2]).slice(1);
        m.title = C || null, m.tagList.push(C ? ["INF", O, C] : ["INF", O]);
      } else if (E[3]) {
        if (F(m.duration)) {
          m.start = u, T && tr(m, T, o), m.sn = d, m.level = s, m.cc = g, l.push(m);
          const C = (" " + E[3]).slice(1);
          m.relurl = os(o, C), Js(m, f), f = m, u += m.duration, d++, c = 0, R = !0;
        }
      } else if (E[4]) {
        const C = (" " + E[4]).slice(1);
        f ? m.setByteRange(C, f) : m.setByteRange(C);
      } else if (E[5])
        m.rawProgramDateTime = (" " + E[5]).slice(1), m.tagList.push(["PROGRAM-DATE-TIME", m.rawProgramDateTime]), A === -1 && (A = l.length);
      else {
        if (E = E[0].match(jn), !E) {
          v.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (y = 1; y < E.length && !(typeof E[y] < "u"); y++)
          ;
        const C = (" " + E[y]).slice(1), w = (" " + E[y + 1]).slice(1), j = E[y + 2] ? (" " + E[y + 2]).slice(1) : "";
        switch (C) {
          case "PLAYLIST-TYPE":
            o.type = w.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            d = o.startSN = parseInt(w);
            break;
          case "SKIP": {
            const _ = new J(w);
            ht(o, _, ["RECENTLY-REMOVED-DATERANGES"]);
            const H = _.decimalInteger("SKIPPED-SEGMENTS");
            if (F(H)) {
              o.skippedSegments = H;
              for (let G = H; G--; )
                l.unshift(null);
              d += H;
            }
            const N = _.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            N && (o.recentlyRemovedDateranges = N.split("	"));
            break;
          }
          case "TARGETDURATION":
            o.targetduration = Math.max(parseInt(w), 1);
            break;
          case "VERSION":
            o.version = parseInt(w);
            break;
          case "INDEPENDENT-SEGMENTS":
          case "EXTM3U":
            break;
          case "ENDLIST":
            o.live = !1;
            break;
          case "#":
            (w || j) && m.tagList.push(j ? [w, j] : [w]);
            break;
          case "DISCONTINUITY":
            g++, m.tagList.push(["DIS"]);
            break;
          case "GAP":
            m.gap = !0, m.tagList.push([C]);
            break;
          case "BITRATE":
            m.tagList.push([C, w]);
            break;
          case "DATERANGE": {
            const _ = new J(w);
            ht(o, _, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), ht(o, _, _.clientAttrs);
            const H = new Br(_, o.dateRanges[_.ID]);
            H.isValid || o.skippedSegments ? o.dateRanges[H.id] = H : v.warn(`Ignoring invalid DATERANGE tag: "${w}"`), m.tagList.push(["EXT-X-DATERANGE", w]);
            break;
          }
          case "DEFINE": {
            {
              const _ = new J(w);
              ht(o, _, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in _ ? $n(o, _, a) : Vs(o, _, e);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            g = parseInt(w);
            break;
          case "KEY": {
            const _ = Xs(w, e, o);
            if (_.isSupported()) {
              if (_.method === "NONE") {
                T = void 0;
                break;
              }
              T || (T = {}), T[_.keyFormat] && (T = tt({}, T)), T[_.keyFormat] = _;
            } else
              v.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${w}"`);
            break;
          }
          case "START":
            o.startTimeOffset = zs(w);
            break;
          case "MAP": {
            const _ = new J(w);
            if (ht(o, _, ["BYTERANGE", "URI"]), m.duration) {
              const H = new Fe(r, e);
              Zs(H, _, s, T), h = H, m.initSegment = h, h.rawProgramDateTime && !m.rawProgramDateTime && (m.rawProgramDateTime = h.rawProgramDateTime);
            } else {
              const H = m.byteRangeEndOffset;
              if (H) {
                const N = m.byteRangeStartOffset;
                S = `${H - N}@${N}`;
              } else
                S = null;
              Zs(m, _, s, T), h = m, R = !0;
            }
            break;
          }
          case "SERVER-CONTROL": {
            const _ = new J(w);
            o.canBlockReload = _.bool("CAN-BLOCK-RELOAD"), o.canSkipUntil = _.optionalFloat("CAN-SKIP-UNTIL", 0), o.canSkipDateRanges = o.canSkipUntil > 0 && _.bool("CAN-SKIP-DATERANGES"), o.partHoldBack = _.optionalFloat("PART-HOLD-BACK", 0), o.holdBack = _.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            const _ = new J(w);
            o.partTarget = _.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let _ = o.partList;
            _ || (_ = o.partList = []);
            const H = c > 0 ? _[_.length - 1] : void 0, N = c++, G = new J(w);
            ht(o, G, ["BYTERANGE", "URI"]);
            const P = new an(G, m, e, N, H);
            _.push(P), m.duration += P.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const _ = new J(w);
            ht(o, _, ["URI"]), o.preloadHint = _;
            break;
          }
          case "RENDITION-REPORT": {
            const _ = new J(w);
            ht(o, _, ["URI"]), o.renditionReports = o.renditionReports || [], o.renditionReports.push(_);
            break;
          }
          default:
            v.warn(`line parsed but not handled: ${E}`);
            break;
        }
      }
    }
    f && !f.relurl ? (l.pop(), u -= f.duration, o.partList && (o.fragmentHint = f)) : o.partList && (Js(m, f), m.cc = g, o.fragmentHint = m, T && tr(m, T, o));
    const I = l.length, b = l[0], x = l[I - 1];
    if (u += o.skippedSegments * o.targetduration, u > 0 && I && x) {
      o.averagetargetduration = u / I;
      const O = x.sn;
      o.endSN = O !== "initSegment" ? O : 0, o.live || (x.endList = !0), b && (o.startCC = b.cc);
    } else
      o.endSN = 0, o.startCC = 0;
    return o.fragmentHint && (u += o.fragmentHint.duration), o.totalduration = u, o.endCC = g, A > 0 && Xn(l, A), o;
  }
}
function Xs(n, t, e) {
  var s, r;
  const i = new J(n);
  ht(e, i, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
  const a = (s = i.METHOD) != null ? s : "", o = i.URI, l = i.hexadecimalInteger("IV"), h = i.KEYFORMATVERSIONS, d = (r = i.KEYFORMAT) != null ? r : "identity";
  o && i.IV && !l && v.error(`Invalid IV: ${i.IV}`);
  const c = o ? Lt.resolve(o, t) : "", u = (h || "1").split("/").map(Number).filter(Number.isFinite);
  return new Jt(a, c, d, u, l);
}
function zs(n) {
  const t = new J(n).decimalFloatingPoint("TIME-OFFSET");
  return F(t) ? t : null;
}
function qn(n, t) {
  let e = (n || "").split(/[ ,]+/).filter((s) => s);
  ["video", "audio", "text"].forEach((s) => {
    const r = e.filter((i) => Kn(i, s));
    r.length && (t[`${s}Codec`] = r.join(","), e = e.filter((i) => r.indexOf(i) === -1));
  }), t.unknownCodecs = e;
}
function Qs(n, t, e) {
  const s = t[e];
  s && (n[e] = s);
}
function Xn(n, t) {
  let e = n[t];
  for (let s = t; s--; ) {
    const r = n[s];
    if (!r)
      return;
    r.programDateTime = e.programDateTime - r.duration * 1e3, e = r;
  }
}
function Js(n, t) {
  n.rawProgramDateTime ? n.programDateTime = Date.parse(n.rawProgramDateTime) : t != null && t.programDateTime && (n.programDateTime = t.endProgramDateTime), F(n.programDateTime) || (n.programDateTime = null, n.rawProgramDateTime = null);
}
function Zs(n, t, e, s) {
  n.relurl = t.URI, t.BYTERANGE && n.setByteRange(t.BYTERANGE), n.level = e, n.sn = "initSegment", s && (n.levelkeys = s), n.initSegment = null;
}
function tr(n, t, e) {
  n.levelkeys = t;
  const {
    encryptedFragments: s
  } = e;
  (!s.length || s[s.length - 1].levelkeys !== t) && Object.keys(t).some((r) => t[r].isCommonEncryption) && s.push(n);
}
var W = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, B = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
function er(n) {
  const {
    type: t
  } = n;
  switch (t) {
    case W.AUDIO_TRACK:
      return B.AUDIO;
    case W.SUBTITLE_TRACK:
      return B.SUBTITLE;
    default:
      return B.MAIN;
  }
}
function Ye(n, t) {
  let e = n.url;
  return (e === void 0 || e.indexOf("data:") === 0) && (e = t.url), e;
}
class zn {
  constructor(t) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = t, this.registerListeners();
  }
  startLoad(t) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.LEVEL_LOADING, this.onLevelLoading, this), t.on(p.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(p.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.LEVEL_LOADING, this.onLevelLoading, this), t.off(p.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(p.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(t) {
    const e = this.hls.config, s = e.pLoader, r = e.loader, i = s || r, a = new i(e);
    return this.loaders[t.type] = a, a;
  }
  getInternalLoader(t) {
    return this.loaders[t.type];
  }
  resetInternalLoader(t) {
    this.loaders[t] && delete this.loaders[t];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const t in this.loaders) {
      const e = this.loaders[t];
      e && e.destroy(), this.resetInternalLoader(t);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(t, e) {
    const {
      url: s
    } = e;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: W.MANIFEST,
      url: s,
      deliveryDirectives: null
    });
  }
  onLevelLoading(t, e) {
    const {
      id: s,
      level: r,
      pathwayId: i,
      url: a,
      deliveryDirectives: o
    } = e;
    this.load({
      id: s,
      level: r,
      pathwayId: i,
      responseType: "text",
      type: W.LEVEL,
      url: a,
      deliveryDirectives: o
    });
  }
  onAudioTrackLoading(t, e) {
    const {
      id: s,
      groupId: r,
      url: i,
      deliveryDirectives: a
    } = e;
    this.load({
      id: s,
      groupId: r,
      level: null,
      responseType: "text",
      type: W.AUDIO_TRACK,
      url: i,
      deliveryDirectives: a
    });
  }
  onSubtitleTrackLoading(t, e) {
    const {
      id: s,
      groupId: r,
      url: i,
      deliveryDirectives: a
    } = e;
    this.load({
      id: s,
      groupId: r,
      level: null,
      responseType: "text",
      type: W.SUBTITLE_TRACK,
      url: i,
      deliveryDirectives: a
    });
  }
  load(t) {
    var e;
    const s = this.hls.config;
    let r = this.getInternalLoader(t);
    if (r) {
      const h = r.context;
      if (h && h.url === t.url && h.level === t.level) {
        v.trace("[playlist-loader]: playlist request ongoing");
        return;
      }
      v.log(`[playlist-loader]: aborting previous loader for type: ${t.type}`), r.abort();
    }
    let i;
    if (t.type === W.MANIFEST ? i = s.manifestLoadPolicy.default : i = tt({}, s.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), r = this.createInternalLoader(t), F((e = t.deliveryDirectives) == null ? void 0 : e.part)) {
      let h;
      if (t.type === W.LEVEL && t.level !== null ? h = this.hls.levels[t.level].details : t.type === W.AUDIO_TRACK && t.id !== null ? h = this.hls.audioTracks[t.id].details : t.type === W.SUBTITLE_TRACK && t.id !== null && (h = this.hls.subtitleTracks[t.id].details), h) {
        const d = h.partTarget, c = h.targetduration;
        if (d && c) {
          const u = Math.max(d * 3, c * 0.8) * 1e3;
          i = tt({}, i, {
            maxTimeToFirstByteMs: Math.min(u, i.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(u, i.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const a = i.errorRetry || i.timeoutRetry || {}, o = {
      loadPolicy: i,
      timeout: i.maxLoadTimeMs,
      maxRetry: a.maxNumRetry || 0,
      retryDelay: a.retryDelayMs || 0,
      maxRetryDelay: a.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (h, d, c, u) => {
        const g = this.getInternalLoader(c);
        this.resetInternalLoader(c.type);
        const f = h.data;
        if (f.indexOf("#EXTM3U") !== 0) {
          this.handleManifestParsingError(h, c, new Error("no EXTM3U delimiter"), u || null, d);
          return;
        }
        d.parsing.start = performance.now(), Lt.isMediaPlaylist(f) ? this.handleTrackOrLevelPlaylist(h, d, c, u || null, g) : this.handleMasterPlaylist(h, d, c, u);
      },
      onError: (h, d, c, u) => {
        this.handleNetworkError(d, c, !1, h, u);
      },
      onTimeout: (h, d, c) => {
        this.handleNetworkError(d, c, !0, void 0, h);
      }
    };
    r.load(t, o, l);
  }
  handleMasterPlaylist(t, e, s, r) {
    const i = this.hls, a = t.data, o = Ye(t, s), l = Lt.parseMasterPlaylist(a, o);
    if (l.playlistParsingError) {
      this.handleManifestParsingError(t, s, l.playlistParsingError, r, e);
      return;
    }
    const {
      contentSteering: h,
      levels: d,
      sessionData: c,
      sessionKeys: u,
      startTimeOffset: g,
      variableList: f
    } = l;
    this.variableList = f;
    const {
      AUDIO: m = [],
      SUBTITLES: E,
      "CLOSED-CAPTIONS": y
    } = Lt.parseMasterPlaylistMedia(a, o, l);
    m.length && !m.some((T) => !T.url) && d[0].audioCodec && !d[0].attrs.AUDIO && (v.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new J({}),
      bitrate: 0,
      url: ""
    })), i.trigger(p.MANIFEST_LOADED, {
      levels: d,
      audioTracks: m,
      subtitles: E,
      captions: y,
      contentSteering: h,
      url: o,
      stats: e,
      networkDetails: r,
      sessionData: c,
      sessionKeys: u,
      startTimeOffset: g,
      variableList: f
    });
  }
  handleTrackOrLevelPlaylist(t, e, s, r, i) {
    const a = this.hls, {
      id: o,
      level: l,
      type: h
    } = s, d = Ye(t, s), c = 0, u = F(l) ? l : F(o) ? o : 0, g = er(s), f = Lt.parseLevelPlaylist(t.data, d, u, g, c, this.variableList);
    if (h === W.MANIFEST) {
      const m = {
        attrs: new J({}),
        bitrate: 0,
        details: f,
        name: "",
        url: d
      };
      a.trigger(p.MANIFEST_LOADED, {
        levels: [m],
        audioTracks: [],
        url: d,
        stats: e,
        networkDetails: r,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    e.parsing.end = performance.now(), s.levelDetails = f, this.handlePlaylistLoaded(f, t, e, s, r, i);
  }
  handleManifestParsingError(t, e, s, r, i) {
    this.hls.trigger(p.ERROR, {
      type: $.NETWORK_ERROR,
      details: D.MANIFEST_PARSING_ERROR,
      fatal: e.type === W.MANIFEST,
      url: t.url,
      err: s,
      error: s,
      reason: s.message,
      response: t,
      context: e,
      networkDetails: r,
      stats: i
    });
  }
  handleNetworkError(t, e, s = !1, r, i) {
    let a = `A network ${s ? "timeout" : "error" + (r ? " (status " + r.code + ")" : "")} occurred while loading ${t.type}`;
    t.type === W.LEVEL ? a += `: ${t.level} id: ${t.id}` : (t.type === W.AUDIO_TRACK || t.type === W.SUBTITLE_TRACK) && (a += ` id: ${t.id} group-id: "${t.groupId}"`);
    const o = new Error(a);
    v.warn(`[playlist-loader]: ${a}`);
    let l = D.UNKNOWN, h = !1;
    const d = this.getInternalLoader(t);
    switch (t.type) {
      case W.MANIFEST:
        l = s ? D.MANIFEST_LOAD_TIMEOUT : D.MANIFEST_LOAD_ERROR, h = !0;
        break;
      case W.LEVEL:
        l = s ? D.LEVEL_LOAD_TIMEOUT : D.LEVEL_LOAD_ERROR, h = !1;
        break;
      case W.AUDIO_TRACK:
        l = s ? D.AUDIO_TRACK_LOAD_TIMEOUT : D.AUDIO_TRACK_LOAD_ERROR, h = !1;
        break;
      case W.SUBTITLE_TRACK:
        l = s ? D.SUBTITLE_TRACK_LOAD_TIMEOUT : D.SUBTITLE_LOAD_ERROR, h = !1;
        break;
    }
    d && this.resetInternalLoader(t.type);
    const c = {
      type: $.NETWORK_ERROR,
      details: l,
      fatal: h,
      url: t.url,
      loader: d,
      context: t,
      error: o,
      networkDetails: e,
      stats: i
    };
    if (r) {
      const u = (e == null ? void 0 : e.url) || t.url;
      c.response = at({
        url: u,
        data: void 0
      }, r);
    }
    this.hls.trigger(p.ERROR, c);
  }
  handlePlaylistLoaded(t, e, s, r, i, a) {
    const o = this.hls, {
      type: l,
      level: h,
      id: d,
      groupId: c,
      deliveryDirectives: u
    } = r, g = Ye(e, r), f = er(r), m = typeof r.level == "number" && f === B.MAIN ? h : void 0;
    if (!t.fragments.length) {
      const y = new Error("No Segments found in Playlist");
      o.trigger(p.ERROR, {
        type: $.NETWORK_ERROR,
        details: D.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: g,
        error: y,
        reason: y.message,
        response: e,
        context: r,
        level: m,
        parent: f,
        networkDetails: i,
        stats: s
      });
      return;
    }
    t.targetduration || (t.playlistParsingError = new Error("Missing Target Duration"));
    const E = t.playlistParsingError;
    if (E) {
      o.trigger(p.ERROR, {
        type: $.NETWORK_ERROR,
        details: D.LEVEL_PARSING_ERROR,
        fatal: !1,
        url: g,
        error: E,
        reason: E.message,
        response: e,
        context: r,
        level: m,
        parent: f,
        networkDetails: i,
        stats: s
      });
      return;
    }
    switch (t.live && a && (a.getCacheAge && (t.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(t.ageHeader)) && (t.ageHeader = 0)), l) {
      case W.MANIFEST:
      case W.LEVEL:
        o.trigger(p.LEVEL_LOADED, {
          details: t,
          level: m || 0,
          id: d || 0,
          stats: s,
          networkDetails: i,
          deliveryDirectives: u
        });
        break;
      case W.AUDIO_TRACK:
        o.trigger(p.AUDIO_TRACK_LOADED, {
          details: t,
          id: d || 0,
          groupId: c || "",
          stats: s,
          networkDetails: i,
          deliveryDirectives: u
        });
        break;
      case W.SUBTITLE_TRACK:
        o.trigger(p.SUBTITLE_TRACK_LOADED, {
          details: t,
          id: d || 0,
          groupId: c || "",
          stats: s,
          networkDetails: i,
          deliveryDirectives: u
        });
        break;
    }
  }
}
function ei(n, t) {
  let e;
  try {
    e = new Event("addtrack");
  } catch {
    e = document.createEvent("Event"), e.initEvent("addtrack", !1, !1);
  }
  e.track = n, t.dispatchEvent(e);
}
function si(n, t) {
  const e = n.mode;
  if (e === "disabled" && (n.mode = "hidden"), n.cues && !n.cues.getCueById(t.id))
    try {
      if (n.addCue(t), !n.cues.getCueById(t.id))
        throw new Error(`addCue is failed for: ${t}`);
    } catch (s) {
      v.debug(`[texttrack-utils]: ${s}`);
      try {
        const r = new self.TextTrackCue(t.startTime, t.endTime, t.text);
        r.id = t.id, n.addCue(r);
      } catch (r) {
        v.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${r}`);
      }
    }
  e === "disabled" && (n.mode = e);
}
function Vt(n) {
  const t = n.mode;
  if (t === "disabled" && (n.mode = "hidden"), n.cues)
    for (let e = n.cues.length; e--; )
      n.removeCue(n.cues[e]);
  t === "disabled" && (n.mode = t);
}
function ls(n, t, e, s) {
  const r = n.mode;
  if (r === "disabled" && (n.mode = "hidden"), n.cues && n.cues.length > 0) {
    const i = Jn(n.cues, t, e);
    for (let a = 0; a < i.length; a++)
      (!s || s(i[a])) && n.removeCue(i[a]);
  }
  r === "disabled" && (n.mode = r);
}
function Qn(n, t) {
  if (t < n[0].startTime)
    return 0;
  const e = n.length - 1;
  if (t > n[e].endTime)
    return -1;
  let s = 0, r = e;
  for (; s <= r; ) {
    const i = Math.floor((r + s) / 2);
    if (t < n[i].startTime)
      r = i - 1;
    else if (t > n[i].startTime && s < e)
      s = i + 1;
    else
      return i;
  }
  return n[s].startTime - t < t - n[r].startTime ? s : r;
}
function Jn(n, t, e) {
  const s = [], r = Qn(n, t);
  if (r > -1)
    for (let i = r, a = n.length; i < a; i++) {
      const o = n[i];
      if (o.startTime >= t && o.endTime <= e)
        s.push(o);
      else if (o.startTime > e)
        return s;
    }
  return s;
}
function ge(n) {
  const t = [];
  for (let e = 0; e < n.length; e++) {
    const s = n[e];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && t.push(n[e]);
  }
  return t;
}
var yt = {
  audioId3: "org.id3",
  dateRange: "com.apple.quicktime.HLS",
  emsg: "https://aomedia.org/emsg/ID3"
};
const Zn = 0.25;
function hs() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function sr(n, t, e, s, r) {
  let i = new n(t, e, "");
  try {
    i.value = s, r && (i.type = r);
  } catch {
    i = new n(t, e, JSON.stringify(r ? at({
      type: r
    }, s) : s));
  }
  return i;
}
const ne = (() => {
  const n = hs();
  try {
    n && new n(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
function We(n, t) {
  return n.getTime() / 1e3 - t;
}
function ta(n) {
  return Uint8Array.from(n.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
class ea {
  constructor(t) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
  }
  _registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(p.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  _unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(p.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  // Add ID3 metatadata text track.
  onMediaAttached(t, e) {
    this.media = e.media;
  }
  onMediaDetaching() {
    this.id3Track && (Vt(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(t) {
    const e = this.getID3Track(t.textTracks);
    return e.mode = "hidden", e;
  }
  getID3Track(t) {
    if (this.media) {
      for (let e = 0; e < t.length; e++) {
        const s = t[e];
        if (s.kind === "metadata" && s.label === "id3")
          return ei(s, this.media), s;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(t, e) {
    if (!this.media)
      return;
    const {
      hls: {
        config: {
          enableEmsgMetadataCues: s,
          enableID3MetadataCues: r
        }
      }
    } = this;
    if (!s && !r)
      return;
    const {
      samples: i
    } = e;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const a = hs();
    if (a)
      for (let o = 0; o < i.length; o++) {
        const l = i[o].type;
        if (l === yt.emsg && !s || !r)
          continue;
        const h = Yr(i[o].data);
        if (h) {
          const d = i[o].pts;
          let c = d + i[o].duration;
          c > ne && (c = ne), c - d <= 0 && (c = d + Zn);
          for (let u = 0; u < h.length; u++) {
            const g = h[u];
            if (!Hr(g)) {
              this.updateId3CueEnds(d, l);
              const f = sr(a, d, c, g, l);
              f && this.id3Track.addCue(f);
            }
          }
        }
      }
  }
  updateId3CueEnds(t, e) {
    var s;
    const r = (s = this.id3Track) == null ? void 0 : s.cues;
    if (r)
      for (let i = r.length; i--; ) {
        const a = r[i];
        a.type === e && a.startTime < t && a.endTime === ne && (a.endTime = t);
      }
  }
  onBufferFlushing(t, {
    startOffset: e,
    endOffset: s,
    type: r
  }) {
    const {
      id3Track: i,
      hls: a
    } = this;
    if (!a)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: l
      }
    } = a;
    if (i && (o || l)) {
      let h;
      r === "audio" ? h = (d) => d.type === yt.audioId3 && l : r === "video" ? h = (d) => d.type === yt.emsg && o : h = (d) => d.type === yt.audioId3 && l || d.type === yt.emsg && o, ls(i, e, s, h);
    }
  }
  onLevelUpdated(t, {
    details: e
  }) {
    if (!this.media || !e.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues)
      return;
    const {
      dateRangeCuesAppended: s,
      id3Track: r
    } = this, {
      dateRanges: i
    } = e, a = Object.keys(i);
    if (r) {
      const d = Object.keys(s).filter((c) => !a.includes(c));
      for (let c = d.length; c--; ) {
        const u = d[c];
        Object.keys(s[u].cues).forEach((g) => {
          r.removeCue(s[u].cues[g]);
        }), delete s[u];
      }
    }
    const o = e.fragments[e.fragments.length - 1];
    if (a.length === 0 || !F(o == null ? void 0 : o.programDateTime))
      return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const l = o.programDateTime / 1e3 - o.start, h = hs();
    for (let d = 0; d < a.length; d++) {
      const c = a[d], u = i[c], g = We(u.startDate, l), f = s[c], m = (f == null ? void 0 : f.cues) || {};
      let E = (f == null ? void 0 : f.durationKnown) || !1, y = ne;
      const T = u.endDate;
      if (T)
        y = We(T, l), E = !0;
      else if (u.endOnNext && !E) {
        const R = a.reduce((S, I) => {
          if (I !== u.id) {
            const b = i[I];
            if (b.class === u.class && b.startDate > u.startDate && (!S || u.startDate < S.startDate))
              return b;
          }
          return S;
        }, null);
        R && (y = We(R.startDate, l), E = !0);
      }
      const A = Object.keys(u.attr);
      for (let R = 0; R < A.length; R++) {
        const S = A[R];
        if (!rn(S))
          continue;
        const I = m[S];
        if (I)
          E && !f.durationKnown && (I.endTime = y);
        else if (h) {
          let b = u.attr[S];
          nn(S) && (b = ta(b));
          const x = sr(h, g, y, {
            key: S,
            data: b
          }, yt.dateRange);
          x && (x.id = c, this.id3Track.addCue(x), m[S] = x);
        }
      }
      s[c] = {
        cues: m,
        dateRange: u,
        durationKnown: E
      };
    }
  }
}
class sa {
  constructor(t) {
    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = t, this.config = t.config, this.registerListeners();
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: t,
      levelDetails: e
    } = this;
    return t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0;
  }
  get targetLatency() {
    const {
      levelDetails: t
    } = this;
    if (t === null)
      return null;
    const {
      holdBack: e,
      partHoldBack: s,
      targetduration: r
    } = t, {
      liveSyncDuration: i,
      liveSyncDurationCount: a,
      lowLatencyMode: o
    } = this.config, l = this.hls.userConfig;
    let h = o && s || e;
    (l.liveSyncDuration || l.liveSyncDurationCount || h === 0) && (h = i !== void 0 ? i : a * r);
    const d = r;
    return h + Math.min(this.stallCount * 1, d);
  }
  get liveSyncPosition() {
    const t = this.estimateLiveEdge(), e = this.targetLatency, s = this.levelDetails;
    if (t === null || e === null || s === null)
      return null;
    const r = s.edge, i = t - e - this.edgeStalled, a = r - s.totalduration, o = r - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
    return Math.min(Math.max(a, i), o);
  }
  get drift() {
    const {
      levelDetails: t
    } = this;
    return t === null ? 1 : t.drift;
  }
  get edgeStalled() {
    const {
      levelDetails: t
    } = this;
    if (t === null)
      return 0;
    const e = (this.config.lowLatencyMode && t.partTarget || t.targetduration) * 3;
    return Math.max(t.age - e, 0);
  }
  get forwardBufferLength() {
    const {
      media: t,
      levelDetails: e
    } = this;
    if (!t || !e)
      return 0;
    const s = t.buffered.length;
    return (s ? t.buffered.end(s - 1) : e.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
  }
  registerListeners() {
    this.hls.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(p.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(p.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    this.hls.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(p.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(p.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(p.ERROR, this.onError, this);
  }
  onMediaAttached(t, e) {
    this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
  }
  onManifestLoading() {
    this.levelDetails = null, this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(t, {
    details: e
  }) {
    this.levelDetails = e, e.advanced && this.timeupdate(), !e.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
  }
  onError(t, e) {
    var s;
    e.details === D.BUFFER_STALLED_ERROR && (this.stallCount++, (s = this.levelDetails) != null && s.live && v.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
  }
  timeupdate() {
    const {
      media: t,
      levelDetails: e
    } = this;
    if (!t || !e)
      return;
    this.currentTime = t.currentTime;
    const s = this.computeLatency();
    if (s === null)
      return;
    this._latency = s;
    const {
      lowLatencyMode: r,
      maxLiveSyncPlaybackRate: i
    } = this.config;
    if (!r || i === 1 || !e.live)
      return;
    const a = this.targetLatency;
    if (a === null)
      return;
    const o = s - a, l = Math.min(this.maxLatency, a + e.targetduration);
    if (o < l && o > 0.05 && this.forwardBufferLength > 1) {
      const h = Math.min(2, Math.max(1, i)), d = Math.round(2 / (1 + Math.exp(-0.75 * o - this.edgeStalled)) * 20) / 20;
      t.playbackRate = Math.min(h, Math.max(1, d));
    } else t.playbackRate !== 1 && t.playbackRate !== 0 && (t.playbackRate = 1);
  }
  estimateLiveEdge() {
    const {
      levelDetails: t
    } = this;
    return t === null ? null : t.edge + t.age;
  }
  computeLatency() {
    const t = this.estimateLiveEdge();
    return t === null ? null : t - this.currentTime;
  }
}
const ds = ["NONE", "TYPE-0", "TYPE-1", null];
function ra(n) {
  return ds.indexOf(n) > -1;
}
const Ie = ["SDR", "PQ", "HLG"];
function ia(n) {
  return !!n && Ie.indexOf(n) > -1;
}
var me = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function rr(n) {
  const {
    canSkipUntil: t,
    canSkipDateRanges: e,
    age: s
  } = n, r = s < t / 2;
  return t && r ? e ? me.v2 : me.Yes : me.No;
}
class ir {
  constructor(t, e, s) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = s;
  }
  addDirectives(t) {
    const e = new self.URL(t);
    return this.msn !== void 0 && e.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.href;
  }
}
class jt {
  constructor(t) {
    this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [t.url], this._attrs = [t.attrs], this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.frameRate = t.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = t.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.codecSet = [t.videoCodec, t.audioCodec].filter((e) => !!e).map((e) => e.substring(0, 4)).join(","), this.addGroupId("audio", t.attrs.AUDIO), this.addGroupId("text", t.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(t) {
    return nr(this._audioGroups, t);
  }
  hasSubtitleGroup(t) {
    return nr(this._subtitleGroups, t);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(t, e) {
    if (e) {
      if (t === "audio") {
        let s = this._audioGroups;
        s || (s = this._audioGroups = []), s.indexOf(e) === -1 && s.push(e);
      } else if (t === "text") {
        let s = this._subtitleGroups;
        s || (s = this._subtitleGroups = []), s.indexOf(e) === -1 && s.push(e);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(t) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var t;
    return (t = this.audioGroups) == null ? void 0 : t[0];
  }
  get textGroupId() {
    var t;
    return (t = this.subtitleGroups) == null ? void 0 : t[0];
  }
  addFallback() {
  }
}
function nr(n, t) {
  return !t || !n ? !1 : n.indexOf(t) !== -1;
}
function je(n, t) {
  const e = t.startPTS;
  if (F(e)) {
    let s = 0, r;
    t.sn > n.sn ? (s = e - n.start, r = n) : (s = n.start - e, r = t), r.duration !== s && (r.duration = s);
  } else t.sn > n.sn ? n.cc === t.cc && n.minEndPTS ? t.start = n.start + (n.minEndPTS - n.start) : t.start = n.start + n.duration : t.start = Math.max(n.start - t.duration, 0);
}
function ri(n, t, e, s, r, i) {
  s - e <= 0 && (v.warn("Fragment should have a positive duration", t), s = e + t.duration, i = r + t.duration);
  let a = e, o = s;
  const l = t.startPTS, h = t.endPTS;
  if (F(l)) {
    const m = Math.abs(l - e);
    F(t.deltaPTS) ? t.deltaPTS = Math.max(m, t.deltaPTS) : t.deltaPTS = m, a = Math.max(e, l), e = Math.min(e, l), r = Math.min(r, t.startDTS), o = Math.min(s, h), s = Math.max(s, h), i = Math.max(i, t.endDTS);
  }
  const d = e - t.start;
  t.start !== 0 && (t.start = e), t.duration = s - t.start, t.startPTS = e, t.maxStartPTS = a, t.startDTS = r, t.endPTS = s, t.minEndPTS = o, t.endDTS = i;
  const c = t.sn;
  if (!n || c < n.startSN || c > n.endSN)
    return 0;
  let u;
  const g = c - n.startSN, f = n.fragments;
  for (f[g] = t, u = g; u > 0; u--)
    je(f[u], f[u - 1]);
  for (u = g; u < f.length - 1; u++)
    je(f[u], f[u + 1]);
  return n.fragmentHint && je(f[f.length - 1], n.fragmentHint), n.PTSKnown = n.alignedSliding = !0, d;
}
function na(n, t) {
  let e = null;
  const s = n.fragments;
  for (let o = s.length - 1; o >= 0; o--) {
    const l = s[o].initSegment;
    if (l) {
      e = l;
      break;
    }
  }
  n.fragmentHint && delete n.fragmentHint.endPTS;
  let r;
  la(n, t, (o, l, h, d) => {
    if (t.skippedSegments && l.cc !== o.cc) {
      const c = o.cc - l.cc;
      for (let u = h; u < d.length; u++)
        d[u].cc += c;
    }
    F(o.startPTS) && F(o.endPTS) && (l.start = l.startPTS = o.startPTS, l.startDTS = o.startDTS, l.maxStartPTS = o.maxStartPTS, l.endPTS = o.endPTS, l.endDTS = o.endDTS, l.minEndPTS = o.minEndPTS, l.duration = o.endPTS - o.startPTS, l.duration && (r = l), t.PTSKnown = t.alignedSliding = !0), l.elementaryStreams = o.elementaryStreams, l.loader = o.loader, l.stats = o.stats, o.initSegment && (l.initSegment = o.initSegment, e = o.initSegment);
  });
  const i = t.fragments;
  if (e && (t.fragmentHint ? i.concat(t.fragmentHint) : i).forEach((o) => {
    var l;
    o && (!o.initSegment || o.initSegment.relurl === ((l = e) == null ? void 0 : l.relurl)) && (o.initSegment = e);
  }), t.skippedSegments) {
    if (t.deltaUpdateFailed = i.some((o) => !o), t.deltaUpdateFailed) {
      v.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let o = t.skippedSegments; o--; )
        i.shift();
      t.startSN = i[0].sn;
    } else
      t.canSkipDateRanges && (t.dateRanges = aa(n.dateRanges, t.dateRanges, t.recentlyRemovedDateranges));
    t.startCC = t.fragments[0].cc, t.endCC = i[i.length - 1].cc;
  }
  oa(n.partList, t.partList, (o, l) => {
    l.elementaryStreams = o.elementaryStreams, l.stats = o.stats;
  }), r ? ri(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : ii(n, t), i.length && (t.totalduration = t.edge - i[0].start), t.driftStartTime = n.driftStartTime, t.driftStart = n.driftStart;
  const a = t.advancedDateTime;
  if (t.advanced && a) {
    const o = t.edge;
    t.driftStart || (t.driftStartTime = a, t.driftStart = o), t.driftEndTime = a, t.driftEnd = o;
  } else
    t.driftEndTime = n.driftEndTime, t.driftEnd = n.driftEnd, t.advancedDateTime = n.advancedDateTime;
}
function aa(n, t, e) {
  const s = tt({}, n);
  return e && e.forEach((r) => {
    delete s[r];
  }), Object.keys(t).forEach((r) => {
    const i = new Br(t[r].attr, s[r]);
    i.isValid ? s[r] = i : v.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(t[r].attr)}"`);
  }), s;
}
function oa(n, t, e) {
  if (n && t) {
    let s = 0;
    for (let r = 0, i = n.length; r <= i; r++) {
      const a = n[r], o = t[r + s];
      a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? e(a, o) : s--;
    }
  }
}
function la(n, t, e) {
  const s = t.skippedSegments, r = Math.max(n.startSN, t.startSN) - t.startSN, i = (n.fragmentHint ? 1 : 0) + (s ? t.endSN : Math.min(n.endSN, t.endSN)) - t.startSN, a = t.startSN - n.startSN, o = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, l = n.fragmentHint ? n.fragments.concat(n.fragmentHint) : n.fragments;
  for (let h = r; h <= i; h++) {
    const d = l[a + h];
    let c = o[h];
    s && !c && h < s && (c = t.fragments[h] = d), d && c && e(d, c, h, o);
  }
}
function ii(n, t) {
  const e = t.startSN + t.skippedSegments - n.startSN, s = n.fragments;
  e < 0 || e >= s.length || cs(t, s[e].start);
}
function cs(n, t) {
  if (t) {
    const e = n.fragments;
    for (let s = n.skippedSegments; s < e.length; s++)
      e[s].start += t;
    n.fragmentHint && (n.fragmentHint.start += t);
  }
}
function ha(n, t = 1 / 0) {
  let e = 1e3 * n.targetduration;
  if (n.updated) {
    const s = n.fragments;
    if (s.length && e * 4 > t) {
      const r = s[s.length - 1].duration * 1e3;
      r < e && (e = r);
    }
  } else
    e /= 2;
  return Math.round(e);
}
function da(n, t, e) {
  if (!(n != null && n.details))
    return null;
  const s = n.details;
  let r = s.fragments[t - s.startSN];
  return r || (r = s.fragmentHint, r && r.sn === t) ? r : t < s.startSN && e && e.sn === t ? e : null;
}
function ar(n, t, e) {
  var s;
  return n != null && n.details ? ni((s = n.details) == null ? void 0 : s.partList, t, e) : null;
}
function ni(n, t, e) {
  if (n)
    for (let s = n.length; s--; ) {
      const r = n[s];
      if (r.index === e && r.fragment.sn === t)
        return r;
    }
  return null;
}
function ai(n) {
  n.forEach((t, e) => {
    const {
      details: s
    } = t;
    s != null && s.fragments && s.fragments.forEach((r) => {
      r.level = e;
    });
  });
}
function be(n) {
  switch (n.details) {
    case D.FRAG_LOAD_TIMEOUT:
    case D.KEY_LOAD_TIMEOUT:
    case D.LEVEL_LOAD_TIMEOUT:
    case D.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function or(n, t) {
  const e = be(t);
  return n.default[`${e ? "timeout" : "error"}Retry`];
}
function Rs(n, t) {
  const e = n.backoff === "linear" ? 1 : Math.pow(2, t);
  return Math.min(e * n.retryDelayMs, n.maxRetryDelayMs);
}
function lr(n) {
  return at(at({}, n), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function ke(n, t, e, s) {
  if (!n)
    return !1;
  const r = s == null ? void 0 : s.code, i = t < n.maxNumRetry && (ca(r) || !!e);
  return n.shouldRetry ? n.shouldRetry(n, t, e, s, i) : i;
}
function ca(n) {
  return n === 0 && navigator.onLine === !1 || !!n && (n < 400 || n > 499);
}
const oi = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(n, t) {
    let e = 0, s = n.length - 1, r = null, i = null;
    for (; e <= s; ) {
      r = (e + s) / 2 | 0, i = n[r];
      const a = t(i);
      if (a > 0)
        e = r + 1;
      else if (a < 0)
        s = r - 1;
      else
        return i;
    }
    return null;
  }
};
function ua(n, t, e) {
  if (t === null || !Array.isArray(n) || !n.length || !F(t))
    return null;
  const s = n[0].programDateTime;
  if (t < (s || 0))
    return null;
  const r = n[n.length - 1].endProgramDateTime;
  if (t >= (r || 0))
    return null;
  e = e || 0;
  for (let i = 0; i < n.length; ++i) {
    const a = n[i];
    if (ga(t, e, a))
      return a;
  }
  return null;
}
function Ce(n, t, e = 0, s = 0, r = 5e-3) {
  let i = null;
  if (n) {
    i = t[n.sn - t[0].sn + 1] || null;
    const o = n.endDTS - e;
    o > 0 && o < 15e-7 && (e += 15e-7);
  } else e === 0 && t[0].start === 0 && (i = t[0]);
  if (i && ((!n || n.level === i.level) && us(e, s, i) === 0 || fa(i, n, Math.min(r, s))))
    return i;
  const a = oi.search(t, us.bind(null, e, s));
  return a && (a !== n || !i) ? a : i;
}
function fa(n, t, e) {
  if (t && t.start === 0 && t.level < n.level && (t.endPTS || 0) > 0) {
    const s = t.tagList.reduce((r, i) => (i[0] === "INF" && (r += parseFloat(i[1])), r), e);
    return n.start <= s;
  }
  return !1;
}
function us(n = 0, t = 0, e) {
  if (e.start <= n && e.start + e.duration > n)
    return 0;
  const s = Math.min(t, e.duration + (e.deltaPTS ? e.deltaPTS : 0));
  return e.start + e.duration - s <= n ? 1 : e.start - s > n && e.start ? -1 : 0;
}
function ga(n, t, e) {
  const s = Math.min(t, e.duration + (e.deltaPTS ? e.deltaPTS : 0)) * 1e3;
  return (e.endProgramDateTime || 0) - s > n;
}
function ma(n, t) {
  return oi.search(n, (e) => e.cc < t ? 1 : e.cc > t ? -1 : 0);
}
var ot = {
  DoNothing: 0,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  RetryRequest: 5
}, pt = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2
};
class pa {
  constructor(t) {
    this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = t, this.log = v.log.bind(v, "[info]:"), this.warn = v.warn.bind(v, "[warning]:"), this.error = v.error.bind(v, "[error]:"), this.registerListeners();
  }
  registerListeners() {
    const t = this.hls;
    t.on(p.ERROR, this.onError, this), t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const t = this.hls;
    t && (t.off(p.ERROR, this.onError, this), t.off(p.ERROR, this.onErrorOut, this), t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
  }
  startLoad(t) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(t) {
    return (t == null ? void 0 : t.type) === B.MAIN ? t.level : this.hls.loadLevel;
  }
  onManifestLoading() {
    this.playlistError = 0, this.penalizedRenditions = {};
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(t, e) {
    var s, r;
    if (e.fatal)
      return;
    const i = this.hls, a = e.context;
    switch (e.details) {
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        e.errorAction = this.getFragRetryOrSwitchAction(e);
        return;
      case D.FRAG_PARSING_ERROR:
        if ((s = e.frag) != null && s.gap) {
          e.errorAction = {
            action: ot.DoNothing,
            flags: pt.None
          };
          return;
        }
      // falls through
      case D.FRAG_GAP:
      case D.FRAG_DECRYPT_ERROR: {
        e.errorAction = this.getFragRetryOrSwitchAction(e), e.errorAction.action = ot.SendAlternateToPenaltyBox;
        return;
      }
      case D.LEVEL_EMPTY_ERROR:
      case D.LEVEL_PARSING_ERROR:
        {
          var o, l;
          const h = e.parent === B.MAIN ? e.level : i.loadLevel;
          e.details === D.LEVEL_EMPTY_ERROR && (o = e.context) != null && (l = o.levelDetails) != null && l.live ? e.errorAction = this.getPlaylistRetryOrSwitchAction(e, h) : (e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, h));
        }
        return;
      case D.LEVEL_LOAD_ERROR:
      case D.LEVEL_LOAD_TIMEOUT:
        typeof (a == null ? void 0 : a.level) == "number" && (e.errorAction = this.getPlaylistRetryOrSwitchAction(e, a.level));
        return;
      case D.AUDIO_TRACK_LOAD_ERROR:
      case D.AUDIO_TRACK_LOAD_TIMEOUT:
      case D.SUBTITLE_LOAD_ERROR:
      case D.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (a) {
          const h = i.levels[i.loadLevel];
          if (h && (a.type === W.AUDIO_TRACK && h.hasAudioGroup(a.groupId) || a.type === W.SUBTITLE_TRACK && h.hasSubtitleGroup(a.groupId))) {
            e.errorAction = this.getPlaylistRetryOrSwitchAction(e, i.loadLevel), e.errorAction.action = ot.SendAlternateToPenaltyBox, e.errorAction.flags = pt.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case D.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        {
          const h = i.levels[i.loadLevel], d = h == null ? void 0 : h.attrs["HDCP-LEVEL"];
          d ? e.errorAction = {
            action: ot.SendAlternateToPenaltyBox,
            flags: pt.MoveAllAlternatesMatchingHDCP,
            hdcpLevel: d
          } : this.keySystemError(e);
        }
        return;
      case D.BUFFER_ADD_CODEC_ERROR:
      case D.REMUX_ALLOC_ERROR:
      case D.BUFFER_APPEND_ERROR:
        e.errorAction = this.getLevelSwitchAction(e, (r = e.level) != null ? r : i.loadLevel);
        return;
      case D.INTERNAL_EXCEPTION:
      case D.BUFFER_APPENDING_ERROR:
      case D.BUFFER_FULL_ERROR:
      case D.LEVEL_SWITCH_ERROR:
      case D.BUFFER_STALLED_ERROR:
      case D.BUFFER_SEEK_OVER_HOLE:
      case D.BUFFER_NUDGE_ON_STALL:
        e.errorAction = {
          action: ot.DoNothing,
          flags: pt.None
        };
        return;
    }
    e.type === $.KEY_SYSTEM_ERROR && this.keySystemError(e);
  }
  keySystemError(t) {
    const e = this.getVariantLevelIndex(t.frag);
    t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, e);
  }
  getPlaylistRetryOrSwitchAction(t, e) {
    const s = this.hls, r = or(s.config.playlistLoadPolicy, t), i = this.playlistError++;
    if (ke(r, i, be(t), t.response))
      return {
        action: ot.RetryRequest,
        flags: pt.None,
        retryConfig: r,
        retryCount: i
      };
    const a = this.getLevelSwitchAction(t, e);
    return r && (a.retryConfig = r, a.retryCount = i), a;
  }
  getFragRetryOrSwitchAction(t) {
    const e = this.hls, s = this.getVariantLevelIndex(t.frag), r = e.levels[s], {
      fragLoadPolicy: i,
      keyLoadPolicy: a
    } = e.config, o = or(t.details.startsWith("key") ? a : i, t), l = e.levels.reduce((d, c) => d + c.fragmentError, 0);
    if (r && (t.details !== D.FRAG_GAP && r.fragmentError++, ke(o, l, be(t), t.response)))
      return {
        action: ot.RetryRequest,
        flags: pt.None,
        retryConfig: o,
        retryCount: l
      };
    const h = this.getLevelSwitchAction(t, s);
    return o && (h.retryConfig = o, h.retryCount = l), h;
  }
  getLevelSwitchAction(t, e) {
    const s = this.hls;
    e == null && (e = s.loadLevel);
    const r = this.hls.levels[e];
    if (r) {
      var i, a;
      const h = t.details;
      r.loadError++, h === D.BUFFER_APPEND_ERROR && r.fragmentError++;
      let d = -1;
      const {
        levels: c,
        loadLevel: u,
        minAutoLevel: g,
        maxAutoLevel: f
      } = s;
      s.autoLevelEnabled || (s.loadLevel = -1);
      const m = (i = t.frag) == null ? void 0 : i.type, E = (m === B.AUDIO && h === D.FRAG_PARSING_ERROR || t.sourceBufferName === "audio" && (h === D.BUFFER_ADD_CODEC_ERROR || h === D.BUFFER_APPEND_ERROR)) && c.some(({
        audioCodec: R
      }) => r.audioCodec !== R), y = t.sourceBufferName === "video" && (h === D.BUFFER_ADD_CODEC_ERROR || h === D.BUFFER_APPEND_ERROR) && c.some(({
        codecSet: R,
        audioCodec: S
      }) => r.codecSet !== R && r.audioCodec === S), {
        type: T,
        groupId: A
      } = (a = t.context) != null ? a : {};
      for (let R = c.length; R--; ) {
        const S = (R + u) % c.length;
        if (S !== u && S >= g && S <= f && c[S].loadError === 0) {
          var o, l;
          const I = c[S];
          if (h === D.FRAG_GAP && m === B.MAIN && t.frag) {
            const b = c[S].details;
            if (b) {
              const x = Ce(t.frag, b.fragments, t.frag.start);
              if (x != null && x.gap)
                continue;
            }
          } else if (T === W.AUDIO_TRACK && I.hasAudioGroup(A) || T === W.SUBTITLE_TRACK && I.hasSubtitleGroup(A) || m === B.AUDIO && (o = r.audioGroups) != null && o.some((b) => I.hasAudioGroup(b)) || m === B.SUBTITLE && (l = r.subtitleGroups) != null && l.some((b) => I.hasSubtitleGroup(b)) || E && r.audioCodec === I.audioCodec || !E && r.audioCodec !== I.audioCodec || y && r.codecSet === I.codecSet)
            continue;
          d = S;
          break;
        }
      }
      if (d > -1 && s.loadLevel !== d)
        return t.levelRetry = !0, this.playlistError = 0, {
          action: ot.SendAlternateToPenaltyBox,
          flags: pt.None,
          nextAutoLevel: d
        };
    }
    return {
      action: ot.SendAlternateToPenaltyBox,
      flags: pt.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(t, e) {
    var s;
    switch ((s = e.errorAction) == null ? void 0 : s.action) {
      case ot.DoNothing:
        break;
      case ot.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(e), !e.errorAction.resolved && e.details !== D.FRAG_GAP ? e.fatal = !0 : /MediaSource readyState: ended/.test(e.error.message) && (this.warn(`MediaSource ended after "${e.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (e.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(t) {
    const e = this.hls, s = t.errorAction;
    if (!s)
      return;
    const {
      flags: r,
      hdcpLevel: i,
      nextAutoLevel: a
    } = s;
    switch (r) {
      case pt.None:
        this.switchLevel(t, a);
        break;
      case pt.MoveAllAlternatesMatchingHDCP:
        i && (e.maxHdcpLevel = ds[ds.indexOf(i) - 1], s.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${e.maxHdcpLevel}" or lower`);
        break;
    }
    s.resolved || this.switchLevel(t, a);
  }
  switchLevel(t, e) {
    e !== void 0 && t.errorAction && (this.warn(`switching to level ${e} after ${t.details}`), this.hls.nextAutoLevel = e, t.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
  }
}
class Ds {
  constructor(t, e) {
    this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = v.log.bind(v, `${e}:`), this.warn = v.warn.bind(v, `${e}:`), this.hls = t;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(t, e, s) {
    const r = e == null ? void 0 : e.renditionReports;
    if (r) {
      let i = -1;
      for (let a = 0; a < r.length; a++) {
        const o = r[a];
        let l;
        try {
          l = new self.URL(o.URI, e.url).href;
        } catch (h) {
          v.warn(`Could not construct new URL for Rendition Report: ${h}`), l = o.URI || "";
        }
        if (l === t) {
          i = a;
          break;
        } else l === t.substring(0, l.length) && (i = a);
      }
      if (i !== -1) {
        const a = r[i], o = parseInt(a["LAST-MSN"]) || (e == null ? void 0 : e.lastPartSn);
        let l = parseInt(a["LAST-PART"]) || (e == null ? void 0 : e.lastPartIndex);
        if (this.hls.config.lowLatencyMode) {
          const d = Math.min(e.age - e.partTarget, e.targetduration);
          l >= 0 && d > e.partTarget && (l += 1);
        }
        const h = s && rr(s);
        return new ir(o, l >= 0 ? l : void 0, h);
      }
    }
  }
  loadPlaylist(t) {
    this.requestScheduled === -1 && (this.requestScheduled = self.performance.now());
  }
  shouldLoadPlaylist(t) {
    return this.canLoad && !!t && !!t.url && (!t.details || t.details.live);
  }
  shouldReloadPlaylist(t) {
    return this.timer === -1 && this.requestScheduled === -1 && this.shouldLoadPlaylist(t);
  }
  playlistLoaded(t, e, s) {
    const {
      details: r,
      stats: i
    } = e, a = self.performance.now(), o = i.loading.first ? Math.max(0, a - i.loading.first) : 0;
    if (r.advancedDateTime = Date.now() - o, r.live || s != null && s.live) {
      if (r.reloaded(s), s && this.log(`live playlist ${t} ${r.advanced ? "REFRESHED " + r.lastPartSn + "-" + r.lastPartIndex : r.updated ? "UPDATED" : "MISSED"}`), s && r.fragments.length > 0 && na(s, r), !this.canLoad || !r.live)
        return;
      let l, h, d;
      if (r.canBlockReload && r.endSN && r.advanced) {
        const E = this.hls.config.lowLatencyMode, y = r.lastPartSn, T = r.endSN, A = r.lastPartIndex, R = A !== -1, S = y === T, I = E ? 0 : A;
        R ? (h = S ? T + 1 : y, d = S ? I : A + 1) : h = T + 1;
        const b = r.age, x = b + r.ageHeader;
        let O = Math.min(x - r.partTarget, r.targetduration * 1.5);
        if (O > 0) {
          if (s && O > s.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${O} with playlist age: ${r.age}`), O = 0;
          else {
            const C = Math.floor(O / r.targetduration);
            if (h += C, d !== void 0) {
              const w = Math.round(O % r.targetduration / r.partTarget);
              d += w;
            }
            this.log(`CDN Tune-in age: ${r.ageHeader}s last advanced ${b.toFixed(2)}s goal: ${O} skip sn ${C} to part ${d}`);
          }
          r.tuneInGoal = O;
        }
        if (l = this.getDeliveryDirectives(r, e.deliveryDirectives, h, d), E || !S) {
          this.loadPlaylist(l);
          return;
        }
      } else (r.canBlockReload || r.canSkipUntil) && (l = this.getDeliveryDirectives(r, e.deliveryDirectives, h, d));
      const c = this.hls.mainForwardBufferInfo, u = c ? c.end - c.len : 0, g = (r.edge - u) * 1e3, f = ha(r, g);
      r.updated && a > this.requestScheduled + f && (this.requestScheduled = i.loading.start), h !== void 0 && r.canBlockReload ? this.requestScheduled = i.loading.first + f - (r.partTarget * 1e3 || 1e3) : this.requestScheduled === -1 || this.requestScheduled + f < a ? this.requestScheduled = a : this.requestScheduled - a <= 0 && (this.requestScheduled += f);
      let m = this.requestScheduled - a;
      m = Math.max(0, m), this.log(`reload live playlist ${t} in ${Math.round(m)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(l), m);
    } else
      this.clearTimer();
  }
  getDeliveryDirectives(t, e, s, r) {
    let i = rr(t);
    return e != null && e.skip && t.deltaUpdateFailed && (s = e.msn, r = e.part, i = me.No), new ir(s, r, i);
  }
  checkRetry(t) {
    const e = t.details, s = be(t), r = t.errorAction, {
      action: i,
      retryCount: a = 0,
      retryConfig: o
    } = r || {}, l = !!r && !!o && (i === ot.RetryRequest || !r.resolved && i === ot.SendAlternateToPenaltyBox);
    if (l) {
      var h;
      if (this.requestScheduled = -1, a >= o.maxNumRetry)
        return !1;
      if (s && (h = t.context) != null && h.deliveryDirectives)
        this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${e}" without delivery-directives`), this.loadPlaylist();
      else {
        const d = Rs(o, a);
        this.timer = self.setTimeout(() => this.loadPlaylist(), d), this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${e}" in ${d}ms`);
      }
      t.levelRetry = !0, r.resolved = !0;
    }
    return l;
  }
}
class Bt {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(t, e = 0, s = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(0.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = s;
  }
  sample(t, e) {
    const s = Math.pow(this.alpha_, t);
    this.estimate_ = e * (1 - s) + s * this.estimate_, this.totalWeight_ += t;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const t = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (t)
        return this.estimate_ / t;
    }
    return this.estimate_;
  }
}
class Ea {
  constructor(t, e, s, r = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new Bt(t), this.fast_ = new Bt(e), this.defaultTTFB_ = r, this.ttfb_ = new Bt(t);
  }
  update(t, e) {
    const {
      slow_: s,
      fast_: r,
      ttfb_: i
    } = this;
    s.halfLife !== t && (this.slow_ = new Bt(t, s.getEstimate(), s.getTotalWeight())), r.halfLife !== e && (this.fast_ = new Bt(e, r.getEstimate(), r.getTotalWeight())), i.halfLife !== t && (this.ttfb_ = new Bt(t, i.getEstimate(), i.getTotalWeight()));
  }
  sample(t, e) {
    t = Math.max(t, this.minDelayMs_);
    const s = 8 * e, r = t / 1e3, i = s / r;
    this.fast_.sample(r, i), this.slow_.sample(r, i);
  }
  sampleTTFB(t) {
    const e = t / 1e3, s = Math.sqrt(2) * Math.exp(-Math.pow(e, 2) / 2);
    this.ttfb_.sample(s, Math.max(t, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  destroy() {
  }
}
const li = {
  supported: !0,
  configurations: [],
  decodingInfoResults: [{
    supported: !0,
    powerEfficient: !0,
    smooth: !0
  }]
}, hr = {};
function ya(n, t, e, s, r, i) {
  const a = n.audioCodec ? n.audioGroups : null, o = i == null ? void 0 : i.audioCodec, l = i == null ? void 0 : i.channels, h = l ? parseInt(l) : o ? 1 / 0 : 2;
  let d = null;
  if (a != null && a.length)
    try {
      a.length === 1 && a[0] ? d = t.groups[a[0]].channels : d = a.reduce((c, u) => {
        if (u) {
          const g = t.groups[u];
          if (!g)
            throw new Error(`Audio track group ${u} not found`);
          Object.keys(g.channels).forEach((f) => {
            c[f] = (c[f] || 0) + g.channels[f];
          });
        }
        return c;
      }, {
        2: 0
      });
    } catch {
      return !0;
    }
  return n.videoCodec !== void 0 && (n.width > 1920 && n.height > 1088 || n.height > 1920 && n.width > 1088 || n.frameRate > Math.max(s, 30) || n.videoRange !== "SDR" && n.videoRange !== e || n.bitrate > Math.max(r, 8e6)) || !!d && F(h) && Object.keys(d).some((c) => parseInt(c) > h);
}
function Ta(n, t, e) {
  const s = n.videoCodec, r = n.audioCodec;
  if (!s || !r || !e)
    return Promise.resolve(li);
  const i = {
    width: n.width,
    height: n.height,
    bitrate: Math.ceil(Math.max(n.bitrate * 0.9, n.averageBitrate)),
    // Assume a framerate of 30fps since MediaCapabilities will not accept Level default of 0.
    framerate: n.frameRate || 30
  }, a = n.videoRange;
  a !== "SDR" && (i.transferFunction = a.toLowerCase());
  const o = s.split(",").map((l) => ({
    type: "media-source",
    video: at(at({}, i), {}, {
      contentType: Zt(l, "video")
    })
  }));
  return r && n.audioGroups && n.audioGroups.forEach((l) => {
    var h;
    l && ((h = t.groups[l]) == null || h.tracks.forEach((d) => {
      if (d.groupId === l) {
        const c = d.channels || "", u = parseFloat(c);
        F(u) && u > 2 && o.push.apply(o, r.split(",").map((g) => ({
          type: "media-source",
          audio: {
            contentType: Zt(g, "audio"),
            channels: "" + u
            // spatialRendering:
            //   audioCodec === 'ec-3' && channels.indexOf('JOC'),
          }
        })));
      }
    }));
  }), Promise.all(o.map((l) => {
    const h = va(l);
    return hr[h] || (hr[h] = e.decodingInfo(l));
  })).then((l) => ({
    supported: !l.some((h) => !h.supported),
    configurations: o,
    decodingInfoResults: l
  })).catch((l) => ({
    supported: !1,
    configurations: o,
    decodingInfoResults: [],
    error: l
  }));
}
function va(n) {
  const {
    audio: t,
    video: e
  } = n, s = e || t;
  if (s) {
    const r = s.contentType.split('"')[1];
    if (e)
      return `r${e.height}x${e.width}f${Math.ceil(e.framerate)}${e.transferFunction || "sd"}_${r}_${Math.ceil(e.bitrate / 1e5)}`;
    if (t)
      return `c${t.channels}${t.spatialRendering ? "s" : "n"}_${r}`;
  }
  return "";
}
function Sa() {
  if (typeof matchMedia == "function") {
    const n = matchMedia("(dynamic-range: high)"), t = matchMedia("bad query");
    if (n.media !== t.media)
      return n.matches === !0;
  }
  return !1;
}
function La(n, t) {
  let e = !1, s = [];
  return n && (e = n !== "SDR", s = [n]), t && (s = t.allowedVideoRanges || Ie.slice(0), e = t.preferHDR !== void 0 ? t.preferHDR : Sa(), e ? s = s.filter((r) => r !== "SDR") : s = ["SDR"]), {
    preferHDR: e,
    allowedVideoRanges: s
  };
}
function Aa(n, t, e, s, r) {
  const i = Object.keys(n), a = s == null ? void 0 : s.channels, o = s == null ? void 0 : s.audioCodec, l = a && parseInt(a) === 2;
  let h = !0, d = !1, c = 1 / 0, u = 1 / 0, g = 1 / 0, f = 0, m = [];
  const {
    preferHDR: E,
    allowedVideoRanges: y
  } = La(t, r);
  for (let R = i.length; R--; ) {
    const S = n[i[R]];
    h = S.channels[2] > 0, c = Math.min(c, S.minHeight), u = Math.min(u, S.minFramerate), g = Math.min(g, S.minBitrate);
    const I = y.filter((b) => S.videoRanges[b] > 0);
    I.length > 0 && (d = !0, m = I);
  }
  c = F(c) ? c : 0, u = F(u) ? u : 0;
  const T = Math.max(1080, c), A = Math.max(30, u);
  return g = F(g) ? g : e, e = Math.max(g, e), d || (t = void 0, m = []), {
    codecSet: i.reduce((R, S) => {
      const I = n[S];
      if (S === R)
        return R;
      if (I.minBitrate > e)
        return It(S, `min bitrate of ${I.minBitrate} > current estimate of ${e}`), R;
      if (!I.hasDefaultAudio)
        return It(S, "no renditions with default or auto-select sound found"), R;
      if (o && S.indexOf(o.substring(0, 4)) % 5 !== 0)
        return It(S, `audio codec preference "${o}" not found`), R;
      if (a && !l) {
        if (!I.channels[a])
          return It(S, `no renditions with ${a} channel sound found (channels options: ${Object.keys(I.channels)})`), R;
      } else if ((!o || l) && h && I.channels[2] === 0)
        return It(S, "no renditions with stereo sound found"), R;
      return I.minHeight > T ? (It(S, `min resolution of ${I.minHeight} > maximum of ${T}`), R) : I.minFramerate > A ? (It(S, `min framerate of ${I.minFramerate} > maximum of ${A}`), R) : m.some((b) => I.videoRanges[b] > 0) ? I.maxScore < f ? (It(S, `max score of ${I.maxScore} < selected max of ${f}`), R) : R && (Re(S) >= Re(R) || I.fragmentError > n[R].fragmentError) ? R : (f = I.maxScore, S) : (It(S, `no variants with VIDEO-RANGE of ${JSON.stringify(m)} found`), R);
    }, void 0),
    videoRanges: m,
    preferHDR: E,
    minFramerate: u,
    minBitrate: g
  };
}
function It(n, t) {
  v.log(`[abr] start candidates with "${n}" ignored because ${t}`);
}
function Ra(n) {
  return n.reduce((t, e) => {
    let s = t.groups[e.groupId];
    s || (s = t.groups[e.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: !1,
      hasAutoSelect: !1
    }), s.tracks.push(e);
    const r = e.channels || "2";
    return s.channels[r] = (s.channels[r] || 0) + 1, s.hasDefault = s.hasDefault || e.default, s.hasAutoSelect = s.hasAutoSelect || e.autoselect, s.hasDefault && (t.hasDefaultAudio = !0), s.hasAutoSelect && (t.hasAutoSelectAudio = !0), t;
  }, {
    hasDefaultAudio: !1,
    hasAutoSelectAudio: !1,
    groups: {}
  });
}
function Da(n, t, e, s) {
  return n.slice(e, s + 1).reduce((r, i) => {
    if (!i.codecSet)
      return r;
    const a = i.audioGroups;
    let o = r[i.codecSet];
    o || (r[i.codecSet] = o = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !a,
      fragmentError: 0
    }), o.minBitrate = Math.min(o.minBitrate, i.bitrate);
    const l = Math.min(i.height, i.width);
    return o.minHeight = Math.min(o.minHeight, l), o.minFramerate = Math.min(o.minFramerate, i.frameRate), o.maxScore = Math.max(o.maxScore, i.score), o.fragmentError += i.fragmentError, o.videoRanges[i.videoRange] = (o.videoRanges[i.videoRange] || 0) + 1, a && a.forEach((h) => {
      if (!h)
        return;
      const d = t.groups[h];
      d && (o.hasDefaultAudio = o.hasDefaultAudio || t.hasDefaultAudio ? d.hasDefault : d.hasAutoSelect || !t.hasDefaultAudio && !t.hasAutoSelectAudio, Object.keys(d.channels).forEach((c) => {
        o.channels[c] = (o.channels[c] || 0) + d.channels[c];
      }));
    }), r;
  }, {});
}
function At(n, t, e) {
  if ("attrs" in n) {
    const s = t.indexOf(n);
    if (s !== -1)
      return s;
  }
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    if (Nt(n, r, e))
      return s;
  }
  return -1;
}
function Nt(n, t, e) {
  const {
    groupId: s,
    name: r,
    lang: i,
    assocLang: a,
    default: o
  } = n, l = n.forced;
  return (s === void 0 || t.groupId === s) && (r === void 0 || t.name === r) && (i === void 0 || t.lang === i) && (i === void 0 || t.assocLang === a) && (o === void 0 || t.default === o) && (l === void 0 || t.forced === l) && (!("characteristics" in n) || Ia(n.characteristics || "", t.characteristics)) && (e === void 0 || e(n, t));
}
function Ia(n, t = "") {
  const e = n.split(","), s = t.split(",");
  return e.length === s.length && !e.some((r) => s.indexOf(r) === -1);
}
function Ot(n, t) {
  const {
    audioCodec: e,
    channels: s
  } = n;
  return (e === void 0 || (t.audioCodec || "").substring(0, 4) === e.substring(0, 4)) && (s === void 0 || s === (t.channels || "2"));
}
function ba(n, t, e, s, r) {
  const i = t[s], a = t.reduce((c, u, g) => {
    const f = u.uri;
    return (c[f] || (c[f] = [])).push(g), c;
  }, {})[i.uri];
  a.length > 1 && (s = Math.max.apply(Math, a));
  const o = i.videoRange, l = i.frameRate, h = i.codecSet.substring(0, 4), d = dr(t, s, (c) => {
    if (c.videoRange !== o || c.frameRate !== l || c.codecSet.substring(0, 4) !== h)
      return !1;
    const u = c.audioGroups, g = e.filter((f) => !u || u.indexOf(f.groupId) !== -1);
    return At(n, g, r) > -1;
  });
  return d > -1 ? d : dr(t, s, (c) => {
    const u = c.audioGroups, g = e.filter((f) => !u || u.indexOf(f.groupId) !== -1);
    return At(n, g, r) > -1;
  });
}
function dr(n, t, e) {
  for (let s = t; s > -1; s--)
    if (e(n[s]))
      return s;
  for (let s = t + 1; s < n.length; s++)
    if (e(n[s]))
      return s;
  return -1;
}
class ka {
  constructor(t) {
    this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = () => {
      const {
        fragCurrent: e,
        partCurrent: s,
        hls: r
      } = this, {
        autoLevelEnabled: i,
        media: a
      } = r;
      if (!e || !a)
        return;
      const o = performance.now(), l = s ? s.stats : e.stats, h = s ? s.duration : e.duration, d = o - l.loading.start, c = r.minAutoLevel;
      if (l.aborted || l.loaded && l.loaded === l.total || e.level <= c) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!i || a.paused || !a.playbackRate || !a.readyState)
        return;
      const u = r.mainForwardBufferInfo;
      if (u === null)
        return;
      const g = this.bwEstimator.getEstimateTTFB(), f = Math.abs(a.playbackRate);
      if (d <= Math.max(g, 1e3 * (h / (f * 2))))
        return;
      const m = u.len / f, E = l.loading.first ? l.loading.first - l.loading.start : -1, y = l.loaded && E > -1, T = this.getBwEstimate(), A = r.levels, R = A[e.level], S = l.total || Math.max(l.loaded, Math.round(h * R.averageBitrate / 8));
      let I = y ? d - E : d;
      I < 1 && y && (I = Math.min(d, l.loaded * 8 / T));
      const b = y ? l.loaded * 1e3 / I : 0, x = b ? (S - l.loaded) / b : S * 8 / T + g / 1e3;
      if (x <= m)
        return;
      const O = b ? b * 8 : T;
      let C = Number.POSITIVE_INFINITY, w;
      for (w = e.level - 1; w > c; w--) {
        const _ = A[w].maxBitrate;
        if (C = this.getTimeToLoadFrag(g / 1e3, O, h * _, !A[w].details), C < m)
          break;
      }
      if (C >= x || C > h * 10)
        return;
      r.nextLoadLevel = r.nextAutoLevel = w, y ? this.bwEstimator.sample(d - Math.min(g, E), l.loaded) : this.bwEstimator.sampleTTFB(d);
      const j = A[w].maxBitrate;
      this.getBwEstimate() * this.hls.config.abrBandWidthUpFactor > j && this.resetEstimator(j), this.clearTimer(), v.warn(`[abr] Fragment ${e.sn}${s ? " part " + s.index : ""} of level ${e.level} is loading too slowly;
      Time to underbuffer: ${m.toFixed(3)} s
      Estimated load time for current fragment: ${x.toFixed(3)} s
      Estimated load time for down switch fragment: ${C.toFixed(3)} s
      TTFB estimate: ${E | 0} ms
      Current BW estimate: ${F(T) ? T | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${w} @ ${j | 0} bps`), r.trigger(p.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: e,
        part: s,
        stats: l
      });
    }, this.hls = t, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(t) {
    t && (v.log(`setting initial bwe to ${t}`), this.hls.config.abrEwmaDefaultEstimate = t), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const t = this.hls.config;
    return new Ea(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.FRAG_LOADING, this.onFragLoading, this), t.on(p.FRAG_LOADED, this.onFragLoaded, this), t.on(p.FRAG_BUFFERED, this.onFragBuffered, this), t.on(p.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(p.LEVEL_LOADED, this.onLevelLoaded, this), t.on(p.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(p.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: t
    } = this;
    t && (t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.FRAG_LOADING, this.onFragLoading, this), t.off(p.FRAG_LOADED, this.onFragLoaded, this), t.off(p.FRAG_BUFFERED, this.onFragBuffered, this), t.off(p.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(p.LEVEL_LOADED, this.onLevelLoaded, this), t.off(p.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(p.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t.off(p.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(t, e) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(t, e) {
    const s = e.frag;
    if (!this.ignoreFragment(s)) {
      if (!s.bitrateTest) {
        var r;
        this.fragCurrent = s, this.partCurrent = (r = e.part) != null ? r : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(t, e) {
    this.clearTimer();
  }
  onError(t, e) {
    if (!e.fatal)
      switch (e.details) {
        case D.BUFFER_ADD_CODEC_ERROR:
        case D.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case D.FRAG_LOAD_TIMEOUT: {
          const s = e.frag, {
            fragCurrent: r,
            partCurrent: i
          } = this;
          if (s && r && s.sn === r.sn && s.level === r.level) {
            const a = performance.now(), o = i ? i.stats : s.stats, l = a - o.loading.start, h = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && h > -1) {
              const d = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(l - Math.min(d, h), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(l);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(t, e, s, r) {
    const i = t + s / e, a = r ? this.lastLevelLoadSec : 0;
    return i + a;
  }
  onLevelLoaded(t, e) {
    const s = this.hls.config, {
      loading: r
    } = e.stats, i = r.end - r.start;
    F(i) && (this.lastLevelLoadSec = i / 1e3), e.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD);
  }
  onFragLoaded(t, {
    frag: e,
    part: s
  }) {
    const r = s ? s.stats : e.stats;
    if (e.type === B.MAIN && this.bwEstimator.sampleTTFB(r.loading.first - r.loading.start), !this.ignoreFragment(e)) {
      if (this.clearTimer(), e.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const i = s ? s.duration : e.duration, a = this.hls.levels[e.level], o = (a.loaded ? a.loaded.bytes : 0) + r.loaded, l = (a.loaded ? a.loaded.duration : 0) + i;
        a.loaded = {
          bytes: o,
          duration: l
        }, a.realBitrate = Math.round(8 * o / l);
      }
      if (e.bitrateTest) {
        const i = {
          stats: r,
          frag: e,
          part: s,
          id: e.type
        };
        this.onFragBuffered(p.FRAG_BUFFERED, i), e.bitrateTest = !1;
      } else
        this.lastLoadedFragLevel = e.level;
    }
  }
  onFragBuffered(t, e) {
    const {
      frag: s,
      part: r
    } = e, i = r != null && r.stats.loaded ? r.stats : s.stats;
    if (i.aborted || this.ignoreFragment(s))
      return;
    const a = i.parsing.end - i.loading.start - Math.min(i.loading.first - i.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(a, i.loaded), i.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(t) {
    return t.type !== B.MAIN || t.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: t,
      minAutoLevel: e
    } = this.hls, s = this.getBwEstimate(), r = this.hls.config.maxStarvationDelay, i = this.findBestLevel(s, e, t, 0, r, 1, 1);
    if (i > -1)
      return i;
    const a = this.hls.firstLevel, o = Math.min(Math.max(a, e), t);
    return v.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const t = this.forcedAutoLevel, e = this.bwEstimator.canEstimate(), s = this.lastLoadedFragLevel > -1;
    if (t !== -1 && (!e || !s || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return t;
    const r = e && s ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (t !== -1) {
      const i = this.hls.levels;
      if (i.length > Math.max(t, r) && i[t].loadError <= i[r].loadError)
        return t;
    }
    return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: t,
      partCurrent: e,
      hls: s
    } = this, {
      maxAutoLevel: r,
      config: i,
      minAutoLevel: a
    } = s, o = e ? e.duration : t ? t.duration : 0, l = this.getBwEstimate(), h = this.getStarvationDelay();
    let d = i.abrBandWidthFactor, c = i.abrBandWidthUpFactor;
    if (h) {
      const E = this.findBestLevel(l, a, r, h, 0, d, c);
      if (E >= 0)
        return E;
    }
    let u = o ? Math.min(o, i.maxStarvationDelay) : i.maxStarvationDelay;
    if (!h) {
      const E = this.bitrateTestDelay;
      E && (u = (o ? Math.min(o, i.maxLoadingDelay) : i.maxLoadingDelay) - E, v.info(`[abr] bitrate test took ${Math.round(1e3 * E)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * u)} ms`), d = c = 1);
    }
    const g = this.findBestLevel(l, a, r, h, u, d, c);
    if (v.info(`[abr] ${h ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${g}`), g > -1)
      return g;
    const f = s.levels[a], m = s.levels[s.loadLevel];
    return (f == null ? void 0 : f.bitrate) < (m == null ? void 0 : m.bitrate) ? a : s.loadLevel;
  }
  getStarvationDelay() {
    const t = this.hls, e = t.media;
    if (!e)
      return 1 / 0;
    const s = e && e.playbackRate !== 0 ? Math.abs(e.playbackRate) : 1, r = t.mainForwardBufferInfo;
    return (r ? r.len : 0) / s;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(t, e, s, r, i, a, o) {
    var l;
    const h = r + i, d = this.lastLoadedFragLevel, c = d === -1 ? this.hls.firstLevel : d, {
      fragCurrent: u,
      partCurrent: g
    } = this, {
      levels: f,
      allAudioTracks: m,
      loadLevel: E,
      config: y
    } = this.hls;
    if (f.length === 1)
      return 0;
    const T = f[c], A = !!(T != null && (l = T.details) != null && l.live), R = E === -1 || d === -1;
    let S, I = "SDR", b = (T == null ? void 0 : T.frameRate) || 0;
    const {
      audioPreference: x,
      videoPreference: O
    } = y, C = this.audioTracksByGroup || (this.audioTracksByGroup = Ra(m));
    if (R) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const N = this.codecTiers || (this.codecTiers = Da(f, C, e, s)), G = Aa(N, I, t, x, O), {
        codecSet: P,
        videoRanges: M,
        minFramerate: q,
        minBitrate: K,
        preferHDR: Y
      } = G;
      S = P, I = Y ? M[M.length - 1] : M[0], b = q, t = Math.max(t, K), v.log(`[abr] picked start tier ${JSON.stringify(G)}`);
    } else
      S = T == null ? void 0 : T.codecSet, I = T == null ? void 0 : T.videoRange;
    const w = g ? g.duration : u ? u.duration : 0, j = this.bwEstimator.getEstimateTTFB() / 1e3, _ = [];
    for (let N = s; N >= e; N--) {
      var H;
      const G = f[N], P = N > c;
      if (!G)
        continue;
      if (y.useMediaCapabilities && !G.supportedResult && !G.supportedPromise) {
        const et = navigator.mediaCapabilities;
        typeof (et == null ? void 0 : et.decodingInfo) == "function" && ya(G, C, I, b, t, x) ? (G.supportedPromise = Ta(G, C, et), G.supportedPromise.then((st) => {
          if (!this.hls)
            return;
          G.supportedResult = st;
          const ct = this.hls.levels, mt = ct.indexOf(G);
          st.error ? v.warn(`[abr] MediaCapabilities decodingInfo error: "${st.error}" for level ${mt} ${JSON.stringify(st)}`) : st.supported || (v.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${mt} ${JSON.stringify(st)}`), mt > -1 && ct.length > 1 && (v.log(`[abr] Removing unsupported level ${mt}`), this.hls.removeLevel(mt)));
        })) : G.supportedResult = li;
      }
      if (S && G.codecSet !== S || I && G.videoRange !== I || P && b > G.frameRate || !P && b > 0 && b < G.frameRate || G.supportedResult && !((H = G.supportedResult.decodingInfoResults) != null && H[0].smooth)) {
        _.push(N);
        continue;
      }
      const M = G.details, q = (g ? M == null ? void 0 : M.partTarget : M == null ? void 0 : M.averagetargetduration) || w;
      let K;
      P ? K = o * t : K = a * t;
      const Y = w && r >= w * 2 && i === 0 ? f[N].averageBitrate : f[N].maxBitrate, Z = this.getTimeToLoadFrag(j, K, Y * q, M === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        K >= Y && // no level change, or new level has no error history
        (N === d || G.loadError === 0 && G.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (Z <= j || !F(Z) || A && !this.bitrateTestDelay || Z < h)
      ) {
        const et = this.forcedAutoLevel;
        return N !== E && (et === -1 || et !== E) && (_.length && v.trace(`[abr] Skipped level(s) ${_.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${f[_[0]].codecs}" ${f[_[0]].videoRange}; not compatible with "${T.codecs}" ${I}`), v.info(`[abr] switch candidate:${c}->${N} adjustedbw(${Math.round(K)})-bitrate=${Math.round(K - Y)} ttfb:${j.toFixed(1)} avgDuration:${q.toFixed(1)} maxFetchDuration:${h.toFixed(1)} fetchDuration:${Z.toFixed(1)} firstSelection:${R} codecSet:${S} videoRange:${I} hls.loadLevel:${E}`)), R && (this.firstSelection = N), N;
      }
    }
    return -1;
  }
  set nextAutoLevel(t) {
    const {
      maxAutoLevel: e,
      minAutoLevel: s
    } = this.hls, r = Math.min(Math.max(t, s), e);
    this._nextAutoLevel !== r && (this.nextAutoLevelKey = "", this._nextAutoLevel = r);
  }
}
class Ca {
  constructor() {
    this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(t) {
    return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, t), !0);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
var nt = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class wa {
  constructor(t) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.BUFFER_APPENDED, this.onBufferAppended, this), t.on(p.FRAG_BUFFERED, this.onFragBuffered, this), t.on(p.FRAG_LOADED, this.onFragLoaded, this);
  }
  _unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.BUFFER_APPENDED, this.onBufferAppended, this), t.off(p.FRAG_BUFFERED, this.onFragBuffered, this), t.off(p.FRAG_LOADED, this.onFragLoaded, this);
  }
  destroy() {
    this._unregisterListeners(), this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(t, e) {
    const s = this.activePartLists[e];
    if (s)
      for (let r = s.length; r--; ) {
        const i = s[r];
        if (!i)
          break;
        const a = i.end;
        if (i.start <= t && a !== null && t <= a)
          return i;
      }
    return this.getBufferedFrag(t, e);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(t, e) {
    const {
      fragments: s
    } = this, r = Object.keys(s);
    for (let i = r.length; i--; ) {
      const a = s[r[i]];
      if ((a == null ? void 0 : a.body.type) === e && a.buffered) {
        const o = a.body;
        if (o.start <= t && t <= o.end)
          return o;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(t, e, s, r) {
    this.timeRanges && (this.timeRanges[t] = e);
    const i = (r == null ? void 0 : r.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o || i >= o.body.sn)
        return;
      if (!o.buffered && !o.loaded) {
        o.body.type === s && this.removeFragment(o.body);
        return;
      }
      const l = o.range[t];
      l && l.time.some((h) => {
        const d = !this.isTimeBuffered(h.startPTS, h.endPTS, e);
        return d && this.removeFragment(o.body), d;
      });
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(t) {
    const e = this.timeRanges, {
      frag: s,
      part: r
    } = t;
    if (!e || s.sn === "initSegment")
      return;
    const i = $t(s), a = this.fragments[i];
    if (!a || a.buffered && s.gap)
      return;
    const o = !s.relurl;
    Object.keys(e).forEach((l) => {
      const h = s.elementaryStreams[l];
      if (!h)
        return;
      const d = e[l], c = o || h.partial === !0;
      a.range[l] = this.getBufferedTimes(s, r, c, d);
    }), a.loaded = null, Object.keys(a.range).length ? (a.buffered = !0, (a.body.endList = s.endList || a.body.endList) && (this.endListFragments[a.body.type] = a), ae(a) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(a.body);
  }
  removeParts(t, e) {
    const s = this.activePartLists[e];
    s && (this.activePartLists[e] = s.filter((r) => r.fragment.sn >= t));
  }
  fragBuffered(t, e) {
    const s = $t(t);
    let r = this.fragments[s];
    !r && e && (r = this.fragments[s] = {
      body: t,
      appendedPTS: null,
      loaded: null,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    }, t.gap && (this.hasGaps = !0)), r && (r.loaded = null, r.buffered = !0);
  }
  getBufferedTimes(t, e, s, r) {
    const i = {
      time: [],
      partial: s
    }, a = t.start, o = t.end, l = t.minEndPTS || o, h = t.maxStartPTS || a;
    for (let d = 0; d < r.length; d++) {
      const c = r.start(d) - this.bufferPadding, u = r.end(d) + this.bufferPadding;
      if (h >= c && l <= u) {
        i.time.push({
          startPTS: Math.max(a, r.start(d)),
          endPTS: Math.min(o, r.end(d))
        });
        break;
      } else if (a < u && o > c) {
        const g = Math.max(a, r.start(d)), f = Math.min(o, r.end(d));
        f > g && (i.partial = !0, i.time.push({
          startPTS: g,
          endPTS: f
        }));
      } else if (o <= c)
        break;
    }
    return i;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(t) {
    let e = null, s, r, i, a = 0;
    const {
      bufferPadding: o,
      fragments: l
    } = this;
    return Object.keys(l).forEach((h) => {
      const d = l[h];
      d && ae(d) && (r = d.body.start - o, i = d.body.end + o, t >= r && t <= i && (s = Math.min(t - r, i - t), a <= s && (e = d.body, a = s)));
    }), e;
  }
  isEndListAppended(t) {
    const e = this.endListFragments[t];
    return e !== void 0 && (e.buffered || ae(e));
  }
  getState(t) {
    const e = $t(t), s = this.fragments[e];
    return s ? s.buffered ? ae(s) ? nt.PARTIAL : nt.OK : nt.APPENDING : nt.NOT_LOADED;
  }
  isTimeBuffered(t, e, s) {
    let r, i;
    for (let a = 0; a < s.length; a++) {
      if (r = s.start(a) - this.bufferPadding, i = s.end(a) + this.bufferPadding, t >= r && e <= i)
        return !0;
      if (e <= r)
        return !1;
    }
    return !1;
  }
  onFragLoaded(t, e) {
    const {
      frag: s,
      part: r
    } = e;
    if (s.sn === "initSegment" || s.bitrateTest)
      return;
    const i = r ? null : e, a = $t(s);
    this.fragments[a] = {
      body: s,
      appendedPTS: null,
      loaded: i,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(t, e) {
    const {
      frag: s,
      part: r,
      timeRanges: i
    } = e;
    if (s.sn === "initSegment")
      return;
    const a = s.type;
    if (r) {
      let o = this.activePartLists[a];
      o || (this.activePartLists[a] = o = []), o.push(r);
    }
    this.timeRanges = i, Object.keys(i).forEach((o) => {
      const l = i[o];
      this.detectEvictedFragments(o, l, a, r);
    });
  }
  onFragBuffered(t, e) {
    this.detectPartialFragments(e);
  }
  hasFragment(t) {
    const e = $t(t);
    return !!this.fragments[e];
  }
  hasParts(t) {
    var e;
    return !!((e = this.activePartLists[t]) != null && e.length);
  }
  removeFragmentsInRange(t, e, s, r, i) {
    r && !this.hasGaps || Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o)
        return;
      const l = o.body;
      l.type !== s || r && !l.gap || l.start < e && l.end > t && (o.buffered || i) && this.removeFragment(l);
    });
  }
  removeFragment(t) {
    const e = $t(t);
    t.stats.loaded = 0, t.clearElementaryStreamInfo();
    const s = this.activePartLists[t.type];
    if (s) {
      const r = t.sn;
      this.activePartLists[t.type] = s.filter((i) => i.fragment.sn !== r);
    }
    delete this.fragments[e], t.endList && delete this.endListFragments[t.type];
  }
  removeAllFragments() {
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
  }
}
function ae(n) {
  var t, e, s;
  return n.buffered && (n.body.gap || ((t = n.range.video) == null ? void 0 : t.partial) || ((e = n.range.audio) == null ? void 0 : e.partial) || ((s = n.range.audiovideo) == null ? void 0 : s.partial));
}
function $t(n) {
  return `${n.type}_${n.level}_${n.sn}`;
}
const Pa = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class Q {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(t, e) {
    try {
      if (t) {
        const s = Q.getBuffered(t);
        for (let r = 0; r < s.length; r++)
          if (e >= s.start(r) && e <= s.end(r))
            return !0;
      }
    } catch {
    }
    return !1;
  }
  static bufferInfo(t, e, s) {
    try {
      if (t) {
        const r = Q.getBuffered(t), i = [];
        let a;
        for (a = 0; a < r.length; a++)
          i.push({
            start: r.start(a),
            end: r.end(a)
          });
        return this.bufferedInfo(i, e, s);
      }
    } catch {
    }
    return {
      len: 0,
      start: e,
      end: e,
      nextStart: void 0
    };
  }
  static bufferedInfo(t, e, s) {
    e = Math.max(0, e), t.sort(function(h, d) {
      return h.start - d.start || d.end - h.end;
    });
    let r = [];
    if (s)
      for (let h = 0; h < t.length; h++) {
        const d = r.length;
        if (d) {
          const c = r[d - 1].end;
          t[h].start - c < s ? t[h].end > c && (r[d - 1].end = t[h].end) : r.push(t[h]);
        } else
          r.push(t[h]);
      }
    else
      r = t;
    let i = 0, a, o = e, l = e;
    for (let h = 0; h < r.length; h++) {
      const d = r[h].start, c = r[h].end;
      if (e + s >= d && e < c)
        o = d, l = c, i = l - e;
      else if (e + s < d) {
        a = d;
        break;
      }
    }
    return {
      len: i,
      start: o || 0,
      end: l || 0,
      nextStart: a
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(t) {
    try {
      return t.buffered;
    } catch (e) {
      return v.log("failed to get media.buffered", e), Pa;
    }
  }
}
class Is {
  constructor(t, e, s, r = 0, i = -1, a = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = oe(), this.buffering = {
      audio: oe(),
      video: oe(),
      audiovideo: oe()
    }, this.level = t, this.sn = e, this.id = s, this.size = r, this.part = i, this.partial = a;
  }
}
function oe() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
function pe(n, t) {
  for (let s = 0, r = n.length; s < r; s++) {
    var e;
    if (((e = n[s]) == null ? void 0 : e.cc) === t)
      return n[s];
  }
  return null;
}
function xa(n, t, e) {
  return !!(t && (e.endCC > e.startCC || n && n.cc < e.startCC));
}
function _a(n, t) {
  const e = n.fragments, s = t.fragments;
  if (!s.length || !e.length) {
    v.log("No fragments to align");
    return;
  }
  const r = pe(e, s[0].cc);
  if (!r || r && !r.startPTS) {
    v.log("No frag in previous level to align on");
    return;
  }
  return r;
}
function cr(n, t) {
  if (n) {
    const e = n.start + t;
    n.start = n.startPTS = e, n.endPTS = e + n.duration;
  }
}
function hi(n, t) {
  const e = t.fragments;
  for (let s = 0, r = e.length; s < r; s++)
    cr(e[s], n);
  t.fragmentHint && cr(t.fragmentHint, n), t.alignedSliding = !0;
}
function Oa(n, t, e) {
  t && (Ma(n, e, t), !e.alignedSliding && t && we(e, t), !e.alignedSliding && t && !e.skippedSegments && ii(t, e));
}
function Ma(n, t, e) {
  if (xa(n, e, t)) {
    const s = _a(e, t);
    s && F(s.start) && (v.log(`Adjusting PTS using last level due to CC increase within current level ${t.url}`), hi(s.start, t));
  }
}
function we(n, t) {
  if (!n.hasProgramDateTime || !t.hasProgramDateTime)
    return;
  const e = n.fragments, s = t.fragments;
  if (!e.length || !s.length)
    return;
  let r, i;
  const a = Math.min(t.endCC, n.endCC);
  t.startCC < a && n.startCC < a && (r = pe(s, a), i = pe(e, a)), (!r || !i) && (r = s[Math.floor(s.length / 2)], i = pe(e, r.cc) || e[Math.floor(e.length / 2)]);
  const o = r.programDateTime, l = i.programDateTime;
  if (!o || !l)
    return;
  const h = (l - o) / 1e3 - (i.start - r.start);
  hi(h, n);
}
const ur = Math.pow(2, 17);
class Fa {
  constructor(t) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(t, e) {
    const s = t.url;
    if (!s)
      return Promise.reject(new kt({
        type: $.NETWORK_ERROR,
        details: D.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: t,
        error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const r = this.config, i = r.fLoader, a = r.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), t.gap)
        if (t.tagList.some((g) => g[0] === "GAP")) {
          l(gr(t));
          return;
        } else
          t.gap = !1;
      const h = this.loader = t.loader = i ? new i(r) : new a(r), d = fr(t), c = lr(r.fragLoadPolicy.default), u = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: t.sn === "initSegment" ? 1 / 0 : ur
      };
      t.stats = h.stats, h.load(d, u, {
        onSuccess: (g, f, m, E) => {
          this.resetLoader(t, h);
          let y = g.data;
          m.resetIV && t.decryptdata && (t.decryptdata.iv = new Uint8Array(y.slice(0, 16)), y = y.slice(16)), o({
            frag: t,
            part: null,
            payload: y,
            networkDetails: E
          });
        },
        onError: (g, f, m, E) => {
          this.resetLoader(t, h), l(new kt({
            type: $.NETWORK_ERROR,
            details: D.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: t,
            response: at({
              url: s,
              data: void 0
            }, g),
            error: new Error(`HTTP Error ${g.code} ${g.text}`),
            networkDetails: m,
            stats: E
          }));
        },
        onAbort: (g, f, m) => {
          this.resetLoader(t, h), l(new kt({
            type: $.NETWORK_ERROR,
            details: D.INTERNAL_ABORTED,
            fatal: !1,
            frag: t,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: g
          }));
        },
        onTimeout: (g, f, m) => {
          this.resetLoader(t, h), l(new kt({
            type: $.NETWORK_ERROR,
            details: D.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: t,
            error: new Error(`Timeout after ${u.timeout}ms`),
            networkDetails: m,
            stats: g
          }));
        },
        onProgress: (g, f, m, E) => {
          e && e({
            frag: t,
            part: null,
            payload: m,
            networkDetails: E
          });
        }
      });
    });
  }
  loadPart(t, e, s) {
    this.abort();
    const r = this.config, i = r.fLoader, a = r.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), t.gap || e.gap) {
        l(gr(t, e));
        return;
      }
      const h = this.loader = t.loader = i ? new i(r) : new a(r), d = fr(t, e), c = lr(r.fragLoadPolicy.default), u = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: ur
      };
      e.stats = h.stats, h.load(d, u, {
        onSuccess: (g, f, m, E) => {
          this.resetLoader(t, h), this.updateStatsFromPart(t, e);
          const y = {
            frag: t,
            part: e,
            payload: g.data,
            networkDetails: E
          };
          s(y), o(y);
        },
        onError: (g, f, m, E) => {
          this.resetLoader(t, h), l(new kt({
            type: $.NETWORK_ERROR,
            details: D.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: t,
            part: e,
            response: at({
              url: d.url,
              data: void 0
            }, g),
            error: new Error(`HTTP Error ${g.code} ${g.text}`),
            networkDetails: m,
            stats: E
          }));
        },
        onAbort: (g, f, m) => {
          t.stats.aborted = e.stats.aborted, this.resetLoader(t, h), l(new kt({
            type: $.NETWORK_ERROR,
            details: D.INTERNAL_ABORTED,
            fatal: !1,
            frag: t,
            part: e,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: g
          }));
        },
        onTimeout: (g, f, m) => {
          this.resetLoader(t, h), l(new kt({
            type: $.NETWORK_ERROR,
            details: D.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: t,
            part: e,
            error: new Error(`Timeout after ${u.timeout}ms`),
            networkDetails: m,
            stats: g
          }));
        }
      });
    });
  }
  updateStatsFromPart(t, e) {
    const s = t.stats, r = e.stats, i = r.total;
    if (s.loaded += r.loaded, i) {
      const l = Math.round(t.duration / e.duration), h = Math.min(Math.round(s.loaded / i), l), d = (l - h) * Math.round(s.loaded / h);
      s.total = s.loaded + d;
    } else
      s.total = Math.max(s.loaded, s.total);
    const a = s.loading, o = r.loading;
    a.start ? a.first += o.first - o.start : (a.start = o.start, a.first = o.first), a.end = o.end;
  }
  resetLoader(t, e) {
    t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy();
  }
}
function fr(n, t = null) {
  const e = t || n, s = {
    frag: n,
    part: t,
    responseType: "arraybuffer",
    url: e.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, r = e.byteRangeStartOffset, i = e.byteRangeEndOffset;
  if (F(r) && F(i)) {
    var a;
    let o = r, l = i;
    if (n.sn === "initSegment" && ((a = n.decryptdata) == null ? void 0 : a.method) === "AES-128") {
      const h = i - r;
      h % 16 && (l = i + (16 - h % 16)), r !== 0 && (s.resetIV = !0, o = r - 16);
    }
    s.rangeStart = o, s.rangeEnd = l;
  }
  return s;
}
function gr(n, t) {
  const e = new Error(`GAP ${n.gap ? "tag" : "attribute"} found`), s = {
    type: $.MEDIA_ERROR,
    details: D.FRAG_GAP,
    fatal: !1,
    frag: n,
    error: e,
    networkDetails: null
  };
  return t && (s.part = t), (t || n).stats.aborted = !0, new kt(s);
}
class kt extends Error {
  constructor(t) {
    super(t.error.message), this.data = void 0, this.data = t;
  }
}
class Na {
  constructor(t, e) {
    this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e;
  }
  decrypt(t, e) {
    return this.subtle.decrypt({
      name: "AES-CBC",
      iv: this.aesIV
    }, e, t);
  }
}
class Ua {
  constructor(t, e) {
    this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e;
  }
  expandKey() {
    return this.subtle.importKey("raw", this.key, {
      name: "AES-CBC"
    }, !1, ["encrypt", "decrypt"]);
  }
}
function Ba(n) {
  const t = n.byteLength, e = t && new DataView(n.buffer).getUint8(t - 1);
  return e ? Ft(n, 0, t - e) : n;
}
class $a {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(t) {
    const e = new DataView(t), s = new Uint32Array(4);
    for (let r = 0; r < 4; r++)
      s[r] = e.getUint32(r * 4);
    return s;
  }
  initTable() {
    const t = this.sBox, e = this.invSBox, s = this.subMix, r = s[0], i = s[1], a = s[2], o = s[3], l = this.invSubMix, h = l[0], d = l[1], c = l[2], u = l[3], g = new Uint32Array(256);
    let f = 0, m = 0, E = 0;
    for (E = 0; E < 256; E++)
      E < 128 ? g[E] = E << 1 : g[E] = E << 1 ^ 283;
    for (E = 0; E < 256; E++) {
      let y = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
      y = y >>> 8 ^ y & 255 ^ 99, t[f] = y, e[y] = f;
      const T = g[f], A = g[T], R = g[A];
      let S = g[y] * 257 ^ y * 16843008;
      r[f] = S << 24 | S >>> 8, i[f] = S << 16 | S >>> 16, a[f] = S << 8 | S >>> 24, o[f] = S, S = R * 16843009 ^ A * 65537 ^ T * 257 ^ f * 16843008, h[y] = S << 24 | S >>> 8, d[y] = S << 16 | S >>> 16, c[y] = S << 8 | S >>> 24, u[y] = S, f ? (f = T ^ g[g[g[R ^ T]]], m ^= g[g[m]]) : f = m = 1;
    }
  }
  expandKey(t) {
    const e = this.uint8ArrayToUint32Array_(t);
    let s = !0, r = 0;
    for (; r < e.length && s; )
      s = e[r] === this.key[r], r++;
    if (s)
      return;
    this.key = e;
    const i = this.keySize = e.length;
    if (i !== 4 && i !== 6 && i !== 8)
      throw new Error("Invalid aes key size=" + i);
    const a = this.ksRows = (i + 6 + 1) * 4;
    let o, l;
    const h = this.keySchedule = new Uint32Array(a), d = this.invKeySchedule = new Uint32Array(a), c = this.sBox, u = this.rcon, g = this.invSubMix, f = g[0], m = g[1], E = g[2], y = g[3];
    let T, A;
    for (o = 0; o < a; o++) {
      if (o < i) {
        T = h[o] = e[o];
        continue;
      }
      A = T, o % i === 0 ? (A = A << 8 | A >>> 24, A = c[A >>> 24] << 24 | c[A >>> 16 & 255] << 16 | c[A >>> 8 & 255] << 8 | c[A & 255], A ^= u[o / i | 0] << 24) : i > 6 && o % i === 4 && (A = c[A >>> 24] << 24 | c[A >>> 16 & 255] << 16 | c[A >>> 8 & 255] << 8 | c[A & 255]), h[o] = T = (h[o - i] ^ A) >>> 0;
    }
    for (l = 0; l < a; l++)
      o = a - l, l & 3 ? A = h[o] : A = h[o - 4], l < 4 || o <= 4 ? d[l] = A : d[l] = f[c[A >>> 24]] ^ m[c[A >>> 16 & 255]] ^ E[c[A >>> 8 & 255]] ^ y[c[A & 255]], d[l] = d[l] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(t) {
    return t << 24 | (t & 65280) << 8 | (t & 16711680) >> 8 | t >>> 24;
  }
  decrypt(t, e, s) {
    const r = this.keySize + 6, i = this.invKeySchedule, a = this.invSBox, o = this.invSubMix, l = o[0], h = o[1], d = o[2], c = o[3], u = this.uint8ArrayToUint32Array_(s);
    let g = u[0], f = u[1], m = u[2], E = u[3];
    const y = new Int32Array(t), T = new Int32Array(y.length);
    let A, R, S, I, b, x, O, C, w, j, _, H, N, G;
    const P = this.networkToHostOrderSwap;
    for (; e < y.length; ) {
      for (w = P(y[e]), j = P(y[e + 1]), _ = P(y[e + 2]), H = P(y[e + 3]), b = w ^ i[0], x = H ^ i[1], O = _ ^ i[2], C = j ^ i[3], N = 4, G = 1; G < r; G++)
        A = l[b >>> 24] ^ h[x >> 16 & 255] ^ d[O >> 8 & 255] ^ c[C & 255] ^ i[N], R = l[x >>> 24] ^ h[O >> 16 & 255] ^ d[C >> 8 & 255] ^ c[b & 255] ^ i[N + 1], S = l[O >>> 24] ^ h[C >> 16 & 255] ^ d[b >> 8 & 255] ^ c[x & 255] ^ i[N + 2], I = l[C >>> 24] ^ h[b >> 16 & 255] ^ d[x >> 8 & 255] ^ c[O & 255] ^ i[N + 3], b = A, x = R, O = S, C = I, N = N + 4;
      A = a[b >>> 24] << 24 ^ a[x >> 16 & 255] << 16 ^ a[O >> 8 & 255] << 8 ^ a[C & 255] ^ i[N], R = a[x >>> 24] << 24 ^ a[O >> 16 & 255] << 16 ^ a[C >> 8 & 255] << 8 ^ a[b & 255] ^ i[N + 1], S = a[O >>> 24] << 24 ^ a[C >> 16 & 255] << 16 ^ a[b >> 8 & 255] << 8 ^ a[x & 255] ^ i[N + 2], I = a[C >>> 24] << 24 ^ a[b >> 16 & 255] << 16 ^ a[x >> 8 & 255] << 8 ^ a[O & 255] ^ i[N + 3], T[e] = P(A ^ g), T[e + 1] = P(I ^ f), T[e + 2] = P(S ^ m), T[e + 3] = P(R ^ E), g = w, f = j, m = _, E = H, e = e + 4;
    }
    return T.buffer;
  }
}
const Ga = 16;
class bs {
  constructor(t, {
    removePKCS7Padding: e = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = t.enableSoftwareAES, this.removePKCS7Padding = e, e)
      try {
        const s = self.crypto;
        s && (this.subtle = s.subtle || s.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: t,
      remainderData: e
    } = this;
    if (!t || e)
      return this.reset(), null;
    const s = new Uint8Array(t);
    return this.reset(), this.removePKCS7Padding ? Ba(s) : s;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(t, e, s) {
    return this.useSoftware ? new Promise((r, i) => {
      this.softwareDecrypt(new Uint8Array(t), e, s);
      const a = this.flush();
      a ? r(a.buffer) : i(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(t), e, s);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(t, e, s) {
    const {
      currentIV: r,
      currentResult: i,
      remainderData: a
    } = this;
    this.logOnce("JS AES decrypt"), a && (t = gt(a, t), this.remainderData = null);
    const o = this.getValidChunk(t);
    if (!o.length)
      return null;
    r && (s = r);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new $a()), l.expandKey(e);
    const h = i;
    return this.currentResult = l.decrypt(o.buffer, 0, s), this.currentIV = Ft(o, -16).buffer, h || null;
  }
  webCryptoDecrypt(t, e, s) {
    if (this.key !== e || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(t, e, s));
      this.key = e, this.fastAesKey = new Ua(this.subtle, e);
    }
    return this.fastAesKey.expandKey().then((r) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new Na(this.subtle, new Uint8Array(s)).decrypt(t.buffer, r)) : Promise.reject(new Error("web crypto not initialized"))).catch((r) => (v.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`), this.onWebCryptoError(t, e, s)));
  }
  onWebCryptoError(t, e, s) {
    this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(t, e, s);
    const r = this.flush();
    if (r)
      return r.buffer;
    throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
  }
  getValidChunk(t) {
    let e = t;
    const s = t.length - t.length % Ga;
    return s !== t.length && (e = Ft(t, 0, s), this.remainderData = Ft(t, s)), e;
  }
  logOnce(t) {
    this.logEnabled && (v.log(`[decrypter]: ${t}`), this.logEnabled = !1);
  }
}
const Ka = {
  toString: function(n) {
    let t = "";
    const e = n.length;
    for (let s = 0; s < e; s++)
      t += `[${n.start(s).toFixed(3)}-${n.end(s).toFixed(3)}]`;
    return t;
  }
}, k = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK: "WAITING_TRACK",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_INIT_PTS: "WAITING_INIT_PTS",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class ks extends Ca {
  constructor(t, e, s, r, i) {
    super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = k.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.buffering = !0, this.onvseeking = null, this.onvended = null, this.logPrefix = "", this.log = void 0, this.warn = void 0, this.playlistType = i, this.logPrefix = r, this.log = v.log.bind(v, `${r}:`), this.warn = v.warn.bind(v, `${r}:`), this.hls = t, this.fragmentLoader = new Fa(t.config), this.keyLoader = s, this.fragmentTracker = e, this.config = t.config, this.decrypter = new bs(t.config), t.on(p.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startLoad(t) {
  }
  stopLoad() {
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const t = this.fragCurrent;
    t != null && t.loader && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = k.STOPPED;
  }
  pauseBuffering() {
    this.buffering = !1;
  }
  resumeBuffering() {
    this.buffering = !0;
  }
  _streamEnded(t, e) {
    if (e.live || t.nextStart || !t.end || !this.media)
      return !1;
    const s = e.partList;
    if (s != null && s.length) {
      const i = s[s.length - 1];
      return Q.isBuffered(this.media, i.start + i.duration / 2);
    }
    const r = e.fragments[e.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(r);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null) {
      var t;
      return (t = this.levelLastLoaded) == null ? void 0 : t.details;
    }
  }
  onMediaAttached(t, e) {
    const s = this.media = this.mediaBuffer = e.media;
    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), s.addEventListener("seeking", this.onvseeking), s.addEventListener("ended", this.onvended);
    const r = this.config;
    this.levels && r.autoStartLoad && this.state === k.STOPPED && this.startLoad(r.startPosition);
  }
  onMediaDetaching() {
    const t = this.media;
    t != null && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && this.onvseeking && this.onvended && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
  }
  onMediaSeeking() {
    const {
      config: t,
      fragCurrent: e,
      media: s,
      mediaBuffer: r,
      state: i
    } = this, a = s ? s.currentTime : 0, o = Q.bufferInfo(r || s, a, t.maxBufferHole);
    if (this.log(`media seeking to ${F(a) ? a.toFixed(3) : a}, state: ${i}`), this.state === k.ENDED)
      this.resetLoadingState();
    else if (e) {
      const l = t.maxFragLookUpTolerance, h = e.start - l, d = e.start + e.duration + l;
      if (!o.len || d < o.start || h > o.end) {
        const c = a > d;
        (a < h || c) && (c && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
      }
    }
    s && (this.fragmentTracker.removeFragmentsInRange(a, 1 / 0, this.playlistType, !0), this.lastCurrentTime = a), !this.loadedmetadata && !o.len && (this.nextLoadPosition = this.startPosition = a), this.tickImmediate();
  }
  onMediaEnded() {
    this.startPosition = this.lastCurrentTime = 0;
  }
  onManifestLoaded(t, e) {
    this.startTimeOffset = e.startTimeOffset, this.initPTS = [];
  }
  onHandlerDestroying() {
    this.hls.off(p.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), super.onHandlerDestroying(), this.hls = null;
  }
  onHandlerDestroyed() {
    this.state = k.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(t, e, s) {
    this._loadFragForPlayback(t, e, s);
  }
  _loadFragForPlayback(t, e, s) {
    const r = (i) => {
      if (this.fragContextChanged(t)) {
        this.warn(`Fragment ${t.sn}${i.part ? " p: " + i.part.index : ""} of level ${t.level} was dropped during download.`), this.fragmentTracker.removeFragment(t);
        return;
      }
      t.stats.chunkCount++, this._handleFragmentLoadProgress(i);
    };
    this._doFragLoad(t, e, s, r).then((i) => {
      if (!i)
        return;
      const a = this.state;
      if (this.fragContextChanged(t)) {
        (a === k.FRAG_LOADING || !this.fragCurrent && a === k.PARSING) && (this.fragmentTracker.removeFragment(t), this.state = k.IDLE);
        return;
      }
      "payload" in i && (this.log(`Loaded fragment ${t.sn} of level ${t.level}`), this.hls.trigger(p.FRAG_LOADED, i)), this._handleFragmentLoadComplete(i);
    }).catch((i) => {
      this.state === k.STOPPED || this.state === k.ERROR || (this.warn(`Frag error: ${(i == null ? void 0 : i.message) || i}`), this.resetFragmentLoading(t));
    });
  }
  clearTrackerIfNeeded(t) {
    var e;
    const {
      fragmentTracker: s
    } = this;
    if (s.getState(t) === nt.APPENDING) {
      const r = t.type, i = this.getFwdBufferInfo(this.mediaBuffer, r), a = Math.max(t.duration, i ? i.len : this.config.maxBufferLength), o = this.backtrackFragment;
      ((o ? t.sn - o.sn : 0) === 1 || this.reduceMaxBufferLength(a, t.duration)) && s.removeFragment(t);
    } else ((e = this.mediaBuffer) == null ? void 0 : e.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(t.type) && (s.detectPartialFragments({
      frag: t,
      part: null,
      stats: t.stats,
      id: t.type
    }), s.getState(t) === nt.PARTIAL && s.removeFragment(t));
  }
  checkLiveUpdate(t) {
    if (t.updated && !t.live) {
      const e = t.fragments[t.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: e,
        part: null,
        stats: e.stats,
        id: e.type
      });
    }
    t.fragments[0] || (t.deltaUpdateFailed = !0);
  }
  flushMainBuffer(t, e, s = null) {
    if (!(t - e))
      return;
    const r = {
      startOffset: t,
      endOffset: e,
      type: s
    };
    this.hls.trigger(p.BUFFER_FLUSHING, r);
  }
  _loadInitSegment(t, e) {
    this._doFragLoad(t, e).then((s) => {
      if (!s || this.fragContextChanged(t) || !this.levels)
        throw new Error("init load aborted");
      return s;
    }).then((s) => {
      const {
        hls: r
      } = this, {
        payload: i
      } = s, a = t.decryptdata;
      if (i && i.byteLength > 0 && a != null && a.key && a.iv && a.method === "AES-128") {
        const o = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(i), a.key.buffer, a.iv.buffer).catch((l) => {
          throw r.trigger(p.ERROR, {
            type: $.MEDIA_ERROR,
            details: D.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: t
          }), l;
        }).then((l) => {
          const h = self.performance.now();
          return r.trigger(p.FRAG_DECRYPTED, {
            frag: t,
            payload: l,
            stats: {
              tstart: o,
              tdecrypt: h
            }
          }), s.payload = l, this.completeInitSegmentLoad(s);
        });
      }
      return this.completeInitSegmentLoad(s);
    }).catch((s) => {
      this.state === k.STOPPED || this.state === k.ERROR || (this.warn(s), this.resetFragmentLoading(t));
    });
  }
  completeInitSegmentLoad(t) {
    const {
      levels: e
    } = this;
    if (!e)
      throw new Error("init load aborted, missing levels");
    const s = t.frag.stats;
    this.state = k.IDLE, t.frag.data = new Uint8Array(t.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick();
  }
  fragContextChanged(t) {
    const {
      fragCurrent: e
    } = this;
    return !t || !e || t.sn !== e.sn || t.level !== e.level;
  }
  fragBufferedComplete(t, e) {
    var s, r, i, a;
    const o = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${t.type} sn: ${t.sn}${e ? " part: " + e.index : ""} of ${this.playlistType === B.MAIN ? "level" : "track"} ${t.level} (frag:[${((s = t.startPTS) != null ? s : NaN).toFixed(3)}-${((r = t.endPTS) != null ? r : NaN).toFixed(3)}] > buffer:${o ? Ka.toString(Q.getBuffered(o)) : "(detached)"})`), t.sn !== "initSegment") {
      var l;
      if (t.type !== B.SUBTITLE) {
        const d = t.elementaryStreams;
        if (!Object.keys(d).some((c) => !!d[c])) {
          this.state = k.IDLE;
          return;
        }
      }
      const h = (l = this.levels) == null ? void 0 : l[t.level];
      h != null && h.fragmentError && (this.log(`Resetting level fragment error count of ${h.fragmentError} on frag buffered`), h.fragmentError = 0);
    }
    this.state = k.IDLE, o && (!this.loadedmetadata && t.type == B.MAIN && o.buffered.length && ((i = this.fragCurrent) == null ? void 0 : i.sn) === ((a = this.fragPrevious) == null ? void 0 : a.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick());
  }
  seekToStartPos() {
  }
  _handleFragmentLoadComplete(t) {
    const {
      transmuxer: e
    } = this;
    if (!e)
      return;
    const {
      frag: s,
      part: r,
      partsLoaded: i
    } = t, a = !i || i.length === 0 || i.some((l) => !l), o = new Is(s.level, s.sn, s.stats.chunkCount + 1, 0, r ? r.index : -1, !a);
    e.flush(o);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _handleFragmentLoadProgress(t) {
  }
  _doFragLoad(t, e, s = null, r) {
    var i;
    const a = e == null ? void 0 : e.details;
    if (!this.levels || !a)
      throw new Error(`frag load aborted, missing level${a ? "" : " detail"}s`);
    let o = null;
    if (t.encrypted && !((i = t.decryptdata) != null && i.key) ? (this.log(`Loading key for ${t.sn} of [${a.startSN}-${a.endSN}], ${this.logPrefix === "[stream-controller]" ? "level" : "track"} ${t.level}`), this.state = k.KEY_LOADING, this.fragCurrent = t, o = this.keyLoader.load(t).then((d) => {
      if (!this.fragContextChanged(d.frag))
        return this.hls.trigger(p.KEY_LOADED, d), this.state === k.KEY_LOADING && (this.state = k.IDLE), d;
    }), this.hls.trigger(p.KEY_LOADING, {
      frag: t
    }), this.fragCurrent === null && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))) : !t.encrypted && a.encryptedFragments.length && this.keyLoader.loadClear(t, a.encryptedFragments), s = Math.max(t.start, s || 0), this.config.lowLatencyMode && t.sn !== "initSegment") {
      const d = a.partList;
      if (d && r) {
        s > t.end && a.fragmentHint && (t = a.fragmentHint);
        const c = this.getNextPart(d, t, s);
        if (c > -1) {
          const u = d[c];
          this.log(`Loading part sn: ${t.sn} p: ${u.index} cc: ${t.cc} of playlist [${a.startSN}-${a.endSN}] parts [0-${c}-${d.length - 1}] ${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${t.level}, target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = u.start + u.duration, this.state = k.FRAG_LOADING;
          let g;
          return o ? g = o.then((f) => !f || this.fragContextChanged(f.frag) ? null : this.doFragPartsLoad(t, u, e, r)).catch((f) => this.handleFragLoadError(f)) : g = this.doFragPartsLoad(t, u, e, r).catch((f) => this.handleFragLoadError(f)), this.hls.trigger(p.FRAG_LOADING, {
            frag: t,
            part: u,
            targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : g;
        } else if (!t.url || this.loadedEndOfParts(d, s))
          return Promise.resolve(null);
      }
    }
    this.log(`Loading fragment ${t.sn} cc: ${t.cc} ${a ? "of [" + a.startSN + "-" + a.endSN + "] " : ""}${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${t.level}, target: ${parseFloat(s.toFixed(3))}`), F(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = k.FRAG_LOADING;
    const l = this.config.progressive;
    let h;
    return l && o ? h = o.then((d) => !d || this.fragContextChanged(d == null ? void 0 : d.frag) ? null : this.fragmentLoader.load(t, r)).catch((d) => this.handleFragLoadError(d)) : h = Promise.all([this.fragmentLoader.load(t, l ? r : void 0), o]).then(([d]) => (!l && d && r && r(d), d)).catch((d) => this.handleFragLoadError(d)), this.hls.trigger(p.FRAG_LOADING, {
      frag: t,
      targetBufferTime: s
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : h;
  }
  doFragPartsLoad(t, e, s, r) {
    return new Promise((i, a) => {
      var o;
      const l = [], h = (o = s.details) == null ? void 0 : o.partList, d = (c) => {
        this.fragmentLoader.loadPart(t, c, r).then((u) => {
          l[c.index] = u;
          const g = u.part;
          this.hls.trigger(p.FRAG_LOADED, u);
          const f = ar(s, t.sn, c.index + 1) || ni(h, t.sn, c.index + 1);
          if (f)
            d(f);
          else
            return i({
              frag: t,
              part: g,
              partsLoaded: l
            });
        }).catch(a);
      };
      d(e);
    });
  }
  handleFragLoadError(t) {
    if ("data" in t) {
      const e = t.data;
      t.data && e.details === D.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(p.ERROR, e);
    } else
      this.hls.trigger(p.ERROR, {
        type: $.OTHER_ERROR,
        details: D.INTERNAL_EXCEPTION,
        err: t,
        error: t,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(t) {
    const e = this.getCurrentContext(t);
    if (!e || this.state !== k.PARSING) {
      !this.fragCurrent && this.state !== k.STOPPED && this.state !== k.ERROR && (this.state = k.IDLE);
      return;
    }
    const {
      frag: s,
      part: r,
      level: i
    } = e, a = self.performance.now();
    s.stats.parsing.end = a, r && (r.stats.parsing.end = a), this.updateLevelTiming(s, r, i, t.partial);
  }
  getCurrentContext(t) {
    const {
      levels: e,
      fragCurrent: s
    } = this, {
      level: r,
      sn: i,
      part: a
    } = t;
    if (!(e != null && e[r]))
      return this.warn(`Levels object was unset while buffering fragment ${i} of level ${r}. The current chunk will not be buffered.`), null;
    const o = e[r], l = a > -1 ? ar(o, i, a) : null, h = l ? l.fragment : da(o, i, s);
    return h ? (s && s !== h && (h.stats = s.stats), {
      frag: h,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(t, e, s, r, i) {
    var a;
    if (!t || this.state !== k.PARSING)
      return;
    const {
      data1: o,
      data2: l
    } = t;
    let h = o;
    if (o && l && (h = gt(o, l)), !((a = h) != null && a.length))
      return;
    const d = {
      type: t.type,
      frag: e,
      part: s,
      chunkMeta: r,
      parent: e.type,
      data: h
    };
    if (this.hls.trigger(p.BUFFER_APPENDING, d), t.dropped && t.independent && !s) {
      if (i)
        return;
      this.flushBufferGap(e);
    }
  }
  flushBufferGap(t) {
    const e = this.media;
    if (!e)
      return;
    if (!Q.isBuffered(e, e.currentTime)) {
      this.flushMainBuffer(0, t.start);
      return;
    }
    const s = e.currentTime, r = Q.bufferInfo(e, s, 0), i = t.duration, a = Math.min(this.config.maxFragLookUpTolerance * 2, i * 0.25), o = Math.max(Math.min(t.start - a, r.end - a), s + a);
    t.start - o > a && this.flushMainBuffer(o, t.start);
  }
  getFwdBufferInfo(t, e) {
    const s = this.getLoadPosition();
    return F(s) ? this.getFwdBufferInfoAtPos(t, s, e) : null;
  }
  getFwdBufferInfoAtPos(t, e, s) {
    const {
      config: {
        maxBufferHole: r
      }
    } = this, i = Q.bufferInfo(t, e, r);
    if (i.len === 0 && i.nextStart !== void 0) {
      const a = this.fragmentTracker.getBufferedFrag(e, s);
      if (a && i.nextStart < a.end)
        return Q.bufferInfo(t, e, Math.max(i.nextStart, r));
    }
    return i;
  }
  getMaxBufferLength(t) {
    const {
      config: e
    } = this;
    let s;
    return t ? s = Math.max(8 * e.maxBufferSize / t, e.maxBufferLength) : s = e.maxBufferLength, Math.min(s, e.maxMaxBufferLength);
  }
  reduceMaxBufferLength(t, e) {
    const s = this.config, r = Math.max(Math.min(t - e, s.maxBufferLength), e), i = Math.max(t - e * 3, s.maxMaxBufferLength / 2, r);
    return i >= r ? (s.maxMaxBufferLength = i, this.warn(`Reduce max buffer length to ${i}s`), !0) : !1;
  }
  getAppendedFrag(t, e = B.MAIN) {
    const s = this.fragmentTracker.getAppendedFrag(t, B.MAIN);
    return s && "fragment" in s ? s.fragment : s;
  }
  getNextFragment(t, e) {
    const s = e.fragments, r = s.length;
    if (!r)
      return null;
    const {
      config: i
    } = this, a = s[0].start;
    let o;
    if (e.live) {
      const l = i.initialLiveManifestSize;
      if (r < l)
        return this.warn(`Not enough fragments to start playback (have: ${r}, need: ${l})`), null;
      (!e.PTSKnown && !this.startFragRequested && this.startPosition === -1 || t < a) && (o = this.getInitialLiveFragment(e, s), this.startPosition = this.nextLoadPosition = o ? this.hls.liveSyncPosition || o.start : t);
    } else t <= a && (o = s[0]);
    if (!o) {
      const l = i.lowLatencyMode ? e.partEnd : e.fragmentEnd;
      o = this.getFragmentAtPosition(t, l, e);
    }
    return this.mapToInitFragWhenRequired(o);
  }
  isLoopLoading(t, e) {
    const s = this.fragmentTracker.getState(t);
    return (s === nt.OK || s === nt.PARTIAL && !!t.gap) && this.nextLoadPosition > e;
  }
  getNextFragmentLoopLoading(t, e, s, r, i) {
    const a = t.gap, o = this.getNextFragment(this.nextLoadPosition, e);
    if (o === null)
      return o;
    if (t = o, a && t && !t.gap && s.nextStart) {
      const l = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, r);
      if (l !== null && s.len + l.len >= i)
        return this.log(`buffer full after gaps in "${r}" playlist starting at sn: ${t.sn}`), null;
    }
    return t;
  }
  mapToInitFragWhenRequired(t) {
    return t != null && t.initSegment && !(t != null && t.initSegment.data) && !this.bitrateTest ? t.initSegment : t;
  }
  getNextPart(t, e, s) {
    let r = -1, i = !1, a = !0;
    for (let o = 0, l = t.length; o < l; o++) {
      const h = t[o];
      if (a = a && !h.independent, r > -1 && s < h.start)
        break;
      const d = h.loaded;
      d ? r = -1 : (i || h.independent || a) && h.fragment === e && (r = o), i = d;
    }
    return r;
  }
  loadedEndOfParts(t, e) {
    const s = t[t.length - 1];
    return s && e > s.start && s.loaded;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(t, e) {
    const s = this.fragPrevious;
    let r = null;
    if (s) {
      if (t.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), r = ua(e, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !r) {
        const i = s.sn + 1;
        if (i >= t.startSN && i <= t.endSN) {
          const a = e[i - t.startSN];
          s.cc === a.cc && (r = a, this.log(`Live playlist, switching playlist, load frag with next SN: ${r.sn}`));
        }
        r || (r = ma(e, s.cc), r && this.log(`Live playlist, switching playlist, load frag with same CC: ${r.sn}`));
      }
    } else {
      const i = this.hls.liveSyncPosition;
      i !== null && (r = this.getFragmentAtPosition(i, this.bitrateTest ? t.fragmentEnd : t.edge, t));
    }
    return r;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(t, e, s) {
    const {
      config: r
    } = this;
    let {
      fragPrevious: i
    } = this, {
      fragments: a,
      endSN: o
    } = s;
    const {
      fragmentHint: l
    } = s, {
      maxFragLookUpTolerance: h
    } = r, d = s.partList, c = !!(r.lowLatencyMode && d != null && d.length && l);
    c && l && !this.bitrateTest && (a = a.concat(l), o = l.sn);
    let u;
    if (t < e) {
      const g = t > e - h ? 0 : h;
      u = Ce(i, a, t, g);
    } else
      u = a[a.length - 1];
    if (u) {
      const g = u.sn - s.startSN, f = this.fragmentTracker.getState(u);
      if ((f === nt.OK || f === nt.PARTIAL && u.gap) && (i = u), i && u.sn === i.sn && (!c || d[0].fragment.sn > u.sn) && i && u.level === i.level) {
        const m = a[g + 1];
        u.sn < o && this.fragmentTracker.getState(m) !== nt.OK ? u = m : u = null;
      }
    }
    return u;
  }
  synchronizeToLiveEdge(t) {
    const {
      config: e,
      media: s
    } = this;
    if (!s)
      return;
    const r = this.hls.liveSyncPosition, i = s.currentTime, a = t.fragments[0].start, o = t.edge, l = i >= a - e.maxFragLookUpTolerance && i <= o;
    if (r !== null && s.duration > r && (i < r || !l)) {
      const h = e.liveMaxLatencyDuration !== void 0 ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
      (!l && s.readyState < 4 || i < o - h) && (this.loadedmetadata || (this.nextLoadPosition = r), s.readyState && (this.warn(`Playback: ${i.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${r.toFixed(3)}`), s.currentTime = r));
    }
  }
  alignPlaylists(t, e, s) {
    const r = t.fragments.length;
    if (!r)
      return this.warn("No fragments in live playlist"), 0;
    const i = t.fragments[0].start, a = !e, o = t.alignedSliding && F(i);
    if (a || !o && !i) {
      const {
        fragPrevious: l
      } = this;
      Oa(l, s, t);
      const h = t.fragments[0].start;
      return this.log(`Live playlist sliding: ${h.toFixed(2)} start-sn: ${e ? e.startSN : "na"}->${t.startSN} prev-sn: ${l ? l.sn : "na"} fragments: ${r}`), h;
    }
    return i;
  }
  waitForCdnTuneIn(t) {
    return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, t.partTarget * 3);
  }
  setStartPosition(t, e) {
    let s = this.startPosition;
    if (s < e && (s = -1), s === -1 || this.lastCurrentTime === -1) {
      const r = this.startTimeOffset !== null, i = r ? this.startTimeOffset : t.startTimeOffset;
      i !== null && F(i) ? (s = e + i, i < 0 && (s += t.totalduration), s = Math.min(Math.max(e, s), e + t.totalduration), this.log(`Start time offset ${i} found in ${r ? "multivariant" : "media"} playlist, adjust startPosition to ${s}`), this.startPosition = s) : t.live ? s = this.hls.liveSyncPosition || e : this.startPosition = s = 0, this.lastCurrentTime = s;
    }
    this.nextLoadPosition = s;
  }
  getLoadPosition() {
    const {
      media: t
    } = this;
    let e = 0;
    return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e;
  }
  handleFragLoadAborted(t, e) {
    this.transmuxer && t.sn !== "initSegment" && t.stats.aborted && (this.warn(`Fragment ${t.sn}${e ? " part " + e.index : ""} of level ${t.level} was aborted`), this.resetFragmentLoading(t));
  }
  resetFragmentLoading(t) {
    (!this.fragCurrent || !this.fragContextChanged(t) && this.state !== k.FRAG_LOADING_WAITING_RETRY) && (this.state = k.IDLE);
  }
  onFragmentOrKeyLoadError(t, e) {
    if (e.chunkMeta && !e.frag) {
      const d = this.getCurrentContext(e.chunkMeta);
      d && (e.frag = d.frag);
    }
    const s = e.frag;
    if (!s || s.type !== t || !this.levels)
      return;
    if (this.fragContextChanged(s)) {
      var r;
      this.warn(`Frag load error must match current frag to retry ${s.url} > ${(r = this.fragCurrent) == null ? void 0 : r.url}`);
      return;
    }
    const i = e.details === D.FRAG_GAP;
    i && this.fragmentTracker.fragBuffered(s, !0);
    const a = e.errorAction, {
      action: o,
      retryCount: l = 0,
      retryConfig: h
    } = a || {};
    if (a && o === ot.RetryRequest && h) {
      this.resetStartWhenNotLoaded(this.levelLastLoaded);
      const d = Rs(h, l);
      this.warn(`Fragment ${s.sn} of ${t} ${s.level} errored with ${e.details}, retrying loading ${l + 1}/${h.maxNumRetry} in ${d}ms`), a.resolved = !0, this.retryDate = self.performance.now() + d, this.state = k.FRAG_LOADING_WAITING_RETRY;
    } else if (h && a)
      if (this.resetFragmentErrors(t), l < h.maxNumRetry)
        !i && o !== ot.RemoveAlternatePermanently && (a.resolved = !0);
      else {
        v.warn(`${e.details} reached or exceeded max retry (${l})`);
        return;
      }
    else (a == null ? void 0 : a.action) === ot.SendAlternateToPenaltyBox ? this.state = k.WAITING_LEVEL : this.state = k.ERROR;
    this.tickImmediate();
  }
  reduceLengthAndFlushBuffer(t) {
    if (this.state === k.PARSING || this.state === k.PARSED) {
      const e = t.frag, s = t.parent, r = this.getFwdBufferInfo(this.mediaBuffer, s), i = r && r.len > 0.5;
      i && this.reduceMaxBufferLength(r.len, (e == null ? void 0 : e.duration) || 10);
      const a = !i;
      return a && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${s} buffer`), e && (this.fragmentTracker.removeFragment(e), this.nextLoadPosition = e.start), this.resetLoadingState(), a;
    }
    return !1;
  }
  resetFragmentErrors(t) {
    t === B.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== k.STOPPED && (this.state = k.IDLE);
  }
  afterBufferFlushed(t, e, s) {
    if (!t)
      return;
    const r = Q.getBuffered(t);
    this.fragmentTracker.detectEvictedFragments(e, r, s), this.state === k.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = k.IDLE;
  }
  resetStartWhenNotLoaded(t) {
    if (!this.loadedmetadata) {
      this.startFragRequested = !1;
      const e = t ? t.details : null;
      e != null && e.live ? (this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(t) {
    this.warn(`The loading context changed while buffering fragment ${t.sn} of level ${t.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
  }
  removeUnbufferedFrags(t = 0) {
    this.fragmentTracker.removeFragmentsInRange(t, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(t, e, s, r) {
    var i;
    const a = s.details;
    if (!a) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(t.elementaryStreams).reduce((o, l) => {
      const h = t.elementaryStreams[l];
      if (h) {
        const d = h.endPTS - h.startPTS;
        if (d <= 0)
          return this.warn(`Could not parse fragment ${t.sn} ${l} duration reliably (${d})`), o || !1;
        const c = r ? 0 : ri(a, t, h.startPTS, h.endPTS, h.startDTS, h.endDTS);
        return this.hls.trigger(p.LEVEL_PTS_UPDATED, {
          details: a,
          level: s,
          drift: c,
          type: l,
          frag: t,
          start: h.startPTS,
          end: h.endPTS
        }), !0;
      }
      return o;
    }, !1) && ((i = this.transmuxer) == null ? void 0 : i.error) === null) {
      const o = new Error(`Found no media in fragment ${t.sn} of level ${t.level} resetting transmuxer to fallback to playlist timing`);
      if (s.fragmentError === 0 && (s.fragmentError++, t.gap = !0, this.fragmentTracker.removeFragment(t), this.fragmentTracker.fragBuffered(t, !0)), this.warn(o.message), this.hls.trigger(p.ERROR, {
        type: $.MEDIA_ERROR,
        details: D.FRAG_PARSING_ERROR,
        fatal: !1,
        error: o,
        frag: t,
        reason: `Found no media in msn ${t.sn} of level "${s.url}"`
      }), !this.hls)
        return;
      this.resetTransmuxer();
    }
    this.state = k.PARSED, this.hls.trigger(p.FRAG_PARSED, {
      frag: t,
      part: e
    });
  }
  resetTransmuxer() {
    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
  }
  recoverWorkerError(t) {
    t.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
  }
  set state(t) {
    const e = this._state;
    e !== t && (this._state = t, this.log(`${e}->${t}`));
  }
  get state() {
    return this._state;
  }
}
class di {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(t) {
    this.chunks.push(t), this.dataLength += t.length;
  }
  flush() {
    const {
      chunks: t,
      dataLength: e
    } = this;
    let s;
    if (t.length)
      t.length === 1 ? s = t[0] : s = Va(t, e);
    else return new Uint8Array(0);
    return this.reset(), s;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function Va(n, t) {
  const e = new Uint8Array(t);
  let s = 0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    e.set(i, s), s += i.length;
  }
  return e;
}
function Ha() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function Ya() {
  const n = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), t = self.URL.createObjectURL(n);
  return {
    worker: new self.Worker(t),
    objectURL: t
  };
}
function Wa(n) {
  const t = new self.URL(n, self.location.href).href;
  return {
    worker: new self.Worker(t),
    scriptURL: t
  };
}
function St(n = "", t = 9e4) {
  return {
    type: n,
    id: -1,
    pid: -1,
    inputTimeScale: t,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
class Cs {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(t, e, s, r) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(t) {
    this.initPTS = t, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(t, e) {
    return !1;
  }
  appendFrame(t, e, s) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(t, e) {
    this.cachedData && (t = gt(this.cachedData, t), this.cachedData = null);
    let s = Qt(t, 0), r = s ? s.length : 0, i;
    const a = this._audioTrack, o = this._id3Track, l = s ? As(s) : void 0, h = t.length;
    for ((this.basePTS === null || this.frameIndex === 0 && F(l)) && (this.basePTS = ja(l, e, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: s,
      type: yt.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); r < h; ) {
      if (this.canParse(t, r)) {
        const d = this.appendFrame(a, t, r);
        d ? (this.frameIndex++, this.lastPTS = d.sample.pts, r += d.length, i = r) : r = h;
      } else gn(t, r) ? (s = Qt(t, r), o.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: s,
        type: yt.audioId3,
        duration: Number.POSITIVE_INFINITY
      }), r += s.length, i = r) : r++;
      if (r === h && i !== h) {
        const d = Ft(t, i);
        this.cachedData ? this.cachedData = gt(this.cachedData, d) : this.cachedData = d;
      }
    }
    return {
      audioTrack: a,
      videoTrack: St(),
      id3Track: o,
      textTrack: St()
    };
  }
  demuxSampleAes(t, e, s) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(t) {
    const e = this.cachedData;
    return e && (this.cachedData = null, this.demux(e, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: St(),
      id3Track: this._id3Track,
      textTrack: St()
    };
  }
  destroy() {
  }
}
const ja = (n, t, e) => {
  if (F(n))
    return n * 90;
  const s = e ? e.baseTime * 9e4 / e.timescale : 0;
  return t * 9e4 + s;
};
function qa(n, t, e, s) {
  let r, i, a, o;
  const l = navigator.userAgent.toLowerCase(), h = s, d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  r = ((t[e + 2] & 192) >>> 6) + 1;
  const c = (t[e + 2] & 60) >>> 2;
  if (c > d.length - 1) {
    const u = new Error(`invalid ADTS sampling index:${c}`);
    n.emit(p.ERROR, p.ERROR, {
      type: $.MEDIA_ERROR,
      details: D.FRAG_PARSING_ERROR,
      fatal: !0,
      error: u,
      reason: u.message
    });
    return;
  }
  return a = (t[e + 2] & 1) << 2, a |= (t[e + 3] & 192) >>> 6, v.log(`manifest codec:${s}, ADTS type:${r}, samplingIndex:${c}`), /firefox/i.test(l) ? c >= 6 ? (r = 5, o = new Array(4), i = c - 3) : (r = 2, o = new Array(2), i = c) : l.indexOf("android") !== -1 ? (r = 2, o = new Array(2), i = c) : (r = 5, o = new Array(4), s && (s.indexOf("mp4a.40.29") !== -1 || s.indexOf("mp4a.40.5") !== -1) || !s && c >= 6 ? i = c - 3 : ((s && s.indexOf("mp4a.40.2") !== -1 && (c >= 6 && a === 1 || /vivaldi/i.test(l)) || !s && a === 1) && (r = 2, o = new Array(2)), i = c)), o[0] = r << 3, o[0] |= (c & 14) >> 1, o[1] |= (c & 1) << 7, o[1] |= a << 3, r === 5 && (o[1] |= (i & 14) >> 1, o[2] = (i & 1) << 7, o[2] |= 8, o[3] = 0), {
    config: o,
    samplerate: d[c],
    channelCount: a,
    codec: "mp4a.40." + r,
    manifestCodec: h
  };
}
function ci(n, t) {
  return n[t] === 255 && (n[t + 1] & 246) === 240;
}
function ui(n, t) {
  return n[t + 1] & 1 ? 7 : 9;
}
function ws(n, t) {
  return (n[t + 3] & 3) << 11 | n[t + 4] << 3 | (n[t + 5] & 224) >>> 5;
}
function Xa(n, t) {
  return t + 5 < n.length;
}
function Pe(n, t) {
  return t + 1 < n.length && ci(n, t);
}
function za(n, t) {
  return Xa(n, t) && ci(n, t) && ws(n, t) <= n.length - t;
}
function Qa(n, t) {
  if (Pe(n, t)) {
    const e = ui(n, t);
    if (t + e >= n.length)
      return !1;
    const s = ws(n, t);
    if (s <= e)
      return !1;
    const r = t + s;
    return r === n.length || Pe(n, r);
  }
  return !1;
}
function fi(n, t, e, s, r) {
  if (!n.samplerate) {
    const i = qa(t, e, s, r);
    if (!i)
      return;
    n.config = i.config, n.samplerate = i.samplerate, n.channelCount = i.channelCount, n.codec = i.codec, n.manifestCodec = i.manifestCodec, v.log(`parsed codec:${n.codec}, rate:${i.samplerate}, channels:${i.channelCount}`);
  }
}
function gi(n) {
  return 1024 * 9e4 / n;
}
function Ja(n, t) {
  const e = ui(n, t);
  if (t + e <= n.length) {
    const s = ws(n, t) - e;
    if (s > 0)
      return {
        headerLength: e,
        frameLength: s
      };
  }
}
function mi(n, t, e, s, r) {
  const i = gi(n.samplerate), a = s + r * i, o = Ja(t, e);
  let l;
  if (o) {
    const {
      frameLength: d,
      headerLength: c
    } = o, u = c + d, g = Math.max(0, e + u - t.length);
    g ? (l = new Uint8Array(u - c), l.set(t.subarray(e + c, t.length), 0)) : l = t.subarray(e + c, e + u);
    const f = {
      unit: l,
      pts: a
    };
    return g || n.samples.push(f), {
      sample: f,
      length: u,
      missing: g
    };
  }
  const h = t.length - e;
  return l = new Uint8Array(h), l.set(t.subarray(e, t.length), 0), {
    sample: {
      unit: l,
      pts: a
    },
    length: h,
    missing: -1
  };
}
let le = null;
const Za = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], to = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], eo = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], so = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function pi(n, t, e, s, r) {
  if (e + 24 > t.length)
    return;
  const i = Ei(t, e);
  if (i && e + i.frameLength <= t.length) {
    const a = i.samplesPerFrame * 9e4 / i.sampleRate, o = s + r * a, l = {
      unit: t.subarray(e, e + i.frameLength),
      pts: o,
      dts: o
    };
    return n.config = [], n.channelCount = i.channelCount, n.samplerate = i.sampleRate, n.samples.push(l), {
      sample: l,
      length: i.frameLength,
      missing: 0
    };
  }
}
function Ei(n, t) {
  const e = n[t + 1] >> 3 & 3, s = n[t + 1] >> 1 & 3, r = n[t + 2] >> 4 & 15, i = n[t + 2] >> 2 & 3;
  if (e !== 1 && r !== 0 && r !== 15 && i !== 3) {
    const a = n[t + 2] >> 1 & 1, o = n[t + 3] >> 6, l = e === 3 ? 3 - s : s === 3 ? 3 : 4, h = Za[l * 14 + r - 1] * 1e3, d = to[(e === 3 ? 0 : e === 2 ? 1 : 2) * 3 + i], c = o === 3 ? 1 : 2, u = eo[e][s], g = so[s], f = u * 8 * g, m = Math.floor(u * h / d + a) * g;
    if (le === null) {
      const E = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      le = E ? parseInt(E[1]) : 0;
    }
    return le && le <= 87 && s === 2 && h >= 224e3 && o === 0 && (n[t + 3] = n[t + 3] | 128), {
      sampleRate: d,
      channelCount: c,
      frameLength: m,
      samplesPerFrame: f
    };
  }
}
function Ps(n, t) {
  return n[t] === 255 && (n[t + 1] & 224) === 224 && (n[t + 1] & 6) !== 0;
}
function yi(n, t) {
  return t + 1 < n.length && Ps(n, t);
}
function ro(n, t) {
  return Ps(n, t) && 4 <= n.length - t;
}
function Ti(n, t) {
  if (t + 1 < n.length && Ps(n, t)) {
    const e = Ei(n, t);
    let s = 4;
    e != null && e.frameLength && (s = e.frameLength);
    const r = t + s;
    return r === n.length || yi(n, r);
  }
  return !1;
}
class io extends Cs {
  constructor(t, e) {
    super(), this.observer = void 0, this.config = void 0, this.observer = t, this.config = e;
  }
  resetInitSegment(t, e, s, r) {
    super.resetInitSegment(t, e, s, r), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: e,
      duration: r,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(t) {
    if (!t)
      return !1;
    const e = Qt(t, 0);
    let s = (e == null ? void 0 : e.length) || 0;
    if (Ti(t, s))
      return !1;
    for (let r = t.length; s < r; s++)
      if (Qa(t, s))
        return v.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(t, e) {
    return za(t, e);
  }
  appendFrame(t, e, s) {
    fi(t, this.observer, e, s, t.manifestCodec);
    const r = mi(t, e, s, this.basePTS, this.frameIndex);
    if (r && r.missing === 0)
      return r;
  }
}
const no = /\/emsg[-/]ID3/i;
class ao {
  constructor(t, e) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e;
  }
  resetTimeStamp() {
  }
  resetInitSegment(t, e, s, r) {
    const i = this.videoTrack = St("video", 1), a = this.audioTrack = St("audio", 1), o = this.txtTrack = St("text", 1);
    if (this.id3Track = St("id3", 1), this.timeOffset = 0, !(t != null && t.byteLength))
      return;
    const l = Xr(t);
    if (l.video) {
      const {
        id: h,
        timescale: d,
        codec: c
      } = l.video;
      i.id = h, i.timescale = o.timescale = d, i.codec = c;
    }
    if (l.audio) {
      const {
        id: h,
        timescale: d,
        codec: c
      } = l.audio;
      a.id = h, a.timescale = d, a.codec = c;
    }
    o.id = Wr.text, i.sampleDuration = 0, i.duration = a.duration = r;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(t) {
    return An(t);
  }
  demux(t, e) {
    this.timeOffset = e;
    let s = t;
    const r = this.videoTrack, i = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (s = gt(this.remainderData, t));
      const o = Pn(s);
      this.remainderData = o.remainder, r.samples = o.valid || new Uint8Array();
    } else
      r.samples = s;
    const a = this.extractID3Track(r, e);
    return i.samples = Gs(e, r), {
      videoTrack: r,
      audioTrack: this.audioTrack,
      id3Track: a,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const t = this.timeOffset, e = this.videoTrack, s = this.txtTrack;
    e.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const r = this.extractID3Track(e, this.timeOffset);
    return s.samples = Gs(t, e), {
      videoTrack: e,
      audioTrack: St(),
      id3Track: r,
      textTrack: St()
    };
  }
  extractID3Track(t, e) {
    const s = this.id3Track;
    if (t.samples.length) {
      const r = V(t.samples, ["emsg"]);
      r && r.forEach((i) => {
        const a = On(i);
        if (no.test(a.schemeIdUri)) {
          const o = F(a.presentationTime) ? a.presentationTime / a.timeScale : e + a.presentationTimeDelta / a.timeScale;
          let l = a.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : a.eventDuration / a.timeScale;
          l <= 1e-3 && (l = Number.POSITIVE_INFINITY);
          const h = a.payload;
          s.samples.push({
            data: h,
            len: h.byteLength,
            dts: o,
            pts: o,
            type: yt.emsg,
            duration: l
          });
        }
      });
    }
    return s;
  }
  demuxSampleAes(t, e, s) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
  }
}
const vi = (n, t) => {
  let e = 0, s = 5;
  t += s;
  const r = new Uint32Array(1), i = new Uint32Array(1), a = new Uint8Array(1);
  for (; s > 0; ) {
    a[0] = n[t];
    const o = Math.min(s, 8), l = 8 - o;
    i[0] = 4278190080 >>> 24 + l << l, r[0] = (a[0] & i[0]) >> l, e = e ? e << o | r[0] : r[0], t += 1, s -= o;
  }
  return e;
};
class oo extends Cs {
  constructor(t) {
    super(), this.observer = void 0, this.observer = t;
  }
  resetInitSegment(t, e, s, r) {
    super.resetInitSegment(t, e, s, r), this._audioTrack = {
      container: "audio/ac-3",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "ac3",
      samples: [],
      manifestCodec: e,
      duration: r,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  canParse(t, e) {
    return e + 64 < t.length;
  }
  appendFrame(t, e, s) {
    const r = Si(t, e, s, this.basePTS, this.frameIndex);
    if (r !== -1)
      return {
        sample: t.samples[t.samples.length - 1],
        length: r,
        missing: 0
      };
  }
  static probe(t) {
    if (!t)
      return !1;
    const e = Qt(t, 0);
    if (!e)
      return !1;
    const s = e.length;
    return t[s] === 11 && t[s + 1] === 119 && As(e) !== void 0 && // check the bsid to confirm ac-3
    vi(t, s) < 16;
  }
}
function Si(n, t, e, s, r) {
  if (e + 8 > t.length || t[e] !== 11 || t[e + 1] !== 119)
    return -1;
  const i = t[e + 4] >> 6;
  if (i >= 3)
    return -1;
  const a = [48e3, 44100, 32e3][i], o = t[e + 4] & 63, l = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][o * 3 + i] * 2;
  if (e + l > t.length)
    return -1;
  const h = t[e + 6] >> 5;
  let d = 0;
  h === 2 ? d += 2 : (h & 1 && h !== 1 && (d += 2), h & 4 && (d += 2));
  const c = (t[e + 6] << 8 | t[e + 7]) >> 12 - d & 1, u = [2, 1, 2, 3, 3, 4, 4, 5][h] + c, g = t[e + 5] >> 3, f = t[e + 5] & 7, m = new Uint8Array([i << 6 | g << 1 | f >> 2, (f & 3) << 6 | h << 3 | c << 2 | o >> 4, o << 4 & 224]), E = 1536 / a * 9e4, y = s + r * E, T = t.subarray(e, e + l);
  return n.config = m, n.channelCount = u, n.samplerate = a, n.samples.push({
    unit: T,
    pts: y
  }), l;
}
class lo {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(t, e, s, r) {
    return {
      key: t,
      frame: !1,
      pts: e,
      dts: s,
      units: [],
      debug: r,
      length: 0
    };
  }
  getLastNalUnit(t) {
    var e;
    let s = this.VideoSample, r;
    if ((!s || s.units.length === 0) && (s = t[t.length - 1]), (e = s) != null && e.units) {
      const i = s.units;
      r = i[i.length - 1];
    }
    return r;
  }
  pushAccessUnit(t, e) {
    if (t.units.length && t.frame) {
      if (t.pts === void 0) {
        const s = e.samples, r = s.length;
        if (r) {
          const i = s[r - 1];
          t.pts = i.pts, t.dts = i.dts;
        } else {
          e.dropped++;
          return;
        }
      }
      e.samples.push(t);
    }
    t.debug.length && v.log(t.pts + "/" + t.dts + ":" + t.debug);
  }
}
class mr {
  constructor(t) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const t = this.data, e = this.bytesAvailable, s = t.byteLength - e, r = new Uint8Array(4), i = Math.min(4, e);
    if (i === 0)
      throw new Error("no bytes available");
    r.set(t.subarray(s, s + i)), this.word = new DataView(r.buffer).getUint32(0), this.bitsAvailable = i * 8, this.bytesAvailable -= i;
  }
  // (count:int):void
  skipBits(t) {
    let e;
    t = Math.min(t, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, e = t >> 3, t -= e << 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t);
  }
  // (size:int):uint
  readBits(t) {
    let e = Math.min(this.bitsAvailable, t);
    const s = this.word >>> 32 - e;
    if (t > 32 && v.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0)
      this.word <<= e;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return e = t - e, e > 0 && this.bitsAvailable ? s << e | this.readBits(e) : s;
  }
  // ():uint
  skipLZ() {
    let t;
    for (t = 0; t < this.bitsAvailable; ++t)
      if ((this.word & 2147483648 >>> t) !== 0)
        return this.word <<= t, this.bitsAvailable -= t, t;
    return this.loadWord(), t + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const t = this.skipLZ();
    return this.readBits(t + 1) - 1;
  }
  // ():int
  readEG() {
    const t = this.readUEG();
    return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
  /**
   * Advance the ExpGolomb decoder past a scaling list. The scaling
   * list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(t) {
    let e = 8, s = 8, r;
    for (let i = 0; i < t; i++)
      s !== 0 && (r = this.readEG(), s = (e + r + 256) % 256), e = s === 0 ? e : s;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS() {
    let t = 0, e = 0, s = 0, r = 0, i, a, o;
    const l = this.readUByte.bind(this), h = this.readBits.bind(this), d = this.readUEG.bind(this), c = this.readBoolean.bind(this), u = this.skipBits.bind(this), g = this.skipEG.bind(this), f = this.skipUEG.bind(this), m = this.skipScalingList.bind(this);
    l();
    const E = l();
    if (h(5), u(3), l(), f(), E === 100 || E === 110 || E === 122 || E === 244 || E === 44 || E === 83 || E === 86 || E === 118 || E === 128) {
      const I = d();
      if (I === 3 && u(1), f(), f(), u(1), c())
        for (a = I !== 3 ? 8 : 12, o = 0; o < a; o++)
          c() && (o < 6 ? m(16) : m(64));
    }
    f();
    const y = d();
    if (y === 0)
      d();
    else if (y === 1)
      for (u(1), g(), g(), i = d(), o = 0; o < i; o++)
        g();
    f(), u(1);
    const T = d(), A = d(), R = h(1);
    R === 0 && u(1), u(1), c() && (t = d(), e = d(), s = d(), r = d());
    let S = [1, 1];
    if (c() && c())
      switch (l()) {
        case 1:
          S = [1, 1];
          break;
        case 2:
          S = [12, 11];
          break;
        case 3:
          S = [10, 11];
          break;
        case 4:
          S = [16, 11];
          break;
        case 5:
          S = [40, 33];
          break;
        case 6:
          S = [24, 11];
          break;
        case 7:
          S = [20, 11];
          break;
        case 8:
          S = [32, 11];
          break;
        case 9:
          S = [80, 33];
          break;
        case 10:
          S = [18, 11];
          break;
        case 11:
          S = [15, 11];
          break;
        case 12:
          S = [64, 33];
          break;
        case 13:
          S = [160, 99];
          break;
        case 14:
          S = [4, 3];
          break;
        case 15:
          S = [3, 2];
          break;
        case 16:
          S = [2, 1];
          break;
        case 255: {
          S = [l() << 8 | l(), l() << 8 | l()];
          break;
        }
      }
    return {
      width: Math.ceil((T + 1) * 16 - t * 2 - e * 2),
      height: (2 - R) * (A + 1) * 16 - (R ? 2 : 4) * (s + r),
      pixelRatio: S
    };
  }
  readSliceType() {
    return this.readUByte(), this.readUEG(), this.readUEG();
  }
}
class ho extends lo {
  parseAVCPES(t, e, s, r, i) {
    const a = this.parseAVCNALu(t, s.data);
    let o = this.VideoSample, l, h = !1;
    s.data = null, o && a.length && !t.audFound && (this.pushAccessUnit(o, t), o = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts, "")), a.forEach((d) => {
      var c;
      switch (d.type) {
        // NDR
        case 1: {
          let m = !1;
          l = !0;
          const E = d.data;
          if (h && E.length > 4) {
            const y = new mr(E).readSliceType();
            (y === 2 || y === 4 || y === 7 || y === 9) && (m = !0);
          }
          if (m) {
            var u;
            (u = o) != null && u.frame && !o.key && (this.pushAccessUnit(o, t), o = this.VideoSample = null);
          }
          o || (o = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts, "")), o.frame = !0, o.key = m;
          break;
        }
        case 5:
          l = !0, (c = o) != null && c.frame && !o.key && (this.pushAccessUnit(o, t), o = this.VideoSample = null), o || (o = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts, "")), o.key = !0, o.frame = !0;
          break;
        // SEI
        case 6: {
          l = !0, Qr(d.data, 1, s.pts, e.samples);
          break;
        }
        case 7: {
          var g, f;
          l = !0, h = !0;
          const m = d.data, E = new mr(m).readSPS();
          if (!t.sps || t.width !== E.width || t.height !== E.height || ((g = t.pixelRatio) == null ? void 0 : g[0]) !== E.pixelRatio[0] || ((f = t.pixelRatio) == null ? void 0 : f[1]) !== E.pixelRatio[1]) {
            t.width = E.width, t.height = E.height, t.pixelRatio = E.pixelRatio, t.sps = [m], t.duration = i;
            const y = m.subarray(1, 4);
            let T = "avc1.";
            for (let A = 0; A < 3; A++) {
              let R = y[A].toString(16);
              R.length < 2 && (R = "0" + R), T += R;
            }
            t.codec = T;
          }
          break;
        }
        // PPS
        case 8:
          l = !0, t.pps = [d.data];
          break;
        // AUD
        case 9:
          l = !0, t.audFound = !0, o && this.pushAccessUnit(o, t), o = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts, "");
          break;
        // Filler Data
        case 12:
          l = !0;
          break;
        default:
          l = !1, o && (o.debug += "unknown NAL " + d.type + " ");
          break;
      }
      o && l && o.units.push(d);
    }), r && o && (this.pushAccessUnit(o, t), this.VideoSample = null);
  }
  parseAVCNALu(t, e) {
    const s = e.byteLength;
    let r = t.naluState || 0;
    const i = r, a = [];
    let o = 0, l, h, d, c = -1, u = 0;
    for (r === -1 && (c = 0, u = e[0] & 31, r = 0, o = 1); o < s; ) {
      if (l = e[o++], !r) {
        r = l ? 0 : 1;
        continue;
      }
      if (r === 1) {
        r = l ? 0 : 2;
        continue;
      }
      if (!l)
        r = 3;
      else if (l === 1) {
        if (h = o - r - 1, c >= 0) {
          const g = {
            data: e.subarray(c, h),
            type: u
          };
          a.push(g);
        } else {
          const g = this.getLastNalUnit(t.samples);
          g && (i && o <= 4 - i && g.state && (g.data = g.data.subarray(0, g.data.byteLength - i)), h > 0 && (g.data = gt(g.data, e.subarray(0, h)), g.state = 0));
        }
        o < s ? (d = e[o] & 31, c = o, u = d, r = 0) : r = -1;
      } else
        r = 0;
    }
    if (c >= 0 && r >= 0) {
      const g = {
        data: e.subarray(c, s),
        type: u,
        state: r
      };
      a.push(g);
    }
    if (a.length === 0) {
      const g = this.getLastNalUnit(t.samples);
      g && (g.data = gt(g.data, e));
    }
    return t.naluState = r, a;
  }
}
class co {
  constructor(t, e, s) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new bs(e, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(t) {
    return this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(t, e, s) {
    const r = t[e].unit;
    if (r.length <= 16)
      return;
    const i = r.subarray(16, r.length - r.length % 16), a = i.buffer.slice(i.byteOffset, i.byteOffset + i.length);
    this.decryptBuffer(a).then((o) => {
      const l = new Uint8Array(o);
      r.set(l, 16), this.decrypter.isSync() || this.decryptAacSamples(t, e + 1, s);
    });
  }
  decryptAacSamples(t, e, s) {
    for (; ; e++) {
      if (e >= t.length) {
        s();
        return;
      }
      if (!(t[e].unit.length < 32) && (this.decryptAacSample(t, e, s), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(t) {
    const e = Math.floor((t.length - 48) / 160) * 16 + 16, s = new Int8Array(e);
    let r = 0;
    for (let i = 32; i < t.length - 16; i += 160, r += 16)
      s.set(t.subarray(i, i + 16), r);
    return s;
  }
  getAvcDecryptedUnit(t, e) {
    const s = new Uint8Array(e);
    let r = 0;
    for (let i = 32; i < t.length - 16; i += 160, r += 16)
      t.set(s.subarray(r, r + 16), i);
    return t;
  }
  decryptAvcSample(t, e, s, r, i) {
    const a = Jr(i.data), o = this.getAvcEncryptedData(a);
    this.decryptBuffer(o.buffer).then((l) => {
      i.data = this.getAvcDecryptedUnit(a, l), this.decrypter.isSync() || this.decryptAvcSamples(t, e, s + 1, r);
    });
  }
  decryptAvcSamples(t, e, s, r) {
    if (t instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; e++, s = 0) {
      if (e >= t.length) {
        r();
        return;
      }
      const i = t[e].units;
      for (; !(s >= i.length); s++) {
        const a = i[s];
        if (!(a.data.length <= 48 || a.type !== 1 && a.type !== 5) && (this.decryptAvcSample(t, e, s, r, a), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
const it = 188;
class Pt {
  constructor(t, e, s) {
    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = t, this.config = e, this.typeSupported = s, this.videoParser = new ho();
  }
  static probe(t) {
    const e = Pt.syncOffset(t);
    return e > 0 && v.warn(`MPEG2-TS detected but first sync word found @ offset ${e}`), e !== -1;
  }
  static syncOffset(t) {
    const e = t.length;
    let s = Math.min(it * 5, e - it) + 1, r = 0;
    for (; r < s; ) {
      let i = !1, a = -1, o = 0;
      for (let l = r; l < e; l += it)
        if (t[l] === 71 && (e - l === it || t[l + it] === 71)) {
          if (o++, a === -1 && (a = l, a !== 0 && (s = Math.min(a + it * 99, t.length - it) + 1)), i || (i = fs(t, l) === 0), i && o > 1 && (a === 0 && o > 2 || l + it > s))
            return a;
        } else {
          if (o)
            return -1;
          break;
        }
      r++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(t, e) {
    return {
      container: t === "video" || t === "audio" ? "video/mp2t" : void 0,
      type: t,
      id: Wr[t],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: t === "audio" ? e : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(t, e, s, r) {
    this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = Pt.createTrack("video"), this._audioTrack = Pt.createTrack("audio", r), this._id3Track = Pt.createTrack("id3"), this._txtTrack = Pt.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = e, this.videoCodec = s, this._duration = r;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: t,
      _videoTrack: e,
      _id3Track: s
    } = this;
    t && (t.pesData = null), e && (e.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(t, e, s = !1, r = !1) {
    s || (this.sampleAes = null);
    let i;
    const a = this._videoTrack, o = this._audioTrack, l = this._id3Track, h = this._txtTrack;
    let d = a.pid, c = a.pesData, u = o.pid, g = l.pid, f = o.pesData, m = l.pesData, E = null, y = this.pmtParsed, T = this._pmtId, A = t.length;
    if (this.remainderData && (t = gt(this.remainderData, t), A = t.length, this.remainderData = null), A < it && !r)
      return this.remainderData = t, {
        audioTrack: o,
        videoTrack: a,
        id3Track: l,
        textTrack: h
      };
    const R = Math.max(0, Pt.syncOffset(t));
    A -= (A - R) % it, A < t.byteLength && !r && (this.remainderData = new Uint8Array(t.buffer, A, t.buffer.byteLength - A));
    let S = 0;
    for (let b = R; b < A; b += it)
      if (t[b] === 71) {
        const x = !!(t[b + 1] & 64), O = fs(t, b), C = (t[b + 3] & 48) >> 4;
        let w;
        if (C > 1) {
          if (w = b + 5 + t[b + 4], w === b + it)
            continue;
        } else
          w = b + 4;
        switch (O) {
          case d:
            x && (c && (i = Gt(c)) && this.videoParser.parseAVCPES(a, h, i, !1, this._duration), c = {
              data: [],
              size: 0
            }), c && (c.data.push(t.subarray(w, b + it)), c.size += b + it - w);
            break;
          case u:
            if (x) {
              if (f && (i = Gt(f)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, i);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, i);
                    break;
                  case "ac3":
                    this.parseAC3PES(o, i);
                    break;
                }
              f = {
                data: [],
                size: 0
              };
            }
            f && (f.data.push(t.subarray(w, b + it)), f.size += b + it - w);
            break;
          case g:
            x && (m && (i = Gt(m)) && this.parseID3PES(l, i), m = {
              data: [],
              size: 0
            }), m && (m.data.push(t.subarray(w, b + it)), m.size += b + it - w);
            break;
          case 0:
            x && (w += t[w] + 1), T = this._pmtId = uo(t, w);
            break;
          case T: {
            x && (w += t[w] + 1);
            const j = fo(t, w, this.typeSupported, s, this.observer);
            d = j.videoPid, d > 0 && (a.pid = d, a.segmentCodec = j.segmentVideoCodec), u = j.audioPid, u > 0 && (o.pid = u, o.segmentCodec = j.segmentAudioCodec), g = j.id3Pid, g > 0 && (l.pid = g), E !== null && !y && (v.warn(`MPEG-TS PMT found at ${b} after unknown PID '${E}'. Backtracking to sync byte @${R} to parse all TS packets.`), E = null, b = R - 188), y = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            E = O;
            break;
        }
      } else
        S++;
    S > 0 && xe(this.observer, new Error(`Found ${S} TS packet/s that do not start with 0x47`)), a.pesData = c, o.pesData = f, l.pesData = m;
    const I = {
      audioTrack: o,
      videoTrack: a,
      id3Track: l,
      textTrack: h
    };
    return r && this.extractRemainingSamples(I), I;
  }
  flush() {
    const {
      remainderData: t
    } = this;
    this.remainderData = null;
    let e;
    return t ? e = this.demux(t, -1, !1, !0) : e = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(e), this.sampleAes ? this.decrypt(e, this.sampleAes) : e;
  }
  extractRemainingSamples(t) {
    const {
      audioTrack: e,
      videoTrack: s,
      id3Track: r,
      textTrack: i
    } = t, a = s.pesData, o = e.pesData, l = r.pesData;
    let h;
    if (a && (h = Gt(a)) ? (this.videoParser.parseAVCPES(s, i, h, !0, this._duration), s.pesData = null) : s.pesData = a, o && (h = Gt(o))) {
      switch (e.segmentCodec) {
        case "aac":
          this.parseAACPES(e, h);
          break;
        case "mp3":
          this.parseMPEGPES(e, h);
          break;
        case "ac3":
          this.parseAC3PES(e, h);
          break;
      }
      e.pesData = null;
    } else
      o != null && o.size && v.log("last AAC PES packet truncated,might overlap between fragments"), e.pesData = o;
    l && (h = Gt(l)) ? (this.parseID3PES(r, h), r.pesData = null) : r.pesData = l;
  }
  demuxSampleAes(t, e, s) {
    const r = this.demux(t, s, !0, !this.config.progressive), i = this.sampleAes = new co(this.observer, this.config, e);
    return this.decrypt(r, i);
  }
  decrypt(t, e) {
    return new Promise((s) => {
      const {
        audioTrack: r,
        videoTrack: i
      } = t;
      r.samples && r.segmentCodec === "aac" ? e.decryptAacSamples(r.samples, 0, () => {
        i.samples ? e.decryptAvcSamples(i.samples, 0, 0, () => {
          s(t);
        }) : s(t);
      }) : i.samples && e.decryptAvcSamples(i.samples, 0, 0, () => {
        s(t);
      });
    });
  }
  destroy() {
    this._duration = 0;
  }
  parseAACPES(t, e) {
    let s = 0;
    const r = this.aacOverFlow;
    let i = e.data;
    if (r) {
      this.aacOverFlow = null;
      const c = r.missing, u = r.sample.unit.byteLength;
      if (c === -1)
        i = gt(r.sample.unit, i);
      else {
        const g = u - c;
        r.sample.unit.set(i.subarray(0, c), g), t.samples.push(r.sample), s = r.missing;
      }
    }
    let a, o;
    for (a = s, o = i.length; a < o - 1 && !Pe(i, a); a++)
      ;
    if (a !== s) {
      let c;
      const u = a < o - 1;
      if (u ? c = `AAC PES did not start with ADTS header,offset:${a}` : c = "No ADTS header found in AAC PES", xe(this.observer, new Error(c), u), !u)
        return;
    }
    fi(t, this.observer, i, a, this.audioCodec);
    let l;
    if (e.pts !== void 0)
      l = e.pts;
    else if (r) {
      const c = gi(t.samplerate);
      l = r.sample.pts + c;
    } else {
      v.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let h = 0, d;
    for (; a < o; )
      if (d = mi(t, i, a, l, h), a += d.length, d.missing) {
        this.aacOverFlow = d;
        break;
      } else
        for (h++; a < o - 1 && !Pe(i, a); a++)
          ;
  }
  parseMPEGPES(t, e) {
    const s = e.data, r = s.length;
    let i = 0, a = 0;
    const o = e.pts;
    if (o === void 0) {
      v.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; a < r; )
      if (yi(s, a)) {
        const l = pi(t, s, a, o, i);
        if (l)
          a += l.length, i++;
        else
          break;
      } else
        a++;
  }
  parseAC3PES(t, e) {
    {
      const s = e.data, r = e.pts;
      if (r === void 0) {
        v.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return;
      }
      const i = s.length;
      let a = 0, o = 0, l;
      for (; o < i && (l = Si(t, s, o, r, a++)) > 0; )
        o += l;
    }
  }
  parseID3PES(t, e) {
    if (e.pts === void 0) {
      v.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const s = tt({}, e, {
      type: this._videoTrack ? yt.emsg : yt.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    t.samples.push(s);
  }
}
function fs(n, t) {
  return ((n[t + 1] & 31) << 8) + n[t + 2];
}
function uo(n, t) {
  return (n[t + 10] & 31) << 8 | n[t + 11];
}
function fo(n, t, e, s, r) {
  const i = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, a = (n[t + 1] & 15) << 8 | n[t + 2], o = t + 3 + a - 4, l = (n[t + 10] & 15) << 8 | n[t + 11];
  for (t += 12 + l; t < o; ) {
    const h = fs(n, t), d = (n[t + 3] & 15) << 8 | n[t + 4];
    switch (n[t]) {
      case 207:
        if (!s) {
          qe("ADTS AAC");
          break;
        }
      /* falls through */
      case 15:
        i.audioPid === -1 && (i.audioPid = h);
        break;
      // Packetized metadata (ID3)
      case 21:
        i.id3Pid === -1 && (i.id3Pid = h);
        break;
      case 219:
        if (!s) {
          qe("H.264");
          break;
        }
      /* falls through */
      case 27:
        i.videoPid === -1 && (i.videoPid = h, i.segmentVideoCodec = "avc");
        break;
      // ISO/IEC 11172-3 (MPEG-1 audio)
      // or ISO/IEC 13818-3 (MPEG-2 halved sample rate audio)
      case 3:
      case 4:
        !e.mpeg && !e.mp3 ? v.log("MPEG audio found, not supported in this browser") : i.audioPid === -1 && (i.audioPid = h, i.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!s) {
          qe("AC-3");
          break;
        }
      /* falls through */
      case 129:
        e.ac3 ? i.audioPid === -1 && (i.audioPid = h, i.segmentAudioCodec = "ac3") : v.log("AC-3 audio found, not supported in this browser");
        break;
      case 6:
        if (i.audioPid === -1 && d > 0) {
          let c = t + 5, u = d;
          for (; u > 2; ) {
            switch (n[c]) {
              case 106:
                e.ac3 !== !0 ? v.log("AC-3 audio found, not supported in this browser for now") : (i.audioPid = h, i.segmentAudioCodec = "ac3");
                break;
            }
            const g = n[c + 1] + 2;
            c += g, u -= g;
          }
        }
        break;
      case 194:
      // SAMPLE-AES EC3
      /* falls through */
      case 135:
        return xe(r, new Error("Unsupported EC-3 in M2TS found")), i;
      case 36:
        return xe(r, new Error("Unsupported HEVC in M2TS found")), i;
    }
    t += d + 5;
  }
  return i;
}
function xe(n, t, e) {
  v.warn(`parsing error: ${t.message}`), n.emit(p.ERROR, p.ERROR, {
    type: $.MEDIA_ERROR,
    details: D.FRAG_PARSING_ERROR,
    fatal: !1,
    levelRetry: e,
    error: t,
    reason: t.message
  });
}
function qe(n) {
  v.log(`${n} with AES-128-CBC encryption found in unencrypted stream`);
}
function Gt(n) {
  let t = 0, e, s, r, i, a;
  const o = n.data;
  if (!n || n.size === 0)
    return null;
  for (; o[0].length < 19 && o.length > 1; )
    o[0] = gt(o[0], o[1]), o.splice(1, 1);
  if (e = o[0], (e[0] << 16) + (e[1] << 8) + e[2] === 1) {
    if (s = (e[4] << 8) + e[5], s && s > n.size - 6)
      return null;
    const l = e[7];
    l & 192 && (i = (e[9] & 14) * 536870912 + // 1 << 29
    (e[10] & 255) * 4194304 + // 1 << 22
    (e[11] & 254) * 16384 + // 1 << 14
    (e[12] & 255) * 128 + // 1 << 7
    (e[13] & 254) / 2, l & 64 ? (a = (e[14] & 14) * 536870912 + // 1 << 29
    (e[15] & 255) * 4194304 + // 1 << 22
    (e[16] & 254) * 16384 + // 1 << 14
    (e[17] & 255) * 128 + // 1 << 7
    (e[18] & 254) / 2, i - a > 60 * 9e4 && (v.warn(`${Math.round((i - a) / 9e4)}s delta between PTS and DTS, align them`), i = a)) : a = i), r = e[8];
    let h = r + 9;
    if (n.size <= h)
      return null;
    n.size -= h;
    const d = new Uint8Array(n.size);
    for (let c = 0, u = o.length; c < u; c++) {
      e = o[c];
      let g = e.byteLength;
      if (h)
        if (h > g) {
          h -= g;
          continue;
        } else
          e = e.subarray(h), g -= h, h = 0;
      d.set(e, t), t += g;
    }
    return s && (s -= r + 3), {
      data: d,
      pts: i,
      dts: a,
      len: s
    };
  }
  return null;
}
class go extends Cs {
  resetInitSegment(t, e, s, r) {
    super.resetInitSegment(t, e, s, r), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: e,
      duration: r,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(t) {
    if (!t)
      return !1;
    const e = Qt(t, 0);
    let s = (e == null ? void 0 : e.length) || 0;
    if (e && t[s] === 11 && t[s + 1] === 119 && As(e) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    vi(t, s) <= 16)
      return !1;
    for (let r = t.length; s < r; s++)
      if (Ti(t, s))
        return v.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(t, e) {
    return ro(t, e);
  }
  appendFrame(t, e, s) {
    if (this.basePTS !== null)
      return pi(t, e, s, this.basePTS, this.frameIndex);
  }
}
class pr {
  static getSilentFrame(t, e) {
    switch (t) {
      case "mp4a.40.2":
        if (e === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (e === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (e === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (e === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (e === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (e === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      // handle HE-AAC below (mp4a.40.5 / mp4a.40.29)
      default:
        if (e === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (e === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (e === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const wt = Math.pow(2, 32) - 1;
class L {
  static init() {
    L.types = {
      avc1: [],
      // codingname
      avcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let t;
    for (t in L.types)
      L.types.hasOwnProperty(t) && (L.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
    const e = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    L.HDLR_TYPES = {
      video: e,
      audio: s
    };
    const r = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), i = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    L.STTS = L.STSC = L.STCO = i, L.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), L.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), L.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), L.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const a = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
    L.FTYP = L.box(L.types.ftyp, a, l, a, o), L.DINF = L.box(L.types.dinf, L.box(L.types.dref, r));
  }
  static box(t, ...e) {
    let s = 8, r = e.length;
    const i = r;
    for (; r--; )
      s += e[r].byteLength;
    const a = new Uint8Array(s);
    for (a[0] = s >> 24 & 255, a[1] = s >> 16 & 255, a[2] = s >> 8 & 255, a[3] = s & 255, a.set(t, 4), r = 0, s = 8; r < i; r++)
      a.set(e[r], s), s += e[r].byteLength;
    return a;
  }
  static hdlr(t) {
    return L.box(L.types.hdlr, L.HDLR_TYPES[t]);
  }
  static mdat(t) {
    return L.box(L.types.mdat, t);
  }
  static mdhd(t, e) {
    e *= t;
    const s = Math.floor(e / (wt + 1)), r = Math.floor(e % (wt + 1));
    return L.box(L.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      r >> 24,
      r >> 16 & 255,
      r >> 8 & 255,
      r & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(t) {
    return L.box(L.types.mdia, L.mdhd(t.timescale, t.duration), L.hdlr(t.type), L.minf(t));
  }
  static mfhd(t) {
    return L.box(L.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255
      // sequence_number
    ]));
  }
  static minf(t) {
    return t.type === "audio" ? L.box(L.types.minf, L.box(L.types.smhd, L.SMHD), L.DINF, L.stbl(t)) : L.box(L.types.minf, L.box(L.types.vmhd, L.VMHD), L.DINF, L.stbl(t));
  }
  static moof(t, e, s) {
    return L.box(L.types.moof, L.mfhd(t), L.traf(s, e));
  }
  static moov(t) {
    let e = t.length;
    const s = [];
    for (; e--; )
      s[e] = L.trak(t[e]);
    return L.box.apply(null, [L.types.moov, L.mvhd(t[0].timescale, t[0].duration)].concat(s).concat(L.mvex(t)));
  }
  static mvex(t) {
    let e = t.length;
    const s = [];
    for (; e--; )
      s[e] = L.trex(t[e]);
    return L.box.apply(null, [L.types.mvex, ...s]);
  }
  static mvhd(t, e) {
    e *= t;
    const s = Math.floor(e / (wt + 1)), r = Math.floor(e % (wt + 1)), i = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      r >> 24,
      r >> 16 & 255,
      r >> 8 & 255,
      r & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return L.box(L.types.mvhd, i);
  }
  static sdtp(t) {
    const e = t.samples || [], s = new Uint8Array(4 + e.length);
    let r, i;
    for (r = 0; r < e.length; r++)
      i = e[r].flags, s[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
    return L.box(L.types.sdtp, s);
  }
  static stbl(t) {
    return L.box(L.types.stbl, L.stsd(t), L.box(L.types.stts, L.STTS), L.box(L.types.stsc, L.STSC), L.box(L.types.stsz, L.STSZ), L.box(L.types.stco, L.STCO));
  }
  static avc1(t) {
    let e = [], s = [], r, i, a;
    for (r = 0; r < t.sps.length; r++)
      i = t.sps[r], a = i.byteLength, e.push(a >>> 8 & 255), e.push(a & 255), e = e.concat(Array.prototype.slice.call(i));
    for (r = 0; r < t.pps.length; r++)
      i = t.pps[r], a = i.byteLength, s.push(a >>> 8 & 255), s.push(a & 255), s = s.concat(Array.prototype.slice.call(i));
    const o = L.box(L.types.avcC, new Uint8Array([
      1,
      // version
      e[3],
      // profile
      e[4],
      // profile compat
      e[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | t.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(e).concat([
      t.pps.length
      // numOfPictureParameterSets
    ]).concat(s))), l = t.width, h = t.height, d = t.pixelRatio[0], c = t.pixelRatio[1];
    return L.box(
      L.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        l >> 8 & 255,
        l & 255,
        // width
        h >> 8 & 255,
        h & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      L.box(L.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      L.box(L.types.pasp, new Uint8Array([
        d >> 24,
        // hSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255,
        c >> 24,
        // vSpacing
        c >> 16 & 255,
        c >> 8 & 255,
        c & 255
      ]))
    );
  }
  static esds(t) {
    const e = t.config.length;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      23 + e,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      15 + e,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5
      // descriptor_type
    ].concat([e]).concat(t.config).concat([6, 1, 2]));
  }
  static audioStsd(t) {
    const e = t.samplerate;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      t.channelCount,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      e >> 8 & 255,
      e & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(t) {
    return L.box(L.types.mp4a, L.audioStsd(t), L.box(L.types.esds, L.esds(t)));
  }
  static mp3(t) {
    return L.box(L.types[".mp3"], L.audioStsd(t));
  }
  static ac3(t) {
    return L.box(L.types["ac-3"], L.audioStsd(t), L.box(L.types.dac3, t.config));
  }
  static stsd(t) {
    return t.type === "audio" ? t.segmentCodec === "mp3" && t.codec === "mp3" ? L.box(L.types.stsd, L.STSD, L.mp3(t)) : t.segmentCodec === "ac3" ? L.box(L.types.stsd, L.STSD, L.ac3(t)) : L.box(L.types.stsd, L.STSD, L.mp4a(t)) : L.box(L.types.stsd, L.STSD, L.avc1(t));
  }
  static tkhd(t) {
    const e = t.id, s = t.duration * t.timescale, r = t.width, i = t.height, a = Math.floor(s / (wt + 1)), o = Math.floor(s % (wt + 1));
    return L.box(L.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      a >> 24,
      a >> 16 & 255,
      a >> 8 & 255,
      a & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      r >> 8 & 255,
      r & 255,
      0,
      0,
      // width
      i >> 8 & 255,
      i & 255,
      0,
      0
      // height
    ]));
  }
  static traf(t, e) {
    const s = L.sdtp(t), r = t.id, i = Math.floor(e / (wt + 1)), a = Math.floor(e % (wt + 1));
    return L.box(
      L.types.traf,
      L.box(L.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        r >> 24,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255
        // track_ID
      ])),
      L.box(L.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        i >> 24,
        i >> 16 & 255,
        i >> 8 & 255,
        i & 255,
        a >> 24,
        a >> 16 & 255,
        a >> 8 & 255,
        a & 255
      ])),
      L.trun(t, s.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      s
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(t) {
    return t.duration = t.duration || 4294967295, L.box(L.types.trak, L.tkhd(t), L.mdia(t));
  }
  static trex(t) {
    const e = t.id;
    return L.box(L.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(t, e) {
    const s = t.samples || [], r = s.length, i = 12 + 16 * r, a = new Uint8Array(i);
    let o, l, h, d, c, u;
    for (e += 8 + i, a.set([
      t.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      r >>> 24 & 255,
      r >>> 16 & 255,
      r >>> 8 & 255,
      r & 255,
      // sample_count
      e >>> 24 & 255,
      e >>> 16 & 255,
      e >>> 8 & 255,
      e & 255
      // data_offset
    ], 0), o = 0; o < r; o++)
      l = s[o], h = l.duration, d = l.size, c = l.flags, u = l.cts, a.set([
        h >>> 24 & 255,
        h >>> 16 & 255,
        h >>> 8 & 255,
        h & 255,
        // sample_duration
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255,
        // sample_size
        c.isLeading << 2 | c.dependsOn,
        c.isDependedOn << 6 | c.hasRedundancy << 4 | c.paddingValue << 1 | c.isNonSync,
        c.degradPrio & 61440,
        c.degradPrio & 15,
        // sample_flags
        u >>> 24 & 255,
        u >>> 16 & 255,
        u >>> 8 & 255,
        u & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return L.box(L.types.trun, a);
  }
  static initSegment(t) {
    L.types || L.init();
    const e = L.moov(t);
    return gt(L.FTYP, e);
  }
}
L.types = void 0;
L.HDLR_TYPES = void 0;
L.STTS = void 0;
L.STSC = void 0;
L.STCO = void 0;
L.STSZ = void 0;
L.VMHD = void 0;
L.SMHD = void 0;
L.STSD = void 0;
L.FTYP = void 0;
L.DINF = void 0;
const Li = 9e4;
function xs(n, t, e = 1, s = !1) {
  const r = n * t * e;
  return s ? Math.round(r) : r;
}
function mo(n, t, e = 1, s = !1) {
  return xs(n, t, 1 / e, s);
}
function Xt(n, t = !1) {
  return xs(n, 1e3, 1 / Li, t);
}
function po(n, t = 1) {
  return xs(n, Li, 1 / t);
}
const Eo = 10 * 1e3, Er = 1024, yo = 1152, To = 1536;
let Kt = null, Xe = null;
class Ee {
  constructor(t, e, s, r = "") {
    if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = t, this.config = e, this.typeSupported = s, this.ISGenerated = !1, Kt === null) {
      const i = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      Kt = i ? parseInt(i[1]) : 0;
    }
    if (Xe === null) {
      const i = navigator.userAgent.match(/Safari\/(\d+)/i);
      Xe = i ? parseInt(i[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(t) {
    v.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t;
  }
  resetNextTimestamp() {
    v.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    v.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(t) {
    let e = !1;
    const s = t[0].pts, r = t.reduce((i, a) => {
      let o = a.pts, l = o - i;
      return l < -4294967296 && (e = !0, o = ft(o, s), l = o - i), l > 0 ? i : o;
    }, s);
    return e && v.debug("PTS rollover detected"), r;
  }
  remux(t, e, s, r, i, a, o, l) {
    let h, d, c, u, g, f, m = i, E = i;
    const y = t.pid > -1, T = e.pid > -1, A = e.samples.length, R = t.samples.length > 0, S = o && A > 0 || A > 1;
    if ((!y || R) && (!T || S) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var I, b, x, O;
        const _ = this.videoTrackConfig;
        _ && (e.width !== _.width || e.height !== _.height || ((I = e.pixelRatio) == null ? void 0 : I[0]) !== ((b = _.pixelRatio) == null ? void 0 : b[0]) || ((x = e.pixelRatio) == null ? void 0 : x[1]) !== ((O = _.pixelRatio) == null ? void 0 : O[1])) && this.resetInitSegment();
      } else
        c = this.generateIS(t, e, i, a);
      const C = this.isVideoContiguous;
      let w = -1, j;
      if (S && (w = vo(e.samples), !C && this.config.forceKeyFrameOnDiscontinuity))
        if (f = !0, w > 0) {
          v.warn(`[mp4-remuxer]: Dropped ${w} out of ${A} video samples due to a missing keyframe`);
          const _ = this.getVideoStartPts(e.samples);
          e.samples = e.samples.slice(w), e.dropped += w, E += (e.samples[0].pts - _) / e.inputTimeScale, j = E;
        } else w === -1 && (v.warn(`[mp4-remuxer]: No keyframe found out of ${A} video samples`), f = !1);
      if (this.ISGenerated) {
        if (R && S) {
          const _ = this.getVideoStartPts(e.samples), H = (ft(t.samples[0].pts, _) - _) / e.inputTimeScale;
          m += Math.max(0, H), E += Math.max(0, -H);
        }
        if (R) {
          if (t.samplerate || (v.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), c = this.generateIS(t, e, i, a)), d = this.remuxAudio(t, m, this.isAudioContiguous, a, T || S || l === B.AUDIO ? E : void 0), S) {
            const _ = d ? d.endPTS - d.startPTS : 0;
            e.inputTimeScale || (v.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), c = this.generateIS(t, e, i, a)), h = this.remuxVideo(e, E, C, _);
          }
        } else S && (h = this.remuxVideo(e, E, C, 0));
        h && (h.firstKeyFrame = w, h.independent = w !== -1, h.firstKeyFramePTS = j);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (g = Ai(s, i, this._initPTS, this._initDTS)), r.samples.length && (u = Ri(r, i, this._initPTS))), {
      audio: d,
      video: h,
      initSegment: c,
      independent: f,
      text: u,
      id3: g
    };
  }
  generateIS(t, e, s, r) {
    const i = t.samples, a = e.samples, o = this.typeSupported, l = {}, h = this._initPTS;
    let d = !h || r, c = "audio/mp4", u, g, f;
    if (d && (u = g = 1 / 0), t.config && i.length) {
      switch (t.timescale = t.samplerate, t.segmentCodec) {
        case "mp3":
          o.mpeg ? (c = "audio/mpeg", t.codec = "") : o.mp3 && (t.codec = "mp3");
          break;
        case "ac3":
          t.codec = "ac-3";
          break;
      }
      l.audio = {
        id: "audio",
        container: c,
        codec: t.codec,
        initSegment: t.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : L.initSegment([t]),
        metadata: {
          channelCount: t.channelCount
        }
      }, d && (f = t.inputTimeScale, !h || f !== h.timescale ? u = g = i[0].pts - Math.round(f * s) : d = !1);
    }
    if (e.sps && e.pps && a.length) {
      if (e.timescale = e.inputTimeScale, l.video = {
        id: "main",
        container: "video/mp4",
        codec: e.codec,
        initSegment: L.initSegment([e]),
        metadata: {
          width: e.width,
          height: e.height
        }
      }, d)
        if (f = e.inputTimeScale, !h || f !== h.timescale) {
          const m = this.getVideoStartPts(a), E = Math.round(f * s);
          g = Math.min(g, ft(a[0].dts, m) - E), u = Math.min(u, m - E);
        } else
          d = !1;
      this.videoTrackConfig = {
        width: e.width,
        height: e.height,
        pixelRatio: e.pixelRatio
      };
    }
    if (Object.keys(l).length)
      return this.ISGenerated = !0, d ? (this._initPTS = {
        baseTime: u,
        timescale: f
      }, this._initDTS = {
        baseTime: g,
        timescale: f
      }) : u = f = void 0, {
        tracks: l,
        initPTS: u,
        timescale: f
      };
  }
  remuxVideo(t, e, s, r) {
    const i = t.inputTimeScale, a = t.samples, o = [], l = a.length, h = this._initPTS;
    let d = this.nextAvcDts, c = 8, u = this.videoSampleDuration, g, f, m = Number.POSITIVE_INFINITY, E = Number.NEGATIVE_INFINITY, y = !1;
    if (!s || d === null) {
      const P = e * i, M = a[0].pts - ft(a[0].dts, a[0].pts);
      Kt && d !== null && Math.abs(P - M - d) < 15e3 ? s = !0 : d = P - M;
    }
    const T = h.baseTime * i / h.timescale;
    for (let P = 0; P < l; P++) {
      const M = a[P];
      M.pts = ft(M.pts - T, d), M.dts = ft(M.dts - T, d), M.dts < a[P > 0 ? P - 1 : P].dts && (y = !0);
    }
    y && a.sort(function(P, M) {
      const q = P.dts - M.dts, K = P.pts - M.pts;
      return q || K;
    }), g = a[0].dts, f = a[a.length - 1].dts;
    const A = f - g, R = A ? Math.round(A / (l - 1)) : u || t.inputTimeScale / 30;
    if (s) {
      const P = g - d, M = P > R, q = P < -1;
      if ((M || q) && (M ? v.warn(`AVC: ${Xt(P, !0)} ms (${P}dts) hole between fragments detected at ${e.toFixed(3)}`) : v.warn(`AVC: ${Xt(-P, !0)} ms (${P}dts) overlapping between fragments detected at ${e.toFixed(3)}`), !q || d >= a[0].pts || Kt)) {
        g = d;
        const K = a[0].pts - P;
        if (M)
          a[0].dts = g, a[0].pts = K;
        else
          for (let Y = 0; Y < a.length && !(a[Y].dts > K); Y++)
            a[Y].dts -= P, a[Y].pts -= P;
        v.log(`Video: Initial PTS/DTS adjusted: ${Xt(K, !0)}/${Xt(g, !0)}, delta: ${Xt(P, !0)} ms`);
      }
    }
    g = Math.max(0, g);
    let S = 0, I = 0, b = g;
    for (let P = 0; P < l; P++) {
      const M = a[P], q = M.units, K = q.length;
      let Y = 0;
      for (let Z = 0; Z < K; Z++)
        Y += q[Z].data.length;
      I += Y, S += K, M.length = Y, M.dts < b ? (M.dts = b, b += R / 4 | 0 || 1) : b = M.dts, m = Math.min(M.pts, m), E = Math.max(M.pts, E);
    }
    f = a[l - 1].dts;
    const x = I + 4 * S + 8;
    let O;
    try {
      O = new Uint8Array(x);
    } catch (P) {
      this.observer.emit(p.ERROR, p.ERROR, {
        type: $.MUX_ERROR,
        details: D.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: P,
        bytes: x,
        reason: `fail allocating video mdat ${x}`
      });
      return;
    }
    const C = new DataView(O.buffer);
    C.setUint32(0, x), O.set(L.types.mdat, 4);
    let w = !1, j = Number.POSITIVE_INFINITY, _ = Number.POSITIVE_INFINITY, H = Number.NEGATIVE_INFINITY, N = Number.NEGATIVE_INFINITY;
    for (let P = 0; P < l; P++) {
      const M = a[P], q = M.units;
      let K = 0;
      for (let et = 0, st = q.length; et < st; et++) {
        const ct = q[et], mt = ct.data, Me = ct.data.byteLength;
        C.setUint32(c, Me), c += 4, O.set(mt, c), c += Me, K += 4 + Me;
      }
      let Y;
      if (P < l - 1)
        u = a[P + 1].dts - M.dts, Y = a[P + 1].pts - M.pts;
      else {
        const et = this.config, st = P > 0 ? M.dts - a[P - 1].dts : R;
        if (Y = P > 0 ? M.pts - a[P - 1].pts : R, et.stretchShortVideoTrack && this.nextAudioPts !== null) {
          const ct = Math.floor(et.maxBufferHole * i), mt = (r ? m + r * i : this.nextAudioPts) - M.pts;
          mt > ct ? (u = mt - st, u < 0 ? u = st : w = !0, v.log(`[mp4-remuxer]: It is approximately ${mt / 90} ms to the next segment; using duration ${u / 90} ms for the last video frame.`)) : u = st;
        } else
          u = st;
      }
      const Z = Math.round(M.pts - M.dts);
      j = Math.min(j, u), H = Math.max(H, u), _ = Math.min(_, Y), N = Math.max(N, Y), o.push(new yr(M.key, u, K, Z));
    }
    if (o.length) {
      if (Kt) {
        if (Kt < 70) {
          const P = o[0].flags;
          P.dependsOn = 2, P.isNonSync = 0;
        }
      } else if (Xe && N - _ < H - j && R / H < 0.025 && o[0].cts === 0) {
        v.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let P = g;
        for (let M = 0, q = o.length; M < q; M++) {
          const K = P + o[M].duration, Y = P + o[M].cts;
          if (M < q - 1) {
            const Z = K + o[M + 1].cts;
            o[M].duration = Z - Y;
          } else
            o[M].duration = M ? o[M - 1].duration : R;
          o[M].cts = 0, P = K;
        }
      }
    }
    u = w || !u ? R : u, this.nextAvcDts = d = f + u, this.videoSampleDuration = u, this.isVideoContiguous = !0;
    const G = {
      data1: L.moof(t.sequenceNumber++, g, tt({}, t, {
        samples: o
      })),
      data2: O,
      startPTS: m / i,
      endPTS: (E + u) / i,
      startDTS: g / i,
      endDTS: d / i,
      type: "video",
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: t.dropped
    };
    return t.samples = [], t.dropped = 0, G;
  }
  getSamplesPerFrame(t) {
    switch (t.segmentCodec) {
      case "mp3":
        return yo;
      case "ac3":
        return To;
      default:
        return Er;
    }
  }
  remuxAudio(t, e, s, r, i) {
    const a = t.inputTimeScale, o = t.samplerate ? t.samplerate : a, l = a / o, h = this.getSamplesPerFrame(t), d = h * l, c = this._initPTS, u = t.segmentCodec === "mp3" && this.typeSupported.mpeg, g = [], f = i !== void 0;
    let m = t.samples, E = u ? 0 : 8, y = this.nextAudioPts || -1;
    const T = e * a, A = c.baseTime * a / c.timescale;
    if (this.isAudioContiguous = s = s || m.length && y > 0 && (r && Math.abs(T - y) < 9e3 || Math.abs(ft(m[0].pts - A, T) - y) < 20 * d), m.forEach(function(N) {
      N.pts = ft(N.pts - A, T);
    }), !s || y < 0) {
      if (m = m.filter((N) => N.pts >= 0), !m.length)
        return;
      i === 0 ? y = 0 : r && !f ? y = Math.max(0, T) : y = m[0].pts;
    }
    if (t.segmentCodec === "aac") {
      const N = this.config.maxAudioFramesDrift;
      for (let G = 0, P = y; G < m.length; G++) {
        const M = m[G], q = M.pts, K = q - P, Y = Math.abs(1e3 * K / a);
        if (K <= -N * d && f)
          G === 0 && (v.warn(`Audio frame @ ${(q / a).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3 * K / a)} ms.`), this.nextAudioPts = y = P = q);
        else if (K >= N * d && Y < Eo && f) {
          let Z = Math.round(K / d);
          P = q - Z * d, P < 0 && (Z--, P += d), G === 0 && (this.nextAudioPts = y = P), v.warn(`[mp4-remuxer]: Injecting ${Z} audio frame @ ${(P / a).toFixed(3)}s due to ${Math.round(1e3 * K / a)} ms gap.`);
          for (let et = 0; et < Z; et++) {
            const st = Math.max(P, 0);
            let ct = pr.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
            ct || (v.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), ct = M.unit.subarray()), m.splice(G, 0, {
              unit: ct,
              pts: st
            }), P += d, G++;
          }
        }
        M.pts = P, P += d;
      }
    }
    let R = null, S = null, I, b = 0, x = m.length;
    for (; x--; )
      b += m[x].unit.byteLength;
    for (let N = 0, G = m.length; N < G; N++) {
      const P = m[N], M = P.unit;
      let q = P.pts;
      if (S !== null) {
        const Y = g[N - 1];
        Y.duration = Math.round((q - S) / l);
      } else if (s && t.segmentCodec === "aac" && (q = y), R = q, b > 0) {
        b += E;
        try {
          I = new Uint8Array(b);
        } catch (Y) {
          this.observer.emit(p.ERROR, p.ERROR, {
            type: $.MUX_ERROR,
            details: D.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: Y,
            bytes: b,
            reason: `fail allocating audio mdat ${b}`
          });
          return;
        }
        u || (new DataView(I.buffer).setUint32(0, b), I.set(L.types.mdat, 4));
      } else
        return;
      I.set(M, E);
      const K = M.byteLength;
      E += K, g.push(new yr(!0, h, K, 0)), S = q;
    }
    const O = g.length;
    if (!O)
      return;
    const C = g[g.length - 1];
    this.nextAudioPts = y = S + l * C.duration;
    const w = u ? new Uint8Array(0) : L.moof(t.sequenceNumber++, R / l, tt({}, t, {
      samples: g
    }));
    t.samples = [];
    const j = R / a, _ = y / a, H = {
      data1: w,
      data2: I,
      startPTS: j,
      endPTS: _,
      startDTS: j,
      endDTS: _,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: O
    };
    return this.isAudioContiguous = !0, H;
  }
  remuxEmptyAudio(t, e, s, r) {
    const i = t.inputTimeScale, a = t.samplerate ? t.samplerate : i, o = i / a, l = this.nextAudioPts, h = this._initDTS, d = h.baseTime * 9e4 / h.timescale, c = (l !== null ? l : r.startDTS * i) + d, u = r.endDTS * i + d, g = o * Er, f = Math.ceil((u - c) / g), m = pr.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
    if (v.warn("[mp4-remuxer]: remux empty Audio"), !m) {
      v.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
      return;
    }
    const E = [];
    for (let y = 0; y < f; y++) {
      const T = c + y * g;
      E.push({
        unit: m,
        pts: T,
        dts: T
      });
    }
    return t.samples = E, this.remuxAudio(t, e, s, !1);
  }
}
function ft(n, t) {
  let e;
  if (t === null)
    return n;
  for (t < n ? e = -8589934592 : e = 8589934592; Math.abs(n - t) > 4294967296; )
    n += e;
  return n;
}
function vo(n) {
  for (let t = 0; t < n.length; t++)
    if (n[t].key)
      return t;
  return -1;
}
function Ai(n, t, e, s) {
  const r = n.samples.length;
  if (!r)
    return;
  const i = n.inputTimeScale;
  for (let o = 0; o < r; o++) {
    const l = n.samples[o];
    l.pts = ft(l.pts - e.baseTime * i / e.timescale, t * i) / i, l.dts = ft(l.dts - s.baseTime * i / s.timescale, t * i) / i;
  }
  const a = n.samples;
  return n.samples = [], {
    samples: a
  };
}
function Ri(n, t, e) {
  const s = n.samples.length;
  if (!s)
    return;
  const r = n.inputTimeScale;
  for (let a = 0; a < s; a++) {
    const o = n.samples[a];
    o.pts = ft(o.pts - e.baseTime * r / e.timescale, t * r) / r;
  }
  n.samples.sort((a, o) => a.pts - o.pts);
  const i = n.samples;
  return n.samples = [], {
    samples: i
  };
}
class yr {
  constructor(t, e, s, r) {
    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = s, this.cts = r, this.flags = {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: t ? 2 : 1,
      isNonSync: t ? 0 : 1
    };
  }
}
class So {
  constructor() {
    this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
  }
  destroy() {
  }
  resetTimeStamp(t) {
    this.initPTS = t, this.lastEndTime = null;
  }
  resetNextTimestamp() {
    this.lastEndTime = null;
  }
  resetInitSegment(t, e, s, r) {
    this.audioCodec = e, this.videoCodec = s, this.generateInitSegment(In(t, r)), this.emitInitSegment = !0;
  }
  generateInitSegment(t) {
    let {
      audioCodec: e,
      videoCodec: s
    } = this;
    if (!(t != null && t.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const r = this.initData = Xr(t);
    r.audio && (e = Tr(r.audio, z.AUDIO)), r.video && (s = Tr(r.video, z.VIDEO));
    const i = {};
    r.audio && r.video ? i.audiovideo = {
      container: "video/mp4",
      codec: e + "," + s,
      initSegment: t,
      id: "main"
    } : r.audio ? i.audio = {
      container: "audio/mp4",
      codec: e,
      initSegment: t,
      id: "audio"
    } : r.video ? i.video = {
      container: "video/mp4",
      codec: s,
      initSegment: t,
      id: "main"
    } : v.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = i;
  }
  remux(t, e, s, r, i, a) {
    var o, l;
    let {
      initPTS: h,
      lastEndTime: d
    } = this;
    const c = {
      audio: void 0,
      video: void 0,
      text: r,
      id3: s,
      initSegment: void 0
    };
    F(d) || (d = this.lastEndTime = i || 0);
    const u = e.samples;
    if (!(u != null && u.length))
      return c;
    const g = {
      initPTS: void 0,
      timescale: 1
    };
    let f = this.initData;
    if ((o = f) != null && o.length || (this.generateInitSegment(u), f = this.initData), !((l = f) != null && l.length))
      return v.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), c;
    this.emitInitSegment && (g.tracks = this.initTracks, this.emitInitSegment = !1);
    const m = kn(u, f), E = bn(f, u), y = E === null ? i : E;
    (Lo(h, y, i, m) || g.timescale !== h.timescale && a) && (g.initPTS = y - i, h && h.timescale === 1 && v.warn(`Adjusting initPTS by ${g.initPTS - h.baseTime}`), this.initPTS = h = {
      baseTime: g.initPTS,
      timescale: 1
    });
    const T = t ? y - h.baseTime / h.timescale : d, A = T + m;
    wn(f, u, h.baseTime / h.timescale), m > 0 ? this.lastEndTime = A : (v.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const R = !!f.audio, S = !!f.video;
    let I = "";
    R && (I += "audio"), S && (I += "video");
    const b = {
      data1: u,
      startPTS: T,
      startDTS: T,
      endPTS: A,
      endDTS: A,
      type: I,
      hasAudio: R,
      hasVideo: S,
      nb: 1,
      dropped: 0
    };
    return c.audio = b.type === "audio" ? b : void 0, c.video = b.type !== "audio" ? b : void 0, c.initSegment = g, c.id3 = Ai(s, i, h, h), r.samples.length && (c.text = Ri(r, i, h)), c;
  }
}
function Lo(n, t, e, s) {
  if (n === null)
    return !0;
  const r = Math.max(s, 1), i = t - n.baseTime / n.timescale;
  return Math.abs(i - e) > r;
}
function Tr(n, t) {
  const e = n == null ? void 0 : n.codec;
  if (e && e.length > 4)
    return e;
  if (t === z.AUDIO) {
    if (e === "ec-3" || e === "ac-3" || e === "alac")
      return e;
    if (e === "fLaC" || e === "Opus")
      return De(e, !1);
    const s = "mp4a.40.5";
    return v.info(`Parsed audio codec "${e}" or audio object type not handled. Using "${s}"`), s;
  }
  return v.warn(`Unhandled video codec "${e}"`), e === "hvc1" || e === "hev1" ? "hvc1.1.6.L120.90" : e === "av01" ? "av01.0.04M.08" : "avc1.42e01e";
}
let Ct;
try {
  Ct = self.performance.now.bind(self.performance);
} catch {
  v.debug("Unable to use Performance API on this environment"), Ct = Wt == null ? void 0 : Wt.Date.now;
}
const ye = [{
  demux: ao,
  remux: So
}, {
  demux: Pt,
  remux: Ee
}, {
  demux: io,
  remux: Ee
}, {
  demux: go,
  remux: Ee
}];
ye.splice(2, 0, {
  demux: oo,
  remux: Ee
});
class vr {
  constructor(t, e, s, r, i) {
    this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t, this.typeSupported = e, this.config = s, this.vendor = r, this.id = i;
  }
  configure(t) {
    this.transmuxConfig = t, this.decrypter && this.decrypter.reset();
  }
  push(t, e, s, r) {
    const i = s.transmuxing;
    i.executeStart = Ct();
    let a = new Uint8Array(t);
    const {
      currentTransmuxState: o,
      transmuxConfig: l
    } = this;
    r && (this.currentTransmuxState = r);
    const {
      contiguous: h,
      discontinuity: d,
      trackSwitch: c,
      accurateTimeOffset: u,
      timeOffset: g,
      initSegmentChange: f
    } = r || o, {
      audioCodec: m,
      videoCodec: E,
      defaultInitPts: y,
      duration: T,
      initSegmentData: A
    } = l, R = Ao(a, e);
    if (R && R.method === "AES-128") {
      const x = this.getDecrypter();
      if (x.isSync()) {
        let O = x.softwareDecrypt(a, R.key.buffer, R.iv.buffer);
        if (s.part > -1 && (O = x.flush()), !O)
          return i.executeEnd = Ct(), ze(s);
        a = new Uint8Array(O);
      } else
        return this.decryptionPromise = x.webCryptoDecrypt(a, R.key.buffer, R.iv.buffer).then((O) => {
          const C = this.push(O, null, s);
          return this.decryptionPromise = null, C;
        }), this.decryptionPromise;
    }
    const S = this.needsProbing(d, c);
    if (S) {
      const x = this.configureTransmuxer(a);
      if (x)
        return v.warn(`[transmuxer] ${x.message}`), this.observer.emit(p.ERROR, p.ERROR, {
          type: $.MEDIA_ERROR,
          details: D.FRAG_PARSING_ERROR,
          fatal: !1,
          error: x,
          reason: x.message
        }), i.executeEnd = Ct(), ze(s);
    }
    (d || c || f || S) && this.resetInitSegment(A, m, E, T, e), (d || f || S) && this.resetInitialTimestamp(y), h || this.resetContiguity();
    const I = this.transmux(a, R, g, u, s), b = this.currentTransmuxState;
    return b.contiguous = !0, b.discontinuity = !1, b.trackSwitch = !1, i.executeEnd = Ct(), I;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(t) {
    const e = t.transmuxing;
    e.executeStart = Ct();
    const {
      decrypter: s,
      currentTransmuxState: r,
      decryptionPromise: i
    } = this;
    if (i)
      return i.then(() => this.flush(t));
    const a = [], {
      timeOffset: o
    } = r;
    if (s) {
      const c = s.flush();
      c && a.push(this.push(c, null, t));
    }
    const {
      demuxer: l,
      remuxer: h
    } = this;
    if (!l || !h)
      return e.executeEnd = Ct(), [ze(t)];
    const d = l.flush(o);
    return Te(d) ? d.then((c) => (this.flushRemux(a, c, t), a)) : (this.flushRemux(a, d, t), a);
  }
  flushRemux(t, e, s) {
    const {
      audioTrack: r,
      videoTrack: i,
      id3Track: a,
      textTrack: o
    } = e, {
      accurateTimeOffset: l,
      timeOffset: h
    } = this.currentTransmuxState;
    v.log(`[transmuxer.ts]: Flushed fragment ${s.sn}${s.part > -1 ? " p: " + s.part : ""} of level ${s.level}`);
    const d = this.remuxer.remux(r, i, a, o, h, l, !0, this.id);
    t.push({
      remuxResult: d,
      chunkMeta: s
    }), s.transmuxing.executeEnd = Ct();
  }
  resetInitialTimestamp(t) {
    const {
      demuxer: e,
      remuxer: s
    } = this;
    !e || !s || (e.resetTimeStamp(t), s.resetTimeStamp(t));
  }
  resetContiguity() {
    const {
      demuxer: t,
      remuxer: e
    } = this;
    !t || !e || (t.resetContiguity(), e.resetNextTimestamp());
  }
  resetInitSegment(t, e, s, r, i) {
    const {
      demuxer: a,
      remuxer: o
    } = this;
    !a || !o || (a.resetInitSegment(t, e, s, r), o.resetInitSegment(t, e, s, i));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(t, e, s, r, i) {
    let a;
    return e && e.method === "SAMPLE-AES" ? a = this.transmuxSampleAes(t, e, s, r, i) : a = this.transmuxUnencrypted(t, s, r, i), a;
  }
  transmuxUnencrypted(t, e, s, r) {
    const {
      audioTrack: i,
      videoTrack: a,
      id3Track: o,
      textTrack: l
    } = this.demuxer.demux(t, e, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(i, a, o, l, e, s, !1, this.id),
      chunkMeta: r
    };
  }
  transmuxSampleAes(t, e, s, r, i) {
    return this.demuxer.demuxSampleAes(t, e, s).then((a) => ({
      remuxResult: this.remuxer.remux(a.audioTrack, a.videoTrack, a.id3Track, a.textTrack, s, r, !1, this.id),
      chunkMeta: i
    }));
  }
  configureTransmuxer(t) {
    const {
      config: e,
      observer: s,
      typeSupported: r,
      vendor: i
    } = this;
    let a;
    for (let u = 0, g = ye.length; u < g; u++) {
      var o;
      if ((o = ye[u].demux) != null && o.probe(t)) {
        a = ye[u];
        break;
      }
    }
    if (!a)
      return new Error("Failed to find demuxer by probing fragment data");
    const l = this.demuxer, h = this.remuxer, d = a.remux, c = a.demux;
    (!h || !(h instanceof d)) && (this.remuxer = new d(s, e, r, i)), (!l || !(l instanceof c)) && (this.demuxer = new c(s, e, r), this.probe = c.probe);
  }
  needsProbing(t, e) {
    return !this.demuxer || !this.remuxer || t || e;
  }
  getDecrypter() {
    let t = this.decrypter;
    return t || (t = this.decrypter = new bs(this.config)), t;
  }
}
function Ao(n, t) {
  let e = null;
  return n.byteLength > 0 && (t == null ? void 0 : t.key) != null && t.iv !== null && t.method != null && (e = t), e;
}
const ze = (n) => ({
  remuxResult: {},
  chunkMeta: n
});
function Te(n) {
  return "then" in n && n.then instanceof Function;
}
class Ro {
  constructor(t, e, s, r, i) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = s, this.duration = r, this.defaultInitPts = i || null;
  }
}
class Do {
  constructor(t, e, s, r, i, a) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = s, this.trackSwitch = r, this.timeOffset = i, this.initSegmentChange = a;
  }
}
var Di = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function s() {
  }
  Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (e = !1));
  function r(l, h, d) {
    this.fn = l, this.context = h, this.once = d || !1;
  }
  function i(l, h, d, c, u) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var g = new r(d, c || l, u), f = e ? e + h : h;
    return l._events[f] ? l._events[f].fn ? l._events[f] = [l._events[f], g] : l._events[f].push(g) : (l._events[f] = g, l._eventsCount++), l;
  }
  function a(l, h) {
    --l._eventsCount === 0 ? l._events = new s() : delete l._events[h];
  }
  function o() {
    this._events = new s(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var l = [], h, d;
    if (this._eventsCount === 0) return l;
    for (d in h = this._events)
      t.call(h, d) && l.push(e ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(h)) : l;
  }, o.prototype.listeners = function(l) {
    var h = e ? e + l : l, d = this._events[h];
    if (!d) return [];
    if (d.fn) return [d.fn];
    for (var c = 0, u = d.length, g = new Array(u); c < u; c++)
      g[c] = d[c].fn;
    return g;
  }, o.prototype.listenerCount = function(l) {
    var h = e ? e + l : l, d = this._events[h];
    return d ? d.fn ? 1 : d.length : 0;
  }, o.prototype.emit = function(l, h, d, c, u, g) {
    var f = e ? e + l : l;
    if (!this._events[f]) return !1;
    var m = this._events[f], E = arguments.length, y, T;
    if (m.fn) {
      switch (m.once && this.removeListener(l, m.fn, void 0, !0), E) {
        case 1:
          return m.fn.call(m.context), !0;
        case 2:
          return m.fn.call(m.context, h), !0;
        case 3:
          return m.fn.call(m.context, h, d), !0;
        case 4:
          return m.fn.call(m.context, h, d, c), !0;
        case 5:
          return m.fn.call(m.context, h, d, c, u), !0;
        case 6:
          return m.fn.call(m.context, h, d, c, u, g), !0;
      }
      for (T = 1, y = new Array(E - 1); T < E; T++)
        y[T - 1] = arguments[T];
      m.fn.apply(m.context, y);
    } else {
      var A = m.length, R;
      for (T = 0; T < A; T++)
        switch (m[T].once && this.removeListener(l, m[T].fn, void 0, !0), E) {
          case 1:
            m[T].fn.call(m[T].context);
            break;
          case 2:
            m[T].fn.call(m[T].context, h);
            break;
          case 3:
            m[T].fn.call(m[T].context, h, d);
            break;
          case 4:
            m[T].fn.call(m[T].context, h, d, c);
            break;
          default:
            if (!y) for (R = 1, y = new Array(E - 1); R < E; R++)
              y[R - 1] = arguments[R];
            m[T].fn.apply(m[T].context, y);
        }
    }
    return !0;
  }, o.prototype.on = function(l, h, d) {
    return i(this, l, h, d, !1);
  }, o.prototype.once = function(l, h, d) {
    return i(this, l, h, d, !0);
  }, o.prototype.removeListener = function(l, h, d, c) {
    var u = e ? e + l : l;
    if (!this._events[u]) return this;
    if (!h)
      return a(this, u), this;
    var g = this._events[u];
    if (g.fn)
      g.fn === h && (!c || g.once) && (!d || g.context === d) && a(this, u);
    else {
      for (var f = 0, m = [], E = g.length; f < E; f++)
        (g[f].fn !== h || c && !g[f].once || d && g[f].context !== d) && m.push(g[f]);
      m.length ? this._events[u] = m.length === 1 ? m[0] : m : a(this, u);
    }
    return this;
  }, o.prototype.removeAllListeners = function(l) {
    var h;
    return l ? (h = e ? e + l : l, this._events[h] && a(this, h)) : (this._events = new s(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = e, o.EventEmitter = o, n.exports = o;
})(Di);
var Io = Di.exports, _s = /* @__PURE__ */ ji(Io);
class Ii {
  constructor(t, e, s, r) {
    this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
    const i = t.config;
    this.hls = t, this.id = e, this.useWorker = !!i.enableWorker, this.onTransmuxComplete = s, this.onFlush = r;
    const a = (h, d) => {
      d = d || {}, d.frag = this.frag, d.id = this.id, h === p.ERROR && (this.error = d.error), this.hls.trigger(h, d);
    };
    this.observer = new _s(), this.observer.on(p.FRAG_DECRYPTED, a), this.observer.on(p.ERROR, a);
    const o = Ut(i.preferManagedMediaSource) || {
      isTypeSupported: () => !1
    }, l = {
      mpeg: o.isTypeSupported("audio/mpeg"),
      mp3: o.isTypeSupported('audio/mp4; codecs="mp3"'),
      ac3: o.isTypeSupported('audio/mp4; codecs="ac-3"')
    };
    if (this.useWorker && typeof Worker < "u" && (i.workerPath || Ha())) {
      try {
        i.workerPath ? (v.log(`loading Web Worker ${i.workerPath} for "${e}"`), this.workerContext = Wa(i.workerPath)) : (v.log(`injecting Web Worker for "${e}"`), this.workerContext = Ya()), this.onwmsg = (d) => this.onWorkerMessage(d);
        const {
          worker: h
        } = this.workerContext;
        h.addEventListener("message", this.onwmsg), h.onerror = (d) => {
          const c = new Error(`${d.message}  (${d.filename}:${d.lineno})`);
          i.enableWorker = !1, v.warn(`Error in "${e}" Web Worker, fallback to inline`), this.hls.trigger(p.ERROR, {
            type: $.OTHER_ERROR,
            details: D.INTERNAL_EXCEPTION,
            fatal: !1,
            event: "demuxerWorker",
            error: c
          });
        }, h.postMessage({
          cmd: "init",
          typeSupported: l,
          vendor: "",
          id: e,
          config: JSON.stringify(i)
        });
      } catch (h) {
        v.warn(`Error setting up "${e}" Web Worker, fallback to inline`, h), this.resetWorker(), this.error = null, this.transmuxer = new vr(this.observer, l, i, "", e);
      }
      return;
    }
    this.transmuxer = new vr(this.observer, l, i, "", e);
  }
  resetWorker() {
    if (this.workerContext) {
      const {
        worker: t,
        objectURL: e
      } = this.workerContext;
      e && self.URL.revokeObjectURL(e), t.removeEventListener("message", this.onwmsg), t.onerror = null, t.terminate(), this.workerContext = null;
    }
  }
  destroy() {
    if (this.workerContext)
      this.resetWorker(), this.onwmsg = void 0;
    else {
      const e = this.transmuxer;
      e && (e.destroy(), this.transmuxer = null);
    }
    const t = this.observer;
    t && t.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
  }
  push(t, e, s, r, i, a, o, l, h, d) {
    var c, u;
    h.transmuxing.start = self.performance.now();
    const {
      transmuxer: g
    } = this, f = a ? a.start : i.start, m = i.decryptdata, E = this.frag, y = !(E && i.cc === E.cc), T = !(E && h.level === E.level), A = E ? h.sn - E.sn : -1, R = this.part ? h.part - this.part.index : -1, S = A === 0 && h.id > 1 && h.id === (E == null ? void 0 : E.stats.chunkCount), I = !T && (A === 1 || A === 0 && (R === 1 || S && R <= 0)), b = self.performance.now();
    (T || A || i.stats.parsing.start === 0) && (i.stats.parsing.start = b), a && (R || !I) && (a.stats.parsing.start = b);
    const x = !(E && ((c = i.initSegment) == null ? void 0 : c.url) === ((u = E.initSegment) == null ? void 0 : u.url)), O = new Do(y, I, l, T, f, x);
    if (!I || y || x) {
      v.log(`[transmuxer-interface, ${i.type}]: Starting new transmux session for sn: ${h.sn} p: ${h.part} level: ${h.level} id: ${h.id}
        discontinuity: ${y}
        trackSwitch: ${T}
        contiguous: ${I}
        accurateTimeOffset: ${l}
        timeOffset: ${f}
        initSegmentChange: ${x}`);
      const C = new Ro(s, r, e, o, d);
      this.configureTransmuxer(C);
    }
    if (this.frag = i, this.part = a, this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "demux",
        data: t,
        decryptdata: m,
        chunkMeta: h,
        state: O
      }, t instanceof ArrayBuffer ? [t] : []);
    else if (g) {
      const C = g.push(t, m, h, O);
      Te(C) ? (g.async = !0, C.then((w) => {
        this.handleTransmuxComplete(w);
      }).catch((w) => {
        this.transmuxerError(w, h, "transmuxer-interface push error");
      })) : (g.async = !1, this.handleTransmuxComplete(C));
    }
  }
  flush(t) {
    t.transmuxing.start = self.performance.now();
    const {
      transmuxer: e
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "flush",
        chunkMeta: t
      });
    else if (e) {
      let s = e.flush(t);
      Te(s) || e.async ? (Te(s) || (s = Promise.resolve(s)), s.then((r) => {
        this.handleFlushResult(r, t);
      }).catch((r) => {
        this.transmuxerError(r, t, "transmuxer-interface flush error");
      })) : this.handleFlushResult(s, t);
    }
  }
  transmuxerError(t, e, s) {
    this.hls && (this.error = t, this.hls.trigger(p.ERROR, {
      type: $.MEDIA_ERROR,
      details: D.FRAG_PARSING_ERROR,
      chunkMeta: e,
      frag: this.frag || void 0,
      fatal: !1,
      error: t,
      err: t,
      reason: s
    }));
  }
  handleFlushResult(t, e) {
    t.forEach((s) => {
      this.handleTransmuxComplete(s);
    }), this.onFlush(e);
  }
  onWorkerMessage(t) {
    const e = t.data;
    if (!(e != null && e.event)) {
      v.warn(`worker message received with no ${e ? "event name" : "data"}`);
      return;
    }
    const s = this.hls;
    if (this.hls)
      switch (e.event) {
        case "init": {
          var r;
          const i = (r = this.workerContext) == null ? void 0 : r.objectURL;
          i && self.URL.revokeObjectURL(i);
          break;
        }
        case "transmuxComplete": {
          this.handleTransmuxComplete(e.data);
          break;
        }
        case "flush": {
          this.onFlush(e.data);
          break;
        }
        // pass logs from the worker thread to the main logger
        case "workerLog":
          v[e.data.logType] && v[e.data.logType](e.data.message);
          break;
        default: {
          e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, s.trigger(e.event, e.data);
          break;
        }
      }
  }
  configureTransmuxer(t) {
    const {
      transmuxer: e
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      cmd: "configure",
      config: t
    }) : e && e.configure(t);
  }
  handleTransmuxComplete(t) {
    t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t);
  }
}
const Sr = 100;
class bo extends ks {
  constructor(t, e, s) {
    super(t, e, s, "[audio-stream-controller]", B.AUDIO), this.videoBuffer = null, this.videoTrackCC = -1, this.waitingVideoCC = -1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null;
  }
  _registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.LEVEL_LOADED, this.onLevelLoaded, this), t.on(p.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(p.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(p.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(p.ERROR, this.onError, this), t.on(p.BUFFER_RESET, this.onBufferReset, this), t.on(p.BUFFER_CREATED, this.onBufferCreated, this), t.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(p.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(p.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.LEVEL_LOADED, this.onLevelLoaded, this), t.off(p.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(p.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(p.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(p.ERROR, this.onError, this), t.off(p.BUFFER_RESET, this.onBufferReset, this), t.off(p.BUFFER_CREATED, this.onBufferCreated, this), t.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(p.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(p.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(t, {
    frag: e,
    id: s,
    initPTS: r,
    timescale: i
  }) {
    if (s === "main") {
      const a = e.cc;
      this.initPTS[e.cc] = {
        baseTime: r,
        timescale: i
      }, this.log(`InitPTS for cc: ${a} found from main: ${r}`), this.videoTrackCC = a, this.state === k.WAITING_INIT_PTS && this.tick();
    }
  }
  startLoad(t) {
    if (!this.levels) {
      this.startPosition = t, this.state = k.STOPPED;
      return;
    }
    const e = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(Sr), e > 0 && t === -1 ? (this.log(`Override startPosition with lastCurrentTime @${e.toFixed(3)}`), t = e, this.state = k.IDLE) : (this.loadedmetadata = !1, this.state = k.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick();
  }
  doTick() {
    switch (this.state) {
      case k.IDLE:
        this.doTickIdle();
        break;
      case k.WAITING_TRACK: {
        var t;
        const {
          levels: s,
          trackId: r
        } = this, i = s == null || (t = s[r]) == null ? void 0 : t.details;
        if (i) {
          if (this.waitForCdnTuneIn(i))
            break;
          this.state = k.WAITING_INIT_PTS;
        }
        break;
      }
      case k.FRAG_LOADING_WAITING_RETRY: {
        var e;
        const s = performance.now(), r = this.retryDate;
        if (!r || s >= r || (e = this.media) != null && e.seeking) {
          const {
            levels: i,
            trackId: a
          } = this;
          this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded((i == null ? void 0 : i[a]) || null), this.state = k.IDLE;
        }
        break;
      }
      case k.WAITING_INIT_PTS: {
        const s = this.waitingData;
        if (s) {
          const {
            frag: r,
            part: i,
            cache: a,
            complete: o
          } = s;
          if (this.initPTS[r.cc] !== void 0) {
            this.waitingData = null, this.waitingVideoCC = -1, this.state = k.FRAG_LOADING;
            const l = a.flush(), h = {
              frag: r,
              part: i,
              payload: l,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(h), o && super._handleFragmentLoadComplete(h);
          } else if (this.videoTrackCC !== this.waitingVideoCC)
            this.log(`Waiting fragment cc (${r.cc}) cancelled because video is at cc ${this.videoTrackCC}`), this.clearWaitingFragment();
          else {
            const l = this.getLoadPosition(), h = Q.bufferInfo(this.mediaBuffer, l, this.config.maxBufferHole);
            us(h.end, this.config.maxFragLookUpTolerance, r) < 0 && (this.log(`Waiting fragment cc (${r.cc}) @ ${r.start} cancelled because another fragment at ${h.end} is needed`), this.clearWaitingFragment());
          }
        } else
          this.state = k.IDLE;
      }
    }
    this.onTickEnd();
  }
  clearWaitingFragment() {
    const t = this.waitingData;
    t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = k.IDLE);
  }
  resetLoadingState() {
    this.clearWaitingFragment(), super.resetLoadingState();
  }
  onTickEnd() {
    const {
      media: t
    } = this;
    t != null && t.readyState && (this.lastCurrentTime = t.currentTime);
  }
  doTickIdle() {
    const {
      hls: t,
      levels: e,
      media: s,
      trackId: r
    } = this, i = t.config;
    if (!this.buffering || !s && (this.startFragRequested || !i.startFragPrefetch) || !(e != null && e[r]))
      return;
    const a = e[r], o = a.details;
    if (!o || o.live && this.levelLastLoaded !== a || this.waitForCdnTuneIn(o)) {
      this.state = k.WAITING_TRACK;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, z.AUDIO, B.AUDIO));
    const h = this.getFwdBufferInfo(l, B.AUDIO);
    if (h === null)
      return;
    if (!this.switchingTrack && this._streamEnded(h, o)) {
      t.trigger(p.BUFFER_EOS, {
        type: "audio"
      }), this.state = k.ENDED;
      return;
    }
    const d = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, B.MAIN), c = h.len, u = this.getMaxBufferLength(d == null ? void 0 : d.len), g = o.fragments, f = g[0].start, m = this.getLoadPosition(), E = this.flushing ? m : h.end;
    if (this.switchingTrack && s) {
      const R = m;
      o.PTSKnown && R < f && (h.end > f || h.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), s.currentTime = f + 0.05);
    }
    if (c >= u && !this.switchingTrack && E < g[g.length - 1].start)
      return;
    let y = this.getNextFragment(E, o), T = !1;
    if (y && this.isLoopLoading(y, E) && (T = !!y.gap, y = this.getNextFragmentLoopLoading(y, o, h, B.MAIN, u)), !y) {
      this.bufferFlushed = !0;
      return;
    }
    const A = d && y.start > d.end + o.targetduration;
    if (A || // Or wait for main buffer after buffing some audio
    !(d != null && d.len) && h.len) {
      const R = this.getAppendedFrag(y.start, B.MAIN);
      if (R === null || (T || (T = !!R.gap || !!A && d.len === 0), A && !T || T && h.nextStart && h.nextStart < R.end))
        return;
    }
    this.loadFragment(y, a, E);
  }
  getMaxBufferLength(t) {
    const e = super.getMaxBufferLength();
    return t ? Math.min(Math.max(e, t), this.config.maxMaxBufferLength) : e;
  }
  onMediaDetaching() {
    this.videoBuffer = null, this.bufferFlushed = this.flushing = !1, super.onMediaDetaching();
  }
  onAudioTracksUpdated(t, {
    audioTracks: e
  }) {
    this.resetTransmuxer(), this.levels = e.map((s) => new jt(s));
  }
  onAudioTrackSwitching(t, e) {
    const s = !!e.url;
    this.trackId = e.id;
    const {
      fragCurrent: r
    } = this;
    r && (r.abortRequests(), this.removeUnbufferedFrags(r.start)), this.resetLoadingState(), s ? this.setInterval(Sr) : this.resetTransmuxer(), s ? (this.switchingTrack = e, this.state = k.IDLE, this.flushAudioIfNeeded(e)) : (this.switchingTrack = null, this.bufferedTrack = e, this.state = k.STOPPED), this.tick();
  }
  onManifestLoading() {
    this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = this.flushing = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1;
  }
  onLevelLoaded(t, e) {
    this.mainDetails = e.details, this.cachedTrackLoadedData !== null && (this.hls.trigger(p.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null);
  }
  onAudioTrackLoaded(t, e) {
    var s;
    if (this.mainDetails == null) {
      this.cachedTrackLoadedData = e;
      return;
    }
    const {
      levels: r
    } = this, {
      details: i,
      id: a
    } = e;
    if (!r) {
      this.warn(`Audio tracks were reset while loading level ${a}`);
      return;
    }
    this.log(`Audio track ${a} loaded [${i.startSN},${i.endSN}]${i.lastPartSn ? `[part-${i.lastPartSn}-${i.lastPartIndex}]` : ""},duration:${i.totalduration}`);
    const o = r[a];
    let l = 0;
    if (i.live || (s = o.details) != null && s.live) {
      this.checkLiveUpdate(i);
      const d = this.mainDetails;
      if (i.deltaUpdateFailed || !d)
        return;
      if (!o.details && i.hasProgramDateTime && d.hasProgramDateTime)
        we(i, d), l = i.fragments[0].start;
      else {
        var h;
        l = this.alignPlaylists(i, o.details, (h = this.levelLastLoaded) == null ? void 0 : h.details);
      }
    }
    o.details = i, this.levelLastLoaded = o, !this.startFragRequested && (this.mainDetails || !i.live) && this.setStartPosition(this.mainDetails || i, l), this.state === k.WAITING_TRACK && !this.waitForCdnTuneIn(i) && (this.state = k.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(t) {
    var e;
    const {
      frag: s,
      part: r,
      payload: i
    } = t, {
      config: a,
      trackId: o,
      levels: l
    } = this;
    if (!l) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const h = l[o];
    if (!h) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const d = h.details;
    if (!d) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return;
    }
    const c = a.defaultAudioCodec || h.audioCodec || "mp4a.40.2";
    let u = this.transmuxer;
    u || (u = this.transmuxer = new Ii(this.hls, B.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const g = this.initPTS[s.cc], f = (e = s.initSegment) == null ? void 0 : e.data;
    if (g !== void 0) {
      const m = r ? r.index : -1, E = m !== -1, y = new Is(s.level, s.sn, s.stats.chunkCount, i.byteLength, m, E);
      u.push(i, f, c, "", s, r, d.totalduration, !1, y, g);
    } else {
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${d.startSN} ,${d.endSN}],track ${o}`);
      const {
        cache: m
      } = this.waitingData = this.waitingData || {
        frag: s,
        part: r,
        cache: new di(),
        complete: !1
      };
      m.push(new Uint8Array(i)), this.waitingVideoCC = this.videoTrackCC, this.state = k.WAITING_INIT_PTS;
    }
  }
  _handleFragmentLoadComplete(t) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(t);
  }
  onBufferReset() {
    this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1;
  }
  onBufferCreated(t, e) {
    const s = e.tracks.audio;
    s && (this.mediaBuffer = s.buffer || null), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer || null);
  }
  onFragBuffered(t, e) {
    const {
      frag: s,
      part: r
    } = e;
    if (s.type !== B.AUDIO) {
      if (!this.loadedmetadata && s.type === B.MAIN) {
        const i = this.videoBuffer || this.media;
        i && Q.getBuffered(i).length && (this.loadedmetadata = !0);
      }
      return;
    }
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${r ? " p: " + r.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (s.sn !== "initSegment") {
      this.fragPrevious = s;
      const i = this.switchingTrack;
      i && (this.bufferedTrack = i, this.switchingTrack = null, this.hls.trigger(p.AUDIO_TRACK_SWITCHED, at({}, i)));
    }
    this.fragBufferedComplete(s, r);
  }
  onError(t, e) {
    var s;
    if (e.fatal) {
      this.state = k.ERROR;
      return;
    }
    switch (e.details) {
      case D.FRAG_GAP:
      case D.FRAG_PARSING_ERROR:
      case D.FRAG_DECRYPT_ERROR:
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(B.AUDIO, e);
        break;
      case D.AUDIO_TRACK_LOAD_ERROR:
      case D.AUDIO_TRACK_LOAD_TIMEOUT:
      case D.LEVEL_PARSING_ERROR:
        !e.levelRetry && this.state === k.WAITING_TRACK && ((s = e.context) == null ? void 0 : s.type) === W.AUDIO_TRACK && (this.state = k.IDLE);
        break;
      case D.BUFFER_APPEND_ERROR:
      case D.BUFFER_FULL_ERROR:
        if (!e.parent || e.parent !== "audio")
          return;
        if (e.details === D.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(e) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case D.INTERNAL_EXCEPTION:
        this.recoverWorkerError(e);
        break;
    }
  }
  onBufferFlushing(t, {
    type: e
  }) {
    e !== z.VIDEO && (this.flushing = !0);
  }
  onBufferFlushed(t, {
    type: e
  }) {
    if (e !== z.VIDEO) {
      this.flushing = !1, this.bufferFlushed = !0, this.state === k.ENDED && (this.state = k.IDLE);
      const s = this.mediaBuffer || this.media;
      s && (this.afterBufferFlushed(s, e, B.AUDIO), this.tick());
    }
  }
  _handleTransmuxComplete(t) {
    var e;
    const s = "audio", {
      hls: r
    } = this, {
      remuxResult: i,
      chunkMeta: a
    } = t, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: l,
      part: h,
      level: d
    } = o, {
      details: c
    } = d, {
      audio: u,
      text: g,
      id3: f,
      initSegment: m
    } = i;
    if (this.fragContextChanged(l) || !c) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = k.PARSING, this.switchingTrack && u && this.completeAudioSwitch(this.switchingTrack), m != null && m.tracks) {
      const E = l.initSegment || l;
      this._bufferInitSegment(d, m.tracks, E, a), r.trigger(p.FRAG_PARSING_INIT_SEGMENT, {
        frag: E,
        id: s,
        tracks: m.tracks
      });
    }
    if (u) {
      const {
        startPTS: E,
        endPTS: y,
        startDTS: T,
        endDTS: A
      } = u;
      h && (h.elementaryStreams[z.AUDIO] = {
        startPTS: E,
        endPTS: y,
        startDTS: T,
        endDTS: A
      }), l.setElementaryStreamInfo(z.AUDIO, E, y, T, A), this.bufferFragmentData(u, l, h, a);
    }
    if (f != null && (e = f.samples) != null && e.length) {
      const E = tt({
        id: s,
        frag: l,
        details: c
      }, f);
      r.trigger(p.FRAG_PARSING_METADATA, E);
    }
    if (g) {
      const E = tt({
        id: s,
        frag: l,
        details: c
      }, g);
      r.trigger(p.FRAG_PARSING_USERDATA, E);
    }
  }
  _bufferInitSegment(t, e, s, r) {
    if (this.state !== k.PARSING)
      return;
    e.video && delete e.video;
    const i = e.audio;
    if (!i)
      return;
    i.id = "audio";
    const a = t.audioCodec;
    this.log(`Init audio buffer, container:${i.container}, codecs[level/parsed]=[${a}/${i.codec}]`), a && a.split(",").length === 1 && (i.levelCodec = a), this.hls.trigger(p.BUFFER_CODECS, e);
    const o = i.initSegment;
    if (o != null && o.byteLength) {
      const l = {
        type: "audio",
        frag: s,
        part: null,
        chunkMeta: r,
        parent: s.type,
        data: o
      };
      this.hls.trigger(p.BUFFER_APPENDING, l);
    }
    this.tickImmediate();
  }
  loadFragment(t, e, s) {
    const r = this.fragmentTracker.getState(t);
    if (this.fragCurrent = t, this.switchingTrack || r === nt.NOT_LOADED || r === nt.PARTIAL) {
      var i;
      if (t.sn === "initSegment")
        this._loadInitSegment(t, e);
      else if ((i = e.details) != null && i.live && !this.initPTS[t.cc]) {
        this.log(`Waiting for video PTS in continuity counter ${t.cc} of live stream before loading audio fragment ${t.sn} of level ${this.trackId}`), this.state = k.WAITING_INIT_PTS;
        const a = this.mainDetails;
        a && a.fragments[0].start !== e.details.fragments[0].start && we(e.details, a);
      } else
        this.startFragRequested = !0, super.loadFragment(t, e, s);
    } else
      this.clearTrackerIfNeeded(t);
  }
  flushAudioIfNeeded(t) {
    if (this.media && this.bufferedTrack) {
      const {
        name: e,
        lang: s,
        assocLang: r,
        characteristics: i,
        audioCodec: a,
        channels: o
      } = this.bufferedTrack;
      Nt({
        name: e,
        lang: s,
        assocLang: r,
        characteristics: i,
        audioCodec: a,
        channels: o
      }, t, Ot) || (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null);
    }
  }
  completeAudioSwitch(t) {
    const {
      hls: e
    } = this;
    this.flushAudioIfNeeded(t), this.bufferedTrack = t, this.switchingTrack = null, e.trigger(p.AUDIO_TRACK_SWITCHED, at({}, t));
  }
}
function bi(n, t) {
  if (n.length !== t.length)
    return !1;
  for (let e = 0; e < n.length; e++)
    if (!te(n[e].attrs, t[e].attrs))
      return !1;
  return !0;
}
function te(n, t, e) {
  const s = n["STABLE-RENDITION-ID"];
  return s && !e ? s === t["STABLE-RENDITION-ID"] : !(e || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((r) => n[r] !== t[r]);
}
function gs(n, t) {
  return t.label.toLowerCase() === n.name.toLowerCase() && (!t.language || t.language.toLowerCase() === (n.lang || "").toLowerCase());
}
class ko extends Ds {
  constructor(t) {
    super(t, "[audio-track-controller]"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.MANIFEST_PARSED, this.onManifestParsed, this), t.on(p.LEVEL_LOADING, this.onLevelLoading, this), t.on(p.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(p.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.MANIFEST_PARSED, this.onManifestParsed, this), t.off(p.LEVEL_LOADING, this.onLevelLoading, this), t.off(p.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(p.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(p.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
  }
  onManifestLoading() {
    this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0;
  }
  onManifestParsed(t, e) {
    this.tracks = e.audioTracks || [];
  }
  onAudioTrackLoaded(t, e) {
    const {
      id: s,
      groupId: r,
      details: i
    } = e, a = this.tracksInGroup[s];
    if (!a || a.groupId !== r) {
      this.warn(`Audio track with id:${s} and group:${r} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = e.details, this.log(`Audio track ${s} "${a.name}" lang:${a.lang} group:${r} loaded [${i.startSN}-${i.endSN}]`), s === this.trackId && this.playlistLoaded(s, e, o);
  }
  onLevelLoading(t, e) {
    this.switchLevel(e.level);
  }
  onLevelSwitching(t, e) {
    this.switchLevel(e.level);
  }
  switchLevel(t) {
    const e = this.hls.levels[t];
    if (!e)
      return;
    const s = e.audioGroups || null, r = this.groupIds;
    let i = this.currentTrack;
    if (!s || (r == null ? void 0 : r.length) !== (s == null ? void 0 : s.length) || s != null && s.some((o) => (r == null ? void 0 : r.indexOf(o)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const o = this.tracks.filter((u) => !s || s.indexOf(u.groupId) !== -1);
      if (o.length)
        this.selectDefaultTrack && !o.some((u) => u.default) && (this.selectDefaultTrack = !1), o.forEach((u, g) => {
          u.id = g;
        });
      else if (!i && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = o;
      const l = this.hls.config.audioPreference;
      if (!i && l) {
        const u = At(l, o, Ot);
        if (u > -1)
          i = o[u];
        else {
          const g = At(l, this.tracks);
          i = this.tracks[g];
        }
      }
      let h = this.findTrackId(i);
      h === -1 && i && (h = this.findTrackId(null));
      const d = {
        audioTracks: o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s == null ? void 0 : s.join(",")}`), this.hls.trigger(p.AUDIO_TRACKS_UPDATED, d);
      const c = this.trackId;
      if (h !== -1 && c === -1)
        this.setAudioTrack(h);
      else if (o.length && c === -1) {
        var a;
        const u = new Error(`No audio track selected for current audio group-ID(s): ${(a = this.groupIds) == null ? void 0 : a.join(",")} track count: ${o.length}`);
        this.warn(u.message), this.hls.trigger(p.ERROR, {
          type: $.MEDIA_ERROR,
          details: D.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: u
        });
      }
    } else this.shouldReloadPlaylist(i) && this.setAudioTrack(this.trackId);
  }
  onError(t, e) {
    e.fatal || !e.context || e.context.type === W.AUDIO_TRACK && e.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(e.context.groupId) !== -1) && (this.requestScheduled = -1, this.checkRetry(e));
  }
  get allAudioTracks() {
    return this.tracks;
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(t) {
    this.selectDefaultTrack = !1, this.setAudioTrack(t);
  }
  setAudioOption(t) {
    const e = this.hls;
    if (e.config.audioPreference = t, t) {
      const s = this.allAudioTracks;
      if (this.selectDefaultTrack = !1, s.length) {
        const r = this.currentTrack;
        if (r && Nt(t, r, Ot))
          return r;
        const i = At(t, this.tracksInGroup, Ot);
        if (i > -1) {
          const a = this.tracksInGroup[i];
          return this.setAudioTrack(i), a;
        } else if (r) {
          let a = e.loadLevel;
          a === -1 && (a = e.firstAutoLevel);
          const o = ba(t, e.levels, s, a, Ot);
          if (o === -1)
            return null;
          e.nextLoadLevel = o;
        }
        if (t.channels || t.audioCodec) {
          const a = At(t, s);
          if (a > -1)
            return s[a];
        }
      }
    }
    return null;
  }
  setAudioTrack(t) {
    const e = this.tracksInGroup;
    if (t < 0 || t >= e.length) {
      this.warn(`Invalid audio track id: ${t}`);
      return;
    }
    this.clearTimer(), this.selectDefaultTrack = !1;
    const s = this.currentTrack, r = e[t], i = r.details && !r.details.live;
    if (t === this.trackId && r === s && i || (this.log(`Switching to audio-track ${t} "${r.name}" lang:${r.lang} group:${r.groupId} channels:${r.channels}`), this.trackId = t, this.currentTrack = r, this.hls.trigger(p.AUDIO_TRACK_SWITCHING, at({}, r)), i))
      return;
    const a = this.switchParams(r.url, s == null ? void 0 : s.details, r.details);
    this.loadPlaylist(a);
  }
  findTrackId(t) {
    const e = this.tracksInGroup;
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      if (!(this.selectDefaultTrack && !r.default) && (!t || Nt(t, r, Ot)))
        return s;
    }
    if (t) {
      const {
        name: s,
        lang: r,
        assocLang: i,
        characteristics: a,
        audioCodec: o,
        channels: l
      } = t;
      for (let h = 0; h < e.length; h++) {
        const d = e[h];
        if (Nt({
          name: s,
          lang: r,
          assocLang: i,
          characteristics: a,
          audioCodec: o,
          channels: l
        }, d, Ot))
          return h;
      }
      for (let h = 0; h < e.length; h++) {
        const d = e[h];
        if (te(t.attrs, d.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return h;
      }
      for (let h = 0; h < e.length; h++) {
        const d = e[h];
        if (te(t.attrs, d.attrs, ["LANGUAGE"]))
          return h;
      }
    }
    return -1;
  }
  loadPlaylist(t) {
    const e = this.currentTrack;
    if (this.shouldLoadPlaylist(e) && e) {
      super.loadPlaylist();
      const s = e.id, r = e.groupId;
      let i = e.url;
      if (t)
        try {
          i = t.addDirectives(i);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      this.log(`loading audio-track playlist ${s} "${e.name}" lang:${e.lang} group:${r}`), this.clearTimer(), this.hls.trigger(p.AUDIO_TRACK_LOADING, {
        url: i,
        id: s,
        groupId: r,
        deliveryDirectives: t || null
      });
    }
  }
}
const Lr = 500;
class Co extends ks {
  constructor(t, e, s) {
    super(t, e, s, "[subtitle-stream-controller]", B.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
  }
  _registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.LEVEL_LOADED, this.onLevelLoaded, this), t.on(p.ERROR, this.onError, this), t.on(p.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(p.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(p.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(p.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.LEVEL_LOADED, this.onLevelLoaded, this), t.off(p.ERROR, this.onError, this), t.off(p.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(p.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(p.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(p.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  startLoad(t) {
    this.stopLoad(), this.state = k.IDLE, this.setInterval(Lr), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick();
  }
  onManifestLoading() {
    this.mainDetails = null, this.fragmentTracker.removeAllFragments();
  }
  onMediaDetaching() {
    this.tracksBuffered = [], super.onMediaDetaching();
  }
  onLevelLoaded(t, e) {
    this.mainDetails = e.details;
  }
  onSubtitleFragProcessed(t, e) {
    const {
      frag: s,
      success: r
    } = e;
    if (this.fragPrevious = s, this.state = k.IDLE, !r)
      return;
    const i = this.tracksBuffered[this.currentTrackId];
    if (!i)
      return;
    let a;
    const o = s.start;
    for (let h = 0; h < i.length; h++)
      if (o >= i[h].start && o <= i[h].end) {
        a = i[h];
        break;
      }
    const l = s.start + s.duration;
    a ? a.end = l : (a = {
      start: o,
      end: l
    }, i.push(a)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null);
  }
  onBufferFlushing(t, e) {
    const {
      startOffset: s,
      endOffset: r
    } = e;
    if (s === 0 && r !== Number.POSITIVE_INFINITY) {
      const i = r - 1;
      if (i <= 0)
        return;
      e.endOffsetSubtitles = Math.max(0, i), this.tracksBuffered.forEach((a) => {
        for (let o = 0; o < a.length; ) {
          if (a[o].end <= i) {
            a.shift();
            continue;
          } else if (a[o].start < i)
            a[o].start = i;
          else
            break;
          o++;
        }
      }), this.fragmentTracker.removeFragmentsInRange(s, i, B.SUBTITLE);
    }
  }
  onFragBuffered(t, e) {
    if (!this.loadedmetadata && e.frag.type === B.MAIN) {
      var s;
      (s = this.media) != null && s.buffered.length && (this.loadedmetadata = !0);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(t, e) {
    const s = e.frag;
    (s == null ? void 0 : s.type) === B.SUBTITLE && (e.details === D.FRAG_GAP && this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== k.STOPPED && (this.state = k.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(t, {
    subtitleTracks: e
  }) {
    if (this.levels && bi(this.levels, e)) {
      this.levels = e.map((s) => new jt(s));
      return;
    }
    this.tracksBuffered = [], this.levels = e.map((s) => {
      const r = new jt(s);
      return this.tracksBuffered[r.id] = [], r;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, B.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(t, e) {
    var s;
    if (this.currentTrackId = e.id, !((s = this.levels) != null && s.length) || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const r = this.levels[this.currentTrackId];
    r != null && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r && this.setInterval(Lr);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(t, e) {
    var s;
    const {
      currentTrackId: r,
      levels: i
    } = this, {
      details: a,
      id: o
    } = e;
    if (!i) {
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return;
    }
    const l = i[o];
    if (o >= i.length || !l)
      return;
    this.log(`Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
    let h = 0;
    if (a.live || (s = l.details) != null && s.live) {
      const c = this.mainDetails;
      if (a.deltaUpdateFailed || !c)
        return;
      const u = c.fragments[0];
      if (!l.details)
        a.hasProgramDateTime && c.hasProgramDateTime ? (we(a, c), h = a.fragments[0].start) : u && (h = u.start, cs(a, h));
      else {
        var d;
        h = this.alignPlaylists(a, l.details, (d = this.levelLastLoaded) == null ? void 0 : d.details), h === 0 && u && (h = u.start, cs(a, h));
      }
    }
    l.details = a, this.levelLastLoaded = l, o === r && (!this.startFragRequested && (this.mainDetails || !a.live) && this.setStartPosition(this.mainDetails || a, h), this.tick(), a.live && !this.fragCurrent && this.media && this.state === k.IDLE && (Ce(null, a.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0)));
  }
  _handleFragmentLoadComplete(t) {
    const {
      frag: e,
      payload: s
    } = t, r = e.decryptdata, i = this.hls;
    if (!this.fragContextChanged(e) && s && s.byteLength > 0 && r != null && r.key && r.iv && r.method === "AES-128") {
      const a = performance.now();
      this.decrypter.decrypt(new Uint8Array(s), r.key.buffer, r.iv.buffer).catch((o) => {
        throw i.trigger(p.ERROR, {
          type: $.MEDIA_ERROR,
          details: D.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: e
        }), o;
      }).then((o) => {
        const l = performance.now();
        i.trigger(p.FRAG_DECRYPTED, {
          frag: e,
          payload: o,
          stats: {
            tstart: a,
            tdecrypt: l
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = k.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = k.IDLE;
      return;
    }
    if (this.state === k.IDLE) {
      const {
        currentTrackId: t,
        levels: e
      } = this, s = e == null ? void 0 : e[t];
      if (!s || !e.length || !s.details)
        return;
      const {
        config: r
      } = this, i = this.getLoadPosition(), a = Q.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], i, r.maxBufferHole), {
        end: o,
        len: l
      } = a, h = this.getFwdBufferInfo(this.media, B.MAIN), d = s.details, c = this.getMaxBufferLength(h == null ? void 0 : h.len) + d.levelTargetDuration;
      if (l > c)
        return;
      const u = d.fragments, g = u.length, f = d.edge;
      let m = null;
      const E = this.fragPrevious;
      if (o < f) {
        const y = r.maxFragLookUpTolerance, T = o > f - y ? 0 : y;
        m = Ce(E, u, Math.max(u[0].start, o), T), !m && E && E.start < u[0].start && (m = u[0]);
      } else
        m = u[g - 1];
      if (!m)
        return;
      if (m = this.mapToInitFragWhenRequired(m), m.sn !== "initSegment") {
        const y = m.sn - d.startSN, T = u[y - 1];
        T && T.cc === m.cc && this.fragmentTracker.getState(T) === nt.NOT_LOADED && (m = T);
      }
      this.fragmentTracker.getState(m) === nt.NOT_LOADED && this.loadFragment(m, s, o);
    }
  }
  getMaxBufferLength(t) {
    const e = super.getMaxBufferLength();
    return t ? Math.max(e, t) : e;
  }
  loadFragment(t, e, s) {
    this.fragCurrent = t, t.sn === "initSegment" ? this._loadInitSegment(t, e) : (this.startFragRequested = !0, super.loadFragment(t, e, s));
  }
  get mediaBufferTimeRanges() {
    return new wo(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class wo {
  constructor(t) {
    this.buffered = void 0;
    const e = (s, r, i) => {
      if (r = r >>> 0, r > i - 1)
        throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${r}) is greater than the maximum bound (${i})`);
      return t[r][s];
    };
    this.buffered = {
      get length() {
        return t.length;
      },
      end(s) {
        return e("end", s, t.length);
      },
      start(s) {
        return e("start", s, t.length);
      }
    };
  }
}
class Po extends Ds {
  constructor(t) {
    super(t, "[subtitle-track-controller]"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.onTextTracksChanged = () => {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return;
      let e = null;
      const s = ge(this.media.textTracks);
      for (let i = 0; i < s.length; i++)
        if (s[i].mode === "hidden")
          e = s[i];
        else if (s[i].mode === "showing") {
          e = s[i];
          break;
        }
      const r = this.findTrackForTextTrack(e);
      this.subtitleTrack !== r && this.setSubtitleTrack(r);
    }, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(t) {
    this._subtitleDisplay = t, this.trackId > -1 && this.toggleTrackModes();
  }
  registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.MANIFEST_PARSED, this.onManifestParsed, this), t.on(p.LEVEL_LOADING, this.onLevelLoading, this), t.on(p.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(p.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.MANIFEST_PARSED, this.onManifestParsed, this), t.off(p.LEVEL_LOADING, this.onLevelLoading, this), t.off(p.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(p.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(p.ERROR, this.onError, this);
  }
  // Listen for subtitle track change, then extract the current track ID.
  onMediaAttached(t, e) {
    this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
  }
  pollTrackChange(t) {
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, t);
  }
  onMediaDetaching() {
    this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), ge(this.media.textTracks).forEach((t) => {
      Vt(t);
    }), this.subtitleTrack = -1, this.media = null);
  }
  onManifestLoading() {
    this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(t, e) {
    this.tracks = e.subtitleTracks;
  }
  onSubtitleTrackLoaded(t, e) {
    const {
      id: s,
      groupId: r,
      details: i
    } = e, a = this.tracksInGroup[s];
    if (!a || a.groupId !== r) {
      this.warn(`Subtitle track with id:${s} and group:${r} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = e.details, this.log(`Subtitle track ${s} "${a.name}" lang:${a.lang} group:${r} loaded [${i.startSN}-${i.endSN}]`), s === this.trackId && this.playlistLoaded(s, e, o);
  }
  onLevelLoading(t, e) {
    this.switchLevel(e.level);
  }
  onLevelSwitching(t, e) {
    this.switchLevel(e.level);
  }
  switchLevel(t) {
    const e = this.hls.levels[t];
    if (!e)
      return;
    const s = e.subtitleGroups || null, r = this.groupIds;
    let i = this.currentTrack;
    if (!s || (r == null ? void 0 : r.length) !== (s == null ? void 0 : s.length) || s != null && s.some((a) => (r == null ? void 0 : r.indexOf(a)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const a = this.tracks.filter((d) => !s || s.indexOf(d.groupId) !== -1);
      if (a.length)
        this.selectDefaultTrack && !a.some((d) => d.default) && (this.selectDefaultTrack = !1), a.forEach((d, c) => {
          d.id = c;
        });
      else if (!i && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = a;
      const o = this.hls.config.subtitlePreference;
      if (!i && o) {
        this.selectDefaultTrack = !1;
        const d = At(o, a);
        if (d > -1)
          i = a[d];
        else {
          const c = At(o, this.tracks);
          i = this.tracks[c];
        }
      }
      let l = this.findTrackId(i);
      l === -1 && i && (l = this.findTrackId(null));
      const h = {
        subtitleTracks: a
      };
      this.log(`Updating subtitle tracks, ${a.length} track(s) found in "${s == null ? void 0 : s.join(",")}" group-id`), this.hls.trigger(p.SUBTITLE_TRACKS_UPDATED, h), l !== -1 && this.trackId === -1 && this.setSubtitleTrack(l);
    } else this.shouldReloadPlaylist(i) && this.setSubtitleTrack(this.trackId);
  }
  findTrackId(t) {
    const e = this.tracksInGroup, s = this.selectDefaultTrack;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      if (!(s && !i.default || !s && !t) && (!t || Nt(i, t)))
        return r;
    }
    if (t) {
      for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (te(t.attrs, i.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return r;
      }
      for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (te(t.attrs, i.attrs, ["LANGUAGE"]))
          return r;
      }
    }
    return -1;
  }
  findTrackForTextTrack(t) {
    if (t) {
      const e = this.tracksInGroup;
      for (let s = 0; s < e.length; s++) {
        const r = e[s];
        if (gs(r, t))
          return s;
      }
    }
    return -1;
  }
  onError(t, e) {
    e.fatal || !e.context || e.context.type === W.SUBTITLE_TRACK && e.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(e.context.groupId) !== -1) && this.checkRetry(e);
  }
  get allSubtitleTracks() {
    return this.tracks;
  }
  /** get alternate subtitle tracks list from playlist **/
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(t) {
    this.selectDefaultTrack = !1, this.setSubtitleTrack(t);
  }
  setSubtitleOption(t) {
    if (this.hls.config.subtitlePreference = t, t) {
      const e = this.allSubtitleTracks;
      if (this.selectDefaultTrack = !1, e.length) {
        const s = this.currentTrack;
        if (s && Nt(t, s))
          return s;
        const r = At(t, this.tracksInGroup);
        if (r > -1) {
          const i = this.tracksInGroup[r];
          return this.setSubtitleTrack(r), i;
        } else {
          if (s)
            return null;
          {
            const i = At(t, e);
            if (i > -1)
              return e[i];
          }
        }
      }
    }
    return null;
  }
  loadPlaylist(t) {
    super.loadPlaylist();
    const e = this.currentTrack;
    if (this.shouldLoadPlaylist(e) && e) {
      const s = e.id, r = e.groupId;
      let i = e.url;
      if (t)
        try {
          i = t.addDirectives(i);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      this.log(`Loading subtitle playlist for id ${s}`), this.hls.trigger(p.SUBTITLE_TRACK_LOADING, {
        url: i,
        id: s,
        groupId: r,
        deliveryDirectives: t || null
      });
    }
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes() {
    const {
      media: t
    } = this;
    if (!t)
      return;
    const e = ge(t.textTracks), s = this.currentTrack;
    let r;
    if (s && (r = e.filter((i) => gs(s, i))[0], r || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(e).forEach((i) => {
      i.mode !== "disabled" && i !== r && (i.mode = "disabled");
    }), r) {
      const i = this.subtitleDisplay ? "showing" : "hidden";
      r.mode !== i && (r.mode = i);
    }
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(t) {
    const e = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = t;
      return;
    }
    if (t < -1 || t >= e.length || !F(t)) {
      this.warn(`Invalid subtitle track id: ${t}`);
      return;
    }
    this.clearTimer(), this.selectDefaultTrack = !1;
    const s = this.currentTrack, r = e[t] || null;
    if (this.trackId = t, this.currentTrack = r, this.toggleTrackModes(), !r) {
      this.hls.trigger(p.SUBTITLE_TRACK_SWITCH, {
        id: t
      });
      return;
    }
    const i = !!r.details && !r.details.live;
    if (t === this.trackId && r === s && i)
      return;
    this.log(`Switching to subtitle-track ${t}` + (r ? ` "${r.name}" lang:${r.lang} group:${r.groupId}` : ""));
    const {
      id: a,
      groupId: o = "",
      name: l,
      type: h,
      url: d
    } = r;
    this.hls.trigger(p.SUBTITLE_TRACK_SWITCH, {
      id: a,
      groupId: o,
      name: l,
      type: h,
      url: d
    });
    const c = this.switchParams(r.url, s == null ? void 0 : s.details, r.details);
    this.loadPlaylist(c);
  }
}
class xo {
  constructor(t) {
    this.buffers = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.buffers = t;
  }
  append(t, e, s) {
    const r = this.queues[e];
    r.push(t), r.length === 1 && !s && this.executeNext(e);
  }
  insertAbort(t, e) {
    this.queues[e].unshift(t), this.executeNext(e);
  }
  appendBlocker(t) {
    let e;
    const s = new Promise((i) => {
      e = i;
    }), r = {
      execute: e,
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: () => {
      }
    };
    return this.append(r, t), s;
  }
  executeNext(t) {
    const e = this.queues[t];
    if (e.length) {
      const s = e[0];
      try {
        s.execute();
      } catch (r) {
        v.warn(`[buffer-operation-queue]: Exception executing "${t}" SourceBuffer operation: ${r}`), s.onError(r);
        const i = this.buffers[t];
        i != null && i.updating || this.shiftAndExecuteNext(t);
      }
    }
  }
  shiftAndExecuteNext(t) {
    this.queues[t].shift(), this.executeNext(t);
  }
  current(t) {
    return this.queues[t][0];
  }
}
const Ar = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;
class _o {
  constructor(t) {
    this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = (s) => {
      this.hls && this.hls.pauseBuffering();
    }, this._onStartStreaming = (s) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = () => {
      const {
        media: s,
        mediaSource: r
      } = this;
      this.log("Media source opened"), s && (s.removeEventListener("emptied", this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(p.MEDIA_ATTACHED, {
        media: s,
        mediaSource: r
      })), r && r.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks();
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: s,
        _objectUrl: r
      } = this;
      s !== r && v.error(`Media element src was set while attaching MediaSource (${r} > ${s})`);
    }, this.hls = t;
    const e = "[buffer-controller]";
    this.appendSource = Gn(Ut(t.config.preferManagedMediaSource)), this.log = v.log.bind(v, e), this.warn = v.warn.bind(v, e), this.error = v.error.bind(v, e), this._initSourceBuffer(), this.registerListeners();
  }
  hasSourceTypes() {
    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null;
  }
  registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.MANIFEST_PARSED, this.onManifestParsed, this), t.on(p.BUFFER_RESET, this.onBufferReset, this), t.on(p.BUFFER_APPENDING, this.onBufferAppending, this), t.on(p.BUFFER_CODECS, this.onBufferCodecs, this), t.on(p.BUFFER_EOS, this.onBufferEos, this), t.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(p.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(p.FRAG_PARSED, this.onFragParsed, this), t.on(p.FRAG_CHANGED, this.onFragChanged, this);
  }
  unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.MANIFEST_PARSED, this.onManifestParsed, this), t.off(p.BUFFER_RESET, this.onBufferReset, this), t.off(p.BUFFER_APPENDING, this.onBufferAppending, this), t.off(p.BUFFER_CODECS, this.onBufferCodecs, this), t.off(p.BUFFER_EOS, this.onBufferEos, this), t.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(p.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(p.FRAG_PARSED, this.onFragParsed, this), t.off(p.FRAG_CHANGED, this.onFragChanged, this);
  }
  _initSourceBuffer() {
    this.sourceBuffer = {}, this.operationQueue = new xo(this.sourceBuffer), this.listeners = {
      audio: [],
      video: [],
      audiovideo: []
    }, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.lastMpegAudioChunk = null;
  }
  onManifestLoading() {
    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(t, e) {
    let s = 2;
    (e.audio && !e.video || !e.altAudio) && (s = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = s, this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`);
  }
  onMediaAttaching(t, e) {
    const s = this.media = e.media, r = Ut(this.appendSource);
    if (s && r) {
      var i;
      const a = this.mediaSource = new r();
      this.log(`created media source: ${(i = a.constructor) == null ? void 0 : i.name}`), a.addEventListener("sourceopen", this._onMediaSourceOpen), a.addEventListener("sourceended", this._onMediaSourceEnded), a.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (a.addEventListener("startstreaming", this._onStartStreaming), a.addEventListener("endstreaming", this._onEndStreaming));
      const o = this._objectUrl = self.URL.createObjectURL(a);
      if (this.appendSource)
        try {
          s.removeAttribute("src");
          const l = self.ManagedMediaSource;
          s.disableRemotePlayback = s.disableRemotePlayback || l && a instanceof l, Rr(s), Oo(s, o), s.load();
        } catch {
          s.src = o;
        }
      else
        s.src = o;
      s.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  onMediaDetaching() {
    const {
      media: t,
      mediaSource: e,
      _objectUrl: s
    } = this;
    if (e) {
      if (this.log("media source detaching"), e.readyState === "open")
        try {
          e.endOfStream();
        } catch (r) {
          this.warn(`onMediaDetaching: ${r.message} while calling endOfStream`);
        }
      this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e.removeEventListener("startstreaming", this._onStartStreaming), e.removeEventListener("endstreaming", this._onEndStreaming)), t && (t.removeEventListener("emptied", this._onMediaEmptied), s && self.URL.revokeObjectURL(s), this.mediaSrc === s ? (t.removeAttribute("src"), this.appendSource && Rr(t), t.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
    }
    this.hls.trigger(p.MEDIA_DETACHED, void 0);
  }
  onBufferReset() {
    this.getSourceBufferTypes().forEach((t) => {
      this.resetBuffer(t);
    }), this._initSourceBuffer(), this.hls.resumeBuffering();
  }
  resetBuffer(t) {
    const e = this.sourceBuffer[t];
    try {
      if (e) {
        var s;
        this.removeBufferListeners(t), this.sourceBuffer[t] = void 0, (s = this.mediaSource) != null && s.sourceBuffers.length && this.mediaSource.removeSourceBuffer(e);
      }
    } catch (r) {
      this.warn(`onBufferReset ${t}`, r);
    }
  }
  onBufferCodecs(t, e) {
    const s = this.getSourceBufferTypes().length, r = Object.keys(e);
    if (r.forEach((a) => {
      if (s) {
        const l = this.tracks[a];
        if (l && typeof l.buffer.changeType == "function") {
          var o;
          const {
            id: h,
            codec: d,
            levelCodec: c,
            container: u,
            metadata: g
          } = e[a], f = Ys(l.codec, l.levelCodec), m = f == null ? void 0 : f.replace(Ar, "$1");
          let E = Ys(d, c);
          const y = (o = E) == null ? void 0 : o.replace(Ar, "$1");
          if (E && m !== y) {
            a.slice(0, 5) === "audio" && (E = De(E, this.appendSource));
            const T = `${u};codecs=${E}`;
            this.appendChangeType(a, T), this.log(`switching codec ${f} to ${E}`), this.tracks[a] = {
              buffer: l.buffer,
              codec: d,
              container: u,
              levelCodec: c,
              metadata: g,
              id: h
            };
          }
        }
      } else
        this.pendingTracks[a] = e[a];
    }), s)
      return;
    const i = Math.max(this.bufferCodecEventsExpected - 1, 0);
    this.bufferCodecEventsExpected !== i && (this.log(`${i} bufferCodec event(s) expected ${r.join(",")}`), this.bufferCodecEventsExpected = i), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks();
  }
  appendChangeType(t, e) {
    const {
      operationQueue: s
    } = this, r = {
      execute: () => {
        const i = this.sourceBuffer[t];
        i && (this.log(`changing ${t} sourceBuffer type to ${e}`), i.changeType(e)), s.shiftAndExecuteNext(t);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (i) => {
        this.warn(`Failed to change ${t} SourceBuffer type`, i);
      }
    };
    s.append(r, t, !!this.pendingTracks[t]);
  }
  onBufferAppending(t, e) {
    const {
      hls: s,
      operationQueue: r,
      tracks: i
    } = this, {
      data: a,
      type: o,
      frag: l,
      part: h,
      chunkMeta: d
    } = e, c = d.buffering[o], u = self.performance.now();
    c.start = u;
    const g = l.stats.buffering, f = h ? h.stats.buffering : null;
    g.start === 0 && (g.start = u), f && f.start === 0 && (f.start = u);
    const m = i.audio;
    let E = !1;
    o === "audio" && (m == null ? void 0 : m.container) === "audio/mpeg" && (E = !this.lastMpegAudioChunk || d.id === 1 || this.lastMpegAudioChunk.sn !== d.sn, this.lastMpegAudioChunk = d);
    const y = l.start, T = {
      execute: () => {
        if (c.executeStart = self.performance.now(), E) {
          const A = this.sourceBuffer[o];
          if (A) {
            const R = y - A.timestampOffset;
            Math.abs(R) >= 0.1 && (this.log(`Updating audio SourceBuffer timestampOffset to ${y} (delta: ${R}) sn: ${l.sn})`), A.timestampOffset = y);
          }
        }
        this.appendExecutor(a, o);
      },
      onStart: () => {
      },
      onComplete: () => {
        const A = self.performance.now();
        c.executeEnd = c.end = A, g.first === 0 && (g.first = A), f && f.first === 0 && (f.first = A);
        const {
          sourceBuffer: R
        } = this, S = {};
        for (const I in R)
          S[I] = Q.getBuffered(R[I]);
        this.appendErrors[o] = 0, o === "audio" || o === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(p.BUFFER_APPENDED, {
          type: o,
          frag: l,
          part: h,
          chunkMeta: d,
          parent: l.type,
          timeRanges: S
        });
      },
      onError: (A) => {
        const R = {
          type: $.MEDIA_ERROR,
          parent: l.type,
          details: D.BUFFER_APPEND_ERROR,
          sourceBufferName: o,
          frag: l,
          part: h,
          chunkMeta: d,
          error: A,
          err: A,
          fatal: !1
        };
        if (A.code === DOMException.QUOTA_EXCEEDED_ERR)
          R.details = D.BUFFER_FULL_ERROR;
        else {
          const S = ++this.appendErrors[o];
          R.details = D.BUFFER_APPEND_ERROR, this.warn(`Failed ${S}/${s.config.appendErrorMaxRetry} times to append segment in "${o}" sourceBuffer`), S >= s.config.appendErrorMaxRetry && (R.fatal = !0);
        }
        s.trigger(p.ERROR, R);
      }
    };
    r.append(T, o, !!this.pendingTracks[o]);
  }
  onBufferFlushing(t, e) {
    const {
      operationQueue: s
    } = this, r = (i) => ({
      execute: this.removeExecutor.bind(this, i, e.startOffset, e.endOffset),
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(p.BUFFER_FLUSHED, {
          type: i
        });
      },
      onError: (a) => {
        this.warn(`Failed to remove from ${i} SourceBuffer`, a);
      }
    });
    e.type ? s.append(r(e.type), e.type) : this.getSourceBufferTypes().forEach((i) => {
      s.append(r(i), i);
    });
  }
  onFragParsed(t, e) {
    const {
      frag: s,
      part: r
    } = e, i = [], a = r ? r.elementaryStreams : s.elementaryStreams;
    a[z.AUDIOVIDEO] ? i.push("audiovideo") : (a[z.AUDIO] && i.push("audio"), a[z.VIDEO] && i.push("video"));
    const o = () => {
      const l = self.performance.now();
      s.stats.buffering.end = l, r && (r.stats.buffering.end = l);
      const h = r ? r.stats : s.stats;
      this.hls.trigger(p.FRAG_BUFFERED, {
        frag: s,
        part: r,
        stats: h,
        id: s.type
      });
    };
    i.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, i);
  }
  onFragChanged(t, e) {
    this.trimBuffers();
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as ended and trigger checkEos()
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(t, e) {
    this.getSourceBufferTypes().reduce((s, r) => {
      const i = this.sourceBuffer[r];
      return i && (!e.type || e.type === r) && (i.ending = !0, i.ended || (i.ended = !0, this.log(`${r} sourceBuffer now EOS`))), s && !!(!i || i.ended);
    }, !0) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
      this.getSourceBufferTypes().forEach((r) => {
        const i = this.sourceBuffer[r];
        i && (i.ending = !1);
      });
      const {
        mediaSource: s
      } = this;
      if (!s || s.readyState !== "open") {
        s && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${s.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), s.endOfStream();
    }));
  }
  onLevelUpdated(t, {
    details: e
  }) {
    e.fragments.length && (this.details = e, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
  }
  trimBuffers() {
    const {
      hls: t,
      details: e,
      media: s
    } = this;
    if (!s || e === null || !this.getSourceBufferTypes().length)
      return;
    const r = t.config, i = s.currentTime, a = e.levelTargetDuration, o = e.live && r.liveBackBufferLength !== null ? r.liveBackBufferLength : r.backBufferLength;
    if (F(o) && o > 0) {
      const l = Math.max(o, a), h = Math.floor(i / a) * a - l;
      this.flushBackBuffer(i, a, h);
    }
    if (F(r.frontBufferFlushThreshold) && r.frontBufferFlushThreshold > 0) {
      const l = Math.max(r.maxBufferLength, r.frontBufferFlushThreshold), h = Math.max(l, a), d = Math.floor(i / a) * a + h;
      this.flushFrontBuffer(i, a, d);
    }
  }
  flushBackBuffer(t, e, s) {
    const {
      details: r,
      sourceBuffer: i
    } = this;
    this.getSourceBufferTypes().forEach((a) => {
      const o = i[a];
      if (o) {
        const l = Q.getBuffered(o);
        if (l.length > 0 && s > l.start(0)) {
          if (this.hls.trigger(p.BACK_BUFFER_REACHED, {
            bufferEnd: s
          }), r != null && r.live)
            this.hls.trigger(p.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: s
            });
          else if (o.ended && l.end(l.length - 1) - t < e * 2) {
            this.log(`Cannot flush ${a} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(p.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: s,
            type: a
          });
        }
      }
    });
  }
  flushFrontBuffer(t, e, s) {
    const {
      sourceBuffer: r
    } = this;
    this.getSourceBufferTypes().forEach((i) => {
      const a = r[i];
      if (a) {
        const o = Q.getBuffered(a), l = o.length;
        if (l < 2)
          return;
        const h = o.start(l - 1), d = o.end(l - 1);
        if (s > h || t >= h && t <= d)
          return;
        if (a.ended && t - d < 2 * e) {
          this.log(`Cannot flush ${i} front buffer while SourceBuffer is in ended state`);
          return;
        }
        this.hls.trigger(p.BUFFER_FLUSHING, {
          startOffset: h,
          endOffset: 1 / 0,
          type: i
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  updateMediaElementDuration() {
    if (!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")
      return;
    const {
      details: t,
      hls: e,
      media: s,
      mediaSource: r
    } = this, i = t.fragments[0].start + t.totalduration, a = s.duration, o = F(r.duration) ? r.duration : 0;
    t.live && e.config.liveDurationInfinity ? (r.duration = 1 / 0, this.updateSeekableRange(t)) : (i > o && i > a || !F(a)) && (this.log(`Updating Media Source duration to ${i.toFixed(3)}`), r.duration = i);
  }
  updateSeekableRange(t) {
    const e = this.mediaSource, s = t.fragments;
    if (s.length && t.live && e != null && e.setLiveSeekableRange) {
      const r = Math.max(0, s[0].start), i = Math.max(r, r + t.totalduration);
      this.log(`Media Source duration is set to ${e.duration}. Setting seekable range to ${r}-${i}.`), e.setLiveSeekableRange(r, i);
    }
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsExpected: t,
      operationQueue: e,
      pendingTracks: s
    } = this, r = Object.keys(s).length;
    if (r && (!t || r === 2 || "audiovideo" in s)) {
      this.createSourceBuffers(s), this.pendingTracks = {};
      const i = this.getSourceBufferTypes();
      if (i.length)
        this.hls.trigger(p.BUFFER_CREATED, {
          tracks: this.tracks
        }), i.forEach((a) => {
          e.executeNext(a);
        });
      else {
        const a = new Error("could not create source buffer for media codec(s)");
        this.hls.trigger(p.ERROR, {
          type: $.MEDIA_ERROR,
          details: D.BUFFER_INCOMPATIBLE_CODECS_ERROR,
          fatal: !0,
          error: a,
          reason: a.message
        });
      }
    }
  }
  createSourceBuffers(t) {
    const {
      sourceBuffer: e,
      mediaSource: s
    } = this;
    if (!s)
      throw Error("createSourceBuffers called when mediaSource was null");
    for (const i in t)
      if (!e[i]) {
        var r;
        const a = t[i];
        if (!a)
          throw Error(`source buffer exists for track ${i}, however track does not`);
        let o = ((r = a.levelCodec) == null ? void 0 : r.indexOf(",")) === -1 ? a.levelCodec : a.codec;
        o && i.slice(0, 5) === "audio" && (o = De(o, this.appendSource));
        const l = `${a.container};codecs=${o}`;
        this.log(`creating sourceBuffer(${l})`);
        try {
          const h = e[i] = s.addSourceBuffer(l), d = i;
          this.addBufferListener(d, "updatestart", this._onSBUpdateStart), this.addBufferListener(d, "updateend", this._onSBUpdateEnd), this.addBufferListener(d, "error", this._onSBUpdateError), this.appendSource && this.addBufferListener(d, "bufferedchange", (c, u) => {
            const g = u.removedRanges;
            g != null && g.length && this.hls.trigger(p.BUFFER_FLUSHED, {
              type: i
            });
          }), this.tracks[i] = {
            buffer: h,
            codec: o,
            container: a.container,
            levelCodec: a.levelCodec,
            metadata: a.metadata,
            id: a.id
          };
        } catch (h) {
          this.error(`error while trying to add sourceBuffer: ${h.message}`), this.hls.trigger(p.ERROR, {
            type: $.MEDIA_ERROR,
            details: D.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: h,
            sourceBufferName: i,
            mimeType: l
          });
        }
      }
  }
  get mediaSrc() {
    var t, e;
    const s = ((t = this.media) == null || (e = t.querySelector) == null ? void 0 : e.call(t, "source")) || this.media;
    return s == null ? void 0 : s.src;
  }
  _onSBUpdateStart(t) {
    const {
      operationQueue: e
    } = this;
    e.current(t).onStart();
  }
  _onSBUpdateEnd(t) {
    var e;
    if (((e = this.mediaSource) == null ? void 0 : e.readyState) === "closed") {
      this.resetBuffer(t);
      return;
    }
    const {
      operationQueue: s
    } = this;
    s.current(t).onComplete(), s.shiftAndExecuteNext(t);
  }
  _onSBUpdateError(t, e) {
    var s;
    const r = new Error(`${t} SourceBuffer error. MediaSource readyState: ${(s = this.mediaSource) == null ? void 0 : s.readyState}`);
    this.error(`${r}`, e), this.hls.trigger(p.ERROR, {
      type: $.MEDIA_ERROR,
      details: D.BUFFER_APPENDING_ERROR,
      sourceBufferName: t,
      error: r,
      fatal: !1
    });
    const i = this.operationQueue.current(t);
    i && i.onError(r);
  }
  // This method must result in an updateend event; if remove is not called, _onSBUpdateEnd must be called manually
  removeExecutor(t, e, s) {
    const {
      media: r,
      mediaSource: i,
      operationQueue: a,
      sourceBuffer: o
    } = this, l = o[t];
    if (!r || !i || !l) {
      this.warn(`Attempting to remove from the ${t} SourceBuffer, but it does not exist`), a.shiftAndExecuteNext(t);
      return;
    }
    const h = F(r.duration) ? r.duration : 1 / 0, d = F(i.duration) ? i.duration : 1 / 0, c = Math.max(0, e), u = Math.min(s, h, d);
    u > c && (!l.ending || l.ended) ? (l.ended = !1, this.log(`Removing [${c},${u}] from the ${t} SourceBuffer`), l.remove(c, u)) : a.shiftAndExecuteNext(t);
  }
  // This method must result in an updateend event; if append is not called, _onSBUpdateEnd must be called manually
  appendExecutor(t, e) {
    const s = this.sourceBuffer[e];
    if (!s) {
      if (!this.pendingTracks[e])
        throw new Error(`Attempting to append to the ${e} SourceBuffer, but it does not exist`);
      return;
    }
    s.ended = !1, s.appendBuffer(t);
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(t, e = this.getSourceBufferTypes()) {
    if (!e.length) {
      this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(t);
      return;
    }
    const {
      operationQueue: s
    } = this, r = e.map((i) => s.appendBlocker(i));
    Promise.all(r).then(() => {
      t(), e.forEach((i) => {
        const a = this.sourceBuffer[i];
        a != null && a.updating || s.shiftAndExecuteNext(i);
      });
    });
  }
  getSourceBufferTypes() {
    return Object.keys(this.sourceBuffer);
  }
  addBufferListener(t, e, s) {
    const r = this.sourceBuffer[t];
    if (!r)
      return;
    const i = s.bind(this, t);
    this.listeners[t].push({
      event: e,
      listener: i
    }), r.addEventListener(e, i);
  }
  removeBufferListeners(t) {
    const e = this.sourceBuffer[t];
    e && this.listeners[t].forEach((s) => {
      e.removeEventListener(s.event, s.listener);
    });
  }
}
function Rr(n) {
  const t = n.querySelectorAll("source");
  [].slice.call(t).forEach((e) => {
    n.removeChild(e);
  });
}
function Oo(n, t) {
  const e = self.document.createElement("source");
  e.type = "video/mp4", e.src = t, n.appendChild(e);
}
const Mo = {
  42: 225,
  // lowercase a, acute accent
  92: 233,
  // lowercase e, acute accent
  94: 237,
  // lowercase i, acute accent
  95: 243,
  // lowercase o, acute accent
  96: 250,
  // lowercase u, acute accent
  123: 231,
  // lowercase c with cedilla
  124: 247,
  // division symbol
  125: 209,
  // uppercase N tilde
  126: 241,
  // lowercase n tilde
  127: 9608,
  // Full block
  // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
  // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
  128: 174,
  // Registered symbol (R)
  129: 176,
  // degree sign
  130: 189,
  // 1/2 symbol
  131: 191,
  // Inverted (open) question mark
  132: 8482,
  // Trademark symbol (TM)
  133: 162,
  // Cents symbol
  134: 163,
  // Pounds sterling
  135: 9834,
  // Music 8'th note
  136: 224,
  // lowercase a, grave accent
  137: 32,
  // transparent space (regular)
  138: 232,
  // lowercase e, grave accent
  139: 226,
  // lowercase a, circumflex accent
  140: 234,
  // lowercase e, circumflex accent
  141: 238,
  // lowercase i, circumflex accent
  142: 244,
  // lowercase o, circumflex accent
  143: 251,
  // lowercase u, circumflex accent
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
  144: 193,
  // capital letter A with acute
  145: 201,
  // capital letter E with acute
  146: 211,
  // capital letter O with acute
  147: 218,
  // capital letter U with acute
  148: 220,
  // capital letter U with diaresis
  149: 252,
  // lowercase letter U with diaeresis
  150: 8216,
  // opening single quote
  151: 161,
  // inverted exclamation mark
  152: 42,
  // asterisk
  153: 8217,
  // closing single quote
  154: 9473,
  // box drawings heavy horizontal
  155: 169,
  // copyright sign
  156: 8480,
  // Service mark
  157: 8226,
  // (round) bullet
  158: 8220,
  // Left double quotation mark
  159: 8221,
  // Right double quotation mark
  160: 192,
  // uppercase A, grave accent
  161: 194,
  // uppercase A, circumflex
  162: 199,
  // uppercase C with cedilla
  163: 200,
  // uppercase E, grave accent
  164: 202,
  // uppercase E, circumflex
  165: 203,
  // capital letter E with diaresis
  166: 235,
  // lowercase letter e with diaresis
  167: 206,
  // uppercase I, circumflex
  168: 207,
  // uppercase I, with diaresis
  169: 239,
  // lowercase i, with diaresis
  170: 212,
  // uppercase O, circumflex
  171: 217,
  // uppercase U, grave accent
  172: 249,
  // lowercase u, grave accent
  173: 219,
  // uppercase U, circumflex
  174: 171,
  // left-pointing double angle quotation mark
  175: 187,
  // right-pointing double angle quotation mark
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
  176: 195,
  // Uppercase A, tilde
  177: 227,
  // Lowercase a, tilde
  178: 205,
  // Uppercase I, acute accent
  179: 204,
  // Uppercase I, grave accent
  180: 236,
  // Lowercase i, grave accent
  181: 210,
  // Uppercase O, grave accent
  182: 242,
  // Lowercase o, grave accent
  183: 213,
  // Uppercase O, tilde
  184: 245,
  // Lowercase o, tilde
  185: 123,
  // Open curly brace
  186: 125,
  // Closing curly brace
  187: 92,
  // Backslash
  188: 94,
  // Caret
  189: 95,
  // Underscore
  190: 124,
  // Pipe (vertical line)
  191: 8764,
  // Tilde operator
  192: 196,
  // Uppercase A, umlaut
  193: 228,
  // Lowercase A, umlaut
  194: 214,
  // Uppercase O, umlaut
  195: 246,
  // Lowercase o, umlaut
  196: 223,
  // Esszett (sharp S)
  197: 165,
  // Yen symbol
  198: 164,
  // Generic currency sign
  199: 9475,
  // Box drawings heavy vertical
  200: 197,
  // Uppercase A, ring
  201: 229,
  // Lowercase A, ring
  202: 216,
  // Uppercase O, stroke
  203: 248,
  // Lowercase o, strok
  204: 9487,
  // Box drawings heavy down and right
  205: 9491,
  // Box drawings heavy down and left
  206: 9495,
  // Box drawings heavy up and right
  207: 9499
  // Box drawings heavy up and left
}, ki = (n) => String.fromCharCode(Mo[n] || n), Et = 15, bt = 100, Fo = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, No = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, Uo = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, Bo = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, $o = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class Go {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(t, e) {
    if (this.verboseLevel >= t) {
      const s = typeof e == "function" ? e() : e;
      v.log(`${this.time} [${t}] ${s}`);
    }
  }
}
const xt = function(n) {
  const t = [];
  for (let e = 0; e < n.length; e++)
    t.push(n[e].toString(16));
  return t;
};
class Ci {
  constructor() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  reset() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  setStyles(t) {
    const e = ["foreground", "underline", "italics", "background", "flash"];
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      t.hasOwnProperty(r) && (this[r] = t[r]);
    }
  }
  isDefault() {
    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
  }
  equals(t) {
    return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash;
  }
  copy(t) {
    this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash;
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
  }
}
class Ko {
  constructor() {
    this.uchar = " ", this.penState = new Ci();
  }
  reset() {
    this.uchar = " ", this.penState.reset();
  }
  setChar(t, e) {
    this.uchar = t, this.penState.copy(e);
  }
  setPenState(t) {
    this.penState.copy(t);
  }
  equals(t) {
    return this.uchar === t.uchar && this.penState.equals(t.penState);
  }
  copy(t) {
    this.uchar = t.uchar, this.penState.copy(t.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class Vo {
  constructor(t) {
    this.chars = [], this.pos = 0, this.currPenState = new Ci(), this.cueStartTime = null, this.logger = void 0;
    for (let e = 0; e < bt; e++)
      this.chars.push(new Ko());
    this.logger = t;
  }
  equals(t) {
    for (let e = 0; e < bt; e++)
      if (!this.chars[e].equals(t.chars[e]))
        return !1;
    return !0;
  }
  copy(t) {
    for (let e = 0; e < bt; e++)
      this.chars[e].copy(t.chars[e]);
  }
  isEmpty() {
    let t = !0;
    for (let e = 0; e < bt; e++)
      if (!this.chars[e].isEmpty()) {
        t = !1;
        break;
      }
    return t;
  }
  /**
   *  Set the cursor to a valid column.
   */
  setCursor(t) {
    this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > bt && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = bt);
  }
  /**
   * Move the cursor relative to current position.
   */
  moveCursor(t) {
    const e = this.pos + t;
    if (t > 1)
      for (let s = this.pos + 1; s < e + 1; s++)
        this.chars[s].setPenState(this.currPenState);
    this.setCursor(e);
  }
  /**
   * Backspace, move one step back and clear character.
   */
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(t) {
    t >= 144 && this.backSpace();
    const e = ki(t);
    if (this.pos >= bt) {
      this.logger.log(0, () => "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(t) {
    let e;
    for (e = t; e < bt; e++)
      this.chars[e].reset();
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const t = [];
    let e = !0;
    for (let s = 0; s < bt; s++) {
      const r = this.chars[s].uchar;
      r !== " " && (e = !1), t.push(r);
    }
    return e ? "" : t.join("");
  }
  setPenStyles(t) {
    this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class Qe {
  constructor(t) {
    this.rows = [], this.currRow = Et - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
    for (let e = 0; e < Et; e++)
      this.rows.push(new Vo(t));
    this.logger = t;
  }
  reset() {
    for (let t = 0; t < Et; t++)
      this.rows[t].clear();
    this.currRow = Et - 1;
  }
  equals(t) {
    let e = !0;
    for (let s = 0; s < Et; s++)
      if (!this.rows[s].equals(t.rows[s])) {
        e = !1;
        break;
      }
    return e;
  }
  copy(t) {
    for (let e = 0; e < Et; e++)
      this.rows[e].copy(t.rows[e]);
  }
  isEmpty() {
    let t = !0;
    for (let e = 0; e < Et; e++)
      if (!this.rows[e].isEmpty()) {
        t = !1;
        break;
      }
    return t;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  /**
   * Insert a character (without styling) in the current row.
   */
  insertChar(t) {
    this.rows[this.currRow].insertChar(t);
  }
  setPen(t) {
    this.rows[this.currRow].setPenStyles(t);
  }
  moveCursor(t) {
    this.rows[this.currRow].moveCursor(t);
  }
  setCursor(t) {
    this.logger.log(2, "setCursor: " + t), this.rows[this.currRow].setCursor(t);
  }
  setPAC(t) {
    this.logger.log(2, () => "pacData = " + JSON.stringify(t));
    let e = t.row - 1;
    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
      for (let o = 0; o < Et; o++)
        this.rows[o].clear();
      const i = this.currRow + 1 - this.nrRollUpRows, a = this.lastOutputScreen;
      if (a) {
        const o = a.rows[i].cueStartTime, l = this.logger.time;
        if (o !== null && l !== null && o < l)
          for (let h = 0; h < this.nrRollUpRows; h++)
            this.rows[e - this.nrRollUpRows + h + 1].copy(a.rows[i + h]);
      }
    }
    this.currRow = e;
    const s = this.rows[this.currRow];
    if (t.indent !== null) {
      const i = t.indent, a = Math.max(i - 1, 0);
      s.setCursor(t.indent), t.color = s.chars[a].penState.foreground;
    }
    const r = {
      foreground: t.color,
      underline: t.underline,
      italics: t.italics,
      background: "black",
      flash: !1
    };
    this.setPen(r);
  }
  /**
   * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
   */
  setBkgData(t) {
    this.logger.log(2, () => "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32);
  }
  setRollUpRows(t) {
    this.nrRollUpRows = t;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const t = this.currRow + 1 - this.nrRollUpRows, e = this.rows.splice(t, 1)[0];
    e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(2, "Rolling up");
  }
  /**
   * Get all non-empty rows with as unicode text.
   */
  getDisplayText(t) {
    t = t || !1;
    const e = [];
    let s = "", r = -1;
    for (let i = 0; i < Et; i++) {
      const a = this.rows[i].getTextString();
      a && (r = i + 1, t ? e.push("Row " + r + ": '" + a + "'") : e.push(a.trim()));
    }
    return e.length > 0 && (t ? s = "[" + e.join(" | ") + "]" : s = e.join(`
`)), s;
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class Dr {
  constructor(t, e, s) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new Qe(s), this.nonDisplayedMemory = new Qe(s), this.lastOutputScreen = new Qe(s), this.currRollUpRow = this.displayedMemory.rows[Et - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[Et - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(t) {
    this.outputFilter = t;
  }
  setPAC(t) {
    this.writeScreen.setPAC(t);
  }
  setBkgData(t) {
    this.writeScreen.setBkgData(t);
  }
  setMode(t) {
    t !== this.mode && (this.mode = t, this.logger.log(2, () => "MODE=" + t), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t);
  }
  insertChars(t) {
    for (let s = 0; s < t.length; s++)
      this.writeScreen.insertChar(t[s]);
    const e = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => e + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {
  }
  ccAON() {
  }
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
  }
  ccRU(t) {
    this.logger.log(2, "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: !0
    });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
      const t = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    }
    this.outputDataUpdate(!0);
  }
  ccTO(t) {
    this.logger.log(2, "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t);
  }
  ccMIDROW(t) {
    const e = {
      flash: !1
    };
    if (e.underline = t % 2 === 1, e.italics = t >= 46, e.italics)
      e.foreground = "white";
    else {
      const s = Math.floor(t / 2) - 16, r = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      e.foreground = r[s];
    }
    this.logger.log(2, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e);
  }
  outputDataUpdate(t = !1) {
    const e = this.logger.time;
    e !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = e : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(t) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t));
  }
}
class Ir {
  constructor(t, e, s) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = Yo(), this.logger = void 0;
    const r = this.logger = new Go();
    this.channels = [null, new Dr(t, e, r), new Dr(t + 1, s, r)];
  }
  getHandler(t) {
    return this.channels[t].getHandler();
  }
  setHandler(t, e) {
    this.channels[t].setHandler(e);
  }
  /**
   * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
   */
  addData(t, e) {
    this.logger.time = t;
    for (let s = 0; s < e.length; s += 2) {
      const r = e[s] & 127, i = e[s + 1] & 127;
      let a = !1, o = null;
      if (r === 0 && i === 0)
        continue;
      this.logger.log(3, () => "[" + xt([e[s], e[s + 1]]) + "] -> (" + xt([r, i]) + ")");
      const l = this.cmdHistory;
      if (r >= 16 && r <= 31) {
        if (Ho(r, i, l)) {
          he(null, null, l), this.logger.log(3, () => "Repeated command (" + xt([r, i]) + ") is dropped");
          continue;
        }
        he(r, i, this.cmdHistory), a = this.parseCmd(r, i), a || (a = this.parseMidrow(r, i)), a || (a = this.parsePAC(r, i)), a || (a = this.parseBackgroundAttributes(r, i));
      } else
        he(null, null, l);
      if (!a && (o = this.parseChars(r, i), o)) {
        const h = this.currentChannel;
        h && h > 0 ? this.channels[h].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
      }
      !a && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + xt([r, i]) + " orig: " + xt([e[s], e[s + 1]]));
    }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(t, e) {
    const s = (t === 20 || t === 28 || t === 21 || t === 29) && e >= 32 && e <= 47, r = (t === 23 || t === 31) && e >= 33 && e <= 35;
    if (!(s || r))
      return !1;
    const i = t === 20 || t === 21 || t === 23 ? 1 : 2, a = this.channels[i];
    return t === 20 || t === 21 || t === 28 || t === 29 ? e === 32 ? a.ccRCL() : e === 33 ? a.ccBS() : e === 34 ? a.ccAOF() : e === 35 ? a.ccAON() : e === 36 ? a.ccDER() : e === 37 ? a.ccRU(2) : e === 38 ? a.ccRU(3) : e === 39 ? a.ccRU(4) : e === 40 ? a.ccFON() : e === 41 ? a.ccRDC() : e === 42 ? a.ccTR() : e === 43 ? a.ccRTD() : e === 44 ? a.ccEDM() : e === 45 ? a.ccCR() : e === 46 ? a.ccENM() : e === 47 && a.ccEOC() : a.ccTO(e - 32), this.currentChannel = i, !0;
  }
  /**
   * Parse midrow styling command
   */
  parseMidrow(t, e) {
    let s = 0;
    if ((t === 17 || t === 25) && e >= 32 && e <= 47) {
      if (t === 17 ? s = 1 : s = 2, s !== this.currentChannel)
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const r = this.channels[s];
      return r ? (r.ccMIDROW(e), this.logger.log(3, () => "MIDROW (" + xt([t, e]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(t, e) {
    let s;
    const r = (t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127, i = (t === 16 || t === 24) && e >= 64 && e <= 95;
    if (!(r || i))
      return !1;
    const a = t <= 23 ? 1 : 2;
    e >= 64 && e <= 95 ? s = a === 1 ? Fo[t] : Uo[t] : s = a === 1 ? No[t] : Bo[t];
    const o = this.channels[a];
    return o ? (o.setPAC(this.interpretPAC(s, e)), this.currentChannel = a, !0) : !1;
  }
  /**
   * Interpret the second byte of the pac, and return the information.
   * @returns pacData with style parameters
   */
  interpretPAC(t, e) {
    let s;
    const r = {
      color: null,
      italics: !1,
      indent: null,
      underline: !1,
      row: t
    };
    return e > 95 ? s = e - 96 : s = e - 64, r.underline = (s & 1) === 1, s <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (r.italics = !0, r.color = "white") : r.indent = Math.floor((s - 16) / 2) * 4, r;
  }
  /**
   * Parse characters.
   * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
   */
  parseChars(t, e) {
    let s, r = null, i = null;
    if (t >= 25 ? (s = 2, i = t - 8) : (s = 1, i = t), i >= 17 && i <= 19) {
      let a;
      i === 17 ? a = e + 80 : i === 18 ? a = e + 112 : a = e + 144, this.logger.log(2, () => "Special char '" + ki(a) + "' in channel " + s), r = [a];
    } else t >= 32 && t <= 127 && (r = e === 0 ? [t] : [t, e]);
    return r && this.logger.log(3, () => "Char codes =  " + xt(r).join(",")), r;
  }
  /**
   * Parse extended background attributes as well as new foreground color black.
   * @returns True if background attributes are found
   */
  parseBackgroundAttributes(t, e) {
    const s = (t === 16 || t === 24) && e >= 32 && e <= 47, r = (t === 23 || t === 31) && e >= 45 && e <= 47;
    if (!(s || r))
      return !1;
    let i;
    const a = {};
    t === 16 || t === 24 ? (i = Math.floor((e - 32) / 2), a.background = $o[i], e % 2 === 1 && (a.background = a.background + "_semi")) : e === 45 ? a.background = "transparent" : (a.foreground = "black", e === 47 && (a.underline = !0));
    const o = t <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(a), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let t = 0; t < Object.keys(this.channels).length; t++) {
      const e = this.channels[t];
      e && e.reset();
    }
    he(null, null, this.cmdHistory);
  }
  /**
   * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
   */
  cueSplitAtTime(t) {
    for (let e = 0; e < this.channels.length; e++) {
      const s = this.channels[e];
      s && s.cueSplitAtTime(t);
    }
  }
}
function he(n, t, e) {
  e.a = n, e.b = t;
}
function Ho(n, t, e) {
  return e.a === n && e.b === t;
}
function Yo() {
  return {
    a: null,
    b: null
  };
}
class de {
  constructor(t, e) {
    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e;
  }
  dispatchCue() {
    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
  }
  newCue(t, e, s) {
    (this.startTime === null || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    this.cueRanges = [], this.startTime = null;
  }
}
var Os = function() {
  if (Wt != null && Wt.VTTCue)
    return self.VTTCue;
  const n = ["", "lr", "rl"], t = ["start", "middle", "end", "left", "right"];
  function e(o, l) {
    if (typeof l != "string" || !Array.isArray(o))
      return !1;
    const h = l.toLowerCase();
    return ~o.indexOf(h) ? h : !1;
  }
  function s(o) {
    return e(n, o);
  }
  function r(o) {
    return e(t, o);
  }
  function i(o, ...l) {
    let h = 1;
    for (; h < arguments.length; h++) {
      const d = arguments[h];
      for (const c in d)
        o[c] = d[c];
    }
    return o;
  }
  function a(o, l, h) {
    const d = this, c = {
      enumerable: !0
    };
    d.hasBeenReset = !1;
    let u = "", g = !1, f = o, m = l, E = h, y = null, T = "", A = !0, R = "auto", S = "start", I = 50, b = "middle", x = 50, O = "middle";
    Object.defineProperty(d, "id", i({}, c, {
      get: function() {
        return u;
      },
      set: function(C) {
        u = "" + C;
      }
    })), Object.defineProperty(d, "pauseOnExit", i({}, c, {
      get: function() {
        return g;
      },
      set: function(C) {
        g = !!C;
      }
    })), Object.defineProperty(d, "startTime", i({}, c, {
      get: function() {
        return f;
      },
      set: function(C) {
        if (typeof C != "number")
          throw new TypeError("Start time must be set to a number.");
        f = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "endTime", i({}, c, {
      get: function() {
        return m;
      },
      set: function(C) {
        if (typeof C != "number")
          throw new TypeError("End time must be set to a number.");
        m = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "text", i({}, c, {
      get: function() {
        return E;
      },
      set: function(C) {
        E = "" + C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "region", i({}, c, {
      get: function() {
        return y;
      },
      set: function(C) {
        y = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "vertical", i({}, c, {
      get: function() {
        return T;
      },
      set: function(C) {
        const w = s(C);
        if (w === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        T = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "snapToLines", i({}, c, {
      get: function() {
        return A;
      },
      set: function(C) {
        A = !!C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "line", i({}, c, {
      get: function() {
        return R;
      },
      set: function(C) {
        if (typeof C != "number" && C !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        R = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "lineAlign", i({}, c, {
      get: function() {
        return S;
      },
      set: function(C) {
        const w = r(C);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        S = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "position", i({}, c, {
      get: function() {
        return I;
      },
      set: function(C) {
        if (C < 0 || C > 100)
          throw new Error("Position must be between 0 and 100.");
        I = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "positionAlign", i({}, c, {
      get: function() {
        return b;
      },
      set: function(C) {
        const w = r(C);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        b = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "size", i({}, c, {
      get: function() {
        return x;
      },
      set: function(C) {
        if (C < 0 || C > 100)
          throw new Error("Size must be between 0 and 100.");
        x = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "align", i({}, c, {
      get: function() {
        return O;
      },
      set: function(C) {
        const w = r(C);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        O = w, this.hasBeenReset = !0;
      }
    })), d.displayState = void 0;
  }
  return a.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, a;
}();
class Wo {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decode(t, e) {
    if (!t)
      return "";
    if (typeof t != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(t));
  }
}
function wi(n) {
  function t(s, r, i, a) {
    return (s | 0) * 3600 + (r | 0) * 60 + (i | 0) + parseFloat(a || 0);
  }
  const e = n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return e ? parseFloat(e[2]) > 59 ? t(e[2], e[3], 0, e[4]) : t(e[1], e[2], e[3], e[4]) : null;
}
class jo {
  constructor() {
    this.values = /* @__PURE__ */ Object.create(null);
  }
  // Only accept the first assignment to any key.
  set(t, e) {
    !this.get(t) && e !== "" && (this.values[t] = e);
  }
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get(t, e, s) {
    return s ? this.has(t) ? this.values[t] : e[s] : this.has(t) ? this.values[t] : e;
  }
  // Check whether we have a value for a key.
  has(t) {
    return t in this.values;
  }
  // Accept a setting if its one of the given alternatives.
  alt(t, e, s) {
    for (let r = 0; r < s.length; ++r)
      if (e === s[r]) {
        this.set(t, e);
        break;
      }
  }
  // Accept a setting if its a valid (signed) integer.
  integer(t, e) {
    /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10));
  }
  // Accept a setting if its a valid percentage.
  percent(t, e) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
      const s = parseFloat(e);
      if (s >= 0 && s <= 100)
        return this.set(t, s), !0;
    }
    return !1;
  }
}
function Pi(n, t, e, s) {
  const r = s ? n.split(s) : [n];
  for (const i in r) {
    if (typeof r[i] != "string")
      continue;
    const a = r[i].split(e);
    if (a.length !== 2)
      continue;
    const o = a[0], l = a[1];
    t(o, l);
  }
}
const ms = new Os(0, 0, ""), ce = ms.align === "middle" ? "middle" : "center";
function qo(n, t, e) {
  const s = n;
  function r() {
    const o = wi(n);
    if (o === null)
      throw new Error("Malformed timestamp: " + s);
    return n = n.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function i(o, l) {
    const h = new jo();
    Pi(o, function(u, g) {
      let f;
      switch (u) {
        case "region":
          for (let m = e.length - 1; m >= 0; m--)
            if (e[m].id === g) {
              h.set(u, e[m].region);
              break;
            }
          break;
        case "vertical":
          h.alt(u, g, ["rl", "lr"]);
          break;
        case "line":
          f = g.split(","), h.integer(u, f[0]), h.percent(u, f[0]) && h.set("snapToLines", !1), h.alt(u, f[0], ["auto"]), f.length === 2 && h.alt("lineAlign", f[1], ["start", ce, "end"]);
          break;
        case "position":
          f = g.split(","), h.percent(u, f[0]), f.length === 2 && h.alt("positionAlign", f[1], ["start", ce, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          h.percent(u, g);
          break;
        case "align":
          h.alt(u, g, ["start", ce, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), l.region = h.get("region", null), l.vertical = h.get("vertical", "");
    let d = h.get("line", "auto");
    d === "auto" && ms.line === -1 && (d = -1), l.line = d, l.lineAlign = h.get("lineAlign", "start"), l.snapToLines = h.get("snapToLines", !0), l.size = h.get("size", 100), l.align = h.get("align", ce);
    let c = h.get("position", "auto");
    c === "auto" && ms.position === 50 && (c = l.align === "start" || l.align === "left" ? 0 : l.align === "end" || l.align === "right" ? 100 : 50), l.position = c;
  }
  function a() {
    n = n.replace(/^\s+/, "");
  }
  if (a(), t.startTime = r(), a(), n.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
  n = n.slice(3), a(), t.endTime = r(), a(), i(n, t);
}
function xi(n) {
  return n.replace(/<br(?: \/)?>/gi, `
`);
}
class Xo {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new Wo(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(t) {
    const e = this;
    t && (e.buffer += e.decoder.decode(t, {
      stream: !0
    }));
    function s() {
      let i = e.buffer, a = 0;
      for (i = xi(i); a < i.length && i[a] !== "\r" && i[a] !== `
`; )
        ++a;
      const o = i.slice(0, a);
      return i[a] === "\r" && ++a, i[a] === `
` && ++a, e.buffer = i.slice(a), o;
    }
    function r(i) {
      Pi(i, function(a, o) {
      }, /:/);
    }
    try {
      let i = "";
      if (e.state === "INITIAL") {
        if (!/\r\n|\n/.test(e.buffer))
          return this;
        i = s();
        const o = i.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(o != null && o[0]))
          throw new Error("Malformed WebVTT signature.");
        e.state = "HEADER";
      }
      let a = !1;
      for (; e.buffer; ) {
        if (!/\r\n|\n/.test(e.buffer))
          return this;
        switch (a ? a = !1 : i = s(), e.state) {
          case "HEADER":
            /:/.test(i) ? r(i) : i || (e.state = "ID");
            continue;
          case "NOTE":
            i || (e.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(i)) {
              e.state = "NOTE";
              break;
            }
            if (!i)
              continue;
            if (e.cue = new Os(0, 0, ""), e.state = "CUE", i.indexOf("-->") === -1) {
              e.cue.id = i;
              continue;
            }
          // Process line as start of a cue.
          /* falls through */
          case "CUE":
            if (!e.cue) {
              e.state = "BADCUE";
              continue;
            }
            try {
              qo(i, e.cue, e.regionList);
            } catch {
              e.cue = null, e.state = "BADCUE";
              continue;
            }
            e.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const o = i.indexOf("-->") !== -1;
              if (!i || o && (a = !0)) {
                e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                continue;
              }
              if (e.cue === null)
                continue;
              e.cue.text && (e.cue.text += `
`), e.cue.text += i;
            }
            continue;
          case "BADCUE":
            i || (e.state = "ID");
        }
      }
    } catch {
      e.state === "CUETEXT" && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = e.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }
  flush() {
    const t = this;
    try {
      if ((t.cue || t.state === "HEADER") && (t.buffer += `

`, t.parse()), t.state === "INITIAL" || t.state === "BADWEBVTT")
        throw new Error("Malformed WebVTT signature.");
    } catch (e) {
      t.onparsingerror && t.onparsingerror(e);
    }
    return t.onflush && t.onflush(), this;
  }
}
const zo = /\r\n|\n\r|\n|\r/g, Je = function(n, t, e = 0) {
  return n.slice(e, e + t.length) === t;
}, Qo = function(n) {
  let t = parseInt(n.slice(-3));
  const e = parseInt(n.slice(-6, -4)), s = parseInt(n.slice(-9, -7)), r = n.length > 9 ? parseInt(n.substring(0, n.indexOf(":"))) : 0;
  if (!F(t) || !F(e) || !F(s) || !F(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${n}`);
  return t += 1e3 * e, t += 60 * 1e3 * s, t += 60 * 60 * 1e3 * r, t;
}, Ze = function(n) {
  let t = 5381, e = n.length;
  for (; e; )
    t = t * 33 ^ n.charCodeAt(--e);
  return (t >>> 0).toString();
};
function Ms(n, t, e) {
  return Ze(n.toString()) + Ze(t.toString()) + Ze(e);
}
const Jo = function(n, t, e) {
  let s = n[t], r = n[s.prevCC];
  if (!r || !r.new && s.new) {
    n.ccOffset = n.presentationOffset = s.start, s.new = !1;
    return;
  }
  for (; (i = r) != null && i.new; ) {
    var i;
    n.ccOffset += s.start - r.start, s.new = !1, s = r, r = n[s.prevCC];
  }
  n.presentationOffset = e;
};
function Zo(n, t, e, s, r, i, a) {
  const o = new Xo(), l = Rt(new Uint8Array(n)).trim().replace(zo, `
`).split(`
`), h = [], d = t ? po(t.baseTime, t.timescale) : 0;
  let c = "00:00.000", u = 0, g = 0, f, m = !0;
  o.oncue = function(E) {
    const y = e[s];
    let T = e.ccOffset;
    const A = (u - d) / 9e4;
    if (y != null && y.new && (g !== void 0 ? T = e.ccOffset = y.start : Jo(e, s, A)), A) {
      if (!t) {
        f = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      T = A - e.presentationOffset;
    }
    const R = E.endTime - E.startTime, S = ft((E.startTime + T - g) * 9e4, r * 9e4) / 9e4;
    E.startTime = Math.max(S, 0), E.endTime = Math.max(S + R, 0);
    const I = E.text.trim();
    E.text = decodeURIComponent(encodeURIComponent(I)), E.id || (E.id = Ms(E.startTime, E.endTime, I)), E.endTime > 0 && h.push(E);
  }, o.onparsingerror = function(E) {
    f = E;
  }, o.onflush = function() {
    if (f) {
      a(f);
      return;
    }
    i(h);
  }, l.forEach((E) => {
    if (m)
      if (Je(E, "X-TIMESTAMP-MAP=")) {
        m = !1, E.slice(16).split(",").forEach((y) => {
          Je(y, "LOCAL:") ? c = y.slice(6) : Je(y, "MPEGTS:") && (u = parseInt(y.slice(7)));
        });
        try {
          g = Qo(c) / 1e3;
        } catch (y) {
          f = y;
        }
        return;
      } else E === "" && (m = !1);
    o.parse(E + `
`);
  }), o.flush();
}
const ts = "stpp.ttml.im1t", _i = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, Oi = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, tl = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function br(n, t, e, s) {
  const r = V(new Uint8Array(n), ["mdat"]);
  if (r.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const i = r.map((o) => Rt(o)), a = mo(t.baseTime, 1, t.timescale);
  try {
    i.forEach((o) => e(el(o, a)));
  } catch (o) {
    s(o);
  }
}
function el(n, t) {
  const e = new DOMParser().parseFromString(n, "text/xml").getElementsByTagName("tt")[0];
  if (!e)
    throw new Error("Invalid ttml");
  const s = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, r = Object.keys(s).reduce((h, d) => (h[d] = e.getAttribute(`ttp:${d}`) || s[d], h), {}), i = e.getAttribute("xml:space") !== "preserve", a = kr(es(e, "styling", "style")), o = kr(es(e, "layout", "region")), l = es(e, "body", "[begin]");
  return [].map.call(l, (h) => {
    const d = Mi(h, i);
    if (!d || !h.hasAttribute("begin"))
      return null;
    const c = rs(h.getAttribute("begin"), r), u = rs(h.getAttribute("dur"), r);
    let g = rs(h.getAttribute("end"), r);
    if (c === null)
      throw Cr(h);
    if (g === null) {
      if (u === null)
        throw Cr(h);
      g = c + u;
    }
    const f = new Os(c - t, g - t, d);
    f.id = Ms(f.startTime, f.endTime, f.text);
    const m = o[h.getAttribute("region")], E = a[h.getAttribute("style")], y = sl(m, E, a), {
      textAlign: T
    } = y;
    if (T) {
      const A = tl[T];
      A && (f.lineAlign = A), f.align = T;
    }
    return tt(f, y), f;
  }).filter((h) => h !== null);
}
function es(n, t, e) {
  const s = n.getElementsByTagName(t)[0];
  return s ? [].slice.call(s.querySelectorAll(e)) : [];
}
function kr(n) {
  return n.reduce((t, e) => {
    const s = e.getAttribute("xml:id");
    return s && (t[s] = e), t;
  }, {});
}
function Mi(n, t) {
  return [].slice.call(n.childNodes).reduce((e, s, r) => {
    var i;
    return s.nodeName === "br" && r ? e + `
` : (i = s.childNodes) != null && i.length ? Mi(s, t) : t ? e + s.textContent.trim().replace(/\s+/g, " ") : e + s.textContent;
  }, "");
}
function sl(n, t, e) {
  const s = "http://www.w3.org/ns/ttml#styling";
  let r = null;
  const i = [
    "displayAlign",
    "textAlign",
    "color",
    "backgroundColor",
    "fontSize",
    "fontFamily"
    // 'fontWeight',
    // 'lineHeight',
    // 'wrapOption',
    // 'fontStyle',
    // 'direction',
    // 'writingMode'
  ], a = n != null && n.hasAttribute("style") ? n.getAttribute("style") : null;
  return a && e.hasOwnProperty(a) && (r = e[a]), i.reduce((o, l) => {
    const h = ss(t, s, l) || ss(n, s, l) || ss(r, s, l);
    return h && (o[l] = h), o;
  }, {});
}
function ss(n, t, e) {
  return n && n.hasAttributeNS(t, e) ? n.getAttributeNS(t, e) : null;
}
function Cr(n) {
  return new Error(`Could not parse ttml timestamp ${n}`);
}
function rs(n, t) {
  if (!n)
    return null;
  let e = wi(n);
  return e === null && (_i.test(n) ? e = rl(n, t) : Oi.test(n) && (e = il(n, t))), e;
}
function rl(n, t) {
  const e = _i.exec(n), s = (e[4] | 0) + (e[5] | 0) / t.subFrameRate;
  return (e[1] | 0) * 3600 + (e[2] | 0) * 60 + (e[3] | 0) + s / t.frameRate;
}
function il(n, t) {
  const e = Oi.exec(n), s = Number(e[1]);
  switch (e[2]) {
    case "h":
      return s * 3600;
    case "m":
      return s * 60;
    case "ms":
      return s * 1e3;
    case "f":
      return s / t.frameRate;
    case "t":
      return s / t.tickRate;
  }
  return s;
}
class nl {
  constructor(t) {
    this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Pr(), this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
      textTrack1: {
        label: this.config.captionsTextTrack1Label,
        languageCode: this.config.captionsTextTrack1LanguageCode
      },
      textTrack2: {
        label: this.config.captionsTextTrack2Label,
        languageCode: this.config.captionsTextTrack2LanguageCode
      },
      textTrack3: {
        label: this.config.captionsTextTrack3Label,
        languageCode: this.config.captionsTextTrack3LanguageCode
      },
      textTrack4: {
        label: this.config.captionsTextTrack4Label,
        languageCode: this.config.captionsTextTrack4LanguageCode
      }
    }, t.on(p.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(p.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(p.FRAG_LOADING, this.onFragLoading, this), t.on(p.FRAG_LOADED, this.onFragLoaded, this), t.on(p.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(p.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(p.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(p.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: t
    } = this;
    t.off(p.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(p.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(p.FRAG_LOADING, this.onFragLoading, this), t.off(p.FRAG_LOADED, this.onFragLoaded, this), t.off(p.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(p.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(p.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(p.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
  }
  initCea608Parsers() {
    if (this.config.enableCEA708Captions && (!this.cea608Parser1 || !this.cea608Parser2)) {
      const t = new de(this, "textTrack1"), e = new de(this, "textTrack2"), s = new de(this, "textTrack3"), r = new de(this, "textTrack4");
      this.cea608Parser1 = new Ir(1, t, e), this.cea608Parser2 = new Ir(3, s, r);
    }
  }
  addCues(t, e, s, r, i) {
    let a = !1;
    for (let o = i.length; o--; ) {
      const l = i[o], h = al(l[0], l[1], e, s);
      if (h >= 0 && (l[0] = Math.min(l[0], e), l[1] = Math.max(l[1], s), a = !0, h / (s - e) > 0.5))
        return;
    }
    if (a || i.push([e, s]), this.config.renderTextTracksNatively) {
      const o = this.captionsTracks[t];
      this.Cues.newCue(o, e, s, r);
    } else {
      const o = this.Cues.newCue(null, e, s, r);
      this.hls.trigger(p.CUES_PARSED, {
        type: "captions",
        cues: o,
        track: t
      });
    }
  }
  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.
  onInitPtsFound(t, {
    frag: e,
    id: s,
    initPTS: r,
    timescale: i
  }) {
    const {
      unparsedVttFrags: a
    } = this;
    s === "main" && (this.initPTS[e.cc] = {
      baseTime: r,
      timescale: i
    }), a.length && (this.unparsedVttFrags = [], a.forEach((o) => {
      this.onFragLoaded(p.FRAG_LOADED, o);
    }));
  }
  getExistingTrack(t, e) {
    const {
      media: s
    } = this;
    if (s)
      for (let r = 0; r < s.textTracks.length; r++) {
        const i = s.textTracks[r];
        if (wr(i, {
          name: t,
          lang: e
        }))
          return i;
      }
    return null;
  }
  createCaptionsTrack(t) {
    this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t);
  }
  createNativeTrack(t) {
    if (this.captionsTracks[t])
      return;
    const {
      captionsProperties: e,
      captionsTracks: s,
      media: r
    } = this, {
      label: i,
      languageCode: a
    } = e[t], o = this.getExistingTrack(i, a);
    if (o)
      s[t] = o, Vt(s[t]), ei(s[t], r);
    else {
      const l = this.createTextTrack("captions", i, a);
      l && (l[t] = !0, s[t] = l);
    }
  }
  createNonNativeTrack(t) {
    if (this.nonNativeCaptionsTracks[t])
      return;
    const e = this.captionsProperties[t];
    if (!e)
      return;
    const s = e.label, r = {
      _id: t,
      label: s,
      kind: "captions",
      default: e.media ? !!e.media.default : !1,
      closedCaptions: e.media
    };
    this.nonNativeCaptionsTracks[t] = r, this.hls.trigger(p.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks: [r]
    });
  }
  createTextTrack(t, e, s) {
    const r = this.media;
    if (r)
      return r.addTextTrack(t, e, s);
  }
  onMediaAttaching(t, e) {
    this.media = e.media, this._cleanTracks();
  }
  onMediaDetaching() {
    const {
      captionsTracks: t
    } = this;
    Object.keys(t).forEach((e) => {
      Vt(t[e]), delete t[e];
    }), this.nonNativeCaptionsTracks = {};
  }
  onManifestLoading() {
    this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Pr(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const {
      media: t
    } = this;
    if (!t)
      return;
    const e = t.textTracks;
    if (e)
      for (let s = 0; s < e.length; s++)
        Vt(e[s]);
  }
  onSubtitleTracksUpdated(t, e) {
    const s = e.subtitleTracks || [], r = s.some((i) => i.textCodec === ts);
    if (this.config.enableWebVTT || r && this.config.enableIMSC1) {
      if (bi(this.tracks, s)) {
        this.tracks = s;
        return;
      }
      if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
        const i = this.media, a = i ? ge(i.textTracks) : null;
        if (this.tracks.forEach((o, l) => {
          let h;
          if (a) {
            let d = null;
            for (let c = 0; c < a.length; c++)
              if (a[c] && wr(a[c], o)) {
                d = a[c], a[c] = null;
                break;
              }
            d && (h = d);
          }
          if (h)
            Vt(h);
          else {
            const d = Fi(o);
            h = this.createTextTrack(d, o.name, o.lang), h && (h.mode = "disabled");
          }
          h && this.textTracks.push(h);
        }), a != null && a.length) {
          const o = a.filter((l) => l !== null).map((l) => l.label);
          o.length && v.warn(`Media element contains unused subtitle tracks: ${o.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
        }
      } else if (this.tracks.length) {
        const i = this.tracks.map((a) => ({
          label: a.name,
          kind: a.type.toLowerCase(),
          default: a.default,
          subtitleTrack: a
        }));
        this.hls.trigger(p.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks: i
        });
      }
    }
  }
  onManifestLoaded(t, e) {
    this.config.enableCEA708Captions && e.captions && e.captions.forEach((s) => {
      const r = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
      if (!r)
        return;
      const i = `textTrack${r[1]}`, a = this.captionsProperties[i];
      a && (a.label = s.name, s.lang && (a.languageCode = s.lang), a.media = s);
    });
  }
  closedCaptionsForLevel(t) {
    const e = this.hls.levels[t.level];
    return e == null ? void 0 : e.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(t, e) {
    if (this.enabled && e.frag.type === B.MAIN) {
      var s, r;
      const {
        cea608Parser1: i,
        cea608Parser2: a,
        lastSn: o
      } = this, {
        cc: l,
        sn: h
      } = e.frag, d = (s = (r = e.part) == null ? void 0 : r.index) != null ? s : -1;
      i && a && (h !== o + 1 || h === o && d !== this.lastPartIndex + 1 || l !== this.lastCc) && (i.reset(), a.reset()), this.lastCc = l, this.lastSn = h, this.lastPartIndex = d;
    }
  }
  onFragLoaded(t, e) {
    const {
      frag: s,
      payload: r
    } = e;
    if (s.type === B.SUBTITLE)
      if (r.byteLength) {
        const i = s.decryptdata, a = "stats" in e;
        if (i == null || !i.encrypted || a) {
          const o = this.tracks[s.level], l = this.vttCCs;
          l[s.cc] || (l[s.cc] = {
            start: s.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = s.cc), o && o.textCodec === ts ? this._parseIMSC1(s, r) : this._parseVTTs(e);
        }
      } else
        this.hls.trigger(p.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: s,
          error: new Error("Empty subtitle payload")
        });
  }
  _parseIMSC1(t, e) {
    const s = this.hls;
    br(e, this.initPTS[t.cc], (r) => {
      this._appendCues(r, t.level), s.trigger(p.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: t
      });
    }, (r) => {
      v.log(`Failed to parse IMSC1: ${r}`), s.trigger(p.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: t,
        error: r
      });
    });
  }
  _parseVTTs(t) {
    var e;
    const {
      frag: s,
      payload: r
    } = t, {
      initPTS: i,
      unparsedVttFrags: a
    } = this, o = i.length - 1;
    if (!i[s.cc] && o === -1) {
      a.push(t);
      return;
    }
    const l = this.hls, h = (e = s.initSegment) != null && e.data ? gt(s.initSegment.data, new Uint8Array(r)) : r;
    Zo(h, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (d) => {
      this._appendCues(d, s.level), l.trigger(p.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: s
      });
    }, (d) => {
      const c = d.message === "Missing initPTS for VTT MPEGTS";
      c ? a.push(t) : this._fallbackToIMSC1(s, r), v.log(`Failed to parse VTT cue: ${d}`), !(c && o > s.cc) && l.trigger(p.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: s,
        error: d
      });
    });
  }
  _fallbackToIMSC1(t, e) {
    const s = this.tracks[t.level];
    s.textCodec || br(e, this.initPTS[t.cc], () => {
      s.textCodec = ts, this._parseIMSC1(t, e);
    }, () => {
      s.textCodec = "wvtt";
    });
  }
  _appendCues(t, e) {
    const s = this.hls;
    if (this.config.renderTextTracksNatively) {
      const r = this.textTracks[e];
      if (!r || r.mode === "disabled")
        return;
      t.forEach((i) => si(r, i));
    } else {
      const r = this.tracks[e];
      if (!r)
        return;
      const i = r.default ? "default" : "subtitles" + e;
      s.trigger(p.CUES_PARSED, {
        type: "subtitles",
        cues: t,
        track: i
      });
    }
  }
  onFragDecrypted(t, e) {
    const {
      frag: s
    } = e;
    s.type === B.SUBTITLE && this.onFragLoaded(p.FRAG_LOADED, e);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(t, e) {
    this.initCea608Parsers();
    const {
      cea608Parser1: s,
      cea608Parser2: r
    } = this;
    if (!this.enabled || !s || !r)
      return;
    const {
      frag: i,
      samples: a
    } = e;
    if (!(i.type === B.MAIN && this.closedCaptionsForLevel(i) === "NONE"))
      for (let o = 0; o < a.length; o++) {
        const l = a[o].bytes;
        if (l) {
          const h = this.extractCea608Data(l);
          s.addData(a[o].pts, h[0]), r.addData(a[o].pts, h[1]);
        }
      }
  }
  onBufferFlushing(t, {
    startOffset: e,
    endOffset: s,
    endOffsetSubtitles: r,
    type: i
  }) {
    const {
      media: a
    } = this;
    if (!(!a || a.currentTime < s)) {
      if (!i || i === "video") {
        const {
          captionsTracks: o
        } = this;
        Object.keys(o).forEach((l) => ls(o[l], e, s));
      }
      if (this.config.renderTextTracksNatively && e === 0 && r !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((l) => ls(o[l], e, r));
      }
    }
  }
  extractCea608Data(t) {
    const e = [[], []], s = t[0] & 31;
    let r = 2;
    for (let i = 0; i < s; i++) {
      const a = t[r++], o = 127 & t[r++], l = 127 & t[r++];
      if (!(o === 0 && l === 0) && (4 & a) !== 0) {
        const h = 3 & a;
        (h === 0 || h === 1) && (e[h].push(o), e[h].push(l));
      }
    }
    return e;
  }
}
function Fi(n) {
  return n.characteristics && /transcribes-spoken-dialog/gi.test(n.characteristics) && /describes-music-and-sound/gi.test(n.characteristics) ? "captions" : "subtitles";
}
function wr(n, t) {
  return !!n && n.kind === Fi(t) && gs(t, n);
}
function al(n, t, e, s) {
  return Math.min(t, s) - Math.max(n, e);
}
function Pr() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: -1,
      new: !0
    }
  };
}
class Fs {
  constructor(t) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(t) {
    this.streamController = t;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(p.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(p.MANIFEST_PARSED, this.onManifestParsed, this), t.on(p.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(p.BUFFER_CODECS, this.onBufferCodecs, this), t.on(p.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: t
    } = this;
    t.off(p.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(p.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(p.MANIFEST_PARSED, this.onManifestParsed, this), t.off(p.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(p.BUFFER_CODECS, this.onBufferCodecs, this), t.off(p.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(t, e) {
    const s = this.hls.levels[e.droppedLevel];
    this.isLevelAllowed(s) && this.restrictedLevels.push({
      bitrate: s.bitrate,
      height: s.height,
      width: s.width
    });
  }
  onMediaAttaching(t, e) {
    this.media = e.media instanceof HTMLVideoElement ? e.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(t, e) {
    const s = this.hls;
    this.restrictedLevels = [], this.firstLevel = e.firstLevel, s.config.capLevelToPlayerSize && e.video && this.startCapping();
  }
  onLevelsUpdated(t, e) {
    this.timer && F(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(t, e) {
    this.hls.config.capLevelToPlayerSize && e.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping();
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const t = this.hls.levels;
      if (t.length) {
        const e = this.hls, s = this.getMaxLevel(t.length - 1);
        s !== this.autoLevelCapping && v.log(`Setting autoLevelCapping to ${s}: ${t[s].height}p@${t[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), e.autoLevelCapping = s, e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(t) {
    const e = this.hls.levels;
    if (!e.length)
      return -1;
    const s = e.filter((r, i) => this.isLevelAllowed(r) && i <= t);
    return this.clientRect = null, Fs.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const t = this.media, e = {
      width: 0,
      height: 0
    };
    if (t) {
      const s = t.getBoundingClientRect();
      e.width = s.width, e.height = s.height, !e.width && !e.height && (e.width = s.right - s.left || t.width || 0, e.height = s.bottom - s.top || t.height || 0);
    }
    return this.clientRect = e, e;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let t = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        t = self.devicePixelRatio;
      } catch {
      }
    return t;
  }
  isLevelAllowed(t) {
    return !this.restrictedLevels.some((e) => t.bitrate === e.bitrate && t.width === e.width && t.height === e.height);
  }
  static getMaxLevelByMediaSize(t, e, s) {
    if (!(t != null && t.length))
      return -1;
    const r = (o, l) => l ? o.width !== l.width || o.height !== l.height : !0;
    let i = t.length - 1;
    const a = Math.max(e, s);
    for (let o = 0; o < t.length; o += 1) {
      const l = t[o];
      if ((l.width >= a || l.height >= a) && r(l, t[o + 1])) {
        i = o;
        break;
      }
    }
    return i;
  }
}
class ol {
  constructor(t) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners();
  }
  setStreamController(t) {
    this.streamController = t;
  }
  registerListeners() {
    this.hls.on(p.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  unregisterListeners() {
    this.hls.off(p.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
  }
  onMediaAttaching(t, e) {
    const s = this.hls.config;
    if (s.capLevelOnFPSDrop) {
      const r = e.media instanceof self.HTMLVideoElement ? e.media : null;
      this.media = r, r && typeof r.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod);
    }
  }
  checkFPS(t, e, s) {
    const r = performance.now();
    if (e) {
      if (this.lastTime) {
        const i = r - this.lastTime, a = s - this.lastDroppedFrames, o = e - this.lastDecodedFrames, l = 1e3 * a / i, h = this.hls;
        if (h.trigger(p.FPS_DROP, {
          currentDropped: a,
          currentDecoded: o,
          totalDroppedFrames: s
        }), l > 0 && a > h.config.fpsDroppedMonitoringThreshold * o) {
          let d = h.currentLevel;
          v.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (h.autoLevelCapping === -1 || h.autoLevelCapping >= d) && (d = d - 1, h.trigger(p.FPS_DROP_LEVEL_CAPPING, {
            level: d,
            droppedLevel: h.currentLevel
          }), h.autoLevelCapping = d, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = r, this.lastDroppedFrames = s, this.lastDecodedFrames = e;
    }
  }
  checkFPSInterval() {
    const t = this.media;
    if (t)
      if (this.isVideoPlaybackQualityAvailable) {
        const e = t.getVideoPlaybackQuality();
        this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames);
      } else
        this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount);
  }
}
const ue = "[eme]";
class Yt {
  constructor(t) {
    this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = Yt.CDMCleanupPromise ? [Yt.CDMCleanupPromise] : [], this.debug = v.debug.bind(v, ue), this.log = v.log.bind(v, ue), this.warn = v.warn.bind(v, ue), this.error = v.error.bind(v, ue), this.onMediaEncrypted = (e) => {
      const {
        initDataType: s,
        initData: r
      } = e, i = `"${e.type}" event: init data type: "${s}"`;
      if (this.debug(i), r !== null) {
        if (!this.keyFormatPromise) {
          let a = Object.keys(this.keySystemAccessPromises);
          a.length || (a = se(this.config));
          const o = a.map(Be).filter((l) => !!l);
          this.keyFormatPromise = this.getKeyFormatPromise(o);
        }
        this.keyFormatPromise.then((a) => {
          const o = Ne(a);
          let l, h;
          if (s === "sinf") {
            if (o !== X.FAIRPLAY) {
              this.warn(`Ignoring unexpected "${e.type}" event with init data type: "${s}" for selected key-system ${o}`);
              return;
            }
            const f = rt(new Uint8Array(r));
            try {
              const m = Ss(JSON.parse(f).sinf), E = zr(m);
              if (!E)
                throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
              l = E.subarray(8, 24), h = X.FAIRPLAY;
            } catch (m) {
              this.warn(`${i} Failed to parse sinf: ${m}`);
              return;
            }
          } else {
            if (o !== X.WIDEVINE && o !== X.PLAYREADY) {
              this.warn(`Ignoring unexpected "${e.type}" event with init data type: "${s}" for selected key-system ${o}`);
              return;
            }
            const f = Nn(r), m = f.filter((y) => !!y.systemId && Ue(y.systemId) === o);
            m.length > 1 && this.warn(`${i} Using first of ${m.length} pssh found for selected key-system ${o}`);
            const E = m[0];
            if (!E) {
              f.length === 0 || f.some((y) => !y.systemId) ? this.warn(`${i} contains incomplete or invalid pssh data`) : this.log(`ignoring ${i} for ${f.map((y) => Ue(y.systemId)).join(",")} pssh data in favor of playlist keys`);
              return;
            }
            if (h = Ue(E.systemId), E.version === 0 && E.data)
              if (h === X.WIDEVINE) {
                const y = E.data.length - 22;
                l = E.data.subarray(y, y + 16);
              } else h === X.PLAYREADY && (l = Kr(E.data));
          }
          if (!h || !l) {
            this.log(`Unable to handle ${i} with key-system ${o}`);
            return;
          }
          const d = vt.hexDump(l), {
            keyIdToKeySessionPromise: c,
            mediaKeySessions: u
          } = this;
          let g = c[d];
          for (let f = 0; f < u.length; f++) {
            const m = u[f], E = m.decryptdata;
            if (!E.keyId)
              continue;
            const y = vt.hexDump(E.keyId);
            if (d === y || E.uri.replace(/-/g, "").indexOf(d) !== -1) {
              if (g = c[y], E.pssh)
                break;
              delete c[y], E.pssh = new Uint8Array(r), E.keyId = l, g = c[d] = g.then(() => this.generateRequestWithPreferredKeySession(m, s, r, "encrypted-event-key-match")), g.catch((T) => this.handleError(T));
              break;
            }
          }
          if (!g) {
            if (h !== o) {
              this.log(`Ignoring "${i}" with ${h} init data for selected key-system ${o}`);
              return;
            }
            g = c[d] = this.getKeySystemSelectionPromise([h]).then(({
              keySystem: f,
              mediaKeys: m
            }) => {
              var E;
              this.throwIfDestroyed();
              const y = new Jt("ISO-23001-7", d, (E = Be(f)) != null ? E : "");
              return y.pssh = new Uint8Array(r), y.keyId = l, this.attemptSetMediaKeys(f, m).then(() => {
                this.throwIfDestroyed();
                const T = this.createMediaKeySessionContext({
                  decryptdata: y,
                  keySystem: f,
                  mediaKeys: m
                });
                return this.generateRequestWithPreferredKeySession(T, s, r, "encrypted-event-no-match");
              });
            }), g.catch((f) => this.handleError(f));
          }
        });
      }
    }, this.onWaitingForKey = (e) => {
      this.log(`"${e.type}" event`);
    }, this.hls = t, this.config = t.config, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached();
    const t = this.config;
    t.requestMediaKeySystemAccessFunc = null, t.licenseXhrSetup = t.licenseResponseCallback = void 0, t.drmSystems = t.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null;
  }
  registerListeners() {
    this.hls.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(p.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(p.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(p.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  unregisterListeners() {
    this.hls.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(p.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(p.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(p.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  getLicenseServerUrl(t) {
    const {
      drmSystems: e,
      widevineLicenseUrl: s
    } = this.config, r = e[t];
    if (r)
      return r.licenseUrl;
    if (t === X.WIDEVINE && s)
      return s;
  }
  getLicenseServerUrlOrThrow(t) {
    const e = this.getLicenseServerUrl(t);
    if (e === void 0)
      throw new Error(`no license server URL configured for key-system "${t}"`);
    return e;
  }
  getServerCertificateUrl(t) {
    const {
      drmSystems: e
    } = this.config, s = e[t];
    if (s)
      return s.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${t}"]`);
  }
  attemptKeySystemAccess(t) {
    const e = this.hls.levels, s = (a, o, l) => !!a && l.indexOf(a) === o, r = e.map((a) => a.audioCodec).filter(s), i = e.map((a) => a.videoCodec).filter(s);
    return r.length + i.length === 0 && i.push("avc1.42e01e"), new Promise((a, o) => {
      const l = (h) => {
        const d = h.shift();
        this.getMediaKeysPromise(d, r, i).then((c) => a({
          keySystem: d,
          mediaKeys: c
        })).catch((c) => {
          h.length ? l(h) : c instanceof ut ? o(c) : o(new ut({
            type: $.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_NO_ACCESS,
            error: c,
            fatal: !0
          }, c.message));
        });
      };
      l(t);
    });
  }
  requestMediaKeySystemAccess(t, e) {
    const {
      requestMediaKeySystemAccessFunc: s
    } = this.config;
    if (typeof s != "function") {
      let r = `Configured requestMediaKeySystemAccess is not a function ${s}`;
      return Gr === null && self.location.protocol === "http:" && (r = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(r));
    }
    return s(t, e);
  }
  getMediaKeysPromise(t, e, s) {
    const r = un(t, e, s, this.config.drmSystemOptions), i = this.keySystemAccessPromises[t];
    let a = i == null ? void 0 : i.keySystemAccess;
    if (!a) {
      this.log(`Requesting encrypted media "${t}" key-system access with config: ${JSON.stringify(r)}`), a = this.requestMediaKeySystemAccess(t, r);
      const o = this.keySystemAccessPromises[t] = {
        keySystemAccess: a
      };
      return a.catch((l) => {
        this.log(`Failed to obtain access to key-system "${t}": ${l}`);
      }), a.then((l) => {
        this.log(`Access for key-system "${l.keySystem}" obtained`);
        const h = this.fetchServerCertificate(t);
        return this.log(`Create media-keys for "${t}"`), o.mediaKeys = l.createMediaKeys().then((d) => (this.log(`Media-keys created for "${t}"`), h.then((c) => c ? this.setMediaKeysServerCertificate(d, t, c) : d))), o.mediaKeys.catch((d) => {
          this.error(`Failed to create media-keys for "${t}"}: ${d}`);
        }), o.mediaKeys;
      });
    }
    return a.then(() => i.mediaKeys);
  }
  createMediaKeySessionContext({
    decryptdata: t,
    keySystem: e,
    mediaKeys: s
  }) {
    this.log(`Creating key-system session "${e}" keyId: ${vt.hexDump(t.keyId || [])}`);
    const r = s.createSession(), i = {
      decryptdata: t,
      keySystem: e,
      mediaKeys: s,
      mediaKeysSession: r,
      keyStatus: "status-pending"
    };
    return this.mediaKeySessions.push(i), i;
  }
  renewKeySession(t) {
    const e = t.decryptdata;
    if (e.pssh) {
      const s = this.createMediaKeySessionContext(t), r = this.getKeyIdString(e), i = "cenc";
      this.keyIdToKeySessionPromise[r] = this.generateRequestWithPreferredKeySession(s, i, e.pssh, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(t);
  }
  getKeyIdString(t) {
    if (!t)
      throw new Error("Could not read keyId of undefined decryptdata");
    if (t.keyId === null)
      throw new Error("keyId is null");
    return vt.hexDump(t.keyId);
  }
  updateKeySession(t, e) {
    var s;
    const r = t.mediaKeysSession;
    return this.log(`Updating key-session "${r.sessionId}" for keyID ${vt.hexDump(((s = t.decryptdata) == null ? void 0 : s.keyId) || [])}
      } (data length: ${e && e.byteLength})`), r.update(e);
  }
  selectKeySystemFormat(t) {
    const e = Object.keys(t.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${t.sn} ${t.type}: ${t.level}) key formats ${e.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(e)), this.keyFormatPromise;
  }
  getKeyFormatPromise(t) {
    return new Promise((e, s) => {
      const r = se(this.config), i = t.map(Ne).filter((a) => !!a && r.indexOf(a) !== -1);
      return this.getKeySystemSelectionPromise(i).then(({
        keySystem: a
      }) => {
        const o = Be(a);
        o ? e(o) : s(new Error(`Unable to find format for key-system "${a}"`));
      }).catch(s);
    });
  }
  loadKey(t) {
    const e = t.keyInfo.decryptdata, s = this.getKeyIdString(e), r = `(keyId: ${s} format: "${e.keyFormat}" method: ${e.method} uri: ${e.uri})`;
    this.log(`Starting session for key ${r}`);
    let i = this.keyIdToKeySessionPromise[s];
    return i || (i = this.keyIdToKeySessionPromise[s] = this.getKeySystemForKeyPromise(e).then(({
      keySystem: a,
      mediaKeys: o
    }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${t.frag.sn} ${t.frag.type}: ${t.frag.level} using key ${r}`), this.attemptSetMediaKeys(a, o).then(() => {
      this.throwIfDestroyed();
      const l = this.createMediaKeySessionContext({
        keySystem: a,
        mediaKeys: o,
        decryptdata: e
      });
      return this.generateRequestWithPreferredKeySession(l, "cenc", e.pssh, "playlist-key");
    }))), i.catch((a) => this.handleError(a))), i;
  }
  throwIfDestroyed(t = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(t) {
    this.hls && (this.error(t.message), t instanceof ut ? this.hls.trigger(p.ERROR, t.data) : this.hls.trigger(p.ERROR, {
      type: $.KEY_SYSTEM_ERROR,
      details: D.KEY_SYSTEM_NO_KEYS,
      error: t,
      fatal: !0
    }));
  }
  getKeySystemForKeyPromise(t) {
    const e = this.getKeyIdString(t), s = this.keyIdToKeySessionPromise[e];
    if (!s) {
      const r = Ne(t.keyFormat), i = r ? [r] : se(this.config);
      return this.attemptKeySystemAccess(i);
    }
    return s;
  }
  getKeySystemSelectionPromise(t) {
    if (t.length || (t = se(this.config)), t.length === 0)
      throw new ut({
        type: $.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${JSON.stringify({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(t);
  }
  attemptSetMediaKeys(t, e) {
    const s = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${t}"`);
    const r = Promise.all(s).then(() => {
      if (!this.media)
        throw new Error("Attempted to set mediaKeys without media element attached");
      return this.media.setMediaKeys(e);
    });
    return this.setMediaKeysQueue.push(r), r.then(() => {
      this.log(`Media-keys set for "${t}"`), s.push(r), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((i) => s.indexOf(i) === -1);
    });
  }
  generateRequestWithPreferredKeySession(t, e, s, r) {
    var i, a;
    const o = (i = this.config.drmSystems) == null || (a = i[t.keySystem]) == null ? void 0 : a.generateRequest;
    if (o)
      try {
        const f = o.call(this.hls, e, s, t);
        if (!f)
          throw new Error("Invalid response from configured generateRequest filter");
        e = f.initDataType, s = t.decryptdata.pssh = f.initData ? new Uint8Array(f.initData) : null;
      } catch (f) {
        var l;
        if (this.warn(f.message), (l = this.hls) != null && l.config.debug)
          throw f;
      }
    if (s === null)
      return this.log(`Skipping key-session request for "${r}" (no initData)`), Promise.resolve(t);
    const h = this.getKeyIdString(t.decryptdata);
    this.log(`Generating key-session request for "${r}": ${h} (init data type: ${e} length: ${s ? s.byteLength : null})`);
    const d = new _s(), c = t._onmessage = (f) => {
      const m = t.mediaKeysSession;
      if (!m) {
        d.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: E,
        message: y
      } = f;
      this.log(`"${E}" message event for session "${m.sessionId}" message size: ${y.byteLength}`), E === "license-request" || E === "license-renewal" ? this.renewLicense(t, y).catch((T) => {
        this.handleError(T), d.emit("error", T);
      }) : E === "license-release" ? t.keySystem === X.FAIRPLAY && (this.updateKeySession(t, as("acknowledged")), this.removeSession(t)) : this.warn(`unhandled media key message type "${E}"`);
    }, u = t._onkeystatuseschange = (f) => {
      if (!t.mediaKeysSession) {
        d.emit("error", new Error("invalid state"));
        return;
      }
      this.onKeyStatusChange(t);
      const m = t.keyStatus;
      d.emit("keyStatus", m), m === "expired" && (this.warn(`${t.keySystem} expired for key ${h}`), this.renewKeySession(t));
    };
    t.mediaKeysSession.addEventListener("message", c), t.mediaKeysSession.addEventListener("keystatuseschange", u);
    const g = new Promise((f, m) => {
      d.on("error", m), d.on("keyStatus", (E) => {
        E.startsWith("usable") ? f() : E === "output-restricted" ? m(new ut({
          type: $.KEY_SYSTEM_ERROR,
          details: D.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
          fatal: !1
        }, "HDCP level output restricted")) : E === "internal-error" ? m(new ut({
          type: $.KEY_SYSTEM_ERROR,
          details: D.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
          fatal: !0
        }, `key status changed to "${E}"`)) : E === "expired" ? m(new Error("key expired while generating request")) : this.warn(`unhandled key status change "${E}"`);
      });
    });
    return t.mediaKeysSession.generateRequest(e, s).then(() => {
      var f;
      this.log(`Request generated for key-session "${(f = t.mediaKeysSession) == null ? void 0 : f.sessionId}" keyId: ${h}`);
    }).catch((f) => {
      throw new ut({
        type: $.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_NO_SESSION,
        error: f,
        fatal: !1
      }, `Error generating key-session request: ${f}`);
    }).then(() => g).catch((f) => {
      throw d.removeAllListeners(), this.removeSession(t), f;
    }).then(() => (d.removeAllListeners(), t));
  }
  onKeyStatusChange(t) {
    t.mediaKeysSession.keyStatuses.forEach((e, s) => {
      this.log(`key status change "${e}" for keyStatuses keyId: ${vt.hexDump("buffer" in s ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : new Uint8Array(s))} session keyId: ${vt.hexDump(new Uint8Array(t.decryptdata.keyId || []))} uri: ${t.decryptdata.uri}`), t.keyStatus = e;
    });
  }
  fetchServerCertificate(t) {
    const e = this.config, s = e.loader, r = new s(e), i = this.getServerCertificateUrl(t);
    return i ? (this.log(`Fetching server certificate for "${t}"`), new Promise((a, o) => {
      const l = {
        responseType: "arraybuffer",
        url: i
      }, h = e.certLoadPolicy.default, d = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, c = {
        onSuccess: (u, g, f, m) => {
          a(u.data);
        },
        onError: (u, g, f, m) => {
          o(new ut({
            type: $.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: f,
            response: at({
              url: l.url,
              data: void 0
            }, u)
          }, `"${t}" certificate request failed (${i}). Status: ${u.code} (${u.text})`));
        },
        onTimeout: (u, g, f) => {
          o(new ut({
            type: $.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: f,
            response: {
              url: l.url,
              data: void 0
            }
          }, `"${t}" certificate request timed out (${i})`));
        },
        onAbort: (u, g, f) => {
          o(new Error("aborted"));
        }
      };
      r.load(l, d, c);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(t, e, s) {
    return new Promise((r, i) => {
      t.setServerCertificate(s).then((a) => {
        this.log(`setServerCertificate ${a ? "success" : "not supported by CDM"} (${s == null ? void 0 : s.byteLength}) on "${e}"`), r(t);
      }).catch((a) => {
        i(new ut({
          type: $.KEY_SYSTEM_ERROR,
          details: D.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: a,
          fatal: !0
        }, a.message));
      });
    });
  }
  renewLicense(t, e) {
    return this.requestLicense(t, new Uint8Array(e)).then((s) => this.updateKeySession(t, new Uint8Array(s)).catch((r) => {
      throw new ut({
        type: $.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        error: r,
        fatal: !0
      }, r.message);
    }));
  }
  unpackPlayReadyKeyMessage(t, e) {
    const s = String.fromCharCode.apply(null, new Uint16Array(e.buffer));
    if (!s.includes("PlayReadyKeyMessage"))
      return t.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), e;
    const r = new DOMParser().parseFromString(s, "application/xml"), i = r.querySelectorAll("HttpHeader");
    if (i.length > 0) {
      let d;
      for (let c = 0, u = i.length; c < u; c++) {
        var a, o;
        d = i[c];
        const g = (a = d.querySelector("name")) == null ? void 0 : a.textContent, f = (o = d.querySelector("value")) == null ? void 0 : o.textContent;
        g && f && t.setRequestHeader(g, f);
      }
    }
    const l = r.querySelector("Challenge"), h = l == null ? void 0 : l.textContent;
    if (!h)
      throw new Error("Cannot find <Challenge> in key message");
    return as(atob(h));
  }
  setupLicenseXHR(t, e, s, r) {
    const i = this.config.licenseXhrSetup;
    return i ? Promise.resolve().then(() => {
      if (!s.decryptdata)
        throw new Error("Key removed");
      return i.call(this.hls, t, e, s, r);
    }).catch((a) => {
      if (!s.decryptdata)
        throw a;
      return t.open("POST", e, !0), i.call(this.hls, t, e, s, r);
    }).then((a) => (t.readyState || t.open("POST", e, !0), {
      xhr: t,
      licenseChallenge: a || r
    })) : (t.open("POST", e, !0), Promise.resolve({
      xhr: t,
      licenseChallenge: r
    }));
  }
  requestLicense(t, e) {
    const s = this.config.keyLoadPolicy.default;
    return new Promise((r, i) => {
      const a = this.getLicenseServerUrlOrThrow(t.keySystem);
      this.log(`Sending license request to URL: ${a}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !t.mediaKeysSession)
          return i(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let l = o.response;
            this.log(`License received ${l instanceof ArrayBuffer ? l.byteLength : l}`);
            const h = this.config.licenseResponseCallback;
            if (h)
              try {
                l = h.call(this.hls, o, a, t);
              } catch (d) {
                this.error(d);
              }
            r(l);
          } else {
            const l = s.errorRetry, h = l ? l.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > h || o.status >= 400 && o.status < 500)
              i(new ut({
                type: $.KEY_SYSTEM_ERROR,
                details: D.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                fatal: !0,
                networkDetails: o,
                response: {
                  url: a,
                  data: void 0,
                  code: o.status,
                  text: o.statusText
                }
              }, `License Request XHR failed (${a}). Status: ${o.status} (${o.statusText})`));
            else {
              const d = h - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${d} attempts left`), this.requestLicense(t, e).then(r, i);
            }
          }
      }, t.licenseXhr && t.licenseXhr.readyState !== XMLHttpRequest.DONE && t.licenseXhr.abort(), t.licenseXhr = o, this.setupLicenseXHR(o, a, t, e).then(({
        xhr: l,
        licenseChallenge: h
      }) => {
        t.keySystem == X.PLAYREADY && (h = this.unpackPlayReadyKeyMessage(l, h)), l.send(h);
      });
    });
  }
  onMediaAttached(t, e) {
    if (!this.config.emeEnabled)
      return;
    const s = e.media;
    this.media = s, s.removeEventListener("encrypted", this.onMediaEncrypted), s.removeEventListener("waitingforkey", this.onWaitingForKey), s.addEventListener("encrypted", this.onMediaEncrypted), s.addEventListener("waitingforkey", this.onWaitingForKey);
  }
  onMediaDetached() {
    const t = this.media, e = this.mediaKeySessions;
    t && (t.removeEventListener("encrypted", this.onMediaEncrypted), t.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, Jt.clearKeyUriToKeyIdMap();
    const s = e.length;
    Yt.CDMCleanupPromise = Promise.all(e.map((r) => this.removeSession(r)).concat(t == null ? void 0 : t.setMediaKeys(null).catch((r) => {
      this.log(`Could not clear media keys: ${r}`);
    }))).then(() => {
      s && (this.log("finished closing key sessions and clearing media keys"), e.length = 0);
    }).catch((r) => {
      this.log(`Could not close sessions and clear media keys: ${r}`);
    });
  }
  onManifestLoading() {
    this.keyFormatPromise = null;
  }
  onManifestLoaded(t, {
    sessionKeys: e
  }) {
    if (!(!e || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const s = e.reduce((r, i) => (r.indexOf(i.keyFormat) === -1 && r.push(i.keyFormat), r), []);
      this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s);
    }
  }
  removeSession(t) {
    const {
      mediaKeysSession: e,
      licenseXhr: s
    } = t;
    if (e) {
      this.log(`Remove licenses and keys and close session ${e.sessionId}`), t._onmessage && (e.removeEventListener("message", t._onmessage), t._onmessage = void 0), t._onkeystatuseschange && (e.removeEventListener("keystatuseschange", t._onkeystatuseschange), t._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), t.mediaKeysSession = t.decryptdata = t.licenseXhr = void 0;
      const r = this.mediaKeySessions.indexOf(t);
      return r > -1 && this.mediaKeySessions.splice(r, 1), e.remove().catch((i) => {
        this.log(`Could not remove session: ${i}`);
      }).then(() => e.close()).catch((i) => {
        this.log(`Could not close session: ${i}`);
      });
    }
  }
}
Yt.CDMCleanupPromise = void 0;
class ut extends Error {
  constructor(t, e) {
    super(e), this.data = void 0, t.error || (t.error = new Error(e)), this.data = t, t.err = t.error;
  }
}
var lt;
(function(n) {
  n.MANIFEST = "m", n.AUDIO = "a", n.VIDEO = "v", n.MUXED = "av", n.INIT = "i", n.CAPTION = "c", n.TIMED_TEXT = "tt", n.KEY = "k", n.OTHER = "o";
})(lt || (lt = {}));
var ps;
(function(n) {
  n.DASH = "d", n.HLS = "h", n.SMOOTH = "s", n.OTHER = "o";
})(ps || (ps = {}));
var Mt;
(function(n) {
  n.OBJECT = "CMCD-Object", n.REQUEST = "CMCD-Request", n.SESSION = "CMCD-Session", n.STATUS = "CMCD-Status";
})(Mt || (Mt = {}));
const ll = {
  [Mt.OBJECT]: ["br", "d", "ot", "tb"],
  [Mt.REQUEST]: ["bl", "dl", "mtp", "nor", "nrr", "su"],
  [Mt.SESSION]: ["cid", "pr", "sf", "sid", "st", "v"],
  [Mt.STATUS]: ["bs", "rtp"]
};
class qt {
  constructor(t, e) {
    this.value = void 0, this.params = void 0, Array.isArray(t) && (t = t.map((s) => s instanceof qt ? s : new qt(s))), this.value = t, this.params = e;
  }
}
class Ni {
  constructor(t) {
    this.description = void 0, this.description = t;
  }
}
const hl = "Dict";
function dl(n) {
  return Array.isArray(n) ? JSON.stringify(n) : n instanceof Map ? "Map{}" : n instanceof Set ? "Set{}" : typeof n == "object" ? JSON.stringify(n) : String(n);
}
function cl(n, t, e, s) {
  return new Error(`failed to ${n} "${dl(t)}" as ${e}`, {
    cause: s
  });
}
const xr = "Bare Item", ul = "Boolean", fl = "Byte Sequence", gl = "Decimal", ml = "Integer";
function pl(n) {
  return n < -999999999999999 || 999999999999999 < n;
}
const El = /[\x00-\x1f\x7f]+/, yl = "Token", Tl = "Key";
function Dt(n, t, e) {
  return cl("serialize", n, t, e);
}
function vl(n) {
  if (typeof n != "boolean")
    throw Dt(n, ul);
  return n ? "?1" : "?0";
}
function Sl(n) {
  return btoa(String.fromCharCode(...n));
}
function Ll(n) {
  if (ArrayBuffer.isView(n) === !1)
    throw Dt(n, fl);
  return `:${Sl(n)}:`;
}
function Ui(n) {
  if (pl(n))
    throw Dt(n, ml);
  return n.toString();
}
function Al(n) {
  return `@${Ui(n.getTime() / 1e3)}`;
}
function Bi(n, t) {
  if (n < 0)
    return -Bi(-n, t);
  const e = Math.pow(10, t);
  if (Math.abs(n * e % 1 - 0.5) < Number.EPSILON) {
    const s = Math.floor(n * e);
    return (s % 2 === 0 ? s : s + 1) / e;
  } else
    return Math.round(n * e) / e;
}
function Rl(n) {
  const t = Bi(n, 3);
  if (Math.floor(Math.abs(t)).toString().length > 12)
    throw Dt(n, gl);
  const e = t.toString();
  return e.includes(".") ? e : `${e}.0`;
}
const Dl = "String";
function Il(n) {
  if (El.test(n))
    throw Dt(n, Dl);
  return `"${n.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function bl(n) {
  return n.description || n.toString().slice(7, -1);
}
function _r(n) {
  const t = bl(n);
  if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(t) === !1)
    throw Dt(t, yl);
  return t;
}
function Es(n) {
  switch (typeof n) {
    case "number":
      if (!F(n))
        throw Dt(n, xr);
      return Number.isInteger(n) ? Ui(n) : Rl(n);
    case "string":
      return Il(n);
    case "symbol":
      return _r(n);
    case "boolean":
      return vl(n);
    case "object":
      if (n instanceof Date)
        return Al(n);
      if (n instanceof Uint8Array)
        return Ll(n);
      if (n instanceof Ni)
        return _r(n);
    default:
      throw Dt(n, xr);
  }
}
function ys(n) {
  if (/^[a-z*][a-z0-9\-_.*]*$/.test(n) === !1)
    throw Dt(n, Tl);
  return n;
}
function Ns(n) {
  return n == null ? "" : Object.entries(n).map(([t, e]) => e === !0 ? `;${ys(t)}` : `;${ys(t)}=${Es(e)}`).join("");
}
function $i(n) {
  return n instanceof qt ? `${Es(n.value)}${Ns(n.params)}` : Es(n);
}
function kl(n) {
  return `(${n.value.map($i).join(" ")})${Ns(n.params)}`;
}
function Cl(n, t = {
  whitespace: !0
}) {
  if (typeof n != "object")
    throw Dt(n, hl);
  const e = n instanceof Map ? n.entries() : Object.entries(n), s = t != null && t.whitespace ? " " : "";
  return Array.from(e).map(([r, i]) => {
    i instanceof qt || (i = new qt(i));
    let a = ys(r);
    return i.value === !0 ? a += Ns(i.params) : (a += "=", Array.isArray(i.value) ? a += kl(i) : a += $i(i)), a;
  }).join(`,${s}`);
}
function wl(n, t) {
  return Cl(n, t);
}
const Pl = (n) => n === "ot" || n === "sf" || n === "st", xl = (n) => typeof n == "number" ? F(n) : n != null && n !== "" && n !== !1;
function _l(n, t) {
  const e = new URL(n), s = new URL(t);
  if (e.origin !== s.origin)
    return n;
  const r = e.pathname.split("/").slice(1), i = s.pathname.split("/").slice(1, -1);
  for (; r[0] === i[0]; )
    r.shift(), i.shift();
  for (; i.length; )
    i.shift(), r.unshift("..");
  return r.join("/");
}
function Ol() {
  try {
    return crypto.randomUUID();
  } catch {
    try {
      const n = URL.createObjectURL(new Blob()), t = n.toString();
      return URL.revokeObjectURL(n), t.slice(t.lastIndexOf("/") + 1);
    } catch {
      let n = (/* @__PURE__ */ new Date()).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        const e = (n + Math.random() * 16) % 16 | 0;
        return n = Math.floor(n / 16), (t == "x" ? e : e & 3 | 8).toString(16);
      });
    }
  }
}
const ve = (n) => Math.round(n), Ml = (n, t) => (t != null && t.baseUrl && (n = _l(n, t.baseUrl)), encodeURIComponent(n)), fe = (n) => ve(n / 100) * 100, Fl = {
  /**
   * Bitrate (kbps) rounded integer
   */
  br: ve,
  /**
   * Duration (milliseconds) rounded integer
   */
  d: ve,
  /**
   * Buffer Length (milliseconds) rounded nearest 100ms
   */
  bl: fe,
  /**
   * Deadline (milliseconds) rounded nearest 100ms
   */
  dl: fe,
  /**
   * Measured Throughput (kbps) rounded nearest 100kbps
   */
  mtp: fe,
  /**
   * Next Object Request URL encoded
   */
  nor: Ml,
  /**
   * Requested maximum throughput (kbps) rounded nearest 100kbps
   */
  rtp: fe,
  /**
   * Top Bitrate (kbps) rounded integer
   */
  tb: ve
};
function Nl(n, t) {
  const e = {};
  if (n == null || typeof n != "object")
    return e;
  const s = Object.keys(n).sort(), r = tt({}, Fl, t == null ? void 0 : t.formatters), i = t == null ? void 0 : t.filter;
  return s.forEach((a) => {
    if (i != null && i(a))
      return;
    let o = n[a];
    const l = r[a];
    l && (o = l(o, t)), !(a === "v" && o === 1) && (a == "pr" && o === 1 || xl(o) && (Pl(a) && typeof o == "string" && (o = new Ni(o)), e[a] = o));
  }), e;
}
function Gi(n, t = {}) {
  return n ? wl(Nl(n, t), tt({
    whitespace: !1
  }, t)) : "";
}
function Ul(n, t = {}) {
  if (!n)
    return {};
  const e = Object.entries(n), s = Object.entries(ll).concat(Object.entries((t == null ? void 0 : t.customHeaderMap) || {})), r = e.reduce((i, a) => {
    var o;
    const [l, h] = a, d = ((o = s.find((c) => c[1].includes(l))) == null ? void 0 : o[0]) || Mt.REQUEST;
    return i[d] != null || (i[d] = {}), i[d][l] = h, i;
  }, {});
  return Object.entries(r).reduce((i, [a, o]) => (i[a] = Gi(o, t), i), {});
}
function Bl(n, t, e) {
  return tt(n, Ul(t, e));
}
const $l = "CMCD";
function Gl(n, t = {}) {
  if (!n)
    return "";
  const e = Gi(n, t);
  return `${$l}=${encodeURIComponent(e)}`;
}
const Or = /CMCD=[^&#]+/;
function Kl(n, t, e) {
  const s = Gl(t, e);
  if (!s)
    return n;
  if (Or.test(n))
    return n.replace(Or, s);
  const r = n.includes("?") ? "&" : "?";
  return `${n}${r}${s}`;
}
class Vl {
  // eslint-disable-line no-restricted-globals
  constructor(t) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (r) => {
      try {
        this.apply(r, {
          ot: lt.MANIFEST,
          su: !this.initialized
        });
      } catch (i) {
        v.warn("Could not generate manifest CMCD data.", i);
      }
    }, this.applyFragmentData = (r) => {
      try {
        const i = r.frag, a = this.hls.levels[i.level], o = this.getObjectType(i), l = {
          d: i.duration * 1e3,
          ot: o
        };
        (o === lt.VIDEO || o === lt.AUDIO || o == lt.MUXED) && (l.br = a.bitrate / 1e3, l.tb = this.getTopBandwidth(o) / 1e3, l.bl = this.getBufferLength(o)), this.apply(r, l);
      } catch (i) {
        v.warn("Could not generate segment CMCD data.", i);
      }
    }, this.hls = t;
    const e = this.config = t.config, {
      cmcd: s
    } = e;
    s != null && (e.pLoader = this.createPlaylistLoader(), e.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || Ol(), this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.includeKeys = s.includeKeys, this.registerListeners());
  }
  registerListeners() {
    const t = this.hls;
    t.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(p.MEDIA_DETACHED, this.onMediaDetached, this), t.on(p.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const t = this.hls;
    t.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(p.MEDIA_DETACHED, this.onMediaDetached, this), t.off(p.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = null;
  }
  onMediaAttached(t, e) {
    this.media = e.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
  }
  onBufferCreated(t, e) {
    var s, r;
    this.audioBuffer = (s = e.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (r = e.tracks.video) == null ? void 0 : r.buffer;
  }
  /**
   * Create baseline CMCD data
   */
  createData() {
    var t;
    return {
      v: 1,
      sf: ps.HLS,
      sid: this.sid,
      cid: this.cid,
      pr: (t = this.media) == null ? void 0 : t.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3
    };
  }
  /**
   * Apply CMCD data to a request.
   */
  apply(t, e = {}) {
    tt(e, this.createData());
    const s = e.ot === lt.INIT || e.ot === lt.VIDEO || e.ot === lt.MUXED;
    this.starved && s && (e.bs = !0, e.su = !0, this.starved = !1), e.su == null && (e.su = this.buffering);
    const {
      includeKeys: r
    } = this;
    r && (e = Object.keys(e).reduce((i, a) => (r.includes(a) && (i[a] = e[a]), i), {})), this.useHeaders ? (t.headers || (t.headers = {}), Bl(t.headers, e)) : t.url = Kl(t.url, e);
  }
  /**
   * The CMCD object type.
   */
  getObjectType(t) {
    const {
      type: e
    } = t;
    if (e === "subtitle")
      return lt.TIMED_TEXT;
    if (t.sn === "initSegment")
      return lt.INIT;
    if (e === "audio")
      return lt.AUDIO;
    if (e === "main")
      return this.hls.audioTracks.length ? lt.VIDEO : lt.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(t) {
    let e = 0, s;
    const r = this.hls;
    if (t === lt.AUDIO)
      s = r.audioTracks;
    else {
      const i = r.maxAutoLevel, a = i > -1 ? i + 1 : r.levels.length;
      s = r.levels.slice(0, a);
    }
    for (const i of s)
      i.bitrate > e && (e = i.bitrate);
    return e > 0 ? e : NaN;
  }
  /**
   * Get the buffer length for a media type in milliseconds
   */
  getBufferLength(t) {
    const e = this.hls.media, s = t === lt.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !s || !e ? NaN : Q.bufferInfo(s, e.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  /**
   * Create a playlist loader
   */
  createPlaylistLoader() {
    const {
      pLoader: t
    } = this.config, e = this.applyPlaylistData, s = t || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, i, a) {
        e(r), this.loader.load(r, i, a);
      }
    };
  }
  /**
   * Create a playlist loader
   */
  createFragmentLoader() {
    const {
      fLoader: t
    } = this.config, e = this.applyFragmentData, s = t || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, i, a) {
        e(r), this.loader.load(r, i, a);
      }
    };
  }
}
const Hl = 3e5;
class Yl {
  constructor(t) {
    this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = t, this.log = v.log.bind(v, "[content-steering]:"), this.registerListeners();
  }
  registerListeners() {
    const t = this.hls;
    t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(p.MANIFEST_PARSED, this.onManifestParsed, this), t.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const t = this.hls;
    t && (t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(p.MANIFEST_PARSED, this.onManifestParsed, this), t.off(p.ERROR, this.onError, this));
  }
  startLoad() {
    if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const t = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (t > 0) {
          this.scheduleRefresh(this.uri, t);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(t) {
    const e = this.levels;
    e && (this.levels = e.filter((s) => s !== t));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(t, e) {
    const {
      contentSteering: s
    } = e;
    s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad());
  }
  onManifestParsed(t, e) {
    this.audioTracks = e.audioTracks, this.subtitleTracks = e.subtitleTracks;
  }
  onError(t, e) {
    const {
      errorAction: s
    } = e;
    if ((s == null ? void 0 : s.action) === ot.SendAlternateToPenaltyBox && s.flags === pt.MoveAllAlternatesMatchingHost) {
      const r = this.levels;
      let i = this.pathwayPriority, a = this.pathwayId;
      if (e.context) {
        const {
          groupId: o,
          pathwayId: l,
          type: h
        } = e.context;
        o && r ? a = this.getPathwayForGroupId(o, h, a) : l && (a = l);
      }
      a in this.penalizedPathways || (this.penalizedPathways[a] = performance.now()), !i && r && (i = r.reduce((o, l) => (o.indexOf(l.pathwayId) === -1 && o.push(l.pathwayId), o), [])), i && i.length > 1 && (this.updatePathwayPriority(i), s.resolved = this.pathwayId !== a), s.resolved || v.warn(`Could not resolve ${e.details} ("${e.error.message}") with content-steering for Pathway: ${a} levels: ${r && r.length} priorities: ${JSON.stringify(i)} penalized: ${JSON.stringify(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(t) {
    this.levels = t;
    let e = this.getLevelsForPathway(this.pathwayId);
    if (e.length === 0) {
      const s = t[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), e = this.getLevelsForPathway(s), this.pathwayId = s;
    }
    return e.length !== t.length && this.log(`Found ${e.length}/${t.length} levels in Pathway "${this.pathwayId}"`), e;
  }
  getLevelsForPathway(t) {
    return this.levels === null ? [] : this.levels.filter((e) => t === e.pathwayId);
  }
  updatePathwayPriority(t) {
    this.pathwayPriority = t;
    let e;
    const s = this.penalizedPathways, r = performance.now();
    Object.keys(s).forEach((i) => {
      r - s[i] > Hl && delete s[i];
    });
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      if (a in s)
        continue;
      if (a === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, l = this.hls.levels[o];
      if (e = this.getLevelsForPathway(a), e.length > 0) {
        this.log(`Setting Pathway to "${a}"`), this.pathwayId = a, ai(e), this.hls.trigger(p.LEVELS_UPDATED, {
          levels: e
        });
        const h = this.hls.levels[o];
        l && h && this.levels && (h.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] && h.bitrate !== l.bitrate && this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${h.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(t, e, s) {
    const r = this.getLevelsForPathway(s).concat(this.levels || []);
    for (let i = 0; i < r.length; i++)
      if (e === W.AUDIO_TRACK && r[i].hasAudioGroup(t) || e === W.SUBTITLE_TRACK && r[i].hasSubtitleGroup(t))
        return r[i].pathwayId;
    return s;
  }
  clonePathways(t) {
    const e = this.levels;
    if (!e)
      return;
    const s = {}, r = {};
    t.forEach((i) => {
      const {
        ID: a,
        "BASE-ID": o,
        "URI-REPLACEMENT": l
      } = i;
      if (e.some((d) => d.pathwayId === a))
        return;
      const h = this.getLevelsForPathway(o).map((d) => {
        const c = new J(d.attrs);
        c["PATHWAY-ID"] = a;
        const u = c.AUDIO && `${c.AUDIO}_clone_${a}`, g = c.SUBTITLES && `${c.SUBTITLES}_clone_${a}`;
        u && (s[c.AUDIO] = u, c.AUDIO = u), g && (r[c.SUBTITLES] = g, c.SUBTITLES = g);
        const f = Ki(d.uri, c["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l), m = new jt({
          attrs: c,
          audioCodec: d.audioCodec,
          bitrate: d.bitrate,
          height: d.height,
          name: d.name,
          url: f,
          videoCodec: d.videoCodec,
          width: d.width
        });
        if (d.audioGroups)
          for (let E = 1; E < d.audioGroups.length; E++)
            m.addGroupId("audio", `${d.audioGroups[E]}_clone_${a}`);
        if (d.subtitleGroups)
          for (let E = 1; E < d.subtitleGroups.length; E++)
            m.addGroupId("text", `${d.subtitleGroups[E]}_clone_${a}`);
        return m;
      });
      e.push(...h), Mr(this.audioTracks, s, l, a), Mr(this.subtitleTracks, r, l, a);
    });
  }
  loadSteeringManifest(t) {
    const e = this.hls.config, s = e.loader;
    this.loader && this.loader.destroy(), this.loader = new s(e);
    let r;
    try {
      r = new self.URL(t);
    } catch {
      this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${t}`);
      return;
    }
    if (r.protocol !== "data:") {
      const d = (this.hls.bandwidthEstimate || e.abrEwmaDefaultEstimate) | 0;
      r.searchParams.set("_HLS_pathway", this.pathwayId), r.searchParams.set("_HLS_throughput", "" + d);
    }
    const i = {
      responseType: "json",
      url: r.href
    }, a = e.steeringManifestLoadPolicy.default, o = a.errorRetry || a.timeoutRetry || {}, l = {
      loadPolicy: a,
      timeout: a.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, h = {
      onSuccess: (d, c, u, g) => {
        this.log(`Loaded steering manifest: "${r}"`);
        const f = d.data;
        if (f.VERSION !== 1) {
          this.log(`Steering VERSION ${f.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = f.TTL;
        const {
          "RELOAD-URI": m,
          "PATHWAY-CLONES": E,
          "PATHWAY-PRIORITY": y
        } = f;
        if (m)
          try {
            this.uri = new self.URL(m, r).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${m}`);
            return;
          }
        this.scheduleRefresh(this.uri || u.url), E && this.clonePathways(E);
        const T = {
          steeringManifest: f,
          url: r.toString()
        };
        this.hls.trigger(p.STEERING_MANIFEST_LOADED, T), y && this.updatePathwayPriority(y);
      },
      onError: (d, c, u, g) => {
        if (this.log(`Error loading steering manifest: ${d.code} ${d.text} (${c.url})`), this.stopLoad(), d.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${c.url} no longer available`);
          return;
        }
        let f = this.timeToLoad * 1e3;
        if (d.code === 429) {
          const m = this.loader;
          if (typeof (m == null ? void 0 : m.getResponseHeader) == "function") {
            const E = m.getResponseHeader("Retry-After");
            E && (f = parseFloat(E) * 1e3);
          }
          this.log(`Steering manifest ${c.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || c.url, f);
      },
      onTimeout: (d, c, u) => {
        this.log(`Timeout loading steering manifest (${c.url})`), this.scheduleRefresh(this.uri || c.url);
      }
    };
    this.log(`Requesting steering manifest: ${r}`), this.loader.load(i, l, h);
  }
  scheduleRefresh(t, e = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var s;
      const r = (s = this.hls) == null ? void 0 : s.media;
      if (r && !r.ended) {
        this.loadSteeringManifest(t);
        return;
      }
      this.scheduleRefresh(t, this.timeToLoad * 1e3);
    }, e);
  }
}
function Mr(n, t, e, s) {
  n && Object.keys(t).forEach((r) => {
    const i = n.filter((a) => a.groupId === r).map((a) => {
      const o = tt({}, a);
      return o.details = void 0, o.attrs = new J(o.attrs), o.url = o.attrs.URI = Ki(a.url, a.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", e), o.groupId = o.attrs["GROUP-ID"] = t[r], o.attrs["PATHWAY-ID"] = s, o;
    });
    n.push(...i);
  });
}
function Ki(n, t, e, s) {
  const {
    HOST: r,
    PARAMS: i,
    [e]: a
  } = s;
  let o;
  t && (o = a == null ? void 0 : a[t], o && (n = o));
  const l = new self.URL(n);
  return r && !o && (l.host = r), i && Object.keys(i).sort().forEach((h) => {
    h && l.searchParams.set(h, i[h]);
  }), l.href;
}
const Wl = /^age:\s*[\d.]+\s*$/im;
class Vi {
  constructor(t) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = t && t.xhrSetup || null, this.stats = new _e(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const t = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, t.readyState !== 4 && (this.stats.aborted = !0, t.abort()));
  }
  abort() {
    var t;
    this.abortInternal(), (t = this.callbacks) != null && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(t, e, s) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = s, this.loadInternal();
  }
  loadInternal() {
    const {
      config: t,
      context: e
    } = this;
    if (!t || !e)
      return;
    const s = this.loader = new self.XMLHttpRequest(), r = this.stats;
    r.loading.first = 0, r.loaded = 0, r.aborted = !1;
    const i = this.xhrSetup;
    i ? Promise.resolve().then(() => {
      if (!(this.loader !== s || this.stats.aborted))
        return i(s, e.url);
    }).catch((a) => {
      if (!(this.loader !== s || this.stats.aborted))
        return s.open("GET", e.url, !0), i(s, e.url);
    }).then(() => {
      this.loader !== s || this.stats.aborted || this.openAndSendXhr(s, e, t);
    }).catch((a) => {
      this.callbacks.onError({
        code: s.status,
        text: a.message
      }, e, s, r);
    }) : this.openAndSendXhr(s, e, t);
  }
  openAndSendXhr(t, e, s) {
    t.readyState || t.open("GET", e.url, !0);
    const r = e.headers, {
      maxTimeToFirstByteMs: i,
      maxLoadTimeMs: a
    } = s.loadPolicy;
    if (r)
      for (const o in r)
        t.setRequestHeader(o, r[o]);
    e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, self.clearTimeout(this.requestTimeout), s.timeout = i && F(i) ? i : a, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), t.send();
  }
  readystatechange() {
    const {
      context: t,
      loader: e,
      stats: s
    } = this;
    if (!t || !e)
      return;
    const r = e.readyState, i = this.config;
    if (!s.aborted && r >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), i.timeout !== i.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), i.timeout = i.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), i.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), r === 4)) {
      self.clearTimeout(this.requestTimeout), e.onreadystatechange = null, e.onprogress = null;
      const a = e.status, o = e.responseType === "text" ? e.responseText : null;
      if (a >= 200 && a < 300) {
        const c = o ?? e.response;
        if (c != null) {
          s.loading.end = Math.max(self.performance.now(), s.loading.first);
          const u = e.responseType === "arraybuffer" ? c.byteLength : c.length;
          if (s.loaded = s.total = u, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first), !this.callbacks)
            return;
          const g = this.callbacks.onProgress;
          if (g && g(s, t, c, e), !this.callbacks)
            return;
          const f = {
            url: e.responseURL,
            data: c,
            code: a
          };
          this.callbacks.onSuccess(f, s, t, e);
          return;
        }
      }
      const l = i.loadPolicy.errorRetry, h = s.retry, d = {
        url: t.url,
        data: void 0,
        code: a
      };
      ke(l, h, !1, d) ? this.retry(l) : (v.error(`${a} while loading ${t.url}`), this.callbacks.onError({
        code: a,
        text: e.statusText
      }, t, e, s));
    }
  }
  loadtimeout() {
    if (!this.config) return;
    const t = this.config.loadPolicy.timeoutRetry, e = this.stats.retry;
    if (ke(t, e, !0))
      this.retry(t);
    else {
      var s;
      v.warn(`timeout while loading ${(s = this.context) == null ? void 0 : s.url}`);
      const r = this.callbacks;
      r && (this.abortInternal(), r.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(t) {
    const {
      context: e,
      stats: s
    } = this;
    this.retryDelay = Rs(t, s.retry), s.retry++, v.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${e == null ? void 0 : e.url}, retrying ${s.retry}/${t.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(t) {
    const e = this.stats;
    e.loaded = t.loaded, t.lengthComputable && (e.total = t.total);
  }
  getCacheAge() {
    let t = null;
    if (this.loader && Wl.test(this.loader.getAllResponseHeaders())) {
      const e = this.loader.getResponseHeader("age");
      t = e ? parseFloat(e) : null;
    }
    return t;
  }
  getResponseHeader(t) {
    return this.loader && new RegExp(`^${t}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t) : null;
  }
}
function jl() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return !1;
}
const ql = /(\d+)-(\d+)\/(\d+)/;
class Fr {
  constructor(t) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || Jl, this.controller = new self.AbortController(), this.stats = new _e();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
  }
  abort() {
    var t;
    this.abortInternal(), (t = this.callbacks) != null && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(t, e, s) {
    const r = this.stats;
    if (r.loading.start)
      throw new Error("Loader can only be used once.");
    r.loading.start = self.performance.now();
    const i = Xl(t, this.controller.signal), a = s.onProgress, o = t.responseType === "arraybuffer", l = o ? "byteLength" : "length", {
      maxTimeToFirstByteMs: h,
      maxLoadTimeMs: d
    } = e.loadPolicy;
    this.context = t, this.config = e, this.callbacks = s, this.request = this.fetchSetup(t, i), self.clearTimeout(this.requestTimeout), e.timeout = h && F(h) ? h : d, this.requestTimeout = self.setTimeout(() => {
      this.abortInternal(), s.onTimeout(r, t, this.response);
    }, e.timeout), self.fetch(this.request).then((c) => {
      this.response = this.loader = c;
      const u = Math.max(self.performance.now(), r.loading.start);
      if (self.clearTimeout(this.requestTimeout), e.timeout = d, this.requestTimeout = self.setTimeout(() => {
        this.abortInternal(), s.onTimeout(r, t, this.response);
      }, d - (u - r.loading.start)), !c.ok) {
        const {
          status: g,
          statusText: f
        } = c;
        throw new Zl(f || "fetch, bad network response", g, c);
      }
      return r.loading.first = u, r.total = Ql(c.headers) || r.total, a && F(e.highWaterMark) ? this.loadProgressively(c, r, t, e.highWaterMark, a) : o ? c.arrayBuffer() : t.responseType === "json" ? c.json() : c.text();
    }).then((c) => {
      const u = this.response;
      if (!u)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), r.loading.end = Math.max(self.performance.now(), r.loading.first);
      const g = c[l];
      g && (r.loaded = r.total = g);
      const f = {
        url: u.url,
        data: c,
        code: u.status
      };
      a && !F(e.highWaterMark) && a(r, t, c, u), s.onSuccess(f, r, t, u);
    }).catch((c) => {
      if (self.clearTimeout(this.requestTimeout), r.aborted)
        return;
      const u = c && c.code || 0, g = c ? c.message : null;
      s.onError({
        code: u,
        text: g
      }, t, c ? c.details : null, r);
    });
  }
  getCacheAge() {
    let t = null;
    if (this.response) {
      const e = this.response.headers.get("age");
      t = e ? parseFloat(e) : null;
    }
    return t;
  }
  getResponseHeader(t) {
    return this.response ? this.response.headers.get(t) : null;
  }
  loadProgressively(t, e, s, r = 0, i) {
    const a = new di(), o = t.body.getReader(), l = () => o.read().then((h) => {
      if (h.done)
        return a.dataLength && i(e, s, a.flush(), t), Promise.resolve(new ArrayBuffer(0));
      const d = h.value, c = d.length;
      return e.loaded += c, c < r || a.dataLength ? (a.push(d), a.dataLength >= r && i(e, s, a.flush(), t)) : i(e, s, d, t), l();
    }).catch(() => Promise.reject());
    return l();
  }
}
function Xl(n, t) {
  const e = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: t,
    headers: new self.Headers(tt({}, n.headers))
  };
  return n.rangeEnd && e.headers.set("Range", "bytes=" + n.rangeStart + "-" + String(n.rangeEnd - 1)), e;
}
function zl(n) {
  const t = ql.exec(n);
  if (t)
    return parseInt(t[2]) - parseInt(t[1]) + 1;
}
function Ql(n) {
  const t = n.get("Content-Range");
  if (t) {
    const s = zl(t);
    if (F(s))
      return s;
  }
  const e = n.get("Content-Length");
  if (e)
    return parseInt(e);
}
function Jl(n, t) {
  return new self.Request(n.url, t);
}
class Zl extends Error {
  constructor(t, e, s) {
    super(t), this.code = void 0, this.details = void 0, this.code = e, this.details = s;
  }
}
const th = /\s/, eh = {
  newCue(n, t, e, s) {
    const r = [];
    let i, a, o, l, h;
    const d = self.VTTCue || self.TextTrackCue;
    for (let u = 0; u < s.rows.length; u++)
      if (i = s.rows[u], o = !0, l = 0, h = "", !i.isEmpty()) {
        var c;
        for (let m = 0; m < i.chars.length; m++)
          th.test(i.chars[m].uchar) && o ? l++ : (h += i.chars[m].uchar, o = !1);
        i.cueStartTime = t, t === e && (e += 1e-4), l >= 16 ? l-- : l++;
        const g = xi(h.trim()), f = Ms(t, e, g);
        n != null && (c = n.cues) != null && c.getCueById(f) || (a = new d(t, e, g), a.id = f, a.line = u + 1, a.align = "left", a.position = 10 + Math.min(80, Math.floor(l * 8 / 32) * 10), r.push(a));
      }
    return n && r.length && (r.sort((u, g) => u.line === "auto" || g.line === "auto" ? 0 : u.line > 8 && g.line > 8 ? g.line - u.line : u.line - g.line), r.forEach((u) => si(n, u))), r;
  }
}, sh = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, Hi = at(at({
  autoStartLoad: !0,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: !1,
  // used by logger
  capLevelOnFPSDrop: !1,
  // used by fps-controller
  capLevelToPlayerSize: !1,
  // used by cap-level-controller
  ignoreDevicePixelRatio: !1,
  // used by cap-level-controller
  preferManagedMediaSource: !0,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller
  highBufferWatchdogPeriod: 2,
  // used by stream-controller
  nudgeOffset: 0.1,
  // used by stream-controller
  nudgeMaxRetry: 3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: !1,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: !0,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: !0,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: !1,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  loader: Vi,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: ka,
  bufferController: _o,
  capLevelController: Fs,
  errorController: pa,
  fpsController: ol,
  stretchShortVideoTrack: !1,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: !0,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: !1,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: !1,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: Gr,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableID3MetadataCues: !0,
  useMediaCapabilities: !0,
  certLoadPolicy: {
    default: sh
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, rh()), {}, {
  subtitleStreamController: Co,
  subtitleTrackController: Po,
  timelineController: nl,
  audioStreamController: bo,
  audioTrackController: ko,
  emeController: Yt,
  cmcdController: Vl,
  contentSteeringController: Yl
});
function rh() {
  return {
    cueHandler: eh,
    // used by timeline-controller
    enableWebVTT: !0,
    // used by timeline-controller
    enableIMSC1: !0,
    // used by timeline-controller
    enableCEA708Captions: !0,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: !0
  };
}
function ih(n, t) {
  if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (t.liveMaxLatencyDurationCount !== void 0 && (t.liveSyncDurationCount === void 0 || t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (t.liveMaxLatencyDuration !== void 0 && (t.liveSyncDuration === void 0 || t.liveMaxLatencyDuration <= t.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const e = Ts(n), s = ["manifest", "level", "frag"], r = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return s.forEach((i) => {
    const a = `${i === "level" ? "playlist" : i}LoadPolicy`, o = t[a] === void 0, l = [];
    r.forEach((h) => {
      const d = `${i}Loading${h}`, c = t[d];
      if (c !== void 0 && o) {
        l.push(d);
        const u = e[a].default;
        switch (t[a] = {
          default: u
        }, h) {
          case "TimeOut":
            u.maxLoadTimeMs = c, u.maxTimeToFirstByteMs = c;
            break;
          case "MaxRetry":
            u.errorRetry.maxNumRetry = c, u.timeoutRetry.maxNumRetry = c;
            break;
          case "RetryDelay":
            u.errorRetry.retryDelayMs = c, u.timeoutRetry.retryDelayMs = c;
            break;
          case "MaxRetryTimeout":
            u.errorRetry.maxRetryDelayMs = c, u.timeoutRetry.maxRetryDelayMs = c;
            break;
        }
      }
    }), l.length && v.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${a}": ${JSON.stringify(t[a])}`);
  }), at(at({}, e), t);
}
function Ts(n) {
  return n && typeof n == "object" ? Array.isArray(n) ? n.map(Ts) : Object.keys(n).reduce((t, e) => (t[e] = Ts(n[e]), t), {}) : n;
}
function nh(n) {
  const t = n.loader;
  t !== Fr && t !== Vi ? (v.log("[config]: Custom loader detected, cannot enable progressive streaming"), n.progressive = !1) : jl() && (n.loader = Fr, n.progressive = !0, n.enableSoftwareAES = !0, v.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
let is;
class ah extends Ds {
  constructor(t, e) {
    super(t, "[level-controller]"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(p.LEVEL_LOADED, this.onLevelLoaded, this), t.on(p.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(p.FRAG_BUFFERED, this.onFragBuffered, this), t.on(p.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(p.LEVEL_LOADED, this.onLevelLoaded, this), t.off(p.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(p.FRAG_BUFFERED, this.onFragBuffered, this), t.off(p.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(t, e) {
    this.resetLevels();
  }
  onManifestLoaded(t, e) {
    const s = this.hls.config.preferManagedMediaSource, r = [], i = {}, a = {};
    let o = !1, l = !1, h = !1;
    e.levels.forEach((d) => {
      var c, u;
      const g = d.attrs;
      let {
        audioCodec: f,
        videoCodec: m
      } = d;
      ((c = f) == null ? void 0 : c.indexOf("mp4a.40.34")) !== -1 && (is || (is = /chrome|firefox/i.test(navigator.userAgent)), is && (d.audioCodec = f = void 0)), f && (d.audioCodec = f = De(f, s)), ((u = m) == null ? void 0 : u.indexOf("avc1")) === 0 && (m = d.videoCodec = Yn(m));
      const {
        width: E,
        height: y,
        unknownCodecs: T
      } = d;
      if (o || (o = !!(E && y)), l || (l = !!m), h || (h = !!f), T != null && T.length || f && !Ve(f, "audio", s) || m && !Ve(m, "video", s))
        return;
      const {
        CODECS: A,
        "FRAME-RATE": R,
        "HDCP-LEVEL": S,
        "PATHWAY-ID": I,
        RESOLUTION: b,
        "VIDEO-RANGE": x
      } = g, O = `${`${I || "."}-`}${d.bitrate}-${b}-${R}-${A}-${x}-${S}`;
      if (i[O])
        if (i[O].uri !== d.url && !d.attrs["PATHWAY-ID"]) {
          const C = a[O] += 1;
          d.attrs["PATHWAY-ID"] = new Array(C + 1).join(".");
          const w = new jt(d);
          i[O] = w, r.push(w);
        } else
          i[O].addGroupId("audio", g.AUDIO), i[O].addGroupId("text", g.SUBTITLES);
      else {
        const C = new jt(d);
        i[O] = C, a[O] = 1, r.push(C);
      }
    }), this.filterAndSortMediaOptions(r, e, o, l, h);
  }
  filterAndSortMediaOptions(t, e, s, r, i) {
    let a = [], o = [], l = t;
    if ((s || r) && i && (l = l.filter(({
      videoCodec: f,
      videoRange: m,
      width: E,
      height: y
    }) => (!!f || !!(E && y)) && ia(m))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          e.levels.length && this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(e.levels[0].attrs)}`);
          const f = new Error("no level with compatible codecs found in manifest");
          this.hls.trigger(p.ERROR, {
            type: $.MEDIA_ERROR,
            details: D.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: e.url,
            error: f,
            reason: f.message
          });
        }
      });
      return;
    }
    if (e.audioTracks) {
      const {
        preferManagedMediaSource: f
      } = this.hls.config;
      a = e.audioTracks.filter((m) => !m.audioCodec || Ve(m.audioCodec, "audio", f)), Nr(a);
    }
    e.subtitles && (o = e.subtitles, Nr(o));
    const h = l.slice(0);
    l.sort((f, m) => {
      if (f.attrs["HDCP-LEVEL"] !== m.attrs["HDCP-LEVEL"])
        return (f.attrs["HDCP-LEVEL"] || "") > (m.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (s && f.height !== m.height)
        return f.height - m.height;
      if (f.frameRate !== m.frameRate)
        return f.frameRate - m.frameRate;
      if (f.videoRange !== m.videoRange)
        return Ie.indexOf(f.videoRange) - Ie.indexOf(m.videoRange);
      if (f.videoCodec !== m.videoCodec) {
        const E = Hs(f.videoCodec), y = Hs(m.videoCodec);
        if (E !== y)
          return y - E;
      }
      if (f.uri === m.uri && f.codecSet !== m.codecSet) {
        const E = Re(f.codecSet), y = Re(m.codecSet);
        if (E !== y)
          return y - E;
      }
      return f.averageBitrate !== m.averageBitrate ? f.averageBitrate - m.averageBitrate : 0;
    });
    let d = h[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== h.length)) {
      for (let f = 0; f < h.length; f++)
        if (h[f].pathwayId === l[0].pathwayId) {
          d = h[f];
          break;
        }
    }
    this._levels = l;
    for (let f = 0; f < l.length; f++)
      if (l[f] === d) {
        var c;
        this._firstLevel = f;
        const m = d.bitrate, E = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${m}`), ((c = this.hls.userConfig) == null ? void 0 : c.abrEwmaDefaultEstimate) === void 0) {
          const y = Math.min(m, this.hls.config.abrEwmaDefaultEstimateMax);
          y > E && E === Hi.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = y);
        }
        break;
      }
    const u = i && !r, g = {
      levels: l,
      audioTracks: a,
      subtitleTracks: o,
      sessionData: e.sessionData,
      sessionKeys: e.sessionKeys,
      firstLevel: this._firstLevel,
      stats: e.stats,
      audio: i,
      video: r,
      altAudio: !u && a.some((f) => !!f.url)
    };
    this.hls.trigger(p.MANIFEST_PARSED, g), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(t) {
    const e = this._levels;
    if (e.length === 0)
      return;
    if (t < 0 || t >= e.length) {
      const d = new Error("invalid level idx"), c = t < 0;
      if (this.hls.trigger(p.ERROR, {
        type: $.OTHER_ERROR,
        details: D.LEVEL_SWITCH_ERROR,
        level: t,
        fatal: c,
        error: d,
        reason: d.message
      }), c)
        return;
      t = Math.min(t, e.length - 1);
    }
    const s = this.currentLevelIndex, r = this.currentLevel, i = r ? r.attrs["PATHWAY-ID"] : void 0, a = e[t], o = a.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = t, this.currentLevel = a, s === t && a.details && r && i === o)
      return;
    this.log(`Switching to level ${t} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${o ? " with Pathway " + o : ""} from level ${s}${i ? " with Pathway " + i : ""}`);
    const l = {
      level: t,
      attrs: a.attrs,
      details: a.details,
      bitrate: a.bitrate,
      averageBitrate: a.averageBitrate,
      maxBitrate: a.maxBitrate,
      realBitrate: a.realBitrate,
      width: a.width,
      height: a.height,
      codecSet: a.codecSet,
      audioCodec: a.audioCodec,
      videoCodec: a.videoCodec,
      audioGroups: a.audioGroups,
      subtitleGroups: a.subtitleGroups,
      loaded: a.loaded,
      loadError: a.loadError,
      fragmentError: a.fragmentError,
      name: a.name,
      id: a.id,
      uri: a.uri,
      url: a.url,
      urlId: 0,
      audioGroupIds: a.audioGroupIds,
      textGroupIds: a.textGroupIds
    };
    this.hls.trigger(p.LEVEL_SWITCHING, l);
    const h = a.details;
    if (!h || h.live) {
      const d = this.switchParams(a.uri, r == null ? void 0 : r.details, h);
      this.loadPlaylist(d);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(t) {
    this.manualLevelIndex = t, this._startLevel === void 0 && (this._startLevel = t), t !== -1 && (this.level = t);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(t) {
    this._firstLevel = t;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const t = this.hls.config.startLevel;
      return t !== void 0 ? t : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(t) {
    this._startLevel = t;
  }
  onError(t, e) {
    e.fatal || !e.context || e.context.type === W.LEVEL && e.context.level === this.level && this.checkRetry(e);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(t, {
    frag: e
  }) {
    if (e !== void 0 && e.type === B.MAIN) {
      const s = e.elementaryStreams;
      if (!Object.keys(s).some((i) => !!s[i]))
        return;
      const r = this._levels[e.level];
      r != null && r.loadError && (this.log(`Resetting level error count of ${r.loadError} on frag buffered`), r.loadError = 0);
    }
  }
  onLevelLoaded(t, e) {
    var s;
    const {
      level: r,
      details: i
    } = e, a = this._levels[r];
    if (!a) {
      var o;
      this.warn(`Invalid level index ${r}`), (o = e.deliveryDirectives) != null && o.skip && (i.deltaUpdateFailed = !0);
      return;
    }
    r === this.currentLevelIndex ? (a.fragmentError === 0 && (a.loadError = 0), this.playlistLoaded(r, e, a.details)) : (s = e.deliveryDirectives) != null && s.skip && (i.deltaUpdateFailed = !0);
  }
  loadPlaylist(t) {
    super.loadPlaylist();
    const e = this.currentLevelIndex, s = this.currentLevel;
    if (s && this.shouldLoadPlaylist(s)) {
      let r = s.uri;
      if (t)
        try {
          r = t.addDirectives(r);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      const i = s.attrs["PATHWAY-ID"];
      this.log(`Loading level index ${e}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""} with${i ? " Pathway " + i : ""} ${r}`), this.clearTimer(), this.hls.trigger(p.LEVEL_LOADING, {
        url: r,
        level: e,
        pathwayId: s.attrs["PATHWAY-ID"],
        id: 0,
        // Deprecated Level urlId
        deliveryDirectives: t || null
      });
    }
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(t) {
    this.level = t, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = t);
  }
  removeLevel(t) {
    var e;
    const s = this._levels.filter((r, i) => i !== t ? !0 : (this.steering && this.steering.removeLevel(r), r === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, r.details && r.details.fragments.forEach((a) => a.level = -1)), !1));
    ai(s), this._levels = s, this.currentLevelIndex > -1 && (e = this.currentLevel) != null && e.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(p.LEVELS_UPDATED, {
      levels: s
    });
  }
  onLevelsUpdated(t, {
    levels: e
  }) {
    this._levels = e;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: t,
      maxAutoLevel: e,
      maxHdcpLevel: s
    } = this.hls;
    this._maxAutoLevel !== e && (this._maxAutoLevel = e, this.hls.trigger(p.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: t,
      levels: this.levels,
      maxAutoLevel: e,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: s
    }));
  }
}
function Nr(n) {
  const t = {};
  n.forEach((e) => {
    const s = e.groupId || "";
    e.id = t[s] = t[s] || 0, t[s]++;
  });
}
class oh {
  constructor(t) {
    this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = t;
  }
  abort(t) {
    for (const s in this.keyUriToKeyInfo) {
      const r = this.keyUriToKeyInfo[s].loader;
      if (r) {
        var e;
        if (t && t !== ((e = r.context) == null ? void 0 : e.frag.type))
          return;
        r.abort();
      }
    }
  }
  detach() {
    for (const t in this.keyUriToKeyInfo) {
      const e = this.keyUriToKeyInfo[t];
      (e.mediaKeySessionContext || e.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[t];
    }
  }
  destroy() {
    this.detach();
    for (const t in this.keyUriToKeyInfo) {
      const e = this.keyUriToKeyInfo[t].loader;
      e && e.destroy();
    }
    this.keyUriToKeyInfo = {};
  }
  createKeyLoadError(t, e = D.KEY_LOAD_ERROR, s, r, i) {
    return new kt({
      type: $.NETWORK_ERROR,
      details: e,
      fatal: !1,
      frag: t,
      response: i,
      error: s,
      networkDetails: r
    });
  }
  loadClear(t, e) {
    if (this.emeController && this.config.emeEnabled) {
      const {
        sn: s,
        cc: r
      } = t;
      for (let i = 0; i < e.length; i++) {
        const a = e[i];
        if (r <= a.cc && (s === "initSegment" || a.sn === "initSegment" || s < a.sn)) {
          this.emeController.selectKeySystemFormat(a).then((o) => {
            a.setKeyFormat(o);
          });
          break;
        }
      }
    }
  }
  load(t) {
    return !t.decryptdata && t.encrypted && this.emeController && this.config.emeEnabled ? this.emeController.selectKeySystemFormat(t).then((e) => this.loadInternal(t, e)) : this.loadInternal(t);
  }
  loadInternal(t, e) {
    var s, r;
    e && t.setKeyFormat(e);
    const i = t.decryptdata;
    if (!i) {
      const h = new Error(e ? `Expected frag.decryptdata to be defined after setting format ${e}` : "Missing decryption data on fragment in onKeyLoading");
      return Promise.reject(this.createKeyLoadError(t, D.KEY_LOAD_ERROR, h));
    }
    const a = i.uri;
    if (!a)
      return Promise.reject(this.createKeyLoadError(t, D.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${a}"`)));
    let o = this.keyUriToKeyInfo[a];
    if ((s = o) != null && s.decryptdata.key)
      return i.key = o.decryptdata.key, Promise.resolve({
        frag: t,
        keyInfo: o
      });
    if ((r = o) != null && r.keyLoadPromise) {
      var l;
      switch ((l = o.mediaKeySessionContext) == null ? void 0 : l.keyStatus) {
        case void 0:
        case "status-pending":
        case "usable":
        case "usable-in-future":
          return o.keyLoadPromise.then((h) => (i.key = h.keyInfo.decryptdata.key, {
            frag: t,
            keyInfo: o
          }));
      }
    }
    switch (o = this.keyUriToKeyInfo[a] = {
      decryptdata: i,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, i.method) {
      case "ISO-23001-7":
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return i.keyFormat === "identity" ? this.loadKeyHTTP(o, t) : this.loadKeyEME(o, t);
      case "AES-128":
        return this.loadKeyHTTP(o, t);
      default:
        return Promise.reject(this.createKeyLoadError(t, D.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${i.method}"`)));
    }
  }
  loadKeyEME(t, e) {
    const s = {
      frag: e,
      keyInfo: t
    };
    if (this.emeController && this.config.emeEnabled) {
      const r = this.emeController.loadKey(s);
      if (r)
        return (t.keyLoadPromise = r.then((i) => (t.mediaKeySessionContext = i, s))).catch((i) => {
          throw t.keyLoadPromise = null, i;
        });
    }
    return Promise.resolve(s);
  }
  loadKeyHTTP(t, e) {
    const s = this.config, r = s.loader, i = new r(s);
    return e.keyLoader = t.loader = i, t.keyLoadPromise = new Promise((a, o) => {
      const l = {
        keyInfo: t,
        frag: e,
        responseType: "arraybuffer",
        url: t.decryptdata.uri
      }, h = s.keyLoadPolicy.default, d = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, c = {
        onSuccess: (u, g, f, m) => {
          const {
            frag: E,
            keyInfo: y,
            url: T
          } = f;
          if (!E.decryptdata || y !== this.keyUriToKeyInfo[T])
            return o(this.createKeyLoadError(E, D.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), m));
          y.decryptdata.key = E.decryptdata.key = new Uint8Array(u.data), E.keyLoader = null, y.loader = null, a({
            frag: E,
            keyInfo: y
          });
        },
        onError: (u, g, f, m) => {
          this.resetLoader(g), o(this.createKeyLoadError(e, D.KEY_LOAD_ERROR, new Error(`HTTP Error ${u.code} loading key ${u.text}`), f, at({
            url: l.url,
            data: void 0
          }, u)));
        },
        onTimeout: (u, g, f) => {
          this.resetLoader(g), o(this.createKeyLoadError(e, D.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), f));
        },
        onAbort: (u, g, f) => {
          this.resetLoader(g), o(this.createKeyLoadError(e, D.INTERNAL_ABORTED, new Error("key loading aborted"), f));
        }
      };
      i.load(l, d, c);
    });
  }
  resetLoader(t) {
    const {
      frag: e,
      keyInfo: s,
      url: r
    } = t, i = s.loader;
    e.keyLoader === i && (e.keyLoader = null, s.loader = null), delete this.keyUriToKeyInfo[r], i && i.destroy();
  }
}
function Yi() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function Wi() {
  if (!Ut())
    return !1;
  const n = Yi();
  return !n || n.prototype && typeof n.prototype.appendBuffer == "function" && typeof n.prototype.remove == "function";
}
function lh() {
  if (!Wi())
    return !1;
  const n = Ut();
  return typeof (n == null ? void 0 : n.isTypeSupported) == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((t) => n.isTypeSupported(Zt(t, "video"))) || ["mp4a.40.2", "fLaC"].some((t) => n.isTypeSupported(Zt(t, "audio"))));
}
function hh() {
  var n;
  const t = Yi();
  return typeof (t == null || (n = t.prototype) == null ? void 0 : n.changeType) == "function";
}
const dh = 250, Se = 2, ch = 0.1, uh = 0.05;
class fh {
  constructor(t, e, s, r) {
    this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = s, this.hls = r;
  }
  destroy() {
    this.media = null, this.hls = this.fragmentTracker = null;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(t, e) {
    const {
      config: s,
      media: r,
      stalled: i
    } = this;
    if (r === null)
      return;
    const {
      currentTime: a,
      seeking: o
    } = r, l = this.seeking && !o, h = !this.seeking && o;
    if (this.seeking = o, a !== t) {
      if (this.moved = !0, o || (this.nudgeRetry = 0), i !== null) {
        if (this.stallReported) {
          const E = self.performance.now() - i;
          v.warn(`playback not stuck anymore @${a}, after ${Math.round(E)}ms`), this.stallReported = !1;
        }
        this.stalled = null;
      }
      return;
    }
    if (h || l) {
      this.stalled = null;
      return;
    }
    if (r.paused && !o || r.ended || r.playbackRate === 0 || !Q.getBuffered(r).length) {
      this.nudgeRetry = 0;
      return;
    }
    const d = Q.bufferInfo(r, a, 0), c = d.nextStart || 0;
    if (o) {
      const E = d.len > Se, y = !c || e && e.start <= a || c - a > Se && !this.fragmentTracker.getPartialFragment(a);
      if (E || y)
        return;
      this.moved = !1;
    }
    if (!this.moved && this.stalled !== null) {
      var u;
      if (!(d.len > 0) && !c)
        return;
      const E = Math.max(c, d.start || 0) - a, y = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, T = !(y == null || (u = y.details) == null) && u.live ? y.details.targetduration * 2 : Se, A = this.fragmentTracker.getPartialFragment(a);
      if (E > 0 && (E <= T || A)) {
        r.paused || this._trySkipBufferHole(A);
        return;
      }
    }
    const g = self.performance.now();
    if (i === null) {
      this.stalled = g;
      return;
    }
    const f = g - i;
    if (!o && f >= dh && (this._reportStall(d), !this.media))
      return;
    const m = Q.bufferInfo(r, a, s.maxBufferHole);
    this._tryFixBufferStall(m, f);
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(t, e) {
    const {
      config: s,
      fragmentTracker: r,
      media: i
    } = this;
    if (i === null)
      return;
    const a = i.currentTime, o = r.getPartialFragment(a);
    o && (this._trySkipBufferHole(o) || !this.media) || (t.len > s.maxBufferHole || t.nextStart && t.nextStart - a < s.maxBufferHole) && e > s.highBufferWatchdogPeriod * 1e3 && (v.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(t) {
    const {
      hls: e,
      media: s,
      stallReported: r
    } = this;
    if (!r && s) {
      this.stallReported = !0;
      const i = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${JSON.stringify(t)})`);
      v.warn(i.message), e.trigger(p.ERROR, {
        type: $.MEDIA_ERROR,
        details: D.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: i,
        buffer: t.len
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param partial - The partial fragment found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(t) {
    const {
      config: e,
      hls: s,
      media: r
    } = this;
    if (r === null)
      return 0;
    const i = r.currentTime, a = Q.bufferInfo(r, i, 0), o = i < a.start ? a.start : a.nextStart;
    if (o) {
      const l = a.len <= e.maxBufferHole, h = a.len > 0 && a.len < 1 && r.readyState < 3, d = o - i;
      if (d > 0 && (l || h)) {
        if (d > e.maxBufferHole) {
          const {
            fragmentTracker: u
          } = this;
          let g = !1;
          if (i === 0) {
            const f = u.getAppendedFrag(0, B.MAIN);
            f && o < f.end && (g = !0);
          }
          if (!g) {
            const f = t || u.getAppendedFrag(i, B.MAIN);
            if (f) {
              let m = !1, E = f.end;
              for (; E < o; ) {
                const y = u.getPartialFragment(E);
                if (y)
                  E += y.duration;
                else {
                  m = !0;
                  break;
                }
              }
              if (m)
                return 0;
            }
          }
        }
        const c = Math.max(o + uh, i + ch);
        if (v.warn(`skipping hole, adjusting currentTime from ${i} to ${c}`), this.moved = !0, this.stalled = null, r.currentTime = c, t && !t.gap) {
          const u = new Error(`fragment loaded with buffer holes, seeking from ${i} to ${c}`);
          s.trigger(p.ERROR, {
            type: $.MEDIA_ERROR,
            details: D.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: u,
            reason: u.message,
            frag: t
          });
        }
        return c;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer() {
    const {
      config: t,
      hls: e,
      media: s,
      nudgeRetry: r
    } = this;
    if (s === null)
      return;
    const i = s.currentTime;
    if (this.nudgeRetry++, r < t.nudgeMaxRetry) {
      const a = i + (r + 1) * t.nudgeOffset, o = new Error(`Nudging 'currentTime' from ${i} to ${a}`);
      v.warn(o.message), s.currentTime = a, e.trigger(p.ERROR, {
        type: $.MEDIA_ERROR,
        details: D.BUFFER_NUDGE_ON_STALL,
        error: o,
        fatal: !1
      });
    } else {
      const a = new Error(`Playhead still not moving while enough data buffered @${i} after ${t.nudgeMaxRetry} nudges`);
      v.error(a.message), e.trigger(p.ERROR, {
        type: $.MEDIA_ERROR,
        details: D.BUFFER_STALLED_ERROR,
        error: a,
        fatal: !0
      });
    }
  }
}
const gh = 100;
class mh extends ks {
  constructor(t, e, s) {
    super(t, e, s, "[stream-controller]", B.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: t
    } = this;
    t.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(p.MANIFEST_LOADING, this.onManifestLoading, this), t.on(p.MANIFEST_PARSED, this.onManifestParsed, this), t.on(p.LEVEL_LOADING, this.onLevelLoading, this), t.on(p.LEVEL_LOADED, this.onLevelLoaded, this), t.on(p.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(p.ERROR, this.onError, this), t.on(p.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(p.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(p.BUFFER_CREATED, this.onBufferCreated, this), t.on(p.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(p.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: t
    } = this;
    t.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(p.MANIFEST_LOADING, this.onManifestLoading, this), t.off(p.MANIFEST_PARSED, this.onManifestParsed, this), t.off(p.LEVEL_LOADED, this.onLevelLoaded, this), t.off(p.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(p.ERROR, this.onError, this), t.off(p.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(p.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(p.BUFFER_CREATED, this.onBufferCreated, this), t.off(p.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(p.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(t) {
    if (this.levels) {
      const {
        lastCurrentTime: e,
        hls: s
      } = this;
      if (this.stopLoad(), this.setInterval(gh), this.level = -1, !this.startFragRequested) {
        let r = s.startLevel;
        r === -1 && (s.config.testBandwidth && this.levels.length > 1 ? (r = 0, this.bitrateTest = !0) : r = s.firstAutoLevel), s.nextLoadLevel = r, this.level = s.loadLevel, this.loadedmetadata = !1;
      }
      e > 0 && t === -1 && (this.log(`Override startPosition with lastCurrentTime @${e.toFixed(3)}`), t = e), this.state = k.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick();
    } else
      this._forceStartLoad = !0, this.state = k.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case k.WAITING_LEVEL: {
        const {
          levels: e,
          level: s
        } = this, r = e == null ? void 0 : e[s], i = r == null ? void 0 : r.details;
        if (i && (!i.live || this.levelLastLoaded === r)) {
          if (this.waitForCdnTuneIn(i))
            break;
          this.state = k.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = k.IDLE;
          break;
        }
        break;
      }
      case k.FRAG_LOADING_WAITING_RETRY:
        {
          var t;
          const e = self.performance.now(), s = this.retryDate;
          if (!s || e >= s || (t = this.media) != null && t.seeking) {
            const {
              levels: r,
              level: i
            } = this, a = r == null ? void 0 : r[i];
            this.resetStartWhenNotLoaded(a || null), this.state = k.IDLE;
          }
        }
        break;
    }
    this.state === k.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: t,
      levelLastLoaded: e,
      levels: s,
      media: r
    } = this;
    if (e === null || !r && (this.startFragRequested || !t.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const i = this.buffering ? t.nextLoadLevel : t.loadLevel;
    if (!(s != null && s[i]))
      return;
    const a = s[i], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const l = this.getLevelDetails();
    if (l && this._streamEnded(o, l)) {
      const m = {};
      this.altAudio && (m.type = "video"), this.hls.trigger(p.BUFFER_EOS, m), this.state = k.ENDED;
      return;
    }
    if (!this.buffering)
      return;
    t.loadLevel !== i && t.manualLevel === -1 && this.log(`Adapting to level ${i} from level ${this.level}`), this.level = t.nextLoadLevel = i;
    const h = a.details;
    if (!h || this.state === k.WAITING_LEVEL || h.live && this.levelLastLoaded !== a) {
      this.level = i, this.state = k.WAITING_LEVEL;
      return;
    }
    const d = o.len, c = this.getMaxBufferLength(a.maxBitrate);
    if (d >= c)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const u = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let g = this.getNextFragment(u, h);
    if (this.couldBacktrack && !this.fragPrevious && g && g.sn !== "initSegment" && this.fragmentTracker.getState(g) !== nt.OK) {
      var f;
      const m = ((f = this.backtrackFragment) != null ? f : g).sn - h.startSN, E = h.fragments[m - 1];
      E && g.cc === E.cc && (g = E, this.fragmentTracker.removeFragment(E));
    } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (g && this.isLoopLoading(g, u)) {
      if (!g.gap) {
        const m = this.audioOnly && !this.altAudio ? z.AUDIO : z.VIDEO, E = (m === z.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        E && this.afterBufferFlushed(E, m, B.MAIN);
      }
      g = this.getNextFragmentLoopLoading(g, h, o, B.MAIN, c);
    }
    g && (g.initSegment && !g.initSegment.data && !this.bitrateTest && (g = g.initSegment), this.loadFragment(g, a, u));
  }
  loadFragment(t, e, s) {
    const r = this.fragmentTracker.getState(t);
    this.fragCurrent = t, r === nt.NOT_LOADED || r === nt.PARTIAL ? t.sn === "initSegment" ? this._loadInitSegment(t, e) : this.bitrateTest ? (this.log(`Fragment ${t.sn} of level ${t.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(t, e)) : (this.startFragRequested = !0, super.loadFragment(t, e, s)) : this.clearTrackerIfNeeded(t);
  }
  getBufferedFrag(t) {
    return this.fragmentTracker.getBufferedFrag(t, B.MAIN);
  }
  followingBufferedFrag(t) {
    return t ? this.getBufferedFrag(t.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: t,
      media: e
    } = this;
    if (e != null && e.readyState) {
      let s;
      const r = this.getAppendedFrag(e.currentTime);
      r && r.start > 1 && this.flushMainBuffer(0, r.start - 1);
      const i = this.getLevelDetails();
      if (i != null && i.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < i.targetduration * 2)
          return;
      }
      if (!e.paused && t) {
        const o = this.hls.nextLoadLevel, l = t[o], h = this.fragLastKbps;
        h && this.fragCurrent ? s = this.fragCurrent.duration * l.maxBitrate / (1e3 * h) + 1 : s = 0;
      } else
        s = 0;
      const a = this.getBufferedFrag(e.currentTime + s);
      if (a) {
        const o = this.followingBufferedFrag(a);
        if (o) {
          this.abortCurrentFrag();
          const l = o.maxStartPTS ? o.maxStartPTS : o.start, h = o.duration, d = Math.max(a.end, l + Math.min(Math.max(h - this.config.maxFragLookUpTolerance, h * (this.couldBacktrack ? 0.5 : 0.125)), h * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(d, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const t = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, t && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.state) {
      case k.KEY_LOADING:
      case k.FRAG_LOADING:
      case k.FRAG_LOADING_WAITING_RETRY:
      case k.PARSING:
      case k.PARSED:
        this.state = k.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(t, e) {
    super.flushMainBuffer(t, e, this.altAudio ? "video" : null);
  }
  onMediaAttached(t, e) {
    super.onMediaAttached(t, e);
    const s = e.media;
    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), s.addEventListener("playing", this.onvplaying), s.addEventListener("seeked", this.onvseeked), this.gapController = new fh(this.config, s, this.fragmentTracker, this.hls);
  }
  onMediaDetaching() {
    const {
      media: t
    } = this;
    t && this.onvplaying && this.onvseeked && (t.removeEventListener("playing", this.onvplaying), t.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching();
  }
  onMediaPlaying() {
    this.tick();
  }
  onMediaSeeked() {
    const t = this.media, e = t ? t.currentTime : null;
    F(e) && this.log(`Media seeked to ${e.toFixed(3)}`);
    const s = this.getMainFwdBufferInfo();
    if (s === null || s.len === 0) {
      this.warn(`Main forward buffer length on "seeked" event ${s ? s.len : "empty"})`);
      return;
    }
    this.tick();
  }
  onManifestLoading() {
    this.log("Trigger BUFFER_RESET"), this.hls.trigger(p.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = !1;
  }
  onManifestParsed(t, e) {
    let s = !1, r = !1;
    e.levels.forEach((i) => {
      const a = i.audioCodec;
      a && (s = s || a.indexOf("mp4a.40.2") !== -1, r = r || a.indexOf("mp4a.40.5") !== -1);
    }), this.audioCodecSwitch = s && r && !hh(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1;
  }
  onLevelLoading(t, e) {
    const {
      levels: s
    } = this;
    if (!s || this.state !== k.IDLE)
      return;
    const r = s[e.level];
    (!r.details || r.details.live && this.levelLastLoaded !== r || this.waitForCdnTuneIn(r.details)) && (this.state = k.WAITING_LEVEL);
  }
  onLevelLoaded(t, e) {
    var s;
    const {
      levels: r
    } = this, i = e.level, a = e.details, o = a.totalduration;
    if (!r) {
      this.warn(`Levels were reset while loading level ${i}`);
      return;
    }
    this.log(`Level ${i} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""}, cc [${a.startCC}, ${a.endCC}] duration:${o}`);
    const l = r[i], h = this.fragCurrent;
    h && (this.state === k.FRAG_LOADING || this.state === k.FRAG_LOADING_WAITING_RETRY) && h.level !== e.level && h.loader && this.abortCurrentFrag();
    let d = 0;
    if (a.live || (s = l.details) != null && s.live) {
      var c;
      if (this.checkLiveUpdate(a), a.deltaUpdateFailed)
        return;
      d = this.alignPlaylists(a, l.details, (c = this.levelLastLoaded) == null ? void 0 : c.details);
    }
    if (l.details = a, this.levelLastLoaded = l, this.hls.trigger(p.LEVEL_UPDATED, {
      details: a,
      level: i
    }), this.state === k.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(a))
        return;
      this.state = k.IDLE;
    }
    this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, d), this.tick();
  }
  _handleFragmentLoadProgress(t) {
    var e;
    const {
      frag: s,
      part: r,
      payload: i
    } = t, {
      levels: a
    } = this;
    if (!a) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const o = a[s.level], l = o.details;
    if (!l) {
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return;
    }
    const h = o.videoCodec, d = l.PTSKnown || !l.live, c = (e = s.initSegment) == null ? void 0 : e.data, u = this._getAudioCodec(o), g = this.transmuxer = this.transmuxer || new Ii(this.hls, B.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), f = r ? r.index : -1, m = f !== -1, E = new Is(s.level, s.sn, s.stats.chunkCount, i.byteLength, f, m), y = this.initPTS[s.cc];
    g.push(i, c, u, h, s, r, l.totalduration, d, E, y);
  }
  onAudioTrackSwitching(t, e) {
    const s = this.altAudio;
    if (!e.url) {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const i = this.fragCurrent;
        i && (this.log("Switching to main audio track, cancel main fragment load"), i.abortRequests(), this.fragmentTracker.removeFragment(i)), this.resetTransmuxer(), this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      const r = this.hls;
      s && (r.trigger(p.BUFFER_FLUSHING, {
        startOffset: 0,
        endOffset: Number.POSITIVE_INFINITY,
        type: null
      }), this.fragmentTracker.removeAllFragments()), r.trigger(p.AUDIO_TRACK_SWITCHED, e);
    }
  }
  onAudioTrackSwitched(t, e) {
    const s = e.id, r = !!this.hls.audioTracks[s].url;
    if (r) {
      const i = this.videoBuffer;
      i && this.mediaBuffer !== i && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i);
    }
    this.altAudio = r, this.tick();
  }
  onBufferCreated(t, e) {
    const s = e.tracks;
    let r, i, a = !1;
    for (const o in s) {
      const l = s[o];
      if (l.id === "main") {
        if (i = o, r = l, o === "video") {
          const h = s[o];
          h && (this.videoBuffer = h.buffer);
        }
      } else
        a = !0;
    }
    a && r ? (this.log(`Alternate track found, use ${i}.buffered to schedule main fragment loading`), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(t, e) {
    const {
      frag: s,
      part: r
    } = e;
    if (s && s.type !== B.MAIN)
      return;
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${r ? " p: " + r.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === k.PARSED && (this.state = k.IDLE);
      return;
    }
    const i = r ? r.stats : s.stats;
    this.fragLastKbps = Math.round(8 * i.total / (i.buffering.end - i.loading.first)), s.sn !== "initSegment" && (this.fragPrevious = s), this.fragBufferedComplete(s, r);
  }
  onError(t, e) {
    var s;
    if (e.fatal) {
      this.state = k.ERROR;
      return;
    }
    switch (e.details) {
      case D.FRAG_GAP:
      case D.FRAG_PARSING_ERROR:
      case D.FRAG_DECRYPT_ERROR:
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(B.MAIN, e);
        break;
      case D.LEVEL_LOAD_ERROR:
      case D.LEVEL_LOAD_TIMEOUT:
      case D.LEVEL_PARSING_ERROR:
        !e.levelRetry && this.state === k.WAITING_LEVEL && ((s = e.context) == null ? void 0 : s.type) === W.LEVEL && (this.state = k.IDLE);
        break;
      case D.BUFFER_APPEND_ERROR:
      case D.BUFFER_FULL_ERROR:
        if (!e.parent || e.parent !== "main")
          return;
        if (e.details === D.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(e) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        break;
      case D.INTERNAL_EXCEPTION:
        this.recoverWorkerError(e);
        break;
    }
  }
  // Checks the health of the buffer and attempts to resolve playback stalls.
  checkBuffer() {
    const {
      media: t,
      gapController: e
    } = this;
    if (!(!t || !e || !t.readyState)) {
      if (this.loadedmetadata || !Q.getBuffered(t).length) {
        const s = this.state !== k.IDLE ? this.fragCurrent : null;
        e.poll(this.lastCurrentTime, s);
      }
      this.lastCurrentTime = t.currentTime;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = k.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate();
  }
  onBufferFlushed(t, {
    type: e
  }) {
    if (e !== z.AUDIO || this.audioOnly && !this.altAudio) {
      const s = (e === z.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      this.afterBufferFlushed(s, e, B.MAIN), this.tick();
    }
  }
  onLevelsUpdated(t, e) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = e.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: t
    } = this;
    if (!t)
      return;
    const e = t.currentTime;
    let s = this.startPosition;
    if (s >= 0 && e < s) {
      if (t.seeking) {
        this.log(`could not seek to ${s}, already seeking at ${e}`);
        return;
      }
      const r = Q.getBuffered(t), i = (r.length ? r.start(0) : 0) - s;
      i > 0 && (i < this.config.maxBufferHole || i < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${i} to match buffer start`), s += i, this.startPosition = s), this.log(`seek to target start position ${s} from current time ${e}`), t.currentTime = s;
    }
  }
  _getAudioCodec(t) {
    let e = this.config.defaultAudioCodec || t.audioCodec;
    return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e.indexOf("mp4a.40.5") !== -1 ? e = "mp4a.40.2" : e = "mp4a.40.5"), e;
  }
  _loadBitrateTestFrag(t, e) {
    t.bitrateTest = !0, this._doFragLoad(t, e).then((s) => {
      const {
        hls: r
      } = this;
      if (!s || this.fragContextChanged(t))
        return;
      e.fragmentError = 0, this.state = k.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const i = t.stats;
      i.parsing.start = i.parsing.end = i.buffering.start = i.buffering.end = self.performance.now(), r.trigger(p.FRAG_LOADED, s), t.bitrateTest = !1;
    });
  }
  _handleTransmuxComplete(t) {
    var e;
    const s = "main", {
      hls: r
    } = this, {
      remuxResult: i,
      chunkMeta: a
    } = t, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: l,
      part: h,
      level: d
    } = o, {
      video: c,
      text: u,
      id3: g,
      initSegment: f
    } = i, {
      details: m
    } = d, E = this.altAudio ? void 0 : i.audio;
    if (this.fragContextChanged(l)) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = k.PARSING, f) {
      if (f != null && f.tracks) {
        const A = l.initSegment || l;
        this._bufferInitSegment(d, f.tracks, A, a), r.trigger(p.FRAG_PARSING_INIT_SEGMENT, {
          frag: A,
          id: s,
          tracks: f.tracks
        });
      }
      const y = f.initPTS, T = f.timescale;
      F(y) && (this.initPTS[l.cc] = {
        baseTime: y,
        timescale: T
      }, r.trigger(p.INIT_PTS_FOUND, {
        frag: l,
        id: s,
        initPTS: y,
        timescale: T
      }));
    }
    if (c && m && l.sn !== "initSegment") {
      const y = m.fragments[l.sn - 1 - m.startSN], T = l.sn === m.startSN, A = !y || l.cc > y.cc;
      if (i.independent !== !1) {
        const {
          startPTS: R,
          endPTS: S,
          startDTS: I,
          endDTS: b
        } = c;
        if (h)
          h.elementaryStreams[c.type] = {
            startPTS: R,
            endPTS: S,
            startDTS: I,
            endDTS: b
          };
        else if (c.firstKeyFrame && c.independent && a.id === 1 && !A && (this.couldBacktrack = !0), c.dropped && c.independent) {
          const x = this.getMainFwdBufferInfo(), O = (x ? x.end : this.getLoadPosition()) + this.config.maxBufferHole, C = c.firstKeyFramePTS ? c.firstKeyFramePTS : R;
          if (!T && O < C - this.config.maxBufferHole && !A) {
            this.backtrack(l);
            return;
          } else A && (l.gap = !0);
          l.setElementaryStreamInfo(c.type, l.start, S, l.start, b, !0);
        } else T && R > Se && (l.gap = !0);
        l.setElementaryStreamInfo(c.type, R, S, I, b), this.backtrackFragment && (this.backtrackFragment = l), this.bufferFragmentData(c, l, h, a, T || A);
      } else if (T || A)
        l.gap = !0;
      else {
        this.backtrack(l);
        return;
      }
    }
    if (E) {
      const {
        startPTS: y,
        endPTS: T,
        startDTS: A,
        endDTS: R
      } = E;
      h && (h.elementaryStreams[z.AUDIO] = {
        startPTS: y,
        endPTS: T,
        startDTS: A,
        endDTS: R
      }), l.setElementaryStreamInfo(z.AUDIO, y, T, A, R), this.bufferFragmentData(E, l, h, a);
    }
    if (m && g != null && (e = g.samples) != null && e.length) {
      const y = {
        id: s,
        frag: l,
        details: m,
        samples: g.samples
      };
      r.trigger(p.FRAG_PARSING_METADATA, y);
    }
    if (m && u) {
      const y = {
        id: s,
        frag: l,
        details: m,
        samples: u.samples
      };
      r.trigger(p.FRAG_PARSING_USERDATA, y);
    }
  }
  _bufferInitSegment(t, e, s, r) {
    if (this.state !== k.PARSING)
      return;
    this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
    const {
      audio: i,
      video: a,
      audiovideo: o
    } = e;
    if (i) {
      let l = t.audioCodec;
      const h = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        l && (l.indexOf("mp4a.40.5") !== -1 ? l = "mp4a.40.2" : l = "mp4a.40.5");
        const d = i.metadata;
        d && "channelCount" in d && (d.channelCount || 1) !== 1 && h.indexOf("firefox") === -1 && (l = "mp4a.40.5");
      }
      l && l.indexOf("mp4a.40.5") !== -1 && h.indexOf("android") !== -1 && i.container !== "audio/mpeg" && (l = "mp4a.40.2", this.log(`Android: force audio codec to ${l}`)), t.audioCodec && t.audioCodec !== l && this.log(`Swapping manifest audio codec "${t.audioCodec}" for "${l}"`), i.levelCodec = l, i.id = "main", this.log(`Init audio buffer, container:${i.container}, codecs[selected/level/parsed]=[${l || ""}/${t.audioCodec || ""}/${i.codec}]`);
    }
    a && (a.levelCodec = t.videoCodec, a.id = "main", this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${t.videoCodec || ""}/${a.codec}]`)), o && this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${t.codecs}/${o.codec}]`), this.hls.trigger(p.BUFFER_CODECS, e), Object.keys(e).forEach((l) => {
      const h = e[l].initSegment;
      h != null && h.byteLength && this.hls.trigger(p.BUFFER_APPENDING, {
        type: l,
        data: h,
        frag: s,
        part: null,
        chunkMeta: r,
        parent: s.type
      });
    }), this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, B.MAIN);
  }
  backtrack(t) {
    this.couldBacktrack = !0, this.backtrackFragment = t, this.resetTransmuxer(), this.flushBufferGap(t), this.fragmentTracker.removeFragment(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = k.IDLE;
  }
  checkFragmentChanged() {
    const t = this.media;
    let e = null;
    if (t && t.readyState > 1 && t.seeking === !1) {
      const s = t.currentTime;
      if (Q.isBuffered(t, s) ? e = this.getAppendedFrag(s) : Q.isBuffered(t, s + 0.1) && (e = this.getAppendedFrag(s + 0.1)), e) {
        this.backtrackFragment = null;
        const r = this.fragPlaying, i = e.level;
        (!r || e.sn !== r.sn || r.level !== i) && (this.fragPlaying = e, this.hls.trigger(p.FRAG_CHANGED, {
          frag: e
        }), (!r || r.level !== i) && this.hls.trigger(p.LEVEL_SWITCHED, {
          level: i
        }));
      }
    }
  }
  get nextLevel() {
    const t = this.nextBufferedFrag;
    return t ? t.level : -1;
  }
  get currentFrag() {
    const t = this.media;
    return t ? this.fragPlaying || this.getAppendedFrag(t.currentTime) : null;
  }
  get currentProgramDateTime() {
    const t = this.media;
    if (t) {
      const e = t.currentTime, s = this.currentFrag;
      if (s && F(e) && F(s.programDateTime)) {
        const r = s.programDateTime + (e - s.start) * 1e3;
        return new Date(r);
      }
    }
    return null;
  }
  get currentLevel() {
    const t = this.currentFrag;
    return t ? t.level : -1;
  }
  get nextBufferedFrag() {
    const t = this.currentFrag;
    return t ? this.followingBufferedFrag(t) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class Ht {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return "1.5.20";
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return Wi();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return lh();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return Ut();
  }
  static get Events() {
    return p;
  }
  static get ErrorTypes() {
    return $;
  }
  static get ErrorDetails() {
    return D;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return Ht.defaultConfig ? Ht.defaultConfig : Hi;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(t) {
    Ht.defaultConfig = t;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(t = {}) {
    this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = !1, this._emitter = new _s(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, en(t.debug || !1, "Hls instance");
    const e = this.config = ih(Ht.DefaultConfig, t);
    this.userConfig = t, e.progressive && nh(e);
    const {
      abrController: s,
      bufferController: r,
      capLevelController: i,
      errorController: a,
      fpsController: o
    } = e, l = new a(this), h = this.abrController = new s(this), d = this.bufferController = new r(this), c = this.capLevelController = new i(this), u = new o(this), g = new zn(this), f = new ea(this), m = e.contentSteeringController, E = m ? new m(this) : null, y = this.levelController = new ah(this, E), T = new wa(this), A = new oh(this.config), R = this.streamController = new mh(this, T, A);
    c.setStreamController(R), u.setStreamController(R);
    const S = [g, y, R];
    E && S.splice(1, 0, E), this.networkControllers = S;
    const I = [h, d, c, u, f, T];
    this.audioTrackController = this.createController(e.audioTrackController, S);
    const b = e.audioStreamController;
    b && S.push(new b(this, T, A)), this.subtitleTrackController = this.createController(e.subtitleTrackController, S);
    const x = e.subtitleStreamController;
    x && S.push(new x(this, T, A)), this.createController(e.timelineController, I), A.emeController = this.emeController = this.createController(e.emeController, I), this.cmcdController = this.createController(e.cmcdController, I), this.latencyController = this.createController(sa, I), this.coreComponents = I, S.push(l);
    const O = l.onErrorOut;
    typeof O == "function" && this.on(p.ERROR, O, l);
  }
  createController(t, e) {
    if (t) {
      const s = new t(this);
      return e && e.push(s), s;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(t, e, s = this) {
    this._emitter.on(t, e, s);
  }
  once(t, e, s = this) {
    this._emitter.once(t, e, s);
  }
  removeAllListeners(t) {
    this._emitter.removeAllListeners(t);
  }
  off(t, e, s = this, r) {
    this._emitter.off(t, e, s, r);
  }
  listeners(t) {
    return this._emitter.listeners(t);
  }
  emit(t, e, s) {
    return this._emitter.emit(t, e, s);
  }
  trigger(t, e) {
    if (this.config.debug)
      return this.emit(t, t, e);
    try {
      return this.emit(t, t, e);
    } catch (s) {
      if (v.error("An internal error happened while handling event " + t + '. Error message: "' + s.message + '". Here is a stacktrace:', s), !this.triggeringException) {
        this.triggeringException = !0;
        const r = t === p.ERROR;
        this.trigger(p.ERROR, {
          type: $.OTHER_ERROR,
          details: D.INTERNAL_EXCEPTION,
          fatal: r,
          event: t,
          error: s
        }), this.triggeringException = !1;
      }
    }
    return !1;
  }
  listenerCount(t) {
    return this._emitter.listenerCount(t);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    v.log("destroy"), this.trigger(p.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((e) => e.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((e) => e.destroy()), this.coreComponents.length = 0;
    const t = this.config;
    t.xhrSetup = t.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(t) {
    v.log("attachMedia"), this._media = t, this.trigger(p.MEDIA_ATTACHING, {
      media: t
    });
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    v.log("detachMedia"), this.trigger(p.MEDIA_DETACHING, void 0), this._media = null;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(t) {
    this.stopLoad();
    const e = this.media, s = this.url, r = this.url = vs.buildAbsoluteURL(self.location.href, t, {
      alwaysNormalize: !0
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, v.log(`loadSource:${r}`), e && s && (s !== r || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e)), this.trigger(p.MANIFEST_LOADING, {
      url: t
    });
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(t = -1) {
    v.log(`startLoad(${t})`), this.started = !0, this.resumeBuffering();
    for (let e = 0; e < this.networkControllers.length && (this.networkControllers[e].startLoad(t), !(!this.started || !this.networkControllers)); e++)
      ;
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    v.log("stopLoad"), this.started = !1;
    for (let t = 0; t < this.networkControllers.length && (this.networkControllers[t].stopLoad(), !(this.started || !this.networkControllers)); t++)
      ;
  }
  /**
   * Resumes stream controller segment loading after `pauseBuffering` has been called.
   */
  resumeBuffering() {
    v.log("resume buffering"), this.networkControllers.forEach((t) => {
      t.resumeBuffering && t.resumeBuffering();
    });
  }
  /**
   * Prevents stream controller from loading new segments until `resumeBuffering` is called.
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    v.log("pause buffering"), this.networkControllers.forEach((t) => {
      t.pauseBuffering && t.pauseBuffering();
    });
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    v.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    v.log("recoverMediaError");
    const t = this._media;
    this.detachMedia(), t && this.attachMedia(t);
  }
  removeLevel(t) {
    this.levelController.removeLevel(t);
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    return this.levelController.levels || [];
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(t) {
    v.log(`set currentLevel:${t}`), this.levelController.manualLevel = t, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(t) {
    v.log(`set nextLevel:${t}`), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(t) {
    v.log(`set loadLevel:${t}`), this.levelController.manualLevel = t;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(t) {
    this.levelController.nextLoadLevel = t;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(t) {
    v.log(`set firstLevel:${t}`), this.levelController.firstLevel = t;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const t = this.levelController.startLevel;
    return t === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : t;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(t) {
    v.log(`set startLevel:${t}`), t !== -1 && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(t) {
    const e = !!t;
    e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: t
    } = this.abrController;
    return t ? t.getEstimate() : NaN;
  }
  set bandwidthEstimate(t) {
    this.abrController.resetEstimator(t);
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: t
    } = this.abrController;
    return t ? t.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(t) {
    this._autoLevelCapping !== t && (v.log(`set autoLevelCapping:${t}`), this._autoLevelCapping = t, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(t) {
    ra(t) && this._maxHdcpLevel !== t && (this._maxHdcpLevel = t, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: t,
      config: {
        minAutoBitrate: e
      }
    } = this;
    if (!t) return 0;
    const s = t.length;
    for (let r = 0; r < s; r++)
      if (t[r].maxBitrate >= e)
        return r;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: t,
      autoLevelCapping: e,
      maxHdcpLevel: s
    } = this;
    let r;
    if (e === -1 && t != null && t.length ? r = t.length - 1 : r = e, s)
      for (let i = r; i--; ) {
        const a = t[i].attrs["HDCP-LEVEL"];
        if (a && a <= s)
          return i;
      }
    return r;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(t) {
    this.abrController.nextAutoLevel = t;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(t) {
    var e;
    return (e = this.audioTrackController) == null ? void 0 : e.setAudioOption(t);
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(t) {
    var e;
    return (e = this.subtitleTrackController) == null || e.setSubtitleOption(t), null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const t = this.audioTrackController;
    return t ? t.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const t = this.audioTrackController;
    return t ? t.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const t = this.audioTrackController;
    return t ? t.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(t) {
    const e = this.audioTrackController;
    e && (e.audioTrack = t);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const t = this.subtitleTrackController;
    return t ? t.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const t = this.subtitleTrackController;
    return t ? t.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const t = this.subtitleTrackController;
    return t ? t.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(t) {
    const e = this.subtitleTrackController;
    e && (e.subtitleTrack = t);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const t = this.subtitleTrackController;
    return t ? t.subtitleDisplay : !1;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(t) {
    const e = this.subtitleTrackController;
    e && (e.subtitleDisplay = t);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(t) {
    this.config.lowLatencyMode = t;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
}
Ht.defaultConfig = void 0;
export {
  ka as AbrController,
  J as AttrList,
  bo as AudioStreamController,
  ko as AudioTrackController,
  Ds as BasePlaylistController,
  $r as BaseSegment,
  ks as BaseStreamController,
  _o as BufferController,
  Vl as CMCDController,
  Fs as CapLevelController,
  Is as ChunkMetadata,
  Yl as ContentSteeringController,
  Br as DateRange,
  Yt as EMEController,
  pt as ErrorActionFlags,
  pa as ErrorController,
  D as ErrorDetails,
  $ as ErrorTypes,
  p as Events,
  ol as FPSController,
  Fe as Fragment,
  Ht as Hls,
  me as HlsSkip,
  ir as HlsUrlParameters,
  dt as KeySystemFormats,
  X as KeySystems,
  jt as Level,
  ln as LevelDetails,
  Jt as LevelKey,
  _e as LoadStats,
  yt as MetadataSchema,
  ot as NetworkErrorAction,
  an as Part,
  B as PlaylistLevelType,
  Co as SubtitleStreamController,
  Po as SubtitleTrackController,
  nl as TimelineController,
  Ht as default,
  Ut as getMediaSource,
  Wi as isMSESupported,
  lh as isSupported
};
