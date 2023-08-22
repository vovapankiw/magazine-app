import { Navigate, useRoutes } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Landing } from '../features/misc';

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth0();
  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '*', element: <Navigate to="/" /> }
  ];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const routes = isAuthenticated ? protectedRoutes : publicRoutes;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const element = useRoutes([...routes, ...commonRoutes]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{element}</>;
};
