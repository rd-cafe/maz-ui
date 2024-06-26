import { type HTMLAttributes } from 'vue';
import type { Color, Size } from './types';
export type { Color, Size };
export type Props = {
    /** Style attribut of the component root element */
    style?: HTMLAttributes['style'];
    /** Class attribut of the component root element */
    class?: HTMLAttributes['class'];
    /** @model The modelValue of the input */
    modelValue?: string[] | number[];
    /** The placeholder of the input */
    placeholder?: string;
    /** The label of the input */
    label?: string;
    /** Disable the input */
    disabled?: boolean;
    /** Display the input with error style */
    error?: boolean;
    /** Display the input with success style */
    success?: boolean;
    /** Display the input with warning style */
    warning?: boolean;
    /** The size of the input */
    size?: Size;
    /** The color of the input */
    color?: Color;
    /** The input will be displayed in full width */
    block?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    placeholder: undefined;
    label: undefined;
    disabled: boolean;
    error: boolean;
    success: boolean;
    warning: boolean;
    size: string;
    color: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    placeholder: undefined;
    label: undefined;
    disabled: boolean;
    error: boolean;
    success: boolean;
    warning: boolean;
    size: string;
    color: string;
}>>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    size: Size;
    label: string;
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    error: boolean;
    success: boolean;
    warning: boolean;
    disabled: boolean;
    color: Color;
    class: any;
    modelValue: string[] | number[];
    placeholder: string;
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
