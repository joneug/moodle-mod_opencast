var Dn = (i) => {
  throw TypeError(i);
}, Pi = (i, e, t) => e.has(i) || Dn("Cannot " + t), f = (i, e, t) => (Pi(i, e, "read from private field"), t ? t.call(i) : e.get(i)), k = (i, e, t) => e.has(i) ? Dn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), x = (i, e, t, n) => (Pi(i, e, "write to private field"), e.set(i, t), t), Ji = (i, e, t) => (Pi(i, e, "access private method"), t);
const L = Object.freeze({
  PLAY: "paella:play",
  PAUSE: "paella:pause",
  STOP: "paella:stop",
  ENDED: "paella:ended",
  SEEK: "paella:seek",
  FULLSCREEN_CHANGED: "paella:fullscreenchanged",
  ENTER_FULLSCREEN: "paella:enterfullscreen",
  EXIT_FULLSCREEN: "paella:exitfullscreen",
  VOLUME_CHANGED: "paella:volumeChanged",
  TIMEUPDATE: "paella:timeupdate",
  TRIMMING_CHANGED: "paella:trimmingChanged",
  CAPTIONS_CHANGED: "paella:captionsChanged",
  CAPTIONS_ENABLED: "paella:captionsEnabled",
  CAPTIONS_DISABLED: "paella:captionsDisabled",
  BUTTON_PRESS: "paella:buttonPress",
  SHOW_POPUP: "paella:showPopUp",
  HIDE_POPUP: "paella:hidePopUp",
  MANIFEST_LOADED: "paella:manifestLoaded",
  STREAM_LOADED: "paella:streamLoaded",
  PLAYER_LOADED: "paella:playerLoaded",
  PLAYER_UNLOADED: "paella:playerUnloaded",
  RESIZE: "paella:resize",
  RESIZE_END: "paella:resizeEnd",
  LAYOUT_CHANGED: "paella:layoutChanged",
  PLAYBACK_RATE_CHANGED: "paella:playbackRateChanged",
  VIDEO_QUALITY_CHANGED: "paella:videoQualityChanged",
  HIDE_UI: "paella:hideUI",
  SHOW_UI: "paella:showUI",
  COOKIE_CONSENT_CHANGED: "paella:cookieConsentChanged",
  LOG: "paella:log"
});
function R(i, e, t, n = !0) {
  return i.__eventListeners__ = i.__eventListeners__ || {}, Array.isArray(e) || (e = [e]), e.forEach((s) => {
    i.__eventListeners__[s] = i.__eventListeners__[s] || [], i.__eventListeners__[s].push({
      callback: t,
      unregisterOnUnload: n
    });
  }), t;
}
function P(i, e, t = {}) {
  i.__eventListeners__ && i.__eventListeners__[e] && i.__eventListeners__[e].forEach((n) => n.callback(t));
}
function Te(i, e, t = {}) {
  i.ready && P(i, e, t);
}
function wa(i) {
  if (i.__eventListeners__)
    for (const e in i.__eventListeners__)
      i.__eventListeners__[e] = i.__eventListeners__[e].filter((t) => t.unregisterOnUnload == !1), i.log.debug("Unregister event: " + i.__eventListeners__[e]);
}
function ba(i) {
  return new Promise((e, t) => {
    fetch(i).then((n) => n.text()).then((n) => {
      e(n);
    }).catch((n) => t(n));
  });
}
function La(i) {
  const e = new URLSearchParams(window.location.search);
  return e.has(i) ? e.get(i) : null;
}
function Ea(i) {
  const e = window.location.hash.replace("#", "?"), t = new URLSearchParams(e);
  return t.has(i) ? t.get(i) : null;
}
function ae(i, e) {
  const t = e || "/";
  return i = i.map((n, s) => (s && (n = n.replace(new RegExp("^" + t), "")), s !== i.length - 1 && (n = n.replace(new RegExp(t + "$"), "")), n)), i.join(t);
}
function Ta(i) {
  return new RegExp("^([a-z]+://|//)", "i").test(i) || /^\//.test(i);
}
function ui(i) {
  try {
    return new URL(i).pathname.split("/").pop();
  } catch {
    return i.split("/").pop();
  }
}
function Pa(i) {
  return i.split(".").reduce((e, t, n, s) => n < s.length - 1 ? e !== "" ? `${e}.${t}` : t : e, "");
}
function $n(i) {
  const e = (t) => {
    const n = t.split("/").reduce((s, a, r, o) => r < o.length - 1 ? s !== "" ? `${s}/${a}` : a : s, "");
    return (t[0] === "/" ? `/${n}` : n) + "/";
  };
  try {
    const t = new URL(i);
    return t.origin + e(t.pathname);
  } catch {
    return e(i);
  }
}
function Mn(i) {
  return ui(i).split(".").pop();
}
function Le(i, e) {
  return Ta(e) ? e : ae([i.manifestUrl, e]);
}
function Ia(i) {
  i.__hideTimerPaused__ = !0;
}
function Nn(i) {
  i.__hideTimerPaused__ = !1;
}
function Sa(i, e = "hideUiTime") {
  var t;
  i.__hideTimer__ = null;
  const n = async () => i.__hideTimerPaused__ ? (i.log.debug("UI not hidden because the auto hide timer is paused"), !1) : s() ? (i.log.debug("UI not hidden because there is a focused element"), !1) : (await i.hideUserInterface(), !0);
  (t = i.config.ui) != null && t.hideOnMouseLeave && i.containerElement.addEventListener("mouseleave", () => {
    n();
  });
  const s = () => {
    const r = document.activeElement, o = document.querySelector(":focus-visible");
    return (i.playbackBar.element.contains(r) || i.videoContainer.element.contains(r)) && [
      "input",
      "textarea",
      "button"
    ].find((l) => r.tagName.toLowerCase(l)) !== -1 && o;
  }, a = async () => {
    i.__hideTimer__ && clearTimeout(i.__hideTimer__), await i.showUserInterface(), i.__hideTimer__ = setTimeout(async () => {
      i.__hideTimer__ = null, n() || a();
    }, i[e]);
  };
  i.containerElement.addEventListener("mousemove", async (r) => {
    a();
  }), R(i, L.PLAY, async () => {
    a();
  }), R(i, L.PAUSE, async () => {
    await i.showUserInterface();
  }), R(i, L.ENDED, async () => {
    await i.showUserInterface();
  }), document.addEventListener("keydown", async () => {
    a();
  });
}
function ka(i) {
  i.__hideTimer__ && (clearTimeout(i.__hideTimer__), delete i.__hideTimer__);
}
function Ae(i) {
  const e = Math.floor(i / 60 / 60), t = Math.floor(i / 60) - e * 60, n = Math.floor(i % 60);
  return (e > 0 ? e.toString().padStart(2, "0") + ":" : "") + t.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0");
}
function Zt(i) {
  const e = /^(?:(\d+):){0,1}(\d+):(\d+)(\.\d+)?$/.exec(i);
  if (e) {
    const t = e[1] !== void 0 ? Number(e[1]) : 0, n = Number(e[2]), s = Number(e[3]);
    return t * 3600 + n * 60 + s;
  }
  return null;
}
function Xi(i) {
  const e = /^(?:(\d+):){0,1}(\d+):(\d+)\.(\d+)?$/.exec(i);
  if (e) {
    const t = e[1] !== void 0 ? Number(e[1]) : 0, n = Number(e[2]), s = Number(e[3]), a = e[4] && Number(e[4]) || 0;
    return t * 36e5 + n * 6e4 + s * 1e3 + a;
  }
  return null;
}
function xe(i, e, t = 365) {
  let n = /* @__PURE__ */ new Date();
  n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3);
  let s = `expires=${n.toUTCString()}`;
  document.cookie = `${i}=${e};${s};path=/;SameSite=None;` + (/Apple/.test(navigator.vendor) ? "" : "Secure;");
}
function Aa(i, e, t, n, s = 365) {
  i.cookieConsent.getConsentForType(e) && xe(t, n, s);
}
function qe(i) {
  let e = i + "=", t = decodeURIComponent(document.cookie).split(";");
  for (let n = 0; n < t.length; ++n) {
    let s = t[n];
    for (; s.charAt(0) == " "; )
      s = s.substring(1);
    if (s.indexOf(e) == 0)
      return s.substring(e.length, s.length);
  }
  return "";
}
function Un(i, e = !0) {
  return new Promise((t) => {
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("href", i), n.onload = () => t(n);
    const s = document.getElementsByTagName("head")[0];
    e && s.appendChild(n), t();
  });
}
function xa(i) {
  document.getElementsByTagName("head")[0].removeChild(i);
}
function xt(i, e, t = !0) {
  for (const n in e) {
    const s = i[n];
    let a = e[n];
    t && Array.isArray(s) && Array.isArray(a) ? (s.forEach((r) => {
      a = a.filter((o) => typeof r == "object" && typeof o == "object" && r.id === o.id ? (xt(r, o, t), !1) : !0);
    }), a.forEach((r) => {
      s.push(r);
    })) : typeof s == "object" && a ? xt(s, a, t) : i[n] = e[n];
  }
}
function en(i, { excludedTags: e = null } = {}) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = ["script"];
  return e && n.push(...e), n.flatMap((s) => Array.from(t.getElementsByTagName(s))).forEach((s) => {
    s.parentElement.removeChild(s);
  }), t.innerHTML;
}
let rt = null;
function Rn(i) {
  if (!i) return !1;
  rt || (rt = document.createElement("video"));
  let e = rt.canPlayType(i);
  if (e === "maybe" || e === "probably")
    return !0;
  if (/video\/mp4/i.test(i))
    return e = rt.canPlayType("video/mp4"), e === "maybe" || e === "probably";
}
async function Da(i, e) {
  return e.log.debug("Using default configuration loading function."), (await fetch(i)).json();
}
async function $a(i, e) {
  return e.log.debug("Using default getVideoId function"), Ea("id") || La("id") || i.fallbackId;
}
async function Ma(i, e, t, n) {
  return n.log.debug("Using default getManifestUrl function"), ae([i, e]);
}
async function Na(i, e, t, n) {
  return n.log.debug("Using default getManifestFileUrl function"), ae([i, e]);
}
async function Ua(i, e, t) {
  t.log.debug("Using default loadVideoManifest function");
  const n = await fetch(i);
  if (n.ok)
    try {
      return await n.json();
    } catch {
      throw new Error(t.translate("Error parsing video manifest. Unexpected file format."));
    }
  else
    throw new Error(t.translate("Error loading video manifest: $1 $2", [n.status, n.statusText]));
}
var dt;
let Me = class {
  constructor(e) {
    k(this, dt, null), x(this, dt, e);
  }
  get player() {
    return f(this, dt);
  }
};
dt = /* @__PURE__ */ new WeakMap();
function On({ tag: i = "div", attributes: e = {}, children: t = "", innerText: n = "", parent: s = null }) {
  const a = document.createElement(i);
  a.innerText = n;
  for (let r in e)
    a.setAttribute(r, e[r]);
  return a.innerHTML = t, s && s.appendChild(a), a;
}
function T(i, e = null) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = t.children[0];
  return e && e.appendChild(n), n;
}
var Q;
let ne = class extends Me {
  constructor(e, { tag: t = "div", attributes: n = [], children: s = "", parent: a = null }) {
    super(e), k(this, Q, null), x(this, Q, On({ tag: t, attributes: n, children: s, parent: a })), Object.defineProperty(this, t, {
      get: () => f(this, Q)
    });
  }
  get element() {
    return f(this, Q);
  }
  get parent() {
    return f(this, Q).parentElement;
  }
  hide() {
    this.element.style.display = "none";
  }
  show(e = "block") {
    this.element.style.display = null;
  }
  get isVisible() {
    const e = window.getComputedStyle(this.element);
    return e.display !== "none" && e.display !== "";
  }
  setAttribute(e, t) {
    f(this, Q).setAttribute(e, t);
  }
  removeFromParent() {
    var e;
    (e = f(this, Q).parentElement) == null || e.removeChild(f(this, Q));
  }
  setParent(e) {
    this.removeFromParent(), e.appendChild(f(this, Q));
  }
};
Q = /* @__PURE__ */ new WeakMap();
const Ra = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,3,-3.88857)">
        <path d="M128,35.819C65.633,35.819 14.999,86.453 14.999,148.82C14.999,163.127 17.663,176.817 22.549,189.403L22.475,189.447C11.612,170.791 5.889,149.588 5.889,128C5.889,60.56 60.56,5.889 128,5.889L128,35.819Z" style="fill:url(#_Linear1);"/>
    </g>
    <g transform="matrix(-1,1.22465e-16,-1.22465e-16,-1,258,251.914)">
        <path d="M128,35.819C65.633,35.819 14.999,86.453 14.999,148.82C14.999,163.127 17.663,176.817 22.549,189.403L22.475,189.447C11.612,170.791 5.889,149.588 5.889,128C5.889,60.56 60.56,5.889 128,5.889L128,35.819Z" style="fill:url(#_Linear2);"/>
    </g>
    <defs>
        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-89.3028,140.734,-140.734,-89.3028,144.417,48.7125)"><stop offset="0" style="stop-color:rgb(13,13,13);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(175,175,175);stop-opacity:0.5"/></linearGradient>
        <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-89.3028,140.734,-140.734,-89.3028,144.417,48.7125)"><stop offset="0" style="stop-color:rgb(13,13,13);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(175,175,175);stop-opacity:0.5"/></linearGradient>
    </defs>
</svg>
`;
class Oa extends ne {
  constructor(e) {
    super(e, { parent: e.containerElement }), this.element.className = "loader-container";
  }
  async create() {
    T(`<i>${Ra}</i>`, this.element);
  }
  get debug() {
    return !1;
  }
}
const Ba = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="Cancel" transform="matrix(5.54545,6.8353e-32,6.8353e-32,5.54545,-2567.37,-10735.5)">
        <path d="M486.05,1937C498.192,1937 508.05,1946.86 508.05,1959C508.05,1971.14 498.192,1981 486.05,1981C473.908,1981 464.05,1971.14 464.05,1959C464.05,1946.86 473.908,1937 486.05,1937ZM478.979,1950.52L477.565,1951.93L484.636,1959L477.565,1966.07L478.979,1967.49L486.05,1960.41L493.121,1967.49L494.535,1966.07L487.464,1959L494.535,1951.93L493.121,1950.52L486.05,1957.59L478.979,1950.52Z" style="fill:rgb(210,0,0);"/>
    </g>
</svg>
`;
let jt = class extends ne {
  constructor(e, t = "") {
    super(e, { parent: e.containerElement }), this.element.className = "error-container", T(`
            <div>
                <i>${Ba}</i>
                <p>${t}</p>
            </div>`, this.element);
  }
}, et = class extends Me {
  constructor(e, t) {
    super(e), this._name = t;
  }
  getPluginModuleInstance() {
    return null;
  }
  get config() {
    return this._config;
  }
  get type() {
    return "none";
  }
  get order() {
    var e;
    return ((e = this._config) == null ? void 0 : e.order) || 0;
  }
  get description() {
    var e;
    return ((e = this._config) == null ? void 0 : e.description) || "";
  }
  get name() {
    return this._name;
  }
  async isEnabled() {
    var e;
    return (e = this.config) == null ? void 0 : e.enabled;
  }
  async load() {
  }
  async unload() {
  }
}, Ot = class extends et {
  get type() {
    return "video";
  }
  get streamType() {
    return "mp4";
  }
  async isCompatible() {
    return !1;
  }
  async getVideoInstance() {
    return null;
  }
  getCompatibleFileExtensions() {
    return [];
  }
  getManifestData(e) {
  }
};
const Dt = [];
async function Va(i) {
  await ee(i, "video", (e) => {
    Dt.push(e);
  });
}
async function Fa(i) {
  Dt.slice(0);
}
function Bn(i) {
  if (Dt.length === 0)
    throw Error("No video plugins loaded. Note that `loadVideoPlugins()` must to be called before using `getVideoPlugins()`.");
  return Dt;
}
function Ha(i, e) {
  const t = Mn(e);
  return Bn().find((n) => n.getCompatibleFileExtensions().indexOf(t) !== -1);
}
async function za(i, e) {
  const t = Bn();
  let n = null;
  for (const s of t)
    if (await s.isCompatible(e)) {
      n = s;
      break;
    }
  return n;
}
async function Ga() {
  return await new Promise((i) => {
    const e = document.createElement("audio"), t = setTimeout(() => i(!1), 100);
    e.addEventListener("volumechange", (n) => {
      clearTimeout(t), i(!0);
    }), e.volume = 0.5;
  });
}
let Ii = class extends ne {
  constructor(e, t, n) {
    const s = {
      class: "video-player"
    };
    super(t, { tag: e, attributes: s, parent: n }), this._streamProvider = null, this._streamData = null, this._ready = !1;
  }
  async isVolumeApiAvailable() {
    return await Ga();
  }
  get streamData() {
    return this._streamData;
  }
  get ready() {
    return this._ready;
  }
  async load(e, t) {
    return this._streamProvider = t, this._streamData = e, await this.loadStreamData(e);
  }
  get isMainAudioPlayer() {
    return this._streamProvider.mainAudioPlayer === this;
  }
  // The player must call _videoEndedCallback when the video is ended
  onVideoEnded(e) {
    this._videoEndedCallback = e;
  }
  // The video instance must implement the following functions and properties
  async play() {
    return !1;
  }
  async pause() {
    return !1;
  }
  async duration() {
    return -1;
  }
  get currentTimeSync() {
    return -1;
  }
  async currentTime() {
    return -1;
  }
  async setCurrentTime() {
    return !1;
  }
  async volume() {
    return -1;
  }
  async setVolume() {
    return !1;
  }
  initVolume(e) {
    this._initialVolume = e;
  }
  async paused() {
    return !0;
  }
  async playbackRate() {
    return -1;
  }
  async setPlaybackRate() {
    return !1;
  }
  async getQualities() {
    return null;
  }
  async setQuality() {
    return !1;
  }
  get currentQuality() {
    return null;
  }
  async getDimensions() {
    return null;
  }
  async supportsMultiaudio() {
    return !1;
  }
  async getAudioTracks() {
    return null;
  }
  async setCurrentAudioTrack() {
  }
  get currentAudioTrack() {
    return null;
  }
  async loadStreamData(e) {
    return !1;
  }
  get isEnabled() {
    return this._enabled;
  }
  async enable() {
    this._enabled = !0;
  }
  async disable() {
    this._enabled = !1;
  }
}, Bt = class extends Me {
  get moduleName() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleName'`), "-";
  }
  get moduleVersion() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleVersion'`), "0.0.0";
  }
  async getDictionaries() {
    return null;
  }
};
const Wa = "@asicupv/paella-core", Za = { ".": "./dist/paella-core.js", "./src/": "./src/", "./paella-core.css": "./dist/paella-core.css" }, ja = "2.2.4", qa = "Multi stream HTML video player", Qa = "./dist/paella-core.js", Ya = ["dist/paella-core.css", "dist/paella-core.js", "dist/paella-core.umd.cjs", "dist/paella-core.js.map", "dist/paella-core.umd.cjs.map", "dist/paella-core.d.ts"], Ka = "./dist/paella-core.js", Ja = "module", Xa = { dev: "vite build --watch", build: "vite build --emptyOutDir" }, er = { type: "git", url: "git+https://github.com/polimediaupv/paella-player.git" }, tr = ["html", "player", "video", "hls"], ir = "Fernando Serrano Carpena <ferserc1@gmail.com>", nr = "ECL-2.0", sr = { url: "https://github.com/polimediaupv/paella-player/issues" }, ar = "https://github.com/polimediaupv/paella-player#readme", rr = { typescript: "^5.8.3", vite: "^6.0.11" }, or = { "@ferserc1/input-style-unifier": "^0.0.2", "vite-plugin-static-copy": "^3.0.0" }, tt = {
  name: Wa,
  exports: Za,
  version: ja,
  description: qa,
  main: Qa,
  files: Ya,
  module: Ka,
  type: Ja,
  scripts: Xa,
  repository: er,
  keywords: tr,
  author: ir,
  license: nr,
  bugs: sr,
  homepage: ar,
  devDependencies: rr,
  dependencies: or
};
let qt = null, Vt = class Vn extends Bt {
  static Get() {
    return qt || (qt = new Vn()), qt;
  }
  get moduleName() {
    return "paella-core default video formats";
  }
  get moduleVersion() {
    return tt.version;
  }
};
function lr(i) {
  return new Promise((e, t) => {
    const n = new Image();
    n.addEventListener("load", (s) => {
      e(n);
    }), n.addEventListener("error", (s) => {
      t(new Error("Could not load preview image. The preview image is required in audio only streams"));
    }), n.src = i;
  });
}
function ur(i, e, t) {
  return new Promise((n, s) => {
    e.oncanplay = () => n(), e.onerror = () => s(new Error(i.translate("Error loading audio: $1", [t]))), e.src = Le(i, t), n();
  });
}
class cr extends Ii {
  constructor(e, t, n) {
    super("audio", e, t), this.isMainAudio = n, this._ready = !1;
  }
  get streamType() {
    return "audio";
  }
  waitForLoaded() {
    return new Promise((e) => {
      const t = () => {
        this._ready ? e() : setTimeout(t, 100);
      };
      t();
    });
  }
  async play() {
    await this.waitForLoaded(), this.audio.play();
  }
  async pause() {
    await this.waitForLoaded(), this.audio.pause();
  }
  async duration() {
    return await this.waitForLoaded(), this.audio.duration;
  }
  get currentTimeSync() {
    var e;
    return ((e = this.audio) == null ? void 0 : e.currentTime) || 0;
  }
  async currentTime() {
    return await this.waitForLoaded(), this.audio.currentTime;
  }
  async setCurrentTime(e) {
    await this.waitForLoaded(), this.audio.currentTime = e;
  }
  async volume() {
    return await this.waitForLoaded(), this.audio.volume;
  }
  async setVolume(e) {
    await this.waitForLoaded(), this.audio.volume = e;
  }
  async paused() {
    return await this.waitForLoaded(), this.audio.paused;
  }
  async playbackRate() {
    return await this.waitForLoaded(), this.audio.playbackRate;
  }
  async setPlaybackRate(e) {
    await this.waitForLoaded(), this.audio.playbackRate = e;
  }
  // getQualities(), setQuality(q), get currentQuality(): audio format does not support multiquality
  async getDimensions() {
    return {
      w: this._previewImage.width,
      h: this._previewImage.height
    };
  }
  async loadStreamData(e = null) {
    this._streamData = this._streamData || e, this.player.log.debug("es.upv.paella.audioVideoFormat: loadStreamData");
    const t = this.player.videoManifest.metadata.preview;
    if (!t || t == null)
      throw new Error("Invalid video manifest data: preview image is required");
    if (this._previewImage = await lr(t), this._imageContainer = document.createElement("div"), this._imageContainer.className = "image-container", this.parent.appendChild(this._imageContainer), this._imageContainer.appendChild(this._previewImage), this._source = e.sources.audio && e.sources.audio[0], !this._source)
      throw new Error("Invalid source in audio only video stream");
    if (!this.isMainAudioPlayer)
      throw new Error("Audio only video stream must be main audio player. Check the role property at video manifest");
    await ur(this.player, this.audio, this._source.src);
    const n = () => {
      const s = this.player.videoContainer.baseVideoRect.offsetWidth / this.player.videoContainer.baseVideoRect.offsetHeight, a = this._previewImage.width / this._previewImage.height;
      s > a ? (this._previewImage.classList.add("landscape"), this._previewImage.classList.remove("portrait")) : (this._previewImage.classList.add("portrait"), this._previewImage.classList.remove("landscape"));
    };
    this.player.frameList.frames.length > 0 && this.audio.addEventListener("timeupdate", (s) => {
      const a = this.player.frameList.getImage(s.target.currentTime, !0);
      this._previewImage.src != a.url && (this._previewImage.src = a.url, this._previewImage.onload = () => n());
    }), window.addEventListener("resize", (s) => n()), n(), this._ready = !0;
  }
}
class hr extends Ot {
  getPluginModuleInstance() {
    return Vt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.audioVideoFormat";
  }
  get streamType() {
    return "audio";
  }
  async isCompatible(e) {
    return e.sources.audio != null;
  }
  async getVideoInstance(e, t) {
    return new cr(this.player, e, t);
  }
  getCompatibleFileExtensions() {
    return ["m4a", "mp3"];
  }
  getManifestData(e) {
    return {
      audio: e.map((t) => ({
        src: t
      }))
    };
  }
}
class Fn extends Ii {
  constructor(e, t, n, s) {
    super("video", e, t), this._config = s || {};
    const a = this._config.crossOrigin ?? "";
    this.element.setAttribute("playsinline", ""), a !== !1 && this.element.setAttribute("crossorigin", a), this.isMainAudio = n, this.element.setAttribute("autoplay", ""), this.element.autoplay = !0, n || (this.element.muted = !0), this._videoEnabled = !0;
  }
  async play() {
    if (this._videoEnabled)
      try {
        return await this.waitForLoaded(), this.video.play();
      } catch {
      }
    else
      this._disabledProperties.paused = !1;
  }
  async pause() {
    if (this._videoEnabled)
      return await this.waitForLoaded(), this.video.pause();
    this._disabledProperties.paused = !0;
  }
  async duration() {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.duration) : this._disabledProperties.duration;
  }
  get currentTimeSync() {
    return this._videoEnabled ? this.ready ? this.video.currentTime : -1 : this._disabledProperties.currentTime;
  }
  async currentTime() {
    return this._videoEnabled ? (await this.waitForLoaded(), this.currentTimeSync) : this._disabledProperties.currentTime;
  }
  async setCurrentTime(e) {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.currentTime = e) : (this._disabledProperties.currentTime = e, e);
  }
  async volume() {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.volume) : this._disabledProperties.volume;
  }
  async setVolume(e) {
    return this._videoEnabled ? (await this.waitForLoaded(), e === 0 ? this.video.setAttribute("muted", "") : this.video.removeAttribute("muted"), this.video.volume = e) : (this._disabledProperties.volume = e, e);
  }
  async paused() {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.paused) : this._disabledProperties.paused;
  }
  async playbackRate() {
    return this._videoEnabled ? (await this.waitForLoaded(), await this.video.playbackRate) : this._disabledProperties.playbackRate;
  }
  async setPlaybackRate(e) {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.playbackRate = e) : (this._disabledProperties.playbackRate = e, e);
  }
  async getQualities() {
  }
  async setQuality() {
  }
  get currentQuality() {
    return 0;
  }
  async getDimensions() {
    return this._videoEnabled ? (await this.waitForLoaded(), { w: this.video.videoWidth, h: this.video.videoHeight }) : { w: this._disabledProperties.videoWidth, h: this._disabledProperties.videoHeight };
  }
  saveDisabledProperties(e) {
    this._disabledProperties = {
      duration: e.duration,
      volume: e.volume,
      videoWidth: e.videoWidth,
      videoHeight: e.videoHeight,
      playbackRate: e.playbackRate,
      paused: e.paused,
      currentTime: e.currentTime
    };
  }
  async loadStreamData(e = null) {
    this._streamData = this._streamData || e, this.player.log.debug("es.upv.paella.htmlVideoFormat: loadStreamData"), this._sources = e.sources.html, this._currentQuality = 0, this.isMainAudioPlayer || (this.video.muted = !0), this._sources.forEach(({ src: t, mimetype: n }) => {
      t = Le(this.player, t);
      const s = document.createElement("source");
      s.src = t, s.type = n, this.video.appendChild(s);
    }), this._endedCallback = this._endedCallback || (() => {
      typeof this._videoEndedCallback == "function" && this._videoEndedCallback();
    }), this.video.addEventListener("ended", this._endedCallback);
    try {
      await this.video.play();
    } catch {
    }
    await this.waitForLoaded(), this.player.log.debug(`es.upv.paella.htmlVideoFormat (${this.streamData.content}): video loaded and ready.`), this.saveDisabledProperties(this.video);
  }
  async clearStreamData() {
    this.video.src = "", this.video.removeEventListener("ended", this._endedCallback), this.video.removeEventListener("loadeddata", this._handleLoadedCallback), this._ready = !1;
  }
  get isEnabled() {
    return this._videoEnabled;
  }
  async enable() {
    this._videoEnabled = !0;
  }
  async disable() {
    return this.isMainAudio ? this.player.log.debug("video.disable() - the video is not disabled because it is the main audio source.") : this._videoEnabled = !1, this._videoEnabled;
  }
  waitForLoaded() {
    return new Promise((e, t) => {
      this.video.readyState >= 2 && (this._ready = !0), this.ready ? e() : (this._handleLoadedCallback = (n) => {
        this.video.readyState >= 2 && (this.video.pause(), this._ready = !0, e());
      }, this.video.addEventListener("loadeddata", this._handleLoadedCallback));
    });
  }
}
class dr extends Ot {
  getPluginModuleInstance() {
    return Vt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.htmlVideoFormat";
  }
  get streamType() {
    return "html";
  }
  async isCompatible(e) {
    const { html: t } = e.sources;
    return t && t.some((n) => Rn(n.mimetype));
  }
  async getVideoInstance(e, t) {
    return new Fn(this.player, e, t, this.config);
  }
  getCompatibleFileExtensions() {
    return ["m4v", "mp4", "ogg", "webm", "ogv"];
  }
  getManifestData(e) {
    const t = (n) => {
      switch (Mn(n)) {
        case "mp4":
        case "m4v":
          return "video/mp4";
        case "webm":
          return "video/webm";
        case "ogg":
        case "ogv":
          return "video/ogg";
        default:
          return null;
      }
    };
    return {
      html: e.map((n) => ({
        src: n,
        mimetype: t(n)
      }))
    };
  }
}
class pr {
  constructor({ label: e, shortLabel: t, isAuto: n = !1, index: s = 0, src: a = "", width: r = -1, height: o = -1, bitrate: l = -1 }) {
    this._label = e, this._shortLabel = t, this._index = s, this._src = a, this._res = {
      w: r,
      h: o
    }, this._bitrate = l, this._isAuto = n;
  }
  get label() {
    return this._label;
  }
  get shortLabel() {
    return this._shortLabel;
  }
  get index() {
    return this._index;
  }
  get src() {
    return this._src;
  }
  get res() {
    return this._res;
  }
  get bitrate() {
    return this._bitrate;
  }
  get isAuto() {
    return this._isAuto;
  }
  get quality() {
    return this._res.w !== -1 && this._res.h !== -1 ? this._res.w * this._res.h : this._bitrate;
  }
  compare(e) {
    return e.quality - this.quality;
  }
}
function Hn(i) {
  let e = this._currentSource.frames[0];
  this._currentSource.frames.some((t) => {
    if (t.time <= this._currentTime)
      e = t;
    else
      return !0;
  }), this.img.src = e.src;
}
function gr() {
  this._startTimestamp = Date.now();
  const i = () => {
    this._timer = setTimeout(i, 250);
    const e = Date.now(), t = e - this._startTimestamp;
    this._currentTime += t / 1e3, this._startTimestamp = e, Hn.apply(this, [this._currentTime]);
  };
  i();
}
function mr() {
  this._timer && (clearTimeout(this._timer), this._timer = null);
}
class yr extends Ii {
  constructor(e, t) {
    super("img", e, t), this._currentTime = 0, this._startTimesamp = 0, this._playbackRate = 1, this._timer = null, this.video = this.domElement;
  }
  async play() {
    gr.apply(this);
  }
  async pause() {
    mr.apply(this);
  }
  async duration() {
    return this._currentSource.duration;
  }
  get currentTimeSync() {
    return this._currentTime;
  }
  async currentTime() {
    return this._currentTime;
  }
  async setCurrentTime(e) {
    this._currentTime = e, Hn.apply(this, [e]);
  }
  async volume() {
    return 0;
  }
  async setVolume(e) {
  }
  async paused() {
    return this._timer === null;
  }
  async playbackRate() {
    return this._playbackRate;
  }
  async setPlaybackRate(e) {
    this._playbackRate = e;
  }
  async getQualities() {
    return this._qualities;
  }
  async setQuality() {
  }
  get currentQuality() {
    return this._currentQuality;
  }
  async getDimensions() {
    return this._currentSource.res;
  }
  async loadStreamData(e) {
    return this._sources = e.sources.image, this._qualities = this._sources.map((t) => new pr({
      src: t.frames[0].src,
      label: `${t.res.w}x${t.res.h}`,
      shortLabel: `${t.res.h}p`,
      width: t.res.w,
      height: t.res.h
    })), this._currentQuality = this._qualities.length - 1, this._qualities.forEach((t, n) => {
      this._qualities[this._currentQuality].compare(t) > 0 && (this._currentQuality = n);
    }), this._currentSource = this._sources[this._currentQuality], this._sources.forEach((t) => {
      t.frames.sort((n, s) => n.time - s.time);
    }), !0;
  }
}
class fr extends Ot {
  getPluginModuleInstance() {
    return Vt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.imageVideoFormat";
  }
  get streamType() {
    return "image";
  }
  async isCompatible(e) {
    return e.sources.image != null;
  }
  async getVideoInstance(e, t) {
    return new yr(this.player, e, this.config, t);
  }
}
class vr extends Fn {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  // This function is called when the player loads, and it should
  // make everything ready for video playback to begin.
  async loadStreamData(e = null) {
    this._streamData = this._streamData || e, this.player.log.debug("es.upv.paella.mp4VideoFormat: loadStreamData"), this._currentSource || (this._sources = null, this._currentQuality = 0, this._sources = e.sources.mp4, this._sources.sort((t, n) => Number(t.res.w) - Number(n.res.w)), this._currentQuality = this._sources.length - 1, this._currentSource = this._sources[this._currentQuality]), this.isMainAudioPlayer || (this.video.muted = !0), this._initialVolume && (this.video.volume = this._initialVolume, this._initialVolume === 0 && (this.video.muted = !0)), this.video.src = Le(this.player, this._currentSource.src), this._endedCallback = this._endedCallback || (() => {
      typeof this._videoEndedCallback == "function" && this._videoEndedCallback();
    }), this.video.addEventListener("ended", this._endedCallback);
    try {
      await this.video.play();
    } catch {
    }
    await this.waitForLoaded(), this.player.log.debug(`es.upv.paella.mp4VideoFormat (${this.streamData.content}): video loaded and ready.`), this.saveDisabledProperties(this.video);
  }
}
class _r extends Ot {
  getPluginModuleInstance() {
    return Vt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.mp4VideoFormat";
  }
  get streamType() {
    return "mp4";
  }
  isCompatible(e) {
    var t;
    const { mp4: n } = e.sources;
    return n && Rn((t = n[0]) == null ? void 0 : t.mimetype);
  }
  async getVideoInstance(e, t) {
    return new vr(this.player, e, t, this.config);
  }
  getCompatibleFileExtensions() {
    return ["m4v", "mp4"];
  }
  getManifestData(e) {
    return {
      mp4: e.map((t) => ({
        src: t,
        mimetype: "video/mp4"
      }))
    };
  }
}
async function Cr(i) {
  const e = [];
  await ee(i, "captions", async (t) => {
    e.push(t);
  });
  for (let t in e) {
    const n = await e[t].getCaptions(), s = i.captionsCanvas;
    n.forEach((a) => s.addCaptions(a));
  }
}
class zn extends et {
  get type() {
    return "captions";
  }
  async load() {
    this.player.log.debug("load captions plugin");
  }
  async getCaptions() {
    return this.player.log.warn(`CaptionsPlugin ${this.name}: getCaptions() is not implemented.`), [];
  }
}
class Gn {
  get cues() {
    return this._cues;
  }
  get label() {
    return this._label;
  }
  get language() {
    return this._lang;
  }
  set label(e) {
    this._label = e;
  }
  set language(e) {
    this._lang = e;
  }
  constructor(e = "", t = "") {
    this._cues = [], this._label = e, this._lang = t;
  }
  addCue({ label: e = "", start: t, end: n, captions: s }) {
    const a = {
      label: e
    };
    if (typeof s == "string")
      a.captions = [s];
    else if (Array.isArray(s))
      a.captions = s;
    else
      throw Error("Invalid cue caption format: must be an array of strings or a string");
    if (typeof t == "string")
      a.start = Zt(t), a.startString = t;
    else if (typeof t == "number")
      a.start = t, a.startString = Ae(t);
    else
      throw Error("Invalid cue timestamp format: must be a valid time string or a number of seconds");
    if (typeof n == "string")
      a.end = Zt(n), a.endString = n;
    else if (typeof n == "number")
      a.end = n, a.endString = Ae(n);
    else
      throw Error("Invalid cue timestamp format: must be a valid time string or a number of seconds");
    return this._cues.push(a), a;
  }
  getCue(e) {
    if (typeof e == "string")
      e = Zt(e);
    else if (typeof e != "number")
      throw Error("Invalid time instant format getting cue");
    let t = null;
    return this._cues.some((n) => {
      if (e >= n.start && e <= n.end)
        return t = n, !0;
    }), t;
  }
}
function tn(i, e) {
  const t = {}, n = new DOMParser().parseFromString(e, "text/xml");
  return Array.from(n.getElementsByTagName("div")).forEach((s) => {
    const a = s.getAttribute("xml:lang") || "unknonw";
    t[a] = t[a] || new Gn(i.translate(a), a), Array.from(s.getElementsByTagName("p")).forEach((r) => {
      const o = Xi(r.getAttribute("begin"));
      t[a].addCue({
        label: `caption_${r.getAttribute("xml:id") || o}`,
        start: o / 1e3,
        end: Xi(r.getAttribute("end")) / 1e3,
        captions: r.innerHTML
      });
    });
  }), t;
}
class wr {
  constructor(e, t = "") {
    this.player = e, this._text = t, this._captions = tn(this.player, t);
  }
  get text() {
    return this._text;
  }
  set text(e) {
    this._text = e, this._captions = tn(e);
  }
  get captions() {
    return this._captions;
  }
}
let Qt = null, Ft = class Wn extends Bt {
  static Get() {
    return Qt || (Qt = new Wn()), Qt;
  }
  get moduleName() {
    return "paella-core default plugins";
  }
  get moduleVersion() {
    return tt.version;
  }
};
class br extends zn {
  getPluginModuleInstance() {
    return Ft.Get();
  }
  get name() {
    return super.name || "es.upv.paella.dfxpManifestCaptionsPlugin";
  }
  async isEnabled() {
    return await super.isEnabled() && this.player.videoManifest.captions && this.player.videoManifest.captions.length > 0;
  }
  async getCaptions() {
    const e = [], t = [];
    return this.player.videoManifest.captions.forEach((n) => {
      t.push(new Promise(async (s, a) => {
        if (/dfxp/i.test(n.format)) {
          const r = Le(this.player, n.url), o = await fetch(r);
          if (o.ok) {
            let l = await o.text();
            l = l.replace(/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm, ""), l = l.replace(/&\w+;/gmi, ""), l = l.replaceAll("<br>", "");
            const u = new wr(this.player, l);
            Object.entries(u.captions).forEach(([h, p]) => {
              e.push(p);
            }), s();
          } else
            a();
        } else
          a();
      }));
    }), await Promise.allSettled(t), e;
  }
}
let Zn = class extends et {
  constructor(e, t, n) {
    super(e, t, n), this.__uiPlugin = !0;
  }
  async getDictionaries() {
    return null;
  }
}, Si = "en", jn = "";
const De = {};
function qn(i) {
  const e = De[Si] || {}, t = De[jn] || {};
  return e[i] || t[i] || i;
}
function Qn(i) {
  Si = i;
}
function Yn() {
  return Si;
}
function Kn(i, e) {
  De[i] = De[i] || {};
  for (const t in e) {
    const n = e[t];
    De[i][t] = n;
  }
}
function Jn() {
  return De;
}
function Xn(i) {
  return i.config.defaultLanguage || navigator.language;
}
let es = qn, ts = Qn, is = Yn, ns = Kn, ss = Jn, as = Xn;
function Xe(i, e = null) {
  const t = es(i);
  if (Array.isArray(e)) {
    let n = t;
    return e.forEach((s, a) => {
      const r = `$${a + 1}`;
      n = n.replace(r, s);
    }), n;
  } else
    return t;
}
function nn(i) {
  ts(i);
}
function Lr() {
  return is();
}
function Qe(i, e) {
  ns(i, e);
}
function Er() {
  return ss();
}
function rs(i) {
  return as(i);
}
function Tr(i) {
  es = i;
}
function Pr(i) {
  ts = i;
}
function Ir(i) {
  is = i;
}
function Sr(i) {
  ns = i;
}
function kr(i) {
  ss = i;
}
function Ar(i) {
  as = i;
}
function xr(i) {
  jn = rs(i);
}
async function $t(i, e) {
  var t, n;
  const s = T("<li></li>", e);
  s.plugin = i;
  const a = Xe(i.ariaLabel), r = Xe(i.description), o = i.dynamicWidth ? "dynamic-width" : "fixed-width", l = i.id ? `id="${i.id}" ` : "", u = i.buttonName ? `name="${i.buttonName}" ` : "", h = i.tabIndex ? ` tabindex="${i.tabIndex}" ` : "";
  if (i.interactive) {
    const p = T(`
			<button type="button" ${l}${u}class="${o}"${h}aria-label="${a}" title="${r}">
			</button>
		`, s);
    i.className !== "" && p.classList.add(i.className), i._button = p, i._container = s, p._pluginData = i, s._pluginData = i, p.addEventListener("click", (b) => {
      const c = p._pluginData;
      P(c.player, L.BUTTON_PRESS, {
        plugin: c
      }), c.action(b, null), b.stopPropagation(), b.pageX !== 0 && b.pageY !== 0 && document.activeElement.blur();
    });
    let d = null;
    const _ = () => {
      d && (clearTimeout(d), d = null);
    }, m = () => {
      _(), d = setTimeout(() => {
        i.leftSideContainerPresent && i.leftSideContainer.classList.add("hidden"), i.rightSideContainerPresent && i.rightSideContainer.classList.add("hidden"), d = null;
      }, 300);
    }, C = () => {
      _(), i.leftSideContainerPresent && i.leftSideContainer.classList.remove("hidden"), i.rightSideContainerPresent && i.rightSideContainer.classList.remove("hidden");
    };
    p.addEventListener("focus", C), p.addEventListener("mouseover", C), p.addEventListener("mouseout", m), p.addEventListener("blur", m), ((t = i.player.config.accessibility) == null ? void 0 : t.clickWithSpacebar) === void 0 || (n = i.player.config.accessibility) != null && n.clickWithSpacebar || (p.addEventListener("keyup", (b) => {
      b.keyCode == 32 && b.preventDefault();
    }), p.addEventListener("keydown", (b) => {
      b.keyCode == 32 && b.preventDefault();
    })), i.className !== "" && p.classList.add(i.className);
  } else {
    const p = T(`
			<div ${l}${u} class="non-interactive ${o}" title="${r}">
			</div>
		`, s);
    i._button = p, i._container = s, p._pluginData = i, s._pluginData = i, i.className !== "" && p.classList.add(i.className);
  }
}
const sn = () => {
  const i = document.createElement("span");
  return i.classList.add("side-container"), i.classList.add("hidden"), i;
};
class Dr {
  onIconChanged(e, t, n) {
  }
  onTitleChanged(e, t, n) {
  }
  onStateChanged(e, t, n, s, a) {
  }
}
var pt, ci, ce, he, gt;
let ki = class extends Zn {
  constructor() {
    super(...arguments), k(this, pt), k(this, ce, null), k(this, he, null), k(this, gt, []);
  }
  get type() {
    return "button";
  }
  // _container and _button are loaded in PlaybackBar
  get container() {
    return this._container;
  }
  get button() {
    return this._button;
  }
  get interactive() {
    return !0;
  }
  get dynamicWidth() {
    return !1;
  }
  getId() {
    return null;
  }
  get id() {
    return this.config.id || this.getId();
  }
  getButtonName() {
    return null;
  }
  get buttonName() {
    return this.config.name || this.getButtonName() || this.name;
  }
  get ariaLabel() {
    return this.config.ariaLabel || this.getAriaLabel();
  }
  getAriaLabel() {
    return "";
  }
  get tabIndex() {
    return this.config.tabIndex || this.getTabIndex();
  }
  getTabIndex() {
    return null;
  }
  getDescription() {
    return "";
  }
  get description() {
    return this.config.description || this.getDescription();
  }
  get minContainerSize() {
    return this.config.minContainerSize || this.getMinContainerSize();
  }
  getMinContainerSize() {
    return 0;
  }
  setObserver(e) {
    if (e instanceof Dr)
      this._observer = e;
    else if (typeof e.onIconChanged == "function" || typeof e.onTitleChanged == "function" || typeof e.onStateChanged == "function")
      this._observer = e;
    else
      throw new Error("Invalid observer for ButtonPlugin");
  }
  get icon() {
    return this._icon || (this._icon = ""), this._icon;
  }
  set icon(e) {
    typeof e == "string" && (e = en(e)), this._icon = e, Ji(this, pt, ci).call(this);
  }
  get haveIcon() {
    return this.icon !== "";
  }
  get menuIcon() {
    return this._menuIcon || (this._menuIcon = ""), this._menuIcon;
  }
  set menuIcon(e) {
    typeof e == "string" && (e = en(e)), this._menuIcon = e, Ji(this, pt, ci).call(this);
  }
  get haveMenuIcon() {
    return this.menuIcon !== "";
  }
  get isMenuButton() {
    var e, t, n;
    const s = ((e = this.config) == null ? void 0 : e.parentContainer) === "playbackBar" || !((t = this.config) != null && t.parentContainer), a = ((n = this.config) == null ? void 0 : n.parentContainer) === "videoContainer";
    return !s && !a;
  }
  get title() {
    return this._title || "";
  }
  set title(e) {
    var t;
    if (this._title = e, e && this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span") || T(`<span class="button-title-${this.titleSize}"></span>`, this._button);
      n.innerHTML = e;
    } else if (this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span");
      n && this._button.removeChild(n);
    }
    (t = this._observer) != null && t.onTitleChanged && this._observer.onTitleChanged(this, this._title, e);
  }
  // "small", "medium", "large"
  get titleSize() {
    return "medium";
  }
  // "left" or "right"
  get side() {
    var e;
    return ((e = this.config) == null ? void 0 : e.side) || "left";
  }
  get closePopUps() {
    return this.config.closePopUps || this.getClosePopUps();
  }
  getClosePopUps() {
    return !0;
  }
  // "playbackBar" or "videoContainer"
  get parentContainer() {
    var e;
    return ((e = this.config) == null ? void 0 : e.parentContainer) || "playbackBar";
  }
  get className() {
    return "";
  }
  enable() {
    this._enabled = !0, this.show();
  }
  disable() {
    this._enabled = !1, this.hide();
  }
  hide() {
    this._button && (this._button.style.display = "none");
  }
  show() {
    if (this._enabled === !1)
      return;
    const { width: e } = this.player.playbackBar.containerSize;
    this._button && (e > this.minContainerSize || this.parentContainer !== "playbackBar") && (this._button.style.display = null);
  }
  get leftSideContainer() {
    return f(this, ce) || (x(this, ce, sn()), this.container.appendChild(f(this, ce))), f(this, ce);
  }
  get leftSideContainerPresent() {
    return f(this, ce) !== null;
  }
  get rightSideContainer() {
    return f(this, he) || (x(this, he, sn()), this.container.appendChild(f(this, he))), f(this, he);
  }
  get rightSideContainerPresent() {
    return f(this, he) !== null;
  }
  get stateText() {
    return null;
  }
  get stateIcon() {
    return null;
  }
  setState({ text: e = null, icon: t = null } = {}) {
    var n, s;
    const a = this._statusText, r = this._statusIcon;
    this._statusText = e, this._statusIcon = t, f(this, gt).forEach((o) => o(this)), this._statusIcon && (this.icon = this._statusIcon, this.menuIcon = this._statusIcon), this._statusText && (this.title = this._statusText), (s = (n = this._observer) == null ? void 0 : n.onStateChanged) == null || s.call(n, this, a, e, r, t);
  }
  onStateChange(e) {
    typeof e == "function" ? f(this, gt).push(e) : this.player.log.warn("Invalid callback for ButtonPlugin.onStateChange");
  }
  async action(e, t = null) {
  }
  onResize({ width: e, height: t }) {
    e < this.minContainerSize ? this.hide() : this.show();
  }
  focus() {
    var e;
    (e = this.button) == null || e.focus();
  }
  blur() {
    var e;
    (e = this.button) == null || e.blur();
  }
  isFocus() {
    return this.button === document.activeElement;
  }
};
pt = /* @__PURE__ */ new WeakSet(), ci = function() {
  var i;
  const e = this.isMenuButton ? this._menuIcon : this._icon, t = this.isMenuButton && this.haveMenuIcon ? this.menuIcon : this.icon;
  if (t && this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i") || T("<i></i>", this._button);
    n.innerHTML = t;
  } else if (this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i");
    n && this._button.removeChild(n);
  }
  (i = this._observer) != null && i.onIconChanged && this._observer.onIconChanged(this, e, t);
}, ce = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap();
const $r = `<svg width="100%"
    height="100%" viewBox="0 0 24 24"
    style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="play">
        <path
            d="M19.662,11.155C19.952,11.338 20.128,11.657 20.128,12C20.128,12.343 19.952,12.662 19.662,12.845C16.249,15 7.228,20.698 3.572,23.007C3.257,23.206 2.857,23.218 2.53,23.038C2.203,22.858 2,22.514 2,22.14C2,17.638 2,6.199 2,1.78C2,1.423 2.194,1.094 2.508,0.921C2.821,0.748 3.203,0.76 3.505,0.951C7.117,3.232 16.228,8.986 19.662,11.155Z" />
    </g>
</svg>
`, Mr = `<svg width="100%"
    height="100%" viewBox="0 0 26 24"
    style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <path
        d="M10,1.353L10,20.647C10,21.394 9.394,22 8.647,22L1.353,22C0.606,22 0,21.394 0,20.647L0,1.353C0,0.606 0.606,0 1.353,0L8.647,0C9.394,0 10,0.606 10,1.353Z" />
    <path
        d="M24,1.353L24,20.647C24,21.394 23.394,22 22.647,22L15.353,22C14.606,22 14,21.394 14,20.647L14,1.353C14,0.606 14.606,0 15.353,0L22.647,0C23.394,0 24,0.606 24,1.353Z" />
</svg>`, Nr = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 40 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1.94013e-16,0.689169,-0.784942,2.23746e-16,110.436,-203.562)">
        <g id="play">
            <path d="M304.588,115.214C304.588,105.205 313.901,97.079 325.373,97.079C336.844,97.079 346.157,105.205 346.157,115.214C346.157,125.223 336.844,133.349 325.373,133.349L325.373,128.287C333.642,128.287 340.356,122.43 340.356,115.214C340.356,107.999 333.642,102.141 325.373,102.141C317.103,102.141 310.39,107.999 310.39,115.214L304.588,115.214Z"/>
            <g transform="matrix(-2.33361,-6.00363e-16,1.21708e-15,-2.59724,320.246,134.358)">
                <path d="M5.454,3.35L9.398,7.505L1.511,7.505L5.454,3.35Z"/>
            </g>
        </g>
    </g>
</svg>
`;
class Ur extends ki {
  getPluginModuleInstance() {
    return Ft.Get();
  }
  get name() {
    return super.name || "es.upv.paella.playPauseButton";
  }
  async load() {
    const e = this.player.getCustomPluginIcon(this.name, "play") || $r, t = this.player.getCustomPluginIcon(this.name, "pause") || Mr, n = this.player.getCustomPluginIcon(this.name, "replay") || Nr;
    this.icon = e, this.player.translate(this.config.ariaLabelPause || "pause");
    const s = this.player.translate(this.config.ariaLabelPlay || "play");
    R(this.player, L.PLAY, () => {
      this.icon = t, this.button.ariaLabel = s, this.button.title = this.config.ariaLabelPause || s;
    }), R(this.player, L.PAUSE, () => {
      this.icon = e, this.button.ariaLabel = s, this.button.title = this.config.ariaLabelPause || s;
    }), R(this.player, L.ENDED, () => {
      this.icon = n, this.button.ariaLabel = s, this.button.title = this.config.ariaLabelPause || s;
    }), R(this.player, L.STOP, () => {
      this.icon = e, this.button.ariaLabel = s, this.button.title = this.config.ariaLabelPause || s;
    });
  }
  async action() {
    await this.player.paused() ? await this.player.videoContainer.play() : await this.player.videoContainer.pause();
  }
}
const an = "(?:\\d*:){1,2}\\d*(?:\\.\\d+)?", Rr = `(${an})\\s*\\-\\->\\s*(${an})`, Or = {
  cueTiming: new RegExp(Rr)
}, Br = (i, e, t, n) => {
  const s = Or.cueTiming.exec(e);
  if (s) {
    const a = n[t - 1], r = [];
    for (let o = 1; t + o < n.length && n[t + o] !== ""; ++o)
      r.push(n[t + o]);
    i.addCue({
      label: a,
      start: s[1],
      end: s[2],
      captions: r
    });
  }
};
function rn(i) {
  const e = new Gn();
  return i !== "" && (i = i.replace(/\r\n/gm, `
`), i = i.replace(/\r/gm, `
`), i.split(/\n/).forEach((t, n, s) => {
    Br(e, t, n, s);
  })), e;
}
class Vr {
  constructor(e = "") {
    this._text = e, this._captions = rn(e);
  }
  get text() {
    return this._text;
  }
  set text(e) {
    this._text = e, this._captions = rn(e);
  }
  get captions() {
    return this._captions;
  }
}
class Fr extends zn {
  getPluginModuleInstance() {
    return Ft.Get();
  }
  get name() {
    return super.name || "es.upv.paella.vttManifestCaptionsPlugin";
  }
  async isEnabled() {
    return await super.isEnabled() && this.player.videoManifest.captions && this.player.videoManifest.captions.length > 0;
  }
  async getCaptions() {
    const e = [], t = [];
    return this.player.videoManifest.captions.forEach((n) => {
      t.push(new Promise(async (s, a) => {
        if (/vtt/i.test(n.format)) {
          const r = Le(this.player, n.url), o = await fetch(r);
          if (o.ok) {
            const l = await o.text(), u = new Vr(l);
            u.captions.label = n.text, u.captions.language = n.lang, e.push(u.captions), s();
          } else
            a();
        } else
          a();
      }));
    }), await Promise.allSettled(t), e;
  }
}
class Hr extends ki {
  getPluginModuleInstance() {
    return Ft.Get();
  }
  get name() {
    return "es.upv.paella.currentTimeLabel";
  }
  async load() {
    this.title = Ae(0);
    const e = async () => {
      const t = await this.player.videoContainer.currentTime();
      let n = Ae(t);
      if (this.config.showTotalTime) {
        const s = await this.player.videoContainer.duration();
        n += ` / ${Ae(s)}`;
      }
      this.title = n;
    };
    this.player.bindEvent(L.TIMEUPDATE, () => e()), this.player.bindEvent(L.TRIMMING_CHANGED, () => e()), this.player.bindEvent(L.SEEK, () => e());
  }
  get interactive() {
    return !1;
  }
  get dynamicWidth() {
    return !0;
  }
}
function Ht(i, e) {
  return _s(i, "layout").filter((t) => t.config && t.config.enabled && t.canApply(e));
}
function os(i, e) {
  const t = Ht(i, e), n = [];
  return t.forEach((s) => {
    n.push(...s.getValidContentIds(e));
  }), n;
}
function zr(i, e) {
  const t = [];
  return _s(i, "layout").filter((n) => {
    var s, a;
    if ((s = n.config) != null && s.enabled && (a = n.config) != null && a.validContent)
      return n.config.validContent.every((r) => r.content.length === e);
  }).forEach((n) => n.config.validContent.forEach((s) => t.push(s.content))), t;
}
function ls(i, e, t) {
  const n = Ht(i, e);
  let s = null;
  return n.some((a) => {
    if (a.getValidContentIds(e).indexOf(t) !== -1)
      return s = a, !0;
  }), s;
}
function Gr(i, e) {
  const t = Ht(i, e), n = os(i, e);
  let s = [];
  return t.forEach((a) => {
    s = [...s, ...a.config.validContent];
  }), s.filter((a) => n.indexOf(a.id) !== -1);
}
function us(i, e, t, n = null) {
  const s = ls(i, e, t);
  if (s) {
    const a = s.getLayoutStructure(e, t, n);
    return a.plugin = s, a;
  }
  return null;
}
let Ne = class extends Zn {
  get type() {
    return "layout";
  }
  get layoutType() {
    return "static";
  }
  getTabIndexStart() {
    return 10;
  }
  get tabIndexStart() {
    var e;
    return ((e = this.config) == null ? void 0 : e.tabIndexStart) || this.getTabIndexStart();
  }
  // Return the layout identifier, for example, presenter-presentation
  get identifier() {
    return "default";
  }
  get icon() {
    return "icon.png";
  }
  // Return the array of valid content in the configuration of the plugin
  get validContent() {
    var e;
    return ((e = this.config) == null ? void 0 : e.validContent) || [];
  }
  get validContentIds() {
    const e = [];
    return this.validContent.forEach((t) => e.push(t.id)), e;
  }
  // Gets the valid content ids that matches the streamData
  getValidContentIds(e) {
    const t = [];
    return this.validContent.forEach((n) => {
      n.content.every((s) => e.some((a) => s === a.content)) && t.push(n.id);
    }), t;
  }
  // Get the valid stream data combination, according to the plugin configuration
  // The result of this function must be an array of arrays with all the possible
  // combinations. For example, for a dual stream layout and three elements in
  // streamData that matches the valid content, the resulting valid streams must be:
  // [
  //      [streamA, streamB],
  //      [streamA, streamC],
  //      [streamC, streamB]   
  // ]
  getValidStreams(e) {
    const t = [];
    return this.validContent.forEach((n) => {
      let s = [];
      n.content.every((a) => e.some((r) => {
        if (a === r.content)
          return s.push(r), !0;
      })) && t.push(s);
    }), t;
  }
  canApply(e) {
    return this.getValidStreams(e).length > 0;
  }
  getLayoutStructure() {
    return {};
  }
  // Add buttons to videos
  // [
  //      icon    (required)
  //      click   (required)
  //      tabIndex
  //      ariaLabel
  //      title
  //      className
  //      position (CanvasButtonPosition.LEFT, CanvasButtonPosition.CENTER, CanvasButtonPosition.RIGHT)
  //]
  getVideoCanvasButtons(e, t, n) {
    return [];
  }
};
function Wr(i) {
  return {
    icon: i.icon,
    position: i.position,
    title: i.description,
    ariaLabel: i.ariaLabel,
    name: i.buttonName,
    click: async (e) => {
      const t = i.player.videoContainer.streamProvider.streams[e];
      await i.action(e, t == null ? void 0 : t.player, t == null ? void 0 : t.canvas, t == null ? void 0 : t.canvasPlugin);
    }
  };
}
async function Zr(i, e) {
  const t = [];
  return await ee(
    i,
    "canvasButton",
    async (n) => {
      i.log.debug(` Canvas button plugin: ${n.name}`), t.push(n);
    }
  ), t.filter((n) => n.content.indexOf(e.content) !== -1).map((n) => Wr(n));
}
const hi = [];
async function jr(i) {
  await ee(i, "canvas", (e) => {
    hi.push(e);
  });
}
async function qr(i) {
}
function Qr(i, e) {
  if (hi.length === 0)
    throw Error("No canvas plugins loaded. Note that `loadCanvasPlugins()` must to be called before use `getCanvasPlugins()`");
  let t = null;
  return hi.some((n) => {
    if (n.isCompatible(e))
      return t = n, !0;
  }), t;
}
const S = Object.freeze({
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
}), Yr = function({
  icon: i,
  tabIndex: e,
  ariaLabel: t,
  title: n,
  className: s,
  position: a = S.CENTER,
  click: r,
  content: o,
  name: l
}) {
  if (!i)
    throw new Error("Error in video layout definition. getVideoCanvasButtons(): missing 'icon' attribute.");
  if (!r)
    throw new Error("Error in video layout definition. getVideoCanvasButtons(): missing 'click' function.");
  let u = `class="align-${a}${s ? " " + s : ""}"`;
  t && (u += ` aria-label="${t}"`), n && (u += ` title="${n}"`), e !== void 0 && (u += ` tabindex="${e}"`), l !== void 0 && (u += ` name="${l}"`);
  const h = T(`
        <button ${u}><i class="button-icon" style="pointer-events: none">${i}</i></button>
    `);
  return this.buttonsArea.appendChild(h), h.addEventListener("click", async (p) => (p.stopPropagation(), await r(o), !1)), h;
}, di = async (i, e, t, n, s) => {
  const a = e.plugin;
  let r = a.tabIndexStart;
  const o = await Zr(i, n), l = [];
  return [
    ...o,
    ...a.getVideoCanvasButtons(e, n.content, n, t)
  ].forEach((u) => {
    u.tabIndex = r++, u.content = s;
    const h = Yr.apply(t, [u]);
    l.push(h);
  }), l;
}, pi = (i, e, t) => {
  let { tabIndexStart: n } = e.plugin;
  t.sort((s, a) => {
    const r = s.getBoundingClientRect().left, o = a.getBoundingClientRect().left;
    return r - o;
  }).forEach((s) => {
    s.setAttribute("tabindex", n++);
  });
};
class cs extends ne {
  constructor(e, t, n) {
    super(t, { tag: e, parent: n }), this.element.className = "video-canvas", this._userArea = null, this._buttonsArea = T(`
        <div class="button-area">
        </div>
        `, this.element);
  }
  async loadCanvas(e) {
    throw Error(`${this.name}: loadCanvas() not implemented`);
  }
  get userArea() {
    return this._userArea || (this._userArea = document.createElement("div"), this._userArea.className = "user-area", this.element.appendChild(this._userArea)), this._userArea;
  }
  get buttonsArea() {
    return this._buttonsArea;
  }
  showButtons() {
    this.buttonsArea.style.display = null;
  }
  hideButtons() {
    this.buttonsArea.style.display = "none";
  }
}
class hs extends et {
  get type() {
    return "canvas";
  }
  get canvasType() {
    return "";
  }
  isCompatible(e) {
    return Array.isArray(e == null ? void 0 : e.canvas) ? e.canvas.indexOf(this.canvasType) !== -1 : e.canvas === this.canvasType;
  }
  getCanvasInstance(e) {
    throw Error(`${this.name} canvas plugin: getCanvasInstance() not implemented`);
  }
}
let Yt = null, Ue = class ds extends Bt {
  static Get() {
    return Yt || (Yt = new ds()), Yt;
  }
  get moduleName() {
    return "paella-core default video layouts";
  }
  get moduleVersion() {
    return tt.version;
  }
};
const Ai = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.920758,0,0,0.920758,2.50561,1.21236)">
        <path d="M11.937,17.699L11.937,21.044C11.937,21.656 11.573,22.209 11.012,22.451C10.45,22.693 9.798,22.578 9.354,22.158L1.874,15.1C1.568,14.811 1.394,14.408 1.394,13.986C1.394,13.564 1.568,13.161 1.874,12.872L9.354,5.814C9.798,5.394 10.45,5.279 11.012,5.521C11.573,5.763 11.937,6.316 11.937,6.928L11.937,10.272L22.937,10.272C23.783,10.272 24.469,10.958 24.469,11.804L24.469,16.168C24.469,17.014 23.783,17.699 22.937,17.699L11.937,17.699ZM26.063,23.11L26.063,19.765C26.063,19.153 26.427,18.6 26.988,18.358C27.55,18.116 28.201,18.231 28.646,18.651L36.126,25.709C36.432,25.999 36.606,26.402 36.606,26.823C36.606,27.245 36.432,27.648 36.126,27.937L28.646,34.996C28.201,35.415 27.55,35.53 26.988,35.288C26.427,35.046 26.063,34.493 26.063,33.882L26.063,30.537L15.063,30.537C14.217,30.537 13.531,29.851 13.531,29.005L13.531,24.641C13.531,23.795 14.217,23.11 15.063,23.11L26.063,23.11Z"/>
    </g>
</svg>
`, Mt = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(-0.620305,0,0,0.839332,25.2077,0.462208)">
        <path d="M-20.625,8.591C-20.625,6.174 -17.975,4.215 -14.704,4.215L31.492,4.215C34.763,4.215 37.413,6.174 37.413,8.591L37.413,35.582C37.413,37.998 34.763,39.957 31.492,39.957L-14.704,39.957C-17.975,39.957 -20.625,37.998 -20.625,35.582L-20.625,8.591ZM1.285,12.825L8.1,7.789L-15.786,7.789L-15.786,25.442L-8.972,20.406L6.737,32.016L16.994,24.435L1.285,12.825Z" />
    </g>
</svg>
`, Ye = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,20,-8.28427)">
        <path d="M23,17L23,4.998C23,4.203 22.684,3.44 22.122,2.878C21.56,2.316 20.797,2 20.002,2C20.001,2 19.999,2 19.998,2C19.203,2 18.44,2.316 17.878,2.878C17.316,3.44 17,4.203 17,4.998C17,9.375 17,17 17,17L4.998,17C4.203,17 3.44,17.316 2.878,17.878C2.316,18.44 2,19.203 2,19.998C2,19.999 2,20.001 2,20.002C2,20.797 2.316,21.56 2.878,22.122C3.44,22.684 4.203,23 4.998,23C9.375,23 17,23 17,23L17,35.002C17,35.797 17.316,36.56 17.878,37.122C18.44,37.684 19.203,38 19.998,38C19.999,38 20.001,38 20.002,38C20.797,38 21.56,37.684 22.122,37.122C22.684,36.56 23,35.797 23,35.002C23,30.625 23,23 23,23L35.002,23C35.797,23 36.56,22.684 37.122,22.122C37.684,21.56 38,20.797 38,20.002C38,20.001 38,19.999 38,19.998C38,19.203 37.684,18.44 37.122,17.878C36.56,17.316 35.797,17 35.002,17C30.625,17 23,17 23,17Z"/>
    </g>
</svg>`, it = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g>
        <path d="M18,13.029L18,26.971C18,27.509 17.786,28.025 17.406,28.406C17.025,28.786 16.509,29 15.971,29L3.029,29C2.491,29 1.975,28.786 1.594,28.406C1.214,28.025 1,27.509 1,26.971L1,13.029C1,12.491 1.214,11.975 1.594,11.594C1.975,11.214 2.491,11 3.029,11L15.971,11C16.509,11 17.025,11.214 17.406,11.594C17.786,11.975 18,12.491 18,13.029ZM39,13.029L39,26.971C39,27.509 38.786,28.025 38.406,28.406C38.025,28.786 37.509,29 36.971,29L24.029,29C23.491,29 22.975,28.786 22.594,28.406C22.214,28.025 22,27.509 22,26.971L22,13.029C22,12.491 22.214,11.975 22.594,11.594C22.975,11.214 23.491,11 24.029,11L36.971,11C37.509,11 38.025,11.214 38.406,11.594C38.786,11.975 39,12.491 39,13.029ZM21,7L21,33L19,33L19,7L21,7Z"/>
    </g>
</svg>
`, Kr = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(-0.620305,0,0,0.839332,25.2077,0.462208)">
        <g transform="matrix(-1.61211,0,0,1.19142,40.6376,-0.550686)">
            <path d="M38.001,14.89L16.256,14.89C15.767,14.89 15.297,15.084 14.951,15.43C14.605,15.776 14.41,16.246 14.41,16.735C14.41,21.528 14.41,33.999 14.41,33.999L5.673,33.999C3.644,33.999 2,32.355 2,30.327L2,7.673C2,5.644 3.644,4 5.673,4L34.329,4C36.358,4 38.001,5.644 38.001,7.673L38.001,14.89Z"/>
        </g>
        <g transform="matrix(-1.62701,0,0,1.19712,41.1319,-0.602464)">
            <path d="M39.174,17.858C39.174,17.501 39.032,17.158 38.781,16.906C38.529,16.653 38.188,16.511 37.833,16.511C33.587,16.511 20.516,16.511 17.043,16.511C16.816,16.511 16.598,16.602 16.438,16.763C16.278,16.924 16.188,17.142 16.188,17.37C16.188,20.366 16.188,30.369 16.188,34.019C16.188,34.376 16.329,34.719 16.581,34.971C16.832,35.224 17.173,35.366 17.529,35.366C21.597,35.366 33.765,35.366 37.833,35.366C38.188,35.366 38.529,35.224 38.781,34.971C39.032,34.719 39.174,34.376 39.174,34.019C39.174,30.548 39.174,21.329 39.174,17.858Z"/>
        </g>
    </g>
</svg>
`;
let on = class extends Ne {
  getPluginModuleInstance() {
    return Ue.Get();
  }
  get name() {
    return super.name || "es.upv.paella.dualVideoDynamic";
  }
  get layoutType() {
    return "dynamic";
  }
  async load() {
    this.pipContentIds = this.config.pipContentIds || [], this.allowSwitchSide = this.config.allowSwitchSide !== void 0 ? this.config.allowSwitchSide : !0;
  }
  getVideoCanvasButtons(e, t, n, s) {
    const a = this.player.getCustomPluginIcon(this.name, "iconMaximize") || Mt, r = this.player.getCustomPluginIcon(this.name, "iconSideBySide") || it, o = this.player.getCustomPluginIcon(this.name, "iconSwitchSide") || Ai, l = this.player.getCustomPluginIcon(this.name, "iconClose") || Ye, u = this.player.getCustomPluginIcon(this.name, "iconPiP") || Kr, h = () => this._currentContent.find((m) => m.id === t), p = () => h().size === 25, d = () => h().size > 50, _ = [];
    return p() || d() ? _.push({
      icon: r,
      position: S.LEFT,
      title: this.player.translate("Dual stream 50%"),
      ariaLabel: this.player.translate("Dual stream 50%"),
      name: this.name + ":iconSideBySide",
      click: async () => {
        this._currentContent.forEach((m) => {
          m.size = 50;
        }), await this.player.videoContainer.updateLayout();
      }
    }) : _.push({
      icon: a,
      position: S.LEFT,
      title: this.player.translate("Maximize video"),
      ariaLabel: this.player.translate("Maximize video"),
      name: this.name + ":iconMaximize",
      click: async () => {
        this._currentContent.forEach((m) => {
          m.size = m.id === t ? 75 : 25;
        }), await this.player.videoContainer.updateLayout();
      }
    }), this.allowSwitchSide && _.push({
      icon: o,
      position: S.LEFT,
      title: this.player.translate("Switch side"),
      ariaLabel: this.player.translate("Switch side"),
      name: this.name + ":iconSwitchSide",
      click: async () => {
        const m = this._currentContent[0].id, C = this._currentContent[1].id, b = this._currentContent[0].size, c = this._currentContent[1].size;
        this._currentContent[0].id = C, this._currentContent[0].size = c, this._currentContent[1].id = m, this._currentContent[1].size = b, await this.player.videoContainer.updateLayout();
      }
    }), _.push({
      icon: l,
      position: S.RIGHT,
      title: this.player.translate("Close video"),
      ariaLabel: this.player.translate("Close video"),
      name: this.name + ":iconClose",
      click: async () => {
        const m = this.player.videoContainer.validContentIds.filter((C) => C.indexOf("-") === -1).find((C) => C != t);
        await this.player.videoContainer.setLayout(m);
      }
    }), this.pipContentIds.length > 0 && _.push({
      icon: u,
      position: S.LEFT,
      title: this.player.translate("Picture-in-picture"),
      ariaLabel: this.player.translate("Picture-in-picture"),
      name: this.name + ":iconPiP",
      click: async () => {
        const m = this.player.videoContainer.validContentIds.find((C) => this.pipContentIds.indexOf(C) !== -1);
        await this.player.videoContainer.setLayout(m, t);
      }
    }), _;
  }
  getLayoutStructure(e, t, n) {
    if (!this._currentContent) {
      const { content: s } = this.validContent.find((a) => a.id === t);
      this._currentContent = s.map((a) => ({
        id: a,
        size: 50
      }));
    }
    return {
      id: "dual-dynamic",
      videos: [
        {
          content: this._currentContent[0].id,
          visible: !0,
          size: this._currentContent[0].size
        },
        {
          content: this._currentContent[1].id,
          visible: !0,
          size: this._currentContent[1].size
        }
      ]
    };
  }
};
const ps = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(-0.620305,0,0,0.839332,25.2077,0.462208)">
        <g transform="matrix(-1.50139,0,0,1.10483,39.8625,1.72153)">
            <path d="M22.034,28.802C22.58,28.752 23.089,28.64 23.626,28.496C28.793,27.112 31.864,21.792 30.48,16.625C30.189,15.54 29.715,14.525 29.088,13.619L31.915,8.722C33.663,10.535 34.942,12.776 35.606,15.251C37.748,23.248 32.996,31.48 24.999,33.622C24.011,33.887 23.04,34.063 22.034,34.123L22.034,40.015L13,31.5L22.034,23.015L22.034,28.802Z" />
        </g>
        <g transform="matrix(1.50139,1.35303e-16,1.83867e-16,-1.10483,-24.8768,44.5033)">
            <path d="M22.161,28.786C22.706,28.736 23.089,28.64 23.626,28.496C28.793,27.112 31.864,21.792 30.48,16.625C30.189,15.54 29.715,14.525 29.088,13.619L31.915,8.722C33.663,10.535 34.942,12.776 35.606,15.251C37.748,23.248 32.996,31.48 24.999,33.622C24.011,33.887 23.167,34.048 22.161,34.107L22.161,40L13,31.5L22.161,23L22.161,28.786Z" />
        </g>
    </g>
</svg>
`, Jr = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(-0.620305,0,0,0.839332,25.2077,0.462208)">
        <g transform="matrix(-1.61211,0,0,1.25099,40.6376,0.938594)">
            <path d="M26,18.498C26,16.566 24.356,15 22.327,15C17.811,15 10.189,15 5.673,15C3.644,15 2,16.566 2,18.498C2,22.151 2,27.849 2,31.502C2,33.434 3.644,35 5.673,35C10.189,35 17.811,35 22.327,35C24.356,35 26,33.434 26,31.502C26,27.849 26,22.151 26,18.498Z" />
        </g>
        <path d="M-2.889,42.341L-16.002,42.341C-17.664,42.341 -19.01,41.345 -19.01,40.117L-19.01,11.346L-15.787,13.728L-15.787,36.879C-15.787,37.695 -15.348,38.478 -14.567,39.056C-13.785,39.633 -12.726,39.958 -11.621,39.958L-2.889,39.958L-2.889,42.341ZM30.962,18.512L30.962,8.485C30.962,7.669 30.523,6.886 29.741,6.308C28.96,5.731 27.9,5.406 26.795,5.406L-4.721,5.406L-7.945,3.024L31.181,3.024C32.842,3.024 34.189,4.019 34.189,5.247L34.189,18.512L30.962,18.512Z" />
        <g transform="matrix(-0.595969,-0.440448,-1.13993,0.842464,17.4661,11.4472)">
            <path d="M18.389,14.006L18.389,18L5,11L18.389,4L18.389,7.994L36,7.994L36,14.006L18.389,14.006Z" />
        </g>
    </g>
</svg>
`;
let X = 0;
const xi = [
  // First layout: side by side
  {
    id: "side-by-side",
    videos: [
      {
        content: null,
        rect: [
          { aspectRatio: "16/9", width: 560, height: 315, top: 218, left: 712 },
          { aspectRatio: "16/10", width: 560, height: 350, top: 206, left: 712 },
          { aspectRatio: "4/3", width: 560, height: 420, top: 173, left: 712 },
          { aspectRatio: "5/3", width: 560, height: 336, top: 206, left: 712 },
          { aspectRatio: "5/4", width: 560, height: 448, top: 160, left: 712 }
        ],
        visible: !0,
        layer: 1
      },
      {
        content: null,
        rect: [
          { aspectRatio: "16/9", width: 688, height: 387, top: 166, left: 10 },
          { aspectRatio: "16/10", width: 688, height: 430, top: 148, left: 10 },
          { aspectRatio: "4/3", width: 688, height: 516, top: 111, left: 10 },
          { aspectRatio: "5/3", width: 690, height: 414, top: 154, left: 10 },
          { aspectRatio: "5/4", width: 690, height: 552, top: 96, left: 10 }
        ],
        visible: !0,
        layer: "1"
      }
    ],
    buttons: []
  },
  // Second layout: PIP left
  {
    id: "pip-left",
    videos: [
      {
        content: null,
        rect: [
          { aspectRatio: "16/9", left: 0, top: 0, width: 1280, height: 720 },
          { aspectRatio: "16/10", left: 64, top: 0, width: 1152, height: 720 },
          { aspectRatio: "5/3", left: 40, top: 0, width: 1200, height: 720 },
          { aspectRatio: "5/4", left: 190, top: 0, width: 900, height: 720 },
          { aspectRatio: "4/3", left: 160, top: 0, width: 960, height: 720 }
        ],
        visible: !0,
        layer: 1
      },
      {
        content: null,
        rect: [
          { aspectRatio: "16/9", left: 50, top: 470, width: 350, height: 197 },
          { aspectRatio: "16/10", left: 50, top: 448, width: 350, height: 219 },
          { aspectRatio: "5/3", left: 50, top: 457, width: 350, height: 210 },
          { aspectRatio: "5/4", left: 50, top: 387, width: 350, height: 280 },
          { aspectRatio: "4/3", left: 50, top: 404, width: 350, height: 262 }
        ],
        visible: !0,
        layer: 2
      }
    ],
    buttons: []
  },
  // Third layout: PIP right
  {
    id: "pip-right",
    videos: [
      {
        content: null,
        rect: [
          { aspectRatio: "16/9", left: 0, top: 0, width: 1280, height: 720 },
          { aspectRatio: "16/10", left: 64, top: 0, width: 1152, height: 720 },
          { aspectRatio: "5/3", left: 40, top: 0, width: 1200, height: 720 },
          { aspectRatio: "5/4", left: 190, top: 0, width: 900, height: 720 },
          { aspectRatio: "4/3", left: 160, top: 0, width: 960, height: 720 }
        ],
        visible: !0,
        layer: 1
      },
      {
        content: null,
        rect: [
          { aspectRatio: "16/9", left: 880, top: 470, width: 350, height: 197 },
          { aspectRatio: "16/10", left: 880, top: 448, width: 350, height: 219 },
          { aspectRatio: "5/3", left: 880, top: 457, width: 350, height: 210 },
          { aspectRatio: "5/4", left: 880, top: 387, width: 350, height: 280 },
          { aspectRatio: "4/3", left: 880, top: 404, width: 350, height: 262 }
        ],
        visible: !0,
        layer: 2
      }
    ],
    buttons: []
  }
];
function Xr(i) {
  return X = (X + 1) % xi.length, Di(i);
}
function Be(i, e) {
  return X = e < xi.length ? e : X, Di(i);
}
function Di(i) {
  let e = JSON.parse(JSON.stringify(xi[X]));
  return e.videos[0].content = i[0], e.videos[1].content = i[1], e;
}
class eo extends Ne {
  getPluginModuleInstance() {
    return Ue.Get();
  }
  get name() {
    return super.name || "es.upv.paella.dualVideo";
  }
  get identifier() {
    return "dual-video";
  }
  async load() {
    let e = qe("dualVideoLayoutIndex");
    e !== "" && (X = Number(e)), this.player.log.debug("Dual video layout loaded");
  }
  getValidStreams(e) {
    return super.getValidStreams(e).filter((t) => t.length === 2);
  }
  switchContent() {
    const e = this._currentContent[0], t = this._currentContent[1];
    this._currentContent[0] = t, this._currentContent[1] = e, this.player.videoContainer.updateLayout();
  }
  async switchMinimized() {
    Xr(this._currentContent), await this.player.videoContainer.updateLayout();
  }
  async minimizeVideo(e) {
    let t = !0;
    if (e === this._currentContent[0]) {
      const n = this._currentContent[0], s = this._currentContent[1];
      this._currentContent[0] = s, this._currentContent[1] = n, t = !1;
    }
    X === 1 && t ? Be(this._currentContent, 2) : Be(this._currentContent, 1), await this.player.videoContainer.updateLayout();
  }
  async maximizeVideo(e) {
    let t = !0;
    if (e === this._currentContent[1]) {
      const n = this._currentContent[0], s = this._currentContent[1];
      this._currentContent[0] = s, this._currentContent[1] = n, t = !1;
    }
    X === 1 && t ? Be(this._currentContent, 2) : Be(this._currentContent, 1), await this.player.videoContainer.updateLayout();
  }
  async setSideBySide() {
    Be(this._currentContent, 0), await this.player.videoContainer.updateLayout();
  }
  get minimizedContent() {
    return X === 0 ? "" : this._currentContent[1];
  }
  async closeVideo(e) {
    const t = this.player.videoContainer.validContentIds.filter((n) => n.indexOf("-") === -1).find((n) => n != e);
    await this.player.videoContainer.setLayout(t);
  }
  getVideoCanvasButtons(e, t, n, s) {
    if (e.id === "side-by-side")
      return [
        // Swap
        {
          icon: this.player.getCustomPluginIcon(this.name, "iconRotate") || ps,
          position: S.LEFT,
          title: this.player.translate("Swap position of the videos"),
          ariaLabel: this.player.translate("Swap position of the videos"),
          name: this.name + ":iconRotate",
          click: async () => {
            await this.switchContent();
          }
        },
        // Minimize
        {
          icon: this.player.getCustomPluginIcon(this.name, "iconMaximize") || Mt,
          position: S.LEFT,
          title: this.player.translate("Maximize video"),
          ariaLabel: this.player.translate("Maximize video"),
          name: this.name + ":iconMaximize",
          click: async () => {
            await this.maximizeVideo(t);
          }
        },
        // Close
        {
          icon: this.player.getCustomPluginIcon(this.name, "iconClose") || Ye,
          position: S.RIGHT,
          title: this.player.translate("Close video"),
          ariaLabel: this.player.translate("Close video"),
          name: this.name + ":iconClose",
          click: async () => {
            await this.closeVideo(t);
          }
        }
      ];
    {
      const a = [];
      return t === this.minimizedContent ? (a.push({
        icon: this.player.getCustomPluginIcon(this.name, "iconMaximize") || Mt,
        position: S.LEFT,
        title: this.player.translate("Maximize video"),
        ariaLabel: this.player.translate("Maximize video"),
        name: this.name + ":iconMaximize",
        click: async () => {
          await this.switchContent();
        }
      }), a.push({
        icon: this.player.getCustomPluginIcon(this.name, "iconSwitchSide") || Ai,
        position: S.LEFT,
        title: this.player.translate("Place the video on the other side of the screen"),
        ariaLabel: this.player.translate("Place the video on the other side of the screen"),
        name: this.name + ":iconSwitchSide",
        click: async () => {
          await this.minimizeVideo(t);
        }
      }), a.push({
        icon: this.player.getCustomPluginIcon(this.name, "iconClose") || Ye,
        position: S.RIGHT,
        title: this.player.translate("Close video"),
        ariaLabel: this.player.translate("Close video"),
        name: this.name + ":iconClose",
        click: async () => {
          await this.closeVideo(t);
        }
      })) : (a.push({
        icon: this.player.getCustomPluginIcon(this.name, "iconMinimize") || Jr,
        position: S.LEFT,
        title: this.player.translate("Minimize video"),
        ariaLabel: this.player.translate("Minimize video"),
        name: this.name + ":iconMinimize",
        click: async () => {
          await this.switchContent();
        }
      }), a.push({
        icon: this.player.getCustomPluginIcon(this.name, "iconSideBySide") || it,
        position: S.LEFT,
        title: this.player.translate("Put the videos side by side"),
        ariaLabel: this.player.translate("Put the videos side by side"),
        name: this.name + ":iconSideBySide",
        click: async () => {
          await this.setSideBySide();
        }
      }), a.push({
        icon: this.player.getCustomPluginIcon(this.name, "iconClose") || Ye,
        position: S.RIGHT,
        title: this.player.translate("Close video"),
        ariaLabel: this.player.translate("Close video"),
        name: this.name + ":iconClose",
        click: async () => {
          await this.closeVideo(t);
        }
      })), a;
    }
  }
  getLayoutStructure(e, t) {
    if (!this._currentContent || this._currentContentId !== t) {
      const { content: a } = this.validContent.find((l) => l.id === t);
      this._currentContent = a, this._currentContentId = t;
      const r = qe("dualVideoLayoutContent0"), o = qe("dualVideoLayoutContent1");
      r !== "" && o !== "" && this._currentContent.indexOf(r) !== -1 && this._currentContent.indexOf(o) !== -1 && (this._currentContent[0] = r, this._currentContent[1] = o);
    }
    const n = Di(this._currentContent), s = {
      id: n.id,
      player: this.player,
      name: { es: "Dos streams con posición dinámica" },
      hidden: !1,
      videos: n.videos,
      buttons: []
    };
    return xe("dualVideoLayoutIndex", X), xe("dualVideoLayoutContent0", this._currentContent[0]), xe("dualVideoLayoutContent1", this._currentContent[1]), s;
  }
}
const ln = {
  id: "pip-left",
  name: { es: "Dos streams imagen dentro de imagen" },
  hidden: !1,
  videos: [
    {
      content: null,
      rect: [
        { aspectRatio: "16/9", left: 0, top: 0, width: 1280, height: 720 },
        { aspectRatio: "16/10", left: 64, top: 0, width: 1152, height: 720 },
        { aspectRatio: "5/3", left: 40, top: 0, width: 1200, height: 720 },
        { aspectRatio: "5/4", left: 190, top: 0, width: 900, height: 720 },
        { aspectRatio: "4/3", left: 160, top: 0, width: 960, height: 720 },
        { aspectRatio: "9/16", left: 617, top: 17, width: 386, height: 687 }
      ],
      visible: !0,
      layer: 1
    },
    {
      content: null,
      rect: [
        { aspectRatio: "16/9", left: 50, top: 470, width: 350, height: 197 },
        { aspectRatio: "16/10", left: 50, top: 448, width: 350, height: 219 },
        { aspectRatio: "5/3", left: 50, top: 457, width: 350, height: 210 },
        { aspectRatio: "5/4", left: 50, top: 387, width: 350, height: 280 },
        { aspectRatio: "4/3", left: 50, top: 404, width: 350, height: 262 },
        { aspectRatio: "9/16", left: 224, top: 301, width: 224, height: 400 }
      ],
      visible: !0,
      layer: 2
    }
  ],
  buttons: []
}, to = {
  id: "pip-right",
  name: { es: "Dos streams imagen dentro de imagen a la derecha" },
  hidden: !1,
  videos: [
    {
      content: null,
      rect: [
        { aspectRatio: "16/9", left: 0, top: 0, width: 1280, height: 720 },
        { aspectRatio: "16/10", left: 64, top: 0, width: 1152, height: 720 },
        { aspectRatio: "5/3", left: 40, top: 0, width: 1200, height: 720 },
        { aspectRatio: "5/4", left: 190, top: 0, width: 900, height: 720 },
        { aspectRatio: "4/3", left: 160, top: 0, width: 960, height: 720 },
        { aspectRatio: "9/16", left: 242, top: 17, width: 386, height: 687 }
      ],
      visible: !0,
      layer: 1
    },
    {
      content: null,
      rect: [
        { aspectRatio: "16/9", left: 880, top: 470, width: 350, height: 197 },
        { aspectRatio: "16/10", left: 880, top: 448, width: 350, height: 219 },
        { aspectRatio: "5/3", left: 880, top: 457, width: 350, height: 210 },
        { aspectRatio: "5/4", left: 880, top: 387, width: 350, height: 280 },
        { aspectRatio: "4/3", left: 880, top: 404, width: 350, height: 262 },
        { aspectRatio: "9/16", left: 887, top: 304, width: 224, height: 400 }
      ],
      visible: !0,
      layer: 2
    }
  ],
  buttons: []
};
class io extends Ne {
  getPluginModuleInstance() {
    return Ue.Get();
  }
  get name() {
    return super.name || "es.upv.paella.dualVideoPiP";
  }
  get identifier() {
    return "dual-video-pip";
  }
  async load() {
    this._currentLayout = ln, this.dualVideoContentIds = this.config.dualVideoContentIds || [];
  }
  getValidStreams(e) {
    return super.getValidStreams(e).filter((t) => t.length === 2);
  }
  getVideoCanvasButtons(e, t, n, s) {
    const a = this.player.getCustomPluginIcon(this.name, "iconClose") || Ye, r = this.player.getCustomPluginIcon(this.name, "iconSwitchSide") || Ai, o = this.player.getCustomPluginIcon(this.name, "iconMaximize") || Mt, l = this.player.getCustomPluginIcon(this.name, "iconSideBySide") || it, u = [
      {
        icon: a,
        position: S.RIGHT,
        title: this.player.translate("Close video"),
        ariaLabel: this.player.translate("Close video"),
        name: this.name + ":iconClose",
        click: async () => {
          const h = this.player.videoContainer.validContentIds.filter((p) => p.indexOf("-") === -1).find((p) => p !== t);
          await this.player.videoContainer.setLayout(h);
        }
      }
    ];
    return t === this._pipVideo ? (u.push({
      icon: r,
      position: S.LEFT,
      title: this.player.translate("Switch side"),
      ariaLabel: this.player.translate("Switch side"),
      name: this.name + ":iconSwitchSide",
      click: async () => {
        this.switchSide(), await this.player.videoContainer.updateLayout(this._fullVideo);
      }
    }), u.push({
      icon: o,
      position: S.LEFT,
      title: this.player.translate("Maximize video"),
      ariaLabel: this.player.translate("Maximize video"),
      name: this.name + ":iconMaximize",
      click: async () => {
        this.switchSources(), await this.player.videoContainer.updateLayout(this._fullVideo);
      }
    })) : this.dualVideoContentIds.length > 0 && u.push({
      icon: l,
      position: S.LEFT,
      title: this.player.translate("Set side by side"),
      ariaLabel: this.player.translate("Set side by side"),
      name: this.name + ":iconSideBySide",
      click: async () => {
        const h = this.player.videoContainer.validContentIds, p = this.dualVideoContentIds.find((d) => h.indexOf(d) !== -1);
        p && this.player.videoContainer.setLayout(p);
      }
    }), u;
  }
  switchSide() {
    this._currentLayout.id === "pip-left" ? this._currentLayout = to : this._currentLayout = ln;
  }
  switchSources() {
    const e = this._pipVideo;
    this._pipVideo = this._fullVideo, this._fullVideo = e;
  }
  getLayoutStructure(e, t, n) {
    const { content: s } = this.validContent.find((r) => r.id === t);
    n && s.find((r) => r === n) ? (this._fullVideo = n, this._pipVideo = s.find((r) => r !== n)) : (!this._pipVideo || !this._fullVideo) && (this._pipVideo = s[0], this._fullVideo = s[1]);
    const a = JSON.parse(JSON.stringify(this._currentLayout));
    return a.player = this.player, a.videos[0].content = this._fullVideo, a.videos[1].content = this._pipVideo, a;
  }
}
class no extends Ne {
  getPluginModuleInstance() {
    return Ue.Get();
  }
  get name() {
    return super.name || "es.upv.paella.singleVideo";
  }
  get identifier() {
    return "single-video";
  }
  async load() {
    this.player.log.debug("Single video layout loaded"), this.dualVideoContentIds = this.config.dualVideoContentIds || [
      "presenter-presentation-dynamic",
      "presenter-2-presentation-dynamic",
      "presenter-presenter-2-dynamic",
      "presenter-presentation",
      "presenter-2-presentation",
      "presenter-presenter-2"
    ];
  }
  getValidStreams(e) {
    return super.getValidStreams(e).filter((t) => t.length === 1);
  }
  getVideoCanvasButtons(e, t, n, s) {
    return this._multiStream ? [
      {
        icon: this.player.getCustomPluginIcon(this.name, "iconSideBySide") || it,
        position: S.LEFT,
        title: this.player.translate("Two videos 50%"),
        ariaLabel: this.player.translate("Two videos 50%"),
        name: this.name + ":iconSideBySide",
        click: () => {
          const a = this.player.videoContainer.validContentIds, r = this.dualVideoContentIds.find((o) => a.indexOf(o) !== -1);
          r && this.player.videoContainer.setLayout(r);
        }
      }
    ] : [];
  }
  getLayoutStructure(e, t) {
    const n = this.validContent.find((a) => a.id === t), s = {
      player: this.player,
      name: { es: "One stream" },
      hidden: !1,
      videos: [
        {
          content: n.content[0],
          rect: [
            { aspectRatio: "1/1", left: 280, top: 0, width: 720, height: 720 },
            { aspectRatio: "6/5", left: 208, top: 0, width: 864, height: 720 },
            { aspectRatio: "5/4", left: 190, top: 0, width: 900, height: 720 },
            { aspectRatio: "4/3", left: 160, top: 0, width: 960, height: 720 },
            { aspectRatio: "11/8", left: 145, top: 0, width: 990, height: 720 },
            { aspectRatio: "1.41/1", left: 132, top: 0, width: 1015, height: 720 },
            { aspectRatio: "1.43/1", left: 125, top: 0, width: 1029, height: 720 },
            { aspectRatio: "3/2", left: 100, top: 0, width: 1080, height: 720 },
            { aspectRatio: "16/10", left: 64, top: 0, width: 1152, height: 720 },
            { aspectRatio: "5/3", left: 40, top: 0, width: 1200, height: 720 },
            { aspectRatio: "16/9", left: 0, top: 0, width: 1280, height: 720 },
            { aspectRatio: "1.85/1", left: 0, top: 14, width: 1280, height: 692 },
            { aspectRatio: "2.35/1", left: 0, top: 87, width: 1280, height: 544 },
            { aspectRatio: "2.41/1", left: 0, top: 94, width: 1280, height: 531 },
            { aspectRatio: "2.76/1", left: 0, top: 128, width: 1280, height: 463 }
          ],
          visible: !0,
          layer: 1
        }
      ],
      background: { content: "slide_professor_paella.jpg", zIndex: 5, rect: { left: 0, top: 0, width: 1280, height: 720 }, visible: !0, layer: 0 },
      logos: [{ content: "paella_logo.png", zIndex: 5, rect: { top: 10, left: 10, width: 49, height: 42 } }],
      buttons: [],
      onApply: function() {
      }
    };
    return e.length > 1 && (this._multiStream = !0), s;
  }
}
class so extends Ne {
  getPluginModuleInstance() {
    return Ue.Get();
  }
  get name() {
    return super.name || "es.upv.paella.singleVideoDynamic";
  }
  get layoutType() {
    return "dynamic";
  }
  async load() {
    this.player.log.debug("Single video dynamic layout loaded"), this.dualVideoContentIds = this.config.dualVideoContentIds || [
      "presenter-presentation-dynamic",
      "presenter-2-presentation-dynamic",
      "presenter-presenter-2-dynamic",
      "presenter-presentation",
      "presenter-2-presentation",
      "presenter-presenter-2"
    ];
  }
  getVideoCanvasButtons(e, t, n, s) {
    const a = this.player.getCustomPluginIcon(this.name, "iconSideBySide") || it, r = [];
    return this._multiStream && r.push({
      icon: a,
      position: S.LEFT,
      title: this.player.translate("Dual stream 50%"),
      ariaLabel: this.player.translate("Dual stream 50%"),
      name: this.name + ":iconSideBySide",
      click: async () => {
        const o = this.player.videoContainer.validContentIds, l = this.dualVideoContentIds.find((u) => o.indexOf(u) !== -1);
        l && this.player.videoContainer.setLayout(l);
      }
    }), r;
  }
  getLayoutStructure(e, t, n) {
    e.length > 1 && (this._multiStream = !0);
    const { content: s } = this.validContent.find((a) => a.id === t);
    return this._currentContent = s.map((a) => ({
      id: a,
      size: 50
    })), {
      id: "single-dynamic",
      videos: [
        {
          content: this._currentContent[0].id,
          visible: !0,
          size: this._currentContent[0].size
        }
      ]
    };
  }
}
const ao = {
  videos: [
    {
      content: {},
      rect: [
        { aspectRatio: "16/9", left: 239, top: 17, width: 803, height: 451 }
      ],
      visible: !0,
      layer: 1
    },
    {
      content: {},
      rect: [
        { aspectRatio: "16/9", left: 44, top: 482, width: 389, height: 218 }
      ],
      visible: !0,
      layer: 1
    },
    {
      content: {},
      rect: [
        { aspectRatio: "16/9", left: 847, top: 482, width: 389, height: 218 }
      ],
      visible: !0,
      layer: 1
    }
  ],
  buttons: [
    {
      rect: { left: 618, top: 495, width: 45, height: 45 },
      onClick: function(i) {
        this.rotate();
      },
      label: "Rotate",
      icon: "icon_rotate.svg",
      layer: 2
    }
  ]
};
function ro(i) {
  let e = JSON.parse(JSON.stringify(ao));
  return e.videos[0].content = i[0], e.videos[1].content = i[1], e.videos[2].content = i[2], e;
}
class oo extends Ne {
  getPluginModuleInstance() {
    return Ue.Get();
  }
  get name() {
    return super.name || "es.upv.paella.tripleVideo";
  }
  get identifier() {
    return "triple-video";
  }
  async load() {
    this.player.log.debug("Triple video layout loaded");
  }
  getValidStreams(e) {
    return super.getValidStreams(e).filter((t) => t.length === 3);
  }
  switchContent() {
    const e = this._currentContent[0], t = this._currentContent[1], n = this._currentContent[2];
    this._currentContent[0] = n, this._currentContent[1] = e, this._currentContent[2] = t, this.player.videoContainer.updateLayout();
  }
  getLayoutStructure(e, t) {
    if (!this._currentContent || this._currentContentId !== t) {
      this._currentContentId = t;
      const { content: s } = this.validContent.find((a) => a.id === t);
      this._currentContent = s;
    }
    const n = ro(this._currentContent);
    return {
      player: this.player,
      name: { es: "Three streams with dynamic position" },
      hidden: !1,
      videos: n.videos,
      buttons: [
        {
          rect: n.buttons[0].rect,
          onClick: () => {
            this.switchContent();
          },
          label: "Switch",
          icon: ps,
          layer: 2,
          ariaLabel: "Swap the position of the videos",
          title: "Swap the position of the videos"
        }
      ]
    };
  }
}
class lo extends cs {
  constructor(e, t) {
    super("div", e, t), this.element.classList.add("image-canvas");
  }
  async loadCanvas(e) {
    e.element.style.width = "100%", e.element.style.height = "100%";
  }
}
class uo extends hs {
  get name() {
    return super.name || "es.upv.paella.audioCanvas";
  }
  get canvasType() {
    return "audio";
  }
  getCanvasInstance(e) {
    return new lo(this.player, e);
  }
}
class co extends cs {
  constructor(e, t) {
    super("div", e, t);
  }
  async loadCanvas(e) {
    e.element.style.width = "100%", e.element.style.height = "100%", e.element.style.position = "absolute", e.element.style.top = "0", e.element.style.left = "0";
  }
}
class ho extends hs {
  get name() {
    return super.name || "es.upv.paella.videoCanvas";
  }
  get canvasType() {
    return "video";
  }
  async isCompatible(e) {
    return !Array.isArray(e.canvas) || e.canvas.length === 0 ? !0 : await super.isCompatible(e);
  }
  getCanvasInstance(e) {
    return new co(this.player, e);
  }
}
class gs extends et {
  get type() {
    return "data";
  }
  get context() {
    return this.config.context || [];
  }
  async read() {
    throw Error(`DataPlugin.read() not implemented in data plugin '${this.name}'`);
  }
  async write() {
    throw Error(`DataPlugin.write() not implemented in data plugin '${this.name}'`);
  }
  async remove() {
    throw Error(`DataPlugin.remove() not implemented in data plugin '${this.name}'`);
  }
}
class po extends Me {
  constructor(e) {
    super(e), this._dataPlugins = {}, ee(this.player, "data", async (t) => {
      var n;
      (n = t.context) == null || n.forEach((s) => {
        this._dataPlugins[s] = this._dataPlugins[s] || [], this._dataPlugins[s].push(t);
      });
    });
  }
  getDataPlugin(e) {
    let t = this._dataPlugins[e] && this._dataPlugins[e].length > 0 && this._dataPlugins[e][0];
    if (t || (t = this._dataPlugins.default && this._dataPlugins.default.length > 0 && this._dataPlugins.default[0]), !t)
      throw Error(`No data plugin found for context '${e}'`);
    return t;
  }
  getDataPlugins(e) {
    let t = this._dataPlugins[e] && this._dataPlugins[e].length > 0 && this._dataPlugins[e];
    if (t || (t = this._dataPlugins.default && this._dataPlugins.default.length > 0 && this._dataPlugins.default), !t)
      throw Error(`No data plugin found for context '${e}'`);
    return t;
  }
  async read(e, t) {
    return await this.getDataPlugin(e).read(e, t);
  }
  async write(e, t, n) {
    const s = this.getDataPlugins(e);
    if (Array.isArray(s)) {
      let a = null;
      for (let r = 0; r < s.length; ++r)
        a = await s[r].write(e, t, n);
      return a;
    } else {
      if (s)
        return await s.write(e, t, n);
      this.player.log.warn(`No such data plugin found for context '${e}'`);
    }
  }
  async remove(e, t) {
    const n = this.getDataPlugins(e);
    if (n.length > 1) {
      let s = null;
      for (let a = 0; a < n.length; ++a)
        s = await n[a].remove(e, t);
      return s;
    } else
      return await n.remove(e, t);
  }
}
let Kt = null, ms = class ys extends Bt {
  static Get() {
    return Kt || (Kt = new ys()), Kt;
  }
  get moduleName() {
    return "paella-core default data plugins";
  }
  get moduleVersion() {
    return tt.version;
  }
};
class go extends gs {
  getPluginModuleInstance() {
    return ms.Get();
  }
  get name() {
    return super.name || "es.upv.paella.cookieDataPlugin";
  }
  serializeKey(e, t) {
    return typeof t == "object" && (t = JSON.stringify(t)), `${e}|${t}`;
  }
  async read(e, t) {
    const n = this.serializeKey(e, t);
    let s = qe(n);
    try {
      s = JSON.parse(s);
    } catch {
    }
    return this.player.log.debug(`CookieDataPlugin.read: ${n}`), s;
  }
  async write(e, t, n) {
    const s = this.serializeKey(e, t);
    if (n && typeof n == "object")
      try {
        n = JSON.stringify(n);
      } catch {
        this.player.log.warn(`CookieDataPlugin.write: ${s}: invalid data object.`), n = "";
      }
    xe(s, n), this.player.log.debug(`CookieDataPlugin.write: ${s}`);
  }
  async remove(e, t) {
    const n = this.serializeKey(e, t);
    xe(n, ""), this.player.log.debug(`CookieDataPlugin.remove: ${n}`);
  }
}
class mo extends gs {
  getPluginModuleInstance() {
    return ms.Get();
  }
  get name() {
    return super.name || "es.upv.paella.localStorageDataPlugin";
  }
  serializeKey(e, t) {
    return typeof t == "object" && (t = JSON.stringify(t)), `${e}|${t}`;
  }
  async read(e, t) {
    const n = this.serializeKey(e, t);
    let s = localStorage.getItem(n);
    try {
      s = JSON.parse(s);
    } catch {
    }
    return this.player.log.debug(`LocalStorageDataPlugin.read: ${n}`), s;
  }
  async write(e, t, n) {
    const s = this.serializeKey(e, t);
    if (n && typeof n == "object")
      try {
        n = JSON.stringify(n);
      } catch {
        this.player.log.warn(`LocalStorageDataPlugin.write: ${s}: invalid data object.`), n = "";
      }
    localStorage.setItem(s, n), this.player.log.debug(`LocalStorageDataPlugin.write: ${s}`);
  }
  async remove(e, t) {
    const n = this.serializeKey(e, t);
    localStorage.setItem(n, ""), this.player.log.debug(`LocalStorageDataPlugin.remove: ${n}`);
  }
}
const yo = [
  {
    plugin: hr,
    config: {
      enabled: !1
    }
  },
  {
    plugin: dr,
    config: {
      enabled: !1
    }
  },
  {
    plugin: fr,
    config: {
      enabled: !1
    }
  },
  {
    plugin: _r,
    config: {
      enabled: !1
    }
  },
  {
    plugin: br,
    config: {
      enabled: !1
    }
  },
  {
    plugin: Ur,
    config: {
      enabled: !1
    }
  },
  {
    plugin: Fr,
    config: {
      enabled: !1
    }
  },
  {
    plugin: Hr,
    config: {
      enabled: !1
    }
  },
  {
    plugin: on,
    config: {
      enabled: !1
    }
  },
  {
    plugin: eo,
    config: {
      enabled: !1
    }
  },
  {
    plugin: io,
    config: {
      enabled: !1
    }
  },
  {
    plugin: no,
    config: {
      enabled: !1
    }
  },
  {
    plugin: so,
    config: {
      enabled: !1
    }
  },
  {
    plugin: on,
    config: {
      enabled: !1
    }
  },
  {
    plugin: oo,
    config: {
      enabled: !1
    }
  },
  {
    plugin: uo,
    config: {
      enabled: !1
    }
  },
  {
    plugin: ho,
    config: {
      enabled: !1
    }
  },
  {
    plugin: go,
    config: {
      enabled: !1,
      context: ["default"]
    }
  },
  {
    plugin: mo,
    config: {
      enable: !0,
      context: ["default"]
    }
  }
];
class fo extends ki {
  constructor() {
    super(...arguments), this._refreshContent = !0;
  }
  set refreshContent(e) {
    this._refreshContent = e;
  }
  get refreshContent() {
    return this._refreshContent;
  }
  get closeParentPopUp() {
    return this.config.closeParentPopUp || this.getCloseParentPopUp();
  }
  getCloseParentPopUp() {
    return !1;
  }
  async action(e, t) {
    super.action(e, t), this.parentPopUp = t, await this.showPopUp();
  }
  get parentPopUp() {
    return this._parentPopUp;
  }
  set parentPopUp(e) {
    this._parentPopUp = e;
  }
  get popUp() {
    return this._popUp;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  get moveable() {
    return this.config.moveable ?? !1;
  }
  get resizeable() {
    return this.config.resizeable ?? !1;
  }
  get customPopUpClass() {
    return this.config.customPopUpClass ?? "";
  }
  get closeActions() {
    var e, t;
    const n = ((e = this.config.closeActions) == null ? void 0 : e.clickOutside) ?? !0, s = ((t = this.config.closeActions) == null ? void 0 : t.closeButton) ?? !1;
    return {
      clickOutside: n,
      closeButton: s
    };
  }
  get currentContent() {
    return this._currentContent;
  }
  async getContent() {
    return T("<p>Pop Up Button Plugin Content</p>");
  }
  async checkRefreshContent() {
    if (this.refreshContent) {
      const e = await this.getContent();
      this._currentContent.innerHTML = "", Array.from(e.children).forEach((t) => this._currentContent.appendChild(t));
    }
  }
  get popUpType() {
    return this.config.popUpType || "modal";
  }
  hidePopUp() {
    this.player.playbackBar.popUp.isHidden || this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this._keyEventHandler || (this._keyEventHandler = (t) => {
      t.key === "Escape" && this.hidePopUp();
    }, this.button.addEventListener("keydown", this._keyEventHandler));
    const e = this.player.playbackBar.popUp;
    if (e.isHidden || this._contentId !== e.currentContentId) {
      const t = await this.getContent();
      this._currentContent = t, this._contentId = e.show({
        title: this.menuTitle || this.description,
        content: t,
        attachRight: this.popUpType === "timeline" || this.side === "right",
        attachLeft: this.popUpType === "timeline" || this.side === "left",
        parent: this.parentPopUp
      });
    } else
      e.hide();
  }
}
const vo = (i) => i ? `<span class="menu-title">${i}</span>` : "", _o = (i) => i ? `<i class="menu-icon">${i}</i>` : "", Co = (i) => i ? `aria-label="${i}"` : "", wo = (i) => i ? `<span class="state-text">${i}</span>` : "", bo = (i) => i ? `<i class="state-icon">${i}</i>` : "", Lo = (i, e) => i || e ? `<span class="button-state">${wo(i)}${bo(e)}</span>` : "";
function Eo({ itemData: i, buttonType: e, container: t, allItems: n, menuName: s, selectedItems: a, itemPlugin: r }) {
  const { id: o = 0, title: l = null, icon: u = null, iconText: h = null, showTitle: p = !0, stateText: d = null, stateIcon: _ = null } = i, m = this, C = document.createElement("li"), b = a[o] ?? !1, c = T(`
		<button class="menu-button-item${b ? " selected" : ""}" ${Co(l)} data-id="${o}"" id="${m.name}_menuItem_${o}">
			${_o(u)}
			${p ? vo(l) : ""}
			${d || _ ? Lo(d, _) : ""}
		</button>
	`);
  return r && (r._button = c), c.addEventListener("keydown", (g) => {
    var v;
    const y = () => {
      g.stopPropagation(), g.preventDefault();
    };
    if (g.key === "ArrowUp") {
      const w = c.dataPrev;
      w == null || w.focus(), y();
    } else if (g.key === "ArrowDown") {
      const w = c.dataNext;
      w == null || w.focus(), y();
    } else if (g.key === "Tab") {
      const w = g.shiftKey ? g.target.dataPrev : g.target.dataNext;
      w == null || w.focus(), y();
    } else g.key === "Escape" && (this.player.playbackBar.popUp.pop() ? (v = m.button) == null || v.focus() : this.focus(), y());
  }), c.addEventListener("click", async (g) => {
    if (e === "check") {
      const v = n.find((y) => y.id === o);
      a[o] = !a[o], m.itemSelected(v, n);
    } else if (e === "radio") {
      a[o] = !0;
      let v = null;
      n.forEach((y) => {
        y.id === o ? v = y : a[y.id] = !1;
      }), m.itemSelected(v, n);
    } else {
      const v = n.find((y) => y.id === o);
      m.itemSelected(v, n);
    }
    await m.checkRefreshContent(), g.stopPropagation(), m.closeOnSelect && (m.closeMenu(), Nn(m.player));
  }), C.appendChild(c), t.appendChild(C), C;
}
class To extends fo {
  get closeOnSelect() {
    return this.config.closeOnSelect === void 0 && (this.buttonType !== "check" ? this.config.closeOnSelect = !0 : this.config.closeOnSelect = !1), this.config.closeOnSelect;
  }
  setSelected(e, t) {
    this._selectedItems && (this._selectedItems[e] = t);
  }
  async getContent() {
    var e, t;
    const n = (e = document.activeElement) == null ? void 0 : e.id, s = T("<menu></menu>");
    this._content = s;
    const a = await this.getMenu();
    this._menuItems = a, this._selectedItems || (this._selectedItems = {}, this._menuItems.forEach((l) => {
      l.selected !== void 0 && l.selected !== null && (this._selectedItems[l.id] = l.selected);
    }));
    const r = self.crypto.randomUUID(), o = a.map((l) => Eo.apply(this, [{
      itemData: l,
      buttonType: typeof this.buttonType == "function" ? this.buttonType() : this.buttonType,
      container: s,
      allItems: a,
      menuName: r,
      selectedItems: this._selectedItems,
      itemPlugin: l.plugin
    }]));
    return o.forEach((l, u, h) => {
      const p = l.querySelector("button");
      let d = h[u + 1], _ = h[u - 1];
      u === h.length - 1 && (d = h[0]), u === 0 && (_ = h[h.length - 1]), p.dataNext = d == null ? void 0 : d.querySelector("button"), p.dataPrev = _ == null ? void 0 : _.querySelector("button");
    }), this._firstItem = (t = o[0]) == null ? void 0 : t.querySelector("button"), n && setTimeout(() => {
      var l;
      (l = document.getElementById(n)) == null || l.focus();
    }, 10), s;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  async getMenu() {
    return [
      { id: 0, title: "Option 1" },
      { id: 1, title: "Option 2" },
      { id: 2, title: "Option 3" },
      { id: 3, title: "Option 4" },
      { id: 4, title: "Option 5" }
    ];
  }
  // Returns the menuItems with the current menu state
  get menuItems() {
    return this._menuItems;
  }
  // If showTitles is false, then the 'title' attribute of the menu
  // items is used only as aria-label.
  // If the menu item has no icon, then the `showTitles` property is ignored
  get showTitles() {
    return !0;
  }
  get buttonType() {
    return "radio";
  }
  itemSelected(e, t) {
    this.player.log.warn(`MenuButtonPlugin (${this.name}): itemSelected() function not implemented.`);
  }
  closeMenu() {
    this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this.refreshContent = !0, await super.showPopUp(), this.player.containsFocus && this._firstItem && this._firstItem.focus();
  }
}
class Po extends To {
  get closeOnSelect() {
    return this.config.closeOnSelect ?? !1;
  }
  async load() {
    this._iconPath && (this.icon = await ba(this._iconPath));
  }
  async getContent() {
    return this._buttonPlugins || (this._buttonPlugins = [], await ee(this.player, "button", async (e) => {
      this.player.log.debug(`Load button plugins into "${this.groupName}" container`), this._buttonPlugins.push(e), e.setObserver(this);
    }, async (e) => e.parentContainer === this.groupName ? await e.isEnabled() : !1)), await super.getContent();
  }
  onIconChanged(e, t, n) {
  }
  onTitleChanged(e, t, n) {
  }
  onStateChanged(e, t, n, s, a) {
  }
  get groupName() {
    var e;
    return ((e = this.config) == null ? void 0 : e.groupName) || "buttonGroup";
  }
  get popUpType() {
    return "no-modal";
  }
  getClosePopUps() {
    return !1;
  }
  buttonType() {
    return "button";
  }
  async getMenu() {
    return this._buttonPlugins.map((e) => ({
      id: e.name,
      title: e.title || e.description,
      icon: e.menuIcon !== "" ? e.menuIcon : e.icon,
      stateText: e.stateText,
      stateIcon: e.stateIcon,
      plugin: e,
      iconText: e.title
    }));
  }
  itemSelected(e, t) {
    const n = this._buttonPlugins.find((s) => s.name === e.id);
    if (n) {
      const s = new Event("menuitemselected");
      n.action(s, this.currentContent);
    }
  }
  async showPopUp() {
    var e;
    await super.showPopUp(), setTimeout(() => {
      this._firstItem && this._firstItem.focus();
    }, 50), (e = this.buttons) == null || e.forEach((t) => {
      t.style.display === "none" ? this.hideButtonContainer(t) : this.showButtonContainer(t);
    });
  }
  get buttons() {
    return this._content && Array.from(this._content.getElementsByClassName("button-plugin"));
  }
  hideButtonContainer(e) {
    var t;
    const n = (t = e.parentNode) == null ? void 0 : t.parentNode;
    n && (n.style.display = "none");
  }
  showButtonContainer(e) {
    var t;
    const n = (t = e.parentNode) == null ? void 0 : t.parentNode;
    n && (n.style.display = null);
  }
}
const fs = (i, e, t, n = {}) => {
  const s = new i(e, t);
  return t = s.name || t, t ? (e.config.plugins && e.config.plugins[t] && xt(n, e.config.plugins[t], !1), s._config = n, s) : (e.log.warn(`The instance of the ${i.name} plugin cannot be created because it is being loaded explicitly and does not have the name property implemented.`), null);
};
function vs(i, e, t, n, s = !1) {
  const a = t.type;
  let r = -1;
  if (i.__pluginData__.pluginInstances[a] && i.__pluginData__.pluginInstances[a].find((l, u) => {
    if (l.name === t.name)
      return r = u, !0;
  }) && !s) {
    i.log.info(`Plugin ${t.name} of type ${a} already registered.`);
    return;
  }
  i.__pluginData__.pluginClasses[e] = n, i.__pluginData__.pluginInstances[a] = i.__pluginData__.pluginInstances[a] || [], r !== -1 && i.__pluginData__.pluginInstances[a].splice(r, 1), i.__pluginData__.pluginInstances[a].push(t), i.__pluginModules = i.__pluginModules || [];
  const o = t.getPluginModuleInstance();
  if (o && (o._player = o._player || i, !i.__pluginModules.find((l) => l.constructor.name === o.constructor.name))) {
    const l = o.moduleName, u = o.moduleVersion;
    i.log.debug(`Plugin module imported: ${l}: v${u}`), i.__pluginModules.push(o);
  }
}
function Io(i, e) {
  let t = null, n = { enabled: !0 };
  if (typeof e == "function" ? t = e : typeof e == "object" && typeof e.plugin == "function" && (t = e.plugin, n = e.config), !t)
    i.log.warn("Error importing plugin with explicit import API. Check the 'plugins' array at init params");
  else {
    const s = fs(t, i, null, n);
    if (!s)
      i.log.warn(`Unable to create an instance of the plugin ${t.name}`);
    else {
      const a = s.constructor.name;
      vs(i, a, s, t, !0);
    }
  }
}
function So(i) {
  const e = i.config;
  if (i.__pluginData__ = i.__pluginData__ || {
    pluginClasses: [],
    pluginInstances: {}
  }, i.__pluginData__.pluginClasses.length !== 0) return;
  [
    ...yo,
    ...i.initParams.plugins
  ].forEach((n) => {
    Io(i, n);
  });
  const { buttonGroups: t } = e;
  t && t.forEach((n, s) => {
    const a = `button_group_${s}`, r = fs(Po, i, a, n);
    r._iconPath = ae([i.configResourcesUrl, n.icon]), vs(i, r.type, r, `ButtonGroupPlugin${s}`, !1);
  }), i.log.debug("Plugins have been registered:");
}
function ko(i) {
  delete i.__pluginData__;
}
function _s(i, e) {
  var t;
  return ((t = i.__pluginData__) == null ? void 0 : t.pluginInstances[e]) || [];
}
async function ee(i, e, t = null, n = null) {
  if (!i.__pluginData__.pluginInstances[e]) {
    i.log.info(`There are no defined plugins of type '${e}'`);
    return;
  }
  i.__pluginData__.pluginInstances[e].sort((s, a) => s.order - a.order), i.__pluginData__.pluginInstances[e].forEach((s) => i.log.debug(`type: ${e}, name: ${s.name}`)), typeof n != "function" && (n = async function(s) {
    return await s.isEnabled();
  });
  for (const s in i.__pluginData__.pluginInstances[e]) {
    const a = i.__pluginData__.pluginInstances[e][s];
    if (await n(a)) {
      if (a.__uiPlugin) {
        const r = await a.getDictionaries();
        if (typeof r == "object")
          for (const o in r) {
            const l = r[o];
            i.addDictionary(o, l);
          }
      }
      typeof t == "function" && await t(a), await a.load();
    }
  }
}
async function Cs(i, e) {
  var t;
  (t = i.__pluginData__.pluginInstances[e]) == null || t.forEach(async (n) => {
    await n.unload();
  });
}
function Ao(i) {
  var e;
  const t = (n, s) => {
    if (!n)
      throw new Error(`Invalid video manifest: ${s}`);
  };
  t(i.streams, "missing 'streams' object."), t(i.streams.length > 0, "the 'streams' array is empty."), t((e = i.metadata) == null ? void 0 : e.preview, "the 'metadata.preview' field is required.");
}
class xo extends Me {
  constructor(e, t) {
    super(e, t), this._videoContainer = t, this._streamData = null, this._streams = null, this._players = [], this._mainAudioPlayer = null, this._streamSyncTimer = null, this._trimming = {
      enabled: !1,
      start: 100,
      end: 200
    };
  }
  async load(e) {
    this._streamData = e, this._streams = {};
    let t = this.player.config.defaultAudioStream || "presenter";
    this._streamData.length === 1 && (t = this._streamData[0].content), e.some((n) => {
      if (n.role === "mainAudio")
        return t = n.content, !0;
    }), this.player.log.debug("Finding compatible video plugins"), await jr(this.player);
    for (const n of this._streamData) {
      const s = Qr(this.player, n);
      if (!s)
        throw Error(`Canvas plugin not found: ${n.canvas}`);
      const a = n.content === t, r = await za(this.player, n);
      if (!r)
        throw Error(`Incompatible stream type: ${n.content}`);
      this._streams[n.content] = {
        stream: n,
        isMainAudio: a,
        videoPlugin: r,
        canvasPlugin: s
      };
    }
    for (const n in this._streams) {
      const s = this._streams[n];
      s.canvas = await s.canvasPlugin.getCanvasInstance(this._videoContainer), s.player = await s.videoPlugin.getVideoInstance(s.canvas.element, s.isMainAudio), t === n ? (this._mainAudioPlayer = s.player, s.player.initVolume(1)) : s.player.initVolume(0), await s.player.load(s.stream, this), await s.canvas.loadCanvas(s.player), s.player.onVideoEnded(() => {
        this.executeAction("pause"), this.executeAction("setCurrentTime", 0), Te(this.player, L.ENDED);
      }), this._players.push(s.player);
    }
    if (this.mainAudioPlayer === null)
      throw this.player.log.error("The video stream containing the audio track could not be identified. The `role` attribute must be specified in the main video stream, or the `defaultAudioStream` attribute must be set correctly in the player configuration."), new Error("The video stream containing the audio track could not be identified.");
  }
  async unload() {
    this.stopStreamSync(), await qr(this.player);
  }
  get players() {
    return this._players;
  }
  // This is the raw streamData loaded from the video manifest
  get streamData() {
    return this._streamData;
  }
  // This property stores the available streams, indexed by the content identifier, and contains the
  // stream data, the video plugin and the player, for each content identifier.
  get streams() {
    return this._streams;
  }
  get mainAudioPlayer() {
    return this._mainAudioPlayer;
  }
  get isTrimEnabled() {
    var e, t, n;
    return ((e = this._trimming) == null ? void 0 : e.enabled) && ((t = this._trimming) == null ? void 0 : t.end) > ((n = this._trimming) == null ? void 0 : n.start);
  }
  get trimStart() {
    var e;
    return (e = this._trimming) == null ? void 0 : e.start;
  }
  get trimEnd() {
    var e;
    return (e = this._trimming) == null ? void 0 : e.end;
  }
  async setTrimming({ enabled: e, start: t, end: n }) {
    if (t >= n)
      throw Error(`Error setting trimming: start time (${t}) must be lower than end time ${n}`);
    this._trimming = {
      enabled: e,
      start: t,
      end: n
    };
    const s = await this.currentTime();
    Te(this.player, L.TIMEUPDATE, { currentTime: e ? t + s : s });
  }
  startStreamSync() {
    this._timeSync = !0;
    const e = async () => {
      if (!this._players.length) {
        this.player.log.warn("Player not yet loaded. Waiting for video sync.");
        return;
      }
      let t = this.mainAudioPlayer.currentTimeSync;
      const n = 0.2;
      if (this.players.length > 1)
        for (let s = 0; s < this.players.length; ++s) {
          const a = this.players[s];
          if (a !== this.mainAudioPlayer) {
            const r = a.currentTimeSync;
            Math.abs(t - r) > n && (this.player.log.debug("Video synchronization triggered"), a.setCurrentTime(t));
          }
        }
      if (this.isTrimEnabled) {
        let s = t - this.trimStart;
        if (this.trimEnd <= t) {
          await this.executeAction("pause"), await this.setCurrentTime(0), this.stopStreamSync(), t = 0, Te(this.player, L.ENDED, {});
          return;
        } else t < this.trimStart && (await this.setCurrentTime(0), t = this.trimStart, s = 0);
        Te(this.player, L.TIMEUPDATE, { currentTime: s }), this._timeupdateTimer = setTimeout(() => {
          this._timeSync && e();
        }, 250);
      } else this._timeSync && (Te(this.player, L.TIMEUPDATE, { currentTime: t }), this._timeupdateTimer = setTimeout(() => {
        e();
      }, 250));
    };
    e();
  }
  stopStreamSync() {
    this._timeSync = !1, this._timeupdateTimer && clearTimeout(this._timeupdateTimer);
  }
  executeAction(e, t = []) {
    return Array.isArray(t) || (t = [t]), new Promise((n) => {
      let s = [], a = [];
      this.players.forEach((r) => {
        a.push(new Promise((o) => {
          r[e](...t).then((l) => {
            s.push(l), o();
          });
        }));
      }), Promise.allSettled(a).then(() => n(s));
    });
  }
  get isLiveStream() {
    return this._streamData.some((e) => Array.from(Object.keys(e.sources)).indexOf("hlsLive") !== -1);
  }
  async play() {
    return this.startStreamSync(), await this.executeAction("play");
  }
  async pause() {
    return this.stopStreamSync(), await this.executeAction("pause");
  }
  async stop() {
    this.stopStreamSync(), await this.executeAction("pause"), await this.executeAction("setCurrentTime", 0);
  }
  async paused() {
    return (await this.executeAction("paused"))[0];
  }
  async setCurrentTime(e) {
    const t = await this.duration();
    e < 0 ? e = 0 : e > t && (e = t);
    const n = (await this.executeAction("currentTime"))[0];
    let s = null;
    if (this.isTrimEnabled) {
      e = e + this.trimStart, e = e >= this.trimEnd ? this.trimEnd : e;
      const r = (await this.executeAction("setCurrentTime", [e]))[0], o = (await this.executeAction("currentTime"))[0];
      s = {
        result: r,
        prevTime: n - this.trimStart,
        newTime: o - this.trimStart
      };
    } else {
      const r = (await this.executeAction("setCurrentTime", [e]))[0], o = (await this.executeAction("currentTime"))[0];
      s = { result: r, prevTime: n, newTime: o };
    }
    const a = await this.currentTime();
    return Te(this.player, L.TIMEUPDATE, { currentTime: a }), s;
  }
  async currentTime() {
    const e = await this.mainAudioPlayer.currentTime();
    return this.isTrimEnabled ? e - this.trimStart : e;
  }
  async currentTimeIgnoringTrimming() {
    return await this.mainAudioPlayer.currentTime();
  }
  async volume() {
    return this.mainAudioPlayer ? await this.mainAudioPlayer.volume() : (await this.executeAction("volume"))[0];
  }
  async setVolume(e) {
    return this.mainAudioPlayer ? await this.mainAudioPlayer.setVolume(e) : (await this.executeAction("setVolume", [e]))[0];
  }
  async duration() {
    return this.isTrimEnabled ? this.trimEnd - this.trimStart : await this.durationIgnoringTrimming();
  }
  async durationIgnoringTrimming() {
    return (await this.executeAction("duration")).reduce((e, t) => Math.min(e, t), Number.MAX_VALUE);
  }
  async playbackRate() {
    return (await this.executeAction("playbackRate"))[0];
  }
  async setPlaybackRate(e) {
    return (await this.executeAction("setPlaybackRate", [e]))[0];
  }
  async getQualityReferencePlayer() {
    let e = null, t = [];
    if (Object.keys(this.streams).length > 0)
      for (const n in this.streams) {
        const s = this.streams[n], a = await s.player.getQualities() || [];
        !e && a.length > t.length && (t = a, e = s.player);
      }
    return e || this.mainAudioPlayer;
  }
  async getCurrentQuality() {
    return (await this.getQualityReferencePlayer()).currentQuality;
  }
  async getQualities() {
    return await (await this.getQualityReferencePlayer()).getQualities();
  }
  async setQuality(e) {
    const t = await (await this.getQualityReferencePlayer()).getQualities(), n = t.length;
    let s = -1;
    if (t.some((a, r) => (e.index === a.index && (s = r), s !== -1)), s >= 0) {
      const a = s / n;
      for (const r in this.streams) {
        const o = this.streams[r], l = await o.player.getQualities() || [];
        if (this.player.log.debug(l), l.length > 1) {
          const u = Math.round(l.length * a), h = l[u];
          await o.player.setQuality(h);
        }
      }
    }
  }
  async supportsMultiaudio() {
    return this.mainAudioPlayer.supportsMultiaudio();
  }
  async getAudioTracks() {
    return this.mainAudioPlayer.getAudioTracks();
  }
  async setCurrentAudioTrack(e) {
    return this.mainAudioPlayer.setCurrentAudioTrack(e);
  }
  get currentAudioTrack() {
    return this.mainAudioPlayer.currentAudioTrack;
  }
}
const j = Object.freeze({
  TOP_LEFT: "topLeft",
  TOP_MIDDLE: "topMiddle",
  TOP_RIGHT: "topRight",
  CENTER_LEFT: "centerLeft",
  CENTER_MIDDLE: "centerMiddle",
  CENTER_RIGHT: "centerRight",
  BOTTOM_LEFT: "bottomLeft",
  BOTTOM_MIDDLE: "bottomMiddle",
  BOTTOM_RIGHT: "bottomRight"
}), te = (i, e, t, n, s) => {
  n = n || "", t = t || 1e3;
  const a = T(`
        <div class="message-content ${n}">
            ${i ? `<i class="icon">${i}</i>` : ""}
            ${e ? `<p class="text">${e}</p>` : ""}
        </div>
    `);
  return s.innerHTML = "", s.appendChild(a), s.timer && (clearTimeout(s.timer), s.timer = null), s.timer = setTimeout(() => {
    s.removeChild(a);
  }, t), a;
};
class Do extends ne {
  constructor(e, t) {
    const n = { class: "video-container-message" };
    super(e, { attributes: n, parent: t }), this._topLeftContainer = T('<div class="container top-left"></div>', this.element), this._topMiddleContainer = T('<div class="container top-middle"></div>', this.element), this._topRightContainer = T('<div class="container top-right"></div>', this.element), this._centerLeftContainer = T('<div class="container center-left"></div>', this.element), this._centerMiddleContainer = T('<div class="container center-middle"></div>', this.element), this._centerRightContainer = T('<div class="container center-right"></div>', this.element), this._bottomLeftContainer = T('<div class="container bottom-left"></div>', this.element), this._bottomMiddleContainer = T('<div class="container bottom-middle"></div>', this.element), this._bottomRightContainer = T('<div class="container bottom-right"></div>', this.element);
  }
  show({ icon: e = null, text: t = "", timeout: n = 1e3, position: s = j.CENTER_MIDDLE, cssClass: a = "" }) {
    switch (s) {
      case j.TOP_LEFT:
        te.apply(this, [e, t, n, a, this._topLeftContainer]);
        break;
      case j.TOP_MIDDLE:
        te.apply(this, [e, t, n, a, this._topMiddleContainer]);
        break;
      case j.TOP_RIGHT:
        te.apply(this, [e, t, n, a, this._topRightContainer]);
        break;
      case j.CENTER_LEFT:
        te.apply(this, [e, t, n, a, this._centerLeftContainer]);
        break;
      case j.CENTER_MIDDLE:
        te.apply(this, [e, t, n, a, this._centerMiddleContainer]);
        break;
      case j.CENTER_RIGHT:
        te.apply(this, [e, t, n, a, this._centerRightContainer]);
        break;
      case j.BOTTOM_LEFT:
        te.apply(this, [e, t, n, a, this._bottomLeftContainer]);
        break;
      case j.BOTTOM_MIDDLE:
        te.apply(this, [e, t, n, a, this._bottomMiddleContainer]);
        break;
      case j.BOTTOM_RIGHT:
        te.apply(this, [e, t, n, a, this._bottomRightContainer]);
        break;
    }
  }
}
const E = Object.freeze({
  UNLOADED: 0,
  LOADING_MANIFEST: 1,
  MANIFEST: 2,
  LOADING_PLAYER: 3,
  LOADED: 4,
  UNLOADING_MANIFEST: 5,
  UNLOADING_PLAYER: 6,
  ERROR: 7
});
function $o(i, e) {
  return Array.isArray[e] || (e = [e]), Ha(i, e).getManifestData(e);
}
async function Mo(i) {
  return { w: 1280, h: 720 };
}
async function ws(i) {
  var e;
  for (const t in this.streamProvider.streams) {
    const n = ((e = i == null ? void 0 : i.videos) == null ? void 0 : e.find((a) => a.content === t)) != null, s = this.streamProvider.streams[t];
    n && !s.player.isEnabled ? await s.player.enable() : !n && s.player.isEnabled && await s.player.disable();
  }
}
function bs() {
  for (const i in this.streamProvider.streams) {
    const e = this.streamProvider.streams[i];
    e.canvas.element.style.display = "none", this._hiddenVideos.appendChild(e.canvas.element);
  }
}
async function No() {
  var i, e;
  const t = us(this.player, this.streamProvider.streamData, this._layoutId, this._mainLayoutContent);
  await ws.apply(this, [t]), bs.apply(this);
  const n = await Mo(this.player), s = 100 / n.w, a = 100 / n.h;
  if (this.baseVideoRect.classList.remove("dynamic"), this.baseVideoRect.classList.add("static"), (i = t == null ? void 0 : t.videos) != null && i.length) {
    const o = [];
    for (const l of t.videos) {
      const u = this.streamProvider.streams[l.content], { stream: h, player: p, canvas: d } = u, _ = await p.getDimensions(), m = _.w / _.h;
      let C = Number.MAX_VALUE, b = null;
      d.buttonsArea.innerHTML = "", o.push(await di(this.player, t, d, l, l.content)), l.rect.forEach((c) => {
        const g = /^(\d+.?\d*)\/(\d+.?\d*)$/.exec(c.aspectRatio), v = g ? Number(g[1]) / Number(g[2]) : 1, y = Math.abs(m - v);
        y < C && (b = c, C = y);
      }), d.element.style.display = "block", d.element.style.position = "absolute", d.element.style.left = `${(b == null ? void 0 : b.left) * s}%`, d.element.style.top = `${(b == null ? void 0 : b.top) * a}%`, d.element.style.width = `${(b == null ? void 0 : b.width) * s}%`, d.element.style.height = `${(b == null ? void 0 : b.height) * a}%`, d.element.style.zIndex = l.layer, this.baseVideoRect.appendChild(d.element);
    }
    setTimeout(() => {
      pi(this.player, t, o.flat());
    }, 100);
  }
  const r = this.baseVideoRect.getElementsByClassName("video-layout-button");
  return Array.from(r).forEach((o) => this.baseVideoRect.removeChild(o)), (e = t == null ? void 0 : t.buttons) == null || e.forEach((o) => {
    const l = On({
      tag: "button",
      attributes: {
        class: "video-layout-button",
        "aria-label": Xe(o.ariaLabel),
        title: Xe(o.title),
        style: `
                    left: ${o.rect.left * s}%;
                    top: ${o.rect.top * a}%;
                    width: ${o.rect.width * s}%;
                    height: ${o.rect.height * a}%;
                    z-index: ${o.layer};
                `
      },
      parent: this.baseVideoRect,
      children: o.icon
    });
    l.layout = t, l.buttonAction = o.onClick, l.addEventListener("click", async (u) => {
      P(this.player, L.BUTTON_PRESS, {
        plugin: t.plugin,
        layoutStructure: t
      }), await u.target.buttonAction.apply(u.target.layout), u.stopPropagation();
    }), this._layoutButtons.push(l);
  }), !0;
}
async function Uo() {
  var i, e, t, n, s, a;
  const r = us(this.player, this.streamProvider.streamData, this._layoutId, this._mainLayoutContent);
  await ws.apply(this, [r]), bs.apply(this), this.baseVideoRect.classList.add("dynamic"), this.baseVideoRect.classList.remove("static"), this.baseVideoRect.innerHTML = "";
  const o = this.element.clientWidth, l = this.element.clientHeight, u = o > l;
  if (this.baseVideoRect.classList.remove("align-center"), this.baseVideoRect.classList.remove("align-top"), this.baseVideoRect.classList.remove("align-bottom"), this.baseVideoRect.classList.remove("align-left"), this.baseVideoRect.classList.remove("align-right"), u) {
    const d = ((e = (i = this.player.config.videoContainer) == null ? void 0 : i.dynamicLayout) == null ? void 0 : e.landscapeVerticalAlignment) || "align-center";
    this.baseVideoRect.classList.remove("portrait"), this.baseVideoRect.classList.add("landscape"), this.baseVideoRect.classList.add(d);
  } else {
    const d = ((n = (t = this.player.config.videoContainer) == null ? void 0 : t.dynamicLayout) == null ? void 0 : n.portraitHorizontalAlignment) || "align-center";
    this.baseVideoRect.classList.add("portrait"), this.baseVideoRect.classList.remove("landscape"), this.baseVideoRect.classList.add(d);
  }
  const h = this.baseVideoRect.clientWidth, p = this.element.clientHeight;
  if (((s = r == null ? void 0 : r.videos) == null ? void 0 : s.length) === 1) {
    const d = [], _ = [], m = r.videos[0], C = this.streamProvider.streams[m.content], { player: b, canvas: c } = C;
    c.buttonsArea.innerHTML = "", _.push(await di(this.player, r, c, m, m.content)), c.element.style = {}, c.element.style.display = "block", c.element.style.width = "100%", c.element.style.height = "100%", c.element.style.overflow = "hidden", c.element.style.position = "relative", d.push(c.element), c.element.sortIndex = 0, d.forEach((g) => this.baseVideoRect.appendChild(g)), setTimeout(() => {
      pi(this.player, r, _.flat());
    }, 100);
  } else if ((a = r == null ? void 0 : r.videos) != null && a.length) {
    let d = 0;
    const _ = [], m = [];
    for (const C of r.videos) {
      const b = this.streamProvider.streams[C.content], { player: c, canvas: g } = b, v = await c.getDimensions(), y = v.w / v.h, w = h, O = p, oe = (u ? w : O) * C.size / 100;
      let Z = Math.round(u ? oe : oe * y), le = Math.round(u ? oe / y : oe);
      Z > w && (Z = w, le = Math.round(Z / y)), le > O && (le = O, Z = Math.round(le * y)), g.buttonsArea.innerHTML = "", m.push(await di(this.player, r, g, C, C.content)), g.element.style = {}, g.element.style.display = "block", g.element.style.width = `${Z}px`, g.element.style.height = `${le}px`, g.element.style.overflow = "hidden", g.element.style.position = "relative", g.element.sortIndex = d++, _.push(g.element);
    }
    if (u) {
      const C = T('<div class="landscape-container"></div>', this.baseVideoRect);
      _.forEach((b) => C.appendChild(b));
    } else
      _.forEach((C) => this.baseVideoRect.appendChild(C));
    setTimeout(() => {
      pi(this.player, r, m.flat());
    }, 100);
  }
  return !0;
}
class Ro extends ne {
  constructor(e, t) {
    var n;
    const s = "base-video-rect", a = {
      class: "video-container"
    };
    (n = e.config.videoContainer) != null && n.overPlaybackBar && (a.class += " over-playback-bar");
    const r = `
            <div class="${s}"></div>
            <div class="hidden-videos-container" style="display: none"></div>
        `;
    super(e, { attributes: a, children: r, parent: t }), this._hiddenVideos = this.element.getElementsByClassName("hidden-videos-container")[0], this._baseVideoRect = this.element.getElementsByClassName(s)[0], this.element.addEventListener("click", async () => {
      await this.paused() ? await this.play() : await this.pause();
    }), this._ready = !1, this._players = [], this._streamProvider = new xo(this.player, this.baseVideoRect);
  }
  get layoutId() {
    return this._layoutId;
  }
  get mainLayoutContent() {
    return this._mainLayoutContent;
  }
  async setLayout(e, t = null) {
    var n, s;
    if (this.validContentIds.indexOf(e) === -1)
      return !1;
    {
      const a = (s = (n = this.player.config.videoContainer) == null ? void 0 : n.restoreVideoLayout) == null ? void 0 : s.global;
      await this.player.preferences.set("videoLayout", e, { global: a }), await this.player.preferences.set("videoLayoutMainContent", t, { global: a });
      const r = this._layoutId;
      this._layoutId = e, this._mainLayoutContent = t, await this.updateLayout(), r !== e && P(this.player, L.LAYOUT_CHANGED, { prevLayout: r, layoutId: e });
    }
  }
  get validContentIds() {
    return this._validContentIds;
  }
  get validContentSettings() {
    return this._validContentSettings;
  }
  get validLayouts() {
    return Ht(this.player, this.streamData);
  }
  get streamData() {
    return this._streamData;
  }
  get baseVideoRect() {
    return this._baseVideoRect;
  }
  get streamProvider() {
    return this._streamProvider;
  }
  async create() {
    this._baseVideoRect.style.display = "none", await ee(this.player, "layout"), await Va(this.player);
  }
  async load(e) {
    var t, n, s, a, r, o, l, u, h, p;
    if (this._streamData = e, (n = (t = this.player.config.videoContainer) == null ? void 0 : t.restoreVideoLayout) != null && n.enabled) {
      const c = (a = (s = this.player.config.videoContainer) == null ? void 0 : s.restoreVideoLayout) == null ? void 0 : a.global;
      this._layoutId = await this.player.preferences.get("videoLayout", { global: c }) || this.player.config.defaultLayout, this._mainLayoutContent = await this.player.preferences.get("videoLayoutMainContent", { global: c }) || null;
    } else
      this._layoutId = this.player.config.defaultLayout, this._mainLayoutContent = null;
    await this.streamProvider.load(e), this._validContentIds = os(this.player, e), this._validContentSettings = Gr(this.player, e), await this.updateLayout(null, !0);
    const d = T(
      '<div class="button-plugins left-side"></div>',
      this.element
    ), _ = T(
      '<div class="button-plugins right-side"></div>',
      this.element
    );
    this._buttonPlugins = [d, _], this.player.log.debug("Loading videoContainer button plugins"), await ee(this.player, "button", async (c) => {
      this.player.log.debug(` Button plugin: ${c.name}`), c.side === "left" ? await $t(c, d) : c.side === "right" && await $t(c, _);
    }, async (c) => c.parentContainer === "videoContainer" ? await c.isEnabled() : !1), this._baseVideoRect.style.display = "";
    const m = await this.player.preferences.get("volume", { global: !0 }), C = await this.player.preferences.get("playbackRate", { global: !0 }), b = await this.player.preferences.get("lastKnownTime", { global: !1 });
    if ((r = this.player.config.videoContainer) != null && r.restoreVolume && m !== null && m !== void 0 && await this.streamProvider.setVolume(m), (o = this.player.config.videoContainer) != null && o.restorePlaybackRate && C !== null && C !== void 0 && await this.streamProvider.setPlaybackRate(C), this.player.videoManifest.trimming && await this.player.videoContainer.setTrimming(this.player.videoManifest.trimming), (u = (l = this.player.config.videoContainer) == null ? void 0 : l.restoreLastTime) != null && u.enabled && !this.streamProvider.isLiveStream) {
      const c = async () => {
        if (!await this.paused()) {
          const g = await this.currentTime();
          await this.player.preferences.set("lastKnownTime", g, { global: !1 });
        }
        setTimeout(c, 1e3);
      };
      if (b) {
        const g = await this.player.preferences.get("lastKnownTime", { global: !1 }), v = await this.duration(), y = (p = (h = this.player.config.videoContainer) == null ? void 0 : h.restoreLastTime) == null ? void 0 : p.remainingSeconds;
        v - g > y && await this.setCurrentTime(g);
      }
      c();
    }
    this._messageContainer = new Do(this.player, this.element), this._ready = !0;
  }
  async unload() {
    this.removeFromParent(), await Cs(this.player, "layout"), await Fa(this.player), await this.streamProvider.unload();
  }
  // Return true if the layout this.layoutId is compatible with the current stream data.
  async updateLayout(e = null) {
    const t = arguments[1];
    if (e && (this._mainLayoutContent = e), !t && this.player.state !== E.LOADED)
      return;
    if (this._updateInProgress)
      return this.player.log.warn("Recursive update layout detected"), !1;
    this._updateInProgress = !0;
    let n = !0;
    this._layoutButtons = [], (!this._layoutId || this._validContentIds.indexOf(this._layoutId) === -1) && (this._layoutId = this.player.config.defaultLayout, this._mainLayoutContent = null, this._validContentIds.indexOf(this._layoutId) === -1 && (this._layoutId = this._validContentIds[0]), n = !1);
    const s = ls(this.player, this.streamProvider.streamData, this._layoutId);
    return s.layoutType === "static" ? n = No.apply(this) : s.layoutType === "dynamic" && (n = Uo.apply(this)), this._updateInProgress = !1, n;
  }
  hideUserInterface() {
    if (this._layoutButtons && this._buttonPlugins) {
      this.player.log.debug("Hide video container user interface");
      const e = (t) => {
        t._prevDisplay = t.style.display, t.style.display = "none";
      };
      this._layoutButtons.forEach(e), this._buttonPlugins.forEach(e);
      for (const t in this.streamProvider.streams)
        this.streamProvider.streams[t].canvas.hideButtons();
    }
  }
  showUserInterface() {
    if (this._layoutButtons && this._buttonPlugins) {
      const e = (t) => t.style.display = t._prevDisplay || "block";
      this._layoutButtons.forEach(e), this._buttonPlugins.forEach(e);
      for (const t in this.streamProvider.streams)
        this.streamProvider.streams[t].canvas.showButtons();
    }
  }
  get message() {
    return this._messageContainer;
  }
  get elementSize() {
    return { w: this.element.offsetWidth, h: this.element.offsetHeight };
  }
  get ready() {
    return this._ready;
  }
  get isLiveStream() {
    return this.streamProvider.isLiveStream;
  }
  async play() {
    const e = await this.streamProvider.play();
    return P(this.player, L.PLAY), e;
  }
  async pause() {
    const e = await this.streamProvider.pause();
    return P(this.player, L.PAUSE), e;
  }
  async stop() {
    this.streamProvider.stop(), P(this.player, L.STOP);
  }
  async paused() {
    return this.streamProvider.paused();
  }
  async setCurrentTime(e) {
    const t = await this.streamProvider.setCurrentTime(e);
    return P(this.player, L.SEEK, { prevTime: t.prevTime, newTime: t.newTime }), t.result;
  }
  async currentTime() {
    return this.streamProvider.currentTime();
  }
  async volume() {
    return this.streamProvider.volume();
  }
  async setVolume(e) {
    const t = await this.streamProvider.setVolume(e);
    return P(this.player, L.VOLUME_CHANGED, { volume: e }), await this.player.preferences.set("volume", e, { global: !0 }), t;
  }
  async duration() {
    return await this.streamProvider.duration();
  }
  async playbackRate() {
    return await this.streamProvider.playbackRate();
  }
  async setPlaybackRate(e) {
    const t = await this.streamProvider.setPlaybackRate(e);
    return P(this.player, L.PLAYBACK_RATE_CHANGED, { newPlaybackRate: e }), await this.player.preferences.set("playbackRate", e, { global: !0 }), t;
  }
  get isTrimEnabled() {
    return this.streamProvider.isTrimEnabled;
  }
  get trimStart() {
    return this.streamProvider.trimStart;
  }
  get trimEnd() {
    return this.streamProvider.trimEnd;
  }
  async setTrimming({ enabled: e, start: t, end: n }) {
    const s = await this.streamProvider.setTrimming({
      enabled: e,
      start: t,
      end: n
    });
    return P(this.player, L.TRIMMING_CHANGED, {
      enabled: e,
      start: t,
      end: n
    }), s;
  }
  getVideoRect(e = null) {
    var t, n;
    let s = this.baseVideoRect;
    if (typeof e == "string") {
      if (s = (t = this.streamProvider.streams[e]) == null ? void 0 : t.canvas.element, !s)
        return this.player.log.warn(`videoContainer.getVideoRect: Invalid target '${e}'. Valid targets are: ${Object.keys(this.streamProvider.streams).join(", ")}`), this.player.log.warn("Please, configure a valid target in the 'targetContent' property of the configuration file, or provide a valid target in the 'frameList.targetContent' property of the video manifest"), null;
    } else e === 0 && (s = (n = this.streamProvider.streams[Object.keys(this.streamProvider.streams)[0]]) == null ? void 0 : n.canvas.element);
    return {
      x: s == null ? void 0 : s.offsetLeft,
      y: s == null ? void 0 : s.offsetTop,
      width: s == null ? void 0 : s.offsetWidth,
      height: s == null ? void 0 : s.offsetHeight,
      element: s
    };
  }
  appendChild(e, t = null, n = 1) {
    if (t) {
      const { width: s, height: a } = this.getVideoRect();
      t.x = t.x * 100 / s, t.width = t.width * 100 / s, t.y = t.y * 100 / a, t.height = t.height * 100 / a, e.style.position = "absolute", e.style.left = `${t.x}%`, e.style.top = `${t.y}%`, e.style.width = `${t.width}%`, e.style.height = `${t.height}%`, n !== null && (e.style.zIndex = n);
    }
    return this.baseVideoRect.appendChild(e), e;
  }
  removeChild(e) {
    this.baseVideoRect.removeChild(e);
  }
}
const Oo = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <rect id="Play" x="0" y="0" width="300" height="300" style="fill:none;"/>
    <g id="Play1" serif:id="Play">
        <g transform="matrix(1.21457,0,0,1.21457,-55.8704,-35.2227)">
            <circle cx="169.5" cy="152.5" r="123.5" style="fill:rgb(128,128,128);"/>
            <path d="M169.5,29C237.662,29 293,84.338 293,152.5C293,220.662 237.662,276 169.5,276C101.338,276 46,220.662 46,152.5C46,84.338 101.338,29 169.5,29ZM169.5,37.233C233.117,37.233 284.767,88.883 284.767,152.5C284.767,216.117 233.117,267.767 169.5,267.767C105.883,267.767 54.233,216.117 54.233,152.5C54.233,88.883 105.883,37.233 169.5,37.233Z" style="fill:rgb(235,235,235);"/>
        </g>
        <g transform="matrix(6.12323e-17,1,-1,6.12323e-17,347,-59)">
            <path d="M209,82L317,253L101,253L209,82Z" style="fill:rgb(235,235,235);"/>
        </g>
    </g>
</svg>
`, Bo = `
    background-color: #e4e4e4;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%); 
`, Jt = `
    width: 100%;
`, Vo = `
    position: absolute; 
    top: 0px; 
    left: 0px; 
    right: 0px; 
    bottom: 0px; 
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`, Fo = `
    pointer-events: none;
    width: 20%;
    max-width: 400px;
    min-width: 100px;
    opacity: 0.6;
`, Ho = `
    display: block;
    width: 20%;
    background: none;
    border: none;
    cursor: pointer;
`;
class zo extends ne {
  constructor(e, t, n, s) {
    const a = {
      class: "preview-container",
      style: Bo,
      role: "button",
      "aria-label": "Play video"
    };
    super(e, { attributes: a, parent: t }), this._img = T(`
        <div style="${Jt}">
            ${n ? `<img style="${Jt}" src="${n}" class="preview-image-landscape" alt=""/>` : ""}
            ${s ? `<img style="${Jt}" src="${s}" class="preview-image-portrait" alt=""/>` : ""}
            <div style="${Vo}">
                <button style="${Ho}" role="button" aria-label="Play video">
                    <i class="preview-play-icon" style="${Fo}">${Oo}</i>
                </button>
            </div>
        </div>
        `, this.element), this.element.setAttribute("id", "playerContainerClickArea"), this.element.addEventListener("click", (l) => {
      e.play();
    });
    const r = n && s, o = () => {
      if (r) {
        const l = this.element.clientWidth / this.element.clientHeight, u = Array.from(this.element.getElementsByClassName("preview-image-landscape")), h = Array.from(this.element.getElementsByClassName("preview-image-portrait"));
        l >= 1 ? (u.forEach((p) => p.style.display = ""), h.forEach((p) => p.style.display = "none")) : (u.forEach((p) => p.style.display = "none"), h.forEach((p) => p.style.display = ""));
      }
    };
    window.addEventListener("resize", () => {
      o();
    }), o();
  }
  loadBackgroundImage(e) {
    this._img.setAttribute("src", e);
  }
}
const Go = (i) => {
  const e = document.createElement("section");
  return e.classList.add("pop-up"), e.innerHTML = `
        <header class="pop-up-title">
            <button class="action-back">
                <svg width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 6l-6 6l6 6" />
                </svg>
            </button>
            <h2>title</h2>
        </header>
        <div class="pop-up-content">
        </div>
    `, i.appendChild(e), e.setTitle = (t) => {
    e.querySelector("header.pop-up-title h2").textContent = t;
  }, e.popButton = () => e.querySelector("header.pop-up-title button"), e.onPopClicked = (t) => {
    e._clickCallback && e.popButton().removeEventListener("click", e._clickCallback), e._clickCallback = t, e.popButton().addEventListener("click", t);
  }, e.hidePopButton = () => e.popButton().style.display = "none", e.showPopButton = () => e.popButton().style.display = "", e.setContent = (t) => {
    e.querySelector("div.pop-up-content").innerHTML = "", e.querySelector("div.pop-up-content").appendChild(t);
  }, e;
};
let Wo = 0;
function Zo() {
  return ++Wo;
}
var Pe, A, U, mt;
class jo {
  constructor(e) {
    k(this, Pe, null), k(this, A, null), k(this, U, []), k(this, mt, ""), x(this, Pe, e), x(this, A, document.createElement("div")), f(this, A).className = "pop-up-wrapper", e.element.prepend(f(this, A)), f(this, A).classList.add("hidden"), f(this, A).addEventListener("click", (t) => t.stopPropagation()), f(this, Pe).element.addEventListener("click", (t) => {
      t.stopPropagation(), this.hide();
    });
  }
  get title() {
    return f(this, mt);
  }
  set title(e) {
    x(this, mt, e);
  }
  get currentContent() {
    return f(this, U).length && f(this, U)[f(this, U).length - 1];
  }
  get currentContentId() {
    var e;
    return ((e = this.currentContent) == null ? void 0 : e.dataContentId) ?? -1;
  }
  show({ content: e, title: t = "", parent: n = null, attachLeft: s = !1, attachRight: a = !1 }) {
    if (!e)
      throw new Error("PlaybackBarPopUp.show(): No content provided.");
    e.setAttribute("data-pop-up-content-id", Zo()), e.dataContentId = e.getAttribute("data-pop-up-content-id");
    const r = f(this, U).length && f(this, U)[f(this, U).length - 1], o = n && n.getAttribute("data-pop-up-content-id");
    r && r.getAttribute("data-pop-up-content-id") !== o ? (f(this, A).innerHTML = "", x(this, U, [])) : r && r.container.classList.add("out"), f(this, U).push(e), f(this, Pe).element.classList.add("pop-up-active"), f(this, A).classList.remove("hidden");
    const l = Go(f(this, A));
    return l.setTitle(t), e.container = l, s === !0 ? f(this, A).classList.add("left") : f(this, A).classList.remove("left"), a === !0 ? f(this, A).classList.add("right") : f(this, A).classList.remove("right"), l.setContent(e), f(this, U).length > 1 ? l.onPopClicked(() => {
      f(this, U).pop(), f(this, U)[f(this, U).length - 1].container.classList.remove("out"), f(this, A).removeChild(l);
    }) : l.hidePopButton(), this.title = t, e.dataContentId;
  }
  pop() {
    if (f(this, A).querySelectorAll(".pop-up").length === 1)
      return this.hide(), !1;
    const e = new Event("click");
    return f(this, A).querySelector(".pop-up:not(.out) .action-back").dispatchEvent(e), !0;
  }
  hide() {
    f(this, Pe).element.classList.remove("pop-up-active"), f(this, A).classList.add("hidden");
  }
  get isHidden() {
    return f(this, A).classList.contains("hidden");
  }
}
Pe = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap();
var yt, Fe, He, de, ze, ft, Ge, V, Ie, We;
class qo extends ne {
  constructor(e, t) {
    var n;
    const s = ((n = e.config.progressIndicator) == null ? void 0 : n.inlineMode) ?? !1;
    super(e, { attributes: { class: "playback-bar-container" }, parent: t }), k(this, yt, null), k(this, Fe, null), k(this, He, null), k(this, de, null), k(this, ze, null), k(this, ft, null), k(this, Ge, null), k(this, V, null), k(this, Ie, !0), k(this, We, []), x(this, yt, new jo(this)), this.element.addEventListener("mouseenter", () => Ia(e)), this.element.addEventListener("mouseleave", () => Nn(e)), x(this, Fe, T('<section class="playback-bar"></section>', this.element)), x(this, He, T("<div></div>")), x(this, de, T("<nav></nav>")), x(this, ze, T("<ul></ul>", f(this, de))), x(this, ft, T("<div></div>", f(this, de))), x(this, Ge, T("<ul></ul>", f(this, de)));
    const a = e._initParams.getProgressIndicator, r = 1e3, o = 0, l = 100;
    s ? x(this, V, a({ container: f(this, ft), player: e, duration: r, currentTime: o, precision: l })) : (f(this, Fe).appendChild(f(this, He)), x(this, V, a({ container: f(this, He), player: e, duration: r, currentTime: o, precision: l }))), f(this, V).onChange(async (u) => {
      await e.videoContainer.setCurrentTime(u);
    }), f(this, Fe).appendChild(f(this, de));
  }
  get popUp() {
    return f(this, yt);
  }
  get enabled() {
    return f(this, Ie);
  }
  set enabled(e) {
    x(this, Ie, e), f(this, Ie) ? this.showUserInterface() : this.hide();
  }
  async load() {
    x(this, We, []), this.player.log.debug("Loading button plugins"), await ee(this.player, "button", async (n) => {
      this.player.log.debug(` Button plugin: ${n.name}`), f(this, We).push(n), n.side === "left" ? await $t(n, this.buttonPluginsLeft) : n.side === "right" && await $t(n, this.buttonPluginsRight);
    }, async (n) => n.parentContainer === "playbackBar" ? await n.isEnabled() : !1);
    const e = await this.player.videoContainer.duration();
    f(this, V).setDuration(e), this.player.frameList.frames.forEach((n, s, a) => {
      const r = a[s + 1], o = r ? r.time - n.time : e - n.time;
      f(this, V).addMarker({ time: n.time, duration: e, frameDuration: o, addGap: s < a.length - 1 });
    }), this.player.bindEvent([this.player.Events.TIMEUPDATE, this.player.Events.SEEK], (n) => {
      f(this, V).setCurrentTime(n.newTime ?? n.currentTime);
    }), this.player.bindEvent(this.player.Events.TRIMMING_CHANGED, async (n) => {
      const s = n.end - n.start;
      f(this, V).setDuration(s);
      const a = await this.player.videoContainer.currentTime();
      f(this, V).setCurrentTime(a);
    }), this.onResize();
    const t = this.element.querySelector(".playback-bar").offsetHeight;
    this.player.containerElement.style.setProperty("--playback-bar-height", `${t}px`);
  }
  async unload() {
    this.removeFromParent(), await Cs(this.player, "button"), f(this, ze).innerHTML = "", f(this, Ge).innerHTML = "";
  }
  hideUserInterface() {
    this.player.log.debug("Hide playback bar user interface"), this.hide();
  }
  showUserInterface() {
    var e;
    if (f(this, Ie)) {
      const t = ((e = this.player.config.progressIndicator) == null ? void 0 : e.inlineMode) ?? !1 ? "flex" : "block";
      this.show(t), this.onResize();
    }
  }
  get buttonPluginsRight() {
    return f(this, Ge);
  }
  get buttonPluginsLeft() {
    return f(this, ze);
  }
  get progressIndicator() {
    return f(this, V);
  }
  get containerSize() {
    const e = this.element.clientWidth, t = this.element.clientHeight;
    return { width: e, height: t };
  }
  onResize() {
    const { containerSize: e } = this;
    f(this, We).forEach((t) => t.onResize(e));
  }
}
yt = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap();
const Ls = [
  { maxWidth: 400, className: "size-s" },
  { maxWidth: 600, className: "size-m" },
  { maxWidth: 900, className: "size-l" },
  { maxWidth: 1100, className: "size-xl" },
  { className: "size-xxl" }
], Qo = (i) => Ls.find((e) => e.maxWidth && e.maxWidth >= i || e.maxWidth === void 0).className;
class Yo extends ne {
  constructor(e, t) {
    const n = {
      class: "captions-canvas visible-ui"
    };
    super(e, { tag: "div", attributes: n, parent: t }), this._captionsContainer = T(`
            <div class="text-container">
            </div>
        `, this.element), this._captions = [], this.hide(), this._currentCaptions = null;
    const s = async (a) => {
      const r = (e.videoContainer.isTrimEnabled ? e.videoContainer.trimStart : 0) + (a.currentTime || a.newTime || 0);
      if (this._currentCaptions) {
        const o = this._currentCaptions.getCue(r);
        this._captionsContainer.innerHTML = "", o && o.captions.forEach((l) => {
          this._captionsContainer.innerHTML += l, this._captionsContainer.innerHTML += "<br/>";
        }), o ? this._captionsContainer.style.display = null : this._captionsContainer.style.display = "none", this.resize();
      }
    };
    R(this.player, L.TIMEUPDATE, s), R(this.player, L.SEEK, s), R(this.player, L.RESIZE, () => this.resize()), R(this.player, L.SHOW_UI, () => this.element.classList.add("visible-ui")), R(this.player, L.HIDE_UI, () => this.element.classList.remove("visible-ui"));
  }
  async load() {
    await Cr(this.player);
  }
  unload() {
  }
  resize() {
    const e = Qo(this._captionsContainer.clientWidth);
    Ls.forEach((t) => this.element.classList.remove(t.className)), this.element.classList.add(e);
  }
  addCaptions(e) {
    this._captions.push(e), P(this.player, L.CAPTIONS_CHANGED, { captions: this._captions });
  }
  get captions() {
    return this._captions;
  }
  get currentCaptions() {
    return this._currentCaptions;
  }
  getCaptions({ label: e, index: t, lang: n }) {
    if (e === void 0 && t === void 0 && n === void 0)
      throw Error("Could not find captions: you must specify the label, the index or the language");
    return t !== void 0 ? this._captions[t] : this._captions.find((s) => {
      if (e !== void 0)
        return s.label === e;
      if (n !== void 0)
        return s.language === n;
    });
  }
  enableCaptions(e) {
    const t = this.getCaptions(e);
    if (t !== this._currentCaptions && (this._currentCaptions = t, this.currentCaptions)) {
      const { language: n, label: s } = this.currentCaptions;
      P(this.player, L.CAPTIONS_ENABLED, { language: n, label: s });
    }
    this.show();
  }
  disableCaptions() {
    this.currentCaptions && P(this.player, L.CAPTIONS_DISABLED), this._currentCaptions = null, this.hide();
  }
}
async function Ko(i) {
  await ee(i, "eventLog", async (e) => {
    e.events.forEach((t) => {
      R(i, t, async (n) => {
        await e.onEvent(t, n);
      });
    });
  });
}
async function Jo(i) {
}
const Es = (i) => !1, Ts = (i) => i.description;
class Xo {
  constructor(e, t) {
    this._player = e, this._cookieConsentData = e.config.cookieConsent || [], this._getConsentCallback = t.getConsent || Es, this._getDescriptionCallback = t.getDescription || Ts, this._cookieConsentData.forEach((n) => {
      n.description = this._getDescriptionCallback(n);
    }), this.updateConsentData();
  }
  updateConsentData() {
    this._cookieConsentData.forEach((e) => {
      e.value = this._getConsentCallback(e.type) || e.required;
    }), P(this._player, L.COOKIE_CONSENT_CHANGED, { cookieConsent: this });
  }
  getConsentForType(e) {
    const t = this._cookieConsentData.find((n) => n.type === e);
    return (t == null ? void 0 : t.value) || !1;
  }
}
function el({ container: i }) {
  i.innerHTML = `
        <div class="timeline-preview hidden">
            <img src="" alt="" />
            <p></p>
        </div>
    `;
  const e = i.querySelector("img"), t = i.querySelector("p"), n = i.querySelector(".timeline-preview");
  return {
    setImage(s, a) {
      s !== e.src && (e.src = s, e.alt = a);
    },
    setText(s) {
      t.innerText = s;
    },
    setPosition(s) {
      s > 0.5 ? (n.style.left = "", n.style.right = `${100 - s * 100}%`) : (n.style.right = "", n.style.left = `${s * 100}%`);
    },
    show() {
      n.classList.remove("hidden");
    },
    hide() {
      n.classList.add("hidden");
    }
  };
}
function tl({ container: i, player: e, duration: t = 100, currentTime: n = 0, precision: s = 100 }) {
  i.classList.add("progress-indicator"), i.classList.add("custom-progress-indicator"), i.innerHTML = `
        <div class="range-container">
            <div class="timeline-preview-container"></div>
            <div class="tracker">
                <div class="elapsed"></div>
                <div class="remaining"></div>
            </div>
            <input type="range" min="0" max="${t * s}" value="${n * s}" tabindex="0" role="slider" class="slider">
            <ul class="markers-container"></ul>
        </div>
    `;
  const a = i.querySelector(".elapsed"), r = i.querySelector(".remaining"), o = i.querySelector(".slider"), l = i.querySelector(".timeline-preview-container"), u = el({ container: l });
  let h = !1, p = null;
  const d = [], _ = (c) => {
    var g;
    return (g = d.find((v) => v.time < c && v.time + v.frameDuration >= c)) == null ? void 0 : g.marker;
  }, m = {
    player: e,
    elapsed: a,
    remaining: r,
    range: o,
    timeLinePreview: u,
    markersContainer: i.querySelector(".markers-container"),
    addMarker({ time: c, duration: g, frameDuration: v, addGap: y = !0 }) {
      const w = T(`<li>
                <div class="elapsed"></div>
                <div class="remaining"></div>
            </li>`);
      w.style.left = `${c / g * 100}%`, w.style.width = y ? `calc(${v / g * 100}% - var(--slide-marker-gap))` : `${v / g * 100}%`, this.markersContainer.appendChild(w), d.push({
        marker: w,
        time: c,
        frameDuration: v
      });
    },
    updateRemaining() {
      const c = this.range.value / this.range.max * 100;
      this.elapsed.style.width = `${c}%`, this.remaining.style.width = `${100 - c}%`;
      const g = _(this.range.value / s), v = d.findIndex((y) => y.marker === g);
      d.forEach((y, w) => {
        if (w < v)
          y.marker.querySelector(".elapsed").style.width = "100%", y.marker.querySelector(".remaining").style.width = "0%";
        else if (w === v) {
          const O = (this.range.value / s - y.time) / y.frameDuration * 100;
          y.marker.querySelector(".elapsed").style.width = `${O}%`, y.marker.querySelector(".remaining").style.width = `${100 - O}%`;
        } else
          y.marker.querySelector(".elapsed").style.width = "0%", y.marker.querySelector(".remaining").style.width = "100%";
      });
    },
    setDuration(c) {
      h || (this.range.max = c * s, this.updateRemaining());
    },
    setCurrentTime(c) {
      h || (this.range.value = c * s, this.updateRemaining());
    },
    onChange(c) {
      p = c;
    },
    hideTimeLine() {
      i.classList.add("hide-timeline");
    }
  };
  o.addEventListener("pointerdown", () => {
    h = !0;
  });
  let C = null;
  o.addEventListener("mousemove", async (c) => {
    var g;
    const v = ((g = e.frameList) == null ? void 0 : g.frames) || [];
    if (v && v.length) {
      const y = await e.videoContainer.duration(), w = c.target.clientWidth, O = c.layerX / w, oe = O * y, Z = v.filter((Ca) => Ca.time <= oe).pop(), le = Z && (Z.thumb || Z.url), Ki = Z && Ae(y * O), at = _(oe);
      at !== C && C !== null && C.classList.remove("active"), at && at.classList.add("active"), C = at, u.setImage(le, Ki), u.setText(Ki), u.setPosition(O), u.show();
    }
  }), o.addEventListener("mouseleave", () => {
    u.hide(), C && C.classList.remove("active");
  }), o.addEventListener("pointerup", () => {
    var c;
    h = !1, (c = document.activeElement) == null || c.blur(), typeof p == "function" && p(o.value / s);
  }), o.addEventListener("input", () => {
    m.updateRemaining();
  });
  const b = async (c) => {
    const g = await e.videoContainer.currentTime();
    await e.videoContainer.setCurrentTime(g + c);
  };
  return o.addEventListener("keydown", (c) => {
    c.key === "ArrowLeft" ? (b(-10), c.preventDefault(), c.stopPropagation()) : c.key === "ArrowRight" && (b(10), c.preventDefault(), c.stopPropagation());
  }), m.updateRemaining(), m;
}
const D = Object.freeze({
  DISABLED: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
  VERBOSE: 5
});
let Ps = D.INFO;
const Is = (i, e = null) => {
  const t = typeof i == "string" ? D[i.toUpperCase()] : i;
  if (t < D.DISABLED || t > D.VERBOSE)
    throw Error(`setLogLevel: invalid log level ${t}`);
  e ? (e.__logSettings = e.__logSettings || {}, e.__logSettings.logLevel = t) : Ps = t;
}, Ss = (i = null) => i ? i.__logSettings.logLevel : Ps, Ve = ({
  msg: i,
  level: e = D.INFO,
  player: t = null,
  context: n = "paella-core"
}) => {
  t && !t.__logSettings && Is(t, D.INFO);
  const s = Ss(t);
  if (e < D.DISABLED)
    throw Error(`printMessage: invalid log level ${e}`);
  if (t && P(t, L.LOG, { severity: e, context: n, message: i, currentLogLevel: s }), e <= s)
    switch (e) {
      case D.ERROR:
        console.error(`${n} - Error: ${i}`);
        break;
      case D.WARN:
        console.warn(`${n} - Warning: ${i}`);
        break;
      case D.INFO:
        console.info(`${n} - Info: ${i}`);
        break;
      case D.DEBUG:
        console.debug(`${n} - Debug: ${i}`);
        break;
      case D.VERBOSE:
        console.log(`${n} - Verbose: ${i}`);
        break;
    }
}, ue = {
  setLevel: (i, e = null) => {
    Is(i, e);
  },
  currentLevel: (i = null) => Ss(i),
  error: (i, e = null, t = "paella-core") => {
    Ve({
      msg: i,
      level: D.ERROR,
      player: e,
      context: t
    });
  },
  warn: (i, e = null, t = "paella-core") => {
    Ve({
      msg: i,
      level: D.WARN,
      player: e,
      context: t
    });
  },
  info: (i, e = null, t = "paella-core") => {
    Ve({
      msg: i,
      level: D.INFO,
      player: e,
      context: t
    });
  },
  debug: (i, e = null, t = "paella-core") => {
    Ve({
      msg: i,
      level: D.DEBUG,
      player: e,
      context: t
    });
  },
  verbose: (i, e = null, t = "paella-core") => {
    Ve({
      msg: i,
      level: D.VERBOSE,
      player: e,
      context: t
    });
  }
};
class il {
  constructor(e, t = "paella-core") {
    this._player = e, this._context = t;
  }
  get context() {
    return this._context;
  }
  get player() {
    return this._player;
  }
  setLevel(e) {
    ue.setLevel(e, this._player);
  }
  currentLevel() {
    return ue.currentLevel(this._player);
  }
  error(e, t = null) {
    ue.error(e, this._player, t || this._context);
  }
  warn(e, t = null) {
    ue.warn(e, this._player, t || this._context);
  }
  info(e, t = null) {
    ue.info(e, this._player, t || this._context);
  }
  debug(e, t = null) {
    ue.debug(e, this._player, t || this._context);
  }
  verbose(e, t = null) {
    ue.verbose(e, this._player, t || this._context);
  }
}
const un = {}, Xt = '{ "global": {}, "videos": {} }';
async function cn() {
  switch (this.source.name) {
    case "cookie":
      try {
        return JSON.parse(qe("preferences"));
      } catch {
        return JSON.parse(Xt);
      }
    case "dataPlugin":
      try {
        return await this.player.data.read(this.source.context, {}) || JSON.parse(Xt);
      } catch {
        return JSON.parse(Xt);
      }
  }
}
async function nl(i) {
  switch (this.source.name) {
    case "cookie":
      Aa(this.player, this.source.consentType, "preferences", JSON.stringify(i));
      break;
    case "dataPlugin":
      await this.player.data.write(this.source.context, {}, i);
      break;
  }
}
class sl extends Me {
  constructor(e) {
    super(e);
    const { currentSource: t, sources: n } = e.config.preferences || {
      currentSource: "cookie",
      sources: {
        cookie: {
          consentType: "necessary"
        }
      }
    };
    if (this.source = n[t], this.source.name = t, this._loaded = !1, !this.source)
      throw Error("Invalid configuration in preferences. Check the configuration file.");
  }
  async set(e, t, { global: n = !1 } = {}) {
    const s = await cn.apply(this);
    n ? s.global[e] = t : (s.videos[this.player.videoId] = s.videos[this.player.videoId] || {}, s.videos[this.player.videoId][e] = t), await nl.apply(this, [s]);
  }
  async get(e, { global: t = !1 } = {}) {
    const n = await cn.apply(this);
    return t ? n.global[e] : n.videos[this.player.videoId] && n.videos[this.player.videoId][e] || void 0;
  }
}
function al(i) {
  var e;
  (e = this._skinData) != null && e.configOverrides && xt(i, this._skinData.configOverrides);
}
async function rl() {
  var i;
  if ((i = this._skinData) != null && i.styleSheets) {
    const e = [];
    this._skinData.styleSheets.forEach((t) => {
      if (!/\{.*/.test(t)) if (this._externalResourcesAllowed) {
        const n = ae([this._skinUrl, t]);
        e.push(new Promise(async (s) => {
          await Un(n, !1), s();
        }));
      } else
        throw new Error("No external resources allowed loading skin object");
    }), await Promise.allSettled(e);
  }
}
async function ol() {
  var i;
  if (this.player.__skinStyleSheets__ = this.player.__skinStyleSheets__ || [], (i = this._skinData) != null && i.styleSheets) {
    const e = [];
    this._skinData.styleSheets.forEach((t) => {
      if (/\{.*/.test(t))
        e.push(new Promise((n) => {
          const s = document.createElement("style");
          s.innerHTML = t, this.player.__skinStyleSheets__.push(s), document.head.appendChild(s), n();
        }));
      else {
        const n = ae([this._skinUrl, t]);
        e.push(new Promise(async (s) => {
          const a = await Un(n);
          this.player.__skinStyleSheets__.push(a), s();
        }));
      }
    }), await Promise.allSettled(e);
  }
}
function hn() {
  this.player.__skinStyleSheets__ = this.player.__skinStyleSheets__ || [], this.player.__skinStyleSheets__.forEach((i) => {
    xa(i);
  }), this.player.__skinStyleSheets__ = [];
}
async function ll() {
  var i;
  Array.isArray((i = this._skinData) == null ? void 0 : i.icons) && await Promise.all(this._skinData.icons.map(({ plugin: e, identifier: t, icon: n }) => new Promise(async (s, a) => {
    const r = document.createElement("div");
    if (r.innerHTML = n, r.children[0] && r.children[0].tagName === "svg")
      s();
    else if (this._externalResourcesAllowed) {
      const o = ae([this._skinUrl, n]);
      (await fetch(o)).ok ? s() : a(new Error(`Skin icon not found at URL '${o}'`));
    } else
      throw new Error("No external resources allowed loading skin object");
  })));
}
async function ul() {
  var i;
  Array.isArray((i = this._skinData) == null ? void 0 : i.icons) && await Promise.all(this._skinData.icons.map(({ plugin: e, identifier: t, icon: n }) => new Promise(async (s, a) => {
    const r = document.createElement("div");
    if (r.innerHTML = n, r.children[0] && r.children[0].tagName === "svg")
      this.player.addCustomPluginIcon(e, t, n), s();
    else {
      const o = ae([this._skinUrl, n]), l = await fetch(o);
      if (l.ok) {
        const u = await l.text();
        this.player.addCustomPluginIcon(e, t, u), s();
      } else
        a(new Error(`Skin icon not found at URL '${o}'`));
    }
  })));
}
class cl {
  constructor(e) {
    this._player = e;
  }
  get player() {
    return this._player;
  }
  async loadSkin(e) {
    const t = this._player.state === E.LOADED && !await this._player.paused(), n = this._player.state === E.LOADED ? await this._player.currentTime() : 0;
    if (typeof e == "string") {
      this._skinUrl = $n(e), this._externalResourcesAllowed = !0;
      const s = await fetch(e);
      if (!s.ok)
        throw new Error(`Error loading skin from URL ${e}`);
      this._skinData = await s.json();
    } else typeof e == "object" && (this._skinUrl = "", this._externalResourcesAllowed = !1, this._skinData = e);
    try {
      await rl.apply(this), await ll.apply(this), (this._player.state === E.LOADED || this._player.state === E.MANIFEST) && (await this._player.reload(), await this._player.play(), await this._player.setCurrentTime(n), t || await this._player.pause());
    } catch (s) {
      throw this._skinUrl = "", this._externalResourcesAllowed = !0, this._skinData = {}, s;
    }
  }
  unloadSkin() {
    var e, t;
    Array.isArray((e = this._skinData) == null ? void 0 : e.icons) && ((t = this._skinData) == null || t.icons.forEach(({ plugin: n, identifier: s }) => {
      this.player.removeCustomPluginIcon(n, s);
    })), this._skinUrl = null, this._skinData = {}, (this._player.state === E.LOADED || this._player.state === E.MANIFEST) && this._player.reload();
  }
}
class hl {
  constructor(e, t) {
    this._player = t, this._videoManifest = JSON.parse(JSON.stringify(e)), this._metadata = this._videoManifest.metadata || {}, this._streams = {}, this._frameList = {}, this._trimming = this._videoManifest.trimming, this._captions = this._videoManifest.captions, this._visibleTimeLine = this._videoManifest.visibleTimeLine;
    function n() {
      if (this.streams.length !== 1)
        return null;
      if (this.isAudioOnly)
        return this.audioOnlySource.src;
      const s = this.streams[0];
      if (!(s.sources.mp4 || s.sources.hls || s.sources.hlsLive))
        return null;
      const a = document.createElement("video");
      if (s.sources.mp4 && s.sources.mp4.length && a.canPlayType(s.sources.mp4[0].mimetype || "video/mp4") === "probably")
        return s.sources.mp4[0].src;
      const r = s.sources.hls || s.sources.hlsLive;
      return r && r.length && a.canPlayType(r[0].mimetype || "application/vnd.apple.mpegurl") !== "" && /safari/i.test(navigator.userAgent) ? r[0].src : null;
    }
    this._streams = {
      streams: this._videoManifest.streams,
      get contents() {
        return this.streams.map((s) => s.content);
      },
      getStream(s) {
        return this.streams.find((a) => a.content === s);
      },
      getSourceTypes(s) {
        const a = this.getStream(s);
        return a && Object.keys(a.sources) || null;
      },
      getCanvasTypes(s) {
        const a = this.getStream(s);
        return a ? a.canvas || ["video"] : null;
      },
      get isAudioOnly() {
        const s = this.contents.length === 1 && this.contents[0], a = s && this.getCanvasTypes(s) || [], r = this.getStream(s);
        return a.length === 1 && a[0] === "audio" && r.sources.audio && r.sources.audio.length > 0;
      },
      get audioOnlySource() {
        return this.isAudioOnly ? this.getStream(this.contents[0]).sources.audio[0] : null;
      },
      get isNativelyPlayable() {
        return n.apply(this) !== null;
      },
      get nativeSource() {
        return n.apply(this);
      },
      get nativeType() {
        return this.isNativelyPlayable ? this.isAudioOnly ? "audio" : "video" : null;
      },
      get nativePlayer() {
        const s = this.nativeType;
        if (s) {
          const a = document.createElement(s);
          return a.src = this.nativeSource, a;
        } else
          return null;
      }
    }, this._videoManifest.frameList && !Array.isArray(this._videoManifest.frameList) && typeof this._videoManifest.frameList == "object" && typeof this._videoManifest.frameList.targetContent == "string" && Array.isArray(this._videoManifest.frameList.frames) ? this._frameList = this._videoManifest.frameList : Array.isArray(this._videoManifest.frameList) ? this._frameList = {
      targetContent: null,
      frames: this._videoManifest.frameList
    } : this._frameList = {
      targetContent: null,
      frames: []
    }, this._frameList.frames.sort((s, a) => s.time - a.time), this._frameList.getImage = (s, a = !1) => {
      var r, o;
      return (r = this._player) != null && r.videoContainer && this._player._videoContainer.isTrimEnabled && !a ? s += this._player.videoContainer.trimStart : !((o = this._player) != null && o._videoContainer) && !a && console.warn("frameList.getImage(): player instance is null. The trimming information will be ignored."), [...this._frameList.frames].sort((l, u) => u.time - l.time).find((l) => l.time < s);
    }, Object.defineProperty(this._frameList, "isEmpty", {
      get() {
        return Array.isArray(e.frameList) && e.frameList.length === 0 || !e.frameList;
      }
    }), Object.freeze(this._metadata), Object.freeze(this._streams), Object.freeze(this._trimming), Object.freeze(this._captions);
  }
  get metadata() {
    return this._metadata;
  }
  get streams() {
    return this._streams;
  }
  get frameList() {
    return this._frameList;
  }
  get captions() {
    return this._captions;
  }
  get trimming() {
    return this._trimming;
  }
  get visibleTimeLine() {
    return this._visibleTimeLine;
  }
}
const q = Object.freeze([
  "UNLOADED",
  "LOADING_MANIFEST",
  "MANIFEST",
  "LOADING_PLAYER",
  "LOADED",
  "UNLOADING_MANIFEST",
  "UNLOADING_PLAYER",
  "ERROR"
]);
function ks() {
  var i, e, t, n, s, a, r, o;
  const l = ((e = (i = this.videoManifest) == null ? void 0 : i.metadata) == null ? void 0 : e.preview) && Le(this, (n = (t = this.videoManifest) == null ? void 0 : t.metadata) == null ? void 0 : n.preview) || this.defaultVideoPreview, u = ((a = (s = this.videoManifest) == null ? void 0 : s.metadata) == null ? void 0 : a.previewPortrait) && Le(this, (o = (r = this.videoManifest) == null ? void 0 : r.metadata) == null ? void 0 : o.previewPortrait) || this.defaultVideoPreviewPortrait;
  this._previewContainer = new zo(this, this._containerElement, l, u);
}
async function dn() {
  this._playerState = E.LOADING_MANIFEST, this._manifestLoaded = !0, this.log.debug("Loading paella player"), this._config = await this.initParams.loadConfig(this.configUrl, this), al.apply(this.skin, [this._config]), xr(this), this._defaultVideoPreview = this._config.defaultVideoPreview || this._initParams.defaultVideoPreview || "", this._defaultVideoPreviewPortrait = this._config.defaultVideoPreviewPortrait || this._initParams.defaultVideoPreviewPortrait || "", this._cookieConsent = new Xo(this, {
    getConsent: this._initParams.getCookieConsentFunction,
    getDescription: this._initParams.getCookieDescriptionFunction
  }), this._preferences = new sl(this);
  const i = new URLSearchParams(window.location.search), e = new URLSearchParams();
  for (const [s, a] of i)
    e.append(s.toLowerCase(), a);
  const t = e.get("loglevel"), n = t && Array.from(Object.keys(D)).indexOf(t.toUpperCase()) !== -1 ? t : this._config.logLevel || "INFO";
  this._log.setLevel(n), await this._initParams.loadDictionaries(this), So(this), await Ko(this), this._videoContainer = new Ro(this, this._containerElement), await this.videoContainer.create();
  for (const s of this.pluginModules) {
    const a = s.getDictionaries && await s.getDictionaries();
    if (a)
      for (const r in a)
        Qe(r, a[r]);
  }
}
async function pn() {
  var i, e;
  this.log.debug("Video manifest loaded:"), this.log.debug(this.videoManifest), this._data = new po(this);
  for (const t in un) {
    const n = un[t];
    Qe(t, n);
  }
  if (this._playerState = E.MANIFEST, P(this, L.MANIFEST_LOADED), (e = (i = this.videoManifest) == null ? void 0 : i.metadata) != null && e.preview)
    ks.apply(this);
  else
    throw new Error("No preview image found in video manifest, and no default preview image defined.");
  Ao(this._videoManifest);
}
class dl {
  constructor(e, t = {}) {
    this._log = new il(this), this._packageData = tt, this._log.setLevel(D.VERBOSE), window.__paella_instances__ = window.__paella_instances__ || [], window.__paella_instances__.push(this), this.log.debug("New paella player instance"), typeof e == "string" && (e = document.getElementById(e)), e.classList.add("player-container"), this.log.debug("Loading skin manager"), this._skin = new cl(this), this._containerElement = e, this._initParams = t, this._initParams.manifestFileName = this._initParams.manifestFileName || "data.json", this._initParams.loadConfig = this._initParams.loadConfig || Da, this._initParams.getVideoId = this._initParams.getVideoId || $a, this._initParams.getManifestUrl = this._initParams.getManifestUrl || Ma, this._initParams.getManifestFileUrl = this._initParams.getManifestFileUrl || Na, this._initParams.loadVideoManifest = this._initParams.loadVideoManifest || Ua, this._initParams.translateFunction = this._initParams.translateFunction || qn, this._initParams.getLanguageFunction = this._initParams.getLanguageFunction || Yn, this._initParams.setLanguageFunction = this._initParams.setLanguageFunction || Qn, this._initParams.addDictionaryFunction = this._initParams.addDictionaryFunction || Kn, this._initParams.getDictionariesFunction = this._initParams.getDictionariesFunction || Jn, this._initParams.getDefaultLanguageFunction = this._initParams.getDefaultLanguageFunction || Xn, this._initParams.Loader = this._initParams.customLoader || Oa, this._initParams.getCookieConsentFunction = this._initParams.getCookieConsentFunction || Es, this._initParams.getCookieDescriptionFunction = this._initParams.getCookieDescriptionFunction || Ts, this._initParams.getProgressIndicator = this._initParams.getProgressIndicator || tl, this._initParams.loadDictionaries = this._initParams.loadDictionaries || async function(a) {
      Qe("en", {
        Hello: "Hello",
        World: "World"
      }), Qe("es", {
        Hello: "Hola",
        World: "Mundo"
      }), nn(navigator.language.substring(0, 2));
    };
    const n = this._initParams.plugins || [];
    this._initParams.plugins = [
      ...n
    ], Tr(this._initParams.translateFunction), Pr(this._initParams.setLanguageFunction), Ir(this._initParams.getLanguageFunction), Sr(this._initParams.addDictionaryFunction), kr(this._initParams.getDictionariesFunction), Ar(this._initParams.getDefaultLanguageFunction), this._config = null, this._defaultVideoPreview = "", this._defaultVideoPreviewPortrait = "", this._videoId = null, this._manifestUrl = null, this._manifestFileUrl = null, this._manifestData = null, this._videoManifest = null, this._playerLoaded = !1;
    const s = () => {
      this.resize();
    };
    window.addEventListener("resize", s), this.containerElement.addEventListener("fullscreenchange", () => {
      P(this, L.FULLSCREEN_CHANGED, { status: this.isFullscreen }), this.isFullscreen ? P(this, L.ENTER_FULLSCREEN) : P(this, L.EXIT_FULLSCREEN);
    }), this._playerState = E.UNLOADED, this._customPluginIcons = {};
  }
  get version() {
    return this._packageData.version;
  }
  get pluginModules() {
    return this.__pluginModules || [];
  }
  get log() {
    return this._log;
  }
  get ready() {
    return this._playerState === E.LOADED;
  }
  get state() {
    return this._playerState;
  }
  get stateText() {
    return q[this.state];
  }
  get Events() {
    return L;
  }
  get preferences() {
    return this._preferences;
  }
  get skin() {
    return this._skin;
  }
  get containsFocus() {
    return this.containerElement.contains(document.activeElement);
  }
  get hideUiTime() {
    return this._hideUiTime;
  }
  set hideUiTime(e) {
    this._hideUiTime = e;
  }
  get containerSize() {
    return { w: this._containerElement.offsetWidth, h: this._containerElement.offsetHeight };
  }
  get containerElement() {
    return this._containerElement;
  }
  get initParams() {
    return this._initParams;
  }
  get cookieConsent() {
    return this._cookieConsent;
  }
  get configLoaded() {
    return this.configUrl !== null;
  }
  get videoManifestLoaded() {
    return this.videoManifest !== null;
  }
  get videoLoaded() {
    var e;
    return ((e = this.videoContainer) == null ? void 0 : e.ready) || !1;
  }
  get playerLoaded() {
    return this._playerLoaded;
  }
  get configResourcesUrl() {
    var e;
    return ((e = this._initParams) == null ? void 0 : e.configResourcesUrl) || "config/";
  }
  get configUrl() {
    var e;
    return ((e = this._initParams) == null ? void 0 : e.configUrl) || "config/config.json";
  }
  get config() {
    return this._config;
  }
  get defaultVideoPreview() {
    return this._defaultVideoPreview;
  }
  get defaultVideoPreviewPortrait() {
    return this._defaultVideoPreviewPortrait;
  }
  get videoId() {
    return this._videoId;
  }
  // Base URL where the video repository is located, for example "repository/"
  get repositoryUrl() {
    var e, t;
    return ((e = this._initParams) == null ? void 0 : e.repositoryUrl) || ((t = this.config) == null ? void 0 : t.repositoryUrl) || "";
  }
  // Base URL where the video manifest file is located, for example "repository/[video_id]"
  get manifestUrl() {
    return this._manifestUrl;
  }
  // Video manifest file name, for example "data.json"
  get manifestFileName() {
    var e, t;
    return ((e = this.config) == null ? void 0 : e.manifestFileName) || ((t = this._initParams) == null ? void 0 : t.manifestFileName) || "";
  }
  // Full path of the video manifest, for example "repository/[video_id]/data.json"
  get manifestFileUrl() {
    return this._manifestFileUrl;
  }
  // Video manifest file content (data.json)
  get videoManifest() {
    return this._videoManifest;
  }
  get previewContainer() {
    return this._previewContainer;
  }
  get videoContainer() {
    return this._videoContainer;
  }
  get playbackBar() {
    return this._playbackBar;
  }
  get captionsCanvas() {
    return this._captionsCanvas;
  }
  get data() {
    return this._data;
  }
  get PlayerState() {
    return E;
  }
  get PlayerStateNames() {
    return q;
  }
  // Manifest query functions
  get metadata() {
    var e;
    return ((e = this._manifestParser) == null ? void 0 : e.metadata) || {};
  }
  get streams() {
    var e;
    return ((e = this._manifestParser) == null ? void 0 : e.streams) || [];
  }
  get frameList() {
    var e;
    return ((e = this._manifestParser) == null ? void 0 : e.frameList) || { frames: [] };
  }
  get captions() {
    var e;
    return ((e = this._manifestParser) == null ? void 0 : e.captions) || [];
  }
  get trimming() {
    var e;
    return ((e = this._manifestParser) == null ? void 0 : e.trimming) || {};
  }
  get visibleTimeLine() {
    var e;
    return ((e = this._manifestParser) == null ? void 0 : e.visibleTimeLine) || !0;
  }
  /**
   * Translate a word or phrase.
   * @param {string} word - The word to translate.
   * @param {Object} [keys=null] - Optional keys for placeholders.
   * @returns {string} - The translated word.
   */
  translate(e, t = null) {
    return Xe(e, t);
  }
  /**
   * Set the current language.
   * @param {string} lang - The language code.
   */
  setLanguage(e) {
    nn(e);
  }
  /**
   * Get the current language.
   * @returns {string} - The current language code.
   */
  getLanguage() {
    return Lr();
  }
  /**
   * Add a dictionary for a specific language.
   * @param {string} lang - The language code.
   * @param {Object} dict - The dictionary object.
   */
  addDictionary(e, t) {
    Qe(e, t);
  }
  /**
   * Get all loaded dictionaries.
   * @returns {Object} - The dictionaries.
   */
  getDictionaries() {
    return Er();
  }
  /**
   * Get the default language.
   * @returns {string} - The default language code.
   */
  getDefaultLanguage() {
    return rs(this);
  }
  /**
   * Bind an event to the player.
   * @param {string} eventName - The event name.
   * @param {Function} fn - The callback function.
   * @param {boolean} [unregisterOnUnload=true] - Whether to unregister the event on unload.
   */
  bindEvent(e, t, n = !0) {
    R(this, e, (s) => t(s), n);
  }
  getPlugin(e, t = null) {
    if (t) {
      const n = this.__pluginData__.pluginInstances[t];
      if (n)
        return n.find((s) => {
          if (s.name === e)
            return s;
        });
    } else {
      const n = {};
      for (const s in this.__pluginData__.pluginInstances) {
        const a = this.__pluginData__.pluginInstances[s].find((r) => {
          if (r.name === e)
            return r;
        });
        a && (n[s] = a);
      }
      return n;
    }
  }
  waitState(e) {
    return new Promise((t, n) => {
      const s = () => {
        this.state === e ? t() : setTimeout(s, 50);
      };
      typeof e == "string" && (e = E[e]), (e < 0 || e > Object.values(E).length) && n(Error(`Invalid player state '${e}'`)), s();
    });
  }
  /**
   * Load a video from a URL.
   * @param {string|string[]} url - The video URL(s).
   * @param {Object} [options] - Additional options.
   * @param {string} [options.title] - The video title.
   * @param {number} [options.duration] - The video duration.
   * @param {string} [options.preview] - The preview image URL.
   * @param {string} [options.previewPortrait] - The portrait preview image URL.
   */
  async loadUrl(e, { title: t, duration: n, preview: s, previewPortrait: a } = {}) {
    if (this._playerState !== E.UNLOADED)
      throw new Error(this.translate("loadUrl(): Invalid current player state: $1", [q[this._playerState]]));
    if (this._manifestLoaded)
      throw new Error(this.translate("loadUrl(): Invalid current player state: $1", [q[this._playerState]]));
    if (!e)
      throw new Error(this.translate("loadUrl(): No URL specified."));
    Array.isArray(e) || (e = [e]), t || (t = ui(e[0]), this.log.warn("Paella.loadUrl(): no title specified. Using URL file name as video name."));
    try {
      if (await dn.apply(this), !s && (this.defaultVideoPreview !== "" || this.defaultVideoPreviewPortrait !== ""))
        s = this.defaultVideoPreview, a = this.defaultVideoPreviewPortrait, this.log.warn("Paella.loadUrl(): no preview image specified. Using default preview image.");
      else if (!s && !a)
        throw new Error("Paella.loadUrl(): no preview image specified and no default preview image configured.");
      this._videoId = Pa(ui(e[0])), this._manifestUrl = $n(e[0]), this._manifestFileUrl = e[0], this.log.debug(`Loading video with identifier '${this.videoId}' from URL '${this.manifestFileUrl}'`);
      const r = zr(this, e.length)[0];
      this._videoManifest = {
        metadata: {
          duration: n,
          title: t,
          preview: s,
          previewPortrait: a
        },
        streams: e.map((o, l) => ({
          sources: $o(this, o),
          content: r[l],
          role: l === 0 ? "mainAudio" : null
        }))
      }, await pn.apply(this);
    } catch (r) {
      throw this._playerState = E.ERROR, this.log.error(r), this._errorContainer = new jt(this, this.translate(r.message)), r;
    }
  }
  /**
   * Load the video manifest.
   */
  async loadManifest() {
    if (this._playerState !== E.UNLOADED)
      throw new Error(this.translate("loadManifest(): Invalid current player state: $1", [q[this._playerState]]));
    if (!this._manifestLoaded)
      try {
        if (await dn.apply(this), this._videoId = await this.initParams.getVideoId(this._config, this), this.videoId === null)
          throw new Error("No video identifier specified");
        this._manifestUrl = await this.initParams.getManifestUrl(this.repositoryUrl, this.videoId, this._config, this), this._manifestFileUrl = await this.initParams.getManifestFileUrl(this._manifestUrl, this.manifestFileName, this._config, this), this.log.debug(`Loading video with identifier '${this.videoId}' from URL '${this.manifestFileUrl}'`), this._videoManifest = await this.initParams.loadVideoManifest(this.manifestFileUrl, this._config, this), this._videoManifest.metadata = this._videoManifest.metadata || {}, !this._videoManifest.metadata.preview && (this.defaultVideoPreview !== "" || this.defaultVideoPreviewPortrait !== "") && (this._videoManifest.metadata.preview = this.defaultVideoPreview, this._videoManifest.metadata.previewPortrait = this.defaultVideoPreviewPortrait, this.log.warn("Paella.loadUrl(): no preview image specified. Using default preview image.")), this._manifestParser = new hl(this.videoManifest, this), hn.apply(this.skin), await ul.apply(this.skin), await ol.apply(this.skin), await pn.apply(this);
      } catch (e) {
        throw this._playerState = E.ERROR, this.log.error(e), this._errorContainer = new jt(this, this.translate(e.message)), e;
      }
  }
  /**
   * Load the player interface.
   */
  async loadPlayer() {
    var e, t, n;
    try {
      if (this._captionsCanvas = new Yo(this, this._containerElement), this._playerState !== E.MANIFEST)
        throw new Error(this.translate("loadPlayer(): Invalid current player state: $1", [q[this._playerState]]));
      this._playerState = E.LOADING_PLAYER, (e = this._previewContainer) == null || e.removeFromParent(), this._loader = new this.initParams.Loader(this), await this._loader.create(), await this.videoContainer.load((t = this.videoManifest) == null ? void 0 : t.streams), P(this, L.STREAM_LOADED), this._playbackBar = new qo(this, this.containerElement), await this._playbackBar.load(), this._hideUiTime = ((n = this.config.ui) == null ? void 0 : n.hideUITimer) ?? 5e3, Sa(this), this._captionsCanvas.load(), this._playerState = E.LOADED, await this.videoContainer.updateLayout(), P(this, L.PLAYER_LOADED), !(this.videoManifest.metadata.visibleTimeLine ?? !0) && this.playbackBar.progressIndicator.hideTimeLine(), this._loader.debug || (this._loader.removeFromParent(), this._loader = null);
    } catch (s) {
      throw this._playerState = E.ERROR, this._loader && (this._loader.removeFromParent(), this._loader = null), this._errorContainer = new jt(this, s.message), s;
    }
  }
  /**
   * Load the player (manifest and interface).
   */
  async load() {
    switch (this.state) {
      case E.UNLOADED:
        await this.loadManifest(), await this.loadPlayer();
        break;
      case E.MANIFEST:
        await this.loadPlayer();
        break;
      case E.LOADED:
        break;
      default:
        throw new Error(this.translate("Could not load player: state transition in progress: $1", [q[this.state]]));
    }
  }
  /**
   * Unload the player.
   */
  async unload() {
    switch (this.state) {
      case E.UNLOADED:
        break;
      case E.MANIFEST:
        await this.unloadManifest();
        break;
      case E.LOADED:
      case E.ERROR:
        await this.unloadPlayer(), await this.unloadManifest();
        break;
      default:
        throw new Error(this.translate("Could not unload player: state transition in progress: $1", [q[this.state]]));
    }
  }
  /**
   * Unloads the video manifest and all its resources.
   * @returns {Promise<void>}
   */
  async unloadManifest() {
    var e;
    if (this._playerState !== E.MANIFEST && this._playerState !== E.ERROR)
      throw new Error(this.translate("unloadManifest(): Invalid current player state: $1", [q[this._playerState]]));
    this._errorContainer && (this._errorContainer.removeFromParent(), this._errorContainer = null), this._playerState = E.UNLOADING_MANIFEST, this.log.debug("Unloading paella player"), await Jo(), await ko(this), this._manifestLoaded = !1, (e = this._previewContainer) == null || e.removeFromParent(), this._preferences = null, this._playerState = E.UNLOADED, hn.apply(this.skin);
  }
  /**
   * Unload the player interface.
   * @returns {Promise<void>}
   */
  async unloadPlayer() {
    var e, t, n, s, a;
    if (this._playerState !== E.LOADED && this._playerState !== E.ERROR)
      throw new Error(this.translate("unloadManifest(): Invalid current player state: $1", [q[this._playerState]]));
    this._errorContainer && (this._errorContainer.removeFromParent(), this._errorContainer = null), this._playerState = E.UNLOADING_PLAYER, await ((e = this._videoContainer) == null ? void 0 : e.unload()), this._videoContainer = null, await ((t = this._playbackBar) == null ? void 0 : t.unload()), this._playbackBar = null, (n = this._captionsCanvas) == null || n.unload(), this._captionsCanvas = null, ka(this), P(this, L.PLAYER_UNLOADED), (a = (s = this.videoManifest) == null ? void 0 : s.metadata) != null && a.preview && ks.apply(this), wa(this), this._playerState = E.MANIFEST;
  }
  /**
   * Reload the player.
   * @param {Function} [onUnloadFn=null] - Function to call after unloading.
   * @returns {Promise<void>}
   */
  async reload(e = null) {
    switch (this.state) {
      case E.UNLOADED:
        break;
      case E.MANIFEST:
        await this.unloadManifest();
        break;
      case E.LOADED:
        await this.unload();
        break;
    }
    typeof e == "function" && await e(), await this.load();
  }
  async resize() {
    var e, t;
    if ((e = this.videoContainer) == null || e.updateLayout(), (t = this.playbackBar) == null || t.onResize(), this.videoContainer) {
      const n = () => ({
        w: this.videoContainer.element.offsetWidth,
        h: this.videoContainer.element.offsetHeight
      });
      P(this, L.RESIZE, { size: n() }), this._resizeEndTimer && clearTimeout(this._resizeEndTimer), this._resizeEndTimer = setTimeout(() => {
        P(this, L.RESIZE_END, { size: n() });
      }, 1e3);
    }
  }
  /**
   * Hide the user interface.
   * @returns {Promise<void>}
   */
  async hideUserInterface() {
    var e, t, n;
    await ((e = this.videoContainer) == null ? void 0 : e.paused()) || (this._uiHidden = !0, (t = this.videoContainer) == null || t.hideUserInterface(), (n = this.playbackBar) == null || n.hideUserInterface(), P(this, L.HIDE_UI));
  }
  /**
   * Show the user interface.
   * @returns {Promise<void>}
   */
  async showUserInterface() {
    var e, t;
    (e = this.videoContainer) == null || e.showUserInterface(), (t = this.playbackBar) == null || t.showUserInterface(), this._uiHidden && P(this, L.SHOW_UI), this._uiHidden = !1;
  }
  /**
   * Play the video.
   * @returns {Promise<void>}
   */
  async play() {
    return this.videoContainer.ready || await this.loadPlayer(), await this.videoContainer.play();
  }
  /**
   * Pause the video.
   * @returns {Promise<void>}
   */
  async pause() {
    var e;
    return await ((e = this.videoContainer) == null ? void 0 : e.pause());
  }
  /**
   * Toggle between play and pause.
   * @returns {Promise<void>}
   */
  async togglePlay() {
    return this.videoContainer.ready ? await this.paused() ? await this.play() : await this.pause() : await this.play();
  }
  /**
   * Check if the video is paused.
   * @returns {Promise<boolean>}
   */
  async paused() {
    return this.videoContainer ? this.videoContainer.paused() : !0;
  }
  /**
   * Stop the video.
   * @returns {Promise<void>}
   */
  async stop() {
    var e;
    return await ((e = this.videoContainer) == null ? void 0 : e.stop());
  }
  /**
   * Set the current playback time.
   * @param {number} t - The time in seconds.
   * @returns {Promise<void>}
   */
  async setCurrentTime(e) {
    var t;
    return await ((t = this.videoContainer) == null ? void 0 : t.setCurrentTime(e));
  }
  /**
   * Get the current playback time.
   * @returns {Promise<number>}
   */
  async currentTime() {
    var e;
    return (e = this.videoContainer) == null ? void 0 : e.currentTime();
  }
  /**
   * Get the current volume.
   * @returns {Promise<number>}
   */
  async volume() {
    var e;
    return (e = this.videoContainer) == null ? void 0 : e.volume();
  }
  /**
   * Set the volume.
   * @param {number} v - The volume level (0-1).
   * @returns {Promise<void>}
   */
  async setVolume(e) {
    var t;
    return (t = this.videoContainer) == null ? void 0 : t.setVolume(e);
  }
  /**
   * Get the video duration.
   * @returns {Promise<number>}
   */
  async duration() {
    var e;
    return (e = this.videoContainer) == null ? void 0 : e.duration();
  }
  /**
   * Get the playback rate.
   * @returns {Promise<number>}
   */
  async playbackRate() {
    var e;
    return (e = this.videoContainer) == null ? void 0 : e.playbackRate();
  }
  /**
   * Set the playback rate.
   * @param {number} r - The playback rate.
   * @returns {Promise<void>}
   */
  async setPlaybackRate(e) {
    var t;
    return (t = this.videoContainer) == null ? void 0 : t.setPlaybackRate(e);
  }
  /**
   * Skip forward by a number of seconds.
   * @param {number} s - The number of seconds to skip.
   * @returns {Promise<void>}
   */
  async skipSeconds(e) {
    const t = await this.currentTime();
    return await this.setCurrentTime(t + e);
  }
  /**
   * Rewind by a number of seconds.
   * @param {number} s - The number of seconds to rewind.
   * @returns {Promise<void>}
   */
  async rewindSeconds(e) {
    const t = await this.currentTime();
    return await this.setCurrentTime(t - e);
  }
  /**
   * Check if fullscreen is supported.
   * @returns {boolean}
   */
  isFullScreenSupported() {
    return this.containerElement.requestFullscreen || this.containerElement.webkitRequestFullScreen;
  }
  /**
   * Enter fullscreen mode.
   * @returns {Promise<void>}
   */
  async enterFullscreen() {
    let e = null;
    return this.containerElement.requestFullscreen ? e = this.containerElement.requestFullscreen() : this.containerElement.webkitRequestFullScreen && (this.log.debug("Safari enter fullscreen"), e = this.containerElement.webkitRequestFullScreen()), setTimeout(() => this.resize(), 500), e;
  }
  /**
   * Exit fullscreen mode.
   * @returns {Promise<void>}
   */
  async exitFullscreen() {
    if (document.exitFullscreen && this.isFullscreen)
      return document.exitFullscreen();
    if (document.webkitCancelFullScreen && this.isFullscreen)
      return this.log.debug("Safari exit fullscreen"), document.webkitCancelFullScreen();
  }
  /**
   * Check if the player is in fullscreen mode.
   * @returns {boolean}
   */
  get isFullscreen() {
    return document.fullscreenElement === this.containerElement || document.webkitFullscreenElement === this.containerElement;
  }
  /**
   * Add a custom plugin icon.
   * @param {string} pluginName - The plugin unique identifier, for example `es.upv.paella.playPauseButton`.
   * @param {string} iconName - The icon name in the plugin.
   * @param {string} svgData - The SVG data for the icon.
   */
  addCustomPluginIcon(e, t, n) {
    this._customPluginIcons[`${e}-${t}`] = n;
  }
  /**
   *  Remove a custom plugin icon.
   * @param {string} pluginName - The plugin unique identifier, for example `es.upv.paella.playPauseButton`.
   * @param {string} iconName - The icon name in the plugin.
   */
  removeCustomPluginIcon(e, t) {
    this._customPluginIcons[`${e}-${t}`] = null;
  }
  /**
   * Get a custom plugin icon.
   * @param {string} pluginName - The plugin name.
   * @param {string} iconName - The icon name.
   * @returns {string|null} - The SVG data for the icon, or null if not found.
   */
  getCustomPluginIcon(e, t) {
    return this._requestedCustomIcons = this._requestedCustomIcons || [], this._requestedCustomIcons.find((n) => n.pluginName === e && n.iconName === t) || this._requestedCustomIcons.push({
      pluginName: e,
      iconName: t
    }), this._customPluginIcons[`${e}-${t}`];
  }
  /**
   * Get the list of requested custom icons.
   * @type {Array}
   */
  get requestedCustomIcons() {
    return this._requestedCustomIcons || [];
  }
}
var As = (i) => {
  throw TypeError(i);
}, xs = (i, e, t) => e.has(i) || As("Cannot " + t), ot = (i, e, t) => (xs(i, e, "read from private field"), t ? t.call(i) : e.get(i)), pl = (i, e, t) => e.has(i) ? As("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), gl = (i, e, t, n) => (xs(i, e, "write to private field"), e.set(i, t), t), Ds = (i) => {
  throw TypeError(i);
}, $i = (i, e, t) => e.has(i) || Ds("Cannot " + t), F = (i, e, t) => ($i(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Ze = (i, e, t) => e.has(i) ? Ds("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), gi = (i, e, t, n) => ($i(i, e, "write to private field"), e.set(i, t), t), gn = (i, e, t) => ($i(i, e, "access private method"), t);
const B = Object.freeze({
  PLAY: "paella:play",
  PAUSE: "paella:pause",
  STOP: "paella:stop",
  ENDED: "paella:ended",
  SEEK: "paella:seek",
  FULLSCREEN_CHANGED: "paella:fullscreenchanged",
  ENTER_FULLSCREEN: "paella:enterfullscreen",
  EXIT_FULLSCREEN: "paella:exitfullscreen",
  VOLUME_CHANGED: "paella:volumeChanged",
  TIMEUPDATE: "paella:timeupdate",
  TRIMMING_CHANGED: "paella:trimmingChanged",
  CAPTIONS_CHANGED: "paella:captionsChanged",
  CAPTIONS_ENABLED: "paella:captionsEnabled",
  CAPTIONS_DISABLED: "paella:captionsDisabled",
  BUTTON_PRESS: "paella:buttonPress",
  SHOW_POPUP: "paella:showPopUp",
  HIDE_POPUP: "paella:hidePopUp",
  MANIFEST_LOADED: "paella:manifestLoaded",
  STREAM_LOADED: "paella:streamLoaded",
  PLAYER_LOADED: "paella:playerLoaded",
  PLAYER_UNLOADED: "paella:playerUnloaded",
  RESIZE: "paella:resize",
  RESIZE_END: "paella:resizeEnd",
  LAYOUT_CHANGED: "paella:layoutChanged",
  PLAYBACK_RATE_CHANGED: "paella:playbackRateChanged",
  VIDEO_QUALITY_CHANGED: "paella:videoQualityChanged",
  HIDE_UI: "paella:hideUI",
  SHOW_UI: "paella:showUI",
  COOKIE_CONSENT_CHANGED: "paella:cookieConsentChanged",
  LOG: "paella:log"
});
function ie(i, e, t, n = !0) {
  return i.__eventListeners__ = i.__eventListeners__ || {}, Array.isArray(e) || (e = [e]), e.forEach((s) => {
    i.__eventListeners__[s] = i.__eventListeners__[s] || [], i.__eventListeners__[s].push({
      callback: t,
      unregisterOnUnload: n
    });
  }), t;
}
function ml(i) {
  return new Promise((e, t) => {
    fetch(i).then((n) => n.text()).then((n) => {
      e(n);
    }).catch((n) => t(n));
  });
}
function yl(i) {
  const e = new URLSearchParams(window.location.search);
  return e.has(i) ? e.get(i) : null;
}
function fl(i) {
  const e = window.location.hash.replace("#", "?"), t = new URLSearchParams(e);
  return t.has(i) ? t.get(i) : null;
}
function $s(i, e) {
  const t = e || "/";
  return i = i.map((n, s) => (s && (n = n.replace(new RegExp("^" + t), "")), s !== i.length - 1 && (n = n.replace(new RegExp(t + "$"), "")), n)), i.join(t);
}
function Ms(i) {
  return new RegExp("^([a-z]+://|//)", "i").test(i) || /^\//.test(i);
}
function Ns(i) {
  try {
    return new URL(i).pathname.split("/").pop();
  } catch {
    return i.split("/").pop();
  }
}
function vl(i) {
  return i.split(".").reduce((e, t, n, s) => n < s.length - 1 ? e !== "" ? `${e}.${t}` : t : e, "");
}
function _l(i) {
  const e = (t) => {
    const n = t.split("/").reduce((s, a, r, o) => r < o.length - 1 ? s !== "" ? `${s}/${a}` : a : s, "");
    return (t[0] === "/" ? `/${n}` : n) + "/";
  };
  try {
    const t = new URL(i);
    return t.origin + e(t.pathname);
  } catch {
    return e(i);
  }
}
function Cl(i) {
  return Ns(i).split(".").pop();
}
function wl(i, e) {
  return Ms(e) ? e : $s([i.manifestUrl, e]);
}
function bl(i) {
  i.__hideTimerPaused__ = !0;
}
function Us(i) {
  i.__hideTimerPaused__ = !1;
}
function Ll(i, e = "hideUiTime") {
  var t;
  i.__hideTimer__ = null;
  const n = async () => i.__hideTimerPaused__ ? (i.log.debug("UI not hidden because the auto hide timer is paused"), !1) : s() ? (i.log.debug("UI not hidden because there is a focused element"), !1) : (await i.hideUserInterface(), !0);
  (t = i.config.ui) != null && t.hideOnMouseLeave && i.containerElement.addEventListener("mouseleave", () => {
    n();
  });
  const s = () => {
    const r = document.activeElement, o = document.querySelector(":focus-visible");
    return (i.playbackBar.element.contains(r) || i.videoContainer.element.contains(r)) && [
      "input",
      "textarea",
      "button"
    ].find((l) => r.tagName.toLowerCase(l)) !== -1 && o;
  }, a = async () => {
    i.__hideTimer__ && clearTimeout(i.__hideTimer__), await i.showUserInterface(), i.__hideTimer__ = setTimeout(async () => {
      i.__hideTimer__ = null, n() || a();
    }, i[e]);
  };
  i.containerElement.addEventListener("mousemove", async (r) => {
    a();
  }), ie(i, B.PLAY, async () => {
    a();
  }), ie(i, B.PAUSE, async () => {
    await i.showUserInterface();
  }), ie(i, B.ENDED, async () => {
    await i.showUserInterface();
  }), document.addEventListener("keydown", async () => {
    a();
  });
}
function El(i) {
  i.__hideTimer__ && (clearTimeout(i.__hideTimer__), delete i.__hideTimer__);
}
function Tl(i) {
  const e = Math.floor(i / 60 / 60), t = Math.floor(i / 60) - e * 60, n = Math.floor(i % 60);
  return (e > 0 ? e.toString().padStart(2, "0") + ":" : "") + t.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0");
}
function Pl(i) {
  const e = /^(?:(\d+):){0,1}(\d+):(\d+)(\.\d+)?$/.exec(i);
  if (e) {
    const t = e[1] !== void 0 ? Number(e[1]) : 0, n = Number(e[2]), s = Number(e[3]);
    return t * 3600 + n * 60 + s;
  }
  return null;
}
function Il(i) {
  const e = /^(?:(\d+):){0,1}(\d+):(\d+)\.(\d+)?$/.exec(i);
  if (e) {
    const t = e[1] !== void 0 ? Number(e[1]) : 0, n = Number(e[2]), s = Number(e[3]), a = e[4] && Number(e[4]) || 0;
    return t * 36e5 + n * 6e4 + s * 1e3 + a;
  }
  return null;
}
function Rs(i, e, t = 365) {
  let n = /* @__PURE__ */ new Date();
  n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3);
  let s = `expires=${n.toUTCString()}`;
  document.cookie = `${i}=${e};${s};path=/;SameSite=None;` + (/Apple/.test(navigator.vendor) ? "" : "Secure;");
}
function Sl(i, e, t, n, s = 365) {
  i.cookieConsent.getConsentForType(e) && Rs(t, n, s);
}
function Mi(i) {
  let e = i + "=", t = decodeURIComponent(document.cookie).split(";");
  for (let n = 0; n < t.length; ++n) {
    let s = t[n];
    for (; s.charAt(0) == " "; )
      s = s.substring(1);
    if (s.indexOf(e) == 0)
      return s.substring(e.length, s.length);
  }
  return "";
}
function kl(i) {
  const e = Mi(i), t = Number(e);
  return e !== "" && !isNaN(t) ? t : null;
}
function Al(i) {
  try {
    return JSON.parse(Mi(i));
  } catch {
    return null;
  }
}
function xl(i, e = !0) {
  return new Promise((t) => {
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("href", i), n.onload = () => t(n);
    const s = document.getElementsByTagName("head")[0];
    e && s.appendChild(n), t();
  });
}
function Dl(i) {
  document.getElementsByTagName("head")[0].removeChild(i);
}
function mi(i, e, t = !0) {
  for (const n in e) {
    const s = i[n];
    let a = e[n];
    t && Array.isArray(s) && Array.isArray(a) ? (s.forEach((r) => {
      a = a.filter((o) => typeof r == "object" && typeof o == "object" && r.id === o.id ? (mi(r, o, t), !1) : !0);
    }), a.forEach((r) => {
      s.push(r);
    })) : typeof s == "object" && a ? mi(s, a, t) : i[n] = e[n];
  }
}
function yi(i, { excludedTags: e = null } = {}) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = ["script"];
  return e && n.push(...e), n.flatMap((s) => Array.from(t.getElementsByTagName(s))).forEach((s) => {
    s.parentElement.removeChild(s);
  }), t.innerHTML;
}
let lt = null;
function $l(i) {
  if (!i) return !1;
  lt || (lt = document.createElement("video"));
  let e = lt.canPlayType(i);
  if (e === "maybe" || e === "probably")
    return !0;
  if (/video\/mp4/i.test(i))
    return e = lt.canPlayType("video/mp4"), e === "maybe" || e === "probably";
}
const mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearAutoHideTimer: El,
  getCookie: Mi,
  getFileExtension: Cl,
  getHashParameter: fl,
  getJSONCookie: Al,
  getNumericCookie: kl,
  getUrlFileName: Ns,
  getUrlParameter: yl,
  isAbsoluteUrl: Ms,
  joinPath: $s,
  loadStyle: xl,
  loadSvgIcon: ml,
  mergeObjects: mi,
  pauseAutoHideUiTimer: bl,
  removeExtension: vl,
  removeFileName: _l,
  resolveResourcePath: wl,
  resumeAutoHideUiTimer: Us,
  sanitizeHTML: yi,
  secondsToTime: Tl,
  setCookie: Rs,
  setCookieIfAllowed: Sl,
  setupAutoHideUiTimer: Ll,
  supportsVideoType: $l,
  timeToMilliseconds: Il,
  timeToSeconds: Pl,
  unloadStyle: Dl
}, Symbol.toStringTag, { value: "Module" }));
var vt;
let Os = class {
  constructor(e) {
    Ze(this, vt, null), gi(this, vt, e);
  }
  get player() {
    return F(this, vt);
  }
};
vt = /* @__PURE__ */ new WeakMap();
function z(i, e = null) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = t.children[0];
  return e && e.appendChild(n), n;
}
let Ml = class extends Os {
  constructor(e, t) {
    super(e), this._name = t;
  }
  getPluginModuleInstance() {
    return null;
  }
  get config() {
    return this._config;
  }
  get type() {
    return "none";
  }
  get order() {
    var e;
    return ((e = this._config) == null ? void 0 : e.order) || 0;
  }
  get description() {
    var e;
    return ((e = this._config) == null ? void 0 : e.description) || "";
  }
  get name() {
    return this._name;
  }
  async isEnabled() {
    var e;
    return (e = this.config) == null ? void 0 : e.enabled;
  }
  async load() {
  }
  async unload() {
  }
};
async function Nl() {
  return await new Promise((i) => {
    const e = document.createElement("audio"), t = setTimeout(() => i(!1), 100);
    e.addEventListener("volumechange", (n) => {
      clearTimeout(t), i(!0);
    }), e.volume = 0.5;
  });
}
let Ul = class extends Os {
  get moduleName() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleName'`), "-";
  }
  get moduleVersion() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleVersion'`), "0.0.0";
  }
  async getDictionaries() {
    return null;
  }
}, Rl = class extends Ml {
  constructor(e, t, n) {
    super(e, t, n), this.__uiPlugin = !0;
  }
  async getDictionaries() {
    return null;
  }
}, Ol = "en", Bl = "";
const yn = {};
function Vl(i) {
  const e = yn[Ol] || {}, t = yn[Bl] || {};
  return e[i] || t[i] || i;
}
let Fl = Vl;
function Hl(i, e = null) {
  const t = Fl(i);
  if (Array.isArray(e)) {
    let n = t;
    return e.forEach((s, a) => {
      const r = `$${a + 1}`;
      n = n.replace(r, s);
    }), n;
  } else
    return t;
}
const fn = () => {
  const i = document.createElement("span");
  return i.classList.add("side-container"), i.classList.add("hidden"), i;
};
let zl = class {
  onIconChanged(e, t, n) {
  }
  onTitleChanged(e, t, n) {
  }
  onStateChanged(e, t, n, s, a) {
  }
};
var _t, fi, pe, ge, Ct;
let nt = class extends Rl {
  constructor() {
    super(...arguments), Ze(this, _t), Ze(this, pe, null), Ze(this, ge, null), Ze(this, Ct, []);
  }
  get type() {
    return "button";
  }
  // _container and _button are loaded in PlaybackBar
  get container() {
    return this._container;
  }
  get button() {
    return this._button;
  }
  get interactive() {
    return !0;
  }
  get dynamicWidth() {
    return !1;
  }
  getId() {
    return null;
  }
  get id() {
    return this.config.id || this.getId();
  }
  getButtonName() {
    return null;
  }
  get buttonName() {
    return this.config.name || this.getButtonName() || this.name;
  }
  get ariaLabel() {
    return this.config.ariaLabel || this.getAriaLabel();
  }
  getAriaLabel() {
    return "";
  }
  get tabIndex() {
    return this.config.tabIndex || this.getTabIndex();
  }
  getTabIndex() {
    return null;
  }
  getDescription() {
    return "";
  }
  get description() {
    return this.config.description || this.getDescription();
  }
  get minContainerSize() {
    return this.config.minContainerSize || this.getMinContainerSize();
  }
  getMinContainerSize() {
    return 0;
  }
  setObserver(e) {
    if (e instanceof zl)
      this._observer = e;
    else if (typeof e.onIconChanged == "function" || typeof e.onTitleChanged == "function" || typeof e.onStateChanged == "function")
      this._observer = e;
    else
      throw new Error("Invalid observer for ButtonPlugin");
  }
  get icon() {
    return this._icon || (this._icon = ""), this._icon;
  }
  set icon(e) {
    typeof e == "string" && (e = yi(e)), this._icon = e, gn(this, _t, fi).call(this);
  }
  get haveIcon() {
    return this.icon !== "";
  }
  get menuIcon() {
    return this._menuIcon || (this._menuIcon = ""), this._menuIcon;
  }
  set menuIcon(e) {
    typeof e == "string" && (e = yi(e)), this._menuIcon = e, gn(this, _t, fi).call(this);
  }
  get haveMenuIcon() {
    return this.menuIcon !== "";
  }
  get isMenuButton() {
    var e, t, n;
    const s = ((e = this.config) == null ? void 0 : e.parentContainer) === "playbackBar" || !((t = this.config) != null && t.parentContainer), a = ((n = this.config) == null ? void 0 : n.parentContainer) === "videoContainer";
    return !s && !a;
  }
  get title() {
    return this._title || "";
  }
  set title(e) {
    var t;
    if (this._title = e, e && this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span") || z(`<span class="button-title-${this.titleSize}"></span>`, this._button);
      n.innerHTML = e;
    } else if (this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span");
      n && this._button.removeChild(n);
    }
    (t = this._observer) != null && t.onTitleChanged && this._observer.onTitleChanged(this, this._title, e);
  }
  // "small", "medium", "large"
  get titleSize() {
    return "medium";
  }
  // "left" or "right"
  get side() {
    var e;
    return ((e = this.config) == null ? void 0 : e.side) || "left";
  }
  get closePopUps() {
    return this.config.closePopUps || this.getClosePopUps();
  }
  getClosePopUps() {
    return !0;
  }
  // "playbackBar" or "videoContainer"
  get parentContainer() {
    var e;
    return ((e = this.config) == null ? void 0 : e.parentContainer) || "playbackBar";
  }
  get className() {
    return "";
  }
  enable() {
    this._enabled = !0, this.show();
  }
  disable() {
    this._enabled = !1, this.hide();
  }
  hide() {
    this._button && (this._button.style.display = "none");
  }
  show() {
    if (this._enabled === !1)
      return;
    const { width: e } = this.player.playbackBar.containerSize;
    this._button && (e > this.minContainerSize || this.parentContainer !== "playbackBar") && (this._button.style.display = null);
  }
  get leftSideContainer() {
    return F(this, pe) || (gi(this, pe, fn()), this.container.appendChild(F(this, pe))), F(this, pe);
  }
  get leftSideContainerPresent() {
    return F(this, pe) !== null;
  }
  get rightSideContainer() {
    return F(this, ge) || (gi(this, ge, fn()), this.container.appendChild(F(this, ge))), F(this, ge);
  }
  get rightSideContainerPresent() {
    return F(this, ge) !== null;
  }
  get stateText() {
    return null;
  }
  get stateIcon() {
    return null;
  }
  setState({ text: e = null, icon: t = null } = {}) {
    var n, s;
    const a = this._statusText, r = this._statusIcon;
    this._statusText = e, this._statusIcon = t, F(this, Ct).forEach((o) => o(this)), this._statusIcon && (this.icon = this._statusIcon, this.menuIcon = this._statusIcon), this._statusText && (this.title = this._statusText), (s = (n = this._observer) == null ? void 0 : n.onStateChanged) == null || s.call(n, this, a, e, r, t);
  }
  onStateChange(e) {
    typeof e == "function" ? F(this, Ct).push(e) : this.player.log.warn("Invalid callback for ButtonPlugin.onStateChange");
  }
  async action(e, t = null) {
  }
  onResize({ width: e, height: t }) {
    e < this.minContainerSize ? this.hide() : this.show();
  }
  focus() {
    var e;
    (e = this.button) == null || e.focus();
  }
  blur() {
    var e;
    (e = this.button) == null || e.blur();
  }
  isFocus() {
    return this.button === document.activeElement;
  }
};
_t = /* @__PURE__ */ new WeakSet(), fi = function() {
  var i;
  const e = this.isMenuButton ? this._menuIcon : this._icon, t = this.isMenuButton && this.haveMenuIcon ? this.menuIcon : this.icon;
  if (t && this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i") || z("<i></i>", this._button);
    n.innerHTML = t;
  } else if (this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i");
    n && this._button.removeChild(n);
  }
  (i = this._observer) != null && i.onIconChanged && this._observer.onIconChanged(this, e, t);
}, pe = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap();
let Bs = class extends nt {
  constructor() {
    super(...arguments), this._refreshContent = !0;
  }
  set refreshContent(e) {
    this._refreshContent = e;
  }
  get refreshContent() {
    return this._refreshContent;
  }
  get closeParentPopUp() {
    return this.config.closeParentPopUp || this.getCloseParentPopUp();
  }
  getCloseParentPopUp() {
    return !1;
  }
  async action(e, t) {
    super.action(e, t), this.parentPopUp = t, await this.showPopUp();
  }
  get parentPopUp() {
    return this._parentPopUp;
  }
  set parentPopUp(e) {
    this._parentPopUp = e;
  }
  get popUp() {
    return this._popUp;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  get moveable() {
    return this.config.moveable ?? !1;
  }
  get resizeable() {
    return this.config.resizeable ?? !1;
  }
  get customPopUpClass() {
    return this.config.customPopUpClass ?? "";
  }
  get closeActions() {
    var e, t;
    const n = ((e = this.config.closeActions) == null ? void 0 : e.clickOutside) ?? !0, s = ((t = this.config.closeActions) == null ? void 0 : t.closeButton) ?? !1;
    return {
      clickOutside: n,
      closeButton: s
    };
  }
  get currentContent() {
    return this._currentContent;
  }
  async getContent() {
    return z("<p>Pop Up Button Plugin Content</p>");
  }
  async checkRefreshContent() {
    if (this.refreshContent) {
      const e = await this.getContent();
      this._currentContent.innerHTML = "", Array.from(e.children).forEach((t) => this._currentContent.appendChild(t));
    }
  }
  get popUpType() {
    return this.config.popUpType || "modal";
  }
  hidePopUp() {
    this.player.playbackBar.popUp.isHidden || this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this._keyEventHandler || (this._keyEventHandler = (t) => {
      t.key === "Escape" && this.hidePopUp();
    }, this.button.addEventListener("keydown", this._keyEventHandler));
    const e = this.player.playbackBar.popUp;
    if (e.isHidden || this._contentId !== e.currentContentId) {
      const t = await this.getContent();
      this._currentContent = t, this._contentId = e.show({
        title: this.menuTitle || this.description,
        content: t,
        attachRight: this.popUpType === "timeline" || this.side === "right",
        attachLeft: this.popUpType === "timeline" || this.side === "left",
        parent: this.parentPopUp
      });
    } else
      e.hide();
  }
};
const Gl = (i) => i ? `<span class="menu-title">${i}</span>` : "", Wl = (i) => i ? `<i class="menu-icon">${i}</i>` : "", Zl = (i) => i ? `aria-label="${i}"` : "", jl = (i) => i ? `<span class="state-text">${i}</span>` : "", ql = (i) => i ? `<i class="state-icon">${i}</i>` : "", Ql = (i, e) => i || e ? `<span class="button-state">${jl(i)}${ql(e)}</span>` : "";
function Yl({ itemData: i, buttonType: e, container: t, allItems: n, menuName: s, selectedItems: a, itemPlugin: r }) {
  const { id: o = 0, title: l = null, icon: u = null, iconText: h = null, showTitle: p = !0, stateText: d = null, stateIcon: _ = null } = i, m = this, C = document.createElement("li"), b = a[o] ?? !1, c = z(`
		<button class="menu-button-item${b ? " selected" : ""}" ${Zl(l)} data-id="${o}"" id="${m.name}_menuItem_${o}">
			${Wl(u)}
			${p ? Gl(l) : ""}
			${d || _ ? Ql(d, _) : ""}
		</button>
	`);
  return r && (r._button = c), c.addEventListener("keydown", (g) => {
    var v;
    const y = () => {
      g.stopPropagation(), g.preventDefault();
    };
    if (g.key === "ArrowUp") {
      const w = c.dataPrev;
      w == null || w.focus(), y();
    } else if (g.key === "ArrowDown") {
      const w = c.dataNext;
      w == null || w.focus(), y();
    } else if (g.key === "Tab") {
      const w = g.shiftKey ? g.target.dataPrev : g.target.dataNext;
      w == null || w.focus(), y();
    } else g.key === "Escape" && (this.player.playbackBar.popUp.pop() ? (v = m.button) == null || v.focus() : this.focus(), y());
  }), c.addEventListener("click", async (g) => {
    if (e === "check") {
      const v = n.find((y) => y.id === o);
      a[o] = !a[o], m.itemSelected(v, n);
    } else if (e === "radio") {
      a[o] = !0;
      let v = null;
      n.forEach((y) => {
        y.id === o ? v = y : a[y.id] = !1;
      }), m.itemSelected(v, n);
    } else {
      const v = n.find((y) => y.id === o);
      m.itemSelected(v, n);
    }
    await m.checkRefreshContent(), g.stopPropagation(), m.closeOnSelect && (m.closeMenu(), Us(m.player));
  }), C.appendChild(c), t.appendChild(C), C;
}
let Re = class extends Bs {
  get closeOnSelect() {
    return this.config.closeOnSelect === void 0 && (this.buttonType !== "check" ? this.config.closeOnSelect = !0 : this.config.closeOnSelect = !1), this.config.closeOnSelect;
  }
  setSelected(e, t) {
    this._selectedItems && (this._selectedItems[e] = t);
  }
  async getContent() {
    var e, t;
    const n = (e = document.activeElement) == null ? void 0 : e.id, s = z("<menu></menu>");
    this._content = s;
    const a = await this.getMenu();
    this._menuItems = a, this._selectedItems || (this._selectedItems = {}, this._menuItems.forEach((l) => {
      l.selected !== void 0 && l.selected !== null && (this._selectedItems[l.id] = l.selected);
    }));
    const r = self.crypto.randomUUID(), o = a.map((l) => Yl.apply(this, [{
      itemData: l,
      buttonType: typeof this.buttonType == "function" ? this.buttonType() : this.buttonType,
      container: s,
      allItems: a,
      menuName: r,
      selectedItems: this._selectedItems,
      itemPlugin: l.plugin
    }]));
    return o.forEach((l, u, h) => {
      const p = l.querySelector("button");
      let d = h[u + 1], _ = h[u - 1];
      u === h.length - 1 && (d = h[0]), u === 0 && (_ = h[h.length - 1]), p.dataNext = d == null ? void 0 : d.querySelector("button"), p.dataPrev = _ == null ? void 0 : _.querySelector("button");
    }), this._firstItem = (t = o[0]) == null ? void 0 : t.querySelector("button"), n && setTimeout(() => {
      var l;
      (l = document.getElementById(n)) == null || l.focus();
    }, 10), s;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  async getMenu() {
    return [
      { id: 0, title: "Option 1" },
      { id: 1, title: "Option 2" },
      { id: 2, title: "Option 3" },
      { id: 3, title: "Option 4" },
      { id: 4, title: "Option 5" }
    ];
  }
  // Returns the menuItems with the current menu state
  get menuItems() {
    return this._menuItems;
  }
  // If showTitles is false, then the 'title' attribute of the menu
  // items is used only as aria-label.
  // If the menu item has no icon, then the `showTitles` property is ignored
  get showTitles() {
    return !0;
  }
  get buttonType() {
    return "radio";
  }
  itemSelected(e, t) {
    this.player.log.warn(`MenuButtonPlugin (${this.name}): itemSelected() function not implemented.`);
  }
  closeMenu() {
    this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this.refreshContent = !0, await super.showPopUp(), this.player.containsFocus && this._firstItem && this._firstItem.focus();
  }
};
const Kl = Object.freeze({
  DISABLED: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
  VERBOSE: 5
});
Kl.INFO;
const Jl = "2.2.1", Xl = {
  version: Jl
};
let ei = null, W = class Vs extends Ul {
  static Get() {
    return ei || (ei = new Vs()), ei;
  }
  get moduleName() {
    return "paella-basic-plugins";
  }
  get moduleVersion() {
    return Xl.version;
  }
  async getDictionaries() {
    return {};
  }
};
const Ni = `
<svg width="100%" height="100%" viewBox="0 0 39 32" version="1.1" style="fill:none;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <path style="stroke-width: 1.5pt" d="M38.499,6.519C38.499,3.471 36.028,1 32.981,1C32.981,1 23.993,0.001 19.499,0.001C15.005,0.001 6.017,1 6.017,1C2.97,1 0.499,3.471 0.499,6.519C0.499,6.519 -0.001,12.899 -0.001,15.751C-0.001,18.91 0.499,25.482 0.499,25.482C0.499,28.529 2.97,31 6.017,31C6.017,31 15.506,32 20,32C24.337,32 32.981,31 32.981,31C36.028,31 38.499,28.529 38.499,25.482C38.499,25.482 39,19.161 39,16C39,12.839 38.499,6.519 38.499,6.519Z"/>
</svg>
`;
let eu = class extends Re {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.audioSelector";
  }
  getAriaLabel() {
    return "Select the active audio track";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  get dynamicWidth() {
    return this.config.showIcon === !1;
  }
  get titleSize() {
    return this.config.showIcon === !1 ? "large" : "small";
  }
  async isEnabled() {
    if (!await super.isEnabled())
      return !1;
    const e = await this.player.videoContainer.streamProvider.getAudioTracks();
    return (e == null ? void 0 : e.length) > 1;
  }
  async load() {
    this.config.showIcon === !1 || (this.icon = this.player.getCustomPluginIcon(this.name, "screenIcon") || Ni), this._audioTracks = await this.player.videoContainer.streamProvider.getAudioTracks(), await this.updateAudioLabel();
  }
  async getMenu() {
    const e = this.player.videoContainer.streamProvider.currentAudioTrack;
    return this._audioTracks.map((t) => ({
      id: t.id,
      title: this.player.translate(t.name) || this.player.translate(t.language),
      data: t,
      selected: t === e
    }));
  }
  async updateAudioLabel() {
    const e = this.player.videoContainer.streamProvider.currentAudioTrack;
    this.title = e.language;
  }
  async itemSelected(e) {
    await this.player.videoContainer.streamProvider.setCurrentAudioTrack(e.data), this.updateAudioLabel();
  }
};
const tu = `<svg width="100%" height="100%" viewBox="0 0 27 31" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="repeat" transform="matrix(1,0,0,1,-132.5,-2)">
        <g transform="matrix(1,0,0,1,132.5,2)">
            <path d="M7.364,6.48C9.179,5.515 11.255,4.967 13.461,4.967C20.569,4.967 26.331,10.651 26.331,17.664C26.331,24.676 20.569,30.36 13.461,30.36C8.436,30.36 4.083,27.518 1.964,23.375L1.973,23.34L3.716,22.554C5.531,26.101 9.257,28.534 13.56,28.534C19.645,28.534 24.579,23.667 24.579,17.664C24.579,11.66 19.645,6.793 13.56,6.793C11.624,6.793 9.804,7.286 8.223,8.151L12.5,12L0,12L6.5,0L7.364,6.48Z" style="stroke:none;stroke-width:0.07px;"/>
        </g>
        <g transform="matrix(1.10748,0,0,1.05518,-14.2059,-1.08359)">
            <g>
                <path d="M132.929,20.884L133.826,20.764C133.929,21.273 134.104,21.639 134.352,21.864C134.6,22.088 134.901,22.2 135.257,22.2C135.679,22.2 136.035,22.054 136.326,21.762C136.617,21.469 136.762,21.107 136.762,20.675C136.762,20.263 136.628,19.923 136.359,19.655C136.089,19.388 135.747,19.254 135.332,19.254C135.162,19.254 134.951,19.287 134.699,19.354L134.798,18.566C134.858,18.573 134.906,18.576 134.943,18.576C135.325,18.576 135.669,18.476 135.975,18.277C136.281,18.077 136.433,17.77 136.433,17.355C136.433,17.025 136.322,16.753 136.099,16.537C135.877,16.321 135.589,16.213 135.237,16.213C134.888,16.213 134.597,16.323 134.364,16.542C134.132,16.761 133.982,17.09 133.916,17.529L133.018,17.369C133.128,16.768 133.377,16.302 133.766,15.971C134.155,15.64 134.639,15.475 135.217,15.475C135.616,15.475 135.983,15.561 136.319,15.732C136.654,15.903 136.911,16.136 137.089,16.432C137.267,16.728 137.356,17.042 137.356,17.374C137.356,17.69 137.271,17.978 137.101,18.237C136.932,18.496 136.681,18.702 136.349,18.855C136.781,18.955 137.116,19.162 137.356,19.476C137.595,19.79 137.715,20.183 137.715,20.655C137.715,21.293 137.482,21.834 137.017,22.277C136.551,22.721 135.963,22.943 135.252,22.943C134.61,22.943 134.078,22.752 133.654,22.37C133.23,21.988 132.989,21.492 132.929,20.884Z" style="fill-rule:nonzero;stroke:none;"/>
                <path d="M138.602,19.209C138.602,18.345 138.691,17.649 138.869,17.123C139.047,16.596 139.311,16.19 139.661,15.904C140.012,15.618 140.453,15.475 140.985,15.475C141.377,15.475 141.721,15.554 142.017,15.712C142.313,15.87 142.557,16.097 142.75,16.395C142.943,16.692 143.094,17.055 143.203,17.482C143.313,17.909 143.368,18.485 143.368,19.209C143.368,20.067 143.28,20.759 143.104,21.285C142.928,21.812 142.664,22.219 142.314,22.507C141.963,22.794 141.52,22.938 140.985,22.938C140.28,22.938 139.727,22.685 139.325,22.18C138.843,21.572 138.602,20.582 138.602,19.209ZM139.524,19.209C139.524,20.409 139.665,21.207 139.946,21.604C140.226,22.002 140.573,22.2 140.985,22.2C141.397,22.2 141.744,22.001 142.024,21.602C142.305,21.203 142.446,20.406 142.446,19.209C142.446,18.006 142.305,17.207 142.024,16.811C141.744,16.416 141.394,16.218 140.975,16.218C140.563,16.218 140.234,16.392 139.988,16.741C139.679,17.187 139.524,18.009 139.524,19.209Z" style="fill-rule:nonzero;stroke:none"/>
                <path d="M144.171,21.233L145.058,21.093C145.108,21.449 145.247,21.722 145.474,21.911C145.702,22.101 146.02,22.195 146.429,22.195C146.841,22.195 147.147,22.111 147.346,21.943C147.546,21.776 147.645,21.579 147.645,21.353C147.645,21.15 147.557,20.99 147.381,20.874C147.258,20.794 146.952,20.693 146.464,20.57C145.806,20.404 145.35,20.26 145.095,20.139C144.841,20.017 144.648,19.85 144.517,19.635C144.386,19.421 144.32,19.184 144.32,18.925C144.32,18.689 144.374,18.47 144.482,18.269C144.59,18.068 144.737,17.901 144.923,17.768C145.063,17.665 145.253,17.578 145.494,17.507C145.735,17.435 145.993,17.399 146.269,17.399C146.685,17.399 147.05,17.459 147.364,17.579C147.678,17.699 147.91,17.861 148.059,18.065C148.209,18.269 148.312,18.543 148.368,18.885L147.491,19.005C147.451,18.732 147.335,18.519 147.144,18.367C146.953,18.214 146.683,18.137 146.334,18.137C145.922,18.137 145.628,18.205 145.452,18.342C145.276,18.478 145.188,18.637 145.188,18.82C145.188,18.937 145.224,19.041 145.297,19.134C145.37,19.231 145.485,19.31 145.641,19.374C145.731,19.407 145.995,19.483 146.434,19.603C147.069,19.772 147.512,19.911 147.762,20.019C148.013,20.127 148.21,20.284 148.353,20.49C148.496,20.696 148.568,20.952 148.568,21.258C148.568,21.557 148.48,21.839 148.306,22.103C148.131,22.367 147.88,22.572 147.551,22.716C147.222,22.861 146.849,22.933 146.434,22.933C145.746,22.933 145.222,22.79 144.861,22.504C144.5,22.218 144.27,21.795 144.171,21.233Z" style="fill-rule:nonzero;stroke:none;"/>
            </g>
        </g>
    </g>
</svg>`;
let iu = class extends nt {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.backwardButtonPlugin";
  }
  getAriaLabel() {
    return this.player.translate("Backward $1 seconds", [this.time]);
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async isEnabled() {
    const e = await super.isEnabled();
    return this.time = this.config.time || 30, e;
  }
  async load() {
    const e = this.config.suffix !== void 0 ? this.config.suffix : !0;
    this.suffix = e ? "s" : "", this.icon = this.player.getCustomPluginIcon(this.name, "backwardIcon") || tu, setTimeout(() => {
      var t;
      Array.from(((t = this.iconElement) == null ? void 0 : t.getElementsByClassName("time-text")) || []).forEach((n) => {
        n.innerHTML = this.time + this.suffix;
      });
    }, 100);
  }
  async action() {
    const e = await this.player.videoContainer.currentTime();
    this.player.videoContainer.setCurrentTime(e - this.time);
  }
};
const nu = `<svg width="100%" height="100%" viewBox="0 0 39 32" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <path d="M37,9.5C37,5.913 34.087,3 30.5,3L8.5,3C4.913,3 2,5.913 2,9.5L2,22.5C2,26.087 4.913,29 8.5,29L30.5,29C34.087,29 37,26.087 37,22.5L37,9.5ZM18.97,21.884C18.97,21.983 18.891,22.125 18.733,22.308C17.111,24.188 15.102,25.128 12.706,25.128C10.21,25.128 8.214,24.217 6.716,22.395C5.319,20.698 4.62,18.577 4.62,16.031C4.62,13.486 5.331,11.356 6.754,9.642C8.268,7.795 10.269,6.872 12.756,6.872C15.277,6.872 17.227,7.725 18.608,9.43C18.741,9.605 18.808,9.75 18.808,9.867C18.808,10.008 18.587,10.426 18.147,11.121C17.706,11.816 17.439,12.163 17.348,12.163C17.24,12.163 16.986,11.959 16.587,11.551C16.096,11.052 15.634,10.678 15.202,10.428C14.486,10.021 13.696,9.817 12.831,9.817C11.184,9.817 9.902,10.445 8.987,11.701C8.172,12.824 7.765,14.238 7.765,15.944C7.765,17.649 8.168,19.076 8.975,20.224C9.89,21.513 11.167,22.158 12.806,22.158C13.621,22.158 14.407,21.954 15.164,21.547C15.663,21.28 16.171,20.902 16.687,20.411C17.119,20.003 17.356,19.8 17.398,19.8C17.448,19.8 17.722,20.13 18.221,20.792C18.721,21.453 18.97,21.817 18.97,21.884ZM34.38,21.884C34.38,21.983 34.301,22.125 34.143,22.308C32.521,24.188 30.512,25.128 28.116,25.128C25.62,25.128 23.624,24.217 22.126,22.395C20.729,20.698 20.03,18.577 20.03,16.031C20.03,13.486 20.741,11.356 22.164,9.642C23.678,7.795 25.678,6.872 28.166,6.872C30.686,6.872 32.637,7.725 34.018,9.43C34.151,9.605 34.218,9.75 34.218,9.867C34.218,10.008 33.997,10.426 33.556,11.121C33.116,11.816 32.849,12.163 32.758,12.163C32.65,12.163 32.396,11.959 31.997,11.551C31.506,11.052 31.044,10.678 30.612,10.428C29.896,10.021 29.106,9.817 28.241,9.817C26.594,9.817 25.312,10.445 24.397,11.701C23.582,12.824 23.174,14.238 23.174,15.944C23.174,17.649 23.578,19.076 24.385,20.224C25.3,21.513 26.577,22.158 28.216,22.158C29.031,22.158 29.817,21.954 30.574,21.547C31.073,21.28 31.581,20.902 32.096,20.411C32.529,20.003 32.766,19.8 32.808,19.8C32.858,19.8 33.132,20.13 33.631,20.792C34.13,21.453 34.38,21.817 34.38,21.884Z" />
</svg>`;
let su = class extends Re {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.captionsSelectorPlugin";
  }
  getAriaLabel() {
    return "Select captions";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "captionsIcon") || nu, this._captionsCanvas = this.player.captionsCanvas, this._selected = null, this._captionsCanvas.captions.length == 0 && this.disable(), ie(this.player, B.CAPTIONS_CHANGED, () => {
      this._captionsCanvas.captions.length > 0 && this.enable();
    }), ie(this.player, B.CAPTIONS_ENABLED, (e) => {
      this._selected = e.language;
    }), ie(this.player, B.CAPTIONS_DISABLED, () => {
      this._selected = null;
    });
  }
  async getMenu() {
    const e = [
      {
        id: -1,
        title: "Disabled",
        index: -1,
        selected: this._selected === null
      }
    ];
    return this._captionsCanvas.captions.forEach((t, n) => {
      e.push({
        id: t.language,
        title: t.label,
        index: n,
        selected: t.language === this._selected
      });
    }), e;
  }
  get buttonType() {
    return "radio";
  }
  itemSelected(e) {
    e.index === -1 ? this._captionsCanvas.disableCaptions() : this._captionsCanvas.enableCaptions({ index: e.index });
  }
};
const au = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"></path>
  <path d="M12 13l0 9"></path>
  <path d="M9 19l3 3l3 -3"></path>
</svg>`;
let ru = class extends Re {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.downloadsPlugin";
  }
  getAriaLabel() {
    return Hl("Available downloads");
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async isEnabled() {
    if (!await super.isEnabled())
      return !1;
    this._downloads = {};
    const { streams: e } = this.player.videoManifest;
    return e.forEach((t) => {
      let n = [];
      const { mp4: s } = t.sources;
      s && s.forEach((a) => {
        var r, o;
        n.push({
          id: `${t.content}_${((r = a.res) == null ? void 0 : r.w) || 0}_${((o = a.res) == null ? void 0 : o.h) || 0}`,
          src: a.src,
          res: a.res || { w: 0, h: 0 },
          mimetype: a.mimetype
        });
      }), n.length > 0 && (this._downloads[t.content] = n);
    }), this._downloads = Object.entries(this._downloads).flatMap(([t, n]) => n.map((s) => ({
      content: t,
      id: s.id,
      src: s.src,
      res: s.res,
      mimetype: s.mimetype
    }))), this._downloads.length > 0;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "downloadIcon") || au;
  }
  async getMenu() {
    return this._downloads.map((e) => ({
      id: e.id,
      title: `${e.content} - ${e.res.w}x${e.res.h}`,
      icon: null,
      selected: !1
    }));
  }
  itemSelected(e) {
    const t = this._downloads.find((n) => n.id === e.id);
    t && window.open(t.src, "_blank");
  }
};
const ou = `<svg width="100%" height="100%" viewBox="0 0 256 256" version="1.1" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1.12928,7.34742,-36.0026)">
        <path d="M64.881,65.571L65.653,58.011C65.716,51.424 73.835,46.089 83.826,46.089C93.857,46.089 102,51.466 102,58.089L101.5,68.542C96.288,64.856 88.807,62.544 80.5,62.544C74.735,62.544 69.368,63.658 64.881,65.571Z"/>
    </g>
    <g transform="matrix(-1,0,0,1.12928,248.653,-36.0026)">
        <path d="M64.881,65.571L65.653,58.011C65.716,51.424 73.835,46.089 83.826,46.089C93.857,46.089 102,51.466 102,58.089L101.5,68.542C96.288,64.856 88.807,62.544 80.5,62.544C74.735,62.544 69.368,63.658 64.881,65.571Z"/>
    </g>
    <g transform="matrix(1,0,0,1.12928,7.34742,-36.0026)">
        <path d="M129.562,96.719L129.624,95.089C129.624,81.291 143.962,70.089 161.624,70.089C179.216,70.089 193.512,81.204 193.623,94.927L193.624,95.089L196.729,121.276C206.965,127.091 212.239,133.908 214.675,146.41C217.073,158.713 223.305,189.137 223.305,192C223.305,209.661 202.813,224 178.805,224C154.797,224 136.305,209.661 134.305,192C133.646,186.176 133.051,180.984 132.515,176.358C129.05,177.4 124.991,178 120.653,178C116.315,178 112.255,177.4 108.79,176.358C108.255,180.984 107.66,186.176 107,192C105,209.661 86.508,224 62.5,224C38.492,224 18,209.661 18,192C18,189.137 24.233,158.713 26.63,146.41C29.066,133.908 34.34,127.091 44.576,121.276L47.682,95.089L47.682,94.927C47.794,81.204 62.089,70.089 79.682,70.089C97.343,70.089 111.682,81.291 111.682,95.089L111.787,97.893C114.663,96.444 118.24,95.585 122.114,95.585C124.782,95.585 127.309,95.992 129.562,96.719ZM63.5,164C82.541,164 98,175.202 98,189C98,202.798 82.541,214 63.5,214C44.459,214 29,202.798 29,189C29,175.202 44.459,164 63.5,164ZM177.805,164C158.764,164 143.305,175.202 143.305,189C143.305,202.798 158.764,214 177.805,214C196.846,214 212.305,202.798 212.305,189C212.305,175.202 196.846,164 177.805,164ZM121,158C127.623,158 133,160.689 133,164C133,167.311 127.623,170 121,170C114.377,170 109,167.311 109,164C109,160.689 114.377,158 121,158Z"/>
    </g>
</svg>`;
let lu = class extends Bs {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.findCaptionsPlugin";
  }
  async getContent() {
    const e = this.player.translate("Search"), t = z('<div class="captions-search-container"></div>');
    this._resultsContainer = z('<div class="search-results"></div>', t);
    const n = z(
      `<div class="search-input-container">
                <input type="search" placeholder="${e}"/>
            </div>`,
      t
    ).querySelector("input");
    n.addEventListener("click", (l) => {
      l.stopPropagation();
    });
    const s = navigator.language.substring(0, 2), a = (l) => this.player.captionsCanvas.currentCaptions ? l === this.player.captionsCanvas.currentCaptions.language : l === s, r = () => {
      let l = null;
      this.captions.some((u) => {
        a(u.language) && (l = u);
      }), l || (l = this.captions[0]), this._cueElements = [], l && l.cues.forEach((u) => {
        const h = z(`<p class="result-item">${u.startString}: ${u.captions[0]}</p>`, this._resultsContainer);
        h._cue = u, h.addEventListener("click", async (p) => {
          const d = p.target._cue.start;
          await this.player.videoContainer.setCurrentTime(d), p.stopPropagation();
        }), this._cueElements.push(h);
      });
    };
    r();
    let o = null;
    return n.addEventListener("keyup", (l) => {
      o && clearTimeout(o), this._resultsContainer.innerHTML = "";
      const u = this.player.getLanguage();
      o = setTimeout(() => {
        const h = {};
        this.captions.forEach((p) => {
          p.cues.forEach((d) => {
            d.captions.find((_) => new RegExp(n.value, "i").test(_)) && (h[d.startString] = h[d.startString] || { cue: d, text: {} }, h[d.startString].text[p.language] = d.captions);
          });
        }), this._cueElements = [];
        for (const p in h) {
          const d = h[p], _ = d.text[u] || d.text[Object.keys(d.text)[0]], m = z(`<p class="result-item">${d.cue.startString}: ${_[0]}</p>`, this._resultsContainer);
          m._cue = d.cue, m.addEventListener("click", async (C) => {
            const b = C.target._cue.start;
            await this.player.videoContainer.setCurrentTime(b), C.stopPropagation();
          }), this._cueElements.push(m);
        }
        Object.keys(h).length === 0 && n.value !== "" ? z(`<p>${this.player.translate("No results found")}</p>`, this._resultsContainer) : n.value === "" && r(), o = null;
      }, 1e3), l.stopPropagation();
    }), this._timeupdateEvent || (this._timeupdateEvent = async (l) => {
      var u;
      n.value === "" && (u = this._cueElements) != null && u.length && this._cueElements.forEach((h) => {
        if (h._cue.start <= l.currentTime && h._cue.end >= l.currentTime) {
          h.classList.add("current");
          const p = h.offsetTop - this._resultsContainer.scrollTop;
          (p < 0 || p > this._resultsContainer.clientHeight) && this._resultsContainer.scrollTo({ top: h.offsetTop - 20 });
        } else
          h.classList.remove("current");
      });
    }, this.player.bindEvent(B.TIMEUPDATE, this._timeupdateEvent, !0)), setTimeout(() => this.refreshContent = !0, 10), t;
  }
  get popUpType() {
    return "no-modal";
  }
  get captions() {
    return this.player.captionsCanvas.captions;
  }
  get customPopUpClass() {
    return "find-captions";
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "findCaptionsIcon") || ou, this._captionsCanvas = this.player.captionsCanvas, this.captions.length === 0 && this.disable(), ie(this.player, B.CAPTIONS_CHANGED, () => {
      this.captions.length > 0 && this.enable();
    });
  }
};
const uu = `<svg width="100%" height="100%" viewBox="0 0 27 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="repeat" transform="matrix(1,0,0,1,-132.5,-2)">
        <g transform="matrix(-1,0,-0,1,158.831,2)">
            <path d="M7.364,6.48C9.179,5.515 11.255,4.967 13.461,4.967C20.569,4.967 26.331,10.651 26.331,17.664C26.331,24.676 20.569,30.36 13.461,30.36C8.436,30.36 4.083,27.518 1.964,23.375L1.973,23.34L3.716,22.554C5.531,26.101 9.257,28.534 13.56,28.534C19.645,28.534 24.579,23.667 24.579,17.664C24.579,11.66 19.645,6.793 13.56,6.793C11.624,6.793 9.804,7.286 8.223,8.151L12.5,12L0,12L6.5,0L7.364,6.48Z" style="stroke:none;stroke-width:0.07px;"/>
        </g>
        <g transform="matrix(1.10748,0,0,1.05518,-5.70486,-1.08359)">
            <g>
                <path d="M132.929,20.884L133.826,20.764C133.929,21.273 134.104,21.639 134.352,21.864C134.6,22.088 134.901,22.2 135.257,22.2C135.679,22.2 136.035,22.054 136.326,21.762C136.617,21.469 136.762,21.107 136.762,20.675C136.762,20.263 136.628,19.923 136.359,19.655C136.089,19.388 135.747,19.254 135.332,19.254C135.162,19.254 134.951,19.287 134.699,19.354L134.798,18.566C134.858,18.573 134.906,18.576 134.943,18.576C135.325,18.576 135.669,18.476 135.975,18.277C136.281,18.077 136.433,17.77 136.433,17.355C136.433,17.025 136.322,16.753 136.099,16.537C135.877,16.321 135.589,16.213 135.237,16.213C134.888,16.213 134.597,16.323 134.364,16.542C134.132,16.761 133.982,17.09 133.916,17.529L133.018,17.369C133.128,16.768 133.377,16.302 133.766,15.971C134.155,15.64 134.639,15.475 135.217,15.475C135.616,15.475 135.983,15.561 136.319,15.732C136.654,15.903 136.911,16.136 137.089,16.432C137.267,16.728 137.356,17.042 137.356,17.374C137.356,17.69 137.271,17.978 137.101,18.237C136.932,18.496 136.681,18.702 136.349,18.855C136.781,18.955 137.116,19.162 137.356,19.476C137.595,19.79 137.715,20.183 137.715,20.655C137.715,21.293 137.482,21.834 137.017,22.277C136.551,22.721 135.963,22.943 135.252,22.943C134.61,22.943 134.078,22.752 133.654,22.37C133.23,21.988 132.989,21.492 132.929,20.884Z" style="fill-rule:nonzero;stroke:none;"/>
                <path d="M138.602,19.209C138.602,18.345 138.691,17.649 138.869,17.123C139.047,16.596 139.311,16.19 139.661,15.904C140.012,15.618 140.453,15.475 140.985,15.475C141.377,15.475 141.721,15.554 142.017,15.712C142.313,15.87 142.557,16.097 142.75,16.395C142.943,16.692 143.094,17.055 143.203,17.482C143.313,17.909 143.368,18.485 143.368,19.209C143.368,20.067 143.28,20.759 143.104,21.285C142.928,21.812 142.664,22.219 142.314,22.507C141.963,22.794 141.52,22.938 140.985,22.938C140.28,22.938 139.727,22.685 139.325,22.18C138.843,21.572 138.602,20.582 138.602,19.209ZM139.524,19.209C139.524,20.409 139.665,21.207 139.946,21.604C140.226,22.002 140.573,22.2 140.985,22.2C141.397,22.2 141.744,22.001 142.024,21.602C142.305,21.203 142.446,20.406 142.446,19.209C142.446,18.006 142.305,17.207 142.024,16.811C141.744,16.416 141.394,16.218 140.975,16.218C140.563,16.218 140.234,16.392 139.988,16.741C139.679,17.187 139.524,18.009 139.524,19.209Z" style="fill-rule:nonzero;stroke:none;"/>
                <path d="M144.171,21.233L145.058,21.093C145.108,21.449 145.247,21.722 145.474,21.911C145.702,22.101 146.02,22.195 146.429,22.195C146.841,22.195 147.147,22.111 147.346,21.943C147.546,21.776 147.645,21.579 147.645,21.353C147.645,21.15 147.557,20.99 147.381,20.874C147.258,20.794 146.952,20.693 146.464,20.57C145.806,20.404 145.35,20.26 145.095,20.139C144.841,20.017 144.648,19.85 144.517,19.635C144.386,19.421 144.32,19.184 144.32,18.925C144.32,18.689 144.374,18.47 144.482,18.269C144.59,18.068 144.737,17.901 144.923,17.768C145.063,17.665 145.253,17.578 145.494,17.507C145.735,17.435 145.993,17.399 146.269,17.399C146.685,17.399 147.05,17.459 147.364,17.579C147.678,17.699 147.91,17.861 148.059,18.065C148.209,18.269 148.312,18.543 148.368,18.885L147.491,19.005C147.451,18.732 147.335,18.519 147.144,18.367C146.953,18.214 146.683,18.137 146.334,18.137C145.922,18.137 145.628,18.205 145.452,18.342C145.276,18.478 145.188,18.637 145.188,18.82C145.188,18.937 145.224,19.041 145.297,19.134C145.37,19.231 145.485,19.31 145.641,19.374C145.731,19.407 145.995,19.483 146.434,19.603C147.069,19.772 147.512,19.911 147.762,20.019C148.013,20.127 148.21,20.284 148.353,20.49C148.496,20.696 148.568,20.952 148.568,21.258C148.568,21.557 148.48,21.839 148.306,22.103C148.131,22.367 147.88,22.572 147.551,22.716C147.222,22.861 146.849,22.933 146.434,22.933C145.746,22.933 145.222,22.79 144.861,22.504C144.5,22.218 144.27,21.795 144.171,21.233Z" style="fill-rule:nonzero;stroke:none;"/>
            </g>
        </g>
    </g>
</svg>`;
let cu = class extends nt {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.forwardButtonPlugin";
  }
  getAriaLabel() {
    return this.player.translate("Forward $1 seconds", [this.config.time]);
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async isEnabled() {
    const e = await super.isEnabled();
    return this.time = this.config.time || 30, e;
  }
  async load() {
    const e = this.config.suffix !== void 0 ? this.config.suffix : !0;
    this.suffix = e ? "s" : "", this.icon = this.player.getCustomPluginIcon(this.name, "forwardIcon") || uu, setTimeout(() => {
      var t;
      Array.from(((t = this.iconElement) == null ? void 0 : t.getElementsByClassName("time-text")) || []).forEach((n) => {
        n.innerHTML = this.time + this.suffix;
      });
    }, 100);
  }
  async action() {
    const e = await this.player.videoContainer.currentTime();
    this.player.videoContainer.setCurrentTime(e + this.time);
  }
};
const hu = `
<svg width="100%" height="100%" viewBox="0 0 34 28" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="FullScreen" transform="matrix(1,0,0,1,-363,-6)">
        <g>
            <g>
                <g transform="matrix(1,0,0,1,-2,2.84217e-14)">
                    <path d="M368.492,8.078L371.207,10.793L369.793,12.207L367.078,9.492L365,11.57L365.014,7.428L365,7.414L365.014,7.4L365.019,6.019L366.4,6.014L366.414,6L366.428,6.014L370.57,6L368.492,8.078Z"/>
                </g>
                <g transform="matrix(1,0,0,-1,-2,40)">
                    <path d="M368.492,8.078L371.207,10.793L369.793,12.207L367.078,9.492L365,11.57L365.014,7.428L365,7.414L365.014,7.4L365.019,6.019L366.4,6.014L366.414,6L366.428,6.014L370.57,6L368.492,8.078Z"/>
                </g>
                <g transform="matrix(-1,0,0,1,762,2.84217e-14)">
                    <path d="M368.492,8.078L371.207,10.793L369.793,12.207L367.078,9.492L365,11.57L365.014,7.428L365,7.414L365.014,7.4L365.019,6.019L366.4,6.014L366.414,6L366.428,6.014L370.57,6L368.492,8.078Z"/>
                </g>
                <g transform="matrix(-1,0,0,-1,762,40)">
                    <path d="M368.492,8.078L371.207,10.793L369.793,12.207L367.078,9.492L365,11.57L365.014,7.428L365,7.414L365.014,7.4L365.019,6.019L366.4,6.014L366.414,6L366.428,6.014L370.57,6L368.492,8.078Z"/>
                </g>
                <g transform="matrix(1,0,0,0.886475,0,2.17871)">
                    <rect x="369" y="12.207" width="22" height="15.793"/>
                </g>
                <g transform="matrix(1,0,0,1,-0.0588586,-0.780796)">
                </g>
            </g>
        </g>
    </g>
</svg>`, du = `
<svg width="100%" height="100%" viewBox="0 0 37 29" version="1.1" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="Exit-FullScreen" serif:id="Exit FullScreen" transform="matrix(1,0,0,1,-361.793,-5.79289)">
        <g>
            <g transform="matrix(1,0,0,-1,27,18)">
                <path d="M368.492,8.078L371.207,10.793L369.793,12.207L367.078,9.492L365,11.57L365.014,7.428L365,7.414L365.014,7.4L365.019,6.019L366.4,6.014L366.414,6L366.428,6.014L370.57,6L368.492,8.078Z"/>
            </g>
            <g transform="matrix(-1,0,0,1,733,22)">
                <path d="M368.492,8.078L371.207,10.793L369.793,12.207L367.078,9.492L365,11.57L365.014,7.428L365,7.414L365.014,7.4L365.019,6.019L366.4,6.014L366.414,6L366.428,6.014L370.57,6L368.492,8.078Z"/>
            </g>
            <g transform="matrix(-1,0,0,-1,733,18)">
                <path d="M368.492,8.078L371.207,10.793L369.793,12.207L367.078,9.492L365,11.57L365.014,7.428L365,7.414L365.014,7.4L365.019,6.019L366.4,6.014L366.414,6L366.428,6.014L370.57,6L368.492,8.078Z"/>
            </g>
            <g transform="matrix(1,0,0,1,27,22)">
                <path d="M368.492,8.078L371.207,10.793L369.793,12.207L367.078,9.492L365,11.57L365.014,7.428L365,7.414L365.014,7.4L365.019,6.019L366.4,6.014L366.414,6L366.428,6.014L370.57,6L368.492,8.078Z"/>
            </g>
            <g transform="matrix(1,0,0,0.886475,0,2.17871)">
                <rect x="369" y="12.207" width="22" height="15.793"/>
            </g>
        </g>
    </g>
</svg>`;
let pu = class extends nt {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.fullscreenButton";
  }
  getAriaLabel() {
    return "Toggle fullscreen";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  get isFallbackFSAvailable() {
    const { width: e, height: t } = globalThis.visualViewport, { w: n, h: s } = this.player.containerSize;
    return e !== n || t !== s;
  }
  async isEnabled() {
    return await super.isEnabled() && this.player.isFullScreenSupported() || this.isFallbackFSAvailable;
  }
  async load() {
    const e = this.player.getCustomPluginIcon(this.name, "fullscreenIcon") || hu, t = this.player.getCustomPluginIcon(this.name, "windowedIcon") || du;
    this.icon = e, ie(this.player, B.FULLSCREEN_CHANGED, (n) => {
      n.status ? this.icon = t : this.icon = e;
    });
  }
  async toggleFS() {
    this.player.isFullscreen ? await this.player.exitFullscreen() : await this.player.enterFullscreen();
  }
  toggleFallbackFS() {
    this.player.containerElement.classList.contains("paella-fallback-fullscreen") ? this.player.containerElement.classList.remove("paella-fallback-fullscreen") : this.player.containerElement.classList.add("paella-fallback-fullscreen"), setTimeout(() => {
      this.player.resize();
    }, 100);
  }
  async action() {
    this.player.isFullScreenSupported() ? await this.toggleFS() : this.toggleFallbackFS();
  }
};
const gu = `
<svg width="100%" height="100%" viewBox="0 0 39 33" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <path d="M38.02,33L20.02,33L20.02,16L38.02,16L38.02,33ZM18.1,31.479L17.261,28.744C17.261,28.744 15.373,29.986 14.365,29.504C13.356,29.022 13.141,28.161 13.141,28.161L15.089,26L10.02,26L10.02,31.317L12.04,29.194C12.04,29.194 12.571,31.145 13.809,31.959C15.732,33.224 18.1,31.479 18.1,31.479ZM35.846,31C35.844,30.985 35.419,26.773 34.821,25.622C34.222,24.47 31.242,24.429 31.242,24.429C31.242,24.429 30.557,27.413 30.373,27.982C30.189,28.55 30.15,28.681 30.15,28.681C30.15,28.681 29.686,25.798 29.604,25.505C29.543,25.285 29.143,25.271 29.058,25.271C28.973,25.271 28.573,25.297 28.512,25.516C28.431,25.809 28.097,28.617 28.097,28.617C28.097,28.617 27.995,28.55 27.811,27.982C27.627,27.413 26.874,24.429 26.874,24.429C26.874,24.429 23.894,24.47 23.295,25.622C22.696,26.775 22.27,31 22.27,31L35.846,31ZM30.15,24.429C30.209,24.682 29.406,25.228 29.406,25.228L28.763,25.212C28.763,25.212 27.907,24.682 27.966,24.429C28.02,24.196 28.753,24.222 29.058,24.219C29.365,24.222 30.096,24.196 30.15,24.429ZM25.02,15L22.02,15L22.02,3L23.02,3L23.02,2L2.02,2L2.02,3L3.02,3L3.02,17L11.79,17L8.396,21.381C8.078,21.995 8.205,22.353 8.367,22.49C8.531,22.629 8.944,22.69 9.341,22.282L12.926,18.594L16.429,22.282C16.589,22.542 16.931,22.561 17.322,22.405C17.601,22.293 17.521,21.746 17.374,21.381L13.875,17L19.02,17L19.02,24L0,24L0,0L25.02,0L25.02,15ZM29.058,17.067C30.719,17.067 32.068,18.527 32.068,20.326C32.068,22.125 30.719,23.586 29.058,23.586C27.397,23.586 26.048,22.125 26.048,20.326C26.048,18.527 27.397,17.067 29.058,17.067ZM21.02,15L21.02,3L4.02,3L4.02,16L19.02,16L19.02,15L21.02,15ZM35.1,14L30.032,14L31.98,11.839C31.98,11.839 31.765,10.978 30.756,10.496C29.747,10.014 27.86,11.256 27.86,11.256L27.02,8.521C27.02,8.521 29.389,6.776 31.312,8.041C32.55,8.855 33.081,10.806 33.081,10.806L35.1,8.683L35.1,14ZM10.744,7.462L6.356,13.008L5.922,12.61L10.727,6.537L13.847,9.959L18.147,5.333L18.55,5.767L13.846,10.826L10.744,7.462Z"/>
</svg>`;
let mu = class extends Re {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.layoutSelector";
  }
  getAriaLabel() {
    return "Video layout";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async isEnabled() {
    return await super.isEnabled() ? this.player.videoContainer.validContentSettings.length > 1 : !1;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "layoutIcon") || gu, this._showIcons = this.config.showIcons ?? !0;
  }
  async getMenu() {
    const e = this.player.videoContainer.validContentSettings;
    return Promise.all(await e.map(async (t) => {
      const n = mn.joinPath([this.player.configResourcesUrl, t.icon]), s = this._showIcons && await mn.loadSvgIcon(n) || null;
      return {
        id: t.id,
        title: t.title,
        icon: s,
        selected: this.player.videoContainer.layoutId === t.id
      };
    }));
  }
  get showTitles() {
    return !1;
  }
  get buttonType() {
    return "radio";
  }
  itemSelected(e) {
    this.player.videoContainer.setLayout(e.id);
  }
};
const yu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M5.636 19.364a9 9 0 1 1 12.728 0"></path>
  <path d="M16 9l-4 4"></path>
</svg>`;
let fu = class extends Re {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.playbackRateButton";
  }
  getAriaLabel() {
    return "Playback rate";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  get dynamicWidth() {
    return this.config.showIcon === !1;
  }
  async load() {
    this.config.showIcon === !1 || (this.icon = this.player.getCustomPluginIcon(this.name, "screenIcon") || Ni, this.menuIcon = this.player.getCustomPluginIcon(this.name, "playbackRateIcon") || yu);
    const e = await this.player.videoContainer.playbackRate();
    this.isMenuButton ? (this.title = this.description, this._stateText = `${e}x`) : this.title = `${e}x`, this._rates = this.config.rates || [0.5, 0.75, 1, 1.25, 1.5, 2], this.player.bindEvent(B.PLAYBACK_RATE_CHANGED, (t) => {
      this.title = t.newPlaybackRate + "x";
    });
  }
  async getMenu() {
    const e = await this.player.videoContainer.playbackRate(), t = (n) => ({
      id: n,
      title: `${n}x`,
      selected: n == e
    });
    return this._rates.map((n) => t(n));
  }
  get titleSize() {
    return this.config.showIcon === !1 ? "large" : "small";
  }
  async itemSelected(e) {
    await this.player.videoContainer.setPlaybackRate(e.id), this.isMenuButton ? (this.title = this.description, this._stateText = e.title) : this.title = e.title;
  }
  get buttonType() {
    return "radio";
  }
  get stateText() {
    return this._stateText;
  }
};
const vu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
    <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M4 6l8 0"></path>
    <path d="M16 6l4 0"></path>
    <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M4 12l2 0"></path>
    <path d="M10 12l10 0"></path>
    <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M4 18l11 0"></path>
    <path d="M19 18l1 0"></path>
</svg> `;
let _u = class extends Re {
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.qualitySelector";
  }
  getAriaLabel() {
    return "Video quality";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  get dynamicWidth() {
    return this.config.showIcon === !1;
  }
  get titleSize() {
    return this.config.showIcon === !1 ? "large" : "small";
  }
  async isEnabled() {
    return await super.isEnabled() ? (this._qualities = await this.player.videoContainer.streamProvider.getQualities(), this._qualities && this._qualities.length > 1) : !1;
  }
  async load() {
    this.config.showIcon === !1 || (this.icon = this.player.getCustomPluginIcon("es.upv.paella.qualitySelector", "screenIcon") || Ni, this.menuIcon = this.player.getCustomPluginIcon("es.upv.paella.qualitySelector", "settingsIcon") || vu), await this.updateQualityLabel();
  }
  async getMenu() {
    await this.updateQualityLabel();
    const e = await this.player.videoContainer.streamProvider.getCurrentQuality();
    return this._qualities.map((t) => {
      const n = t.index === e.index;
      return {
        id: t.index,
        title: t.label,
        width: t.res.w,
        height: t.res.h,
        data: t,
        selected: n
      };
    });
  }
  async updateQualityLabel() {
    const e = async () => {
      const t = await this.player.videoContainer.streamProvider.getCurrentQuality();
      t ? this.isMenuButton ? (this.title = this.description, this._stateText = t.shortLabel) : this.title = t.shortLabel : setTimeout(() => e(), 500);
    };
    e();
  }
  async itemSelected(e) {
    await this.player.videoContainer.streamProvider.setQuality(e.data), this.updateQualityLabel();
  }
  get buttonType() {
    return "radio";
  }
  get stateText() {
    return this._stateText;
  }
};
const Cu = `
    <svg width="100%" height="100%" viewBox="0 0 34 30" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <g transform="matrix(1,0,0,1,-164.25,-6)">
            <path d="M184.233,14.077C188.981,14.489 191.571,24.435 184.954,27.208C183.497,27.819 181.723,25.826 183.988,24.902C187.22,23.511 187.697,17.939 183.734,16.5C183.734,16.5 181.944,14.012 184.233,14.077Z" style="fill-rule:nonzero;"/>
        </g>
        <g transform="matrix(1.79727,0,0,1.79727,-310.137,-22.5434)">
            <path d="M184.236,14.634C184.819,14.72 184.834,14.837 185.078,14.956C188.213,16.489 189.629,20.834 187.848,23.947C187.088,25.275 185.842,26.312 184.395,26.83C184.395,26.83 184.071,26.925 183.815,26.778C183.217,26.436 183.496,25.849 184.723,25.159C187.985,23.325 187.943,17.417 183.927,15.98C183.927,15.98 182.939,14.544 184.236,14.634Z" style="fill-rule:nonzero;"/>
        </g>
        <g transform="matrix(2.44245,0,0,2.44245,-427.303,-35.9308)">
            <path d="M184.199,14.815C184.625,14.866 186.828,16.03 187.775,17.801C189.443,20.92 187.935,25.329 184.388,26.637C184.388,26.637 183.459,26.646 183.677,26.009C183.808,25.624 184.344,25.578 184.77,25.344C187.184,24.016 188.202,20.604 186.8,18.153C186.181,17.07 185.166,16.228 183.988,15.807C183.988,15.807 183.242,14.787 184.199,14.815Z" style="fill-rule:nonzero;"/>
        </g>
        <g transform="matrix(1,0,0,1,-125,-5)">
            <path d="M131.499,14L139.68,5C140.961,5 142,6.039 142,7.32L142,31.68C142,32.961 140.961,34 139.68,34L131.499,25L127.375,25C126.063,25 125,23.937 125,22.625L125,16.375C125,15.063 126.063,14 127.375,14L131.499,14Z"/>
        </g>
    </svg>`, wu = `
    <svg width="100%" height="100%" viewBox="0 0 29 29" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="volume-mid" serif:id="volume mid" transform="matrix(1,0,0,1,-165,-5)">
        <g>
            <g transform="matrix(1,0,0,1,0.75,-1)">
                <path d="M184.233,14.077C188.981,14.489 191.571,24.435 184.954,27.208C183.497,27.819 181.723,25.826 183.988,24.902C187.22,23.511 187.697,17.939 183.734,16.5C183.734,16.5 181.944,14.012 184.233,14.077Z" style="fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(1.79727,0,0,1.79727,-145.137,-17.5434)">
                <path d="M184.236,14.634C184.819,14.72 184.834,14.837 185.078,14.956C188.213,16.489 189.629,20.834 187.848,23.947C187.088,25.275 185.842,26.312 184.395,26.83C184.395,26.83 184.071,26.925 183.815,26.778C183.217,26.436 183.496,25.849 184.723,25.159C187.985,23.325 187.943,17.417 183.927,15.98C183.927,15.98 182.939,14.544 184.236,14.634Z" style="fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(1,0,0,1,40,0)">
                <path d="M131.499,14L139.68,5C140.961,5 142,6.039 142,7.32L142,31.68C142,32.961 140.961,34 139.68,34L131.499,25L127.375,25C126.063,25 125,23.937 125,22.625L125,16.375C125,15.063 126.063,14 127.375,14L131.499,14Z"/>
            </g>
        </g>
    </g>
    </svg>`, bu = `<svg width="100%" height="100%" viewBox="0 0 25 29" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="volume-low" serif:id="volume low" transform="matrix(1,0,0,1,-165,-5)">
        <g>
            <g transform="matrix(1,0,0,1,0.75,-1)">
                <path d="M184.233,14.077C188.981,14.489 191.571,24.435 184.954,27.208C183.497,27.819 181.723,25.826 183.988,24.902C187.22,23.511 187.697,17.939 183.734,16.5C183.734,16.5 181.944,14.012 184.233,14.077Z" style="fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(1,0,0,1,40,0)">
                <path d="M131.499,14L139.68,5C140.961,5 142,6.039 142,7.32L142,31.68C142,32.961 140.961,34 139.68,34L131.499,25L127.375,25C126.063,25 125,23.937 125,22.625L125,16.375C125,15.063 126.063,14 127.375,14L131.499,14Z"/>
            </g>
        </g>
    </g>
    </svg>`, Lu = `<svg width="100%" height="100%" viewBox="0 0 31 31" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="volume-mute" serif:id="volume mute" transform="matrix(1,0,0,1,-123,-4.71142)">
        <path d="M142,28.522L142,31.68C142,32.961 140.961,34 139.68,34L131.499,25L127.375,25C126.063,25 125,23.937 125,22.625L125,16.375C125,15.063 126.063,14 127.375,14L127.478,14L142,28.522ZM151.228,34.983L123,6.756L125.044,4.711L132.848,12.516L139.68,5C140.961,5 142,6.039 142,7.32L142,21.667L153.272,32.939L151.228,34.983Z"/>
    </g>
    </svg>`;
var me;
let Eu = class extends nt {
  constructor() {
    super(...arguments), pl(this, me, null);
  }
  getPluginModuleInstance() {
    return W.Get();
  }
  get name() {
    return super.name || "es.upv.paella.volumeButtonPlugin";
  }
  async isEnabled() {
    return await super.isEnabled() && await Nl();
  }
  getAriaLabel() {
    return "Volume";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  get className() {
    return "volume-button";
  }
  async updateIcon(e) {
    const t = this.player.getCustomPluginIcon(this.name, "volumeHighIcon") || Cu, n = this.player.getCustomPluginIcon(this.name, "volumeMidIcon") || wu, s = this.player.getCustomPluginIcon(this.name, "volumeLowIcon") || bu, a = this.player.getCustomPluginIcon(this.name, "volumeMuteIcon") || Lu;
    switch (!0) {
      case e === 0:
        this.icon = a;
        break;
      case (e > 0 && e <= 0.3):
        this.icon = s;
        break;
      case (e > 0.3 && e <= 0.6):
        this.icon = n;
        break;
      case e > 0.6:
        this.icon = t;
        break;
      default:
        this.icon = t;
    }
  }
  get sliderContainer() {
    return this.config.side === "left" ? this.rightArea : this.leftArea;
  }
  async load() {
    this.showContainerOnFocus = this.config.showVolumeOnFocus ?? !0, this.volumeAlwaysVisible = this.config.volumeAlwaysVisible ?? !1, this._prevVolume = await this.player.videoContainer.volume(), ie(this.player, B.VOLUME_CHANGED, ({ volume: n }) => {
      this.updateIcon(n);
    }), this.updateIcon(this._prevVolume);
    const e = await this.player.videoContainer.volume(), t = this.rightSideContainer;
    t.innerHTML = `
            <input type="range" class="isu" min="0" max="100" value="${e * 100}" class="slider" />
        `, gl(this, me, t.getElementsByTagName("input")[0]), this.player.bindEvent(B.VOLUME_CHANGED, (n) => {
      ot(this, me).value = n.volume * 100;
    }), ot(this, me).addEventListener("change", async (n) => {
      this.player.videoContainer.setVolume(n.target.value / 100);
    }), ot(this, me).addEventListener("pointerup", async (n) => {
      var s;
      (s = document.activeElement) == null || s.blur();
    }), ot(this, me).addEventListener("keydown", async (n) => {
      if (n.key === "ArrowLeft" || n.key === "ArrowDown") {
        const s = await this.player.videoContainer.volume();
        this.player.videoContainer.setVolume(Math.max(0, s - 0.1)), n.preventDefault(), n.stopPropagation();
      } else if (n.key === "ArrowRight" || n.key === "ArrowUp") {
        const s = await this.player.videoContainer.volume();
        this.player.videoContainer.setVolume(Math.min(s + 0.1, 1)), n.preventDefault(), n.stopPropagation();
      }
    });
  }
  showSideContainer() {
    this.volumeAlwaysVisible;
  }
  hideSideContainer() {
    this.volumeAlwaysVisible;
  }
  async mouseOver(e) {
    e === this.container && this.showSideContainer();
  }
  async mouseOut(e) {
    e === this.container && this.hideSideContainer();
  }
  async focusIn() {
    this.showContainerOnFocus;
  }
  async focusOut() {
    this.showContainerOnFocus;
  }
  async action() {
    const e = await this.player.videoContainer.volume();
    console.log("VolumePlugin.action(): ", e);
    let t = 0;
    e === 0 && this._prevVolume === 0 ? t = 1 : e === 0 && this._prevVolume > 0 ? t = this._prevVolume : t = 0, await this.player.videoContainer.setVolume(t), this._prevVolume = e;
  }
};
me = /* @__PURE__ */ new WeakMap();
const Tu = [
  {
    plugin: eu,
    config: {
      enabled: !1
    }
  },
  {
    plugin: iu,
    config: {
      enabled: !1
    }
  },
  {
    plugin: su,
    config: {
      enabled: !1
    }
  },
  {
    plugin: ru,
    config: {
      enabled: !1
    }
  },
  {
    plugin: lu,
    config: {
      enabled: !1
    }
  },
  {
    plugin: cu,
    config: {
      enabled: !1
    }
  },
  {
    plugin: pu,
    config: {
      enabled: !1
    }
  },
  {
    plugin: mu,
    config: {
      enabled: !1
    }
  },
  {
    plugin: fu,
    config: {
      enabled: !1
    }
  },
  {
    plugin: _u,
    config: {
      enabled: !1
    }
  },
  {
    plugin: Eu,
    config: {
      enabled: !1
    }
  }
];
var Fs = (i) => {
  throw TypeError(i);
}, Ui = (i, e, t) => e.has(i) || Fs("Cannot " + t), $ = (i, e, t) => (Ui(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Se = (i, e, t) => e.has(i) ? Fs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Nt = (i, e, t, n) => (Ui(i, e, "write to private field"), e.set(i, t), t), vn = (i, e, t) => (Ui(i, e, "access private method"), t);
const Ke = Object.freeze({
  PLAY: "paella:play",
  PAUSE: "paella:pause",
  STOP: "paella:stop",
  ENDED: "paella:ended",
  SEEK: "paella:seek",
  FULLSCREEN_CHANGED: "paella:fullscreenchanged",
  ENTER_FULLSCREEN: "paella:enterfullscreen",
  EXIT_FULLSCREEN: "paella:exitfullscreen",
  VOLUME_CHANGED: "paella:volumeChanged",
  TIMEUPDATE: "paella:timeupdate",
  TRIMMING_CHANGED: "paella:trimmingChanged",
  CAPTIONS_CHANGED: "paella:captionsChanged",
  CAPTIONS_ENABLED: "paella:captionsEnabled",
  CAPTIONS_DISABLED: "paella:captionsDisabled",
  BUTTON_PRESS: "paella:buttonPress",
  SHOW_POPUP: "paella:showPopUp",
  HIDE_POPUP: "paella:hidePopUp",
  MANIFEST_LOADED: "paella:manifestLoaded",
  STREAM_LOADED: "paella:streamLoaded",
  PLAYER_LOADED: "paella:playerLoaded",
  PLAYER_UNLOADED: "paella:playerUnloaded",
  RESIZE: "paella:resize",
  RESIZE_END: "paella:resizeEnd",
  LAYOUT_CHANGED: "paella:layoutChanged",
  PLAYBACK_RATE_CHANGED: "paella:playbackRateChanged",
  VIDEO_QUALITY_CHANGED: "paella:videoQualityChanged",
  HIDE_UI: "paella:hideUI",
  SHOW_UI: "paella:showUI",
  COOKIE_CONSENT_CHANGED: "paella:cookieConsentChanged",
  LOG: "paella:log"
});
function ti(i, e, t, n = !0) {
  return i.__eventListeners__ = i.__eventListeners__ || {}, Array.isArray(e) || (e = [e]), e.forEach((s) => {
    i.__eventListeners__[s] = i.__eventListeners__[s] || [], i.__eventListeners__[s].push({
      callback: t,
      unregisterOnUnload: n
    });
  }), t;
}
function Hs(i, e, t = {}) {
  i.__eventListeners__ && i.__eventListeners__[e] && i.__eventListeners__[e].forEach((n) => n.callback(t));
}
function Pu(i) {
  return new Promise((e, t) => {
    fetch(i).then((n) => n.text()).then((n) => {
      e(n);
    }).catch((n) => t(n));
  });
}
function Iu(i) {
  const e = new URLSearchParams(window.location.search);
  return e.has(i) ? e.get(i) : null;
}
function Su(i) {
  const e = window.location.hash.replace("#", "?"), t = new URLSearchParams(e);
  return t.has(i) ? t.get(i) : null;
}
function zs(i, e) {
  const t = e || "/";
  return i = i.map((n, s) => (s && (n = n.replace(new RegExp("^" + t), "")), s !== i.length - 1 && (n = n.replace(new RegExp(t + "$"), "")), n)), i.join(t);
}
function Gs(i) {
  return new RegExp("^([a-z]+://|//)", "i").test(i) || /^\//.test(i);
}
function Ws(i) {
  try {
    return new URL(i).pathname.split("/").pop();
  } catch {
    return i.split("/").pop();
  }
}
function ku(i) {
  return i.split(".").reduce((e, t, n, s) => n < s.length - 1 ? e !== "" ? `${e}.${t}` : t : e, "");
}
function Au(i) {
  const e = (t) => {
    const n = t.split("/").reduce((s, a, r, o) => r < o.length - 1 ? s !== "" ? `${s}/${a}` : a : s, "");
    return (t[0] === "/" ? `/${n}` : n) + "/";
  };
  try {
    const t = new URL(i);
    return t.origin + e(t.pathname);
  } catch {
    return e(i);
  }
}
function xu(i) {
  return Ws(i).split(".").pop();
}
function Ri(i, e) {
  return Gs(e) ? e : zs([i.manifestUrl, e]);
}
function Du(i) {
  i.__hideTimerPaused__ = !0;
}
function Zs(i) {
  i.__hideTimerPaused__ = !1;
}
function $u(i, e = "hideUiTime") {
  var t;
  i.__hideTimer__ = null;
  const n = async () => i.__hideTimerPaused__ ? (i.log.debug("UI not hidden because the auto hide timer is paused"), !1) : s() ? (i.log.debug("UI not hidden because there is a focused element"), !1) : (await i.hideUserInterface(), !0);
  (t = i.config.ui) != null && t.hideOnMouseLeave && i.containerElement.addEventListener("mouseleave", () => {
    n();
  });
  const s = () => {
    const r = document.activeElement, o = document.querySelector(":focus-visible");
    return (i.playbackBar.element.contains(r) || i.videoContainer.element.contains(r)) && [
      "input",
      "textarea",
      "button"
    ].find((l) => r.tagName.toLowerCase(l)) !== -1 && o;
  }, a = async () => {
    i.__hideTimer__ && clearTimeout(i.__hideTimer__), await i.showUserInterface(), i.__hideTimer__ = setTimeout(async () => {
      i.__hideTimer__ = null, n() || a();
    }, i[e]);
  };
  i.containerElement.addEventListener("mousemove", async (r) => {
    a();
  }), ti(i, Ke.PLAY, async () => {
    a();
  }), ti(i, Ke.PAUSE, async () => {
    await i.showUserInterface();
  }), ti(i, Ke.ENDED, async () => {
    await i.showUserInterface();
  }), document.addEventListener("keydown", async () => {
    a();
  });
}
function Mu(i) {
  i.__hideTimer__ && (clearTimeout(i.__hideTimer__), delete i.__hideTimer__);
}
function Nu(i) {
  const e = Math.floor(i / 60 / 60), t = Math.floor(i / 60) - e * 60, n = Math.floor(i % 60);
  return (e > 0 ? e.toString().padStart(2, "0") + ":" : "") + t.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0");
}
function Uu(i) {
  const e = /^(?:(\d+):){0,1}(\d+):(\d+)(\.\d+)?$/.exec(i);
  if (e) {
    const t = e[1] !== void 0 ? Number(e[1]) : 0, n = Number(e[2]), s = Number(e[3]);
    return t * 3600 + n * 60 + s;
  }
  return null;
}
function Ru(i) {
  const e = /^(?:(\d+):){0,1}(\d+):(\d+)\.(\d+)?$/.exec(i);
  if (e) {
    const t = e[1] !== void 0 ? Number(e[1]) : 0, n = Number(e[2]), s = Number(e[3]), a = e[4] && Number(e[4]) || 0;
    return t * 36e5 + n * 6e4 + s * 1e3 + a;
  }
  return null;
}
function js(i, e, t = 365) {
  let n = /* @__PURE__ */ new Date();
  n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3);
  let s = `expires=${n.toUTCString()}`;
  document.cookie = `${i}=${e};${s};path=/;SameSite=None;` + (/Apple/.test(navigator.vendor) ? "" : "Secure;");
}
function Ou(i, e, t, n, s = 365) {
  i.cookieConsent.getConsentForType(e) && js(t, n, s);
}
function Oi(i) {
  let e = i + "=", t = decodeURIComponent(document.cookie).split(";");
  for (let n = 0; n < t.length; ++n) {
    let s = t[n];
    for (; s.charAt(0) == " "; )
      s = s.substring(1);
    if (s.indexOf(e) == 0)
      return s.substring(e.length, s.length);
  }
  return "";
}
function Bu(i) {
  const e = Oi(i), t = Number(e);
  return e !== "" && !isNaN(t) ? t : null;
}
function Vu(i) {
  try {
    return JSON.parse(Oi(i));
  } catch {
    return null;
  }
}
function Fu(i, e = !0) {
  return new Promise((t) => {
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("href", i), n.onload = () => t(n);
    const s = document.getElementsByTagName("head")[0];
    e && s.appendChild(n), t();
  });
}
function Hu(i) {
  document.getElementsByTagName("head")[0].removeChild(i);
}
function vi(i, e, t = !0) {
  for (const n in e) {
    const s = i[n];
    let a = e[n];
    t && Array.isArray(s) && Array.isArray(a) ? (s.forEach((r) => {
      a = a.filter((o) => typeof r == "object" && typeof o == "object" && r.id === o.id ? (vi(r, o, t), !1) : !0);
    }), a.forEach((r) => {
      s.push(r);
    })) : typeof s == "object" && a ? vi(s, a, t) : i[n] = e[n];
  }
}
function _i(i, { excludedTags: e = null } = {}) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = ["script"];
  return e && n.push(...e), n.flatMap((s) => Array.from(t.getElementsByTagName(s))).forEach((s) => {
    s.parentElement.removeChild(s);
  }), t.innerHTML;
}
let ut = null;
function zu(i) {
  if (!i) return !1;
  ut || (ut = document.createElement("video"));
  let e = ut.canPlayType(i);
  if (e === "maybe" || e === "probably")
    return !0;
  if (/video\/mp4/i.test(i))
    return e = ut.canPlayType("video/mp4"), e === "maybe" || e === "probably";
}
const Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearAutoHideTimer: Mu,
  getCookie: Oi,
  getFileExtension: xu,
  getHashParameter: Su,
  getJSONCookie: Vu,
  getNumericCookie: Bu,
  getUrlFileName: Ws,
  getUrlParameter: Iu,
  isAbsoluteUrl: Gs,
  joinPath: zs,
  loadStyle: Fu,
  loadSvgIcon: Pu,
  mergeObjects: vi,
  pauseAutoHideUiTimer: Du,
  removeExtension: ku,
  removeFileName: Au,
  resolveResourcePath: Ri,
  resumeAutoHideUiTimer: Zs,
  sanitizeHTML: _i,
  secondsToTime: Nu,
  setCookie: js,
  setCookieIfAllowed: Ou,
  setupAutoHideUiTimer: $u,
  supportsVideoType: zu,
  timeToMilliseconds: Ru,
  timeToSeconds: Uu,
  unloadStyle: Hu
}, Symbol.toStringTag, { value: "Module" }));
var wt;
let Bi = class {
  constructor(e) {
    Se(this, wt, null), Nt(this, wt, e);
  }
  get player() {
    return $(this, wt);
  }
};
wt = /* @__PURE__ */ new WeakMap();
function Wu({ tag: i = "div", attributes: e = {}, children: t = "", innerText: n = "", parent: s = null }) {
  const a = document.createElement(i);
  a.innerText = n;
  for (let r in e)
    a.setAttribute(r, e[r]);
  return a.innerHTML = t, s && s.appendChild(a), a;
}
function st(i, e = null) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = t.children[0];
  return e && e.appendChild(n), n;
}
var Y;
let Zu = class extends Bi {
  constructor(e, { tag: t = "div", attributes: n = [], children: s = "", parent: a = null }) {
    super(e), Se(this, Y, null), Nt(this, Y, Wu({ tag: t, attributes: n, children: s, parent: a })), Object.defineProperty(this, t, {
      get: () => $(this, Y)
    });
  }
  get element() {
    return $(this, Y);
  }
  get parent() {
    return $(this, Y).parentElement;
  }
  hide() {
    this.element.style.display = "none";
  }
  show(e = "block") {
    this.element.style.display = null;
  }
  get isVisible() {
    const e = window.getComputedStyle(this.element);
    return e.display !== "none" && e.display !== "";
  }
  setAttribute(e, t) {
    $(this, Y).setAttribute(e, t);
  }
  removeFromParent() {
    var e;
    (e = $(this, Y).parentElement) == null || e.removeChild($(this, Y));
  }
  setParent(e) {
    this.removeFromParent(), e.appendChild($(this, Y));
  }
};
Y = /* @__PURE__ */ new WeakMap();
class qs extends Bi {
  constructor(e, t) {
    super(e), this._name = t;
  }
  getPluginModuleInstance() {
    return null;
  }
  get config() {
    return this._config;
  }
  get type() {
    return "none";
  }
  get order() {
    var e;
    return ((e = this._config) == null ? void 0 : e.order) || 0;
  }
  get description() {
    var e;
    return ((e = this._config) == null ? void 0 : e.description) || "";
  }
  get name() {
    return this._name;
  }
  async isEnabled() {
    var e;
    return (e = this.config) == null ? void 0 : e.enabled;
  }
  async load() {
  }
  async unload() {
  }
}
let Vi = class extends qs {
  get type() {
    return "video";
  }
  get streamType() {
    return "mp4";
  }
  async isCompatible() {
    return !1;
  }
  async getVideoInstance() {
    return null;
  }
  getCompatibleFileExtensions() {
    return [];
  }
  getManifestData(e) {
  }
};
async function ju() {
  return await new Promise((i) => {
    const e = document.createElement("audio"), t = setTimeout(() => i(!1), 100);
    e.addEventListener("volumechange", (n) => {
      clearTimeout(t), i(!0);
    }), e.volume = 0.5;
  });
}
let qu = class extends Zu {
  constructor(e, t, n) {
    const s = {
      class: "video-player"
    };
    super(t, { tag: e, attributes: s, parent: n }), this._streamProvider = null, this._streamData = null, this._ready = !1;
  }
  async isVolumeApiAvailable() {
    return await ju();
  }
  get streamData() {
    return this._streamData;
  }
  get ready() {
    return this._ready;
  }
  async load(e, t) {
    return this._streamProvider = t, this._streamData = e, await this.loadStreamData(e);
  }
  get isMainAudioPlayer() {
    return this._streamProvider.mainAudioPlayer === this;
  }
  // The player must call _videoEndedCallback when the video is ended
  onVideoEnded(e) {
    this._videoEndedCallback = e;
  }
  // The video instance must implement the following functions and properties
  async play() {
    return !1;
  }
  async pause() {
    return !1;
  }
  async duration() {
    return -1;
  }
  get currentTimeSync() {
    return -1;
  }
  async currentTime() {
    return -1;
  }
  async setCurrentTime() {
    return !1;
  }
  async volume() {
    return -1;
  }
  async setVolume() {
    return !1;
  }
  initVolume(e) {
    this._initialVolume = e;
  }
  async paused() {
    return !0;
  }
  async playbackRate() {
    return -1;
  }
  async setPlaybackRate() {
    return !1;
  }
  async getQualities() {
    return null;
  }
  async setQuality() {
    return !1;
  }
  get currentQuality() {
    return null;
  }
  async getDimensions() {
    return null;
  }
  async supportsMultiaudio() {
    return !1;
  }
  async getAudioTracks() {
    return null;
  }
  async setCurrentAudioTrack() {
  }
  get currentAudioTrack() {
    return null;
  }
  async loadStreamData(e) {
    return !1;
  }
  get isEnabled() {
    return this._enabled;
  }
  async enable() {
    this._enabled = !0;
  }
  async disable() {
    this._enabled = !1;
  }
}, Qu = class extends Bi {
  get moduleName() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleName'`), "-";
  }
  get moduleVersion() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleVersion'`), "0.0.0";
  }
  async getDictionaries() {
    return null;
  }
};
class Qs extends qu {
  constructor(e, t, n, s) {
    super("video", e, t), this._config = s || {};
    const a = this._config.crossOrigin ?? "";
    this.element.setAttribute("playsinline", ""), a !== !1 && this.element.setAttribute("crossorigin", a), this.isMainAudio = n, this.element.setAttribute("autoplay", ""), this.element.autoplay = !0, n || (this.element.muted = !0), this._videoEnabled = !0;
  }
  async play() {
    if (this._videoEnabled)
      try {
        return await this.waitForLoaded(), this.video.play();
      } catch {
      }
    else
      this._disabledProperties.paused = !1;
  }
  async pause() {
    if (this._videoEnabled)
      return await this.waitForLoaded(), this.video.pause();
    this._disabledProperties.paused = !0;
  }
  async duration() {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.duration) : this._disabledProperties.duration;
  }
  get currentTimeSync() {
    return this._videoEnabled ? this.ready ? this.video.currentTime : -1 : this._disabledProperties.currentTime;
  }
  async currentTime() {
    return this._videoEnabled ? (await this.waitForLoaded(), this.currentTimeSync) : this._disabledProperties.currentTime;
  }
  async setCurrentTime(e) {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.currentTime = e) : (this._disabledProperties.currentTime = e, e);
  }
  async volume() {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.volume) : this._disabledProperties.volume;
  }
  async setVolume(e) {
    return this._videoEnabled ? (await this.waitForLoaded(), e === 0 ? this.video.setAttribute("muted", "") : this.video.removeAttribute("muted"), this.video.volume = e) : (this._disabledProperties.volume = e, e);
  }
  async paused() {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.paused) : this._disabledProperties.paused;
  }
  async playbackRate() {
    return this._videoEnabled ? (await this.waitForLoaded(), await this.video.playbackRate) : this._disabledProperties.playbackRate;
  }
  async setPlaybackRate(e) {
    return this._videoEnabled ? (await this.waitForLoaded(), this.video.playbackRate = e) : (this._disabledProperties.playbackRate = e, e);
  }
  async getQualities() {
  }
  async setQuality() {
  }
  get currentQuality() {
    return 0;
  }
  async getDimensions() {
    return this._videoEnabled ? (await this.waitForLoaded(), { w: this.video.videoWidth, h: this.video.videoHeight }) : { w: this._disabledProperties.videoWidth, h: this._disabledProperties.videoHeight };
  }
  saveDisabledProperties(e) {
    this._disabledProperties = {
      duration: e.duration,
      volume: e.volume,
      videoWidth: e.videoWidth,
      videoHeight: e.videoHeight,
      playbackRate: e.playbackRate,
      paused: e.paused,
      currentTime: e.currentTime
    };
  }
  async loadStreamData(e = null) {
    this._streamData = this._streamData || e, this.player.log.debug("es.upv.paella.htmlVideoFormat: loadStreamData"), this._sources = e.sources.html, this._currentQuality = 0, this.isMainAudioPlayer || (this.video.muted = !0), this._sources.forEach(({ src: t, mimetype: n }) => {
      t = Ri(this.player, t);
      const s = document.createElement("source");
      s.src = t, s.type = n, this.video.appendChild(s);
    }), this._endedCallback = this._endedCallback || (() => {
      typeof this._videoEndedCallback == "function" && this._videoEndedCallback();
    }), this.video.addEventListener("ended", this._endedCallback);
    try {
      await this.video.play();
    } catch {
    }
    await this.waitForLoaded(), this.player.log.debug(`es.upv.paella.htmlVideoFormat (${this.streamData.content}): video loaded and ready.`), this.saveDisabledProperties(this.video);
  }
  async clearStreamData() {
    this.video.src = "", this.video.removeEventListener("ended", this._endedCallback), this.video.removeEventListener("loadeddata", this._handleLoadedCallback), this._ready = !1;
  }
  get isEnabled() {
    return this._videoEnabled;
  }
  async enable() {
    this._videoEnabled = !0;
  }
  async disable() {
    return this.isMainAudio ? this.player.log.debug("video.disable() - the video is not disabled because it is the main audio source.") : this._videoEnabled = !1, this._videoEnabled;
  }
  waitForLoaded() {
    return new Promise((e, t) => {
      this.video.readyState >= 2 && (this._ready = !0), this.ready ? e() : (this._handleLoadedCallback = (n) => {
        this.video.readyState >= 2 && (this.video.pause(), this._ready = !0, e());
      }, this.video.addEventListener("loadeddata", this._handleLoadedCallback));
    });
  }
}
let be = class {
  constructor({ label: e, shortLabel: t, isAuto: n = !1, index: s = 0, src: a = "", width: r = -1, height: o = -1, bitrate: l = -1 }) {
    this._label = e, this._shortLabel = t, this._index = s, this._src = a, this._res = {
      w: r,
      h: o
    }, this._bitrate = l, this._isAuto = n;
  }
  get label() {
    return this._label;
  }
  get shortLabel() {
    return this._shortLabel;
  }
  get index() {
    return this._index;
  }
  get src() {
    return this._src;
  }
  get res() {
    return this._res;
  }
  get bitrate() {
    return this._bitrate;
  }
  get isAuto() {
    return this._isAuto;
  }
  get quality() {
    return this._res.w !== -1 && this._res.h !== -1 ? this._res.w * this._res.h : this._bitrate;
  }
  compare(e) {
    return e.quality - this.quality;
  }
}, Yu = class extends Qs {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  // This function is called when the player loads, and it should
  // make everything ready for video playback to begin.
  async loadStreamData(e = null) {
    this._streamData = this._streamData || e, this.player.log.debug("es.upv.paella.mp4VideoFormat: loadStreamData"), this._currentSource || (this._sources = null, this._currentQuality = 0, this._sources = e.sources.mp4, this._sources.sort((t, n) => Number(t.res.w) - Number(n.res.w)), this._currentQuality = this._sources.length - 1, this._currentSource = this._sources[this._currentQuality]), this.isMainAudioPlayer || (this.video.muted = !0), this._initialVolume && (this.video.volume = this._initialVolume, this._initialVolume === 0 && (this.video.muted = !0)), this.video.src = Ri(this.player, this._currentSource.src), this._endedCallback = this._endedCallback || (() => {
      typeof this._videoEndedCallback == "function" && this._videoEndedCallback();
    }), this.video.addEventListener("ended", this._endedCallback);
    try {
      await this.video.play();
    } catch {
    }
    await this.waitForLoaded(), this.player.log.debug(`es.upv.paella.mp4VideoFormat (${this.streamData.content}): video loaded and ready.`), this.saveDisabledProperties(this.video);
  }
}, Ku = class extends qs {
  constructor(e, t, n) {
    super(e, t, n), this.__uiPlugin = !0;
  }
  async getDictionaries() {
    return null;
  }
};
const _n = () => {
  const i = document.createElement("span");
  return i.classList.add("side-container"), i.classList.add("hidden"), i;
};
class Ju {
  onIconChanged(e, t, n) {
  }
  onTitleChanged(e, t, n) {
  }
  onStateChanged(e, t, n, s, a) {
  }
}
var bt, Ci, ye, fe, Lt;
let Xu = class extends Ku {
  constructor() {
    super(...arguments), Se(this, bt), Se(this, ye, null), Se(this, fe, null), Se(this, Lt, []);
  }
  get type() {
    return "button";
  }
  // _container and _button are loaded in PlaybackBar
  get container() {
    return this._container;
  }
  get button() {
    return this._button;
  }
  get interactive() {
    return !0;
  }
  get dynamicWidth() {
    return !1;
  }
  getId() {
    return null;
  }
  get id() {
    return this.config.id || this.getId();
  }
  getButtonName() {
    return null;
  }
  get buttonName() {
    return this.config.name || this.getButtonName() || this.name;
  }
  get ariaLabel() {
    return this.config.ariaLabel || this.getAriaLabel();
  }
  getAriaLabel() {
    return "";
  }
  get tabIndex() {
    return this.config.tabIndex || this.getTabIndex();
  }
  getTabIndex() {
    return null;
  }
  getDescription() {
    return "";
  }
  get description() {
    return this.config.description || this.getDescription();
  }
  get minContainerSize() {
    return this.config.minContainerSize || this.getMinContainerSize();
  }
  getMinContainerSize() {
    return 0;
  }
  setObserver(e) {
    if (e instanceof Ju)
      this._observer = e;
    else if (typeof e.onIconChanged == "function" || typeof e.onTitleChanged == "function" || typeof e.onStateChanged == "function")
      this._observer = e;
    else
      throw new Error("Invalid observer for ButtonPlugin");
  }
  get icon() {
    return this._icon || (this._icon = ""), this._icon;
  }
  set icon(e) {
    typeof e == "string" && (e = _i(e)), this._icon = e, vn(this, bt, Ci).call(this);
  }
  get haveIcon() {
    return this.icon !== "";
  }
  get menuIcon() {
    return this._menuIcon || (this._menuIcon = ""), this._menuIcon;
  }
  set menuIcon(e) {
    typeof e == "string" && (e = _i(e)), this._menuIcon = e, vn(this, bt, Ci).call(this);
  }
  get haveMenuIcon() {
    return this.menuIcon !== "";
  }
  get isMenuButton() {
    var e, t, n;
    const s = ((e = this.config) == null ? void 0 : e.parentContainer) === "playbackBar" || !((t = this.config) != null && t.parentContainer), a = ((n = this.config) == null ? void 0 : n.parentContainer) === "videoContainer";
    return !s && !a;
  }
  get title() {
    return this._title || "";
  }
  set title(e) {
    var t;
    if (this._title = e, e && this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span") || st(`<span class="button-title-${this.titleSize}"></span>`, this._button);
      n.innerHTML = e;
    } else if (this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span");
      n && this._button.removeChild(n);
    }
    (t = this._observer) != null && t.onTitleChanged && this._observer.onTitleChanged(this, this._title, e);
  }
  // "small", "medium", "large"
  get titleSize() {
    return "medium";
  }
  // "left" or "right"
  get side() {
    var e;
    return ((e = this.config) == null ? void 0 : e.side) || "left";
  }
  get closePopUps() {
    return this.config.closePopUps || this.getClosePopUps();
  }
  getClosePopUps() {
    return !0;
  }
  // "playbackBar" or "videoContainer"
  get parentContainer() {
    var e;
    return ((e = this.config) == null ? void 0 : e.parentContainer) || "playbackBar";
  }
  get className() {
    return "";
  }
  enable() {
    this._enabled = !0, this.show();
  }
  disable() {
    this._enabled = !1, this.hide();
  }
  hide() {
    this._button && (this._button.style.display = "none");
  }
  show() {
    if (this._enabled === !1)
      return;
    const { width: e } = this.player.playbackBar.containerSize;
    this._button && (e > this.minContainerSize || this.parentContainer !== "playbackBar") && (this._button.style.display = null);
  }
  get leftSideContainer() {
    return $(this, ye) || (Nt(this, ye, _n()), this.container.appendChild($(this, ye))), $(this, ye);
  }
  get leftSideContainerPresent() {
    return $(this, ye) !== null;
  }
  get rightSideContainer() {
    return $(this, fe) || (Nt(this, fe, _n()), this.container.appendChild($(this, fe))), $(this, fe);
  }
  get rightSideContainerPresent() {
    return $(this, fe) !== null;
  }
  get stateText() {
    return null;
  }
  get stateIcon() {
    return null;
  }
  setState({ text: e = null, icon: t = null } = {}) {
    var n, s;
    const a = this._statusText, r = this._statusIcon;
    this._statusText = e, this._statusIcon = t, $(this, Lt).forEach((o) => o(this)), this._statusIcon && (this.icon = this._statusIcon, this.menuIcon = this._statusIcon), this._statusText && (this.title = this._statusText), (s = (n = this._observer) == null ? void 0 : n.onStateChanged) == null || s.call(n, this, a, e, r, t);
  }
  onStateChange(e) {
    typeof e == "function" ? $(this, Lt).push(e) : this.player.log.warn("Invalid callback for ButtonPlugin.onStateChange");
  }
  async action(e, t = null) {
  }
  onResize({ width: e, height: t }) {
    e < this.minContainerSize ? this.hide() : this.show();
  }
  focus() {
    var e;
    (e = this.button) == null || e.focus();
  }
  blur() {
    var e;
    (e = this.button) == null || e.blur();
  }
  isFocus() {
    return this.button === document.activeElement;
  }
};
bt = /* @__PURE__ */ new WeakSet(), Ci = function() {
  var i;
  const e = this.isMenuButton ? this._menuIcon : this._icon, t = this.isMenuButton && this.haveMenuIcon ? this.menuIcon : this.icon;
  if (t && this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i") || st("<i></i>", this._button);
    n.innerHTML = t;
  } else if (this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i");
    n && this._button.removeChild(n);
  }
  (i = this._observer) != null && i.onIconChanged && this._observer.onIconChanged(this, e, t);
}, ye = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap();
let ec = class extends Xu {
  constructor() {
    super(...arguments), this._refreshContent = !0;
  }
  set refreshContent(e) {
    this._refreshContent = e;
  }
  get refreshContent() {
    return this._refreshContent;
  }
  get closeParentPopUp() {
    return this.config.closeParentPopUp || this.getCloseParentPopUp();
  }
  getCloseParentPopUp() {
    return !1;
  }
  async action(e, t) {
    super.action(e, t), this.parentPopUp = t, await this.showPopUp();
  }
  get parentPopUp() {
    return this._parentPopUp;
  }
  set parentPopUp(e) {
    this._parentPopUp = e;
  }
  get popUp() {
    return this._popUp;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  get moveable() {
    return this.config.moveable ?? !1;
  }
  get resizeable() {
    return this.config.resizeable ?? !1;
  }
  get customPopUpClass() {
    return this.config.customPopUpClass ?? "";
  }
  get closeActions() {
    var e, t;
    const n = ((e = this.config.closeActions) == null ? void 0 : e.clickOutside) ?? !0, s = ((t = this.config.closeActions) == null ? void 0 : t.closeButton) ?? !1;
    return {
      clickOutside: n,
      closeButton: s
    };
  }
  get currentContent() {
    return this._currentContent;
  }
  async getContent() {
    return st("<p>Pop Up Button Plugin Content</p>");
  }
  async checkRefreshContent() {
    if (this.refreshContent) {
      const e = await this.getContent();
      this._currentContent.innerHTML = "", Array.from(e.children).forEach((t) => this._currentContent.appendChild(t));
    }
  }
  get popUpType() {
    return this.config.popUpType || "modal";
  }
  hidePopUp() {
    this.player.playbackBar.popUp.isHidden || this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this._keyEventHandler || (this._keyEventHandler = (t) => {
      t.key === "Escape" && this.hidePopUp();
    }, this.button.addEventListener("keydown", this._keyEventHandler));
    const e = this.player.playbackBar.popUp;
    if (e.isHidden || this._contentId !== e.currentContentId) {
      const t = await this.getContent();
      this._currentContent = t, this._contentId = e.show({
        title: this.menuTitle || this.description,
        content: t,
        attachRight: this.popUpType === "timeline" || this.side === "right",
        attachLeft: this.popUpType === "timeline" || this.side === "left",
        parent: this.parentPopUp
      });
    } else
      e.hide();
  }
};
const tc = (i) => i ? `<span class="menu-title">${i}</span>` : "", ic = (i) => i ? `<i class="menu-icon">${i}</i>` : "", nc = (i) => i ? `aria-label="${i}"` : "", sc = (i) => i ? `<span class="state-text">${i}</span>` : "", ac = (i) => i ? `<i class="state-icon">${i}</i>` : "", rc = (i, e) => i || e ? `<span class="button-state">${sc(i)}${ac(e)}</span>` : "";
function oc({ itemData: i, buttonType: e, container: t, allItems: n, menuName: s, selectedItems: a, itemPlugin: r }) {
  const { id: o = 0, title: l = null, icon: u = null, iconText: h = null, showTitle: p = !0, stateText: d = null, stateIcon: _ = null } = i, m = this, C = document.createElement("li"), b = a[o] ?? !1, c = st(`
		<button class="menu-button-item${b ? " selected" : ""}" ${nc(l)} data-id="${o}"" id="${m.name}_menuItem_${o}">
			${ic(u)}
			${p ? tc(l) : ""}
			${d || _ ? rc(d, _) : ""}
		</button>
	`);
  return r && (r._button = c), c.addEventListener("keydown", (g) => {
    var v;
    const y = () => {
      g.stopPropagation(), g.preventDefault();
    };
    if (g.key === "ArrowUp") {
      const w = c.dataPrev;
      w == null || w.focus(), y();
    } else if (g.key === "ArrowDown") {
      const w = c.dataNext;
      w == null || w.focus(), y();
    } else if (g.key === "Tab") {
      const w = g.shiftKey ? g.target.dataPrev : g.target.dataNext;
      w == null || w.focus(), y();
    } else g.key === "Escape" && (this.player.playbackBar.popUp.pop() ? (v = m.button) == null || v.focus() : this.focus(), y());
  }), c.addEventListener("click", async (g) => {
    if (e === "check") {
      const v = n.find((y) => y.id === o);
      a[o] = !a[o], m.itemSelected(v, n);
    } else if (e === "radio") {
      a[o] = !0;
      let v = null;
      n.forEach((y) => {
        y.id === o ? v = y : a[y.id] = !1;
      }), m.itemSelected(v, n);
    } else {
      const v = n.find((y) => y.id === o);
      m.itemSelected(v, n);
    }
    await m.checkRefreshContent(), g.stopPropagation(), m.closeOnSelect && (m.closeMenu(), Zs(m.player));
  }), C.appendChild(c), t.appendChild(C), C;
}
class lc extends ec {
  get closeOnSelect() {
    return this.config.closeOnSelect === void 0 && (this.buttonType !== "check" ? this.config.closeOnSelect = !0 : this.config.closeOnSelect = !1), this.config.closeOnSelect;
  }
  setSelected(e, t) {
    this._selectedItems && (this._selectedItems[e] = t);
  }
  async getContent() {
    var e, t;
    const n = (e = document.activeElement) == null ? void 0 : e.id, s = st("<menu></menu>");
    this._content = s;
    const a = await this.getMenu();
    this._menuItems = a, this._selectedItems || (this._selectedItems = {}, this._menuItems.forEach((l) => {
      l.selected !== void 0 && l.selected !== null && (this._selectedItems[l.id] = l.selected);
    }));
    const r = self.crypto.randomUUID(), o = a.map((l) => oc.apply(this, [{
      itemData: l,
      buttonType: typeof this.buttonType == "function" ? this.buttonType() : this.buttonType,
      container: s,
      allItems: a,
      menuName: r,
      selectedItems: this._selectedItems,
      itemPlugin: l.plugin
    }]));
    return o.forEach((l, u, h) => {
      const p = l.querySelector("button");
      let d = h[u + 1], _ = h[u - 1];
      u === h.length - 1 && (d = h[0]), u === 0 && (_ = h[h.length - 1]), p.dataNext = d == null ? void 0 : d.querySelector("button"), p.dataPrev = _ == null ? void 0 : _.querySelector("button");
    }), this._firstItem = (t = o[0]) == null ? void 0 : t.querySelector("button"), n && setTimeout(() => {
      var l;
      (l = document.getElementById(n)) == null || l.focus();
    }, 10), s;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  async getMenu() {
    return [
      { id: 0, title: "Option 1" },
      { id: 1, title: "Option 2" },
      { id: 2, title: "Option 3" },
      { id: 3, title: "Option 4" },
      { id: 4, title: "Option 5" }
    ];
  }
  // Returns the menuItems with the current menu state
  get menuItems() {
    return this._menuItems;
  }
  // If showTitles is false, then the 'title' attribute of the menu
  // items is used only as aria-label.
  // If the menu item has no icon, then the `showTitles` property is ignored
  get showTitles() {
    return !0;
  }
  get buttonType() {
    return "radio";
  }
  itemSelected(e, t) {
    this.player.log.warn(`MenuButtonPlugin (${this.name}): itemSelected() function not implemented.`);
  }
  closeMenu() {
    this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this.refreshContent = !0, await super.showPopUp(), this.player.containsFocus && this._firstItem && this._firstItem.focus();
  }
}
const uc = Object.freeze({
  DISABLED: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
  VERBOSE: 5
});
uc.INFO;
let Cn = class {
  constructor({
    id: e,
    name: t,
    groupId: n = "",
    language: s = "",
    selected: a = !1
  }) {
    this._id = e, this._name = t, this._groupId = n, this._lang = s, this._selected = a;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get groupId() {
    return this._groupId;
  }
  get language() {
    return this._lang;
  }
  get selected() {
    return this._selected;
  }
  set selected(e) {
    this._selected = e;
  }
};
const cc = "2.2.0", hc = {
  version: cc
};
let ii = null, zt = class Ys extends Qu {
  static Get() {
    return ii || (ii = new Ys()), ii;
  }
  get moduleName() {
    return "paella-video-plugins";
  }
  get moduleVersion() {
    return hc.version;
  }
};
const wn = {
  autoStartLoad: !0,
  startPosition: -1,
  capLevelToPlayerSize: !0,
  debug: !1,
  defaultAudioCodec: void 0,
  initialLiveManifestSize: 1,
  maxBufferLength: 6,
  maxMaxBufferLength: 6,
  maxBufferSize: 600 * 1e3 * 1e3,
  maxBufferHole: 0.5,
  lowBufferWatchdogPeriod: 0.5,
  highBufferWatchdogPeriod: 3,
  nudgeOffset: 0.1,
  nudgeMaxRetry: 3,
  maxFragLookUpTolerance: 0.2,
  enableWorker: !0,
  enableSoftwareAES: !0,
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 500,
  manifestLoadingMaxRetryTimeout: 64e3,
  startLevel: void 0,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 500,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 500,
  fragLoadingMaxRetryTimeout: 64e3,
  startFragPrefetch: !1,
  appendErrorMaxRetry: 3,
  enableWebVTT: !0,
  enableCEA708Captions: !0,
  stretchShortVideoTrack: !1,
  maxAudioFramesDrift: 1,
  forceKeyFrameOnDiscontinuity: !0,
  abrEwmaFastLive: 5,
  abrEwmaSlowLive: 9,
  abrEwmaFastVoD: 4,
  abrEwmaSlowVoD: 15,
  abrEwmaDefaultEstimate: 5e5,
  abrBandWidthFactor: 0.95,
  abrBandWidthUpFactor: 0.7,
  minAutoBitrate: 0
}, bn = {
  withCredentials: !0,
  requestHeaders: {
    "Access-Control-Allow-Headers": "Content-Type, Accept, X-Requested-With",
    "Access-Control-Allow-Origin": "http://localhost:8000",
    "Access-Control-Allow-Credentials": "true"
  }
}, N = {
  UNSUPPORTED: 0,
  MEDIA_SOURCE_EXTENSIONS: 1,
  NATIVE: 2
};
let ni = null;
async function Fi() {
  return ni || (console.debug("Loading HLS.js"), ni = (await import("./hls-CrG39awC.js")).default), ni;
}
async function J(i = !1) {
  const e = await Fi(), t = document.createElement("video");
  return t.canPlayType("application/vnd.apple.mpegurl") && i ? N.NATIVE : e.isSupported() ? N.MEDIA_SOURCE_EXTENSIONS : t.canPlayType("application/vnd.apple.mpegurl") ? N.NATIVE : N.UNSUPPORTED;
}
const dc = async (i, e, t, n, s) => {
  var a, r;
  const o = await Fi();
  s.withCredentials && (n.xhrSetup = function(h, p) {
    h.withCredentials = s.withCredentials;
    for (const d in s.requestHeaders) {
      const _ = s.requestHeaders[d];
      h.setRequestHeader(d, _);
    }
  }), n.autoStartLoad = !0;
  const l = new o(n), u = ((r = (a = e == null ? void 0 : e.sources) == null ? void 0 : a.hls) == null ? void 0 : r.length) > 0 && e.sources.hls[0];
  return [l, new Promise((h, p) => {
    let d = !1;
    l.on(o.Events.LEVEL_SWITCHED, (b, c) => {
      i.log.debug(`HLS: quality level switched to ${c.level}`), d || (l.currentLevel = -1, d = !0), Hs(i, Ke.VIDEO_QUALITY_CHANGED, {});
    }), l.on(o.Events.ERROR, (b, c) => {
      if (c.fatal)
        switch (c.type) {
          case o.ErrorTypes.NETWORK_ERROR:
            c.details === o.ErrorDetails.MANIFEST_LOAD_ERROR ? p(Error("hlsVideoFormatPlugin: unrecoverable error in HLS player. The video is not available")) : (i.log.warn("hlsVideoFormatPlugin: Fatal network error. Try to recover"), l.startLoad());
            break;
          case o.ErrorTypes.MEDIA_ERROR:
            i.log.warn("hlsVideoFormatPlugin: Fatal media error encountered. Try to recover"), l.recoverMediaError();
            break;
          default:
            l.destroy(), p(Error("hlsVideoFormat: Fatal error. Can not recover"));
        }
      else
        i.log.warn("HLS: error"), i.log.warn(c.details);
    }), l.on(o.Events.LEVEL_SWITCHING, () => {
      i.log.debug("HLS media attached");
    }), l.on(o.Events.MEDIA_ATTACHED, () => {
      i.log.debug("HLS media attached");
    }), l.on(o.Events.MEDIA_DETACHING, () => {
      i.log.debug("HLS media detaching");
    }), l.on(o.Events.MEDIA_DETACHED, () => {
      i.log.debug("HLS media detached");
    }), l.on(o.Events.MANIFEST_PARSED, () => {
      i.log.debug("HLS manifest parsed"), l.startLoad(-1);
    });
    const _ = Math.floor(Math.random() * 1e11), m = u.src + (n.enableCache ? /\?/.test(u.src) ? `&cache=${_}` : `?cache=${_}` : "");
    l.loadSource(m), l.attachMedia(t);
    let C = !1;
    l._videoEventListener = () => {
      C = !0, h();
    }, t.addEventListener("canplay", l._videoEventListener), setTimeout(() => {
      C || t.play();
    }, 1e3);
  })];
};
let Ks = class extends Qs {
  constructor(e, t, n, s) {
    super(e, t, s, n), this._config = this._config || {
      audioTrackLabel: n.audioTrackLabel || "name",
      enableCache: n.enableCache || !1
    };
    for (const a in wn)
      this._config[a] = wn[a];
    for (const a in n.hlsConfig)
      this._config[a] = n.hlsConfig[a];
    this._cors = {};
    for (const a in bn)
      this._cors[a] = bn[a];
    for (const a in n.corsConfig)
      this._cors[a] = n.corsConfig[a];
    this._ready = !1, this._autoQuality = !0, this._forceNative = n.forceNative || !1;
  }
  get autoQuality() {
    return this._autoQuality;
  }
  get forceNative() {
    return this._forceNative;
  }
  async loadStreamData(e) {
    var t, n;
    if (await J(this.forceNative) === N.NATIVE) {
      e.sources.mp4 = e.sources.hls;
      const s = await super.loadStreamData(e), a = await this.getAudioTracks();
      return this._currentAudioTrack = a.find((r) => r.selected), this._autoQuality = new be({
        label: "auto",
        shortLabel: "auto",
        index: -1,
        width: 1,
        height: 1,
        isAuto: !0
      }), this._currentQuality = this._autoQuality, this.saveDisabledProperties(this.video), this._endedCallback = this._endedCallback || (() => {
        typeof this._videoEndedCallback == "function" && this._videoEndedCallback();
      }), this.video.addEventListener("ended", this._endedCallback), s;
    } else {
      this.player.log.debug("Loading HLS stream");
      const s = ((n = (t = e == null ? void 0 : e.sources) == null ? void 0 : t.hls) == null ? void 0 : n.length) && e.sources.hls[0];
      this._config.audioTrackLabel = (s == null ? void 0 : s.audioLabel) || this._config.audioTrackLabel;
      const [a, r] = await dc(this.player, e, this.video, this._config, this._cors);
      this._hls = a, await r, this.video.pause(), this._autoQuality = new be({
        label: "auto",
        shortLabel: "auto",
        index: -1,
        width: 1,
        height: 1,
        isAuto: !0
      }), this._currentQuality = this._autoQuality;
      const o = await this.getAudioTracks();
      this._currentAudioTrack = o.find((l) => l.selected), this.saveDisabledProperties(this.video), this._endedCallback = this._endedCallback || (() => {
        typeof this._videoEndedCallback == "function" && this._videoEndedCallback();
      }), this.video.addEventListener("ended", this._endedCallback);
    }
  }
  async duration() {
    var e;
    if (this._videoEnabled) {
      await this.waitForLoaded();
      let t = this.video.duration;
      return t === 1 / 0 && (t = ((e = this._hls) == null ? void 0 : e.liveSyncPosition) || 0), t;
    } else
      return this._disabledProperties.duration;
  }
  async waitForLoaded() {
    if (await J(this.forceNative) === N.NATIVE)
      return super.waitForLoaded();
    await new Promise((e, t) => {
      const n = () => {
        this._ready && e(), this.video.readyState >= 2 ? (this._ready = !0, e()) : setTimeout(() => n(), 200);
      };
      n();
    });
  }
  async getQualities() {
    const e = [];
    return e.push(this._autoQuality), await J(this.forceNative) === N.MEDIA_SOURCE_EXTENSIONS && (this._hls.levels.forEach((t, n) => {
      e.push(new be({
        index: n,
        // TODO: should be level.id??
        label: `${t.width}x${t.height}`,
        shortLabel: `${t.height}p`,
        width: t.width,
        height: t.height
      }));
    }), e.sort((t, n) => t.res.h - n.res.h)), e;
  }
  async setQuality(e) {
    const t = await J(this.forceNative);
    if (this._videoEnabled) {
      if (!(e instanceof be))
        throw Error("Invalid parameter setting video quality. VideoQualityItem object expected.");
      t === N.MEDIA_SOURCE_EXTENSIONS ? (this._currentQuality = e, this._hls.currentLevel = e.index) : this.player.log.warn("Could not set video quality of HLS stream, because the HLS support of this browser is native.");
    }
  }
  get currentQuality() {
    return this._currentQuality;
  }
  async supportsMultiaudio() {
    var e;
    await this.waitForLoaded();
    const t = await J(this.forceNative);
    return t === N.MEDIA_SOURCE_EXTENSIONS ? this._hls.audioTracks.length > 1 : t === N.NATIVE ? ((e = this.video.audioTracks) == null ? void 0 : e.length) > 1 : !1;
  }
  async getAudioTracks() {
    await this.waitForLoaded();
    const e = this._config.audioTrackLabel || "name", t = await J(this.forceNative);
    return t === N.MEDIA_SOURCE_EXTENSIONS ? this._hls.audioTracks.map((n) => new Cn({
      id: n.id,
      name: n[e],
      language: n.lang,
      selected: this._hls.audioTrack === n.id
    })) : t === N.NATIVE ? Array.from(this.video.audioTracks).map((n) => new Cn({
      id: n.id,
      name: n.label,
      language: n.language,
      selected: n.enabled
    })) : null;
  }
  async setCurrentAudioTrack(e) {
    await this.waitForLoaded();
    const t = (await this.getAudioTracks()).find((s) => s.id === e.id), n = await J(this.forceNative);
    return n === N.MEDIA_SOURCE_EXTENSIONS && t ? this._hls.audioTrack = t.id : n === N.NATIVE && t && Array.from(this.video.audioTracks).forEach((s) => {
      s.id === t.id ? s.enabled = !0 : s.enabled = !1;
    }), this._currentAudioTrack = t, t;
  }
  get currentAudioTrack() {
    return this._currentAudioTrack;
  }
  async clearStreamData() {
    this.video.removeEventListener("canplay", this._hls._videoEventListener), this.video.src = "", this._hls.destroy(), this._ready = !1;
  }
}, pc = class extends Vi {
  getPluginModuleInstance() {
    return zt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.hlsVideoFormat";
  }
  get streamType() {
    return "hls";
  }
  async isCompatible(e) {
    const { hls: t } = e.sources;
    return t && await J();
  }
  async getVideoInstance(e, t) {
    return new Ks(this.player, e, this.config, t);
  }
  getCompatibleFileExtensions() {
    return ["m3u8"];
  }
  getManifestData(e) {
    return {
      hls: e.map((t) => ({
        src: t,
        mimetype: "video/mp4"
      }))
    };
  }
};
const gc = async (i, e, t, n, s) => {
  var a, r;
  const o = await Fi();
  s.withCredentials && (n.xhrSetup = function(h, p) {
    h.withCredentials = s.withCredentials;
    for (const d in s.requestHeaders) {
      const _ = s.requestHeaders[d];
      h.setRequestHeader(d, _);
    }
  });
  const l = new o(n), u = ((r = (a = e == null ? void 0 : e.sources) == null ? void 0 : a.hlsLive) == null ? void 0 : r.length) > 0 && e.sources.hlsLive[0];
  return n.initialQualityLevel !== void 0 && n.initialQualityLevel, [l, new Promise((h, p) => {
    let d = !1;
    l.on(o.Events.LEVEL_SWITCHED, (C, b) => {
      (void 0).player.log.debug(`HLS: quality level switched to ${b.level}`), d || (l.currentLevel = -1, d = !0), Hs(i, Ke.VIDEO_QUALITY_CHANGED, {});
    }), l.on(o.Events.ERROR, (C, b) => {
      if (b.fatal)
        switch (b.type) {
          case o.ErrorTypes.NETWORK_ERROR:
            b.details === o.ErrorDetails.MANIFEST_LOAD_ERROR ? p(Error("hlsVideoFormatPlugin: unrecoverable error in HLS player. The video is not available")) : (i.log.warn("hlsVideoFormatPlugin: Fatal network error. Try to recover"), l.startLoad());
            break;
          case o.ErrorTypes.MEDIA_ERROR:
            i.log.warn("hlsVideoFormatPlugin: Fatal media error encountered. Try to recover"), l.recoverMediaError();
            break;
          default:
            l.destroy(), p(Error("hlsVideoFormat: Fatal error. Can not recover"));
        }
    }), l.on(o.Events.MANIFEST_PARSED, () => {
      n.autoStartLoad || l.autoStartLoad();
    });
    const _ = Math.floor(Math.random() * 1e11), m = u.src + (n.enableCache ? /\?/.test(u.src) ? `&cache=${_}` : `?cache=${_}` : "");
    l.loadSource(m), l.attachMedia(t), l._videoEventListener = () => {
      h();
    }, t.addEventListener("canplay", l._videoEventListener);
  })];
};
let mc = class extends Ks {
  async loadStreamData(e) {
    if (await J() === N.NATIVE)
      return e.sources.hls = e.sources.hlsLive, super.loadStreamData(e);
    {
      this.player.log.debug("Loading HLS stream");
      const [t, n] = await gc(this.player, e, this.video, this._config, this._cors);
      this._hls = t, await n, this._autoQuality = new be({
        label: "auto",
        shortLabel: "auto",
        index: -1,
        width: 1,
        height: 1,
        isAuto: !0
      }), this._currentQuality = this._autoQuality;
      const s = await this.getAudioTracks();
      this._currentAudioTrack = s.find((a) => a.selected), this.saveDisabledProperties(this.video);
    }
  }
};
class yc extends Vi {
  getPluginModuleInstance() {
    return zt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.hlsLiveVideoFormat";
  }
  get streamType() {
    return "hlsLive";
  }
  async isCompatible(e) {
    const t = await J(), { hlsLive: n } = e.sources;
    return n && t;
  }
  async getVideoInstance(e, t) {
    return new mc(this.player, e, this.config, t);
  }
}
const fc = `<svg width="100%" height="100%" viewBox="0 0 39 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <path d="M37,9.5C37,5.913 34.087,3 30.5,3L8.5,3C4.913,3 2,5.913 2,9.5L2,22.5C2,26.087 4.913,29 8.5,29L30.5,29C34.087,29 37,26.087 37,22.5L37,9.5ZM18.97,21.884C18.97,21.983 18.891,22.125 18.733,22.308C17.111,24.188 15.102,25.128 12.706,25.128C10.21,25.128 8.214,24.217 6.716,22.395C5.319,20.698 4.62,18.577 4.62,16.031C4.62,13.486 5.331,11.356 6.754,9.642C8.268,7.795 10.269,6.872 12.756,6.872C15.277,6.872 17.227,7.725 18.608,9.43C18.741,9.605 18.808,9.75 18.808,9.867C18.808,10.008 18.587,10.426 18.147,11.121C17.706,11.816 17.439,12.163 17.348,12.163C17.24,12.163 16.986,11.959 16.587,11.551C16.096,11.052 15.634,10.678 15.202,10.428C14.486,10.021 13.696,9.817 12.831,9.817C11.184,9.817 9.902,10.445 8.987,11.701C8.172,12.824 7.765,14.238 7.765,15.944C7.765,17.649 8.168,19.076 8.975,20.224C9.89,21.513 11.167,22.158 12.806,22.158C13.621,22.158 14.407,21.954 15.164,21.547C15.663,21.28 16.171,20.902 16.687,20.411C17.119,20.003 17.356,19.8 17.398,19.8C17.448,19.8 17.722,20.13 18.221,20.792C18.721,21.453 18.97,21.817 18.97,21.884ZM34.38,21.884C34.38,21.983 34.301,22.125 34.143,22.308C32.521,24.188 30.512,25.128 28.116,25.128C25.62,25.128 23.624,24.217 22.126,22.395C20.729,20.698 20.03,18.577 20.03,16.031C20.03,13.486 20.741,11.356 22.164,9.642C23.678,7.795 25.678,6.872 28.166,6.872C30.686,6.872 32.637,7.725 34.018,9.43C34.151,9.605 34.218,9.75 34.218,9.867C34.218,10.008 33.997,10.426 33.556,11.121C33.116,11.816 32.849,12.163 32.758,12.163C32.65,12.163 32.396,11.959 31.997,11.551C31.506,11.052 31.044,10.678 30.612,10.428C29.896,10.021 29.106,9.817 28.241,9.817C26.594,9.817 25.312,10.445 24.397,11.701C23.582,12.824 23.174,14.238 23.174,15.944C23.174,17.649 23.578,19.076 24.385,20.224C25.3,21.513 26.577,22.158 28.216,22.158C29.031,22.158 29.817,21.954 30.574,21.547C31.073,21.28 31.581,20.902 32.096,20.411C32.529,20.003 32.766,19.8 32.808,19.8C32.858,19.8 33.132,20.13 33.631,20.792C34.13,21.453 34.38,21.817 34.38,21.884Z" />
</svg>`;
let vc = class extends lc {
  getPluginModuleInstance() {
    return zt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.hlsCaptionsSelectorPlugin";
  }
  getAriaLabel() {
    return "Select captions";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async isEnabled() {
    const e = await super.isEnabled();
    return this._hls = this.player.videoContainer.streamProvider.mainAudioPlayer._hls, this._video = this.player.videoContainer.streamProvider.mainAudioPlayer.video, this._hls && e;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "captionsIcon") || fc;
    const e = this._hls.subtitleTracks || [], t = this._video.textTracks || [];
    if (e.length > 0)
      this._tracks = e, this._trackType = "hls";
    else {
      this._videoTracks = t;
      const n = () => (console.log("getTextTracks"), Array.from(t).map((s, a) => ({
        attrs: {
          LANGUAGE: s.language,
          NAME: s.label
        },
        language: s.language
      })));
      this._tracks = n(), this._videoTracks.length > 0 && (this._trackType = "native", this._tracks = n(), this._tracks.length > 0 && this.enable()), t.onaddtrack = () => {
        this._trackType = "native", this._tracks = n(), this._tracks.length > 0 && this.enable();
      };
    }
    this._hls.subtitleTrack, this._disabledTrack = {
      id: -1,
      title: "Disabled",
      index: -1,
      selected: !0
    }, this._selected = null, this._tracks.length == 0 && this.disable();
  }
  async getMenu() {
    const e = [{
      id: -1,
      title: "Disabled",
      index: -1,
      selected: this._selected === null
    }];
    return this._tracks.forEach((t, n) => {
      e.push({
        id: t.attrs.LANGUAGE || t.attrs.NAME,
        title: t.attrs.NAME || t.attrs.LANGUAGE,
        index: n,
        selected: t.language === this._selected
      });
    }), e;
  }
  get buttonType() {
    return "radio";
  }
  itemSelected(e) {
    var t;
    console.log(e), e.index === -1 ? (this._selected = null, this._trackType === "hls" ? this._hls.subtitleTrack = -1 : this._trackType === "native" && Array.from(this._videoTracks).forEach((n) => n.mode = "disabled")) : (this._trackType === "hls" ? this._hls.subtitleTrack = e.index : this._trackType === "native" && (this._videoTracks[e.index].mode = "showing"), this._selected = (t = this._tracks.find((n) => n.index === e.index)) == null ? void 0 : t.language);
  }
}, _c = class extends Yu {
  async getQualities() {
    return this._qualities || (this._qualities = this._sources.map((e, t) => new be({
      index: t,
      label: `${e.res.w}x${e.res.h}`,
      shortLabel: `${e.res.h}p`,
      width: e.res.w,
      height: e.res.h,
      src: e.src
    }))), this._qualities;
  }
  async setQuality(e) {
    if (!(e instanceof be))
      throw new Error("Invalid parameter setting video quality");
    this.player.log.debug(`org.opencast.paella.mp4MultiQualityVideoFormat: Change video quality to ${e.shortLabel}`), this._currentQuality = e;
    const t = this.video.currentTime, n = this.video.playbackRate;
    this.clearStreamData(), this.video.src = e.src, this.video.currentTime = t, this.video.playbackRate = n, this.video.addEventListener("ended", this._endedCallback), await new Promise((s) => {
      const a = () => {
        this._ready = !0, this.video.pause(), this.video.removeEventListener("canplay", a), s(null);
      };
      this.video.addEventListener("canplay", a);
    });
  }
  get currentQuality() {
    return this._currentQuality;
  }
  async loadStreamData(e = null) {
    if (this._sources = null, this._sources = e.sources.mp4, this._sources.sort((t, n) => Number(t.res.w) - Number(n.res.w)), !this._qualities) {
      const t = await this.getQualities(), n = [window.screen.width, window.screen.height].map((o) => o * window.devicePixelRatio);
      let s = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
      /Mobi/i.test(window.navigator.userAgent) && (s = Math.max(s, 900), a = Math.max(s, 1600));
      let r = 0;
      for (let o = 1; o < this._sources.length; o += 1) {
        const l = this._sources[o], u = Math.min(l.res.w, l.res.h), h = Math.max(l.res.w, l.res.h);
        u <= s && h <= a && (r = o);
      }
      this._currentQuality = t[r];
    }
    this._currentSource = this._sources[this._currentQuality.index], await super.loadStreamData(e);
  }
}, Cc = class extends Vi {
  getPluginModuleInstance() {
    return zt.Get();
  }
  get streamType() {
    return "mp4";
  }
  get name() {
    return "es.upv.paella.mp4MultiQualityVideoFormat";
  }
  isCompatible(e) {
    var t;
    const { mp4: n } = e.sources;
    return n && Gu.supportsVideoType((t = n[0]) == null ? void 0 : t.mimetype);
  }
  async getVideoInstance(e, t) {
    return new _c(this.player, e, t, this.config);
  }
};
const wc = [
  {
    plugin: pc,
    config: {
      enabled: !1
    }
  },
  {
    plugin: yc,
    config: {
      enabled: !1
    }
  },
  {
    plugin: vc,
    config: {
      enabled: !1
    }
  },
  {
    plugin: Cc,
    config: {
      enabled: !1
    }
  }
];
var Js = (i) => {
  throw TypeError(i);
}, Hi = (i, e, t) => e.has(i) || Js("Cannot " + t), H = (i, e, t) => (Hi(i, e, "read from private field"), t ? t.call(i) : e.get(i)), je = (i, e, t) => e.has(i) ? Js("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), wi = (i, e, t, n) => (Hi(i, e, "write to private field"), e.set(i, t), t), Ln = (i, e, t) => (Hi(i, e, "access private method"), t);
const $e = Object.freeze({
  PLAY: "paella:play",
  PAUSE: "paella:pause",
  STOP: "paella:stop",
  ENDED: "paella:ended",
  SEEK: "paella:seek",
  FULLSCREEN_CHANGED: "paella:fullscreenchanged",
  ENTER_FULLSCREEN: "paella:enterfullscreen",
  EXIT_FULLSCREEN: "paella:exitfullscreen",
  VOLUME_CHANGED: "paella:volumeChanged",
  TIMEUPDATE: "paella:timeupdate",
  TRIMMING_CHANGED: "paella:trimmingChanged",
  CAPTIONS_CHANGED: "paella:captionsChanged",
  CAPTIONS_ENABLED: "paella:captionsEnabled",
  CAPTIONS_DISABLED: "paella:captionsDisabled",
  BUTTON_PRESS: "paella:buttonPress",
  SHOW_POPUP: "paella:showPopUp",
  HIDE_POPUP: "paella:hidePopUp",
  MANIFEST_LOADED: "paella:manifestLoaded",
  STREAM_LOADED: "paella:streamLoaded",
  PLAYER_LOADED: "paella:playerLoaded",
  PLAYER_UNLOADED: "paella:playerUnloaded",
  RESIZE: "paella:resize",
  RESIZE_END: "paella:resizeEnd",
  LAYOUT_CHANGED: "paella:layoutChanged",
  PLAYBACK_RATE_CHANGED: "paella:playbackRateChanged",
  VIDEO_QUALITY_CHANGED: "paella:videoQualityChanged",
  HIDE_UI: "paella:hideUI",
  SHOW_UI: "paella:showUI",
  COOKIE_CONSENT_CHANGED: "paella:cookieConsentChanged",
  LOG: "paella:log"
});
function Je(i, e, t, n = !0) {
  return i.__eventListeners__ = i.__eventListeners__ || {}, Array.isArray(e) || (e = [e]), e.forEach((s) => {
    i.__eventListeners__[s] = i.__eventListeners__[s] || [], i.__eventListeners__[s].push({
      callback: t,
      unregisterOnUnload: n
    });
  }), t;
}
function bc(i) {
  return new Promise((e, t) => {
    fetch(i).then((n) => n.text()).then((n) => {
      e(n);
    }).catch((n) => t(n));
  });
}
function Lc(i) {
  const e = new URLSearchParams(window.location.search);
  return e.has(i) ? e.get(i) : null;
}
function Ec(i) {
  const e = window.location.hash.replace("#", "?"), t = new URLSearchParams(e);
  return t.has(i) ? t.get(i) : null;
}
function Xs(i, e) {
  const t = e || "/";
  return i = i.map((n, s) => (s && (n = n.replace(new RegExp("^" + t), "")), s !== i.length - 1 && (n = n.replace(new RegExp(t + "$"), "")), n)), i.join(t);
}
function ea(i) {
  return new RegExp("^([a-z]+://|//)", "i").test(i) || /^\//.test(i);
}
function ta(i) {
  try {
    return new URL(i).pathname.split("/").pop();
  } catch {
    return i.split("/").pop();
  }
}
function Tc(i) {
  return i.split(".").reduce((e, t, n, s) => n < s.length - 1 ? e !== "" ? `${e}.${t}` : t : e, "");
}
function Pc(i) {
  const e = (t) => {
    const n = t.split("/").reduce((s, a, r, o) => r < o.length - 1 ? s !== "" ? `${s}/${a}` : a : s, "");
    return (t[0] === "/" ? `/${n}` : n) + "/";
  };
  try {
    const t = new URL(i);
    return t.origin + e(t.pathname);
  } catch {
    return e(i);
  }
}
function Ic(i) {
  return ta(i).split(".").pop();
}
function Sc(i, e) {
  return ea(e) ? e : Xs([i.manifestUrl, e]);
}
function kc(i) {
  i.__hideTimerPaused__ = !0;
}
function Ac(i) {
  i.__hideTimerPaused__ = !1;
}
function xc(i, e = "hideUiTime") {
  var t;
  i.__hideTimer__ = null;
  const n = async () => i.__hideTimerPaused__ ? (i.log.debug("UI not hidden because the auto hide timer is paused"), !1) : s() ? (i.log.debug("UI not hidden because there is a focused element"), !1) : (await i.hideUserInterface(), !0);
  (t = i.config.ui) != null && t.hideOnMouseLeave && i.containerElement.addEventListener("mouseleave", () => {
    n();
  });
  const s = () => {
    const r = document.activeElement, o = document.querySelector(":focus-visible");
    return (i.playbackBar.element.contains(r) || i.videoContainer.element.contains(r)) && [
      "input",
      "textarea",
      "button"
    ].find((l) => r.tagName.toLowerCase(l)) !== -1 && o;
  }, a = async () => {
    i.__hideTimer__ && clearTimeout(i.__hideTimer__), await i.showUserInterface(), i.__hideTimer__ = setTimeout(async () => {
      i.__hideTimer__ = null, n() || a();
    }, i[e]);
  };
  i.containerElement.addEventListener("mousemove", async (r) => {
    a();
  }), Je(i, $e.PLAY, async () => {
    a();
  }), Je(i, $e.PAUSE, async () => {
    await i.showUserInterface();
  }), Je(i, $e.ENDED, async () => {
    await i.showUserInterface();
  }), document.addEventListener("keydown", async () => {
    a();
  });
}
function Dc(i) {
  i.__hideTimer__ && (clearTimeout(i.__hideTimer__), delete i.__hideTimer__);
}
function $c(i) {
  const e = Math.floor(i / 60 / 60), t = Math.floor(i / 60) - e * 60, n = Math.floor(i % 60);
  return (e > 0 ? e.toString().padStart(2, "0") + ":" : "") + t.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0");
}
function Mc(i) {
  const e = /^(?:(\d+):){0,1}(\d+):(\d+)(\.\d+)?$/.exec(i);
  if (e) {
    const t = e[1] !== void 0 ? Number(e[1]) : 0, n = Number(e[2]), s = Number(e[3]);
    return t * 3600 + n * 60 + s;
  }
  return null;
}
function Nc(i) {
  const e = /^(?:(\d+):){0,1}(\d+):(\d+)\.(\d+)?$/.exec(i);
  if (e) {
    const t = e[1] !== void 0 ? Number(e[1]) : 0, n = Number(e[2]), s = Number(e[3]), a = e[4] && Number(e[4]) || 0;
    return t * 36e5 + n * 6e4 + s * 1e3 + a;
  }
  return null;
}
function ia(i, e, t = 365) {
  let n = /* @__PURE__ */ new Date();
  n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3);
  let s = `expires=${n.toUTCString()}`;
  document.cookie = `${i}=${e};${s};path=/;SameSite=None;` + (/Apple/.test(navigator.vendor) ? "" : "Secure;");
}
function Uc(i, e, t, n, s = 365) {
  i.cookieConsent.getConsentForType(e) && ia(t, n, s);
}
function zi(i) {
  let e = i + "=", t = decodeURIComponent(document.cookie).split(";");
  for (let n = 0; n < t.length; ++n) {
    let s = t[n];
    for (; s.charAt(0) == " "; )
      s = s.substring(1);
    if (s.indexOf(e) == 0)
      return s.substring(e.length, s.length);
  }
  return "";
}
function Rc(i) {
  const e = zi(i), t = Number(e);
  return e !== "" && !isNaN(t) ? t : null;
}
function Oc(i) {
  try {
    return JSON.parse(zi(i));
  } catch {
    return null;
  }
}
function Bc(i, e = !0) {
  return new Promise((t) => {
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("href", i), n.onload = () => t(n);
    const s = document.getElementsByTagName("head")[0];
    e && s.appendChild(n), t();
  });
}
function Vc(i) {
  document.getElementsByTagName("head")[0].removeChild(i);
}
function bi(i, e, t = !0) {
  for (const n in e) {
    const s = i[n];
    let a = e[n];
    t && Array.isArray(s) && Array.isArray(a) ? (s.forEach((r) => {
      a = a.filter((o) => typeof r == "object" && typeof o == "object" && r.id === o.id ? (bi(r, o, t), !1) : !0);
    }), a.forEach((r) => {
      s.push(r);
    })) : typeof s == "object" && a ? bi(s, a, t) : i[n] = e[n];
  }
}
function Li(i, { excludedTags: e = null } = {}) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = ["script"];
  return e && n.push(...e), n.flatMap((s) => Array.from(t.getElementsByTagName(s))).forEach((s) => {
    s.parentElement.removeChild(s);
  }), t.innerHTML;
}
let ct = null;
function Fc(i) {
  if (!i) return !1;
  ct || (ct = document.createElement("video"));
  let e = ct.canPlayType(i);
  if (e === "maybe" || e === "probably")
    return !0;
  if (/video\/mp4/i.test(i))
    return e = ct.canPlayType("video/mp4"), e === "maybe" || e === "probably";
}
const Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearAutoHideTimer: Dc,
  getCookie: zi,
  getFileExtension: Ic,
  getHashParameter: Ec,
  getJSONCookie: Oc,
  getNumericCookie: Rc,
  getUrlFileName: ta,
  getUrlParameter: Lc,
  isAbsoluteUrl: ea,
  joinPath: Xs,
  loadStyle: Bc,
  loadSvgIcon: bc,
  mergeObjects: bi,
  pauseAutoHideUiTimer: kc,
  removeExtension: Tc,
  removeFileName: Pc,
  resolveResourcePath: Sc,
  resumeAutoHideUiTimer: Ac,
  sanitizeHTML: Li,
  secondsToTime: $c,
  setCookie: ia,
  setCookieIfAllowed: Uc,
  setupAutoHideUiTimer: xc,
  supportsVideoType: Fc,
  timeToMilliseconds: Nc,
  timeToSeconds: Mc,
  unloadStyle: Vc
}, Symbol.toStringTag, { value: "Module" }));
var Et;
let na = class {
  constructor(i) {
    je(this, Et, null), wi(this, Et, i);
  }
  get player() {
    return H(this, Et);
  }
};
Et = /* @__PURE__ */ new WeakMap();
function G(i, e = null) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = t.children[0];
  return e && e.appendChild(n), n;
}
class sa extends na {
  constructor(e, t) {
    super(e), this._name = t;
  }
  getPluginModuleInstance() {
    return null;
  }
  get config() {
    return this._config;
  }
  get type() {
    return "none";
  }
  get order() {
    var e;
    return ((e = this._config) == null ? void 0 : e.order) || 0;
  }
  get description() {
    var e;
    return ((e = this._config) == null ? void 0 : e.description) || "";
  }
  get name() {
    return this._name;
  }
  async isEnabled() {
    var e;
    return (e = this.config) == null ? void 0 : e.enabled;
  }
  async load() {
  }
  async unload() {
  }
}
class zc extends na {
  get moduleName() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleName'`), "-";
  }
  get moduleVersion() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleVersion'`), "0.0.0";
  }
  async getDictionaries() {
    return null;
  }
}
class aa extends sa {
  constructor(e, t, n) {
    super(e, t, n), this.__uiPlugin = !0;
  }
  async getDictionaries() {
    return null;
  }
}
const En = () => {
  const i = document.createElement("span");
  return i.classList.add("side-container"), i.classList.add("hidden"), i;
};
class Gc {
  onIconChanged(e, t, n) {
  }
  onTitleChanged(e, t, n) {
  }
  onStateChanged(e, t, n, s, a) {
  }
}
var Tt, Ei, ve, _e, Pt;
class Wc extends aa {
  constructor() {
    super(...arguments), je(this, Tt), je(this, ve, null), je(this, _e, null), je(this, Pt, []);
  }
  get type() {
    return "button";
  }
  // _container and _button are loaded in PlaybackBar
  get container() {
    return this._container;
  }
  get button() {
    return this._button;
  }
  get interactive() {
    return !0;
  }
  get dynamicWidth() {
    return !1;
  }
  getId() {
    return null;
  }
  get id() {
    return this.config.id || this.getId();
  }
  getButtonName() {
    return null;
  }
  get buttonName() {
    return this.config.name || this.getButtonName() || this.name;
  }
  get ariaLabel() {
    return this.config.ariaLabel || this.getAriaLabel();
  }
  getAriaLabel() {
    return "";
  }
  get tabIndex() {
    return this.config.tabIndex || this.getTabIndex();
  }
  getTabIndex() {
    return null;
  }
  getDescription() {
    return "";
  }
  get description() {
    return this.config.description || this.getDescription();
  }
  get minContainerSize() {
    return this.config.minContainerSize || this.getMinContainerSize();
  }
  getMinContainerSize() {
    return 0;
  }
  setObserver(e) {
    if (e instanceof Gc)
      this._observer = e;
    else if (typeof e.onIconChanged == "function" || typeof e.onTitleChanged == "function" || typeof e.onStateChanged == "function")
      this._observer = e;
    else
      throw new Error("Invalid observer for ButtonPlugin");
  }
  get icon() {
    return this._icon || (this._icon = ""), this._icon;
  }
  set icon(e) {
    typeof e == "string" && (e = Li(e)), this._icon = e, Ln(this, Tt, Ei).call(this);
  }
  get haveIcon() {
    return this.icon !== "";
  }
  get menuIcon() {
    return this._menuIcon || (this._menuIcon = ""), this._menuIcon;
  }
  set menuIcon(e) {
    typeof e == "string" && (e = Li(e)), this._menuIcon = e, Ln(this, Tt, Ei).call(this);
  }
  get haveMenuIcon() {
    return this.menuIcon !== "";
  }
  get isMenuButton() {
    var e, t, n;
    const s = ((e = this.config) == null ? void 0 : e.parentContainer) === "playbackBar" || !((t = this.config) != null && t.parentContainer), a = ((n = this.config) == null ? void 0 : n.parentContainer) === "videoContainer";
    return !s && !a;
  }
  get title() {
    return this._title || "";
  }
  set title(e) {
    var t;
    if (this._title = e, e && this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span") || G(`<span class="button-title-${this.titleSize}"></span>`, this._button);
      n.innerHTML = e;
    } else if (this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span");
      n && this._button.removeChild(n);
    }
    (t = this._observer) != null && t.onTitleChanged && this._observer.onTitleChanged(this, this._title, e);
  }
  // "small", "medium", "large"
  get titleSize() {
    return "medium";
  }
  // "left" or "right"
  get side() {
    var e;
    return ((e = this.config) == null ? void 0 : e.side) || "left";
  }
  get closePopUps() {
    return this.config.closePopUps || this.getClosePopUps();
  }
  getClosePopUps() {
    return !0;
  }
  // "playbackBar" or "videoContainer"
  get parentContainer() {
    var e;
    return ((e = this.config) == null ? void 0 : e.parentContainer) || "playbackBar";
  }
  get className() {
    return "";
  }
  enable() {
    this._enabled = !0, this.show();
  }
  disable() {
    this._enabled = !1, this.hide();
  }
  hide() {
    this._button && (this._button.style.display = "none");
  }
  show() {
    if (this._enabled === !1)
      return;
    const { width: e } = this.player.playbackBar.containerSize;
    this._button && (e > this.minContainerSize || this.parentContainer !== "playbackBar") && (this._button.style.display = null);
  }
  get leftSideContainer() {
    return H(this, ve) || (wi(this, ve, En()), this.container.appendChild(H(this, ve))), H(this, ve);
  }
  get leftSideContainerPresent() {
    return H(this, ve) !== null;
  }
  get rightSideContainer() {
    return H(this, _e) || (wi(this, _e, En()), this.container.appendChild(H(this, _e))), H(this, _e);
  }
  get rightSideContainerPresent() {
    return H(this, _e) !== null;
  }
  get stateText() {
    return null;
  }
  get stateIcon() {
    return null;
  }
  setState({ text: e = null, icon: t = null } = {}) {
    var n, s;
    const a = this._statusText, r = this._statusIcon;
    this._statusText = e, this._statusIcon = t, H(this, Pt).forEach((o) => o(this)), this._statusIcon && (this.icon = this._statusIcon, this.menuIcon = this._statusIcon), this._statusText && (this.title = this._statusText), (s = (n = this._observer) == null ? void 0 : n.onStateChanged) == null || s.call(n, this, a, e, r, t);
  }
  onStateChange(e) {
    typeof e == "function" ? H(this, Pt).push(e) : this.player.log.warn("Invalid callback for ButtonPlugin.onStateChange");
  }
  async action(e, t = null) {
  }
  onResize({ width: e, height: t }) {
    e < this.minContainerSize ? this.hide() : this.show();
  }
  focus() {
    var e;
    (e = this.button) == null || e.focus();
  }
  blur() {
    var e;
    (e = this.button) == null || e.blur();
  }
  isFocus() {
    return this.button === document.activeElement;
  }
}
Tt = /* @__PURE__ */ new WeakSet(), Ei = function() {
  var i;
  const e = this.isMenuButton ? this._menuIcon : this._icon, t = this.isMenuButton && this.haveMenuIcon ? this.menuIcon : this.icon;
  if (t && this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i") || G("<i></i>", this._button);
    n.innerHTML = t;
  } else if (this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i");
    n && this._button.removeChild(n);
  }
  (i = this._observer) != null && i.onIconChanged && this._observer.onIconChanged(this, e, t);
}, ve = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
class ra extends aa {
  get type() {
    return "canvasButton";
  }
  get content() {
    return this._config.content || ["presenter"];
  }
  get ariaLabel() {
    return this._config.ariaLabel || this.getAriaLabel();
  }
  getAriaLabel() {
    return "";
  }
  get tabIndex() {
    return this.config.tabIndex;
  }
  get description() {
    return this.config.description || this.getDescription();
  }
  getDescription() {
    return "";
  }
  get icon() {
    return this._icon;
  }
  set icon(e) {
    this._icon = e;
  }
  get side() {
    var e;
    return ((e = this.config) == null ? void 0 : e.side) || "left";
  }
  get buttonName() {
    return this.name;
  }
  get position() {
    switch (this.side) {
      case "left":
        return si.LEFT;
      case "center":
        return si.CENTER;
      case "right":
        return si.RIGHT;
      default:
        throw new Error(`Invalid CanvasButtonPlugin side set: ${this.side}`);
    }
  }
  async action(e) {
    this.player.log.warn(`Action not implemented in canvas button plugin ${this.name}`);
  }
}
const si = Object.freeze({
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
});
class Zc extends Wc {
  constructor() {
    super(...arguments), this._refreshContent = !0;
  }
  set refreshContent(e) {
    this._refreshContent = e;
  }
  get refreshContent() {
    return this._refreshContent;
  }
  get closeParentPopUp() {
    return this.config.closeParentPopUp || this.getCloseParentPopUp();
  }
  getCloseParentPopUp() {
    return !1;
  }
  async action(e, t) {
    super.action(e, t), this.parentPopUp = t, await this.showPopUp();
  }
  get parentPopUp() {
    return this._parentPopUp;
  }
  set parentPopUp(e) {
    this._parentPopUp = e;
  }
  get popUp() {
    return this._popUp;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  get moveable() {
    return this.config.moveable ?? !1;
  }
  get resizeable() {
    return this.config.resizeable ?? !1;
  }
  get customPopUpClass() {
    return this.config.customPopUpClass ?? "";
  }
  get closeActions() {
    var e, t;
    const n = ((e = this.config.closeActions) == null ? void 0 : e.clickOutside) ?? !0, s = ((t = this.config.closeActions) == null ? void 0 : t.closeButton) ?? !1;
    return {
      clickOutside: n,
      closeButton: s
    };
  }
  get currentContent() {
    return this._currentContent;
  }
  async getContent() {
    return G("<p>Pop Up Button Plugin Content</p>");
  }
  async checkRefreshContent() {
    if (this.refreshContent) {
      const e = await this.getContent();
      this._currentContent.innerHTML = "", Array.from(e.children).forEach((t) => this._currentContent.appendChild(t));
    }
  }
  get popUpType() {
    return this.config.popUpType || "modal";
  }
  hidePopUp() {
    this.player.playbackBar.popUp.isHidden || this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this._keyEventHandler || (this._keyEventHandler = (t) => {
      t.key === "Escape" && this.hidePopUp();
    }, this.button.addEventListener("keydown", this._keyEventHandler));
    const e = this.player.playbackBar.popUp;
    if (e.isHidden || this._contentId !== e.currentContentId) {
      const t = await this.getContent();
      this._currentContent = t, this._contentId = e.show({
        title: this.menuTitle || this.description,
        content: t,
        attachRight: this.popUpType === "timeline" || this.side === "right",
        attachLeft: this.popUpType === "timeline" || this.side === "left",
        parent: this.parentPopUp
      });
    } else
      e.hide();
  }
}
class jc extends sa {
  get type() {
    return "eventLog";
  }
  get events() {
    return [];
  }
  async onEvent(e, t) {
    this.player.log.warn(`${this.name}: onEvent() function is not overwritten.`);
  }
}
const qc = Object.freeze({
  DISABLED: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
  VERBOSE: 5
});
qc.INFO;
function oa(i) {
  return Gt(i).length > 0;
}
function Gt(i) {
  var e;
  const t = ((e = i.frameList) == null ? void 0 : e.frames) || [];
  return t.sort((n, s) => n.time - s.time), t;
}
async function la(i) {
  const e = Gt(i), { videoContainer: t } = i, n = t.isTrimEnabled ? t.trimStart : 0, s = n + Math.trunc(await t.duration()), a = n + Math.trunc(await t.currentTime());
  let r = null;
  e.some((o) => (o.time > a && o.time < s && (r = o), r !== null)), r && await i.videoContainer.setCurrentTime(r.time - n);
}
async function ua(i) {
  const e = Gt(i), { videoContainer: t } = i, n = t.isTrimEnabled ? t.trimStart : 0, s = Math.trunc(await t.currentTime()) + n;
  let a = null;
  if (e.some((r) => (r.time < s && (a = r), r.time >= s)), a) {
    const r = a.time < n ? n : a.time;
    await i.videoContainer.setCurrentTime(r - n);
  }
}
const Qc = "@asicupv/paella-slide-plugins", Yc = "2.2.0", Tn = {
  name: Qc,
  version: Yc
}, Kc = {
  "Show slides": "Mostrar diapositivas del vídeo",
  "go to": "ir a",
  "Seek video to the next slide": "Ir a la siguiente diapositiva",
  "Seek video to the previous slide": "Ir a la diapositiva anterior"
}, Jc = {
  "Show slides": "Show slides",
  "go to": "go to",
  "Seek video to the next slide": "Go to the next slide",
  "Seek video to the previous slide": "Go to the previous slide"
}, Xc = {
  "Show slides": "Folien anzeigen",
  "go to": "gehe zu",
  "Seek video to the next slide": "nächste Folie",
  "Seek video to the previous slide": "vorherige Folie"
}, eh = {
  es: Kc,
  en: Jc,
  de: Xc
};
let ai = null, Wt = class ca extends zc {
  static Get() {
    return ai || (ai = new ca()), ai;
  }
  get moduleName() {
    return Tn.name;
  }
  get moduleVersion() {
    return Tn.version;
  }
  async getDictionaries() {
    return eh;
  }
};
const Gi = `<svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(4.38063e-16,11.4236,8.46191,-3.24491e-16,68.8773,-7740.5)">
        <g id="arrow-right" serif:id="arrow right">
            <path d="M698.36,2.82C698.726,2.08 699.341,1.636 700,1.636C700.659,1.636 701.274,2.08 701.64,2.82C705.27,10.172 713.981,27.811 717.958,35.864C718.361,36.68 718.398,37.73 718.055,38.595C717.712,39.46 717.045,40 716.318,40L683.682,40C682.955,40 682.288,39.46 681.945,38.595C681.602,37.73 681.639,36.68 682.042,35.864C686.019,27.811 694.73,10.172 698.36,2.82Z"/>
        </g>
    </g>
</svg>`, Wi = `<svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(-1.83705e-15,-11.4236,-8.46191,1.36078e-15,452.158,8252.5)">
        <g id="arrow-right" serif:id="arrow right">
            <path d="M698.36,2.82C698.726,2.08 699.341,1.636 700,1.636C700.659,1.636 701.274,2.08 701.64,2.82C705.27,10.172 713.981,27.811 717.958,35.864C718.361,36.68 718.398,37.73 718.055,38.595C717.712,39.46 717.045,40 716.318,40L683.682,40C682.955,40 682.288,39.46 681.945,38.595C681.602,37.73 681.639,36.68 682.042,35.864C686.019,27.811 694.73,10.172 698.36,2.82Z"/>
        </g>
    </g>
</svg>`;
class th extends jc {
  getPluginModuleInstance() {
    return Wt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.arrowSlidesNavigator";
  }
  get events() {
    return [
      $e.PLAYER_LOADED
    ];
  }
  async onEvent(e) {
    var t;
    const n = this.player.getCustomPluginIcon(this.name, "arrowLeftIcon") || Gi, s = this.player.getCustomPluginIcon(this.name, "arrowRightIcon") || Wi;
    console.debug("Loading arrow slides navigation plugin");
    const a = Array.isArray(this.config.target) ? this.config.target : [this.config.target], r = this.player.videoContainer.streamProvider.streams, o = a.find((u) => r[u] !== null), l = r[o];
    if (this.frames = Gt(this.player), l && (t = this.frames) != null && t.length) {
      const u = G('<div class="arrow-slides-navigator"></div>', l.canvas.userArea);
      G(`
            <button class="button-prev"><i>${n}</i></button>
            `, u).addEventListener("click", async (h) => {
        h.stopPropagation(), await ua(this.player);
      }), G(`
            <button class="button-next"><i>${s}</i></button>
            `, u).addEventListener("click", async (h) => {
        h.stopPropagation(), await la(this.player);
      });
    } else
      console.warn("No matching stream content or frames found for arrow slides navigator plugin");
  }
}
const ih = `<svg width="100%" height="100%" viewBox="0 0 33 30" style="stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <path d="M23,29.888L0,29.888L0,7.888L23,7.888L23,29.888ZM11,6.888L8.903,6.888L10.5,0L33,5.817L27,27.888L24,27.388L23.994,20.288L27,20.888L30.519,7.199L11.933,2.394L11,6.888ZM21,9.888L1.969,9.888L1.969,23.888L21,23.888L21,9.888ZM7.912,19.349L10.236,15.813L12.561,18.017L15.757,13.49L19,21.888L3.939,21.888L6.169,17.726L7.912,19.349ZM6.473,15.608C5.647,15.608 4.977,14.966 4.977,14.173C4.977,13.381 5.647,12.739 6.473,12.739C7.299,12.739 7.969,13.381 7.969,14.173C7.969,14.966 7.299,15.608 6.473,15.608Z"/>
</svg>`;
function Pn(i, e) {
  if (e == null || e.forEach((a) => a.classList.remove("selected")), i.classList.add("selected"), this._autoScrollPaused)
    return;
  const t = i.parentElement, n = t.getBoundingClientRect(), s = i.getBoundingClientRect();
  s.left < n.left ? t.scrollLeft -= n.left - s.left : s.right > n.right && (t.scrollLeft += s.right - n.right);
}
let nh = class extends Zc {
  getPluginModuleInstance() {
    return Wt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.frameControlButtonPlugin";
  }
  getAriaLabel() {
    return "Show slides";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  get popUpType() {
    return "timeline";
  }
  async isEnabled() {
    var i, e, t;
    const n = await super.isEnabled();
    return this.frames = (i = this.player.frameList) == null ? void 0 : i.frames, (e = this.frames) == null || e.sort((s, a) => s.time - a.time), n && ((t = this.frames) == null ? void 0 : t.length);
  }
  async action() {
    await super.action();
    const i = await this.player.videoContainer.currentTime();
    let e = null;
    this.frameElements.some((t) => (e = t, t.__data.time > i)), e && e.focus();
  }
  async getContent() {
    const i = this.player.getCustomPluginIcon(this.name, "arrowLeftIcon") || Gi, e = this.player.getCustomPluginIcon(this.name, "arrowRightIcon") || Wi, t = "presentation", n = this.player.frameList.targetContent || this.config.targetContent || t, s = this.config.targetContent || t, a = G('<div class="frame-control-plugin-container"></div>'), r = G(`<button class="btn-left"><i class="button-icon">${i}</i></button>`, a), o = G('<div class="image-list"></div>', a), l = G(`<button class="btn-right"><i class="button-icon">${e}</i></button>`, a), { videoContainer: u } = this.player, h = await u.duration();
    let p = null;
    o.addEventListener("scroll", async (c) => {
      this._autoScrollPaused = !0, p && clearTimeout(p), p = setTimeout(() => {
        this._autoScrollPaused = !1;
      }, 2e3);
    });
    const d = u.isTrimEnabled ? u.trimStart : 0, _ = u.isTrimEnabled ? u.trimEnd : h, m = (c) => (c = this.player.videoContainer.isTrimEnabled ? c - this.player.videoContainer.trimStart : c, Hc.secondsToTime(c < 0 ? 0 : c)), C = (c) => {
      c.key === "Escape" && (c.preventDefault(), c.stopPropagation(), this.hidePopUp(), this.button.focus());
    };
    this.frameElements = this.frames.filter((c, g) => {
      const v = this.frames[g + 1];
      return ((v == null ? void 0 : v.time) >= d || c.time >= d) && c.time <= _;
    }).map((c) => {
      const g = `${this.player.translate("go to")} ${m(c.time)}`, v = G(`
                <button id="frame_${c.id}" aria-label="${g}" title="${g}"><img src="${c.thumb}" alt="${c.id}"/></button>
                `, o);
      return v.__data = c, v.addEventListener("click", async (y) => {
        const w = y.currentTarget.__data.time - d;
        await this.player.videoContainer.setCurrentTime(w >= 0 ? w : 0), Pn.apply(this, [y.currentTarget, this.frameElements]);
      }), v.addEventListener("keydown", C), v.addEventListener("mouseover", async (y) => {
        this._currentFrame && this.player.videoContainer.removeChild(this._currentFrame);
        const w = document.createElement("img");
        w.className = "frame-control-preview", w.src = c.url;
        const O = this.player.videoContainer.getVideoRect(n) || this.player.videoContainer.getVideoRect(s) || this.player.videoContainer.getVideoRect(t) || this.player.videoContainer.getVideoRect(0);
        this._currentFrame = this.player.videoContainer.appendChild(w, O);
      }), v.addEventListener("mouseout", async (y) => {
        this._currentFrame && (this.player.videoContainer.removeChild(this._currentFrame), this._currentFrame = null);
      }), v;
    });
    const b = () => this.frameElements && this.frameElements[0] ? this.frameElements[0].offsetWidth : 0;
    return r.addEventListener("click", () => {
      o.scrollLeft -= b();
    }), l.addEventListener("click", () => {
      o.scrollLeft += b();
    }), r.addEventListener("keydown", C), l.addEventListener("keydown", C), setTimeout(() => this.frameElements[0] && this.frameElements[0].focus(), 50), a;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "photoIcon") || ih;
    const i = 3;
    Je(this.player, $e.TIMEUPDATE, async (e) => {
      var t;
      const n = this.player.videoContainer.isTrimEnabled ? this.player.videoContainer.trimStart : 0;
      let s = this.frameElements && this.frameElements[0];
      (t = this.frameElements) == null || t.some((a) => {
        if (a.__data.time > Math.floor(e.currentTime + n + i))
          return !0;
        s = a;
      }), s && Pn.apply(this, [s, this.frameElements]);
    }), Je(this.player, $e.TRIMMING_CHANGED, (e) => {
      this.refreshContent = !0;
    });
  }
};
class sh extends ra {
  getPluginModuleInstance() {
    return Wt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.nextSlideNavigatorButton";
  }
  getAriaLabel() {
    return this.getDescription();
  }
  getDescription() {
    return this.player.translate("Seek video to the next slide");
  }
  async isEnabled() {
    return await super.isEnabled() && oa(this.player);
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "arrowRightIcon") || Wi;
  }
  async action() {
    await la(this.player);
  }
}
class ah extends ra {
  getPluginModuleInstance() {
    return Wt.Get();
  }
  get name() {
    return super.name || "es.upv.paella.prevSlideNavigatorButton";
  }
  getAriaLabel() {
    return this.getDescription();
  }
  getDescription() {
    return this.player.translate("Seek video to the previous slide");
  }
  async isEnabled() {
    return await super.isEnabled() && oa(this.player);
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "arrowLeftIcon") || Gi;
  }
  async action() {
    await ua(this.player);
  }
}
const rh = [
  {
    plugin: th,
    config: {
      enabled: !1
    }
  },
  {
    plugin: nh,
    config: {
      enabled: !1
    }
  },
  {
    plugin: sh,
    config: {
      enabled: !1
    }
  },
  {
    plugin: ah,
    config: {
      enabled: !1
    }
  }
];
var ha = (i) => {
  throw TypeError(i);
}, da = (i, e, t) => e.has(i) || ha("Cannot " + t), oh = (i, e, t) => (da(i, e, "read from private field"), t ? t.call(i) : e.get(i)), lh = (i, e, t) => e.has(i) ? ha("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), uh = (i, e, t, n) => (da(i, e, "write to private field"), e.set(i, t), t);
const I = Object.freeze({
  PLAY: "paella:play",
  PAUSE: "paella:pause",
  STOP: "paella:stop",
  ENDED: "paella:ended",
  SEEK: "paella:seek",
  FULLSCREEN_CHANGED: "paella:fullscreenchanged",
  ENTER_FULLSCREEN: "paella:enterfullscreen",
  EXIT_FULLSCREEN: "paella:exitfullscreen",
  VOLUME_CHANGED: "paella:volumeChanged",
  TIMEUPDATE: "paella:timeupdate",
  TRIMMING_CHANGED: "paella:trimmingChanged",
  CAPTIONS_CHANGED: "paella:captionsChanged",
  CAPTIONS_ENABLED: "paella:captionsEnabled",
  CAPTIONS_DISABLED: "paella:captionsDisabled",
  BUTTON_PRESS: "paella:buttonPress",
  SHOW_POPUP: "paella:showPopUp",
  HIDE_POPUP: "paella:hidePopUp",
  MANIFEST_LOADED: "paella:manifestLoaded",
  STREAM_LOADED: "paella:streamLoaded",
  PLAYER_LOADED: "paella:playerLoaded",
  PLAYER_UNLOADED: "paella:playerUnloaded",
  RESIZE: "paella:resize",
  RESIZE_END: "paella:resizeEnd",
  LAYOUT_CHANGED: "paella:layoutChanged",
  PLAYBACK_RATE_CHANGED: "paella:playbackRateChanged",
  VIDEO_QUALITY_CHANGED: "paella:videoQualityChanged",
  HIDE_UI: "paella:hideUI",
  SHOW_UI: "paella:showUI",
  COOKIE_CONSENT_CHANGED: "paella:cookieConsentChanged",
  LOG: "paella:log"
});
function In(i, e, t, n = !0) {
  return i.__eventListeners__ = i.__eventListeners__ || {}, Array.isArray(e) || (e = [e]), e.forEach((s) => {
    i.__eventListeners__[s] = i.__eventListeners__[s] || [], i.__eventListeners__[s].push({
      callback: t,
      unregisterOnUnload: n
    });
  }), t;
}
var It;
class pa {
  constructor(e) {
    lh(this, It, null), uh(this, It, e);
  }
  get player() {
    return oh(this, It);
  }
}
It = /* @__PURE__ */ new WeakMap();
class ga extends pa {
  constructor(e, t) {
    super(e), this._name = t;
  }
  getPluginModuleInstance() {
    return null;
  }
  get config() {
    return this._config;
  }
  get type() {
    return "none";
  }
  get order() {
    var e;
    return ((e = this._config) == null ? void 0 : e.order) || 0;
  }
  get description() {
    var e;
    return ((e = this._config) == null ? void 0 : e.description) || "";
  }
  get name() {
    return this._name;
  }
  async isEnabled() {
    var e;
    return (e = this.config) == null ? void 0 : e.enabled;
  }
  async load() {
  }
  async unload() {
  }
}
let ch = class extends pa {
  get moduleName() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleName'`), "-";
  }
  get moduleVersion() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleVersion'`), "0.0.0";
  }
  async getDictionaries() {
    return null;
  }
}, Zi = class extends ga {
  get type() {
    return "data";
  }
  get context() {
    return this.config.context || [];
  }
  async read() {
    throw Error(`DataPlugin.read() not implemented in data plugin '${this.name}'`);
  }
  async write() {
    throw Error(`DataPlugin.write() not implemented in data plugin '${this.name}'`);
  }
  async remove() {
    throw Error(`DataPlugin.remove() not implemented in data plugin '${this.name}'`);
  }
}, hh = class extends ga {
  get type() {
    return "eventLog";
  }
  get events() {
    return [];
  }
  async onEvent(e, t) {
    this.player.log.warn(`${this.name}: onEvent() function is not overwritten.`);
  }
};
const ma = Object.freeze({
  DISABLED: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
  VERBOSE: 5
});
ma.INFO;
const dh = "2.2.0", ph = {
  version: dh
};
let ri = null;
class Oe extends ch {
  static Get() {
    return ri || (ri = new Oe()), ri;
  }
  get moduleName() {
    return "paella-user-tracking";
  }
  get moduleVersion() {
    return ph.version;
  }
}
let gh = class extends Zi {
  getPluginModuleInstance() {
    return Oe.Get();
  }
  get name() {
    return super.name || "es.upv.paella.analytics.userTrackingDataPlugin";
  }
  async load() {
    const e = this.config.trackingId, t = this.config.domain || "auto";
    e ? (this.player.log.debug("Google Analytics Enabled"), function(n, s, a, r, o, l, u) {
      n.GoogleAnalyticsObject = o, n[o] = n[o] || function() {
        (n[o].q = n[o].q || []).push(arguments);
      }, n[o].l = 1 * /* @__PURE__ */ new Date(), l = s.createElement(a), u = s.getElementsByTagName(a)[0], l.async = 1, l.src = r, u.parentNode.insertBefore(l, u);
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "__gaTracker"), __gaTracker("create", e, t), __gaTracker("send", "pageview")) : this.player.log.debug("No Google Tracking ID found in config file. Disabling Google Analytics");
  }
  async write(e, { id: t }, n) {
    if (this.config.category === void 0 || this.config.category === !0) {
      const s = this.config.category || "PaellaPlayer", a = n.event, r = {
        videoId: t,
        plugin: n.plugin
      };
      try {
        JSON.stringify(n.params), r.params = n.params;
      } catch {
      }
      const o = JSON.stringify(r);
      __gaTracker(" send", "event", s, a, o);
    }
  }
}, mh = class extends Zi {
  getPluginModuleInstance() {
    return Oe.Get();
  }
  get name() {
    return super.name || "es.upv.paella.matomo.userTrackingDataPlugin";
  }
  async isEnabled() {
    return await super.isEnabled() ? (this.matomoGlobalLoaded = this.config.matomoGlobalLoaded ?? !1, this.server = this.config.server, this.siteId = this.config.siteId, this.events = this.config.events, !this.matomoGlobalLoaded && !(this.server && this.siteId) ? (this.player.log.warn("Matomo plugin: Plugin is enabled, but is not configured correctly. Please configue `matomoGlobalLoaded`, `server`and `siteId` parameters."), !1) : !0) : !1;
  }
  async getCurrentUserId() {
    return null;
  }
  async trackCustomDimensions() {
    const i = await this.getTemplateVars(), e = this.config.customDimensions ?? {};
    try {
      Object.entries(e).forEach(([t, n]) => {
        const s = this.applyTemplate(n, i);
        _paq.push(["setCustomDimension", t, s]), this.player.log.debug(`Matomo plugin: setting custom dimension id=${t} to '${s}'`);
      });
    } catch {
    }
  }
  async getTemplateVars(i) {
    let e = this.getEventData(i);
    return {
      videoId: this.player._videoId,
      metadata: this.player.videoManifest.metadata,
      event: (i == null ? void 0 : i.event) || "",
      eventData: e
    };
  }
  getEventData(i) {
    switch (i == null ? void 0 : i.event) {
      case I.SEEK:
        return Math.round(i.params.newTime);
      case I.VOLUME_CHANGED:
        return i.params.volume * 100;
      case I.BUTTON_PRESS:
        return i.params.plugin.name;
      case I.SHOW_POPUP:
        return i.params.plugin.name;
      case I.HIDE_POPUP:
        return i.params.plugin.name;
      case I.RESIZE_END:
        return `${i.params.size.w}x${i.params.size.h}`;
      case I.LAYOUT_CHANGED:
        return i.params.layoutId;
      case I.PLAYBACK_RATE_CHANGED:
        return i.params.newPlaybackRate;
      case I.CAPTIONS_ENABLED:
        return i.params.language;
    }
    return "";
  }
  async load() {
    const i = this.config.heartBeatTime || 15;
    var e = window._paq = window._paq || [];
    if (e.push(["requireCookieConsent"]), In(this.player, I.COOKIE_CONSENT_CHANGED, () => {
      this.player.log.debug("Matomo: Cookie consent changed."), this.player.cookieConsent.getConsentForType(this.config.cookieType) ? e.push(["rememberCookieConsentGiven"]) : e.push(["forgetCookieConsentGiven"]);
    }), this.matomoGlobalLoaded) {
      var e = window._paq = window._paq || [];
      this.player.log.debug("Assuming Matomo analytics is initialized globaly."), this.config.server && this.player.log.warn("Matomo plugin: `server` parameter is defined, but never used because Matomo is loaded globaly in the page. Is it an error? Please check it."), this.config.siteId && this.player.log.warn("Matomo plugin: `siteId` parameter is defined, but never used because Matomo is loaded globaly in the page. Is it an error? Please check it.");
    } else {
      const t = this.server, n = this.siteId;
      this.player.log.debug("Matomo analytics plugin enabled."), this.trackCustomDimensions();
      const s = await this.getCurrentUserId();
      s && e.push(["setUserId", s]), e.push(["trackPageView"]), e.push(["enableLinkTracking"]), function() {
        var a = t;
        e.push(["setTrackerUrl", a + "matomo.php"]), e.push(["setSiteId", n]);
        var r = document, o = r.createElement("script"), l = r.getElementsByTagName("script")[0];
        o.type = "text/javascript", o.async = !0, o.src = a + "matomo.js", l.parentNode.insertBefore(o, l);
      }();
    }
    e.push(["enableHeartBeatTimer", i]), this.trackCustomDimensions(), In(this.player, I.STREAM_LOADED, () => {
      e.push(["MediaAnalytics::scanForMedia"]);
    });
  }
  applyTemplate(i, e) {
    return i.replace(/\${[^{]*}/g, (t) => t.substring(2, t.length - 1).split(".").reduce((n, s) => n[s], e));
  }
  async write(i, { id: e }, t) {
    if (this.events) {
      const n = this.events.category || "PaellaPlayer", s = this.events.action || "${event}", a = this.events.name || "${eventData}", r = await this.getTemplateVars(t), o = this.applyTemplate(n, r), l = this.applyTemplate(s, r), u = this.applyTemplate(a, r);
      _paq.push(["trackEvent", o, l, u]), this.player.log.debug(`Matomo plugin: track event category='${o}', action='${l}', name='${u}'`);
    }
  }
}, yh = class extends Zi {
  getPluginModuleInstance() {
    return Oe.Get();
  }
  get name() {
    return super.name || "es.upv.paella.debug.userTrackingDataPlugin";
  }
  async write(e, { id: t }, n) {
    console.log(`id: ${t}`, e, n);
  }
};
const fh = (i) => i.map((e) => I[e]);
let vh = class extends hh {
  getPluginModuleInstance() {
    return Oe.Get();
  }
  get name() {
    return super.name || "es.upv.paella.userEventTracker";
  }
  get events() {
    return this.config.events ? fh(this.config.events) : [
      I.PLAY,
      I.PAUSE,
      I.SEEK,
      I.STOP,
      I.ENDED,
      I.FULLSCREEN_CHANGED,
      I.VOLUME_CHANGED,
      I.BUTTON_PRESS,
      I.RESIZE_END
    ];
  }
  async onEvent(i, e) {
    var t;
    const n = this.config.context || "userTracking", s = this.player.videoId;
    if (i === I.LOG && e.severity <= ma[this.config.logLevel])
      this.player.data && await this.player.data.write(
        n,
        { id: s },
        {
          event: i,
          params: e
        }
      );
    else if (i !== I.LOG && this.player.data) {
      if (e.plugin) {
        const { name: r, config: o } = e.plugin;
        e.plugin = { name: r, config: o };
      }
      const a = { event: i, params: e };
      switch (i) {
        case I.SHOW_POPUP:
        case I.HIDE_POPUP:
        case I.BUTTON_PRESS:
          a.plugin = ((t = e.plugin) == null ? void 0 : t.name) || null;
      }
      await this.player.data.write(
        n,
        { id: s },
        a
      );
    }
  }
};
const _h = [
  {
    plugin: gh,
    config: {
      enabled: !0
    }
  },
  {
    plugin: mh,
    config: {
      enabled: !0
    }
  },
  {
    plugin: yh,
    config: {
      enabled: !0
    }
  },
  {
    plugin: vh,
    config: {
      enabled: !0
    }
  }
];
var ya = (i) => {
  throw TypeError(i);
}, ji = (i, e, t) => e.has(i) || ya("Cannot " + t), M = (i, e, t) => (ji(i, e, "read from private field"), t ? t.call(i) : e.get(i)), ke = (i, e, t) => e.has(i) ? ya("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Ut = (i, e, t, n) => (ji(i, e, "write to private field"), e.set(i, t), t), Sn = (i, e, t) => (ji(i, e, "access private method"), t);
function Ch(i) {
  i.__hideTimerPaused__ = !1;
}
function kn(i, { excludedTags: e = null } = {}) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = ["script"];
  return e && n.push(...e), n.flatMap((s) => Array.from(t.getElementsByTagName(s))).forEach((s) => {
    s.parentElement.removeChild(s);
  }), t.innerHTML;
}
var St;
let qi = class {
  constructor(i) {
    ke(this, St, null), Ut(this, St, i);
  }
  get player() {
    return M(this, St);
  }
};
St = /* @__PURE__ */ new WeakMap();
function wh({ tag: i = "div", attributes: e = {}, children: t = "", innerText: n = "", parent: s = null }) {
  const a = document.createElement(i);
  a.innerText = n;
  for (let r in e)
    a.setAttribute(r, e[r]);
  return a.innerHTML = t, s && s.appendChild(a), a;
}
function Ee(i, e = null) {
  const t = document.createElement("div");
  t.innerHTML = i;
  const n = t.children[0];
  return e && e.appendChild(n), n;
}
var K;
class bh extends qi {
  constructor(e, { tag: t = "div", attributes: n = [], children: s = "", parent: a = null }) {
    super(e), ke(this, K, null), Ut(this, K, wh({ tag: t, attributes: n, children: s, parent: a })), Object.defineProperty(this, t, {
      get: () => M(this, K)
    });
  }
  get element() {
    return M(this, K);
  }
  get parent() {
    return M(this, K).parentElement;
  }
  hide() {
    this.element.style.display = "none";
  }
  show(e = "block") {
    this.element.style.display = null;
  }
  get isVisible() {
    const e = window.getComputedStyle(this.element);
    return e.display !== "none" && e.display !== "";
  }
  setAttribute(e, t) {
    M(this, K).setAttribute(e, t);
  }
  removeFromParent() {
    var e;
    (e = M(this, K).parentElement) == null || e.removeChild(M(this, K));
  }
  setParent(e) {
    this.removeFromParent(), e.appendChild(M(this, K));
  }
}
K = /* @__PURE__ */ new WeakMap();
class fa extends qi {
  constructor(e, t) {
    super(e), this._name = t;
  }
  getPluginModuleInstance() {
    return null;
  }
  get config() {
    return this._config;
  }
  get type() {
    return "none";
  }
  get order() {
    var e;
    return ((e = this._config) == null ? void 0 : e.order) || 0;
  }
  get description() {
    var e;
    return ((e = this._config) == null ? void 0 : e.description) || "";
  }
  get name() {
    return this._name;
  }
  async isEnabled() {
    var e;
    return (e = this.config) == null ? void 0 : e.enabled;
  }
  async load() {
  }
  async unload() {
  }
}
class Lh extends qi {
  get moduleName() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleName'`), "-";
  }
  get moduleVersion() {
    return this.player.log.warn(`Incomplete player module definition: '${__filename}.moduleVersion'`), "0.0.0";
  }
  async getDictionaries() {
    return null;
  }
}
class va extends fa {
  constructor(e, t, n) {
    super(e, t, n), this.__uiPlugin = !0;
  }
  async getDictionaries() {
    return null;
  }
}
const An = () => {
  const i = document.createElement("span");
  return i.classList.add("side-container"), i.classList.add("hidden"), i;
};
class Eh {
  onIconChanged(e, t, n) {
  }
  onTitleChanged(e, t, n) {
  }
  onStateChanged(e, t, n, s, a) {
  }
}
var kt, Ti, Ce, we, At;
class Qi extends va {
  constructor() {
    super(...arguments), ke(this, kt), ke(this, Ce, null), ke(this, we, null), ke(this, At, []);
  }
  get type() {
    return "button";
  }
  // _container and _button are loaded in PlaybackBar
  get container() {
    return this._container;
  }
  get button() {
    return this._button;
  }
  get interactive() {
    return !0;
  }
  get dynamicWidth() {
    return !1;
  }
  getId() {
    return null;
  }
  get id() {
    return this.config.id || this.getId();
  }
  getButtonName() {
    return null;
  }
  get buttonName() {
    return this.config.name || this.getButtonName() || this.name;
  }
  get ariaLabel() {
    return this.config.ariaLabel || this.getAriaLabel();
  }
  getAriaLabel() {
    return "";
  }
  get tabIndex() {
    return this.config.tabIndex || this.getTabIndex();
  }
  getTabIndex() {
    return null;
  }
  getDescription() {
    return "";
  }
  get description() {
    return this.config.description || this.getDescription();
  }
  get minContainerSize() {
    return this.config.minContainerSize || this.getMinContainerSize();
  }
  getMinContainerSize() {
    return 0;
  }
  setObserver(e) {
    if (e instanceof Eh)
      this._observer = e;
    else if (typeof e.onIconChanged == "function" || typeof e.onTitleChanged == "function" || typeof e.onStateChanged == "function")
      this._observer = e;
    else
      throw new Error("Invalid observer for ButtonPlugin");
  }
  get icon() {
    return this._icon || (this._icon = ""), this._icon;
  }
  set icon(e) {
    typeof e == "string" && (e = kn(e)), this._icon = e, Sn(this, kt, Ti).call(this);
  }
  get haveIcon() {
    return this.icon !== "";
  }
  get menuIcon() {
    return this._menuIcon || (this._menuIcon = ""), this._menuIcon;
  }
  set menuIcon(e) {
    typeof e == "string" && (e = kn(e)), this._menuIcon = e, Sn(this, kt, Ti).call(this);
  }
  get haveMenuIcon() {
    return this.menuIcon !== "";
  }
  get isMenuButton() {
    var e, t, n;
    const s = ((e = this.config) == null ? void 0 : e.parentContainer) === "playbackBar" || !((t = this.config) != null && t.parentContainer), a = ((n = this.config) == null ? void 0 : n.parentContainer) === "videoContainer";
    return !s && !a;
  }
  get title() {
    return this._title || "";
  }
  set title(e) {
    var t;
    if (this._title = e, e && this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span") || Ee(`<span class="button-title-${this.titleSize}"></span>`, this._button);
      n.innerHTML = e;
    } else if (this._button instanceof HTMLElement) {
      const n = this._button.querySelector("span");
      n && this._button.removeChild(n);
    }
    (t = this._observer) != null && t.onTitleChanged && this._observer.onTitleChanged(this, this._title, e);
  }
  // "small", "medium", "large"
  get titleSize() {
    return "medium";
  }
  // "left" or "right"
  get side() {
    var e;
    return ((e = this.config) == null ? void 0 : e.side) || "left";
  }
  get closePopUps() {
    return this.config.closePopUps || this.getClosePopUps();
  }
  getClosePopUps() {
    return !0;
  }
  // "playbackBar" or "videoContainer"
  get parentContainer() {
    var e;
    return ((e = this.config) == null ? void 0 : e.parentContainer) || "playbackBar";
  }
  get className() {
    return "";
  }
  enable() {
    this._enabled = !0, this.show();
  }
  disable() {
    this._enabled = !1, this.hide();
  }
  hide() {
    this._button && (this._button.style.display = "none");
  }
  show() {
    if (this._enabled === !1)
      return;
    const { width: e } = this.player.playbackBar.containerSize;
    this._button && (e > this.minContainerSize || this.parentContainer !== "playbackBar") && (this._button.style.display = null);
  }
  get leftSideContainer() {
    return M(this, Ce) || (Ut(this, Ce, An()), this.container.appendChild(M(this, Ce))), M(this, Ce);
  }
  get leftSideContainerPresent() {
    return M(this, Ce) !== null;
  }
  get rightSideContainer() {
    return M(this, we) || (Ut(this, we, An()), this.container.appendChild(M(this, we))), M(this, we);
  }
  get rightSideContainerPresent() {
    return M(this, we) !== null;
  }
  get stateText() {
    return null;
  }
  get stateIcon() {
    return null;
  }
  setState({ text: e = null, icon: t = null } = {}) {
    var n, s;
    const a = this._statusText, r = this._statusIcon;
    this._statusText = e, this._statusIcon = t, M(this, At).forEach((o) => o(this)), this._statusIcon && (this.icon = this._statusIcon, this.menuIcon = this._statusIcon), this._statusText && (this.title = this._statusText), (s = (n = this._observer) == null ? void 0 : n.onStateChanged) == null || s.call(n, this, a, e, r, t);
  }
  onStateChange(e) {
    typeof e == "function" ? M(this, At).push(e) : this.player.log.warn("Invalid callback for ButtonPlugin.onStateChange");
  }
  async action(e, t = null) {
  }
  onResize({ width: e, height: t }) {
    e < this.minContainerSize ? this.hide() : this.show();
  }
  focus() {
    var e;
    (e = this.button) == null || e.focus();
  }
  blur() {
    var e;
    (e = this.button) == null || e.blur();
  }
  isFocus() {
    return this.button === document.activeElement;
  }
}
kt = /* @__PURE__ */ new WeakSet(), Ti = function() {
  var i;
  const e = this.isMenuButton ? this._menuIcon : this._icon, t = this.isMenuButton && this.haveMenuIcon ? this.menuIcon : this.icon;
  if (t && this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i") || Ee("<i></i>", this._button);
    n.innerHTML = t;
  } else if (this._button instanceof HTMLElement) {
    const n = this._button.querySelector("i");
    n && this._button.removeChild(n);
  }
  (i = this._observer) != null && i.onIconChanged && this._observer.onIconChanged(this, e, t);
}, Ce = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap();
class _a extends va {
  get type() {
    return "canvasButton";
  }
  get content() {
    return this._config.content || ["presenter"];
  }
  get ariaLabel() {
    return this._config.ariaLabel || this.getAriaLabel();
  }
  getAriaLabel() {
    return "";
  }
  get tabIndex() {
    return this.config.tabIndex;
  }
  get description() {
    return this.config.description || this.getDescription();
  }
  getDescription() {
    return "";
  }
  get icon() {
    return this._icon;
  }
  set icon(e) {
    this._icon = e;
  }
  get side() {
    var e;
    return ((e = this.config) == null ? void 0 : e.side) || "left";
  }
  get buttonName() {
    return this.name;
  }
  get position() {
    switch (this.side) {
      case "left":
        return oi.LEFT;
      case "center":
        return oi.CENTER;
      case "right":
        return oi.RIGHT;
      default:
        throw new Error(`Invalid CanvasButtonPlugin side set: ${this.side}`);
    }
  }
  async action(e) {
    this.player.log.warn(`Action not implemented in canvas button plugin ${this.name}`);
  }
}
const oi = Object.freeze({
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
});
class Th extends bh {
  constructor(e, t, n) {
    super(t, { tag: e, parent: n }), this.element.className = "video-canvas", this._userArea = null, this._buttonsArea = Ee(`
        <div class="button-area">
        </div>
        `, this.element);
  }
  async loadCanvas(e) {
    throw Error(`${this.name}: loadCanvas() not implemented`);
  }
  get userArea() {
    return this._userArea || (this._userArea = document.createElement("div"), this._userArea.className = "user-area", this.element.appendChild(this._userArea)), this._userArea;
  }
  get buttonsArea() {
    return this._buttonsArea;
  }
  showButtons() {
    this.buttonsArea.style.display = null;
  }
  hideButtons() {
    this.buttonsArea.style.display = "none";
  }
}
class Ph extends fa {
  get type() {
    return "canvas";
  }
  get canvasType() {
    return "";
  }
  isCompatible(e) {
    return Array.isArray(e == null ? void 0 : e.canvas) ? e.canvas.indexOf(this.canvasType) !== -1 : e.canvas === this.canvasType;
  }
  getCanvasInstance(e) {
    throw Error(`${this.name} canvas plugin: getCanvasInstance() not implemented`);
  }
}
class Ih extends Qi {
  constructor() {
    super(...arguments), this._refreshContent = !0;
  }
  set refreshContent(e) {
    this._refreshContent = e;
  }
  get refreshContent() {
    return this._refreshContent;
  }
  get closeParentPopUp() {
    return this.config.closeParentPopUp || this.getCloseParentPopUp();
  }
  getCloseParentPopUp() {
    return !1;
  }
  async action(e, t) {
    super.action(e, t), this.parentPopUp = t, await this.showPopUp();
  }
  get parentPopUp() {
    return this._parentPopUp;
  }
  set parentPopUp(e) {
    this._parentPopUp = e;
  }
  get popUp() {
    return this._popUp;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  get moveable() {
    return this.config.moveable ?? !1;
  }
  get resizeable() {
    return this.config.resizeable ?? !1;
  }
  get customPopUpClass() {
    return this.config.customPopUpClass ?? "";
  }
  get closeActions() {
    var e, t;
    const n = ((e = this.config.closeActions) == null ? void 0 : e.clickOutside) ?? !0, s = ((t = this.config.closeActions) == null ? void 0 : t.closeButton) ?? !1;
    return {
      clickOutside: n,
      closeButton: s
    };
  }
  get currentContent() {
    return this._currentContent;
  }
  async getContent() {
    return Ee("<p>Pop Up Button Plugin Content</p>");
  }
  async checkRefreshContent() {
    if (this.refreshContent) {
      const e = await this.getContent();
      this._currentContent.innerHTML = "", Array.from(e.children).forEach((t) => this._currentContent.appendChild(t));
    }
  }
  get popUpType() {
    return this.config.popUpType || "modal";
  }
  hidePopUp() {
    this.player.playbackBar.popUp.isHidden || this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this._keyEventHandler || (this._keyEventHandler = (t) => {
      t.key === "Escape" && this.hidePopUp();
    }, this.button.addEventListener("keydown", this._keyEventHandler));
    const e = this.player.playbackBar.popUp;
    if (e.isHidden || this._contentId !== e.currentContentId) {
      const t = await this.getContent();
      this._currentContent = t, this._contentId = e.show({
        title: this.menuTitle || this.description,
        content: t,
        attachRight: this.popUpType === "timeline" || this.side === "right",
        attachLeft: this.popUpType === "timeline" || this.side === "left",
        parent: this.parentPopUp
      });
    } else
      e.hide();
  }
}
const Sh = (i) => i ? `<span class="menu-title">${i}</span>` : "", kh = (i) => i ? `<i class="menu-icon">${i}</i>` : "", Ah = (i) => i ? `aria-label="${i}"` : "", xh = (i) => i ? `<span class="state-text">${i}</span>` : "", Dh = (i) => i ? `<i class="state-icon">${i}</i>` : "", $h = (i, e) => i || e ? `<span class="button-state">${xh(i)}${Dh(e)}</span>` : "";
function Mh({ itemData: i, buttonType: e, container: t, allItems: n, menuName: s, selectedItems: a, itemPlugin: r }) {
  const { id: o = 0, title: l = null, icon: u = null, iconText: h = null, showTitle: p = !0, stateText: d = null, stateIcon: _ = null } = i, m = this, C = document.createElement("li"), b = a[o] ?? !1, c = Ee(`
		<button class="menu-button-item${b ? " selected" : ""}" ${Ah(l)} data-id="${o}"" id="${m.name}_menuItem_${o}">
			${kh(u)}
			${p ? Sh(l) : ""}
			${d || _ ? $h(d, _) : ""}
		</button>
	`);
  return r && (r._button = c), c.addEventListener("keydown", (g) => {
    var v;
    const y = () => {
      g.stopPropagation(), g.preventDefault();
    };
    if (g.key === "ArrowUp") {
      const w = c.dataPrev;
      w == null || w.focus(), y();
    } else if (g.key === "ArrowDown") {
      const w = c.dataNext;
      w == null || w.focus(), y();
    } else if (g.key === "Tab") {
      const w = g.shiftKey ? g.target.dataPrev : g.target.dataNext;
      w == null || w.focus(), y();
    } else g.key === "Escape" && (this.player.playbackBar.popUp.pop() ? (v = m.button) == null || v.focus() : this.focus(), y());
  }), c.addEventListener("click", async (g) => {
    if (e === "check") {
      const v = n.find((y) => y.id === o);
      a[o] = !a[o], m.itemSelected(v, n);
    } else if (e === "radio") {
      a[o] = !0;
      let v = null;
      n.forEach((y) => {
        y.id === o ? v = y : a[y.id] = !1;
      }), m.itemSelected(v, n);
    } else {
      const v = n.find((y) => y.id === o);
      m.itemSelected(v, n);
    }
    await m.checkRefreshContent(), g.stopPropagation(), m.closeOnSelect && (m.closeMenu(), Ch(m.player));
  }), C.appendChild(c), t.appendChild(C), C;
}
class Nh extends Ih {
  get closeOnSelect() {
    return this.config.closeOnSelect === void 0 && (this.buttonType !== "check" ? this.config.closeOnSelect = !0 : this.config.closeOnSelect = !1), this.config.closeOnSelect;
  }
  setSelected(e, t) {
    this._selectedItems && (this._selectedItems[e] = t);
  }
  async getContent() {
    var e, t;
    const n = (e = document.activeElement) == null ? void 0 : e.id, s = Ee("<menu></menu>");
    this._content = s;
    const a = await this.getMenu();
    this._menuItems = a, this._selectedItems || (this._selectedItems = {}, this._menuItems.forEach((l) => {
      l.selected !== void 0 && l.selected !== null && (this._selectedItems[l.id] = l.selected);
    }));
    const r = self.crypto.randomUUID(), o = a.map((l) => Mh.apply(this, [{
      itemData: l,
      buttonType: typeof this.buttonType == "function" ? this.buttonType() : this.buttonType,
      container: s,
      allItems: a,
      menuName: r,
      selectedItems: this._selectedItems,
      itemPlugin: l.plugin
    }]));
    return o.forEach((l, u, h) => {
      const p = l.querySelector("button");
      let d = h[u + 1], _ = h[u - 1];
      u === h.length - 1 && (d = h[0]), u === 0 && (_ = h[h.length - 1]), p.dataNext = d == null ? void 0 : d.querySelector("button"), p.dataPrev = _ == null ? void 0 : _.querySelector("button");
    }), this._firstItem = (t = o[0]) == null ? void 0 : t.querySelector("button"), n && setTimeout(() => {
      var l;
      (l = document.getElementById(n)) == null || l.focus();
    }, 10), s;
  }
  get menuTitle() {
    return this.config.menuTitle || null;
  }
  async getMenu() {
    return [
      { id: 0, title: "Option 1" },
      { id: 1, title: "Option 2" },
      { id: 2, title: "Option 3" },
      { id: 3, title: "Option 4" },
      { id: 4, title: "Option 5" }
    ];
  }
  // Returns the menuItems with the current menu state
  get menuItems() {
    return this._menuItems;
  }
  // If showTitles is false, then the 'title' attribute of the menu
  // items is used only as aria-label.
  // If the menu item has no icon, then the `showTitles` property is ignored
  get showTitles() {
    return !0;
  }
  get buttonType() {
    return "radio";
  }
  itemSelected(e, t) {
    this.player.log.warn(`MenuButtonPlugin (${this.name}): itemSelected() function not implemented.`);
  }
  closeMenu() {
    this.player.playbackBar.popUp.hide();
  }
  async showPopUp() {
    this.refreshContent = !0, await super.showPopUp(), this.player.containsFocus && this._firstItem && this._firstItem.focus();
  }
}
const Uh = Object.freeze({
  DISABLED: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
  VERBOSE: 5
});
Uh.INFO;
const Rh = "@asicupv/paella-zoom-plugin", Oh = "2.2.0", xn = {
  name: Rh,
  version: Oh
}, Bh = {
  "Zoom in": "Zoom in",
  "Zoom out": "Zoom out",
  "Show video zoom options": "Zoom-Optionen anzeigen",
  "Use Alt+Scroll to zoom": "Zum Zoomen Alt+Rollen drücken"
}, Vh = {
  "Zoom in": "Zoom in",
  "Zoom out": "Zoom out",
  "Show video zoom options": "Show video zoom options",
  "Use Alt+Scroll to zoom": "Use Alt+Scroll to zoom"
}, Fh = {
  "Zoom in": "Ampliar zoom del vídeo",
  "Zoom out": "Reducir zoom de vídeo",
  "Show video zoom options": "Mostrar opciones de zoom de vídeo",
  "Use Alt+Scroll to zoom": "Usar Alt+Desplazamiento para hacer zoom"
}, Hh = {
  de: Bh,
  en: Vh,
  es: Fh
};
let li = null;
class re extends Lh {
  static Get() {
    return li || (li = new re()), li;
  }
  get moduleName() {
    return xn.name;
  }
  get moduleVersion() {
    return xn.version;
  }
  async getDictionaries() {
    return Hh;
  }
}
function ht(i, e, t) {
  const n = {
    w: i.offsetWidth,
    h: i.offsetHeight
  }, s = {
    left: n.w / 2,
    top: n.h / 2
  };
  e.style.width = `${t * 100}%`, e.style.height = `${t * 100}%`;
  const a = {
    left: e.offsetLeft,
    top: e.offsetTop,
    w: e.offsetWidth,
    h: e.offsetHeight
  }, r = {
    left: a.w / 2,
    top: a.h / 2
  }, o = {
    left: r.left - s.left,
    top: r.top - s.top
  };
  return t == 1 ? (e.style.left = "0px", e.style.top = "0px", o.left = s.left, o.top = s.top) : (e.style.left = `-${o.left}px`, e.style.top = `-${o.top}px`), o;
}
function zh(i, e, t) {
  const n = {
    left: e.left + t.left,
    top: e.top + t.top
  }, s = i.parentElement;
  return i.style.top = `-${n.top}px`, i.offsetHeight + i.offsetTop - s.offsetHeight < 0 && (n.top = e.top), i.style.left = `-${n.left}px`, i.offsetWidth + i.offsetLeft - s.offsetWidth < 0 && (n.left = e.left), n;
}
class se extends Th {
  constructor(e, t, n) {
    super("div", e, t), this.config = n, this._maxZoom = this.config.maxZoom || 4, this._showButtons = this.config.showButtons !== void 0 ? this.config.showButtons : !0;
  }
  async loadCanvas(e) {
    this.currentZoom = 1, this._videoPlayer = e, e.element.style.width = "100%", e.element.style.height = "100%", e.element.style.position = "absolute", e.element.style.top = "0", e.element.style.left = "0", this.element.style.overflow = "hidden", this.element.style.position = "relative";
    const t = (h) => {
      if (h.stopPropagation(), !h.altKey) {
        this.showAltKeyMessage();
        return;
      }
      this.hideAltKeyMessage();
      const p = h.deltaY !== void 0 ? h.deltaY * 0.1 : h.detail * 4, d = this.currentZoom + p * -0.01;
      d > 1 && d <= this._maxZoom ? (this.currentZoom = d, this._playerCenter = ht(this.element, this._videoPlayer.element, this.currentZoom)) : d <= 1 && (this.currentZoom = 1, this._playerCenter = ht(this.element, this._videoPlayer.element, this.currentZoom)), h.preventDefault();
    };
    this.element.addEventListener("DOMMouseScroll", t), this.element.addEventListener("mousewheel", t);
    let n = !1, s = !1, a = null;
    const r = () => n = !0, o = () => n = !1, l = (h) => {
      s && (h.stopPropagation(), h.preventDefault());
    };
    this.element.addEventListener("mousedown", r), this.element.addEventListener("mouseleave", o), this.element.addEventListener("mouseup", o), this.element.addEventListener("click", l), this.element.addEventListener("mouseup", l), this.element.addEventListener("mousemove", (h) => {
      if (n && this._playerCenter) {
        a === null && (a = { left: h.clientX, top: h.clientY }), s = !0;
        const p = {
          left: a.left - h.clientX,
          top: a.top - h.clientY
        };
        this.currentZoom == 1 ? this._playerCenter = { left: 0, top: 0 } : this._playerCenter = zh(this._videoPlayer.element, this._playerCenter, p), a = { left: h.clientX, top: h.clientY };
      } else
        s = !1, a = null;
    });
    const u = this.player.translate("Use Alt+Scroll to zoom");
    this._zoomMessage = Ee(`
            <div class="zoom-message">${u}</div>
        `, this.element), this._zoomMessage.style.display = "none";
  }
  showAltKeyMessage() {
    this._hideTimeout && clearTimeout(this._hideTimeout), this._zoomMessage.style.display = "", this._hideTimeout = setTimeout(() => {
      this.hideAltKeyMessage();
    }, 2e3);
  }
  hideAltKeyMessage() {
    this._zoomMessage.style.display = "none", this._hideTimeout = null;
  }
  zoomIn() {
    const e = this.currentZoom * 1.1;
    e < this._maxZoom && (this.currentZoom = e, this._playerCenter = ht(this.element, this._videoPlayer.element, this.currentZoom));
  }
  zoomOut() {
    const e = this.currentZoom * 0.9;
    e >= 1 && (this.currentZoom = e, this._playerCenter = ht(this.element, this._videoPlayer.element, this.currentZoom));
  }
}
let Gh = class extends Ph {
  getPluginModuleInstance() {
    return re.Get();
  }
  get name() {
    return super.name || "es.upv.paella.zoomPlugin";
  }
  get canvasType() {
    return "video";
  }
  isCompatible(i) {
    return !Array.isArray(i.canvas) || i.canvas.length === 0 ? !0 : super.isCompatible(i);
  }
  getCanvasInstance(i) {
    return new se(this.player, i, this.config);
  }
};
const Rt = `<svg width="100%" height="100%" viewBox="0 0 32 32" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <path d="M17.094,18.048C15.976,18.956 14.551,19.5 13,19.5C9.413,19.5 6.5,16.587 6.5,13C6.5,9.413 9.413,6.5 13,6.5C16.587,6.5 19.5,9.413 19.5,13C19.5,14.522 18.976,15.923 18.098,17.031L19.553,18.487C20.094,17.958 20.962,17.962 21.498,18.498L25.522,22.522C26.062,23.062 26.062,23.938 25.522,24.478L24.519,25.481C23.98,26.02 23.103,26.02 22.563,25.481L18.539,21.457C18,20.917 18,20.041 18.539,19.501L18.543,19.497L17.094,18.048ZM13,8C15.76,8 18,10.24 18,13C18,15.76 15.76,18 13,18C10.24,18 8,15.76 8,13C8,10.24 10.24,8 13,8ZM13.927,11.886L15.927,11.886L15.927,13.886L13.927,13.886L13.927,15.886L11.927,15.886L11.927,13.886L9.927,13.886L9.927,11.886L11.927,11.886L11.927,9.886L13.927,9.886L13.927,11.886Z"/>
</svg>`;
let Wh = class extends Qi {
  getPluginModuleInstance() {
    return re.Get();
  }
  get name() {
    return super.name || "es.upv.paella.zoomInButtonPlugin";
  }
  getAriaLabel() {
    return "Zoom in";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async isEnabled() {
    return await super.isEnabled() ? (this.target = this.config.target, this._canvas = this.player.videoContainer.streamProvider.streams[this.target].canvas, this._canvas instanceof se) : !1;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "zoomInIcon") || Rt;
  }
  async action() {
    this._canvas.zoomIn();
  }
};
const Yi = `<svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <path d="M17.094,18.048C15.976,18.956 14.551,19.5 13,19.5C9.413,19.5 6.5,16.587 6.5,13C6.5,9.413 9.413,6.5 13,6.5C16.587,6.5 19.5,9.413 19.5,13C19.5,14.522 18.976,15.923 18.098,17.031L19.553,18.487C20.094,17.958 20.962,17.962 21.498,18.498L25.522,22.522C26.062,23.062 26.062,23.938 25.522,24.478L24.519,25.481C23.98,26.02 23.103,26.02 22.563,25.481L18.539,21.457C18,20.917 18,20.041 18.539,19.501L18.543,19.497L17.094,18.048ZM13,8C15.76,8 18,10.24 18,13C18,15.76 15.76,18 13,18C10.24,18 8,15.76 8,13C8,10.24 10.24,8 13,8ZM9.927,11.886L15.927,11.886L15.927,13.886L9.927,13.886L9.927,11.886Z"/>
</svg>`;
let Zh = class extends Qi {
  getPluginModuleInstance() {
    return re.Get();
  }
  get name() {
    return super.name || "es.upv.paella.zoomOutButtonPlugin";
  }
  getAriaLabel() {
    return "Zoom out";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async isEnabled() {
    return await super.isEnabled() ? (this.target = this.config.target, this._canvas = this.player.videoContainer.streamProvider.streams[this.target].canvas, this._canvas instanceof se) : !1;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "zoomOutIcon") || Yi;
  }
  async action() {
    this._canvas.zoomOut();
  }
}, jh = class extends Nh {
  getPluginModuleInstance() {
    return re.Get();
  }
  get name() {
    return super.name || "es.upv.paella.zoomMenuButtonPlugin";
  }
  getAriaLabel() {
    return "Show video zoom options";
  }
  getDescription() {
    return this.getAriaLabel();
  }
  async isEnabled() {
    return await super.isEnabled() ? (this._target = this.config.target || "presenter", this._canvas = this.player.videoContainer.streamProvider.streams[this._target].canvas, this._canvas instanceof se) : !1;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "zoomInIcon") || Rt;
  }
  async getMenu() {
    return [
      {
        id: "in",
        title: "Zoom in",
        icon: this.player.getCustomPluginIcon(this.name, "zoomInIcon") || Rt
      },
      {
        id: "out",
        title: "Zoom out",
        icon: this.player.getCustomPluginIcon(this.name, "zoomOutIcon") || Yi
      }
    ];
  }
  get buttonType() {
    return "button";
  }
  get showTitles() {
    return !1;
  }
  itemSelected(i) {
    switch (i.id) {
      case "in":
        this._canvas.zoomIn();
        break;
      case "out":
        this._canvas.zoomOut();
        break;
    }
  }
}, qh = class extends _a {
  getPluginModuleInstance() {
    return re.Get();
  }
  get name() {
    return super.name || "es.upv.paella.canvasZoomInButtonPlugin";
  }
  async isEnabled() {
    if (!await super.isEnabled())
      return !1;
    let i = !1;
    this._streams = this.player.videoContainer.streamProvider.streams;
    for (const e in this._streams)
      i || (i = this._streams[e].canvas instanceof se);
    return i;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "zoomInIcon") || Rt;
  }
  async action(i, e, t, n) {
    t instanceof se && t.zoomIn();
  }
}, Qh = class extends _a {
  getPluginModuleInstance() {
    return re.Get();
  }
  get name() {
    return super.name || "es.upv.paella.canvasZoomOutButtonPlugin";
  }
  async isEnabled() {
    if (!await super.isEnabled())
      return !1;
    let i = !1;
    this._streams = this.player.videoContainer.streamProvider.streams;
    for (const e in this._streams)
      i || (i = this._streams[e].canvas instanceof se);
    return i;
  }
  async load() {
    this.icon = this.player.getCustomPluginIcon(this.name, "zoomOutIcon") || Yi;
  }
  async action(i, e, t, n) {
    t instanceof se && t.zoomOut();
  }
};
const Yh = [
  {
    plugin: Gh,
    config: {
      enabled: !1
    }
  },
  {
    plugin: Wh,
    config: {
      enabled: !1
    }
  },
  {
    plugin: Zh,
    config: {
      enabled: !1
    }
  },
  {
    plugin: jh,
    config: {
      enabled: !1
    }
  },
  {
    plugin: qh,
    config: {
      enabled: !1
    }
  },
  {
    plugin: Qh,
    config: {
      enabled: !1
    }
  }
], Qd = (i, e, t) => {
  let n = new dl("playerContainer", {
    configUrl: i,
    getVideoId: () => t.metadata.id,
    getManifestUrl: () => "dummy",
    getManifestFileUrl: () => "dummy",
    loadVideoManifest: () => t,
    plugins: [
      ...Tu,
      ...wc,
      ...rh,
      ...Yh,
      ..._h
    ]
  });
  n.skin.loadSkin(e), n.loadManifest().then(() => console.log("Initialization done")).catch((s) => console.error(s));
};
export {
  Qd as initPaella
};
