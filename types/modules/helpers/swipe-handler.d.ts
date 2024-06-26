export type SwipeValues = {
    xStart: number | undefined;
    yStart: number | undefined;
    xEnd: number | undefined;
    yEnd: number | undefined;
    xDiff: number | undefined;
    yDiff: number | undefined;
};
export type SwipeEventCallback = (event: TouchEvent) => void;
export type SwipeValuesCallback = (values: SwipeValues) => void;
/**
 * Options for handling swipe events.
 */
export interface SwipeOptions {
    /**
     * The element on which the swipe events will be handled.
     * @default null
     */
    element: HTMLElement | string;
    /**
     * Callback function to be executed when a left swipe is detected.
     * @default undefined
     */
    onLeft?: SwipeEventCallback;
    /**
     * Callback function to be executed when a right swipe is detected.
     * @default undefined
     */
    onRight?: SwipeEventCallback;
    /**
     * Callback function to be executed when an up swipe is detected.
     * @default undefined
     */
    onUp?: SwipeEventCallback;
    /**
     * Callback function to be executed when a down swipe is detected.
     * @default undefined
     */
    onDown?: SwipeEventCallback;
    /**
     * Callback function to be executed when values are changed.
     * @default undefined
     */
    onValuesChanged?: SwipeValuesCallback;
    /**
     * The minimum distance the swipe needs to travel to be considered valid.
     * @default 50
     */
    threshold?: number;
    /**
     * Whether to prevent the default behavior of touchmove event.
     * @default false
     */
    preventDefaultOnTouchMove?: boolean;
    /**
     * Whether to prevent the default behavior of mousewheel event.
     * @default false
     */
    preventDefaultOnMouseWheel?: boolean;
    /**
     * Whether to trigger the swipe event immediately on touchstart/mousedown.
     * @default false
     */
    immediate?: boolean;
    /**
     * Whether to trigger the swipe event on touchend/mouseup.
     * If set to true, the swipe event will be triggered only when the user lifts their finger/mouse.
     * @default false
     */
    triggerOnEnd?: boolean;
}
export declare class Swipe {
    readonly inputOption: SwipeOptions;
    private readonly defaultOptions;
    readonly element: HTMLElement;
    xStart: number | undefined;
    yStart: number | undefined;
    xEnd: number | undefined;
    yEnd: number | undefined;
    xDiff: number | undefined;
    yDiff: number | undefined;
    private readonly onToucheStartCallback;
    private readonly onToucheMoveCallback;
    private readonly onToucheEndCallback;
    private readonly onMouseWheelCallback;
    private options;
    constructor(inputOption: SwipeOptions);
    start(): void;
    stop(): void;
    private handleMouseWheel;
    private toucheStartHandler;
    private emitValuesChanged;
    private handleTouchMove;
    private handleTouchEnd;
    private runCallbacks;
    private resetValues;
}
