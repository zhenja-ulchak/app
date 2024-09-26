import { useState } from 'react';


import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { GetLogin } from 'src/api/ApiProvaider';

const Login: React.FC = () => {
  const router = useRouter(); // Використання useRouter для маршрутизації
  
  const [username, setUsername] = useState('INDYN\\demo-testa');
  const [password, setPassword] = useState('1234');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Перешкоджаємо перезавантаженню сторінки
   
      try {
       
        await GetLogin(username, password)
         // Виклик функції логіну
        router.push("/home"); // Перенаправлення на домашню сторінку після успішного логіну
      } catch (error) {
        console.error('Login failed:', error); // Обробка помилок
      }
   
  };

  return (
    <Container maxWidth="sm">
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

        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        </form>
      </Box>
    </Container>
  );
};

export default Login;
