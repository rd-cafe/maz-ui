import './assets/MazTextarea.css';
var L = Object.defineProperty;
var q = (r, o, e) => o in r ? L(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e;
var p = (r, o, e) => (q(r, typeof o != "symbol" ? o + "" : o, e), e);
import { getCurrentInstance as F, computed as n, defineComponent as I, ref as v, onMounted as M, onBeforeUnmount as R, openBlock as c, createElementBlock as f, normalizeClass as g, normalizeStyle as x, createCommentVNode as i, unref as y, createTextVNode as C, toDisplayString as N, withDirectives as S, createElementVNode as U, mergeProps as $, toHandlers as H, vModelText as _ } from "vue";
function j({
  componentName: r,
  providedId: o
}) {
  const e = F();
  return n(() => o ?? `${r}-${e == null ? void 0 : e.uid}`);
}
function D(r, o) {
  let e;
  return function(...s) {
    clearTimeout(e), e = setTimeout(() => {
      r.apply(this, s);
    }, o);
  };
}
class O {
  constructor(o) {
    p(this, "element");
    this.element = o, this.onFocus = this.onFocus.bind(this), this.autogrow = this.autogrow.bind(this), this.onResize = D(this.onResize.bind(this), 200), this.connect();
  }
  connect() {
    this.element.addEventListener("focus", this.onFocus), this.element.style.resize = "none", this.element.style.boxSizing = "border-box";
  }
  disconnect() {
    window.removeEventListener("resize", this.onResize), this.element.removeEventListener("input", this.autogrow);
  }
  onFocus() {
    this.autogrow(), this.element.addEventListener("input", this.autogrow), window.addEventListener("resize", this.onResize), this.element.removeEventListener("focus", this.onFocus);
  }
  onResize() {
    this.autogrow();
  }
  autogrow() {
    this.element.style.height = "auto", this.element.style.overflow = "hidden", this.element.style.height = `${this.element.scrollHeight}px`;
  }
}
const A = ["for"], P = { key: 0 }, G = ["id", "placeholder", "name", "disabled", "required"], J = /* @__PURE__ */ I({
  inheritAttrs: !1,
  __name: "MazTextarea",
  props: {
    style: { default: void 0 },
    class: { default: void 0 },
    modelValue: { default: void 0 },
    id: { default: void 0 },
    name: { default: "MazTextarea" },
    label: { default: void 0 },
    placeholder: { default: void 0 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 },
    hint: { default: void 0 },
    color: { default: "primary" }
  },
  emits: ["input", "focus", "blur", "change"],
  setup(r, { emit: o }) {
    const e = r, s = o;
    let a;
    const m = j({
      componentName: "MazTextarea",
      providedId: e.id
    }), u = v(), l = v(!1), z = n(() => e.modelValue !== void 0 && e.modelValue !== "");
    M(() => {
      u.value && (a = new O(u.value));
    }), R(() => {
      a == null || a.disconnect();
    });
    const h = n({
      get: () => e.modelValue,
      set: (t) => s("input", t)
    }), w = (t) => {
      s("focus", t), l.value = !0;
    }, T = (t) => {
      s("blur", t), l.value = !1;
    }, E = (t) => s("change", t), d = n(() => e.label || e.hint), V = n(
      () => d.value && (l.value || z.value || !!e.placeholder)
    ), B = n(() => {
      if (e.error)
        return "maz-border-danger";
      if (e.success)
        return "maz-border-success";
      if (e.warning)
        return "maz-border-warning";
      if (l.value) {
        if (e.color === "black")
          return "maz-border-black";
        if (e.color === "danger")
          return "maz-border-danger";
        if (e.color === "info")
          return "maz-border-info";
        if (e.color === "primary")
          return "maz-border-primary";
        if (e.color === "secondary")
          return "maz-border-secondary";
        if (e.color === "success")
          return "maz-border-success";
        if (e.color === "warning")
          return "maz-border-warning";
        if (e.color === "white")
          return "maz-border-white";
      }
      return "--default-border";
    });
    return (t, b) => (c(), f(
      "div",
      {
        class: g(["m-textarea", [
          {
            "--is-disabled": t.disabled,
            "--has-label": d.value
          },
          e.class
        ]]),
        style: x(t.style)
      },
      [
        i(" eslint-disable vuejs-accessibility/label-has-for "),
        d.value ? (c(), f("label", {
          key: 0,
          for: y(m),
          class: g(["m-textarea__label", [
            {
              "maz-text-danger-600": t.error,
              "maz-text-success-600": t.success,
              "maz-text-warning-600": t.warning,
              "--has-state": t.error || t.warning || t.success,
              "--should-up": V.value
            }
          ]])
        }, [
          C(
            N(t.hint || t.label) + " ",
            1
            /* TEXT */
          ),
          t.required ? (c(), f("sup", P, "*")) : i("v-if", !0)
        ], 10, A)) : i("v-if", !0),
        i(" eslint-enable vuejs-accessibility/label-has-for "),
        S(U("textarea", $({
          id: y(m),
          ref_key: "TextareaElement",
          ref: u
        }, t.$attrs, {
          "onUpdate:modelValue": b[0] || (b[0] = (k) => h.value = k),
          placeholder: t.placeholder,
          name: t.name,
          disabled: t.disabled,
          required: t.required,
          class: [B.value]
        }, H({
          blur: T,
          focus: w,
          change: E
        }, !0)), null, 16, G), [
          [_, h.value]
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), K = (r, o) => {
  const e = r.__vccOpts || r;
  for (const [s, a] of o)
    e[s] = a;
  return e;
}, X = /* @__PURE__ */ K(J, [["__scopeId", "data-v-3b0f47dc"]]);
export {
  X as default
};
