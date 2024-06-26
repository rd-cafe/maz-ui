import { type ConfigType, type OpUnitType } from 'dayjs';
import type { PartialRangeValue } from './types';
export type DateTimeFormatOptions = Pick<Intl.DateTimeFormatOptions, 'hour12' | 'dateStyle' | 'timeStyle' | 'timeZone'>;
export declare function getFormattedDate({ value, locale, options, }: {
    value?: string;
    locale: string;
    options?: Intl.DateTimeFormatOptions;
}): string | undefined;
export declare function getRangeFormattedDate({ value, locale, options, }: {
    value: PartialRangeValue;
    locale: string;
    options: Intl.DateTimeFormatOptions;
}): string | undefined;
export declare function getFirstDayOfMonth(value: ConfigType): number;
export declare function getDaysOfWeek(locale: string, firstDayOfWeek: number): string[];
export declare function getDaysInMonth(date: ConfigType): number;
export declare function isToday(date: ConfigType): boolean;
export declare function isSameDate(date: ConfigType, date2: ConfigType, unit: OpUnitType): boolean;
export declare function isSmaller(date: ConfigType, date2: ConfigType): boolean;
export declare function isSameDay(date: ConfigType, dayNumber: number): boolean;
export declare function getISODate(value?: ConfigType, format?: string): string | undefined;
export declare function getRangeISODate(value: PartialRangeValue, format?: string): {
    start: string | undefined;
    end: string | undefined;
};
type CheckValueResponse = {
    newValue?: string;
    newCurrentDate?: string;
};
export declare function checkValueWithMinMaxDates({ value, minDate, maxDate, format, }: {
    value: string;
    minDate?: string;
    maxDate?: string;
    format: string;
}): CheckValueResponse;
export declare function isValueDisabledWeekly({ value, disabledWeekly, }: {
    value: string;
    disabledWeekly: number[];
}): boolean;
export declare function isValueDisabledDate({ value, disabledDates, }: {
    value: string;
    disabledDates: string[];
}): boolean;
export declare const scrollToTarget: (scrollContainer: HTMLElement, target: HTMLElement, offset?: number, hasSmoothEffect?: boolean) => void;
export declare const findNearestNumberInList: (list: number[], number: number) => number;
export declare function convertHour24to12Format(baseHour: number): number;
export declare function convertHour12to24Format(baseHour: number): number;
export declare const convert12To24TimeFormat: (timeStr: string) => string;
export declare function getBrowserLocale(): string | undefined;
export declare function fetchLocale(): Promise<string | undefined>;
export {};
