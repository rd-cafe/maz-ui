export type Props = {
    /** The title of the drawer */
    title?: string;
    /** The variant of the drawer */
    variant?: 'right' | 'top' | 'left' | 'bottom';
    /** The size of the drawer */
    size?: string;
    /** The class of the backdrop */
    backdropClass?: string;
    /** Disable the close button */
    noClose?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    title: undefined;
    variant: string;
    backdropClass: undefined;
    size: string;
    noClose: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "before-close": () => void;
    open: () => void;
    close: () => void;
    "update:model-value": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    title: undefined;
    variant: string;
    backdropClass: undefined;
    size: string;
    noClose: boolean;
}>>> & {
    onClose?: (() => any) | undefined;
    "onBefore-close"?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:model-value"?: ((value: boolean) => any) | undefined;
}, {
    size: string;
    title: string;
    variant: "top" | "bottom" | "left" | "right";
    backdropClass: string;
    noClose: boolean;
}, {}>, {
    title?(_: {
        close: () => void;
    }): any;
    default?(_: {
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
