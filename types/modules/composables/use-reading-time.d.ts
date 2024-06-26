import { type Ref, type ComputedRef } from 'vue';
export type ReadingTimeOptions = {
    /** Content to calculate the reading time */
    content?: string | Ref<string>;
    /** Selector of the content to calculate the reading time */
    contentSelector?: string | Ref<string>;
    /** Ref of the content to calculate the reading time */
    contentRef?: Ref<HTMLElement | undefined>;
    /**
     * Words per minute
     * @default 150
     */
    velocity?: number | Ref<number>;
};
export type ReadingTimeReturn = {
    /** Content to calculate the reading time */
    content: ComputedRef<string | undefined | null>;
    /** Number of words in the content */
    wordCount: ComputedRef<number>;
    /** Words per minute */
    velocity: ComputedRef<number>;
    /** Reading time in minutes */
    duration: ComputedRef<number>;
};
export declare function useReadingTime(options: ReadingTimeOptions): ReadingTimeReturn;
