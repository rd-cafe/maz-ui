import { type FunctionalComponent, type SVGAttributes, type ComponentPublicInstance, type Component, type HTMLAttributes } from 'vue';
import type { Color, Size } from './types';
export type { Color, Size };
export type Icon = FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component;
export type Props = {
    /** The variant of the button - Change UI of component (link or button style)
     * @values `'button' | 'link'`
     * @deprecated Use the component <MazLink /> instead
     */
    variant?: 'button' | 'link';
    /**
     * The size of the button
     * @values `'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'mini'`
     */
    size?: Size;
    /**
     * The color of the button
     * @values `'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'transparent' | 'theme'`
     */
    color?: Color;
    /**
     * The type of the button
     * @values `'submit' | 'reset' | 'button'`
     */
    type?: 'submit' | 'reset' | 'button';
    /**
     * If true, the button will have a full border radius
     * @default false
     */
    rounded?: boolean;
    /**
     * Size of the rounded
     * @values `'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'`
     */
    roundedSize?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /**
     * If true, the button will have no border radius
     * @default false
     */
    noRounded?: boolean;
    /**
     * If true, the button have the "border" style
     * @default false
     */
    outline?: boolean;
    /**
     * If true, the button will have a pastel color
     * @default false
     */
    pastel?: boolean;
    /**
     * If true, the button will have a full width
     * @default false
     */
    block?: boolean;
    /** If true, the button will have no underline on hover (useful with `variant="link"`)
     * @default false
     */
    noUnderline?: boolean;
    /**
     * Enable the button loader
     * @default false
     */
    loading?: boolean;
    /**
     * Disable the button
     * @default false
     */
    disabled?: boolean;
    /**
     * If true, the button will have a fab style
     * @default false
     */
    fab?: boolean;
    /**
     * The name of the icon to display or component, only with fab
     * `@type` `{string | FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component}`
     */
    icon?: string | Icon;
    /**
     * The name of the icon or component to display on the left of the button
     * `@type` `{string | FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component}`
     */
    leftIcon?: string | Icon;
    /**
     * The name of the icon or component to display on the right of the button
     * `@type` `{string | FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component}`
     */
    rightIcon?: string | Icon;
    /**
     * If true, the button will have no padding
     * @default false
     */
    noPadding?: boolean;
    /**
     * If true, the button will have no box-shadow
     * @default false
     */
    noElevation?: boolean;
    /** The class applied to the content wrapper (<span />) of the button */
    contentClass?: HTMLAttributes['class'];
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    variant: string;
    size: string;
    color: string;
    type: string;
    icon: undefined;
    leftIcon: undefined;
    rightIcon: undefined;
    contentClass: undefined;
    roundedSize: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    variant: string;
    size: string;
    color: string;
    type: string;
    icon: undefined;
    leftIcon: undefined;
    rightIcon: undefined;
    contentClass: undefined;
    roundedSize: string;
}>>>, {
    size: Size;
    type: "button" | "reset" | "submit";
    color: Color;
    variant: "button" | "link";
    roundedSize: "sm" | "md" | "lg" | "xl" | "none" | "full";
    icon: string | Icon;
    leftIcon: string | Icon;
    rightIcon: string | Icon;
    contentClass: any;
}, {}>, {
    "left-icon"?(_: {}): any;
    icon?(_: {}): any;
    default?(_: {}): any;
    "right-icon"?(_: {}): any;
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
