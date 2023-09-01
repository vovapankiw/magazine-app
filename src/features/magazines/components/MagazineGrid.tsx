/* eslint-disable */

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { InfiniteData } from '@tanstack/react-query';
import Image from '../../../assets/images/cosmopolitan.webp';

export const MagazineGrid = ({ data }: { data: InfiniteData<unknown> | undefined }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 205 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={require('../../../assets/images/cosmopolitan.webp')}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* <img height="245px" src={require('../../../assets/images/cosmopolitan.webp')} />
      <img height="245px" src={require('../../../assets/images/aaa_living.webp')} />
      <img height="245px" src={require('../../../assets/images/national_geographic.webp')} /> */}
      {/* {data?.pages?.map((page, i) => {
        return (
          <div key={i}>
            {(page as unknown as any).map((el: any) => {
              return <Box key={el?.title}>{el?.title}</Box>;
            })}
          </div>
        );
      })} */}
    </div>
  );
};
