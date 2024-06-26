import { type ComponentPublicInstance, type FunctionalComponent, type SVGAttributes } from 'vue';
import { type Color } from './types';
import { type RouteLocationRaw } from 'vue-router';
import { type Component } from 'nuxt/schema';
export type Icon = FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component;
export type Props = {
    /** The id of the link */
    id?: string;
    /** The title of the link */
    title?: string;
    /**
     * The color of the link
     * @default '#'
     */
    href?: string;
    /** The route location (router-link) of the link */
    to?: RouteLocationRaw;
    /**
     * The color of the link
     * @default 'primary'
     */
    color?: Color;
    /**
     * The target of the link
     * @default '_self'
     * @values '_blank', '_self', '_parent', '_top'
     */
    target?: '_blank' | '_self' | '_parent' | '_top' | string;
    /** The download of the link */
    download?: string;
    /** The rel of the link */
    rel?: string;
    /** The aria-label of the link */
    ariaLabel?: string;
    /** Add an underline to the link */
    underline?: boolean;
    /** Add an underline only on hover */
    underlineOnlyHover?: boolean;
    /** Add an external icon to the link if target is '_blank' */
    autoExternal?: boolean;
    /**
     * The name of the icon or component to display on the left of the text
     * `@type` `{string | FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component}`
     */
    leftIcon?: string | Icon;
    /**
     * The name of the icon or component to display on the right of the text
     * `@type` `{string | FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component}`
     */
    rightIcon?: string | Icon;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    id: undefined;
    title: undefined;
    color: string;
    href: string;
    to: undefined;
    target: string;
    download: undefined;
    rel: undefined;
    ariaLabel: undefined;
    underline: boolean;
    underlineOnlyHover: boolean;
    leftIcon: undefined;
    rightIcon: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    id: undefined;
    title: undefined;
    color: string;
    href: string;
    to: undefined;
    target: string;
    download: undefined;
    rel: undefined;
    ariaLabel: undefined;
    underline: boolean;
    underlineOnlyHover: boolean;
    leftIcon: undefined;
    rightIcon: undefined;
}>>>, {
    title: string;
    id: string;
    href: string;
    color: Color;
    target: string;
    to: RouteLocationRaw;
    leftIcon: string | Icon;
    rightIcon: string | Icon;
    download: string;
    rel: string;
    ariaLabel: string;
    underline: boolean;
    underlineOnlyHover: boolean;
}, {}>, {
    "left-icon"?(_: {}): any;
    default?(_: {}): any;
    "right-icon"?(_: {}): any;
    "external-icon"?(_: {}): any;
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
