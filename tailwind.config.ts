import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5b40f5",
        gradientStart: '#8379d4',
        gradientEnd: '#2f208c',
        background: '#00000d',
        textDark: '#09090d',
        textGray: '#4a4a4a',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at center,#8379d4 0%, #2f208c 35%,  transparent 70%)',
      }
    },
  },
  plugins: [],
}

export default config
