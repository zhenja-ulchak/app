import React, { useEffect, useState } from 'react';
import { GetUsers } from '../api/ApiProvaider';
import { Container, List, ListItem, ListItemText, CircularProgress, Typography } from '@mui/material';

const UsersList = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await GetUsers("INDYN\\tester", "1234");

        
          const user = usersData.data['data']['user'];
    
          
          setUsers(user); // Assuming user is an array of objects
     
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return (
      <Container sx={{marginLeft:'30%', marginTop:'50px'}}>
        <Typography>Loading users... <CircularProgress /></Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{marginTop: '200px', marginLeft:'30%'}}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{marginLeft:'30%', marginTop:'50px'}}>
      <Typography variant="h4" gutterBottom>Users List</Typography>
      <List>
        {users && users.map((user, index) => (
          <ListItem key={index}>
            {/* Render specific properties of the user object */}
            <ListItemText
              primary={user.display_name || user.username}
              secondary={user.email}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UsersList;
