import { defineNuxtPlugin } from "#imports";
import { WaitHandler } from "maz-ui";
export default defineNuxtPlugin(() => {
  const waitServer = {
    loaders: { value: [] },
    anyLoading: { value: false },
    isLoading: () => false,
    stop: () => {
    },
    start: () => {
    }
  };
  return {
    provide: {
      wait: import.meta.server ? waitServer : new WaitHandler()
    }
  };
});
