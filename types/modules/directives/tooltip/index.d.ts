import { type DirectiveBinding } from 'vue';
import './style.css';
import { type Color } from '../../../components/types';
type vTooltipColor = Exclude<Color, 'transparent'> | 'default' | 'light' | 'dark';
type vTooltipOptions = {
    position?: 'top' | 'bottom' | 'left' | 'right';
    color?: vTooltipColor;
};
type vTooltipBindingValue = string | ({
    text: string;
    open?: boolean;
} & vTooltipOptions);
export type TooltipBinding = DirectiveBinding<vTooltipBindingValue>;
declare const directive: {
    beforeMount(el: HTMLElement, binding: DirectiveBinding<vTooltipBindingValue>): void;
    updated(el: HTMLElement, binding: DirectiveBinding<vTooltipBindingValue>): void;
    unmounted(el: HTMLElement, binding: DirectiveBinding<vTooltipBindingValue>): void;
};
declare const plugin: {
    install: (app: import("vue").App<any>, options?: vTooltipOptions) => void;
};
export { plugin as vTooltipInstall, directive as vTooltip, type vTooltipOptions, type vTooltipBindingValue, type vTooltipColor, };
