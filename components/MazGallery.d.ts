import { type PropType } from 'vue';
import type { MazGalleryImage } from './types';
export type { MazGalleryImage } from './types';
declare const _default: import("vue").DefineComponent<{
    /**
     *  Array of string or object: `['https://via.placeholder.com/500', 'https://via.placeholder.com/600']` or `[{ slug: 'https://via.placeholder.com/500', alt: 'image descripton' }, { slug: 'https://via.placeholder.com/600', alt: 'image descripton' }]`
     * */
    images: {
        type: PropType<MazGalleryImage[]>;
        default: () => never[];
    };
    /** Images count shown (max: 5) */
    imagesShownCount: {
        type: NumberConstructor;
        default: number;
    };
    /** Remove transparent layer with the remain count (ex: +2) */
    noRemaining: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Height of gallery */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** Remove default height - useful to set height with css */
    noHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Width of gallery */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** Remove default width */
    noWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Disable the border radius of the gallery */
    noRadius: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Disable full size display when clicking on image */
    noZoom: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Layer with photography icon when no images is provided */
    hasEmptyLayer: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Lazy load image - if false, images are directly loaded */
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Disable blur effect on image hover */
    blur: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Disable scale animation effect on image hover */
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Choose color of borders between images - Should be a CSS color or CSS variable - Ex: `#000` or `var(--maz-color-bg-light)` */
    separatorColor: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     *  Array of string or object: `['https://via.placeholder.com/500', 'https://via.placeholder.com/600']` or `[{ slug: 'https://via.placeholder.com/500', alt: 'image descripton' }, { slug: 'https://via.placeholder.com/600', alt: 'image descripton' }]`
     * */
    images: {
        type: PropType<MazGalleryImage[]>;
        default: () => never[];
    };
    /** Images count shown (max: 5) */
    imagesShownCount: {
        type: NumberConstructor;
        default: number;
    };
    /** Remove transparent layer with the remain count (ex: +2) */
    noRemaining: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Height of gallery */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** Remove default height - useful to set height with css */
    noHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Width of gallery */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** Remove default width */
    noWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Disable the border radius of the gallery */
    noRadius: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Disable full size display when clicking on image */
    noZoom: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Layer with photography icon when no images is provided */
    hasEmptyLayer: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Lazy load image - if false, images are directly loaded */
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Disable blur effect on image hover */
    blur: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Disable scale animation effect on image hover */
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Choose color of borders between images - Should be a CSS color or CSS variable - Ex: `#000` or `var(--maz-color-bg-light)` */
    separatorColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    blur: boolean;
    lazy: boolean;
    width: string | number;
    height: string | number;
    scale: boolean;
    images: MazGalleryImage[];
    imagesShownCount: number;
    noRemaining: boolean;
    noHeight: boolean;
    noWidth: boolean;
    noRadius: boolean;
    noZoom: boolean;
    hasEmptyLayer: boolean;
    separatorColor: string;
}, {}>;
export default _default;
