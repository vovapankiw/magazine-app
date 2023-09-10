import { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Button } from '@mui/material';

import { queryClient } from '@/lib/react-query';
import { AuthProvider } from './auth-provider';
import { FallBack, Spinner } from '@/components';

const ErrorFallback = () => (
  <FallBack>
    <h2>Ooops, something went wrong :( </h2>
    <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
  </FallBack>
);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <Suspense
    fallback={
      <FallBack>
        <Spinner />
      </FallBack>
    }
  >
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
          <SnackbarProvider maxSnack={3}>
            <AuthProvider>
              <Router>{children}</Router>
            </AuthProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </Suspense>
);
