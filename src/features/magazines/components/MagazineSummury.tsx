import { useState } from 'react';
import { Button, Typography, styled } from '@mui/material';

interface MagazineSummuryProps {
  summury: string;
}

const CustomizedTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  padding: '10px',
  color: theme.palette.text.secondary,
  '&.description--short': {
    overflow: 'hidden',
    maxHeight: '130px'
  },

  '&.description--short:before': {
    content: '""',
    position: 'absolute',
    display: 'block',
    top: '130px',
    left: 0,
    right: 0,
    height: '20px',
    zIndex: 1,
    background: 'linear-gradient(transparent 0%, #fff 70%)'
  }
}));

export const MagazineSummury = ({ summury }: MagazineSummuryProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <CustomizedTypography
        variant="body2"
        className={isOpen ? 'description--full' : 'description--short'}
      >
        {summury}
      </CustomizedTypography>

      <Button onClick={handleClick} color="info" sx={{ marginTop: '10px' }}>
        {isOpen ? 'Show less' : 'Show more'}
      </Button>
    </>
  );
};
