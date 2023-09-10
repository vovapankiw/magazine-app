import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SnackbarProvider } from 'notistack';

import { Button, CircularProgress } from '@mui/material';
// import { AuthProvider } from '@/lib/auth';
import { queryClient } from '@/lib/react-query';

const ErrorFallback = () => (
  <div
    className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
    role="alert"
  >
    <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
    <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
      Refresh
    </Button>
  </div>
);

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <React.Suspense
    fallback={
      <div className="flex items-center justify-center w-screen h-screen">
        <CircularProgress />
      </div>
    }
  >
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
          <SnackbarProvider maxSnack={3}>
            {/* <AuthProvider> */}
            <Router>{children}</Router>
            {/* </AuthProvider> */}
          </SnackbarProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </React.Suspense>
);
