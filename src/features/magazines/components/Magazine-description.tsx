import { Chip, Grid, Typography } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Magazine } from '@/api/magazine-api';
import { MagazineSummury } from './Magazine-summury';
import { HARDCODED_FEEDBACK, HARDCODED_OWNER_DESC, HARDCODED_SUMMURY } from '@/constants';
import { MagazineProperties } from './Magazine-properties';
import { MagazineOwner } from './Magazine-owner';
import { MagazineFeedback } from './Magazine-feedback';

type MagazineDescriptionProps = {
  magazine: Magazine;
};

export const MagazineDescription = ({ magazine }: MagazineDescriptionProps) => {
  console.log(magazine);
  return (
    <Grid container spacing={2}>
      <Grid xs={12} mb={4}>
        <Typography variant="h5">{magazine.name}</Typography>
      </Grid>
      <Grid xs={12} my={1}>
        <Typography variant="subtitle2">Category</Typography>
        <Chip
          label={magazine.categories}
          sx={{
            height: '40px',
            width: '150px'
          }}
        />
      </Grid>
      <Grid xs={12} my={1}>
        <Typography variant="subtitle2">Country</Typography>
        <Chip
          label={magazine.country}
          sx={{
            height: '40px',
            width: '150px'
          }}
        />
      </Grid>
      <Grid xs={12} my={1}>
        <Typography variant="subtitle2">Language</Typography>
        <Chip
          label={magazine.language}
          sx={{
            height: '40px',
            width: '150px'
          }}
        />
      </Grid>
      <Grid xs={12} my={4}>
        <MagazineSummury summury={HARDCODED_SUMMURY} />
      </Grid>
      <Grid xs={12} mb={4}>
        <MagazineProperties magazine={magazine} />
      </Grid>
      <Grid xs={12} mb={4}>
        <MagazineOwner ownerDesc={HARDCODED_OWNER_DESC} />
      </Grid>
      <Grid xs={12} mb={4}>
        <MagazineFeedback feedbackList={HARDCODED_FEEDBACK} />
      </Grid>
    </Grid>
  );
};
