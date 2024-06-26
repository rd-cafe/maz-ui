export type Props = {
    /** Title of the modal in header */
    title?: string;
    /** Remove the close button in header */
    noClose?: boolean;
    /** Modal's width */
    width?: string;
    /** Modal's max-width */
    maxWidth?: string;
    /** Modal's max-height */
    maxHeight?: string;
    /**  Modal's content becomes scrollable - warning: a overflow is applied */
    scrollable?: boolean;
    /** Persistent dialog (not closable by clicking outside and remove close button) */
    persistent?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    title: undefined;
    noClose: boolean;
    width: string;
    maxWidth: string;
    maxHeight: string;
    scrollable: boolean;
    persistent: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    open: (...args: any[]) => void;
    "update:model-value": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    title: undefined;
    noClose: boolean;
    width: string;
    maxWidth: string;
    maxHeight: string;
    scrollable: boolean;
    persistent: boolean;
}>>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    width: string;
    persistent: boolean;
    noClose: boolean;
    maxWidth: string;
    maxHeight: string;
    scrollable: boolean;
}, {}>, {
    header?(_: {
        close: () => void;
    }): any;
    title?(_: {}): any;
    default?(_: {
        close: () => void;
    }): any;
    footer?(_: {
        close: () => void;
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
