'use strict';

window.addEventListener('load', () => {

    const setTheme = (mode) => {
        if (!['light', 'dark', 'auto'].includes(mode)) {
            console.error(`Invalid theme mode: ${mode}. Resetting to auto.`);
            mode = "auto";
        }
        document.documentElement.dataset.theme = mode;
        localStorage.setItem("theme", mode);
    };

    const cycleTheme = () => {
        const currentTheme = localStorage.getItem("theme") || "auto";
        const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const themeCycleMap = {
            auto: isDarkPreferred ? "light" : "dark",
            light: "dark",
            dark: "light"
        };

        setTheme(themeCycleMap[currentTheme] || "auto");
    };

    const initTheme = () => {
        const themeFromStorage = localStorage.getItem("theme");
        setTheme(themeFromStorage || "auto");
    };

    const setupTheme = () => {
        const buttons = document.querySelectorAll(".theme-toggle");
        buttons.forEach(btn => btn.addEventListener("click", cycleTheme));
        initTheme();
    };

    setupTheme();
});
