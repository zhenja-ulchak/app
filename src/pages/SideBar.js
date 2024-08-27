import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import MenuIcon from '@mui/icons-material/Menu';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import SideBarList from '../components/SideBarList'


const SideBar = () => {
  const drawerWidth = 240;
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
  <SideBarList/>
    </Box>
  );



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 , width:'100%'}}>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={toggleDrawer(true)}>  <MenuIcon sx={{color: '#fff'}}/></Button>


            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TASK
            </Typography>

            <Button
              sx={{  padding: '5px 40px', background: '#ffffff', color: '#000000' }}
              component={Link}
              to="/setting"
              variant="contained"
            >
              SETTING
            </Button>
          </Toolbar>
        </AppBar>
      </Box>




      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar

        />
        <Divider />
        <SideBarList/>
        <Divider />

      </Drawer> */}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

    </Box>
  );


}
export default SideBar