import './assets/MazBadge.css';
import { defineComponent as n, openBlock as r, createElementBlock as s, normalizeClass as d, normalizeStyle as p, renderSlot as u } from "vue";
const f = /* @__PURE__ */ n({
  __name: "MazBadge",
  props: {
    color: { default: "primary" },
    size: { default: "0.8em" },
    nowrap: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    pastel: { type: Boolean, default: !1 },
    roundedSize: { default: "md" }
  },
  setup(o) {
    return (e, a) => (r(), s(
      "span",
      {
        class: d(["m-badge", [
          `--${e.color}`,
          { "--outline": e.outline, "--pastel": e.pastel, "--nowrap": e.nowrap },
          `--rounded-${e.roundedSize}`
        ]]),
        style: p({ fontSize: e.size })
      },
      [
        u(e.$slots, "default", {}, void 0, !0)
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), i = (o, e) => {
  const a = o.__vccOpts || o;
  for (const [t, l] of e)
    a[t] = l;
  return a;
}, m = /* @__PURE__ */ i(f, [["__scopeId", "data-v-bcdf6ba1"]]);
export {
  m as default
};
