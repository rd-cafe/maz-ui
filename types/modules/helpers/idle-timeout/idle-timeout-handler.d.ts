import type { IdleTimeoutOptions, IdleTimeoutCallback } from './types';
export declare class IdleTimeout {
    private readonly callback;
    private readonly defaultOptions;
    private options;
    private timeoutHandler?;
    private isIdle;
    private isDestroy;
    private startTime;
    private remainingTime;
    private lastClientX;
    private lastClientY;
    private eventNames;
    constructor(callback: IdleTimeoutCallback, options?: IdleTimeoutOptions);
    get element(): HTMLElement | Document;
    start(): void;
    pause(): void;
    resume(): void;
    reset(): void;
    destroy(): void;
    private resetTimeout;
    private handleEvent;
    private handleTimeout;
    get destroyed(): boolean;
    get timeout(): number;
    set timeout(value: number);
    get idle(): boolean;
    set idle(value: boolean);
}
