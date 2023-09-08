import { AppRoutes } from '@/routes';
import { AppProvider, ThemeCustomProvider } from './providers';

function App() {
  return (
    <AppProvider>
      <ThemeCustomProvider>
        <AppRoutes />
      </ThemeCustomProvider>
    </AppProvider>
  );
}

export default App;
