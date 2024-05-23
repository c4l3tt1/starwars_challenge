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
    },
  },
  plugins: [],
}
export default config
