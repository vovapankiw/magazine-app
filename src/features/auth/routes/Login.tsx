import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export const Login = () => {
  const { loginWithRedirect, loginWithPopup } = useAuth0();

  useEffect(() => {
    const auth0Login = async () => {
      await loginWithPopup().then((token) => {
        console.log(token);
      });
    };
    void auth0Login();
  }, [loginWithPopup]);

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
