import type { Color } from './types';
export type BadgeColor = Color | 'gray';
export type BadgeRoundedSize = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type Props = {
    color?: BadgeColor;
    size?: string;
    nowrap?: boolean;
    outline?: boolean;
    pastel?: boolean;
    roundedSize?: BadgeRoundedSize;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    color: string;
    size: string;
    nowrap: boolean;
    outline: boolean;
    pastel: boolean;
    roundedSize: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    color: string;
    size: string;
    nowrap: boolean;
    outline: boolean;
    pastel: boolean;
    roundedSize: string;
}>>>, {
    size: string;
    color: BadgeColor;
    roundedSize: BadgeRoundedSize;
    outline: boolean;
    pastel: boolean;
    nowrap: boolean;
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
