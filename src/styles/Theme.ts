import { createTheme } from '@mui/material';
import '@fontsource/roboto';
import { colors } from './Colors';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.blue.blue_700,
      light: colors.blue.blue_100,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Roboto, sans-serif',
    },
    h2: {
      fontWeight: 700,
      fontFamily: 'Roboto , sans-serif',
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 700,
      fontFamily: 'Roboto , sans-serif',
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 700,
      fontFamily: 'Roboto , sans-serif',
      fontSize: '1.125rem',
      color: colors.grey.grey_600,
      margin: 0,
    },
    h5: {
      fontWeight: 400,
      color: colors.black,
      fontSize: '1.5rem',
      lineHeight: '1',
    },
    h6: {
      fontWeight: 400,
      color: colors.black,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
    button: {
      fontWeight: 500,
      fontSize: '1rem',
      textTransform: 'none',
    },
    subtitle1: {
      fontWeight: 700,
      fontFamily: 'Roboto',
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 12,
          borderRadius: 100,
          height: '3rem',
          flexWrap: 'wrap',
        },
        containedSecondary: {
          fontSize: '1rem',
          fontWeight: 500,
          backgroundColor: colors.grey.grey_100,
          ':hover': {
            backgroundColor: colors.grey.grey_300,
          },
          color: colors.black,
        },
        contained: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        outlined: {
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
  spacing: 8,
});
