import { InfiniteData } from '@tanstack/react-query';
import { ImageList } from '@mui/material';
import { MagazineItem } from './Magazine-item';
import { IPaginate, Magazine } from '@/api/magazine-api';

export const MagazineGrid = ({
  data
}: {
  data: InfiniteData<IPaginate<Magazine[]>> | undefined;
}) => (
  <ImageList cols={6} gap={40}>
    {data?.pages?.map((page) => (
      <>
        {page.data.map((magazine: Magazine) => (
          <MagazineItem key={magazine.name} magazine={magazine} />
        ))}
      </>
    ))}{' '}
  </ImageList>
);
