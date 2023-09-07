import { Avatar, Box, Link, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type MagazineOwnerProps = {
  ownerDesc: string;
};

export const MagazineOwner = ({ ownerDesc }: MagazineOwnerProps) => (
  <>
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
      About author
    </Typography>
    <Box sx={{ display: 'flex' }}>
      <Typography variant="body2" sx={{ textAlign: 'justify', marginRight: '20px' }}>
        {ownerDesc}
      </Typography>
      <Avatar src="/broken-image.jpg" sx={{ width: 70, height: 70 }} />
    </Box>
    <Link href="/" underline="none">
      <Typography
        variant="subtitle2"
        sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
      >
        More details about owner <ArrowForwardIosIcon fontSize="inherit" />
      </Typography>
    </Link>
  </>
);
