/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                pri: "#8b5cf6",
                sec: "#0ea5e9",
            },
            fontFamily: {
                pop: ["Poppins"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
