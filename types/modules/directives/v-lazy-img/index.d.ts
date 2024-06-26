import type { vLazyImgOptions, vLazyImgBindingValue } from './types';
declare const plugin: {
    install(app: import("vue").App<any>, opts?: Partial<import("./types").ClassOptions>): void;
};
export { vLazyImg } from './lazy-img.directive';
export { plugin as vLazyImgInstall, vLazyImgOptions, vLazyImgBindingValue };
