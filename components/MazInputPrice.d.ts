export type Props = {
    /** @model The value of the input */
    modelValue?: number | string;
    /** The currency to use */
    currency?: string;
    /** The locale to use */
    locale?: string;
    /** The minimum value that the input can accept */
    min?: number;
    /** The maximum value that the input can accept */
    max?: number;
    /** The input will be displayed without icon */
    noIcon?: boolean;
    /** The input will be displayed in full width */
    block?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: undefined;
    currency: string;
    locale: string;
    min: number;
    max: number;
    noIcon: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (...args: any[]) => void;
    formatted: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: undefined;
    currency: string;
    locale: string;
    min: number;
    max: number;
    noIcon: boolean;
}>>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onFormatted?: ((...args: any[]) => any) | undefined;
}, {
    currency: string;
    max: number;
    min: number;
    modelValue: string | number;
    locale: string;
    noIcon: boolean;
}, {}>, {
    "left-icon"?(_: {}): any;
}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
