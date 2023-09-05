import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from '../Header';
import { SideBar } from '../Sidebar/SideBar';

const Layout = () => {
  const { logout } = useAuth0();

  return (
    <Box>
      <Header userName="Vova" onLogOut={logout} />
      <Box px={3} py={3} display="flex" height="100%" overflow="hidden">
        <Box>
          <SideBar />
        </Box>
        <Box width="100%">
          <Suspense
            fallback={
              <div className="h-full w-full flex items-center justify-center">Loading...</div>
            }
          >
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
