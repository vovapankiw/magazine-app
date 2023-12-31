import { Navigate } from 'react-router-dom';
import { lazyImport } from '@/utils/lazy-import';
import { Layout } from '@/components';

const { MagazinesRoutes } = lazyImport(() => import('@/features/magazines'), 'MagazinesRoutes');
const { DashboardRoutes } = lazyImport(() => import('@/features/dashboard'), 'DashboardRoutes');
const { PreferencesRoutes } = lazyImport(
  () => import('@/features/preferences'),
  'PreferencesRoutes'
);

export const protectedRoutes = [
  {
    path: 'app',
    element: <Layout />,
    children: [
      { path: '', element: <Navigate to="./dashboard" /> },
      { path: 'magazine/*', element: <MagazinesRoutes /> },
      { path: 'dashboard/*', element: <DashboardRoutes /> },
      { path: 'preferences/*', element: <PreferencesRoutes /> },
      { path: '*', element: <Navigate to="./dashboard" /> }
    ]
  }
];
