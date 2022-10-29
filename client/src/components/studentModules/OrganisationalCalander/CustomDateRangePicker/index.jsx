import * as React from 'react';
import { Typography } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Root, classes } from './styles';

const CustomDateRangePicker = (props) => {
  const [values, setValues] = React.useState(props.holidayDate);

  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = React.useState(
      window.innerWidth - props.drawerWidth
    );

    React.useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth - props.drawerWidth);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
  }
  console.log(props.holidayDate)

  return (
    <Root className={classes.root}>
      <Typography textAlign="center" variant="h5">
        Calendar
      </Typography>
      <div className={classes.calendarWrapper}>
        <Calendar
          onChange={setValues}
          value={values}
          showDoubleView={
            useWindowWidth() > 600 + props.drawerWidth ? true : false
          }
          calendarType="US"
          selectRange
        />
      </div>
    </Root>
  );
};

export default CustomDateRangePicker;
