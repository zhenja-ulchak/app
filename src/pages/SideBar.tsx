import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

import SideBarList from '../components/SideBarList'


const SideBar = () => {
 
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean | ((prevState: boolean) => boolean)) => () => {
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
                       {t('sideBar.TASK')} 
            </Typography>

            <Button
              sx={{  padding: '5px 40px', background: '#ffffff', color: '#000000' }}
         
      
              variant="contained"
            >
              {t('sideBar.SETTING')} 
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

    </Box>
  );


}
export default SideBar