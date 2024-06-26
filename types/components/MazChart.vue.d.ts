import { type PropType } from 'vue';
import { type ChartType, type ChartData, type UpdateMode } from 'chart.js';
export type { ChartType, ChartData, UpdateMode };
declare const _default: import("vue").DefineComponent<{
    /**
     * Chart.js chart type
     */
    type: {
        type: PropType<keyof import("chart.js").ChartTypeRegistry>;
        required: true;
    };
    /**
     * The data object that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/getting-started/
     */
    data: {
        type: PropType<ChartData<keyof import("chart.js").ChartTypeRegistry, (number | import("chart.js").Point | [number, number] | import("chart.js").BubbleDataPoint | null)[], unknown>>;
        required: true;
    };
    /**
     * The options object that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/general/options.html
     */
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * The plugins array that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/developers/plugins.html
     */
    plugins: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * Key name to identificate dataset
     */
    datasetIdKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * A mode string to indicate transition configuration should be used.
     * @see https://www.chartjs.org/docs/latest/developers/api.html#update-mode
     */
    updateMode: {
        type: PropType<"reset" | "resize" | "default" | "none" | "hide" | "show" | "active">;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Chart.js chart type
     */
    type: {
        type: PropType<keyof import("chart.js").ChartTypeRegistry>;
        required: true;
    };
    /**
     * The data object that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/getting-started/
     */
    data: {
        type: PropType<ChartData<keyof import("chart.js").ChartTypeRegistry, (number | import("chart.js").Point | [number, number] | import("chart.js").BubbleDataPoint | null)[], unknown>>;
        required: true;
    };
    /**
     * The options object that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/general/options.html
     */
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * The plugins array that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/developers/plugins.html
     */
    plugins: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * Key name to identificate dataset
     */
    datasetIdKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * A mode string to indicate transition configuration should be used.
     * @see https://www.chartjs.org/docs/latest/developers/api.html#update-mode
     */
    updateMode: {
        type: PropType<"reset" | "resize" | "default" | "none" | "hide" | "show" | "active">;
        default: undefined;
    };
}>>, {
    options: Record<string, any>;
    plugins: unknown[];
    datasetIdKey: string;
    updateMode: "reset" | "resize" | "default" | "none" | "hide" | "show" | "active";
}, {}>;
export default _default;
