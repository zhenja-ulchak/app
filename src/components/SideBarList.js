
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';


const SideBarList = ({ setActiveTodoDashboard, setActiveTodoApp, setUsers, setActiveToDoTable}) => {
  const clickTodoDashboard = () => {
    setActiveTodoDashboard(true)
    setActiveToDoTable(false)
    setUsers(false)
    setActiveTodoApp(false)


  }
  const clickActiveTodoApp = () => {
    setActiveTodoApp(true)
    setActiveTodoDashboard(false)
    setUsers(false)
    setActiveToDoTable(false)
    

  }
  const clickUsers = () => {
    setUsers(true)
    setActiveTodoApp(false)
    setActiveTodoDashboard(false)
    setActiveToDoTable(false)

 
  }
  const clickToDoTable = ()=>{
    setActiveToDoTable(true)
    setActiveTodoDashboard(false)
    setUsers(false)
    setActiveTodoApp(false)
  }

  return (

    <List>

      <ListItem sx={{ display: 'block' }} >
        <ListItemButton
          onClick={clickTodoDashboard}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="TodoDashboard" />
        </ListItemButton>
        <ListItemButton
          onClick={clickActiveTodoApp}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="TodoApp" />
        </ListItemButton>
        <ListItemButton
          onClick={clickUsers}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton
          onClick={clickToDoTable}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="ToDoTable" />
        </ListItemButton>
      </ListItem>
   
    </List>
  )
}
export default SideBarList