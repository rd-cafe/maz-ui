import { type HTMLAttributes } from 'vue';
export type Props = {
    modelValue?: boolean;
    teleportSelector?: string;
    beforeClose?: () => Promise<void> | void;
    persistent?: boolean;
    noCloseOnEscKey?: boolean;
    transitionName?: string;
    backdropClass?: HTMLAttributes['class'];
    backdropContentClass?: HTMLAttributes['class'];
};
declare function close(): void;
declare function toggleModal(value: any): Promise<void>;
declare function onBackdropAnimationEnter(): void;
declare function onBackdropAnimationLeave(): void;
declare function onBackdropClicked(): void;
declare function onKeyPress(event: KeyboardEvent): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: boolean;
    teleportSelector: string;
    beforeClose: undefined;
    persistent: boolean;
    noCloseOnEscKey: boolean;
    transitionName: string;
    backdropClass: undefined;
    backdropContentClass: undefined;
}>, {
    onBackdropAnimationEnter: typeof onBackdropAnimationEnter;
    onBackdropAnimationLeave: typeof onBackdropAnimationLeave;
    onBackdropClicked: typeof onBackdropClicked;
    close: typeof close;
    present: import("vue").Ref<boolean>;
    toggleModal: typeof toggleModal;
    onKeyPress: typeof onKeyPress;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    open: () => void;
    close: () => void;
    "update:model-value": (value: boolean) => void;
    "before-close": () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    modelValue: boolean;
    teleportSelector: string;
    beforeClose: undefined;
    persistent: boolean;
    noCloseOnEscKey: boolean;
    transitionName: string;
    backdropClass: undefined;
    backdropContentClass: undefined;
}>>> & {
    onClose?: (() => any) | undefined;
    "onBefore-close"?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:model-value"?: ((value: boolean) => any) | undefined;
}, {
    persistent: boolean;
    transitionName: string;
    modelValue: boolean;
    teleportSelector: string;
    beforeClose: () => void | Promise<void>;
    noCloseOnEscKey: boolean;
    backdropClass: any;
    backdropContentClass: any;
}, {}>, {
    default?(_: {
        close: typeof close;
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
