import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useRouter } from 'next/router'; // Залиште useRouter
import Logout from '../components/Logout';
import { useTranslation } from 'react-i18next';
import { Url } from 'next/dist/shared/lib/router/router';

const SideBarList = () => {
  const { t } = useTranslation();
  const router = useRouter(); // Ініціалізуйте useRouter

  const handleNavigation = (path: Url) => {
    router.push(path); // Використовуйте router.push для навігації
  };

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <Logout />
          <ListItemText />
        </ListItemButton>
      </ListItem>
      {['/dashboard', '/todo', '/users', '/todos', '/account'].map((path, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton onClick={() => handleNavigation(path)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={t(`sideBar${path}`)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarList;
