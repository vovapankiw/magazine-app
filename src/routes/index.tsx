import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Landing } from '../features/misc';

export const AppRoutes = () => {
  const auth = true;
  const commonRoutes = [{ path: '/', element: <Landing /> }];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const routes = auth ? protectedRoutes : publicRoutes;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const element = useRoutes([...routes, ...commonRoutes]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{element}</>;
};
