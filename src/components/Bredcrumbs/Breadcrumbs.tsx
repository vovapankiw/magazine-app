import { Typography, Breadcrumbs as MUIBreadcrumbs, Button, styled } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export const BreadcrumbItem = styled(Button)(({ theme }) => ({
  marginLeft: '4px',
  color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
  '&.MuiButtonBase-root:hover': {
    background: 'transparent'
  }
}));

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
          <BreadcrumbItem key={name} disableRipple onClick={() => navigate(routeTo)}>
            {name}
          </BreadcrumbItem>
        );
      })}
    </MUIBreadcrumbs>
  );
};
