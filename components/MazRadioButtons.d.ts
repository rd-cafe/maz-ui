import { type StyleValue } from 'vue';
import type { Color } from './types';
export type ButtonsRadioOption = {
    /** The label of the option */
    label: string;
    /** The value of the option */
    value: string | number | boolean;
    /** The classes to apply to the option */
    classes?: any;
    /** The style to apply to the option */
    style?: StyleValue;
} & Record<string, unknown>;
export type Props = {
    /** @model The value of the selected option */
    modelValue?: string | number | boolean;
    /** The options to display */
    options: ButtonsRadioOption[];
    /** The name of the radio group */
    name?: string;
    /** The color of the selected radio buttons */
    color?: Color;
    /** Add elevation to the radio buttons */
    elevation?: boolean;
    /**
     * The orientation of the radio buttons
     * @values 'row' | 'col'
     */
    orientation?: 'row' | 'col';
    /** Disable the wrap of the radio buttons */
    noWrap?: boolean;
    /** Make all radio buttons the same size */
    equalSize?: boolean;
    /** Display a selector icon */
    selector?: boolean;
    /** The component will be displayed in full width */
    block?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: undefined;
    name: string;
    color: string;
    elevation: boolean;
    orientation: string;
    noWrap: boolean;
    equalSize: boolean;
    selector: boolean;
    block: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (value: string | number | boolean) => void;
    change: (value: string | number | boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: undefined;
    name: string;
    color: string;
    elevation: boolean;
    orientation: string;
    noWrap: boolean;
    equalSize: boolean;
    selector: boolean;
    block: boolean;
}>>> & {
    onChange?: ((value: string | number | boolean) => any) | undefined;
    "onUpdate:model-value"?: ((value: string | number | boolean) => any) | undefined;
}, {
    name: string;
    orientation: "col" | "row";
    color: Color;
    block: boolean;
    elevation: boolean;
    modelValue: string | number | boolean;
    noWrap: boolean;
    equalSize: boolean;
    selector: boolean;
}, {}>, {
    default?(_: {
        option: ButtonsRadioOption;
        selected: boolean;
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
