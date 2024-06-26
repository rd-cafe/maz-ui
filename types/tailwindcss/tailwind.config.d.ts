import { getNumericScreensFromTailwind } from './variables/breakpoints';
export { getNumericScreensFromTailwind };
declare const _default: {
    darkMode: ["class", string];
    content: never[];
    theme: {
        extend: {
            fontFamily: {
                base: string;
            };
            zIndex: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                15: string;
                25: string;
                35: string;
                45: string;
                75: string;
                100: string;
                'default-backdrop': string;
            };
            screens: {
                'mob-s': string;
                'mob-m': string;
                'mob-l': string;
                'tab-s': string;
                'tab-m': string;
                'tab-l': string;
                'lap-s': string;
                'lap-m': string;
                'lap-l': string;
                'lap-xl': string;
                'lap-2xl': string;
                'lap-3xl': string;
            };
            colors: Record<never, string>;
            borderWidth: {
                0: string;
                1: string;
                DEFAULT: string;
                2: string;
                3: string;
                4: string;
            };
            borderRadius: {
                DEFAULT: string;
            };
            spacing: {};
        };
    };
    plugins: {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    }[];
};
export default _default;
