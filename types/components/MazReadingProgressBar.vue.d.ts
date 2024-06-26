import { type HTMLAttributes } from 'vue';
import type { Color } from './types';
export type { Color };
export type Props = {
    /**
     * Height of the progress bar
     * @default 4px
     */
    height?: string;
    /**
     * Color of the progress bar
     * @default primary
     */
    color?: Color;
    /**
     * Selector of the element to teleport the progress bar
     * @default body
     */
    teleportSelector?: string;
    /**
     * Selector of the element to get the height
     * @default body
     */
    contentSelector?: string;
    /**
     * Offset of the progress bar
     * @default 0
     */
    offset?: number;
    /**
     * Class of the progress bar
     * @default undefined
     */
    barClass?: HTMLAttributes['class'];
    /**
     * Instead of using the height of the content with a selector, you can set a scroll distance
     * @default undefined
     */
    distance?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    height: string;
    color: string;
    teleportSelector: string;
    contentSelector: string;
    offset: number;
    barClass: undefined;
    distance: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    begin: () => void;
    complete: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    height: string;
    color: string;
    teleportSelector: string;
    contentSelector: string;
    offset: number;
    barClass: undefined;
    distance: undefined;
}>>> & {
    onComplete?: (() => any) | undefined;
    onBegin?: (() => any) | undefined;
}, {
    color: Color;
    height: string;
    offset: number;
    teleportSelector: string;
    distance: number;
    contentSelector: string;
    barClass: any;
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
