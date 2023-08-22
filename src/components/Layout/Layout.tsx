import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header } from '../Header';

const Layout = () => {
  // const { instance } = useMsal();
  // const activeAccount = instance.getActiveAccount();

  const logOutHandler = () => {
    // const logoutRequest = {
    //   account: activeAccount,
    //   postLogoutRedirectUri: '/'
    // };
    // instance.logoutRedirect(logoutRequest);
  };

  return (
    <Box>
      <Header userName="Vova" onLogOut={logOutHandler} />
      <Box px={3} pb={3}>
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">Loading...</div>
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Layout;
