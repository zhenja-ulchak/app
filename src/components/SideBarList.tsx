
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';
import { useTranslation } from 'react-i18next';

const SideBarList = () => {
  const { t } = useTranslation();

  return (
    <List>
    <ListItem disablePadding>
      <ListItemButton>
        <Logout />
        <ListItemText />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component={Link} to="/dashboard">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={t('sideBar.dashboard')} />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component={Link} to="/todo">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={t('sideBar.todo')} />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component={Link} to="/users">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={t('sideBar.users')} />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component={Link} to="/todos">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={t('sideBar.todos')} />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component={Link} to="/account">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={'Account'} />
      </ListItemButton>
    </ListItem>
  </List>
  );
}
export default SideBarList