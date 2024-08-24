import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const VerifyCode = () => {
  const [inputCode, setInputCode] = useState('');

  const handleVerifyCode = () => {
    const storedCode = localStorage.getItem('2faCode');

    if (inputCode === storedCode) {
      alert('Код верифіковано!');
      // Виконання наступного кроку (наприклад, вхід у систему)
    } else {
      alert('Невірний код!');
    }
  };

  return (
    <Box 
    sx={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 2, // Відстань між елементами
        maxWidth: '400px', 
        margin: 'auto',
        mt: 4 // Відступ зверху
    }}
>
    <Typography variant="h4" gutterBottom>
        Перевірити 2FA код
    </Typography>
    <TextField
        fullWidth
        variant="outlined"
        label="Введіть 2FA код"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
    />
    <Button 
        variant="contained" 
        color="primary" 
        onClick={handleVerifyCode}
        sx={{ mt: 2 }} // Відступ зверху для кнопки
    >
        Перевірити код
    </Button>
</Box>
  );
};

export default VerifyCode;

