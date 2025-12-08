/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",               // para HTML directo
        "./src/**/*.{js,ts,jsx,tsx}", // para componentes dentro de src
        "./*.{js,jsx}"                // para componentes en la raíz (si tienes alguno fuera de src)
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
