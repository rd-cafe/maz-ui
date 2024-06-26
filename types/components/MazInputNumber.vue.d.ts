import { type HTMLAttributes } from 'vue';
import type { Size } from './types';
export type { Size };
export type Props = {
    /** The inline style object for the component. */
    style?: HTMLAttributes['style'];
    /** The CSS class name for the component. */
    class?: HTMLAttributes['class'];
    /** The value of the component (v-model). */
    modelValue?: number;
    /** Whether the input number is disabled or not. */
    disabled?: boolean;
    /** The maximum value allowed for the input number. */
    max?: number;
    /** The minimum value allowed for the input number. */
    min?: number;
    /** The step value for incrementing or decrementing the input number. */
    step?: number;
    /** The size of the input number component. */
    size?: Size;
    /** Whether to hide the increment and decrement buttons or not. */
    noButtons?: boolean;
    /** Whether to center the text inside the input or not. */
    textCenter?: boolean;
    /** The inputmode attribute for the input. */
    inputmode?: HTMLAttributes['inputmode'];
    /** The input will be displayed in full width */
    block?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    disabled: boolean;
    max: number;
    min: number;
    step: number;
    size: string;
    noButtons: boolean;
    textCenter: boolean;
    inputmode: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: Event) => void;
    blur: (value: Event) => void;
    change: (value: Event) => void;
    focus: (value: Event) => void;
    "update:model-value": (value?: number | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    disabled: boolean;
    max: number;
    min: number;
    step: number;
    size: string;
    noButtons: boolean;
    textCenter: boolean;
    inputmode: string;
}>>> & {
    onFocus?: ((value: Event) => any) | undefined;
    onBlur?: ((value: Event) => any) | undefined;
    onChange?: ((value: Event) => any) | undefined;
    onClick?: ((value: Event) => any) | undefined;
    "onUpdate:model-value"?: ((value?: number | undefined) => any) | undefined;
}, {
    size: Size;
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    disabled: boolean;
    class: any;
    max: number;
    min: number;
    modelValue: number;
    step: number;
    inputmode: "search" | "text" | "numeric" | "none" | "email" | "tel" | "url" | "decimal";
    noButtons: boolean;
    textCenter: boolean;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
