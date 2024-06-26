import { type HTMLAttributes } from 'vue';
import type { Color } from './types';
export type { Color };
export type Props = {
    /** Style attribut of the component root element */
    style?: HTMLAttributes['style'];
    /** Class attribut of the component root element */
    class?: HTMLAttributes['class'];
    /** @model The value of the textarea */
    modelValue?: string;
    /** The id of the textarea */
    id?: string;
    /** The name of the textarea */
    name?: string;
    /** The label of the textarea */
    label?: string;
    /** The placeholder of the textarea */
    placeholder?: string;
    /** If the textarea is required */
    required?: boolean;
    /** If the textarea is disabled */
    disabled?: boolean;
    /** If the textarea is readonly */
    readonly?: boolean;
    /** If the textarea has an error */
    error?: boolean;
    /** If the textarea has a success */
    success?: boolean;
    /** If the textarea has a warning */
    warning?: boolean;
    /** The hint of the textarea */
    hint?: string;
    /** The color of the textarea */
    color?: Color;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    id: undefined;
    name: string;
    label: undefined;
    placeholder: undefined;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    error: boolean;
    success: boolean;
    warning: boolean;
    hint: undefined;
    color: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value?: string | undefined) => void;
    focus: (value: Event) => void;
    blur: (value: Event) => void;
    change: (value: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    id: undefined;
    name: string;
    label: undefined;
    placeholder: undefined;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    error: boolean;
    success: boolean;
    warning: boolean;
    hint: undefined;
    color: string;
}>>> & {
    onFocus?: ((value: Event) => any) | undefined;
    onBlur?: ((value: Event) => any) | undefined;
    onChange?: ((value: Event) => any) | undefined;
    onInput?: ((value?: string | undefined) => any) | undefined;
}, {
    label: string;
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    error: boolean;
    name: string;
    id: string;
    success: boolean;
    warning: boolean;
    disabled: boolean;
    color: Color;
    class: any;
    required: boolean;
    readonly: boolean;
    modelValue: string;
    placeholder: string;
    hint: string;
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
