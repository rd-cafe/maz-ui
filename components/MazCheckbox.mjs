import './assets/MazCheckbox.css';
import { getCurrentInstance as _, computed as l, openBlock as p, createElementBlock as b, createElementVNode as u, defineComponent as w, useCssVars as C, unref as d, normalizeClass as h, normalizeStyle as I, mergeProps as S, createVNode as B, renderSlot as A, createTextVNode as N, toDisplayString as $ } from "vue";
function M({
  componentName: a,
  providedId: r
}) {
  const e = _();
  return l(() => r ?? `${a}-${e == null ? void 0 : e.uid}`);
}
const D = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24"
}, E = /* @__PURE__ */ u(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5",
    d: "m4.5 12.75 6 6 9-13.5"
  },
  null,
  -1
  /* HOISTED */
), j = [
  E
];
function q(a, r) {
  return p(), b("svg", D, [...j]);
}
const H = { render: q }, K = ["for", "aria-checked"], O = ["id", "checked", "disabled", "name"], P = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MazCheckbox",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { type: [Boolean, Array], default: void 0 },
    id: { default: void 0 },
    color: { default: "primary" },
    value: { type: [String, Number, Boolean], default: void 0 },
    name: { default: "m-checkbox" },
    size: { default: "md" },
    label: { default: void 0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    /* emitted when value change */
    "update:model-value",
    /* emited when value change */
    "change"
  ],
  setup(a, { emit: r }) {
    C((o) => ({
      "3eedcc0a": v.value,
      a3137f46: k.value,
      "03d4fcac": y.value,
      "5778d022": V.value
    }));
    const e = a, n = r, c = M({
      componentName: "MazCheckbox",
      providedId: e.id
    }), i = l(
      () => typeof e.value != "boolean" && Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : typeof e.modelValue == "boolean" ? e.modelValue : !1
    ), k = l(() => {
      switch (e.size) {
        case "xl":
          return "2.25rem";
        case "lg":
          return "2rem";
        default:
          return "1.625rem";
        case "sm":
          return "1.425rem";
        case "xs":
          return "1.325rem";
        case "mini":
          return "1.2rem";
      }
    }), x = l(() => {
      switch (e.size) {
        case "xl":
          return "maz-text-2xl";
        case "lg":
          return "maz-text-xl";
        default:
          return "maz-text-lg";
        case "sm":
          return "maz-text-base";
        case "xs":
          return "maz-text-sm";
        case "mini":
          return "maz-text-xs";
      }
    }), v = l(() => `var(--maz-color-${e.color}-contrast)`), y = l(() => `var(--maz-color-${e.color})`), V = l(
      () => ["black", "transparent"].includes(e.color) ? "var(--maz-color-muted)" : `var(--maz-color-${e.color}-alpha)`
    );
    function z(o) {
      ["Space"].includes(o.code) && (o.preventDefault(), m(e.value ?? !e.modelValue));
    }
    function g(o) {
      return typeof o == "boolean" && (typeof e.modelValue == "boolean" || e.modelValue === void 0 || e.modelValue === null) ? !e.modelValue : Array.isArray(e.modelValue) && typeof o != "boolean" ? e.modelValue.includes(o) ? e.modelValue.filter((t) => t !== o) : [...e.modelValue, o] : [o];
    }
    function m(o) {
      const t = g(o);
      n("update:model-value", t), n("change", t);
    }
    return (o, t) => (p(), b("label", {
      for: d(c),
      class: h(["m-checkbox", [{ "--disabled": o.disabled }, e.class]]),
      tabindex: "0",
      style: I(o.style),
      role: "checkbox",
      "aria-checked": i.value,
      onKeydown: z
    }, [
      u("input", S({
        id: d(c),
        checked: i.value
      }, o.$attrs, {
        tabindex: "-1",
        disabled: o.disabled,
        name: o.name,
        type: "checkbox",
        onChange: t[0] || (t[0] = (s) => {
          var f;
          return m(o.value ?? ((f = s == null ? void 0 : s.target) == null ? void 0 : f.checked));
        })
      }), null, 16, O),
      u("span", null, [
        B(d(H), {
          class: h(["check-icon", x.value])
        }, null, 8, ["class"])
      ]),
      A(o.$slots, "default", {}, () => [
        N(
          $(o.label),
          1
          /* TEXT */
        )
      ], !0)
    ], 46, K));
  }
}), T = (a, r) => {
  const e = a.__vccOpts || a;
  for (const [n, c] of r)
    e[n] = c;
  return e;
}, F = /* @__PURE__ */ T(P, [["__scopeId", "data-v-06d3ee3a"]]);
export {
  F as default
};
