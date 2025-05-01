import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                '8bit': ['"Press Start 2P"', 'cursive'],
                '16bit': ['"VT323"', 'monospace'],
            },
        },
    },
    plugins: [],
}

export default config