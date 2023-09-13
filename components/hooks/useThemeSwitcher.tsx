import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = '(prefer-color-scheme: dark)';
    const [mode, setMode] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem('theme');

        const makeDark = (check: any) => {
            if (check === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };
        const handleChange = () => {
            if (usePref) {
                let check = usePref === 'dark' ? 'dark' : 'light';
                setMode(check);
                makeDark(check);
            } else {
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check);
                makeDark(check);
            }
        };
        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (mode === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }
        if (mode === 'light') {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);

    return [mode, setMode] as const;
};

export default useThemeSwitcher;
