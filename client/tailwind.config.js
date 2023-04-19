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
                friendIcon:'#81848e',
                divider:'#404147',
            },
        },
    },
    plugins: [],
};
