import { styled } from '@mui/material/styles';

const PREFIX = 'CustomDateRange';
export const classes = {
  root: `${PREFIX}-root`,
  calendarWrapper: `${PREFIX}-calendarWrapper`,
};
export const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    margin: '20px auto',
  },
  [`& .${classes.calendarWrapper}`]: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
}));
