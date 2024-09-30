import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GetStaticProps } from 'next';
import { messages } from '../../locales/messages'; // Ваш файл з повідомленнями
import { useTranslations } from 'next-intl';
import SideBarList from '../components/SideBarList';
import { useRouter } from 'next/router';

const SideBar = () => {
  const router = useRouter();
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <SideBarList />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: '#fff' }} />
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t('TASK')}
            </Typography>
            <Button
              sx={{ padding: '5px 40px', background: '#ffffff', color: '#000000' }}
              onClick={() => router.push('/settings')}
              variant="contained"
            >
              {t('SETTING')}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      messages: messages[locale as keyof typeof messages], // Повертаємо повідомлення для обраної мови
    },
  };
};

export default SideBar;
