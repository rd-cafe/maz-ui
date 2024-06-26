import { type HTMLAttributes } from 'vue';
import type { Color } from './types';
export type { Color };
export type Props = {
    /** Style attribut of the component root element */
    style?: HTMLAttributes['style'];
    /** Class attribut of the component root element */
    class?: HTMLAttributes['class'];
    /** The model value of the switch */
    modelValue?: boolean;
    /** The id of the switch */
    id?: string;
    /** If the switch is disabled */
    disabled?: boolean;
    /** The name of the switch */
    name?: string;
    /** The color of the switch */
    color?: Color;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: boolean;
    id: undefined;
    disabled: boolean;
    name: undefined;
    color: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (value: boolean) => void;
    change: (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: boolean;
    id: undefined;
    disabled: boolean;
    name: undefined;
    color: string;
}>>> & {
    onChange?: ((value: boolean) => any) | undefined;
    "onUpdate:model-value"?: ((value: boolean) => any) | undefined;
}, {
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    name: string;
    id: string;
    disabled: boolean;
    color: Color;
    class: any;
    modelValue: boolean;
}, {}>, {
    default?(_: {
        value: boolean;
    }): any;
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
