import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const NoPreview = () => (
  <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
    No preview
  </Box>
);

type CardPreviewProps = {
  src?: string | null;
  height?: string;
  width?: string;
};

export const CardPreview = ({ src = '', height = '100%', width = '100%' }: CardPreviewProps) => {
  if (!src) return <NoPreview />;

  return (
    <CardMedia
      component="img"
      height={height}
      width={width}
      image={src}
      alt="project_image"
      sx={{ objectFit: 'contain' }}
    />
  );
};
