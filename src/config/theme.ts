import { createTheme } from '@mui/material/styles';
import { green, purple, deepPurple } from '@mui/material/colors';
import { createContext } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    },
    background: {
      paper: 'rgb(231, 235, 240)'
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: deepPurple[800]
    }
  }
});
