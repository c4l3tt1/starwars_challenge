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
        'random-pic': "url('https://picsum.photos/432/230')",
      },
      flexBasis: {
        '1/4-gap-30': 'calc(25% - 30px)',
      },
    },
  },
  plugins: [],
}
export default config
