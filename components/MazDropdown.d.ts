import { type HTMLAttributes } from 'vue';
import { type RouteLocationRaw } from 'vue-router';
import { type Position } from './types';
import { type Color } from './MazBtn.vue';
export type { Color, Position };
export type MenuItem = {
    label: string;
    action?: () => unknown;
    target?: string;
    href?: string;
    to?: RouteLocationRaw;
    class?: unknown;
} & Record<string, unknown>;
export type Props = {
    style?: HTMLAttributes['style'];
    class?: HTMLAttributes['class'];
    /** Menu items */
    items?: MenuItem[];
    /** Menu should be open? */
    open?: boolean;
    /** id of the menu */
    id?: string;
    /** Should open the dropdown on click, hover or both
     * @default 'both'
     */
    trigger?: 'click' | 'hover' | 'both';
    /**
     * Button color
     * @default 'transparent'
     */
    color?: Color;
    /**
     * Position of the dropdown
     * @default 'bottom left'
     */
    position?: Position;
    /** Disable close menu on menuitem clicked */
    noCloseOnClick?: boolean;
    /** Disable menu */
    disabled?: boolean;
    /** Remove chevron icon in main button */
    noChevron?: boolean;
    /**
     * Description read by screen reader (accessibility)
     * @default 'Open menu dropdown'
     */
    screenReaderDescription?: string;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    class: undefined;
    style: undefined;
    items: () => never[];
    id: undefined;
    trigger: string;
    color: string;
    position: string;
    screenReaderDescription: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "menuitem-clicked": (...args: any[]) => void;
    "update:open": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    class: undefined;
    style: undefined;
    items: () => never[];
    id: undefined;
    trigger: string;
    color: string;
    position: string;
    screenReaderDescription: string;
}>>> & {
    "onMenuitem-clicked"?: ((...args: any[]) => any) | undefined;
    "onUpdate:open"?: ((...args: any[]) => any) | undefined;
}, {
    style: string | false | import("vue").CSSProperties | import("vue").StyleValue[] | null;
    id: string;
    position: Position;
    color: Color;
    class: any;
    trigger: "click" | "both" | "hover";
    items: MenuItem[];
    screenReaderDescription: string;
}, {}>, {
    "screen-reader-description"?(_: {}): any;
    element?(_: {
        isOpen: boolean;
    }): any;
    default?(_: {}): any;
    dropdown?(_: {
        items: MenuItem[];
    }): any;
    menuitem?(_: {
        item: MenuItem;
    }): any;
    "menuitem-label"?(_: {
        item: MenuItem;
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
