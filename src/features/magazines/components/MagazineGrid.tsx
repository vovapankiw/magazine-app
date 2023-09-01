/* eslint-disable */

import { InfiniteData } from '@tanstack/react-query';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MagazineItem } from './Magazine-item';

export const MagazineGrid = ({ data }: { data: InfiniteData<unknown> | undefined }) => {
  console.log(data);
  return (
    <div>
      {data?.pages?.map((page, i) => {
        return (
          <div key={i}>
            {(page as unknown as any).map((el: any) => {
              return <MagazineItem magazine={el} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
