import { type CountryCode } from 'libphonenumber-js';
import type { Results, Translations } from './MazPhoneNumberInput/types';
import type { Color, Position, Size } from './types';
export type { Color, Size, Position, CountryCode, Results, Results as Result, Translations };
import { type HTMLAttributes, type Ref } from 'vue';
export type Props = {
    /** Style attribut of the component root element */
    style?: HTMLAttributes['style'];
    /** Class attribut of the component root element */
    class?: HTMLAttributes['class'];
    /** @model Country calling code + telephone number in international format */
    modelValue?: string;
    /** @deprecated */
    defaultPhoneNumber?: string;
    /** @model Country code selected - Ex: "FR" */
    countryCode?: CountryCode;
    /** @deprecated - use country-code or v-model:country-code */
    defaultCountryCode?: CountryCode;
    /** Id of the component */
    id?: string;
    /** Placeholder of the input */
    placeholder?: string;
    /** List of country codes to place first in the select list - Ex: ['FR', 'BE', 'GE'] */
    preferredCountries?: CountryCode[];
    /** List of country codes to be removed from the select list - Ex: ['FR', 'BE', 'GE'] */
    ignoredCountries?: CountryCode[];
    /** List of country codes to only have the countries selected in the select list - Ex: ['FR', 'BE', 'GE'] */
    onlyCountries?: CountryCode[];
    /** Locale strings of the component */
    translations?: Partial<Translations>;
    /** Position where the list of countries will be opened */
    listPosition?: Position;
    /** Component color applied - Ex: "secondary" */
    color?: Color;
    /** Component size applied - Ex: "sm" */
    size?: Size;
    /** Remove flags in country list */
    noFlags?: boolean;
    /** Disable input */
    disabled?: boolean;
    /** No show the phone number example */
    noExample?: boolean;
    /** Disable search input in country list */
    noSearch?: boolean;
    /** By default the component use the browser locale to set the default country code if not country code is provided */
    noUseBrowserLocale?: boolean;
    /** The component will make a request (https://ipwho.is) to get the location of the user and use it to set the default country code */
    fetchCountry?: boolean;
    /** No show the country selector */
    noCountrySelector?: boolean;
    /** Show country calling code in the country list */
    showCodeOnList?: boolean;
    /** Replace country names */
    customCountriesList?: Record<CountryCode, string>;
    /**
     * Disabled auto-format when phone is valid
     * @default true
     */
    autoFormat?: boolean;
    /**
     * Disabled auto-format as you type
     * @default false
     */
    noFormattingAsYouType?: boolean;
    /**
     * locale of country list - Ex: "fr-FR"
     * @default {string} browser locale
     */
    countryLocale?: string;
    /** Disable validation error UI */
    noValidationError?: boolean;
    /** Disable validation success UI */
    noValidationSuccess?: boolean;
    /** Add success UI */
    success?: boolean;
    /** Add error UI */
    error?: boolean;
    /** Will replace the calling code by the country name in the country selector */
    countrySelectorDisplayName?: boolean;
    /** Choose the width of the country selector */
    countrySelectorWidth?: string;
    /** The input will be displayed in full width */
    block?: boolean;
    /** Exclude selectors to close country selector list - usefull when you using custom flag */
    excludeSelectors?: string[];
    /**
     * Orientation of the inputs in the component
     * @default "responsive"
     * @values "row" | "col" | "responsive"
     */
    orientation?: 'row' | 'col' | 'responsive';
};
type SelectionRange = {
    start?: number | null;
    end?: number | null;
    cursorAtEnd?: boolean;
};
export type InjectedData = {
    selectedCountry: Ref<CountryCode | undefined>;
    phoneNumber: Ref<string>;
    results: Ref<Results>;
    selectionRange: Ref<SelectionRange>;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    class: undefined;
    style: undefined;
    listPosition: string;
    color: string;
    size: string;
    modelValue: undefined;
    /** @deprecated */
    defaultPhoneNumber: undefined;
    countryCode: undefined;
    /** @deprecated */
    defaultCountryCode: undefined;
    id: undefined;
    placeholder: undefined;
    preferredCountries: undefined;
    ignoredCountries: undefined;
    onlyCountries: undefined;
    translations: undefined;
    customCountriesList: undefined;
    countryLocale: undefined;
    countrySelectorWidth: string;
    noFormattingAsYouType: boolean;
    autoFormat: boolean;
    excludeSelectors: undefined;
    orientation: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    data: (results: Results) => void;
    update: (results: Results) => void;
    "update:model-value": (value: string) => void;
    "country-code": (countryCode?: CountryCode | undefined) => void;
    "update:country-code": (countryCode?: CountryCode | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    class: undefined;
    style: undefined;
    listPosition: string;
    color: string;
    size: string;
    modelValue: undefined;
    /** @deprecated */
    defaultPhoneNumber: undefined;
    countryCode: undefined;
    /** @deprecated */
    defaultCountryCode: undefined;
    id: undefined;
    placeholder: undefined;
    preferredCountries: undefined;
    ignoredCountries: undefined;
    onlyCountries: undefined;
    translations: undefined;
    customCountriesList: undefined;
    countryLocale: undefined;
    countrySelectorWidth: string;
    noFormattingAsYouType: boolean;
    autoFormat: boolean;
    excludeSelectors: undefined;
    orientation: string;
}>>> & {
    "onUpdate:model-value"?: ((value: string) => any) | undefined;
    onData?: ((results: Results) => any) | undefined;
    onUpdate?: ((results: Results) => any) | undefined;
    "onCountry-code"?: ((countryCode?: CountryCode | undefined) => any) | undefined;
    "onUpdate:country-code"?: ((countryCode?: CountryCode | undefined) => any) | undefined;
}, {
    size: Size;
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    orientation: "col" | "row" | "responsive";
    id: string;
    color: Color;
    class: any;
    modelValue: string;
    placeholder: string;
    listPosition: Position;
    excludeSelectors: string[];
    preferredCountries: CountryCode[];
    ignoredCountries: CountryCode[];
    onlyCountries: CountryCode[];
    customCountriesList: Record<CountryCode, string>;
    countryLocale: string;
    countryCode: CountryCode;
    autoFormat: boolean;
    noFormattingAsYouType: boolean;
    defaultPhoneNumber: string;
    defaultCountryCode: CountryCode;
    translations: Partial<{
        countrySelector: {
            placeholder: string;
            error: string;
            searchPlaceholder: string;
        };
        phoneInput: {
            placeholder: string;
            example: string;
        };
    }>;
    countrySelectorWidth: string;
}, {}>, {
    "no-results"?(_: {}): any;
    "selector-flag"?(_: {
        countryCode: CountryCode;
    }): any;
    "country-list-flag"?(_: {
        countryCode: import("./types").ModelValueSimple;
        option: import("./MazSelect.vue").NormalizedOption;
        isSelected: boolean;
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
