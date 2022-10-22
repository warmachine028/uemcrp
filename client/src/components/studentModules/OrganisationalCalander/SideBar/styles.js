import { styled } from '@mui/material/styles';

const PREFIX = 'SideBar';
export const classes = {
  desktopSideBar: `${PREFIX}-desktopSideBar`,
  mobileSideBar: `${PREFIX}-mobileSideBar`,
};
export const Root = styled('div')(({ theme }) => ({
  [`& .${classes.desktopSideBar}`]: {
    width: '240px',
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: '240px',
      boxSizing: 'border-box',
      position: 'absolute',
      height: '100%',
    },
  },
  [theme.breakpoints.down('md')]: {
    [`& .${classes.desktopSideBar}`]: {
      display: 'none',
    },
  },
}));
