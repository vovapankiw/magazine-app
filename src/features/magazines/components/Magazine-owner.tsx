import { Avatar, Box, Link, Typography, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OwnerTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

const OwnerLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main
}));

type MagazineOwnerProps = {
  ownerDesc: string;
};

export const MagazineOwner = ({ ownerDesc }: MagazineOwnerProps) => (
  <>
    <OwnerTitle variant="h6" sx={{ marginBottom: '10px' }}>
      About author
    </OwnerTitle>
    <Box sx={{ display: 'flex' }}>
      <OwnerTitle variant="body2" sx={{ textAlign: 'justify', marginRight: '20px' }}>
        {ownerDesc}
      </OwnerTitle>
      <Avatar src="/broken-image.jpg" sx={{ width: 70, height: 70 }} />
    </Box>
    <Link href="/" underline="none">
      <OwnerLink
        variant="subtitle2"
        sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
      >
        More details about owner <ArrowForwardIosIcon fontSize="inherit" />
      </OwnerLink>
    </Link>
  </>
);
