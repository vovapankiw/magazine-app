import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import FlagIcon from '@mui/icons-material/Flag';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAuth0 } from '@auth0/auth0-react';
import { Head } from '@/components/Head';
import Magazine from '@/assets/magazine-background.jpg';

export const Landing = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const handleStart = () => {
    if (isAuthenticated) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <Paper sx={{ backgroundImage: `url(${Magazine})`, backgroundSize: 'cover' }}>
      <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Head description="Welcome to Volo Magazine Archive" />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Box display="flex" justifyContent="center" mb={2}>
            <ImportContactsIcon fontSize="large" color="secondary" />
            <Typography pl={2} variant="h4" color="secondary">
              Magazine Mania
            </Typography>
          </Box>
          <Box display="flex">
            <Box>
              <Button onClick={handleStart} startIcon={<FlagIcon />}>
                Get started
              </Button>
            </Box>
            <Box>
              <a href="https://github.com/vovapankiw/magazine-app" target="_blank" rel="noreferrer">
                <Button startIcon={<GitHubIcon />}>Github Repo</Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
