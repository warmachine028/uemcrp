import { styled } from '@mui/material/styles';

const PREFIX = 'App';
export const classes = {
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`,
};

export const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
}));
