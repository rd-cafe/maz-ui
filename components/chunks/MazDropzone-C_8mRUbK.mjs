import '../assets/MazDropzone.css';
import { defineAsyncComponent as H, defineComponent as Q, ref as h, computed as V, onMounted as j, onBeforeUnmount as I, resolveComponent as N, openBlock as f, createElementBlock as T, normalizeStyle as W, renderSlot as w, createElementVNode as c, toDisplayString as y, createBlock as J } from "vue";
function G(n) {
  return n.default ?? n;
}
const K = H(() => import("./MazSpinner-DJkziC4O.mjs")), P = `<div class="dz-preview dz-file-preview maz-flex-1">
  <div class="dz-image">
      <div data-dz-thumbnail-bg></div>
  </div>
  <div class="dz-details">
      <div class="dz-filename"><span data-dz-name></span></div>
      <div class="dz-size"><span data-dz-size></span></div>
  </div>
  <div class="dz-progress">
    <span class="dz-upload" data-dz-uploadprogress></span>
  </div>
  <div class="dz-success-mark">
    <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" height="6rem" viewBox="0 0 24 24" width="6rem" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
  </div>
  <div class="dz-error-mark">
    <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" height="6rem" viewBox="0 0 24 24" width="6rem" fill="currentColor"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
  </div>
</div>`, X = Q({
  name: "MazDropzone",
  components: { MazSpinner: K },
  props: {
    options: { type: Object, required: !0 },
    height: {
      type: [Number, String],
      default: "245px"
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    noDestroyOnUnmount: { type: Boolean, default: !1 }
  },
  emits: [
    "thumbnail",
    "error",
    "drop",
    "dragstart",
    "dragend",
    "dragenter",
    "dragover",
    "dragleave",
    "paste",
    "addedfile",
    "addedfiles",
    "removedfile",
    "success",
    "processing",
    "processingmultiple",
    "uploadprogress",
    "totaluploadprogress",
    "sending",
    "sendingmultiple",
    "canceled",
    "canceledmultiple",
    "complete",
    "completemultiple",
    "maxfilesexceeded",
    "maxfilesreached",
    "queuecomplete",
    "reset"
  ],
  setup(n, { emit: t }) {
    const r = h(), p = h(!1);
    let e;
    const g = h(), v = V(() => ({
      width: typeof n.width == "number" ? `${n.width}px` : n.width,
      height: typeof n.height == "number" ? `${n.height}px` : n.height
    })), u = (s, l) => {
      t("thumbnail", { file: s, dataUrl: l });
      let d;
      s.previewElement.classList.remove("dz-file-preview"), s.previewElement.querySelectorAll("[data-dz-thumbnail-bg]").forEach((a) => {
        d = a, d.alt = s.name, d.style.backgroundImage = `url('${l}')`;
      }), s.status === "success" && e.emit("complete", s);
    }, m = (s, l, d) => {
      t("error", { file: s, message: l, xhr: d }), e.options.autoRemoveOnError && setTimeout(() => e.removeFile(s), 3e3);
    }, F = (s, l, d) => {
      t("error", { files: s, message: l, xhr: d }), e.options.autoRemoveOnError && setTimeout(() => {
        for (const o of s)
          e.removeFile(o);
      }, 3e3);
    };
    j(async () => {
      const s = {
        parallelUploads: n.options.maxFiles,
        previewTemplate: P,
        addRemoveLinks: !0
      };
      if (r.value) {
        const { default: l } = await import("dropzone"), d = G(l);
        e = new d(r.value, {
          ...s,
          ...n.options
        }), e && (g.value = e.options, p.value = !0, e.on("thumbnail", u), e.on("error", m), e.on("errormultiple", F), e.on("drop", (o) => t("drop", o)), e.on("dragstart", (o) => t("dragstart", o)), e.on("dragend", (o) => t("dragend", o)), e.on("dragenter", (o) => t("dragenter", o)), e.on("dragover", (o) => t("dragover", o)), e.on("dragleave", (o) => t("dragleave", o)), e.on("paste", (o) => t("paste", o)), e.on("addedfile", (o) => t("addedfile", o)), e.on("addedfiles", (o) => t("addedfiles", o)), e.on("removedfile", (o) => t("removedfile", o)), e.on(
          "success",
          (o, a) => t("success", { file: o, response: a })
        ), e.on(
          "successmultiple",
          (o, a) => t("success", { files: o, responseText: a })
        ), e.on("processing", (o) => t("processing", o)), e.on(
          "processingmultiple",
          (o) => t("processingmultiple", o)
        ), e.on(
          "uploadprogress",
          (o, a, i) => t("uploadprogress", { file: o, progress: a, bytesSent: i })
        ), e.on(
          "totaluploadprogress",
          (o, a, i) => t("totaluploadprogress", {
            totalProgress: o,
            totalBytes: a,
            totalBytesSent: i
          })
        ), e.on(
          "sending",
          (o, a, i) => t("sending", { file: o, xhr: a, formData: i })
        ), e.on(
          "sendingmultiple",
          (o, a, i) => t("sendingmultiple", { files: o, xhr: a, formData: i })
        ), e.on("canceled", (o) => t("canceled", o)), e.on(
          "canceledmultiple",
          (o) => t("canceledmultiple", o)
        ), e.on("complete", (o) => t("complete", o)), e.on(
          "completemultiple",
          (o) => t("completemultiple", o)
        ), e.on("maxfilesexceeded", (o) => t("maxfilesexceeded", o)), e.on(
          "maxfilesreached",
          (o) => t("maxfilesreached", o)
        ), e.on("queuecomplete", () => {
          z().every((o) => o.manuallyAdded) || t("queuecomplete");
        }), e.on("reset", () => t("reset")));
      }
    });
    const b = (s, l) => (e.options = {
      ...e.options,
      [s]: l
    }, e.options), x = (s, l) => {
      e.emit("addedfile", s), e.emit("thumbnail", s, l), e.files.push(s);
    }, M = (s) => e.removeAllFiles(s), _ = () => e.processQueue(), S = () => e.destroy(), A = () => e.disable(), O = () => e.enable(), C = (s, l) => e.accept(s, l), k = (s) => e.addFile(s), B = (s, l, d, o, a) => e.resizeImage(s, l, d, o, a), E = (s) => e.cancelUpload(s), z = () => e.getAcceptedFiles(), $ = () => e.getRejectedFiles(), D = () => e.getFilesWithStatus(status), R = () => e.getQueuedFiles(), U = () => e.getUploadingFiles(), q = () => e.getAddedFiles(), L = () => e.getActiveFiles();
    return I(() => {
      n.noDestroyOnUnmount || e.destroy();
    }), {
      ButtonElement: r,
      dropzoneReady: p,
      dropzoneOptions: g,
      dropzoneStyle: v,
      setOption: b,
      manuallyAddFile: x,
      removeAllFiles: M,
      processQueue: _,
      destroy: S,
      disable: A,
      enable: O,
      accept: C,
      addFile: k,
      resizeImage: B,
      cancelUpload: E,
      getAcceptedFiles: z,
      getRejectedFiles: $,
      getFilesWithStatus: D,
      getQueuedFiles: R,
      getUploadingFiles: U,
      getAddedFiles: q,
      getActiveFiles: L
    };
  }
}), Y = (n, t) => {
  const r = n.__vccOpts || n;
  for (const [p, e] of t)
    r[p] = e;
  return r;
}, Z = { class: "dz-message" }, ee = /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "2em",
    width: "2em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "maz-dropzone__main-icon maz-text-normal",
    "aria-hidden": "true"
  },
  [
    /* @__PURE__ */ c("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }),
    /* @__PURE__ */ c("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z" })
  ],
  -1
  /* HOISTED */
), oe = { class: "maz-my-2 maz-text-normal" }, te = { class: "maz-my-0 maz-text-muted" };
function se(n, t, r, p, e, g) {
  const v = N("MazSpinner");
  return f(), T(
    "button",
    {
      ref: "ButtonElement",
      type: "button",
      name: "maz-dropzone",
      class: "maz-dropzone",
      style: W([n.dropzoneStyle])
    },
    [
      n.dropzoneReady ? w(n.$slots, "default", {
        key: 0,
        options: n.dropzoneOptions
      }, () => {
        var u, m;
        return [
          c("div", Z, [
            w(n.$slots, "icon", {}, () => [
              ee
            ]),
            c(
              "p",
              oe,
              y((u = n.dropzoneOptions) == null ? void 0 : u.dictDefaultMessage),
              1
              /* TEXT */
            ),
            c(
              "p",
              te,
              y((m = n.dropzoneOptions) == null ? void 0 : m.dictFilesDescriptions),
              1
              /* TEXT */
            )
          ])
        ];
      }) : (f(), J(v, { key: 1 }))
    ],
    4
    /* STYLE */
  );
}
const le = /* @__PURE__ */ Y(X, [["render", se]]);
export {
  le as M,
  Y as _
};
