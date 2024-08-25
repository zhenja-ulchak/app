import React, { useState } from "react";
import { TextField, Button, Typography, Box } from '@mui/material';

const SendCode = () => {
    const [username, setUsername] = useState('');

    const handleSendCode = async () => {
        const botToken = '1869176533:AAExk2FXz8yC9v15AvYGPL16O8_LRiDOQ_o';
        const code = Math.floor(100000 + Math.random() * 900000);
        const message = `Your 2FA code is ${code}`;

        // Збереження коду в localStorage
        localStorage.setItem('2faCode', code);

        // Вставте реальний chat_id (id чату або користувача)
        const chatId = 'YOUR_CHAT_ID_HERE';

        // Формуємо URL для відправки повідомлення
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${-2114258881}&text=${encodeURIComponent(message)}`;

        try {
            const response = await fetch(url);

            if (response.ok) {
                console.log('Код відправлено в Telegram!');
            } else {
                console.error('Не вдалося відправити код:', response.statusText);
            }
        } catch (error) {
            console.error('Помилка під час відправки повідомлення:', error);
        }
    };

    return (
        <Box 
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 2, 
                maxWidth: '400px', 
                margin: 'auto',
                mt: 4
            }}
        >
            <Typography variant="h4" gutterBottom>
                Відправити 2FA код
            </Typography>
            <TextField
                fullWidth
                variant="outlined"
                label="Ім'я користувача"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSendCode}
                sx={{ mt: 2 }} 
            >
                Відправити код
            </Button>
        </Box>
    );
};

export default SendCode;
