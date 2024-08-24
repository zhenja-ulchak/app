import React, { useState } from "react";
import { TextField, Button, Typography, Box } from '@mui/material';
const SendCode = () => {
    const [chatId, setChatId] = useState('');
    const [username, setUsername] = useState('');

    const handleSendCode = async () => {
        const botToken = ''
        const code = Math.floor(100000 + Math.random() * 900000)
        const message = ` Your 2fa code ${code}`

        localStorage.getItem('2faCode', code)

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;


        // тут запрос на апі

        try {
            const response = await fetch(url)

            if (response.ok) {
                console.log('Код відправлено в Telegram!');

            }
        } catch (error) {
            console.log(error);

        }
    }

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
            Відправити 2FA код
        </Typography>
        <TextField
            fullWidth
            variant="outlined"
            label="Ім'я користувача"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Telegram Chat ID"
            value={chatId}
            onChange={(e) => setChatId(e.target.value)}
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
    )

}

export default SendCode;