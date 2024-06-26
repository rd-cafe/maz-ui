import type { Color } from './types';
export type { Color };
export type Props = {
    /** The source of the image */
    src?: string | null;
    /** The caption of the avatar */
    caption?: string | null;
    /** The link of the avatar */
    href?: string;
    /** The link (router-link) of the avatar */
    to?: string | Record<string, unknown>;
    /** The alt of the image */
    alt?: string;
    /** The target of the link */
    target?: string;
    /** The size of the avatar */
    size?: string;
    /** Add a border to the avatar */
    bordered?: boolean;
    /** Make the avatar clickable */
    clickable?: boolean;
    /** Make the avatar square */
    square?: boolean;
    /** Remove the shadow */
    noElevation?: boolean;
    /** Show the caption */
    showCaption?: boolean;
    /** Make the image height full */
    imageHeightFull?: boolean;
    /** Remove the loader */
    noLoader?: boolean;
    /** The color of the clickable button */
    buttonColor?: Color;
    /** Remove the icon on hover when component is clickable */
    noClickableIcon?: boolean;
    /** Number of letters to display in the round text */
    letterCount?: number;
    /**
     * Size of the rounded
     * @values `'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'`
     */
    roundedSize?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** The fallback src to replace the src on loading error */
    fallbackSrc?: string;
    /** Load the fallback image by default */
    noPhoto?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    src: undefined;
    caption: undefined;
    href: undefined;
    to: undefined;
    alt: string;
    target: string;
    size: undefined;
    buttonColor: string;
    letterCount: undefined;
    roundedSize: string;
    fallbackSrc: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
    intersecting: (el: Element) => void;
    loading: (el: Element) => void;
    loaded: (el: Element) => void;
    error: (el: Element) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    src: undefined;
    caption: undefined;
    href: undefined;
    to: undefined;
    alt: string;
    target: string;
    size: undefined;
    buttonColor: string;
    letterCount: undefined;
    roundedSize: string;
    fallbackSrc: undefined;
}>>> & {
    onLoading?: ((el: Element) => any) | undefined;
    onLoaded?: ((el: Element) => any) | undefined;
    onError?: ((el: Element) => any) | undefined;
    onIntersecting?: ((el: Element) => any) | undefined;
    onClick?: ((event: MouseEvent) => any) | undefined;
}, {
    size: string;
    caption: string | null;
    src: string | null;
    alt: string;
    href: string;
    fallbackSrc: string;
    target: string;
    to: string | Record<string, unknown>;
    roundedSize: "sm" | "md" | "lg" | "xl" | "none" | "full";
    buttonColor: Color;
    letterCount: number;
}, {}>, {
    "round-text"?(_: {}): any;
    icon?(_: {}): any;
    caption?(_: {}): any;
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
