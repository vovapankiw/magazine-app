import { useState } from 'react';
import { Button, Typography, styled } from '@mui/material';

interface MagazineSummuryProps {
  summury: string;
}

const CustomizedTypography = styled(Typography)`
  position: relative;

  &.description--short {
    overflow: hidden;
    max-height: 130px;
  }

  &.description--short:before {
    content: '';
    position: absolute;
    display: block;
    top: 120px;
    left: 0;
    right: 0;
    height: 20px;
    z-index: 1;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      color-stop(70%, #fff)
    );
    background: -webkit-linear-gradient(transparent 0%, #fff 70%);
    background: -o-linear-gradient(transparent 0%, #fff 70%);
    background: linear-gradient(transparent 0%, #fff 70%);
  }
`;

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

      <Button onClick={handleClick} sx={{ 'margin-top': '10px' }}>
        {isOpen ? 'Show less' : 'Show more'}
      </Button>
    </>
  );
};
