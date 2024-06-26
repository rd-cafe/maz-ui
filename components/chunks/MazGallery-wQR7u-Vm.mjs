import '../assets/MazGallery.css';
var ye = Object.defineProperty;
var be = (o, e, t) => e in o ? ye(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var g = (o, e, t) => (be(o, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as oe, defineAsyncComponent as _, ref as y, computed as E, watch as Ae, onMounted as Ie, onBeforeUnmount as Ee, openBlock as b, createElementBlock as A, withModifiers as S, withKeys as Le, withDirectives as R, createVNode as x, unref as L, vShow as we, createCommentVNode as O, createElementVNode as P, normalizeClass as F, render as B, useCssVars as Ce, onBeforeMount as ze, normalizeStyle as ee, Fragment as te, renderList as se, toDisplayString as xe } from "vue";
import { _ as ae } from "./MazCard-CcpMovXM.mjs";
const Oe = ["onKeypress"], Pe = { class: "m-fullscreen-img-scroller" }, Se = ["src", "alt"], ke = /* @__PURE__ */ oe({
  __name: "MazFullscreenImg",
  props: {
    src: {},
    clickedElementBounds: { default: void 0 },
    offset: { default: void 0 },
    animation: { default: () => ({
      duration: 300,
      easing: "ease-in-out"
    }) },
    openInstanceClass: { default: "m-fullscreen-img-instance" },
    clickedElement: {},
    destroy: { type: Function, default: void 0 },
    alt: { default: void 0 },
    zoom: { type: Boolean, default: !0 }
  },
  emits: ["close", "previous", "next", "before-close"],
  setup(o, { emit: e }) {
    const t = e, s = _(() => import("./MazSpinner-DFEVMVIO.mjs")), r = _(() => import("./x-mark-BP8zWe_C.mjs")), f = _(() => import("./chevron-left-CcZaP3Rc.mjs")), i = o, v = y(!1), C = y(!1), w = y(!1), m = y(!1), d = y(!1), c = y(i.clickedElement), u = E(() => i.clickedElement.getBoundingClientRect()), re = E(
      () => u.value.height < u.value.width
    ), W = y(i.src), Z = y(i.alt), j = y(), z = y(), ie = E(() => d.value ? "--is-zoomed maz-cursor-zoom-out" : "maz-cursor-zoom-in");
    function le() {
      v.value = !0, C.value = !1, w.value = !0;
    }
    Ae(
      () => w.value,
      (n) => {
        n && fe();
      }
    );
    function k() {
      t("before-close"), ge();
    }
    function q(n) {
      n.key === "Escape" && (n.preventDefault(), k()), (n.key === "ArrowLeft" || n.key === "ArrowRight") && (n.preventDefault(), N(n.key === "ArrowRight" ? "next" : "previous"));
    }
    function ce() {
      document.documentElement.classList.add("--m-fullscreen-open");
    }
    function ue() {
      document.documentElement.classList.remove("--m-fullscreen-open");
    }
    function V() {
      return [...document.querySelectorAll(".m-fullscreen-img-instance")];
    }
    function me(n, a) {
      return a < 0 ? n.length - 1 : a >= n.length ? 0 : a;
    }
    async function de(n, a) {
      n.classList.remove(i.openInstanceClass), a.classList.add(i.openInstanceClass);
      const l = a.getAttribute("data-src"), h = a.getAttribute("data-alt");
      Z.value = h, l && (W.value = l), v.value = !1, v.value || (C.value = !0);
    }
    function N(n) {
      const a = document.querySelector(
        `.m-fullscreen-img-instance.${i.openInstanceClass}`
      );
      if (a) {
        const l = V(), h = l.indexOf(a), I = n === "next" ? h + 1 : h - 1, p = l[me(l, I)];
        c.value = p, p && de(a, p), t(n), d.value ? Y(z.value) : H();
      }
    }
    function Y(n) {
      re.value ? (n.style.width = `${window.innerWidth}px`, n.style.removeProperty("height")) : (n.style.height = `${window.innerHeight}px`, n.style.removeProperty("width")), n.style.removeProperty("top"), n.style.removeProperty("left");
    }
    async function he() {
      const n = z.value;
      d.value ? (d.value = !d.value, H()) : (d.value = !d.value, Y(n));
    }
    function G(n) {
      var a;
      return (a = z.value) == null ? void 0 : a.animate(n, {
        duration: i.animation.duration,
        // Durée de l'animation en millisecondes
        easing: i.animation.easing
        // Fonction d'interpolation pour l'animation inverse
      });
    }
    function X(n = i.offset ?? 0) {
      const a = (c.value instanceof HTMLImageElement ? c.value.naturalWidth : c.value.clientWidth) || 1, l = (c.value instanceof HTMLImageElement ? c.value.naturalHeight : c.value.clientHeight) || 1, h = window.innerWidth, I = window.innerHeight, p = Math.min(
        (h - 2 * n) / a,
        (I - 2 * n) / l
      ), T = (h - a * p) / 2, D = (I - l * p) / 2;
      return {
        centerX: T,
        centerY: D,
        originalWidth: a,
        originalHeight: l,
        scale: p
      };
    }
    function K({ trigger: n }) {
      const { originalWidth: a, originalHeight: l, scale: h, centerX: I, centerY: p } = X(), { top: T, left: D, width: ve, height: pe } = u.value, J = [
        {
          top: `${T}px`,
          left: `${D}px`,
          width: `${ve}px`,
          height: `${pe}px`,
          opacity: 0
        },
        {
          top: `${p}px`,
          left: `${I}px`,
          width: `${a * h}px`,
          height: `${l * h}px`,
          opacity: 1
        }
      ];
      return {
        frames: n === "open" ? J : J.reverse()
      };
    }
    function H() {
      const { centerX: n, centerY: a, originalHeight: l, originalWidth: h, scale: I } = X(), p = {
        top: `${a}px`,
        left: `${n}px`,
        width: `${h * I}px`,
        height: `${l * I}px`
      };
      if (!z.value)
        throw console.error("[maz-ui](vFullscreenImg) ImgElement is not defined");
      Object.assign(z.value.style, p);
    }
    function fe() {
      const { frames: n } = K({
        trigger: "open"
      }), a = G(n);
      if (!a)
        throw console.error("[maz-ui](vFullscreenImg) open animation is not defined");
      a.onfinish = () => {
        H();
      };
    }
    function ge() {
      const { frames: n } = K({
        trigger: "close"
      }), a = G(n);
      if (!a)
        throw console.error("[maz-ui](vFullscreenImg) close animation is not defined");
      a.onfinish = () => {
        var l, h;
        t("close"), (l = j.value) == null || l.remove(), (h = i.destroy) == null || h.call(i);
      };
    }
    function Q() {
      d.value || H();
    }
    return Ie(() => {
      C.value = !0, document.addEventListener("keydown", q), window.addEventListener("resize", Q), ce(), m.value = V().length > 1;
    }), Ee(() => {
      document.removeEventListener("keydown", q), window.removeEventListener("resize", Q), ue();
    }), (n, a) => (b(), A("div", {
      ref_key: "FullscreenImgElement",
      ref: j,
      role: "button",
      class: "m-fullscreen-img",
      tabindex: "0",
      onClick: S(k, ["stop"]),
      onKeypress: Le(S(k, ["prevent"]), ["esc"])
    }, [
      R(x(
        L(s),
        { class: "m-fullscreen-img-loader maz-h-16" },
        null,
        512
        /* NEED_PATCH */
      ), [
        [we, C.value]
      ]),
      w.value && m.value ? (b(), A("button", {
        key: 0,
        type: "button",
        class: "m-fullscreen-btn --next",
        onClick: a[0] || (a[0] = S((l) => N("next"), ["stop"]))
      }, [
        x(L(f), { class: "maz-rotate-180 maz-text-3xl" })
      ])) : O("v-if", !0),
      w.value && m.value ? (b(), A("button", {
        key: 1,
        type: "button",
        class: "m-fullscreen-btn --previous",
        onClick: a[1] || (a[1] = S((l) => N("previous"), ["stop"]))
      }, [
        x(L(f), { class: "maz-text-3xl" })
      ])) : O("v-if", !0),
      P("button", {
        type: "button",
        class: "m-fullscreen-btn --close",
        onClick: k
      }, [
        x(L(r), { class: "maz-text-3xl" })
      ]),
      P("div", Pe, [
        O(" eslint-disable-next-line vuejs-accessibility/no-static-element-interactions, vuejs-accessibility/click-events-have-key-events "),
        P("img", {
          ref_key: "ImgElement",
          ref: z,
          src: W.value,
          alt: Z.value ?? void 0,
          tabindex: "0",
          class: F([ie.value]),
          onLoad: le,
          onClick: a[2] || (a[2] = S((l) => n.zoom ? he() : void 0, ["stop"]))
        }, null, 42, Se)
      ])
    ], 40, Oe));
  }
}), He = /* @__PURE__ */ ae(ke, [["__scopeId", "data-v-d975dba3"]]);
function Be(o, e) {
  let t = e == null ? void 0 : e.element;
  function s() {
    t && B(null, t);
  }
  const r = x(
    o,
    { ...e == null ? void 0 : e.props, destroy: s },
    e == null ? void 0 : e.children
  );
  return e != null && e.app ? (r.appContext = e.app._context, t ? B(r, t) : typeof document < "u" && (t = document.createElement("div"), B(r, t))) : (t = t ?? document.body, B(r, t)), { vNode: r, destroy: s, el: t };
}
const ne = "m-fullscreen-is-open";
class $e {
  constructor() {
    g(this, "options");
    g(this, "defaultOptions", {
      scaleOnHover: !1,
      blurOnHover: !1,
      disabled: !1,
      zoom: !0,
      offset: 80,
      animation: {
        duration: 300,
        easing: "ease-in-out"
      }
    });
    g(this, "mouseEnterListener");
    g(this, "mouseLeaveListener");
    g(this, "renderPreviewListener");
  }
  buildOptions(e, t) {
    const s = typeof t.value == "object" ? t.value : { src: t.value, alt: void 0 }, r = (s == null ? void 0 : s.src) ?? this.getImgSrc(e), f = (s == null ? void 0 : s.alt) ?? this.getImgAlt(e);
    return {
      ...this.defaultOptions,
      ...s,
      src: r,
      alt: f
    };
  }
  get allInstances() {
    return [...document.querySelectorAll(".m-fullscreen-img-instance")];
  }
  getImgSrc(e) {
    var s;
    const t = ((s = this.options) == null ? void 0 : s.src) || e.getAttribute("src") || e.getAttribute("data-src");
    if (!t)
      throw new Error(
        '[maz-ui](fullscreen-img) src of image must be provided by `v-fullscreen=""`, `v-fullscreen="{ src: "" }"`, `src=""` or `data-src=""` atributes'
      );
    return t;
  }
  getImgAlt(e) {
    var t;
    return ((t = this.options) == null ? void 0 : t.alt) || e.getAttribute("alt") || e.getAttribute("data-alt");
  }
  create(e, t) {
    if (this.options = this.buildOptions(e, t), this.options.disabled)
      return;
    e.style.cursor = "move", (this.options.scaleOnHover || this.options.blurOnHover) && (e.style.transition = "all 200ms ease-in-out"), e.classList.add("m-fullscreen-img-instance"), e.setAttribute("data-src", this.getImgSrc(e));
    const s = this.getImgAlt(e);
    s && e.setAttribute("data-alt", s), this.mouseEnterListener = () => this.mouseEnter(e), this.mouseLeaveListener = () => this.mouseLeave(e), this.renderPreviewListener = () => this.renderPreview(e), e.addEventListener("mouseenter", this.mouseEnterListener), e.addEventListener("mouseleave", this.mouseLeaveListener), e.addEventListener("click", this.renderPreviewListener);
  }
  update(e, t) {
    this.options = this.buildOptions(e, t);
  }
  remove(e) {
    e.removeEventListener("mouseenter", this.mouseEnterListener), e.removeEventListener("mouseleave", this.mouseLeaveListener), e.removeEventListener("click", this.renderPreviewListener), e.classList.remove("m-fullscreen-img-instance"), e.style.cursor = "";
  }
  renderPreview(e) {
    return e.classList.add(ne), Be(He, {
      props: {
        ...this.options,
        openInstanceClass: ne,
        clickedElement: e,
        clickedElementBounds: e.getBoundingClientRect()
      },
      addDestroyInProps: !0
    });
  }
  mouseLeave(e) {
    this.options.scaleOnHover && (e.style.transform = ""), this.options.blurOnHover && (e.style.filter = ""), e.style.zIndex = "";
  }
  mouseEnter(e) {
    e.style.zIndex = "1", this.options.scaleOnHover && (e.style.transform = "scale(1.04)"), this.options.blurOnHover && (e.style.filter = "blur(3px)");
  }
}
let $;
const U = {
  mounted(o, e) {
    return $ = new $e(), $.create(o, e);
  },
  updated(o, e) {
    return $.update(o, e);
  },
  unmounted(o) {
    return $.remove(o);
  }
}, Me = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", _e = {
  baseClass: "m-lazy-img",
  loadedClass: "m-lazy-loaded",
  loadingClass: "m-lazy-loading",
  errorClass: "m-lazy-error",
  noPhotoClass: "m-lazy-no-photo",
  noPhoto: !1,
  observerOnce: !0,
  loadOnce: !1,
  noUseErrorPhoto: !1,
  observerOptions: {
    threshold: 0.1
  }
};
class Re {
  constructor(e = {}) {
    g(this, "observers", []);
    g(this, "defaultOptions", _e);
    g(this, "options");
    g(this, "onImgLoadedCallback");
    g(this, "onImgErrorCallback");
    g(this, "hasImgLoaded", !1);
    this.options = this.buildOptions(e), this.onImgLoadedCallback = this.imageIsLoaded.bind(this), this.onImgErrorCallback = this.imageHasError.bind(this);
  }
  async loadErrorPhoto() {
    const { default: e } = await import("./no-photography-BJX8HSus.mjs");
    return e;
  }
  buildOptions(e) {
    return {
      ...this.defaultOptions,
      ...e,
      observerOptions: {
        ...this.defaultOptions.observerOptions,
        ...e.observerOptions
      }
    };
  }
  removeClass(e, t) {
    e.classList.remove(t);
  }
  addClass(e, t) {
    e.classList.add(t);
  }
  removeAllStateClasses(e) {
    this.removeClass(e, this.options.loadedClass), this.removeClass(e, this.options.loadingClass), this.removeClass(e, this.options.errorClass), this.removeClass(e, this.options.noPhotoClass);
  }
  setBaseClass(e) {
    this.addClass(e, this.options.baseClass);
  }
  imageIsLoading(e) {
    var t, s;
    this.addClass(e, this.options.loadingClass), (s = (t = this.options).onLoading) == null || s.call(t, e);
  }
  imageHasNoPhoto(e) {
    this.removeClass(e, this.options.loadingClass), this.addClass(e, this.options.noPhotoClass), this.setDefaultPhoto(e);
  }
  imageIsLoaded(e) {
    var t, s;
    this.hasImgLoaded = !0, this.removeClass(e, this.options.loadingClass), this.addClass(e, this.options.loadedClass), (s = (t = this.options).onLoaded) == null || s.call(t, e);
  }
  imageHasError(e) {
    var t, s;
    this.removeClass(e, this.options.loadingClass), this.addClass(e, this.options.errorClass), (s = (t = this.options).onError) == null || s.call(t, e), this.setDefaultPhoto(e);
  }
  getSrc(e) {
    return typeof e.value == "object" ? e.value.src : e.value;
  }
  getImageUrl(e, t) {
    const s = this.getImgElement(e).getAttribute("data-lazy-src");
    return s || this.getSrc(t);
  }
  async setPictureSourceUrls(e) {
    const t = e.querySelectorAll("source");
    if (t.length > 0)
      for await (const s of t) {
        const r = s.getAttribute("data-lazy-srcset");
        if (r)
          s.srcset = r;
        else
          return this.imageHasError(e);
      }
    else
      this.imageHasError(e);
  }
  hasBgImgMode(e) {
    return e.arg === "bg-image";
  }
  isPictureElement(e) {
    return e instanceof HTMLPictureElement;
  }
  getImgElement(e) {
    return this.isPictureElement(e) ? e.querySelector("img") : e;
  }
  async setDefaultPhoto(e) {
    if (this.options.noUseErrorPhoto)
      return;
    const t = this.options.fallbackSrc ?? this.options.errorPhoto;
    typeof t == "string" && this.addClass(e, this.options.noPhotoClass);
    const s = t ?? await this.loadErrorPhoto(), r = e.querySelectorAll("source");
    if (r.length > 0)
      for await (const f of r)
        f.srcset = s;
    else
      this.setImgSrc(e, s);
  }
  addEventListenerToImg(e) {
    const t = this.getImgElement(e);
    t.addEventListener("load", () => this.onImgLoadedCallback(e), {
      once: !0
    }), t.addEventListener("error", (s) => this.onImgErrorCallback(e, s), { once: !0 });
  }
  async loadImage(e, t) {
    if (this.imageIsLoading(e), this.isPictureElement(e))
      this.addEventListenerToImg(e), await this.setPictureSourceUrls(e);
    else {
      const s = this.getImageUrl(e, t);
      if (!s)
        return this.imageHasError(e);
      this.hasBgImgMode(t) ? (e.style.backgroundImage = `url('${s}')`, this.imageIsLoaded(e)) : (this.addEventListenerToImg(e), this.setImgSrc(e, s));
    }
  }
  setImgSrc(e, t) {
    const s = this.getImgElement(e);
    s.src = t;
  }
  handleIntersectionObserver(e, t, s, r) {
    var f, i;
    this.observers.push(r);
    for (const v of s)
      if (v.isIntersecting) {
        if ((i = (f = this.options).onIntersecting) == null || i.call(f, v.target), this.options.observerOnce && r.unobserve(e), this.options.loadOnce && this.hasImgLoaded)
          return;
        this.loadImage(e, t);
      }
  }
  createObserver(e, t) {
    const s = (i, v) => {
      this.handleIntersectionObserver(e, t, i, v);
    }, r = this.options.observerOptions;
    new IntersectionObserver(s, r).observe(e);
  }
  async imageHandler(e, t, s) {
    if (s === "update")
      for await (const r of this.observers)
        r.unobserve(e);
    window.IntersectionObserver ? this.createObserver(e, t) : this.loadImage(e, t);
  }
  async bindUpdateHandler(e, t, s) {
    if (this.options.noPhoto)
      return this.imageHasNoPhoto(e);
    await this.imageHandler(e, t, s);
  }
  async add(e, t) {
    if (this.hasBgImgMode(t) && this.isPictureElement(e))
      throw new Error(`[MazLazyImg] You can't use the "bg-image" mode with "<picture />" element`);
    setTimeout(() => this.setBaseClass(e), 0), e.getAttribute("src") || this.setImgSrc(e, Me), await this.bindUpdateHandler(e, t, "bind");
  }
  async update(e, t) {
    t.value !== t.oldValue && (this.hasImgLoaded = !1, this.removeAllStateClasses(e), await this.bindUpdateHandler(e, t, "update"));
  }
  remove(e, t) {
    this.hasImgLoaded = !1, this.hasBgImgMode(t) && (e.style.backgroundImage = ""), this.removeAllStateClasses(e);
    for (const s of this.observers)
      s.unobserve(e);
    this.observers = [];
  }
}
let M;
const Fe = {
  created(o, e) {
    const t = typeof e.value == "object" ? e.value : {};
    M = new Re(t), M.add(o, e);
  },
  updated(o, e) {
    M.update(o, e);
  },
  unmounted(o, e) {
    M.remove(o, e);
  }
}, Ne = { class: "m-gallery__wrapper maz-flex maz-flex-1" }, Te = ["alt"], De = {
  key: 0,
  class: "m-gallery__remaining-layer maz-flex maz-bg-overlay maz-flex-center"
}, Ue = { class: "maz-text-2xl maz-text-white" }, We = /* @__PURE__ */ oe({
  __name: "MazGallery",
  props: {
    /**
     *  Array of string or object: `['https://via.placeholder.com/500', 'https://via.placeholder.com/600']` or `[{ slug: 'https://via.placeholder.com/500', alt: 'image descripton' }, { slug: 'https://via.placeholder.com/600', alt: 'image descripton' }]`
     * */
    images: {
      type: Array,
      default: () => []
    },
    /** Images count shown (max: 5) */
    imagesShownCount: { type: Number, default: 5 },
    /** Remove transparent layer with the remain count (ex: +2) */
    noRemaining: { type: Boolean, default: !1 },
    /** Height of gallery */
    height: { type: [Number, String], default: 150 },
    /** Remove default height - useful to set height with css */
    noHeight: { type: Boolean, default: !1 },
    /** Width of gallery */
    width: { type: [Number, String], default: "100%" },
    /** Remove default width */
    noWidth: { type: Boolean, default: !1 },
    /** Disable the border radius of the gallery */
    noRadius: { type: Boolean, default: !1 },
    /** Disable full size display when clicking on image */
    noZoom: { type: Boolean, default: !1 },
    /** Layer with photography icon when no images is provided */
    hasEmptyLayer: { type: Boolean, default: !0 },
    /** Lazy load image - if false, images are directly loaded */
    lazy: { type: Boolean, default: !0 },
    /** Disable blur effect on image hover */
    blur: { type: Boolean, default: !0 },
    /** Disable scale animation effect on image hover */
    scale: { type: Boolean, default: !0 },
    /** Choose color of borders between images - Should be a CSS color or CSS variable - Ex: `#000` or `var(--maz-color-bg-light)` */
    separatorColor: { type: String, default: "transparent" }
  },
  setup(o) {
    Ce((m) => ({
      "372f679d": o.separatorColor
    }));
    const e = _(() => import("./no-photography-CFaiDNTH.mjs")), t = o;
    ze(() => {
      t.imagesShownCount > 5 && console.warn('[MazUI](m-gallery) The maximum of "images-shown-count" is 5');
    });
    const s = E(() => {
      const m = t.noWidth, d = t.width, c = t.noHeight, u = t.height;
      return {
        ...m ? {} : {
          flex: "0 0 " + typeof d == "number" ? `${d}px` : d,
          width: typeof d == "number" ? `${d}px` : d
        },
        ...c ? {} : {
          height: typeof u == "number" ? `${u}px` : `${u}`,
          minHeight: typeof u == "number" ? `${u}px` : `${u}`
        }
      };
    }), r = E(() => t.imagesShownCount <= 5 ? t.imagesShownCount : 5), f = E(() => t.images.length - (t.images.length < r.value ? t.images.length : r.value)), i = E(() => t.images.map(
      (m) => typeof m == "object" ? { ...m, thumbnail: m.thumbnail ?? m.src } : { src: m, thumbnail: m, alt: void 0 }
    )), v = E(() => i.value.slice(0, r.value)), C = E(() => i.value.slice(r.value, t.images.length)), w = (m) => t.noRemaining ? !1 : (f.value && m + 1) === v.value.length;
    return (m, d) => o.images.length > 0 || o.hasEmptyLayer ? (b(), A(
      "div",
      {
        key: 0,
        class: F(["m-gallery maz-flex", { "maz-rounded": !o.noRadius }]),
        style: ee([s.value])
      },
      [
        P("section", Ne, [
          (b(!0), A(
            te,
            null,
            se(v.value, (c, u) => (b(), A(
              "figure",
              {
                key: u,
                class: F(["m-gallery__item !maz-my-0 maz-flex maz-flex-center", [`m-gallery__item--${u + 1}`]])
              },
              [
                R(P("img", {
                  class: "m-gallery__item__image maz-flex-1",
                  src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                  alt: c.alt,
                  loading: "lazy"
                }, null, 8, Te), [
                  [L(Fe), { src: c.thumbnail, disabled: !o.lazy }, "bg-image"],
                  [L(U), {
                    src: c.src,
                    alt: c.alt,
                    disabled: o.noZoom || w(u),
                    blurOnHover: o.blur,
                    scaleOnHover: o.scale
                  }]
                ]),
                w(u) ? R((b(), A("div", De, [
                  P(
                    "span",
                    Ue,
                    "+" + xe(f.value),
                    1
                    /* TEXT */
                  )
                ])), [
                  [L(U), {
                    src: c.src,
                    alt: c.alt,
                    disabled: o.noZoom,
                    blurOnHover: !1,
                    scaleOnHover: o.scale
                  }]
                ]) : O("v-if", !0)
              ],
              2
              /* CLASS */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          o.hasEmptyLayer && o.images.length === 0 ? (b(), A(
            "div",
            {
              key: 0,
              class: F(["empty-layer maz-flex maz-w-full maz-bg-color-light maz-text-normal maz-flex-center", { "maz-rounded-xl": !o.noRadius }]),
              style: ee([s.value])
            },
            [
              x(L(e), { class: "maz-h-8 maz-w-8" })
            ],
            6
            /* CLASS, STYLE */
          )) : O("v-if", !0)
        ]),
        (b(!0), A(
          te,
          null,
          se(C.value, (c, u) => R((b(), A("div", {
            key: u,
            class: "m-gallery__hidden"
          })), [
            [L(U), { src: c.src, disabled: o.noZoom }]
          ])),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      6
      /* CLASS, STYLE */
    )) : O("v-if", !0);
  }
}), Ve = /* @__PURE__ */ ae(We, [["__scopeId", "data-v-bfd5041a"]]);
export {
  Ve as default
};
