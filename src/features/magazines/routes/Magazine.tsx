import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Spinner } from '@/components/Spinner';
import { fetchMagazine } from '@/api/magazine-api';
import { MagazinePreview } from '../components/Magazine-preview';
import { MagazineDescription } from '../components/Magazine-description';
import { Breadcrumbs } from '@/components/Bredcrumbs/Breadcrumbs';

const MagazineBredcumbsWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    position: 'sticky',
    top: '139px'
  }
}));

export const Magazine = () => {
  const { magazineId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['magazine', magazineId],
    queryFn: () => fetchMagazine(magazineId)
  });

  if (isLoading) {
    return (
      <Box height="75vh" width="100%" display="flex" justifyContent="center" alignItems="center">
        <Spinner />
      </Box>
    );
  }

  if (isError) return <div>Opps something went wrong</div>;

  return (
    <Box my={8} mx={2}>
      <Grid container spacing={2}>
        <MagazineBredcumbsWrapper xs={12} mb={4}>
          <Breadcrumbs />
        </MagazineBredcumbsWrapper>
        <Grid lg={6} xs={12} mb={4}>
          <MagazinePreview magazine={data} />
        </Grid>
        <Grid lg={6} xs={12}>
          <MagazineDescription magazine={data} />
        </Grid>
      </Grid>
    </Box>
  );
};
