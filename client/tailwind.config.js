/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                content: '#313338',
                text: '#b6bac1',
                textHovered: '#f2f3f5',
                hovered: '#393c41',
                clicked: '#43444b',
                friendIcon: '#81848e',
                divider: '#404147',
                sidebar: '#2b2d31',
                inboxCol: '#1e1f22',
                black: '#000000',
                itemsTheme: '#5e66f4',
            },
            fontFamily: {
                fontDisplay: ['gg sans', 'Noto Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                fontHeadline: ['ABC Ginto Nord', 'Noto Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
