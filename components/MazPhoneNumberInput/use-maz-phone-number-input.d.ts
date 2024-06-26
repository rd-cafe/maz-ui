import { type CountryCode } from 'libphonenumber-js';
import { type Country } from './types';
declare function getBrowserLocale(): {
    locale: string;
    browserLocale: string;
} | undefined;
declare function getCountriesList(locale?: string, customCountriesNameListByIsoCode?: Record<CountryCode, string>): Country[] | undefined;
declare function fetchCountryCode(): Promise<string | undefined>;
declare function sanitizePhoneNumber(input?: string): string;
export declare function useMazPhoneNumberInput(): {
    sanitizePhoneNumber: typeof sanitizePhoneNumber;
    fetchCountryCode: typeof fetchCountryCode;
    getBrowserLocale: typeof getBrowserLocale;
    getCountriesList: typeof getCountriesList;
};
export {};
