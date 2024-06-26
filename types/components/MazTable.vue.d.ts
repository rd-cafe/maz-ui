import { type ThHTMLAttributes, type StyleValue, type HTMLAttributes, type Ref } from 'vue';
import type { Color, Size } from './types';
export type { Size, Color };
export type HeadersEnriched = {
    label: string;
    key?: string;
    sortable?: boolean;
    hidden?: boolean;
    srOnly?: boolean;
    width?: string;
    maxWidth?: string;
    classes?: ThHTMLAttributes['class'];
    scope?: ThHTMLAttributes['scope'];
    align?: ThHTMLAttributes['align'];
    rowspan?: ThHTMLAttributes['rowspan'];
    colspan?: ThHTMLAttributes['colspan'];
    headers?: ThHTMLAttributes['headers'];
};
export type Row = Record<string, any> & {
    selected?: boolean;
    action?: (row: Row) => unknown;
    classes?: HTMLAttributes['class'];
};
export type Header = string | HeadersEnriched;
export type Props = {
    /** class of the table element */
    tableClass?: HTMLAttributes['class'];
    /** style of the table element */
    tableStyle?: StyleValue;
    /** v-model of the table - list of selected rows */
    modelValue?: (string | boolean | number)[];
    /** size of the table
     * @values `'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'mini'`
     */
    size?: Size;
    /** title of the table */
    title?: string;
    /** headers of the table */
    headers?: Header[];
    /** allow sort feature to all columns */
    sortable?: boolean;
    /** align all headers */
    headersAlign?: ThHTMLAttributes['align'];
    /** rows of the table - type: `Record<string, string | boolean | number>[]` ; */
    rows?: Row[];
    /** add hover effect on rows */
    hoverable?: boolean;
    /** enable search feature into the table header */
    search?: boolean;
    /** disabled search in rows - useful to filtering data yourself or make search request to server */
    noSearchInRow?: boolean;
    /** placeholder of the search input */
    searchPlaceholder?: string;
    /** Disabled search by column (remove select input "search by") */
    noSearchBy?: boolean;
    /** placeholder of the search by select */
    searchByPlaceholder?: string;
    /** label of the search by of all options */
    searchByAllLabel?: string;
    /** search query in input */
    searchQuery?: string;
    /** add background color to odd rows */
    backgroundOdd?: boolean;
    /** add background color to even rows */
    backgroundEven?: boolean;
    /** add shodow to the table */
    elevation?: boolean;
    /** no divider between rows */
    divider?: boolean;
    /** caption of the table */
    caption?: string;
    /** caption side
     * @values `'top' | 'bottom'`
     */
    captionSide?: 'top' | 'bottom';
    /** add pagination into the table footer */
    pagination?: boolean;
    /** current page of pagination */
    page?: number;
    /** number of items per page */
    pageSize?: number;
    /** pages count */
    totalPages?: number;
    /** label of the pagination all option */
    paginationAllLabel?: string;
    /** no paginate rows - useful to make paginate request with your server */
    noPaginateRows?: boolean;
    /** total number of items */
    totalItems?: number;
    /** loading state */
    loading?: boolean;
    /** Enable selection of rows */
    selectable?: boolean;
    /** Enable selection of rows - key of the selected row */
    selectedKey?: string;
    /** table layout
     * @values `'auto' | 'fixed'`
     */
    tableLayout?: 'auto' | 'fixed';
    /** color of the loading bar */
    color?: Color;
};
export type MazTableProvide = {
    size: Ref<Size>;
    hoverable: Ref<boolean>;
    backgroundEven: Ref<boolean>;
    backgroundOdd: Ref<boolean>;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    tableClass: undefined;
    tableStyle: undefined;
    modelValue: undefined;
    title: undefined;
    size: string;
    rows: undefined;
    searchQuery: undefined;
    headers: undefined;
    headersAlign: string;
    caption: undefined;
    page: number;
    pageSize: number;
    totalItems: undefined;
    selectedKey: undefined;
    captionSide: string;
    tableLayout: undefined;
    searchPlaceholder: string;
    searchByPlaceholder: string;
    searchByAllLabel: string;
    paginationAllLabel: string;
    color: string;
    totalPages: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (value: (string | number | boolean | Row)[] | undefined) => void;
    "update:search-query": (searchQuery: string | undefined) => void;
    "update:page": (page: number) => void;
    "update:page-size": (pageSize: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    tableClass: undefined;
    tableStyle: undefined;
    modelValue: undefined;
    title: undefined;
    size: string;
    rows: undefined;
    searchQuery: undefined;
    headers: undefined;
    headersAlign: string;
    caption: undefined;
    page: number;
    pageSize: number;
    totalItems: undefined;
    selectedKey: undefined;
    captionSide: string;
    tableLayout: undefined;
    searchPlaceholder: string;
    searchByPlaceholder: string;
    searchByAllLabel: string;
    paginationAllLabel: string;
    color: string;
    totalPages: undefined;
}>>> & {
    "onUpdate:model-value"?: ((value: (string | number | boolean | Row)[] | undefined) => any) | undefined;
    "onUpdate:search-query"?: ((searchQuery: string | undefined) => any) | undefined;
    "onUpdate:page"?: ((page: number) => any) | undefined;
    "onUpdate:page-size"?: ((pageSize: number) => any) | undefined;
}, {
    size: Size;
    caption: string;
    title: string;
    color: Color;
    modelValue: (string | number | boolean)[];
    page: number;
    totalPages: number;
    searchPlaceholder: string;
    searchQuery: string;
    captionSide: "top" | "bottom";
    tableLayout: "auto" | "fixed";
    headers: Header[];
    tableClass: any;
    tableStyle: string | false | import("vue").CSSProperties | StyleValue[] | null;
    headersAlign: "center" | "left" | "right" | "justify" | "char";
    rows: Row[];
    searchByPlaceholder: string;
    searchByAllLabel: string;
    pageSize: number;
    paginationAllLabel: string;
    totalItems: number;
    selectedKey: string;
}, {}>, Partial<Record<`header-label-${string}`, (_: {
    header: {
        label: string;
        key?: string | undefined;
        sortable?: boolean | undefined;
        hidden?: boolean | undefined;
        srOnly?: boolean | undefined;
        width?: string | undefined;
        maxWidth?: string | undefined;
        classes?: any;
        scope?: string | undefined;
        align?: "center" | "left" | "right" | "justify" | "char" | undefined;
        rowspan?: (string | number) | undefined;
        colspan?: (string | number) | undefined;
        headers?: string | undefined;
        thHeaders?: string | undefined;
        sorted?: "ASC" | "DESC" | undefined;
    };
    label: string;
}) => any>> & Partial<Record<`cell-${string}`, (_: {
    row: Row;
    value: any;
}) => any>> & {
    title?(_: {}): any;
    caption?(_: {}): any;
    thead?(_: {}): any;
    header?(_: {
        header: {
            label: string;
            key?: string | undefined;
            sortable?: boolean | undefined;
            hidden?: boolean | undefined;
            srOnly?: boolean | undefined;
            width?: string | undefined;
            maxWidth?: string | undefined;
            classes?: any;
            scope?: string | undefined;
            align?: "center" | "left" | "right" | "justify" | "char" | undefined;
            rowspan?: (string | number) | undefined;
            colspan?: (string | number) | undefined;
            headers?: string | undefined;
            thHeaders?: string | undefined;
            sorted?: "ASC" | "DESC" | undefined;
        };
        label: string;
    }): any;
    "actions-header"?(_: {}): any;
    default?(_: {}): any;
    select?(_: {
        row: Row;
        selected: boolean | undefined;
    }): any;
    cell?(_: {
        row: Row;
        value: any;
    }): any;
    actions?(_: {
        row: Row;
    }): any;
    "no-results"?(_: {}): any;
    "no-results-text"?(_: {}): any;
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
