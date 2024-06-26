import './assets/MazSwitch.css';
import { getCurrentInstance as b, computed as t, defineComponent as v, useCssVars as k, openBlock as c, createElementBlock as i, unref as r, normalizeClass as _, normalizeStyle as y, createElementVNode as m, mergeProps as C, createCommentVNode as u, renderSlot as w } from "vue";
function V({
  componentName: o,
  providedId: s
}) {
  const a = b();
  return t(() => s ?? `${o}-${a == null ? void 0 : a.uid}`);
}
const g = ["for", "aria-checked"], z = ["id", "name", "checked", "disabled"], $ = /* @__PURE__ */ m(
  "span",
  { class: "m-switch__toggle" },
  null,
  -1
  /* HOISTED */
), B = {
  key: 0,
  class: "m-switch__label"
}, S = /* @__PURE__ */ v({
  inheritAttrs: !1,
  __name: "MazSwitch",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { type: Boolean, default: !1 },
    id: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    name: { default: void 0 },
    color: { default: "primary" }
  },
  emits: ["update:model-value", "change"],
  setup(o, { emit: s }) {
    k((e) => ({
      "17a28b5e": h.value,
      "67cedd2f": f.value
    }));
    const a = o, d = s, n = V({
      componentName: "MazCheckbox",
      providedId: a.id
    }), h = t(() => `var(--maz-color-${a.color}-alpha)`), f = t(
      () => a.modelValue ? `var(--maz-color-${a.color})` : "var(--maz-color-white)"
    ), p = (e) => {
      const l = e.target;
      d("update:model-value", (l == null ? void 0 : l.checked) ?? !1), d("change", (l == null ? void 0 : l.checked) ?? !1);
    };
    return (e, l) => (c(), i("label", {
      for: r(n),
      class: _(["m-switch", [{ "--is-disabled": e.disabled }, a.class]]),
      role: "switch",
      style: y(e.style),
      "aria-checked": e.modelValue,
      tabindex: "0"
    }, [
      m("input", C({ id: r(n) }, e.$attrs, {
        type: "checkbox",
        name: e.name,
        checked: e.modelValue,
        disabled: e.disabled,
        class: "m-switch__input",
        onChange: p
      }), null, 16, z),
      $,
      e.$slots.default ? (c(), i("span", B, [
        u(`
        @slot The label of the switch
          @binding {Boolean} value - The value of the switch
      `),
        w(e.$slots, "default", { value: e.modelValue })
      ])) : u("v-if", !0)
    ], 14, g));
  }
});
export {
  S as default
};
