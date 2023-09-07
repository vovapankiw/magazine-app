import { InfiniteData } from '@tanstack/react-query';
import { ImageList } from '@mui/material';
import { MagazineItem } from './Magazine-item';
import { IPaginate, Magazine } from '@/api/magazine-api';

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
      <>
        {page.data.map((magazine: Magazine) => (
          <MagazineItem key={magazine.name} magazine={magazine} />
        ))}
      </>
    ))}{' '}
  </ImageList>
);
