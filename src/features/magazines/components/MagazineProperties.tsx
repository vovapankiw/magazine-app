import { useState } from 'react';
import { Box, Button, Link, Stack, Typography, styled } from '@mui/material';

import { Divider } from '@/components';

import { Magazine } from '../api';

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

const PropertiesTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

const PropertiesLink = styled(Link)(({ theme }) => ({
  color: theme.palette.info.main
}));

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
        <PropertiesTitle variant="h6" sx={{ marginBottom: '10px' }}>
          Properties
        </PropertiesTitle>
        <Stack divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
          <Item>
            <PropertiesTitle variant="body1">Title</PropertiesTitle>
            <PropertiesTitle variant="body1">{magazine.name}</PropertiesTitle>
          </Item>
          <Item>
            <PropertiesTitle variant="body1">Category</PropertiesTitle>
            <PropertiesTitle variant="body1">{magazine.categories}</PropertiesTitle>
          </Item>
          <Item>
            <PropertiesTitle variant="body1">Country</PropertiesTitle>
            <PropertiesTitle variant="body1">{magazine.country}</PropertiesTitle>
          </Item>
          <Item>
            <PropertiesTitle variant="body1">Language</PropertiesTitle>
            <PropertiesTitle variant="body1">{magazine.language}</PropertiesTitle>
          </Item>
          <Item>
            <PropertiesTitle variant="body1">Circulation</PropertiesTitle>
            <PropertiesTitle variant="body1">{magazine.circulation}</PropertiesTitle>
          </Item>
          <Item>
            <PropertiesTitle variant="body1">Frequency</PropertiesTitle>
            <PropertiesTitle variant="body1">{magazine.frequency}</PropertiesTitle>
          </Item>
          <Item>
            <PropertiesTitle variant="body1">Founded</PropertiesTitle>
            <PropertiesTitle variant="body1">{magazine.founded}</PropertiesTitle>
          </Item>
          <Item>
            <PropertiesTitle variant="body1">Wikipedia</PropertiesTitle>
            <PropertiesLink href={magazine.link} underline="none" color="success">
              Wikipedia link
            </PropertiesLink>
          </Item>
          <Item />
        </Stack>
      </Wrapper>
      <Button color="info" onClick={handleClick} sx={{ marginTop: '10px' }}>
        {isOpen ? 'Less details' : 'More details'}
      </Button>
    </>
  );
};
