export interface TimerOptions {
    /**
     * The time in milliseconds
     * @default 1000
     */
    timeout?: number;
    /**
     * The callback to execute when the timer is finished
     * @default undefined
     */
    callback?: () => unknown;
    /**
     * The interval to update the remaining time
     * @default 200
     */
    remainingTimeUpdate?: number;
}
export declare function useTimer({ timeout, callback, remainingTimeUpdate }: TimerOptions): {
    remainingTime: import("vue").Ref<number>;
    start: (timeout?: number) => void;
    pause: () => void;
    resume: () => void;
    stop: () => void;
};
