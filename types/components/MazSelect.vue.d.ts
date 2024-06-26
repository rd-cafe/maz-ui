import { type HTMLAttributes } from 'vue';
import type { Color, ModelValueSimple, Position, Size } from './types';
export type { Color, Size, ModelValueSimple, Position } from './types';
export type NormalizedOption = Record<string, ModelValueSimple>;
export type MazSelectOptionWithOptGroup = {
    label: string;
    options: (NormalizedOption | string | number | boolean)[];
};
export type MazSelectOption = NormalizedOption | string | number | boolean | MazSelectOptionWithOptGroup;
export type Props<T extends ModelValueSimple, U extends MazSelectOption> = {
    /** Style attribut of the component root element */
    style?: HTMLAttributes['style'];
    /** Class attribut of the component root element */
    class?: HTMLAttributes['class'];
    /** The id of the select */
    id?: string;
    /** The value of the select */
    modelValue?: T | T[];
    /** The options of the select */
    options?: U[];
    /** The key of the option value */
    optionValueKey?: string;
    /** The key of the option label */
    optionLabelKey?: string;
    /** The key of the option input value */
    optionInputValueKey?: string;
    /** The position of the list */
    listPosition?: Position;
    /** The height of the option list item */
    itemHeight?: number;
    /** The max height of the option list */
    maxListHeight?: number;
    /** The max width of the option list */
    maxListWidth?: number;
    /** The size of the select */
    size?: Size;
    /** The color of the select */
    color?: Color;
    /** Display search input in option list */
    search?: boolean;
    /** The placeholder of the search input */
    searchPlaceholder?: string;
    /** if true, the option list is opened by default */
    open?: boolean;
    /** Enable the multiple selection */
    multiple?: boolean;
    /** Make the input required in the form */
    required?: boolean;
    /** Disable the component */
    disabled?: boolean;
    /** The input will be displayed in full width */
    block?: boolean;
    /** The exclude selectors for the v-closable directive - will exclude the elements from the directive */
    excludeSelectors?: string[];
};
declare const _default: <T extends ModelValueSimple, U extends MazSelectOption, M = boolean>(__VLS_props: {
    size?: Size | undefined;
    search?: boolean | undefined;
    open?: boolean | undefined;
    id?: string | undefined;
    disabled?: boolean | undefined;
    color?: Color | undefined;
    onFocus?: ((value: Event) => any) | undefined;
    onBlur?: ((value: Event) => any) | undefined;
    onChange?: ((value: Event) => any) | undefined;
    onClose?: ((value?: Event | undefined) => any) | undefined;
    required?: boolean | undefined;
    block?: boolean | undefined;
    onOpen?: ((value: boolean) => any) | undefined;
    options?: U[] | undefined;
    modelValue?: T | T[] | undefined;
    "onUpdate:model-value"?: ((value: T | T[]) => any) | undefined;
    "onSelected-option"?: ((value: U) => any) | undefined;
    optionValueKey?: string | undefined;
    optionLabelKey?: string | undefined;
    optionInputValueKey?: string | undefined;
    listPosition?: Position | undefined;
    itemHeight?: number | undefined;
    maxListHeight?: number | undefined;
    maxListWidth?: number | undefined;
    searchPlaceholder?: string | undefined;
    multiple?: boolean | undefined;
    excludeSelectors?: string[] | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {
        "no-results"?(_: {}): any;
        optgroup?(_: {
            label: string | number | true;
        }): any;
        default?(_: {
            option: NormalizedOption;
            isSelected: boolean;
        }): any;
    };
    emit: ((evt: "blur", value: Event) => void) & ((evt: "change", value: Event) => void) & ((evt: "close", value?: Event | undefined) => void) & ((evt: "focus", value: Event) => void) & ((evt: "open", value: boolean) => void) & ((evt: "update:model-value", value: T | T[]) => void) & ((evt: "selected-option", value: U) => void);
} | undefined, __VLS_expose?: ((exposed: import("vue").ShallowUnwrapRef<{
    openList: (event: Event) => Promise<void>;
    closeList: (event?: Event) => Promise<void>;
}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        size?: Size | undefined;
        search?: boolean | undefined;
        open?: boolean | undefined;
        id?: string | undefined;
        disabled?: boolean | undefined;
        color?: Color | undefined;
        onFocus?: ((value: Event) => any) | undefined;
        onBlur?: ((value: Event) => any) | undefined;
        onChange?: ((value: Event) => any) | undefined;
        onClose?: ((value?: Event | undefined) => any) | undefined;
        required?: boolean | undefined;
        block?: boolean | undefined;
        onOpen?: ((value: boolean) => any) | undefined;
        options?: U[] | undefined;
        modelValue?: T | T[] | undefined;
        "onUpdate:model-value"?: ((value: T | T[]) => any) | undefined;
        "onSelected-option"?: ((value: U) => any) | undefined;
        optionValueKey?: string | undefined;
        optionLabelKey?: string | undefined;
        optionInputValueKey?: string | undefined;
        listPosition?: Position | undefined;
        itemHeight?: number | undefined;
        maxListHeight?: number | undefined;
        maxListWidth?: number | undefined;
        searchPlaceholder?: string | undefined;
        multiple?: boolean | undefined;
        excludeSelectors?: string[] | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        openList: (event: Event) => Promise<void>;
        closeList: (event?: Event) => Promise<void>;
    }>): void;
    attrs: any;
    slots: {
        "no-results"?(_: {}): any;
        optgroup?(_: {
            label: string | number | true;
        }): any;
        default?(_: {
            option: NormalizedOption;
            isSelected: boolean;
        }): any;
    };
    emit: ((evt: "blur", value: Event) => void) & ((evt: "change", value: Event) => void) & ((evt: "close", value?: Event | undefined) => void) & ((evt: "focus", value: Event) => void) & ((evt: "open", value: boolean) => void) & ((evt: "update:model-value", value: T | T[]) => void) & ((evt: "selected-option", value: U) => void);
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            size?: Size | undefined;
            search?: boolean | undefined;
            open?: boolean | undefined;
            id?: string | undefined;
            disabled?: boolean | undefined;
            color?: Color | undefined;
            onFocus?: ((value: Event) => any) | undefined;
            onBlur?: ((value: Event) => any) | undefined;
            onChange?: ((value: Event) => any) | undefined;
            onClose?: ((value?: Event | undefined) => any) | undefined;
            required?: boolean | undefined;
            block?: boolean | undefined;
            onOpen?: ((value: boolean) => any) | undefined;
            options?: U[] | undefined;
            modelValue?: T | T[] | undefined;
            "onUpdate:model-value"?: ((value: T | T[]) => any) | undefined;
            "onSelected-option"?: ((value: U) => any) | undefined;
            optionValueKey?: string | undefined;
            optionLabelKey?: string | undefined;
            optionInputValueKey?: string | undefined;
            listPosition?: Position | undefined;
            itemHeight?: number | undefined;
            maxListHeight?: number | undefined;
            maxListWidth?: number | undefined;
            searchPlaceholder?: string | undefined;
            multiple?: boolean | undefined;
            excludeSelectors?: string[] | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import("vue").ShallowUnwrapRef<{
            openList: (event: Event) => Promise<void>;
            closeList: (event?: Event) => Promise<void>;
        }>): void;
        attrs: any;
        slots: {
            "no-results"?(_: {}): any;
            optgroup?(_: {
                label: string | number | true;
            }): any;
            default?(_: {
                option: NormalizedOption;
                isSelected: boolean;
            }): any;
        };
        emit: ((evt: "blur", value: Event) => void) & ((evt: "change", value: Event) => void) & ((evt: "close", value?: Event | undefined) => void) & ((evt: "focus", value: Event) => void) & ((evt: "open", value: boolean) => void) & ((evt: "update:model-value", value: T | T[]) => void) & ((evt: "selected-option", value: U) => void);
    } | undefined;
};
export default _default;
type __VLS_OmitKeepDiscriminatedUnion<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
