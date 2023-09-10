import { Fragment } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { ImageList } from '@mui/material';

import { IPaginate, Magazine } from '../api';
import { MagazineItem } from './MagazineItem';

type MagazineGridProps = {
  data: InfiniteData<IPaginate<Magazine[]>> | undefined;
};

export const MagazineGrid = ({ data }: MagazineGridProps) => (
  <ImageList
    gap={40}
    sx={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr)) !important',
      width: '100%'
    }}
  >
    {data?.pages?.map((page) => (
      <Fragment key={page.nextPage}>
        {page.data.map((magazine: Magazine) => (
          <MagazineItem key={magazine.name} magazine={magazine} />
        ))}
      </Fragment>
    ))}{' '}
  </ImageList>
);
