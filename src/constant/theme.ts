import { MantineThemeOverride } from '@mantine/core';

export const theme = {
  fontFamily: 'Open Sans, sans-serif',
  colors: {
    blue: ['#00aeef'],
    purple: ['#615dee'],
    pink: ['#bd00ff'],
  },
  fontSizes: {
    xs: 24,
    sm: 40,
    md: 52,
    xl: 73,
  },
  breakpoints: {
    sm: 768,
  },
} as MantineThemeOverride;
