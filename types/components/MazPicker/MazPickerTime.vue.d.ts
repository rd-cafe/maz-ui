import { type PropType } from 'vue';
import { type DateTimeFormatOptions } from './utils';
import type { PickerValue } from './types';
import type { Color } from '../types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    formatterOptions: {
        type: PropType<DateTimeFormatOptions>;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
        required: true;
    };
    isOpen: {
        type: BooleanConstructor;
        required: true;
    };
    hasDate: {
        type: BooleanConstructor;
        required: true;
    };
    minuteInterval: {
        type: NumberConstructor;
        required: true;
    };
    disabledHours: {
        type: PropType<number[]>;
        default: undefined;
    };
    format: {
        type: StringConstructor;
        required: true;
    };
    isHour12: {
        type: BooleanConstructor;
        required: true;
    };
    minDate: {
        type: StringConstructor;
        default: undefined;
    };
    maxDate: {
        type: StringConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    formatterOptions: {
        type: PropType<DateTimeFormatOptions>;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
        required: true;
    };
    isOpen: {
        type: BooleanConstructor;
        required: true;
    };
    hasDate: {
        type: BooleanConstructor;
        required: true;
    };
    minuteInterval: {
        type: NumberConstructor;
        required: true;
    };
    disabledHours: {
        type: PropType<number[]>;
        default: undefined;
    };
    format: {
        type: StringConstructor;
        required: true;
    };
    isHour12: {
        type: BooleanConstructor;
        required: true;
    };
    minDate: {
        type: StringConstructor;
        default: undefined;
    };
    maxDate: {
        type: StringConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: PickerValue;
    minDate: string;
    maxDate: string;
    disabledHours: number[];
}, {}>;
export default _default;
