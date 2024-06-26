import { type BadgeRoundedSize, type BadgeColor } from './MazBadge.vue';
export type MazTabsBarItem = {
    label: string;
    disabled?: boolean;
    badge?: {
        content: string | number | boolean;
        color?: BadgeColor;
        pastel?: boolean;
        outline?: boolean;
        size?: string;
        roundedSize?: BadgeRoundedSize;
    };
} | string;
export type Props = {
    /** The items to display in the tabs bar */
    items: MazTabsBarItem[];
    /** Will add a query param to the url to keep the selected tab on page refresh */
    persistent?: boolean;
    /** The name of the query param to add to the url
     * @default tab
     */
    queryParam?: string;
    /** Will make the tabs bar full width */
    block?: boolean;
    /** Will remove the elevation */
    noElevation?: boolean;
    /** Will add a scroll on the tabs bar to show selected element
     * @default true
     */
    autoScroll?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    queryParam: string;
    autoScroll: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    queryParam: string;
    autoScroll: boolean;
}>>>, {
    queryParam: string;
    autoScroll: boolean;
}, {}>, {
    item?(_: {
        item: {
            label: string;
            disabled: boolean;
            badge: {
                content: string | number | boolean;
                color?: BadgeColor | undefined;
                pastel?: boolean | undefined;
                outline?: boolean | undefined;
                size?: string | undefined;
                roundedSize?: BadgeRoundedSize | undefined;
            } | undefined;
        };
        active: boolean;
        index: number;
    }): any;
    "badge-content"?(_: {
        content: string | number | boolean;
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
