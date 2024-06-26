import '../assets/MazAvatar.css';
import { defineComponent as B, defineAsyncComponent as m, computed as f, openBlock as i, createBlock as c, resolveDynamicComponent as $, normalizeStyle as v, normalizeClass as k, withCtx as w, createElementVNode as b, unref as y, createCommentVNode as n, renderSlot as u, toDisplayString as g, createElementBlock as C, createVNode as S } from "vue";
const I = ["tabindex"], L = { class: "m-avatar__initial" }, E = {
  key: 0,
  class: "m-avatar__caption"
}, M = /* @__PURE__ */ B({
  __name: "MazAvatar",
  props: {
    src: { default: void 0 },
    caption: { default: void 0 },
    href: { default: void 0 },
    to: { default: void 0 },
    alt: { default: "avatar image" },
    target: { default: "_self" },
    size: { default: void 0 },
    bordered: { type: Boolean },
    clickable: { type: Boolean },
    square: { type: Boolean },
    noElevation: { type: Boolean },
    showCaption: { type: Boolean },
    imageHeightFull: { type: Boolean },
    noLoader: { type: Boolean },
    buttonColor: { default: "info" },
    noClickableIcon: { type: Boolean },
    letterCount: { default: void 0 },
    roundedSize: { default: "full" },
    fallbackSrc: { default: void 0 },
    noPhoto: { type: Boolean }
  },
  emits: ["click", "intersecting", "loading", "loaded", "error"],
  setup(l) {
    const s = m(() => import("./MazLazyImg-6qrfqWKr.mjs")), r = m(() => import("./pencil-BcRzdEYh.mjs")), t = l, d = f(() => t.to ? "RouterLink" : t.href ? "a" : "div"), p = f(() => !!t.to || !!t.href);
    function z(o, e = t.letterCount) {
      return o.split(" ").map((h) => h[0]).join("").slice(0, e);
    }
    return (o, e) => (i(), c($(d.value), {
      style: v({ fontSize: o.size }),
      class: k(["m-avatar", [
        {
          "--has-link": p.value
        }
      ]]),
      href: o.href,
      to: o.to,
      target: p.value ? o.target : void 0
    }, {
      default: w(() => [
        b("div", {
          class: k(["m-avatar__wrapper", [
            {
              "--has-shadow": !o.noElevation,
              "--bordered": o.bordered,
              "--clickable": o.clickable,
              "--has-initial": !o.src && o.caption
            },
            `--rounded-${o.square ? "none" : o.roundedSize}`
          ]]),
          tabindex: o.clickable ? 0 : -1
        }, [
          o.src || !o.src && !o.caption ? (i(), c(y(s), {
            key: 0,
            class: "m-avatar__picture maz-w-full maz-max-w-full",
            image: o.src,
            alt: o.alt,
            "no-photo": o.noPhoto,
            "image-height-full": "",
            "no-loader": o.noLoader,
            "fallback-src": o.fallbackSrc,
            onClick: e[0] || (e[0] = (a) => o.clickable ? o.$emit("click", a) : null),
            onError: e[1] || (e[1] = (a) => o.$emit("error", a)),
            onLoaded: e[2] || (e[2] = (a) => o.$emit("loaded", a)),
            onLoading: e[3] || (e[3] = (a) => o.$emit("loading", a)),
            onIntersecting: e[4] || (e[4] = (a) => o.$emit("intersecting", a))
          }, null, 8, ["image", "alt", "no-photo", "no-loader", "fallback-src"])) : n("v-if", !0),
          o.caption && !o.src ? u(o.$slots, "round-text", { key: 1 }, () => [
            b(
              "span",
              L,
              g(z(o.caption)),
              1
              /* TEXT */
            )
          ], !0) : n("v-if", !0),
          o.clickable ? (i(), C(
            "button",
            {
              key: 2,
              type: "button",
              tabindex: "-1",
              class: "m-avatar__button",
              style: v({
                backgroundColor: o.src ? `var(--maz-color-${o.buttonColor}-alpha)` : `var(--maz-color-${o.buttonColor})`
              }),
              onClick: e[5] || (e[5] = (a) => o.$emit("click", a))
            },
            [
              o.noClickableIcon ? n("v-if", !0) : u(o.$slots, "icon", { key: 0 }, () => [
                S(y(r), { class: "m-avatar__button__icon" })
              ], !0)
            ],
            4
            /* STYLE */
          )) : n("v-if", !0)
        ], 10, I),
        u(o.$slots, "caption", {}, () => [
          o.showCaption && o.caption ? (i(), C(
            "p",
            E,
            g(o.caption),
            1
            /* TEXT */
          )) : n("v-if", !0)
        ], !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["style", "class", "href", "to", "target"]));
  }
}), A = (l, s) => {
  const r = l.__vccOpts || l;
  for (const [t, d] of s)
    r[t] = d;
  return r;
}, q = /* @__PURE__ */ A(M, [["__scopeId", "data-v-8a2f8d04"]]);
export {
  q as M,
  A as _
};
