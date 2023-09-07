import { Typography, Breadcrumbs as MUIBreadcrumbs, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography pl={2} key={name}>
            {name.toLocaleUpperCase()}
          </Typography>
        ) : (
          <Button
            sx={{
              ml: 1,
              '&.MuiButtonBase-root:hover': {
                bgcolor: 'transparent'
              }
            }}
            onClick={() => navigate(routeTo)}
          >
            {name}
          </Button>
        );
      })}
    </MUIBreadcrumbs>
  );
};
