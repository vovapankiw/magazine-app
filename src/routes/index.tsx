import { Navigate, useRoutes } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { Box, CircularProgress } from '@mui/material';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Landing } from '../features/misc';

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
      <Box height="100vh" width="100%" display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size={100} />
      </Box>
    );
  }

  return <Box>{element}</Box>;
};
