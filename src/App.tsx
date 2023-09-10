import { AppRoutes } from '@/routes';
import { AppProvider, ThemeCustomProvider } from './providers';

function App() {
  return (
    <ThemeCustomProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ThemeCustomProvider>
  );
}

export default App;
