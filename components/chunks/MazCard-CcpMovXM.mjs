import '../assets/MazCard.css';
import { defineComponent as A, defineAsyncComponent as c, useSlots as H, computed as r, ref as N, watch as T, openBlock as a, createElementBlock as n, normalizeClass as u, createBlock as p, resolveDynamicComponent as k, withModifiers as $, withCtx as f, renderSlot as i, createTextVNode as j, toDisplayString as E, createCommentVNode as l, unref as h, createVNode as B, mergeProps as P, createElementVNode as S, withDirectives as W, vShow as I } from "vue";
const R = {
  key: 0,
  class: "m-card__gallery__wrapper"
}, G = { class: "maz-min-w-0 maz-flex-1" }, L = {
  key: 0,
  class: "m-card__title"
}, q = {
  key: 1,
  class: "m-card__subtitle"
}, F = {
  key: 2,
  class: "m-card__content"
}, J = {
  key: 2,
  class: "m-card__actions maz-flex maz-p-2"
}, K = /* @__PURE__ */ A({
  __name: "MazCard",
  props: {
    images: { default: void 0 },
    orientation: { default: "column" },
    href: { default: void 0 },
    to: { default: void 0 },
    hrefTarget: { default: "_self" },
    footerAlign: { default: "right" },
    galleryWidth: { default: 200 },
    galleryHeight: { default: 150 },
    zoom: { type: Boolean },
    elevation: { type: Boolean, default: !0 },
    radius: { type: Boolean, default: !0 },
    bordered: { type: Boolean },
    imagesShowCount: { default: 3 },
    noRemaining: { type: Boolean, default: !0 },
    scale: { type: Boolean, default: !0 },
    wrapperClass: { default: void 0 },
    noPadding: { type: Boolean },
    overflowHidden: { type: Boolean },
    collapsable: { type: Boolean },
    collapsible: { type: Boolean },
    collapseOpen: { type: Boolean },
    header: { default: void 0 },
    block: { type: Boolean }
  },
  setup(m) {
    const g = c(() => import("./MazBtn-ft5MnTUV.mjs")), v = c(() => import("./MazGallery-wQR7u-Vm.mjs")), z = c(() => import("./MazTransitionExpand-RejRwYk6.mjs")), y = c(() => import("./chevron-down-CzMH-gFW.mjs")), o = m, M = H(), t = r(() => o.collapsible || o.collapsable), s = N(t.value ? o.collapseOpen : !0), C = r(() => o.href || o.to);
    T(
      () => o.collapseOpen,
      (e) => {
        t.value && (s.value = e);
      }
    );
    const _ = r(() => ({
      is: o.href ? "a" : o.to ? "router-link" : "div",
      ...o.href && { href: o.href },
      ...o.to && { to: o.to },
      target: o.hrefTarget
    })), b = r(() => ["column", "column-reverse"].includes(o.orientation)), w = r(() => {
      const e = /* @__PURE__ */ new Set(["default", "title", "subtitle", "content"]);
      return Object.keys(M).some((d) => e.has(d));
    }), O = r(() => w.value ? o.galleryWidth : "100%"), D = r(
      () => o.footerAlign === "right" ? "maz-text-right" : "maz-text-left"
    );
    return (e, d) => (a(), n(
      "div",
      {
        class: u(["m-card", [
          {
            "m-card--linked": C.value,
            "m-card--no-scale": !e.scale,
            "maz-elevation": e.elevation,
            "--block": e.block,
            "maz-overflow-hidden": e.overflowHidden || !s.value,
            "maz-rounded": e.radius,
            "maz-border maz-border-solid maz-border-color-light": e.bordered
          }
        ]])
      },
      [
        e.$slots.header || e.header || t.value ? (a(), p(k(t.value ? "button" : "div"), {
          key: 0,
          class: u(["m-card__header maz-border-b maz-border-solid", [
            s.value ? "maz-rounded-t maz-border-color-light" : "maz-border-transparent",
            { "--is-collapsible": t.value },
            { "maz-justify-end": (!e.$slots.header || !e.header) && t.value },
            { "maz-justify-between": e.$slots.header || e.header }
          ]]),
          tabindex: "-1",
          onClick: d[1] || (d[1] = $((V) => t.value ? s.value = !s.value : void 0, ["stop"]))
        }, {
          default: f(() => [
            e.$slots.header || e.header ? i(e.$slots, "header", { key: 0 }, () => [
              j(
                E(e.header),
                1
                /* TEXT */
              )
            ], !0) : l("v-if", !0),
            t.value ? (a(), p(h(g), {
              key: 1,
              color: "transparent",
              class: "maz-ml-2 maz-text-sm",
              size: "xs",
              onClick: d[0] || (d[0] = $((V) => s.value = !s.value, ["stop"]))
            }, {
              default: f(() => [
                B(h(y), {
                  class: u([{ "--is-open": s.value }, "m-card__collapse-icon maz-text-xl"])
                }, null, 8, ["class"])
              ]),
              _: 1
              /* STABLE */
            })) : l("v-if", !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["class"])) : l("v-if", !0),
        (a(), p(k(_.value.is), P(_.value, {
          class: ["m-card__wrapper", [`m-card__wrapper--${e.orientation}`, { "m-card__link": C.value }]]
        }), {
          default: f(() => [
            e.images ? (a(), n("div", R, [
              B(h(v), {
                "no-radius": !e.radius,
                width: O.value,
                height: e.galleryHeight,
                "images-shown-count": e.imagesShowCount,
                images: e.images,
                "no-zoom": !e.zoom,
                "no-width": b.value,
                "no-height": !b.value && w.value,
                "no-remaining": e.noRemaining,
                class: "m-card__gallery maz-flex-1"
              }, null, 8, ["no-radius", "width", "height", "images-shown-count", "images", "no-zoom", "no-width", "no-height", "no-remaining"])
            ])) : l("v-if", !0),
            S("div", G, [
              (a(), p(k(t.value ? h(z) : "div"), null, {
                default: f(() => [
                  W(S(
                    "div",
                    {
                      class: u([[e.wrapperClass, { "maz-p-4": !e.noPadding && !t.value }], "m-card__content__wrapper"])
                    },
                    [
                      i(e.$slots, "default", {}, () => [
                        e.$slots.title ? (a(), n("div", L, [
                          i(e.$slots, "title", {}, void 0, !0)
                        ])) : l("v-if", !0),
                        e.$slots.subtitle ? (a(), n("div", q, [
                          i(e.$slots, "subtitle", {}, void 0, !0)
                        ])) : l("v-if", !0),
                        e.$slots.content ? (a(), n("div", F, [
                          i(e.$slots, "content", {}, void 0, !0)
                        ])) : l("v-if", !0)
                      ], !0)
                    ],
                    2
                    /* CLASS */
                  ), [
                    [I, s.value]
                  ])
                ]),
                _: 3
                /* FORWARDED */
              }))
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["class"])),
        e.$slots.footer ? (a(), n(
          "div",
          {
            key: 1,
            class: u(["m-card__footer maz-overflow-x-auto maz-p-3", [
              {
                "maz-border-t maz-border-color-light": b.value && w.value
              },
              D.value
            ]])
          },
          [
            i(e.$slots, "footer", {}, void 0, !0)
          ],
          2
          /* CLASS */
        )) : l("v-if", !0),
        e.$slots.actions ? (a(), n("div", J, [
          l(" @slot action of gallery "),
          i(e.$slots, "actions", {}, void 0, !0)
        ])) : l("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), Q = (m, g) => {
  const v = m.__vccOpts || m;
  for (const [z, y] of g)
    v[z] = y;
  return v;
}, X = /* @__PURE__ */ Q(K, [["__scopeId", "data-v-dd936799"]]);
export {
  X as M,
  Q as _
};
