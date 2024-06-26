import { type HTMLAttributes } from 'vue';
import type { Color, Position } from './types';
import type { PickerValue, PickerShortcut } from './MazPicker/types';
export type { PickerValue, PickerShortcut, Color, Position };
export type Props = {
    /** The style of the component */
    style?: HTMLAttributes['style'];
    /** The class of the component */
    class?: HTMLAttributes['class'];
    /** The value of the component */
    modelValue?: PickerValue;
    /** The format of the date */
    format?: string;
    /** If true picker window will be open */
    open?: boolean;
    /** The label of the input */
    label?: string;
    /** The placeholder of the input */
    placeholder?: string;
    /** The style of the input date */
    inputDateStyle?: Intl.DateTimeFormatOptions;
    /** The locale of the component */
    locale?: string;
    /** If true, the header will be hidden */
    noHeader?: boolean;
    /** If true, the component will be disabled */
    disabled?: boolean;
    /** The first day of the week (between 0 and 6) */
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** If true, the picker will close after a date selection */
    autoClose?: boolean;
    /** The selector of the custom element to trigger the picker */
    customElementSelector?: string;
    /** If true, the picker will be double */
    double?: boolean;
    /** If true, the picker will be inline */
    inline?: boolean;
    /** The color of the component */
    color?: Color;
    /** The position of the picker */
    pickerPosition?: Position;
    /** If true, the picker has a time picker */
    time?: boolean;
    /** If true, the picker will be a time picker */
    onlyTime?: boolean;
    /** The interval of the minutes */
    minuteInterval?: number;
    /** If true, the browser locale will be used */
    noUseBrowserLocale?: boolean;
    /** If true, the browser locale will not be fetched */
    noFetchLocal?: boolean;
    /** If true, the shortcuts will be hidden */
    noShortcuts?: boolean;
    /** The shortcuts of the picker */
    shortcuts?: PickerShortcut[];
    /** The shortcut of the picker */
    shortcut?: string;
    /** The min date of the picker */
    minDate?: string;
    /** The max date of the picker */
    maxDate?: string;
    /** The disabled  weekly days of the picker */
    disabledWeekly?: number[];
    /** The disabled dates of the picker */
    disabledDates?: string[];
    /** The disabled hours of the time picker */
    disabledHours?: number[];
    /** The input will be displayed in full width */
    block?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    format: string;
    open: boolean;
    label: undefined;
    placeholder: undefined;
    inputDateStyle: () => {
        dateStyle: string;
    };
    locale: undefined;
    noHeader: boolean;
    disabled: boolean;
    firstDayOfWeek: number;
    autoClose: boolean;
    customElementSelector: undefined;
    double: boolean;
    inline: boolean;
    color: string;
    pickerPosition: undefined;
    time: boolean;
    onlyTime: boolean;
    minuteInterval: number;
    noUseBrowserLocale: boolean;
    noFetchLocal: boolean;
    noShortcuts: boolean;
    shortcut: undefined;
    shortcuts: () => {
        label: string;
        identifier: string;
        value: {
            start: string;
            end: string;
        };
    }[];
    minDate: undefined;
    maxDate: undefined;
    disabledWeekly: () => never[];
    disabledDates: () => never[];
    disabledHours: () => never[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "update:model-value": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    style: undefined;
    class: undefined;
    modelValue: undefined;
    format: string;
    open: boolean;
    label: undefined;
    placeholder: undefined;
    inputDateStyle: () => {
        dateStyle: string;
    };
    locale: undefined;
    noHeader: boolean;
    disabled: boolean;
    firstDayOfWeek: number;
    autoClose: boolean;
    customElementSelector: undefined;
    double: boolean;
    inline: boolean;
    color: string;
    pickerPosition: undefined;
    time: boolean;
    onlyTime: boolean;
    minuteInterval: number;
    noUseBrowserLocale: boolean;
    noFetchLocal: boolean;
    noShortcuts: boolean;
    shortcut: undefined;
    shortcuts: () => {
        label: string;
        identifier: string;
        value: {
            start: string;
            end: string;
        };
    }[];
    minDate: undefined;
    maxDate: undefined;
    disabledWeekly: () => never[];
    disabledDates: () => never[];
    disabledHours: () => never[];
}>>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    time: boolean;
    open: boolean;
    disabled: boolean;
    color: Color;
    class: any;
    format: string;
    modelValue: string | Partial<import("./MazPicker/types").RangeValue>;
    locale: string;
    placeholder: string;
    inline: boolean;
    noUseBrowserLocale: boolean;
    minDate: string;
    maxDate: string;
    disabledWeekly: number[];
    disabledDates: string[];
    minuteInterval: number;
    disabledHours: number[];
    noShortcuts: boolean;
    double: boolean;
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    shortcuts: PickerShortcut[];
    shortcut: string;
    noHeader: boolean;
    inputDateStyle: Intl.DateTimeFormatOptions;
    autoClose: boolean;
    customElementSelector: string;
    pickerPosition: Position;
    onlyTime: boolean;
    noFetchLocal: boolean;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
