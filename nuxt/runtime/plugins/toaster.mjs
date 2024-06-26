import { defineNuxtPlugin } from "#imports";
import { ToasterHandler } from "maz-ui";
export default defineNuxtPlugin(({ vueApp, $config }) => {
  const toasterOptions = $config.public.mazUi?.injectUseToast;
  const options = typeof toasterOptions === "object" ? toasterOptions : void 0;
  const instance = new ToasterHandler(vueApp, options);
  const toasterServer = {
    show: () => {
    },
    success: () => {
    },
    error: () => {
    },
    warning: () => {
    },
    info: () => {
    },
    message: () => {
    }
  };
  return {
    provide: {
      toast: import.meta.server ? toasterServer : instance
    }
  };
});
