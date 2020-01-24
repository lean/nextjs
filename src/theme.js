import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const colors = {
  background: '#FCFCFC',
  brand01: '#097270',
  brand02: '#8915D1',
  brand03: '#15d189',
  error: '#B00020',
  text01: '#242C2D',
  text02: '#344143',
  text03: '#BAC5C7',
  text04: '#536567',
  textInverse01: '#FFFFFF',
  surface: '#FFFFFF',
  ui01: '#344143',
  ui02: '#536567',
  ui03: '#F8F9F9',
  ui04: '#ccd4d5',
  warning: '#EFC100',
}


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.brand01,
    },
    secondary: {
      main: colors.brand02,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.background,
    },
  },
});

export default theme;
