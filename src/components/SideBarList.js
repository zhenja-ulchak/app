
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';

const SideBarList = () => {
 

  return (
    <List>
            <ListItem disablePadding>
        <ListItemButton >
        <Logout />
          <ListItemText  />
        </ListItemButton>
      </ListItem> 
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="TodoDashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/todo">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="TodoApp" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/users">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/todos">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="ToDoTable" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
export default SideBarList