import React, { useEffect, useState } from 'react';
// @ts-ignore
import { GetTarif } from '../api/ApiProvaider';
import { Container, List, ListItem, ListItemText, CircularProgress, Typography } from '@mui/material';

type Tariff = {
    // Визначте структуру тарифів тут
}

type GetTarifDataResponse =  {
    data: {
        data: {
            tariff: Tariff[];
        };
    };
}

export const TarifTable = () => {
    const [tarif, setTarif] = useState<Tariff[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchTarif = async () => {
            try {
                const response = await GetTarif();
                const dataAll: GetTarifDataResponse[] = response.data['data']['tariff'];
                
                setTarif(dataAll);
            } catch (error) {
                setError(new Error('An unknown error occurred'));
            } finally {
                setLoading(false);
            }
        };
        fetchTarif();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error.message}</Typography>;
    }

    return (
        <Container>
            <List>
                {tarif && tarif.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={JSON.stringify(item)} /> {/* Відобразіть поля об'єкта тарифу за потреби */}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};
