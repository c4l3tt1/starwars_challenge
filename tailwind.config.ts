import type { Config } from 'tailwindcss'

import { colorsCustom, fontSizeCustom, fontWeightCustom, screensCustom } from './src/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      helveticaNeue: ['var(--font-helveticaNeue)', 'sans-serif'],
    },
    screens: {
      ...screensCustom,
    },
    extend: {
      colors: { ...colorsCustom },
      fontSize: { ...fontSizeCustom },
      fontWeight: { ...fontWeightCustom },
      backgroundImage: {
        galaxy: "url('/galaxy.jpg')",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
