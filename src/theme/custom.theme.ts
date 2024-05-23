export const screens = {
  xl: { max: 1440 },
  lg: { max: 1200 },
  md: { max: 992 },
  sm: { max: 768 },
  xs: { max: 640 },
  xxs: { max: 480 },
}

export const screensCustom = {
  xl: { max: `${screens.xl.max}px` },
  lg: { max: `${screens.lg.max}px` },
  md: { max: `${screens.md.max}px` },
  sm: { max: `${screens.sm.max}px` },
  xs: { max: `${screens.xs.max}px` },
  xxs: { max: `${screens.xxs.max}px` },
}

export const fontSizeCustom = {
  xs: '0.75rem' /* 12px */,
  sm: '0.938rem' /* 15px */,
  base: '0.875rem' /* 14px */,
  lg: '1rem' /* 16px */,
  xl: '1.25rem' /* 20px */,
  '1xl': '1.375rem' /* 22px */,
  '2xl': '2rem' /* 32px */,
  '3xl': '2.125rem' /* 34px */,
  '4xl': '3.375rem' /* 54px */,
}

export const fontWeightCustom = {
  light: '300',
  regular: '400',
}

export const colorsCustom = {
  blueStarWars: '#002B53',
  grayStarWars: {
    50: '#E6E6E6',
    100: '#757575',
    200: '#666666',
    300: '#333333',
  },
} as const
