import { type HTMLAttributes, type StyleValue } from 'vue';
import type { Color } from './types';
export type { Color };
export type Props = {
    /**
     * The color of the component.
     * @default primary
     */
    color?: Color;
    /**
     * Remove the elevation of the component
     * @default false
     */
    noElevation?: boolean;
    /**
     * Add padding to the content
     * @default true
     */
    padding?: boolean;
    /**
     * The classes to apply to the content div
     */
    contentClass?: HTMLAttributes['class'];
    /**
     * Style apply to the content div
     */
    contentStyle?: StyleValue;
    /**
     * The opacity of the inner div - should be between 0 and 1
     * When 0 the spotlight is completely visible
     * When 1 the spotlight is only visible on borders
     * @default 0.95
     */
    innerOpacity?: number;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    noElevation: boolean;
    color: string;
    padding: boolean;
    contentClass: undefined;
    contentStyle: undefined;
    innerOpacity: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    noElevation: boolean;
    color: string;
    padding: boolean;
    contentClass: undefined;
    contentStyle: undefined;
    innerOpacity: number;
}>>>, {
    color: Color;
    noElevation: boolean;
    contentClass: any;
    padding: boolean;
    contentStyle: string | false | import("vue").CSSProperties | StyleValue[] | null;
    innerOpacity: number;
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
