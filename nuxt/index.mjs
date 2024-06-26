import { resolve, dirname } from 'node:path';
import { defineNuxtModule, createResolver, addComponent, addImports, addPlugin } from '@nuxt/kit';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();

const _dirname$1 = fileURLToPath(new URL(".", import.meta.url));
const INPUT_COMPONENT_DIR = resolve(_dirname$1, "./../components");
const getComponentList = async () => {
  try {
    const fileList = await readdir(INPUT_COMPONENT_DIR, { withFileTypes: true });
    return fileList.filter(
      (dirent) => dirent.isFile() && dirent.name.startsWith("Maz") && !dirent.name.endsWith(".d.ts") && !dirent.name.endsWith(".css")
    ).map(({ name }) => ({
      name: name.split(".")[0],
      fullName: `${name}`,
      path: `${INPUT_COMPONENT_DIR}/${name}`
    }));
  } catch (error) {
    throw new Error(
      `[get-component-list] \u{1F534} Error occurred while generating components entry file ${error}`
    );
  }
};

const _dirname = dirname(fileURLToPath(import.meta.url));
const module = defineNuxtModule({
  meta: {
    name: "maz-ui",
    configKey: "mazUi",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  defaults: {
    devtools: true,
    injectCss: true,
    injectComponents: true
  },
  // eslint-disable-next-line sonarjs/cognitive-complexity
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    nuxt.options.build.transpile = ["maz-ui", ...nuxt.options.build.transpile];
    const moduleOptions = defu(nuxt.options.runtimeConfig.public.mazUi, options);
    nuxt.options.runtimeConfig.public.mazUi = moduleOptions;
    if (moduleOptions.injectCss) {
      const path = process.env.MAZ_UI_DEV === "true" ? "maz-ui/css/index.css" : "maz-ui/css/main.css";
      nuxt.options.css = [path, ...nuxt.options.css];
    }
    if (moduleOptions.injectComponents) {
      const componentList = await getComponentList();
      for (const { name } of componentList) {
        addComponent({
          name,
          filePath: process.env.MAZ_UI_DEV === "true" ? `maz-ui/components/${name}.vue` : `maz-ui/components/${name}.mjs`
        });
      }
      addImports({
        from: "maz-ui",
        name: "useMazDialogPromise",
        as: "useMazDialogPromise"
      });
    }
    if (moduleOptions.injectAos) {
      addPlugin(resolve(_dirname, "./runtime/plugins/aos"));
      addImports({
        from: resolve(_dirname, "./runtime/composables/use-aos"),
        name: "useAos",
        as: "useAos"
      });
      const injectAosCSS = typeof moduleOptions.injectAos === "object" && typeof moduleOptions.injectAos.injectCss === "boolean" ? moduleOptions.injectAos.injectCss : true;
      if (typeof moduleOptions.injectAos === "object" && injectAosCSS && process.env.MAZ_UI_DEV === "true") {
        nuxt.options.css = ["maz-ui/dist/css/aos.css", ...nuxt.options.css];
      } else if (typeof moduleOptions.injectAos === "object" && injectAosCSS) {
        nuxt.options.css = ["maz-ui/css/aos.css", ...nuxt.options.css];
      }
    }
    if (moduleOptions.injectUseToast) {
      addPlugin(resolve(_dirname, "./runtime/plugins/toaster"));
      addImports({
        from: resolve(_dirname, "./runtime/composables/use-toast"),
        name: "useToast",
        as: "useToast"
      });
    }
    if (moduleOptions.injectUseWait) {
      addPlugin(resolve(_dirname, "./runtime/plugins/wait"));
      addImports({
        from: resolve(_dirname, "./runtime/composables/use-wait"),
        name: "useWait",
        as: "useWait"
      });
    }
    if (moduleOptions.installVZoomImg) {
      addPlugin(resolve(_dirname, "./runtime/plugins/v-zoom-img"));
    }
    if (moduleOptions.installVLazyImg) {
      addPlugin(resolve(_dirname, "./runtime/plugins/v-lazy-img"));
    }
    if (moduleOptions.installVClickOutside) {
      addPlugin(resolve(_dirname, "./runtime/plugins/v-click-outside"));
    }
    if (moduleOptions.installVFullscreenImg) {
      addPlugin(resolve(_dirname, "./runtime/plugins/v-fullscreen-img"));
    }
    if (moduleOptions.installVTooltip) {
      addPlugin(resolve(_dirname, "./runtime/plugins/v-tooltip"));
    }
    if (moduleOptions.injectUseThemeHandler) {
      addImports({
        from: resolve(_dirname, "./runtime/composables/use-theme-handler"),
        name: "useThemeHandler",
        as: "useThemeHandler"
      });
    }
    if (moduleOptions.injectUseIdleTimeout) {
      addImports({
        from: "maz-ui",
        name: "useIdleTimeout",
        as: "useIdleTimeout"
      });
    }
    if (moduleOptions.injectUseReadingTime) {
      addImports({
        from: "maz-ui",
        name: "useReadingTime",
        as: "useReadingTime"
      });
    }
    if (moduleOptions.injectUseWindowSize) {
      addImports({
        from: "maz-ui",
        name: "useWindowSize",
        as: "useWindowSize"
      });
    }
    if (moduleOptions.injectUseBreakpoints) {
      addImports({
        from: "maz-ui",
        name: "useBreakpoints",
        as: "useBreakpoints"
      });
    }
    if (moduleOptions.injectUseUserVisibility) {
      addImports({
        from: "maz-ui",
        name: "useUserVisibility",
        as: "useUserVisibility"
      });
    }
    if (moduleOptions.injectUseUserVisibility) {
      addImports({
        from: "maz-ui",
        name: "useUserVisibility",
        as: "useUserVisibility"
      });
    }
    if (moduleOptions.injectUseStringMatching) {
      addImports({
        from: "maz-ui",
        name: "useStringMatching",
        as: "useStringMatching"
      });
    }
    if (moduleOptions.injectUseTimer) {
      addImports({
        from: "maz-ui",
        name: "useTimer",
        as: "useTimer"
      });
    }
    if (moduleOptions.defaultMazIconPath) {
      addPlugin(resolve(_dirname, "./runtime/plugins/maz-icon-path"));
    }
    if (options.devtools) {
      nuxt.hook("devtools:customTabs", (iframeTabs) => {
        iframeTabs.push({
          // unique identifier
          name: "maz-ui",
          // title to display in the tab
          title: "maz-ui",
          // any icon from Iconify, or a URL to an image
          icon: "https://maz-ui.com/img/icons/android-chrome-512x512.png",
          // iframe view
          view: {
            type: "iframe",
            src: "https://maz-ui.com"
          }
        });
      });
    }
  }
});

export { module as default };
