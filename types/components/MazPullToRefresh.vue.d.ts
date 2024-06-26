import type { Color } from './types';
export type { Color } from './types';
export type Props = {
    distance?: number;
    offset?: number;
    action?: () => unknown;
    containerSelector?: string;
    headerClass?: string;
    spinnerColor?: Color;
    disabled?: boolean;
    standaloneMode?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    distance: number;
    offset: number;
    action: undefined;
    containerSelector: undefined;
    headerClass: undefined;
    spinnerColor: string;
    disabled: boolean;
    standaloneMode: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    loaded: (...args: any[]) => void;
    start: (...args: any[]) => void;
    finish: (...args: any[]) => void;
    response: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    distance: number;
    offset: number;
    action: undefined;
    containerSelector: undefined;
    headerClass: undefined;
    spinnerColor: string;
    disabled: boolean;
    standaloneMode: boolean;
}>>> & {
    onLoaded?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onFinish?: ((...args: any[]) => any) | undefined;
    onResponse?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    offset: number;
    action: () => unknown;
    distance: number;
    containerSelector: string;
    headerClass: string;
    spinnerColor: Color;
    standaloneMode: boolean;
}, {}>, {
    "pull-before"?(_: {}): any;
    "pull-ready"?(_: {}): any;
    "pull-loading"?(_: {}): any;
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
