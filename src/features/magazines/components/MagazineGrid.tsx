/* eslint-disable */

import { InfiniteData } from '@tanstack/react-query';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MagazineItem } from './Magazine-item';
import { IPaginate, Magazine } from '@/api/magazine-api';

export const MagazineGrid = ({
  data
}: {
  data: InfiniteData<IPaginate<Magazine[]>> | undefined;
}) => {
  return (
    <Box display="flex" gap="20px" flexWrap="wrap" flexDirection="column">
      {data?.pages?.map((page, i) => {
        return (
          <Box key={i} display="flex" flexWrap="wrap" justifyContent="center" gap="20px">
            {page.data.map((magazine: Magazine) => {
              return <MagazineItem magazine={magazine} />;
            })}
          </Box>
        );
      })}
    </Box>
  );
};
