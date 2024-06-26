import { type HTMLAttributes } from 'vue';
import type { Color, Size } from './types';
export type { Color, Size };
export type Props = {
    style?: HTMLAttributes['style'];
    class?: HTMLAttributes['class'];
    modelValue?: boolean | (string | number)[];
    id?: string;
    color?: Color;
    value?: string | number | boolean;
    name?: string;
    size?: Size;
    label?: string;
    disabled?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    label: undefined;
    id: undefined;
    color: string;
    value: undefined;
    name: string;
    size: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:model-value": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    label: undefined;
    id: undefined;
    color: string;
    value: undefined;
    name: string;
    size: string;
    disabled: boolean;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    size: Size;
    label: string;
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    name: string;
    id: string;
    value: string | number | boolean;
    disabled: boolean;
    color: Color;
    class: any;
    modelValue: boolean | (string | number)[];
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
