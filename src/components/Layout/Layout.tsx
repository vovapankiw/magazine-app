import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from '../Header';
import { SideBar } from '../Sidebar/SideBar';

const Content = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default
}));

export const Layout = () => {
  const { logout } = useAuth0();

  return (
    <Content>
      <Header userName="Vova" onLogOut={logout} />
      <Box px={3} display="flex" height="100%" minHeight="calc(100vh - 104px)">
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
    </Content>
  );
};
