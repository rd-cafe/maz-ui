export type Props = {
    src: string;
    clickedElementBounds?: {
        top: number;
        left: number;
        height: number;
        width: number;
    };
    offset?: number;
    animation?: {
        duration?: number;
        easing?: string;
    };
    openInstanceClass?: string;
    clickedElement: HTMLElement;
    destroy?: () => void;
    alt?: string;
    zoom?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    zoom: boolean;
    offset: undefined;
    destroy: undefined;
    alt: undefined;
    animation: () => {
        duration: number;
        easing: string;
    };
    clickedElementBounds: undefined;
    openInstanceClass: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    next: (...args: any[]) => void;
    previous: (...args: any[]) => void;
    "before-close": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    zoom: boolean;
    offset: undefined;
    destroy: undefined;
    alt: undefined;
    animation: () => {
        duration: number;
        easing: string;
    };
    clickedElementBounds: undefined;
    openInstanceClass: string;
}>>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    onPrevious?: ((...args: any[]) => any) | undefined;
    "onBefore-close"?: ((...args: any[]) => any) | undefined;
}, {
    destroy: () => void;
    alt: string;
    clickedElementBounds: {
        top: number;
        left: number;
        height: number;
        width: number;
    };
    offset: number;
    animation: {
        duration?: number | undefined;
        easing?: string | undefined;
    };
    openInstanceClass: string;
    zoom: boolean;
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
