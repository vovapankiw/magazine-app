/* eslint-disable */
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Magazine } from '@/api/magazine-api';

type MagazineItemProp = {
  magazine: Magazine;
};

export const MagazineItem = ({ magazine }: MagazineItemProp) => (
  <ImageListItem key={magazine.image} sx={{ minHeight: '245px' }}>
    <img
      src={require(`../../../assets/images/${magazine.image}`)}
      height="245px"
      alt={magazine.name}
      loading="lazy"
    />
    <ImageListItemBar
      title={magazine.name}
      subtitle={magazine.country}
      actionIcon={
        <IconButton
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${magazine.name}`}
        >
          <InfoIcon />
        </IconButton>
      }
    />
  </ImageListItem>
);
