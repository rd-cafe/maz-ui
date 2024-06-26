import { type Component, type ComponentPublicInstance, type SVGAttributes, type FunctionalComponent } from 'vue';
import type { Color } from './types';
export type { Color };
export type Icon = FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component;
export interface Step {
    title?: string;
    subtitle?: string;
    titleInfo?: string;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
    warning?: boolean;
    icon?: string | Icon;
}
export type Steps = Step[];
export type Props = {
    /** The current step */
    modelValue?: number;
    /** The steps */
    steps?: Steps;
    /**
     * The color of the stepper
     * @default primary
     */
    color?: Color;
    /** Disable the next steps */
    disabledNextSteps?: boolean;
    /** Disable the previous steps */
    disabledPreviousSteps?: boolean;
    /** Auto validate the steps */
    autoValidateSteps?: boolean;
    /** Open all steps */
    allStepsOpened?: boolean;
    /** Validate all steps */
    allStepsValidated?: boolean;
    /** Allow to close the steps */
    canCloseSteps?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: undefined;
    steps: undefined;
    color: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: undefined;
    steps: undefined;
    color: string;
}>>> & {
    "onUpdate:model-value"?: ((value: number) => any) | undefined;
}, {
    color: Color;
    modelValue: number;
    steps: Steps;
}, {}>, Partial<Record<`icon-${number}`, (_: {}) => any>> & Partial<Record<`title-${number}`, (_: {}) => any>> & Partial<Record<`subtitle-${number}`, (_: {}) => any>> & Partial<Record<`title-info-${number}`, (_: {}) => any>> & Partial<Record<`content-${number}`, (_: {
    validated: boolean;
    error: boolean | undefined;
    warning: boolean | undefined;
    nextStep: () => void;
    previousStep: () => void;
}) => any>>>;
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
