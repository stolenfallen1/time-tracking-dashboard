/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                cardblue: "hsl(235, 80%, 60%)",
                lightred: "hsl(15, 100%, 70%)",
                softblue: "hsl(195, 74%, 62%)",
                pinkred: "hsl(348, 100%, 68%)",
                limegreen: "hsl(145, 58%, 55%)",
                darkviolet: "hsl(264, 64%, 52%)",
                softorange: "hsl(43, 84%, 65%)",
                verydarkblue: "hsl(226, 43%, 10%)",
                darkblue: "hsl(235, 46%, 20%)",
                desaturatedblue: "hsl(235, 45%, 61%)",
                paleblue: "hsl(236, 100%, 87%)",
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
        },
    },
    plugins: [],
};
