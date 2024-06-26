export type Props = {
    /** Do not display the scroll buttons */
    noScrollBtn?: boolean;
    /** Aria label for the previous button */
    ariaLabelPreviousButton?: string;
    /** Aria label for the next button */
    ariaLabelNextButton?: string;
    /** Hide the scrollbar when not active */
    hideScrollbar?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    ariaLabelPreviousButton: string;
    ariaLabelNextButton: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    ariaLabelPreviousButton: string;
    ariaLabelNextButton: string;
}>>>, {
    ariaLabelPreviousButton: string;
    ariaLabelNextButton: string;
}, {}>, {
    title?(_: {}): any;
    "previous-icon"?(_: {}): any;
    "next-icon"?(_: {}): any;
    default?(_: {}): any;
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
