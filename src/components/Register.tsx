import React, { useState } from 'react';
import {Container, TextField, Button, Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Імітація відповіді, замість реального API запиту
      const response = 'success'; // Тестова відповідь
      if (response) {
        navigate('/home');
        alert('Registration successful!');
      }
    } catch (error) {
      alert('Registration problem');
    }
  };

  return (
    <Container maxWidth="sm">
    <Box display="flex" flexDirection="column" alignItems="center"    minHeight="100vh" mt={5}>
      <Typography variant="h4" component="h2" gutterBottom>
        Register
      </Typography>
      <Box component="form" onSubmit={handleRegister} display="flex" flexDirection="column" gap={2} width="600px">
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <Button variant="contained" type="submit" fullWidth>
          Register
        </Button>
      </Box>
    </Box>
    </Container>
  );
};

export default Register;
