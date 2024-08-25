import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import SideBarList from '../components/SideBarList'
import { Button } from '@mui/material';

const SideBar = ({ setActiveTodoDashboard, setActiveTodoApp, setActiveToDoTable, setUsers }) => {
  const drawerWidth = 240;
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>

          <Typography sx={{ float: 'right' , width:'120px'}} variant="h6" noWrap component="div">
            {t('Permanent')}

          </Typography>
          <Button
          sx={{marginLeft: '95%', padding: '5px 40px', background:'#ffffff', color: '#000000'}}
            component={Link}
            to="/setting"
            variant="contained"
            >
              SETTING
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
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
        <SideBarList
         
        />
        <Divider />

      </Drawer>

    </Box>
  );


}
export default SideBar