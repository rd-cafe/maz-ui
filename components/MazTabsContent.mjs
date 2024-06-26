import { inject as l, defineComponent as c, ref as i, watch as s, openBlock as u, createElementBlock as m, normalizeClass as f, renderSlot as d } from "vue";
function v(n, e) {
  let t;
  return function(...o) {
    clearTimeout(t), t = setTimeout(() => {
      n.apply(this, o);
    }, e);
  };
}
function p(n, e) {
  const t = l(n, e);
  if (!t)
    throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${n}`);
  return t;
}
const h = /* @__PURE__ */ c({
  __name: "MazTabsContent",
  setup(n) {
    const e = i(!1), { currentTab: t } = p("maz-tabs"), o = () => {
      e.value = !0, r();
    }, r = v(function() {
      e.value = !1;
    }, 700);
    return s(
      () => t.value,
      () => o(),
      { immediate: !0 }
    ), (a, w) => (u(), m(
      "div",
      {
        class: f(["m-tabs-content maz-relative", { "maz-overflow-hidden": e.value }])
      },
      [
        d(a.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  h as default
};
