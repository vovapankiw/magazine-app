/* eslint-disable */
import { Chip, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Magazine } from '@/api/magazine-api';

type MagazinePreviewProps = {
  magazine: Magazine;
};

export const MagazinePreview = ({ magazine }: MagazinePreviewProps) => {
  console.log(magazine);
  return (
    <Grid container spacing={2}>
      <Grid
        container
        spacing={2}
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <Chip
            icon={<FavoriteBorderIcon />}
            clickable
            sx={{
              width: '54px',
              height: '40px',
              paddingLeft: '10px'
            }}
          />
        </Grid>
        <Grid>
          <Chip
            icon={<MenuBookIcon />}
            clickable
            sx={{
              width: '54px',
              height: '40px',
              paddingLeft: '10px'
            }}
          />
        </Grid>
        <Grid>
          <Chip
            label="Read demo"
            clickable
            sx={{
              height: '40px'
            }}
          />
        </Grid>
      </Grid>

      <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
        <img
          src={require(`../../../assets/images/${magazine.image}`)}
          alt={magazine.name}
          style={{ borderRadius: '10px', objectFit: 'contain', maxWidth: '100%' }}
        />
      </Grid>
    </Grid>
  );
};
