import { ReactNode, createContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '@/config';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeCustomProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
