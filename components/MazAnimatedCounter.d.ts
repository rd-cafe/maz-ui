declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    /**
     * The number to animate
     */
    count: number;
    /**
     * Duration of the animation in milliseconds
     * @default 1000
     */
    duration?: number | undefined;
    /**
     * Suffix to display next to the number
     */
    prefix?: string | undefined;
    /**
     * Suffix to display next to the number
     */
    suffix?: string | undefined;
}>, {
    duration: number;
    prefix: undefined;
    suffix: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    /**
     * The number to animate
     */
    count: number;
    /**
     * Duration of the animation in milliseconds
     * @default 1000
     */
    duration?: number | undefined;
    /**
     * Suffix to display next to the number
     */
    prefix?: string | undefined;
    /**
     * Suffix to display next to the number
     */
    suffix?: string | undefined;
}>, {
    duration: number;
    prefix: undefined;
    suffix: undefined;
}>>>, {
    duration: number;
    prefix: string;
    suffix: string;
}, {}>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
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
