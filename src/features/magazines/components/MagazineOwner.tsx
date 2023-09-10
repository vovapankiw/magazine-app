import { Avatar, Box, Link, Typography, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OwnerTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: '10px'
}));

const OwnerDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  marginRight: '20px',
  '&::first-letter': {
    color: theme.palette.text.secondary,
    initialLetter: '2 2',
    paddingRight: '5px'
  }
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
      <OwnerDescription variant="body2">{ownerDesc}</OwnerDescription>
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
