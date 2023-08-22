import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import FlagIcon from '@mui/icons-material/Flag';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Head } from '@/components/Head';
// eslint-disable-next-line import/extensions
import Magazine from '@/assets/magazine-background.jpg';

export const Landing = () => {
  const navigate = useNavigate();
  // const { user } = useAuth();

  const handleStart = () => {
    if (true) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <Paper sx={{ backgroundImage: `url(${Magazine})`, backgroundSize: 'cover' }}>
      <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Head description="Welcome to Volo Magazine Archive" />
        <Box>
          <Box display="flex" justifyContent="center" mb={2}>
            <ImportContactsIcon />
            <Typography pl={2}>Volo Magazines Archive</Typography>
          </Box>
          <Box display="flex">
            <Box>
              <Button onClick={handleStart} startIcon={<FlagIcon />}>
                Get started
              </Button>
            </Box>
            <Box>
              <a href="https://github.com/jsx-eslint/eslint" target="_blank" rel="noreferrer">
                <Button startIcon={<GitHubIcon />}>Github Repo</Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
