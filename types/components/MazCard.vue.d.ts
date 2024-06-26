import { type HTMLAttributes } from 'vue';
import type { MazGalleryImage } from './types';
import { type RouterLinkProps } from 'vue-router';
export type { MazGalleryImage } from './types';
export type Props = {
    /** Images displayed */
    images?: MazGalleryImage[];
    /** Card variant: Must be `column | row | row-reverse | column-reverse` */
    orientation?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
    /** Make card a link (footer area excluded) */
    href?: string;
    /** Make card a link with a router-link (footer area excluded) */
    to?: RouterLinkProps['to'];
    /** Target option of link: Muse be one of `_blank | _self | _parent | _top | framename` */
    hrefTarget?: '_blank' | '_self' | '_parent' | '_top' | string;
    /** Footer text alignment: `right | left` */
    footerAlign?: 'right' | 'left';
    /** Gallery image width */
    galleryWidth?: string | number;
    /** Gallery image height */
    galleryHeight?: string | number;
    /** Enable "zoom" image on click (can't be used when the card has a link) */
    zoom?: boolean;
    /** Set elevation to card (box-shadow) */
    elevation?: boolean;
    /** Set radius to card */
    radius?: boolean;
    /** Set border to card (in dark mode, the card is always bordered) */
    bordered?: boolean;
    /** Number of images shown in the gallery */
    imagesShowCount?: number;
    /** Remove transparent layer with the remain count (ex: +2) */
    noRemaining?: boolean;
    /** scale animation on hover (only linked cards) */
    scale?: boolean;
    /** add classes to wrapper */
    wrapperClass?: HTMLAttributes['class'];
    /** Remove padding from content wrapper */
    noPadding?: boolean;
    /** Hide overflow */
    overflowHidden?: boolean;
    /**
     * @deprecated Use `collapsible` instead
     */
    collapsable?: boolean;
    /**
     * Card can be open and close
     */
    collapsible?: boolean;
    /** Card is open by default if `true` */
    collapseOpen?: boolean;
    /** Title of the card in header */
    header?: string;
    /** The card will be displayed in full width */
    block?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    images: undefined;
    orientation: string;
    href: undefined;
    to: undefined;
    hrefTarget: string;
    footerAlign: string;
    galleryWidth: number;
    galleryHeight: number;
    elevation: boolean;
    radius: boolean;
    imagesShowCount: number;
    noRemaining: boolean;
    scale: boolean;
    wrapperClass: undefined;
    header: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    images: undefined;
    orientation: string;
    href: undefined;
    to: undefined;
    hrefTarget: string;
    footerAlign: string;
    galleryWidth: number;
    galleryHeight: number;
    elevation: boolean;
    radius: boolean;
    imagesShowCount: number;
    noRemaining: boolean;
    scale: boolean;
    wrapperClass: undefined;
    header: undefined;
}>>>, {
    header: string;
    orientation: "column" | "row" | "row-reverse" | "column-reverse";
    href: string;
    scale: boolean;
    to: import("vue-router").RouteLocationRaw;
    elevation: boolean;
    radius: boolean;
    images: MazGalleryImage[];
    noRemaining: boolean;
    hrefTarget: string;
    footerAlign: "left" | "right";
    galleryWidth: string | number;
    galleryHeight: string | number;
    imagesShowCount: number;
    wrapperClass: any;
}, {}>, {
    header?(_: {}): any;
    default?(_: {}): any;
    title?(_: {}): any;
    subtitle?(_: {}): any;
    content?(_: {}): any;
    footer?(_: {}): any;
    actions?(_: {}): any;
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
