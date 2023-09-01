/* eslint-disable */

import { Box } from '@mui/material';
import { InfiniteData } from '@tanstack/react-query';

export const MagazineGrid = ({ data }: { data: InfiniteData<unknown> | undefined }) => {
  console.log(data);
  return (
    <div>
      {data?.pages?.map((page, i) => {
        return (
          <div key={i}>
            {(page as unknown as any).map((el: any) => {
              return <Box key={el?.title}>{el?.title}</Box>;
            })}
          </div>
        );
      })}
    </div>
  );
};
