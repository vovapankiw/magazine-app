/* eslint-disable */
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton, ImageListItem, ImageListItemBar, Link } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Magazine } from '@/api/magazine-api';

type MagazineItemProp = {
  magazine: Magazine;
};

export const MagazineItem = ({ magazine }: MagazineItemProp) => {
  const navigate = useNavigate();

  const onClick = () => {
    const sanitizedName = magazine.name.trim().toLowerCase().split(' ').join('-');
    navigate(`/app/magazine/${sanitizedName}`);
  };
  return (
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
            onClick={onClick}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};
