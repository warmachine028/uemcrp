import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import holidays from '../../../../data/holidays';
import { Tooltip } from '@mui/material';

const drawerWidth = 250;

export default function ClippedDrawer() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'absolute',
          height: '100%',
        },
      }}
    >
      <Typography variant="h5" textAlign={'center'}>
        List of holidays
      </Typography>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {holidays.map((holiday, index) => (
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
    </Drawer>
  );
}
