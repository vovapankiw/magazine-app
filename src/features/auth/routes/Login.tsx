import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button } from '@mui/material';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </Box>
  );
};
