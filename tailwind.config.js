/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Add your custom theme extensions here
            colors: {
            primary: '#007bff', // Example primary color
            secondary: '#6c757d', // Example secondary color
            },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'], // Example font family
            serif: ['Georgia', 'serif'],
        },
        spacing: {
            '128': '32rem', // Example custom spacing
        },
        keyframes: {
            wiggle: {
                '0%, 100%': { transform: 'rotate(-3deg)' },
                '50%': { transform: 'rotate(3deg)' },
            }
        },
        animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
        },
        // ... more theme extensions as needed
        },
    },
    plugins: [
      // Add any Tailwind plugins here
      require('@tailwindcss/forms'), // Example: Include the forms plugin
      // ... more plugins as needed
    ],
}