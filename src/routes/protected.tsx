import { Navigate } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';
import Layout from '@/components/Layout/Layout';

const { MagazinesRoutes } = lazyImport(() => import('@/features/magazines'), 'MagazinesRoutes');
const { DashboardRoutes } = lazyImport(() => import('@/features/dashboard'), 'DashboardRoutes');

export const protectedRoutes = [
  {
    path: 'app',
    element: <Layout />,
    children: [
      { path: 'magazine/*', element: <MagazinesRoutes /> },
      { path: '', element: <DashboardRoutes /> },
      { path: '*', element: <Navigate to=".." /> }
    ]
  }
];
