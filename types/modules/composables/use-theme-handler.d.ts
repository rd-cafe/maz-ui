export type StrictThemeHandlerOptions = {
    /**
     * Class to be added to the html element when dark theme is set
     * @default 'dark'
     */
    darkClass: string;
    /**
     * Class to be added to the html element when light theme is set
     * @default 'light'
     */
    lightClass: string;
    /**
     * Key to store the theme in local storage
     * @default 'theme'
     */
    storageThemeKey: string;
    /**
     * Value to set the theme to dark
     * @default 'dark'
     */
    storageThemeValueDark: string;
    /**
     * Value to set the theme to light
     * @default 'light'
     */
    storageThemeValueLight: string;
    /**
     * Value to set the theme to system
     * @default 'system'
     */
    storageThemeValueSystem: string;
    /**
     * Watch for changes in the system theme
     * @default true
     */
    watchChanges: boolean;
    /**
     * Default theme to set if no theme has been previously set by the user
     * Useful to force a theme on first visit
     * The value will not be stored in local storage
     * @default undefined
     */
    defaultTheme?: 'light' | 'dark';
};
export type ThemeHandlerOptions = Partial<StrictThemeHandlerOptions>;
export declare function useThemeHandler(opts?: ThemeHandlerOptions): {
    autoSetTheme: () => void;
    toggleTheme: () => void;
    setSystemTheme: () => void;
    setDarkTheme: () => void;
    setLightTheme: () => void;
    setDefaultTheme: () => void;
    hasDarkTheme: import("vue").ComputedRef<boolean>;
    hasLightTheme: import("vue").ComputedRef<boolean>;
    hasSystemTheme: import("vue").ComputedRef<boolean>;
    theme: import("vue").Ref<string>;
    selectedTheme: import("vue").Ref<string>;
};
