/* eslint-disable */
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Magazine } from '@/api/magazine-api';

type MagazineItemProp = {
  magazine: Magazine;
};

export const MagazineItem = ({ magazine }: MagazineItemProp) => (
  <Card sx={{ maxWidth: 205, width: 205 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="245"
        image={require(`../../../assets/images/${magazine.image}`)}
        alt={magazine.name}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {magazine.name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
