import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Theme, styled, Typography, ListItem } from '@mui/material';
import { CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import { sidebarItems } from './sidebar-items';
import { Divider } from '../Divider';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  top: '83px',
  background: theme.palette.background.default,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  top: '83px',
  background: theme.palette.background.default,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiPaper-root': {
      borderColor:
        theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main
    },
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const ItemList = styled(List)(({ theme }) => ({
  '& .MuiListItem-root': {
    color: theme.palette.text.primary
  },
  '& .Mui-selected, & .Mui-selected .MuiListItemIcon-root': {
    backgroundColor: `${theme.palette.background.paper} !important`,
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main
  }
}));

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleDrawerState = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && (
          <Grid2 container>
            <Typography variant="h6">Magazine Mania</Typography>
            <Typography variant="caption">A Close Look at Popular Titles</Typography>
          </Grid2>
        )}
        <IconButton onClick={handleDrawerState}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <ItemList>
        {sidebarItems.map((sidebarItem) => (
          <Link key={sidebarItem.section} to={sidebarItem.link} style={{ textDecoration: 'none' }}>
            <ListItem
              key={sidebarItem.section}
              disablePadding
              sx={{ display: 'block' }}
              selected={pathname.includes(sidebarItem.link)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  <sidebarItem.icon />
                </ListItemIcon>
                <ListItemText primary={sidebarItem.section} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </ItemList>
    </Drawer>
  );
};
