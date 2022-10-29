import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

import CustomDateRangePicker from './CustomDateRangePicker';
import SideBar from './SideBar';
import { CookieSharp } from '@mui/icons-material';

const OrganisationalCalander = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  const drawerWidth = 240;

const [holidayDate, setHolidayDate] = useState();

function goToDate(date){
  console.log(date)
  const [day,month,year] = date.split('.');
  var dDay = new Date(year,month-1,day);
  setHolidayDate(dDay)
  console.log(dDay)
  console.log(holidayDate)
}



  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flex: 1,
      }}
    >
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        goToDate={goToDate}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' }, position: 'absolute' }}
        >
          <MenuIcon />
        </IconButton>
        <CustomDateRangePicker
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
          holidayDate={holidayDate}
        />
      </Box>
    </Box>
  );
};

export default OrganisationalCalander;
