import { type Color, type Size, type Props as MazBtnProps } from './MazBtn.vue';
type MazPagnationProps = {
    /** @model The current page number. */
    modelValue?: number;
    /**
     * Props apply to the MazBtn components.
     */
    buttonProps?: Partial<MazBtnProps>;
    /**
     * Number of results in this page. Useful for accessibility to set aria-setsize attribute. Partial of MazBtn props.
     */
    resultsSize?: number;
    /**
     * Color of the active button.
     */
    activeColor?: Color;
    /**
     * Color of the active button.
     */
    size?: Size;
    /**
     * Total number of pages.
     */
    totalPages: number;
    /**
     * Number of buttons to display before and after the current page.
     */
    pageRange?: number;
    /**
     * Enable loading state of current button
     */
    loading?: boolean;
};
export type { MazPagnationProps as Props };
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<MazPagnationProps>, {
    modelValue: number;
    buttonProps: undefined;
    pageRange: number;
    resultsSize: undefined;
    activeColor: string;
    size: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<MazPagnationProps>, {
    modelValue: number;
    buttonProps: undefined;
    pageRange: number;
    resultsSize: undefined;
    activeColor: string;
    size: string;
}>>> & {
    "onUpdate:model-value"?: ((value: number) => any) | undefined;
}, {
    size: Size;
    modelValue: number;
    buttonProps: Partial<MazBtnProps>;
    resultsSize: number;
    activeColor: Color;
    pageRange: number;
}, {}>, {
    "first-page-sr"?(_: {
        page: number;
    }): any;
    "previous-page-sr"?(_: {
        page: number;
    }): any;
    "page-sr"?(_: {
        page: number;
    }): any;
    "next-page-sr"?(_: {
        page: number;
    }): any;
    "last-page-sr"?(_: {
        page: number;
    }): any;
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
