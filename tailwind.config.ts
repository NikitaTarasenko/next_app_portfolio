import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            // backgroundImage: {
            //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            //     'gradient-conic':
            //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            // },
            fontFamily: {
                mont: ['var(--font-mont)', ...fontFamily.sans],
            },
            colors: {
                dark: '#1b1b1b',
                light: ' #efe2d4',
                primary: '#B63E96', // 240,86,199
                primaryDark: '#58E6D9', // 80,230,217
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
            width: {
                '63': '62px',
            },
            height: {
                '63': '62px',
            },
            backgroundImage: {
                circularLight:
                    'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#efe2d4 5px,#efe2d4 100px);',
                circularDark:
                    'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px);',
                circularLightLg:
                    'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#efe2d4 5px,#efe2d4 80px);',
                circularDarkLg:
                    'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px);',
                circularLightMd:
                    'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#efe2d4 5px,#efe2d4 60px)',

                circularDarkMd:
                    'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)',

                circularLightSm:
                    'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#efe2d4 5px,#efe2d4 40px)',

                circularDarkSm:
                    'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)',
            },
        },
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }

            xs: { max: '479px' },
            // => @media (max-width: 479px) { ... }
        },
    },
    plugins: [],
};
export default config;
