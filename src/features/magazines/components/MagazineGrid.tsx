/* eslint-disable */

import { InfiniteData } from '@tanstack/react-query';
import { Box } from '@mui/material';
import { MagazineItem } from './Magazine-item';
import { IPaginate, Magazine } from '@/api/magazine-api';

export const MagazineGrid = ({
  data
}: {
  data: InfiniteData<IPaginate<Magazine[]>> | undefined;
}) => {
  return (
    <Box display="flex" px="40px" gap="40px" flexWrap="wrap" flexDirection="row">
      {data?.pages?.map((page, i) => {
        return (
          <>
            {page.data.map((magazine: Magazine) => {
              return <MagazineItem key={magazine.name} magazine={magazine} />;
            })}
          </>
        );
      })}
    </Box>
  );
};
