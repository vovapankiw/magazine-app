import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { Spinner } from '@/components/Spinner';
import { fetchMagazine } from '@/api/magazine-api';
import { MagazinePreview } from '../components/Magazine-preview';
import { MagazineDescription } from '../components/Magazine-description';

const Section = styled(Grid)`
  &.deault_order {
    order: 2;
  }

  &.reverse_order {
    order: 3;
  }
`;

export const Magazine = () => {
  // const lgAndUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const lgAndUp = true;
  const { magazineId } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['magazine', magazineId],
    queryFn: () => fetchMagazine(magazineId)
  });

  if (isLoading) return <Spinner />;

  if (isError) return <div>Opps something went wrong</div>;

  return (
    <Box m={8}>
      <Grid container spacing={2}>
        <Grid lg xs={12}>
          <MagazinePreview magazine={data} />
        </Grid>
        <Section lg={6} xs={12} className={lgAndUp ? 'default_order' : 'reverse_order'}>
          <MagazineDescription magazine={data} />
        </Section>
      </Grid>
    </Box>
  );
};
