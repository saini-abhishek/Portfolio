import { THEME } from "@/app/utils/constants";
import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState<any>();

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            let check =
                userPref === THEME.DARK || mediaQuery.matches
                    ? THEME.DARK
                    : THEME.LIGHT;
            setMode(check);

            const classList = document.documentElement.classList;

            if (check === THEME.DARK) {
                classList.add(THEME.DARK);
            } else {
                classList.remove(THEME.DARK);
            }
        };

        handleChange();

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        
        const classList = document.documentElement.classList;
        
        if (mode === THEME.DARK) {
            window.localStorage.setItem("theme", THEME.DARK);
            classList.add(THEME.DARK);
        }
        if (mode === THEME.LIGHT) {
            window.localStorage.setItem("theme", THEME.LIGHT);
            classList.remove(THEME.DARK);
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
