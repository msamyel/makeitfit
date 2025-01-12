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
        },
        extend: {},
    },
    plugins: [],
}