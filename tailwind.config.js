import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            ...colors,
            'link-primary': 'rgb(30 64 175)',
            'link-secondary': '#000',
            'onahau': '#c7e9ff',
            'sandy-beach': '#ffecc7'
        },
        extend: {
            animation: {
                'infinite-scroll': 'infinite-scroll 2s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    safelist: [
        'bg-onahau',
        'bg-sandy-beach',
        'bg-link-primary',
        'bg-link-secondary',
    ],
    plugins: [],
}