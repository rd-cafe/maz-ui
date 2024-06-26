import { type HTMLAttributes } from 'vue';
import type { Color } from './types';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type { Color, Size };
export type Props = {
    /** The style of the component. */
    style?: HTMLAttributes['style'];
    /** The class of the component. */
    class?: HTMLAttributes['class'];
    /** The value of the component (v-model). */
    modelValue?: string | number;
    /** The length of the code. */
    codeLength?: number;
    /** The type of the input field. */
    type?: 'text' | 'number';
    /** Whether to accept alpha characters. */
    acceptAlpha?: boolean;
    /** Whether the input is required. */
    required?: boolean;
    /** Whether the input is disabled. */
    disabled?: boolean;
    /** Whether there is an error with the input. */
    error?: boolean;
    /** Whether the input is successful. */
    success?: boolean;
    /** Whether there is a warning with the input. */
    warning?: boolean;
    /** The size of the component. */
    size?: Size;
    /** The color of the component. */
    color?: Color;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    codeLength: number;
    type: string;
    acceptAlpha: boolean;
    required: boolean;
    disabled: boolean;
    error: boolean;
    success: boolean;
    warning: boolean;
    size: string;
    color: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (value?: string | number | undefined) => void;
    completed: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    codeLength: number;
    type: string;
    acceptAlpha: boolean;
    required: boolean;
    disabled: boolean;
    error: boolean;
    success: boolean;
    warning: boolean;
    size: string;
    color: string;
}>>> & {
    "onUpdate:model-value"?: ((value?: string | number | undefined) => any) | undefined;
    onCompleted?: (() => any) | undefined;
}, {
    size: Size;
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    error: boolean;
    success: boolean;
    warning: boolean;
    type: "number" | "text";
    disabled: boolean;
    color: Color;
    class: any;
    required: boolean;
    modelValue: string | number;
    codeLength: number;
    acceptAlpha: boolean;
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
