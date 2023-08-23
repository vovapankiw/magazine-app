import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box height="100vh" width="100%" display="flex" justifyContent="center" alignItems="center">
      <IconButton
        aria-label="fingerprint"
        color="success"
        size="large"
        onClick={() => loginWithRedirect()}
      >
        <Fingerprint />
      </IconButton>
    </Box>
  );
};
