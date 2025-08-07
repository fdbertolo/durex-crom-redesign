/** @type {import('tailwindcss').Config} */
export const content = [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            'durex-dark': 'var(--durex-dark)',
            'durex-primary': 'var(--durex-primary)',
            'durex-light': 'var(--durex-light)',
            'durex-accent': 'var(--durex-accent)',
        },
    },
};
export const plugins = [];
