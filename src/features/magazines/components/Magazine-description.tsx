import { Chip, Grid, Typography, styled } from '@mui/material';
import { Magazine } from '@/api/magazine-api';
import { MagazineSummury } from './Magazine-summury';
import { HARDCODED_FEEDBACK, HARDCODED_OWNER_DESC, HARDCODED_SUMMURY } from '@/constants';
import { MagazineProperties } from './Magazine-properties';
import { MagazineOwner } from './Magazine-owner';
import { MagazineFeedback } from './Magazine-feedback';

const DescriptionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

const DescriptionChip = styled(Chip)(({ theme }) => ({
  background: theme.palette.background.paper,
  height: '40px',
  width: '150px'
}));

type MagazineDescriptionProps = {
  magazine: Magazine;
};

export const MagazineDescription = ({ magazine }: MagazineDescriptionProps) => {
  console.log(magazine);
  return (
    <Grid container spacing={2}>
      <Grid xs={12} mb={4}>
        <DescriptionTitle variant="h5" color="secondary">
          {magazine.name}
        </DescriptionTitle>
      </Grid>
      <Grid xs={12} my={1}>
        <DescriptionTitle variant="subtitle2">Category</DescriptionTitle>
        <DescriptionChip label={magazine.categories} />
      </Grid>
      <Grid xs={12} my={1}>
        <DescriptionTitle variant="subtitle2">Country</DescriptionTitle>
        <DescriptionChip label={magazine.country} />
      </Grid>
      <Grid xs={12} my={1}>
        <DescriptionTitle variant="subtitle2">Language</DescriptionTitle>
        <DescriptionChip label={magazine.language} />
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
