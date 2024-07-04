import type { Config } from 'tailwindcss'
const config = {
    darkMode: ['class'],
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    prefix: '',
    theme: {
        screens: {
            xs: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px'
        },
        colors: ({ colors }) => ({
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            black: {
                lightBlack: '#2F2F2F',
                DEFAULT: '#090909',
                darkBlack: '#181818'
            },
            white: {
                DEFAULT: '#FFFFFF',
                lightWhite: '#EBEFF7'
            },
            slate: colors.slate,
            gray: {
                DEFAULT: '#A5A5A5',
                lightGray: '#A5A5A5',
                50: '#FFFFFF',
                100: '#F7F7F7',
                200: '#E2E2E2',
                300: '#CECECE',
                400: '#B9B9B9',
                500: '#A5A5A5',
                600: '#898989',
                700: '#6D6D6D',
                800: '#515151',
                900: '#353535',
                950: '#272727'
            },

            magenta: {
                DEFAULT: '#FF020E',
                50: '#FFBABD',
                100: '#FFA5A9',
                200: '#FF7C83',
                300: '#FF545C',
                400: '#FF2B35',
                500: '#FF020E',
                600: '#C9000A',
                700: '#910007',
                800: '#590004',
                900: '#210002',
                950: '#050000'
            },
            zinc: colors.zinc,
            neutral: colors.neutral,
            stone: colors.stone,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            // primary: {
            //     DEFAULT: '#E9183C',
            //     50: '#F9C0CA',
            //     100: '#F7ADBA',
            //     200: '#F4889A',
            //     300: '#F0637B',
            //     400: '#ED3D5B',
            //     500: '#E9183C',
            //     600: '#B7112E',
            //     700: '#840D21',
            //     800: '#510814',
            //     900: '#1E0307',
            //     950: '#040001'
            // },
            blue: {
                DEFAULT: '#0055FF',
                50: '#B8CFFF',
                100: '#A3C2FF',
                200: '#7AA7FF',
                300: '#528BFF',
                400: '#2970FF',
                500: '#0055FF',
                600: '#0042C7',
                700: '#00308F',
                800: '#001D57',
                900: '#000A1F',
                950: '#000103'
            },
            blueGray: {
                DEFAULT: '#A5BAE4',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#E4EAF7',
                400: '#C4D2ED',
                500: '#A5BAE4',
                600: '#7A99D7',
                700: '#4F78CA',
                800: '#345CAD',
                900: '#274582',
                950: '#203A6C'
            },
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
            darkBlue: '#0c7ac6',
            heavyBlue: '#0F172A'
        }),
        fontFamily: {
            sans: [
                'ui-sans-serif',
                'system-ui',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ],
            serif: [
                'ui-serif',
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif'
            ],
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace'
            ]
        },

        fontSize: {
            xss: ['12px', { lineHeight: '14.63px' }],
            xs: ['12px', { lineHeight: '18px' }],
            xsm: ['12px', { lineHeight: '24px' }],
            smxm: ['14px', { lineHeight: '17px' }],
            sms: ['14px', { lineHeight: '24px' }],
            sm: ['14px', { lineHeight: '36px' }],
            base: ['16px', { lineHeight: '19.5px' }],
            basem: ['16px', { lineHeight: '24px' }],
            baselg: ['16px', { lineHeight: '36px' }],
            lg: ['18px', { lineHeight: '21.94px' }],
            xl: ['20px', { lineHeight: '24.38px' }],
            '2xl': ['24px', { lineHeight: '29.26px' }],
            '3xl': ['32px', { lineHeight: '39.01px' }],
            '4xl': ['36px', { lineHeight: '43.88px' }],
            '4xls': ['42px', { lineHeight: '51.2px' }],
            '4xlm': ['46px', { lineHeight: '2.5rem' }],
            '5xl': ['48px', { lineHeight: '58.5px' }],
            '6xl': ['60px', { lineHeight: '73.14px' }],
            '7xl': ['72px', { lineHeight: '87.77px' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['90px', { lineHeight: '109.71px' }]
        }
    },
    dropShadow: {
        sm: '0 1px 1px rgb(0 0 0 / 0.05)',
        DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
        md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
        lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
        xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
        '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
        none: '0 0 #0000'
    },
    plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
