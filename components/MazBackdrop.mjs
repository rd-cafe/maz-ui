import './assets/MazBackdrop.css';
import { defineComponent as A, ref as L, onMounted as V, watch as D, openBlock as p, createBlock as N, Teleport as S, createVNode as h, Transition as M, withCtx as P, createElementBlock as T, normalizeClass as f, createElementVNode as k, withModifiers as g, mergeProps as w, renderSlot as O, createCommentVNode as K } from "vue";
const b = "--backdrop-present", F = /* @__PURE__ */ A({
  inheritAttrs: !1,
  __name: "MazBackdrop",
  props: {
    modelValue: { type: Boolean, default: !1 },
    teleportSelector: { default: "body" },
    beforeClose: { type: Function, default: void 0 },
    persistent: { type: Boolean, default: !1 },
    noCloseOnEscKey: { type: Boolean, default: !1 },
    transitionName: { default: "backdrop-anim" },
    backdropClass: { default: void 0 },
    backdropContentClass: { default: void 0 }
  },
  emits: ["open", "close", "update:model-value", "before-close"],
  setup(C, { expose: v, emit: y }) {
    const E = () => {
      document.documentElement.classList.add(b);
    }, B = async () => {
      document.querySelector(".m-backdrop.--present") || document.documentElement.classList.remove(b);
    }, t = y, o = C, n = L(o.modelValue);
    function a() {
      d(!1);
    }
    async function d(e) {
      var r;
      e || (t("before-close"), await ((r = o.beforeClose) == null ? void 0 : r.call(o))), n.value = e;
    }
    function c() {
      t("open");
    }
    function i() {
      t("update:model-value", !1), t("close"), l();
    }
    function u() {
      o.persistent || a();
    }
    function s(e) {
      !o.noCloseOnEscKey && e.key === "Escape" && !o.persistent && a();
    }
    function m() {
      E(), document.addEventListener("keyup", s, !1);
    }
    function l() {
      document.removeEventListener("keyup", s), B();
    }
    return V(() => {
      o.modelValue ? m() : l();
    }), D(
      () => o.modelValue,
      (e) => {
        n.value = e, e ? m() : l();
      }
    ), v({
      onBackdropAnimationEnter: c,
      onBackdropAnimationLeave: i,
      onBackdropClicked: u,
      close: a,
      present: n,
      toggleModal: d,
      onKeyPress: s
    }), (e, r) => (p(), N(S, { to: e.teleportSelector }, [
      h(M, {
        appear: "",
        name: e.transitionName,
        onAfterEnter: c,
        onAfterLeave: i
      }, {
        default: P(() => [
          n.value ? (p(), T(
            "div",
            {
              key: 0,
              class: f(["m-backdrop --present", [e.backdropClass]]),
              tabindex: "-1",
              role: "dialog"
            },
            [
              k(
                "button",
                {
                  class: f(["m-backdrop-overlay", { "--disabled": e.persistent }]),
                  tabindex: "-1",
                  onClick: g(u, ["self"])
                },
                null,
                2
                /* CLASS */
              ),
              k(
                "div",
                w({
                  class: ["m-backdrop-content", e.backdropContentClass]
                }, e.$attrs, {
                  role: "document",
                  tabindex: "0"
                }),
                [
                  O(e.$slots, "default", { close: a })
                ],
                16
                /* FULL_PROPS */
              )
            ],
            2
            /* CLASS */
          )) : K("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ], 8, ["to"]));
  }
});
export {
  F as default
};
