import { useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppRoutes } from '@/routes';
import { AppProvider } from './providers/app';
import { ColorModeContext, darkTheme, lightTheme } from './config';

function App() {
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
    <AppProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppProvider>
  );
}

export default App;
