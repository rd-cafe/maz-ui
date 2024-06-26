import type { LocalToasterOptions } from './toaster-handler';
import type { ToasterPosition, ToasterAction, ToasterLink } from './types';
export type Props = {
    message: string;
    position?: ToasterPosition;
    maxToasts?: number | boolean;
    timeout?: number | boolean;
    queue?: boolean;
    noPauseOnHover?: boolean;
    type?: LocalToasterOptions['type'];
    link?: ToasterLink;
    action?: ToasterAction;
    persistent?: boolean;
    icon?: boolean;
};
declare function close(): void;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    position: string;
    maxToasts: boolean;
    timeout: number;
    type: string;
    message: undefined;
    link: undefined;
    action: undefined;
    icon: boolean;
}>, {
    close: typeof close;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    close: (...args: any[]) => void;
    open: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    position: string;
    maxToasts: boolean;
    timeout: number;
    type: string;
    message: undefined;
    link: undefined;
    action: undefined;
    icon: boolean;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    link: ToasterLink;
    timeout: number | boolean;
    position: ToasterPosition;
    type: "info" | "success" | "warning" | "danger" | "theme";
    message: string;
    icon: boolean;
    maxToasts: number | boolean;
    action: ToasterAction;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
