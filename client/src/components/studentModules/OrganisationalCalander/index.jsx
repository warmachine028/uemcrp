import { Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomDateRangePicker from './CustomDateRangePicker';
import ClippedDrawer from './SideBar';

const OrganisationalCalander = () => {
  // return <<CustomDateRangePicker />>
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flex: 1,
      }}
    >
      <ClippedDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Typography paragraph></Typography>
        <Typography paragraph></Typography> */}
        <CustomDateRangePicker />
      </Box>
    </Box>
  );
};

export default OrganisationalCalander;
