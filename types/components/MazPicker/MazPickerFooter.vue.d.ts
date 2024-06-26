import { type PropType } from 'vue';
import type { Color } from '../types';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<Color>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<Color>;
        required: true;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
