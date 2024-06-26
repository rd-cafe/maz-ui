import { defineNuxtPlugin, useRouter } from "#imports";
import { AosHandler, installAos } from "maz-ui";
export default defineNuxtPlugin(({ $config, vueApp }) => {
  const aosOptions = $config.public.mazUi?.injectAos;
  const options = typeof aosOptions === "object" ? { ...aosOptions, router: aosOptions.router ? useRouter() : void 0 } : {};
  vueApp.use(installAos, options);
  return {
    provide: {
      aos: new AosHandler(options)
    }
  };
});
