import './assets/MazSpinner.css';
import { defineComponent as s, openBlock as r, createElementBlock as a, normalizeClass as p, pushScopeId as i, popScopeId as l, createElementVNode as d } from "vue";
const h = (e) => (i("data-v-c67298ec"), e = e(), l(), e), _ = ["width", "height"], m = /* @__PURE__ */ h(() => /* @__PURE__ */ d(
  "path",
  { d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" },
  null,
  -1
  /* HOISTED */
)), u = [
  m
], g = /* @__PURE__ */ s({
  __name: "MazSpinner",
  props: {
    size: { type: String, default: "2em" },
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e) {
    return (o, t) => (r(), a("svg", {
      width: e.size,
      height: e.size,
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 50 50",
      "xml:space": "preserve",
      class: p(["m-spinner", `m-spinner--${e.color}`]),
      style: { "enable-background": "new 0 0 50 50" }
    }, u, 10, _));
  }
}), v = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [c, n] of o)
    t[c] = n;
  return t;
}, x = /* @__PURE__ */ v(g, [["__scopeId", "data-v-c67298ec"]]);
export {
  x as default
};
