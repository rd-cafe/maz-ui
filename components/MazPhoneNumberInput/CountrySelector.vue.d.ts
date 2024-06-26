import type { Color, Size, Position, CountryCode } from '../MazPhoneNumberInput.vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    /** Style attribut of the component root element */
    style?: import("vue").StyleValue;
    /** Class attribut of the component root element */
    class?: any;
    modelValue?: CountryCode | undefined;
    id: string;
    color: Color;
    size: Size;
    preferredCountries?: CountryCode[] | undefined;
    ignoredCountries?: CountryCode[] | undefined;
    onlyCountries?: CountryCode[] | undefined;
    customCountriesList?: Record<CountryCode, string> | undefined;
    locales: {
        countrySelector: {
            placeholder: string;
            error: string;
            searchPlaceholder: string;
        };
        phoneInput: {
            placeholder: string;
            example: string;
        };
    };
    listPosition?: Position | undefined;
    noFlags?: boolean | undefined;
    noSearch?: boolean | undefined;
    disabled?: boolean | undefined;
    showCodeOnList?: boolean | undefined;
    countryLocale?: string | undefined;
    success?: boolean | undefined;
    error?: boolean | undefined;
    countrySelectorDisplayName?: boolean | undefined;
    width: string;
    excludeSelectors?: string[] | undefined;
}>, {
    class: undefined;
    style: undefined;
    modelValue: undefined;
    listPosition: string;
    preferredCountries: undefined;
    ignoredCountries: undefined;
    onlyCountries: undefined;
    customCountriesList: undefined;
    countryLocale: undefined;
    width: string;
    excludeSelectors: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (countryCode?: CountryCode | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    /** Style attribut of the component root element */
    style?: import("vue").StyleValue;
    /** Class attribut of the component root element */
    class?: any;
    modelValue?: CountryCode | undefined;
    id: string;
    color: Color;
    size: Size;
    preferredCountries?: CountryCode[] | undefined;
    ignoredCountries?: CountryCode[] | undefined;
    onlyCountries?: CountryCode[] | undefined;
    customCountriesList?: Record<CountryCode, string> | undefined;
    locales: {
        countrySelector: {
            placeholder: string;
            error: string;
            searchPlaceholder: string;
        };
        phoneInput: {
            placeholder: string;
            example: string;
        };
    };
    listPosition?: Position | undefined;
    noFlags?: boolean | undefined;
    noSearch?: boolean | undefined;
    disabled?: boolean | undefined;
    showCodeOnList?: boolean | undefined;
    countryLocale?: string | undefined;
    success?: boolean | undefined;
    error?: boolean | undefined;
    countrySelectorDisplayName?: boolean | undefined;
    width: string;
    excludeSelectors?: string[] | undefined;
}>, {
    class: undefined;
    style: undefined;
    modelValue: undefined;
    listPosition: string;
    preferredCountries: undefined;
    ignoredCountries: undefined;
    onlyCountries: undefined;
    customCountriesList: undefined;
    countryLocale: undefined;
    width: string;
    excludeSelectors: undefined;
}>>> & {
    "onUpdate:model-value"?: ((countryCode?: CountryCode | undefined) => any) | undefined;
}, {
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    width: string;
    class: any;
    modelValue: CountryCode;
    listPosition: Position;
    excludeSelectors: string[];
    preferredCountries: CountryCode[];
    ignoredCountries: CountryCode[];
    onlyCountries: CountryCode[];
    customCountriesList: Record<CountryCode, string>;
    countryLocale: string;
}, {}>, {
    "selector-flag"?(_: {
        countryCode: CountryCode;
    }): any;
    "no-results"?(_: {}): any;
    "country-list-flag"?(_: {
        countryCode: string;
        option: import("../MazSelect.vue").NormalizedOption;
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
