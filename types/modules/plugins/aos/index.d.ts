import type { App } from 'vue';
import type { Router } from 'vue-router';
export type AosOptions = {
    animation?: {
        delay?: number;
        duration?: number;
        once?: boolean;
    };
    delay?: number;
    observer?: IntersectionObserverInit;
    router?: Router;
};
interface ClassOptions extends Omit<AosOptions, 'router'> {
    animation: {
        delay: number;
        duration: number;
        once: boolean;
    };
    delay: number;
    observer: IntersectionObserverInit & {
        rootMargin: string;
        threshold: number | number[];
    };
}
export declare class AosHandler {
    options: ClassOptions;
    constructor(options?: Omit<AosOptions, 'router'>);
    private handleIntersect;
    private handleObserver;
    runAnimations(): Promise<void> | undefined;
}
export declare let instance: AosHandler;
export declare const plugin: {
    install: (app: App, options?: AosOptions) => void;
};
export {};
