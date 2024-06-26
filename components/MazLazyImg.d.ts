import { type HTMLAttributes } from 'vue';
import type { vLazyImgOptions } from './../modules/directives/v-lazy-img/types';
import type { Image } from './types';
export type { Image };
export type Props = {
    /** The style of the component */
    style?: HTMLAttributes['style'];
    /** The class of the component */
    class?: HTMLAttributes['class'];
    /** @deprecated Use `src` instead */
    image?: Image | null;
    /**
     * The source of the image
     * @type {string | Image | null}
     */
    src?: Image | null;
    /** The alt of the image */
    alt?: string;
    /** Display the fallback image */
    noPhoto?: boolean;
    /** Remove the loader */
    noLoader?: boolean;
    /** Remove the observer once the image is loaded */
    noObserverOnce?: boolean;
    /** Remove the observer once the image is loaded */
    loadOnce?: boolean;
    /** Make the image height full */
    imageHeightFull?: boolean;
    /** The options of the observer */
    observerOptions?: vLazyImgOptions['observerOptions'];
    /** The fallback src to replace the src on loading error */
    fallbackSrc?: string;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    image: undefined;
    src: undefined;
    alt: undefined;
    observerOptions: undefined;
    fallbackSrc: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    intersecting: (el: Element) => void;
    loading: (el: Element) => void;
    loaded: (el: Element) => void;
    error: (el: Element) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    image: undefined;
    src: undefined;
    alt: undefined;
    observerOptions: undefined;
    fallbackSrc: undefined;
}>>> & {
    onLoading?: ((el: Element) => any) | undefined;
    onLoaded?: ((el: Element) => any) | undefined;
    onError?: ((el: Element) => any) | undefined;
    onIntersecting?: ((el: Element) => any) | undefined;
}, {
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    src: Image | null;
    image: Image | null;
    alt: string;
    observerOptions: {
        root?: HTMLElement | null | undefined;
        threshold: number;
        rootMargin?: string | undefined;
    };
    fallbackSrc: string;
    class: any;
}, {}>, {
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
