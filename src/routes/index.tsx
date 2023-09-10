import { Navigate, useRoutes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';

import { FallBack, Spinner } from '@/components';
import { Landing } from '../features/misc';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '*', element: <Navigate to="/" /> }
  ];

  const routes = isAuthenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  if (isLoading) {
    return (
      <FallBack>
        <Spinner />
      </FallBack>
    );
  }

  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Box>{element}</Box>
    </QueryParamProvider>
  );
};
