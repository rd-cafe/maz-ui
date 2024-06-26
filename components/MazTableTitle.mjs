import './assets/MazTableTitle.css';
import { inject as c, defineComponent as a, openBlock as s, createElementBlock as l, normalizeClass as i, unref as _, renderSlot as u } from "vue";
function p(e, o) {
  const t = c(e, o);
  if (!t)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${e}`);
  return t;
}
const d = /* @__PURE__ */ a({
  __name: "MazTableTitle",
  setup(e) {
    const { size: o } = p("maz-table");
    return (t, r) => (s(), l(
      "th",
      {
        class: i(["m-table-title", `--${_(o)}`])
      },
      [
        u(t.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
}), f = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [r, n] of o)
    t[r] = n;
  return t;
}, v = /* @__PURE__ */ f(d, [["__scopeId", "data-v-7d02b262"]]);
export {
  v as default
};
