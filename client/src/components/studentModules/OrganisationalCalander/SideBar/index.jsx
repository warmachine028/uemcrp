import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Tooltip } from '@mui/material';

import holidays from '../../../../data/holidays';
import { classes, Root } from './styles';

const drawerWidth = 240;

const HolidayList = () => {
  return (
    <>
      <Typography variant="h5" textAlign={'center'}>
        List of holidays
      </Typography>
      <Divider />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {holidays.map((holiday) => (
            <ListItem key={holiday.date} disablePadding>
              <ListItemButton>
                <Tooltip title={holiday.date} placement={'right'}>
                  <ListItemText primary={holiday.title} />
                </Tooltip>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default function SideBar(props) {
  return (
    <Root>
      <Drawer variant="permanent" className={classes.desktopSideBar}>
        <HolidayList />
      </Drawer>
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <HolidayList />
      </Drawer>
    </Root>
  );
}
