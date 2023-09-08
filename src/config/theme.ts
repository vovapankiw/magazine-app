import { createTheme } from '@mui/material/styles';
import { orange, purple, deepPurple, grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: purple[500]
    },
    secondary: {
      main: orange[500]
    },
    background: {
      paper: 'rgb(231, 235, 240)'
    },
    text: {
      primary: grey[500]
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: deepPurple[800]
    },
    secondary: {
      main: orange[800]
    },
    background: {
      paper: 'gainsboro'
    },
    text: {
      primary: orange[800]
    }
  }
});
