import { createTheme } from '@mui/material/styles';
import { COLORS } from './colors.const';
import * as FONTS from './fonts.const';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary
    },
    secondary: {
      main: COLORS.secondary,
      light: COLORS.light,
      dark: COLORS.dark
    },
    white: {
      main: COLORS.white
    },
    black: {
      main: COLORS.black
    },
    green: {
      main: COLORS.green
    }
  },
  typography: {
    fontFamily: FONTS.FAMILIES.normal,
    h1: {
      fontSize: 38
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1200
    }
  }
});
