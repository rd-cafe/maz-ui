import { type PropType } from 'vue';
import type { PickerValue } from '../types';
import dayjs from 'dayjs';
import type { Color } from '../../types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    hasTime: {
        type: BooleanConstructor;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
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
    "update:hoverred-day": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    hasTime: {
        type: BooleanConstructor;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
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
    "onUpdate:hoverred-day"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: PickerValue;
    minDate: string;
    maxDate: string;
    hoverredDay: dayjs.Dayjs;
}, {}>;
export default _default;
