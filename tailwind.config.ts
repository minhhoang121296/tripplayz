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
            xs: '375px',
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
                DEFAULT: '#000000',
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
                DEFAULT: '#FE175B',
                50: '#FFCEDC',
                100: '#FFB9CE',
                200: '#FF91B1',
                300: '#FE6894',
                400: '#FE4078',
                500: '#FE175B',
                600: '#DC0141',
                700: '#A40131',
                800: '#6C0020',
                900: '#340010',
                950: '#180007'
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
            primary: {
                DEFAULT: '#E9183C',
                50: '#F9C0CA',
                100: '#F7ADBA',
                200: '#F4889A',
                300: '#F0637B',
                400: '#ED3D5B',
                500: '#E9183C',
                600: '#B7112E',
                700: '#840D21',
                800: '#510814',
                900: '#1E0307',
                950: '#040001'
            },
            blue: {
                DEFAULT: '#174FFE',
                50: '#CEDAFF',
                100: '#B9CAFF',
                200: '#91ABFF',
                300: '#688DFE',
                400: '#406EFE',
                500: '#174FFE',
                600: '#0136DC',
                700: '#0128A4',
                800: '#001B6C',
                900: '#000D34',
                950: '#000618'
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
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '4xlm': ['2.875rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }]
        }
    },
    plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
