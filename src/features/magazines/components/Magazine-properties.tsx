import { useState } from 'react';
import { Box, Button, Divider, Link, Stack, Typography, styled } from '@mui/material';
import { Magazine } from '@/api/magazine-api';

const Item = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled(Box)`
  &.short {
    height: 200px;
    overflow: hidden;
  }
`;

export type MagazinePropertiesProps = {
  magazine: Magazine;
};

export const MagazineProperties = ({ magazine }: MagazinePropertiesProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <Wrapper className={isOpen ? 'full' : 'short'}>
        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          Properties
        </Typography>
        <Stack divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
          <Item>
            <Typography variant="body1">Title</Typography>
            <Typography variant="body1">{magazine.name}</Typography>
          </Item>
          <Item>
            <Typography variant="body1">Category</Typography>
            <Typography variant="body1">{magazine.categories}</Typography>
          </Item>
          <Item>
            <Typography variant="body1">Country</Typography>
            <Typography variant="body1">{magazine.country}</Typography>
          </Item>
          <Item>
            <Typography variant="body1">Language</Typography>
            <Typography variant="body1">{magazine.language}</Typography>
          </Item>
          <Item>
            <Typography variant="body1">Circulation</Typography>
            <Typography variant="body1">{magazine.circulation}</Typography>
          </Item>
          <Item>
            <Typography variant="body1">Frequency</Typography>
            <Typography variant="body1">{magazine.frequency}</Typography>
          </Item>
          <Item>
            <Typography variant="body1">Founded</Typography>
            <Typography variant="body1">{magazine.founded}</Typography>
          </Item>
          <Item>
            <Typography variant="body1">Wikipedia</Typography>
            <Link href={magazine.link} underline="none">
              Wikipedia link
            </Link>
          </Item>
          <Item />
        </Stack>
      </Wrapper>
      <Button onClick={handleClick} sx={{ 'margin-top': '10px' }}>
        {isOpen ? 'Less details' : 'More details'}
      </Button>
    </>
  );
};
