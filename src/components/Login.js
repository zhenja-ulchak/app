import React, { useState } from 'react';

import Auth2FAPage from './2fAuth/TwoFAuth'
import { useAuth } from '../AuthProvaider';
import { TextField, Button, Container, Typography, Box } from '@mui/material';


const Login = () => {
  const [open, setOpen] = useState(false)
  const { login } = useAuth();
  const [email, setEmail] = useState('INDYN\\demo-testa');
  const [password, setPassword] = useState('1234');
  const [error, setError] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };


  return (
    <Container maxWidth="sm">
     {  open && 
      ( <Auth2FAPage />)
     }
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h2" component="h2" gutterBottom>
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="text"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
          <Button
          onClick={()=> setOpen(true)}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
          >
            2FA
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
