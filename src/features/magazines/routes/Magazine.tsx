import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Spinner } from '@/components/Spinner';
import { fetchMagazine } from '@/api/magazine-api';
import { MagazinePreview } from '../components/Magazine-preview';
import { MagazineDescription } from '../components/Magazine-description';

export const Magazine = () => {
  const { magazineId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['magazine', magazineId],
    queryFn: () => fetchMagazine(magazineId)
  });

  if (isLoading) return <Spinner />;

  if (isError) return <div>Opps something went wrong</div>;

  return (
    <Box my={8} mx={2}>
      <Grid container spacing={2}>
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
