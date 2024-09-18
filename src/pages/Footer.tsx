import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#1976d2',
                color: '#fff',
                paddingTop: '20px' ,
                position: 'absolute',
                bottom: '0',
                width: '100%',
         
                height: '80px'
            }}
        >
            <Container maxWidth="lg" >
                <Link href="https://facebook.com" color="inherit" target="_blank" sx={{ display: 'inline-block', mb: 1, marginRight: '2%' }}>Facebook</Link>
                <Link href="https://twitter.com" color="inherit" target="_blank" sx={{ display: 'inline-block', mb: 1, marginRight: '2%' }}>Twitter</Link>
                <Link href="https://linkedin.com" color="inherit" target="_blank" sx={{ display: 'inline-block', mb: 1 }}>LinkedIn</Link>

                <Box textAlign="center" >
                    <Typography variant="body2" sx={{ color: '#fff' }}>
                        &copy; {new Date().getFullYear()} Назва компанії. Всі права захищені.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};


