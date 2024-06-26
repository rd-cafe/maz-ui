import { type Color } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    /**
     * The percentage value of the progress bar
     */
    percentage: number;
    /**
     * The size of the progress bar
     * @default '10em' (equal 80px for a font-size of 16px)
     */
    size?: string | undefined;
    /**
     * Duration of the animation in milliseconds
     * @default 1000
     */
    duration?: number | undefined;
    /**
     * The color of the progress bar
     */
    color?: Color | undefined;
    /**
     * Auto color based on the count (danger, warning, success)
     * @default false
     */
    autoColor?: boolean | undefined;
    /**
     * Suffix to display next to the number
     */
    prefix?: string | undefined;
    /**
     * Suffix to display next to the number
     */
    suffix?: string | undefined;
    /**
     * The stroke-linecap style
     * @default 'round'
     * @values 'butt', 'round', 'square', 'inherit'
     */
    strokeLinecap?: "round" | "inherit" | "square" | "butt" | undefined;
    /**
     * The stroke width
     * @default 6
     */
    strokeWidth?: (string | number) | undefined;
    /**
     * The stroke color
     * Use this prop to override the gradient color
     * You can use a color name or a color code
     */
    stroke?: string | undefined;
}>, {
    percentage: number;
    size: string;
    duration: number;
    color: undefined;
    prefix: undefined;
    suffix: undefined;
    strokeLinecap: string;
    strokeWidth: number;
    stroke: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    /**
     * The percentage value of the progress bar
     */
    percentage: number;
    /**
     * The size of the progress bar
     * @default '10em' (equal 80px for a font-size of 16px)
     */
    size?: string | undefined;
    /**
     * Duration of the animation in milliseconds
     * @default 1000
     */
    duration?: number | undefined;
    /**
     * The color of the progress bar
     */
    color?: Color | undefined;
    /**
     * Auto color based on the count (danger, warning, success)
     * @default false
     */
    autoColor?: boolean | undefined;
    /**
     * Suffix to display next to the number
     */
    prefix?: string | undefined;
    /**
     * Suffix to display next to the number
     */
    suffix?: string | undefined;
    /**
     * The stroke-linecap style
     * @default 'round'
     * @values 'butt', 'round', 'square', 'inherit'
     */
    strokeLinecap?: "round" | "inherit" | "square" | "butt" | undefined;
    /**
     * The stroke width
     * @default 6
     */
    strokeWidth?: (string | number) | undefined;
    /**
     * The stroke color
     * Use this prop to override the gradient color
     * You can use a color name or a color code
     */
    stroke?: string | undefined;
}>, {
    percentage: number;
    size: string;
    duration: number;
    color: undefined;
    prefix: undefined;
    suffix: undefined;
    strokeLinecap: string;
    strokeWidth: number;
    stroke: undefined;
}>>>, {
    size: string;
    color: Color;
    duration: number;
    stroke: string;
    prefix: string;
    suffix: string;
    percentage: number;
    strokeLinecap: "round" | "inherit" | "square" | "butt";
    strokeWidth: string | number;
}, {}>, {
    default?(_: {}): any;
    prefix?(_: {}): any;
    suffix?(_: {}): any;
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
