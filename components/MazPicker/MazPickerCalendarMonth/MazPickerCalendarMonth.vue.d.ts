import { type PropType } from 'vue';
import type { Color } from './../../types';
import type { PickerValue } from '../types';
import dayjs from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    color: {
        type: PropType<Color>;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    hasTime: {
        type: BooleanConstructor;
        required: true;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: true;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    offsetMonth: {
        type: NumberConstructor;
        default: number;
    };
    minDate: {
        type: StringConstructor;
        default: undefined;
    };
    maxDate: {
        type: StringConstructor;
        default: undefined;
    };
    disabledWeekly: {
        type: PropType<number[]>;
        required: true;
    };
    disabledDates: {
        type: PropType<string[]>;
        required: true;
    };
    hoverredDay: {
        type: PropType<dayjs.Dayjs>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (...args: any[]) => void;
    "update:calendar-date": (...args: any[]) => void;
    "update:hoverred-day": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    color: {
        type: PropType<Color>;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    hasTime: {
        type: BooleanConstructor;
        required: true;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: true;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    offsetMonth: {
        type: NumberConstructor;
        default: number;
    };
    minDate: {
        type: StringConstructor;
        default: undefined;
    };
    maxDate: {
        type: StringConstructor;
        default: undefined;
    };
    disabledWeekly: {
        type: PropType<number[]>;
        required: true;
    };
    disabledDates: {
        type: PropType<string[]>;
        required: true;
    };
    hoverredDay: {
        type: PropType<dayjs.Dayjs>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    "onUpdate:calendar-date"?: ((...args: any[]) => any) | undefined;
    "onUpdate:hoverred-day"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: PickerValue;
    minDate: string;
    maxDate: string;
    hoverredDay: dayjs.Dayjs;
    offsetMonth: number;
}, {}>;
export default _default;
