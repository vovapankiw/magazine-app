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
    <Grid container spacing={2} justifyContent="center" gap="20px" position="sticky" top="215px">
      <Grid
        container
        spacing={2}
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="40px"
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
      </Grid>

      <Grid xs={12} display="flex" justifyContent="center" alignItems="center" height="400px">
        <img
          src={require(`../../../assets/images/${magazine.image}`)}
          alt={magazine.name}
          style={{ borderRadius: '10px', objectFit: 'contain', maxWidth: '100%', height: '100%  ' }}
        />
      </Grid>
    </Grid>
  );
};
