import type { DirectiveBinding } from 'vue';
type vClosableBindingValueHandler = (...args: any[]) => any;
type vClosableBindingValueObject = {
    handler: vClosableBindingValueHandler;
    exclude?: string[];
};
type vClosableBindingValue = vClosableBindingValueObject | vClosableBindingValueHandler;
type vClosableBinding = DirectiveBinding<vClosableBindingValue>;
declare function unbind(element: HTMLElement, binding: vClosableBinding): void;
declare function bind(element: HTMLElement, binding: vClosableBinding): void;
declare const directive: {
    mounted: typeof bind;
    unmounted: typeof unbind;
};
declare const plugin: {
    install: (app: import("vue").App<any>) => void;
};
export { directive as vClosable, plugin as vClosableInstall, vClosableBindingValue };
