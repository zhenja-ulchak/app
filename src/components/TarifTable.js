import React, { useEffect, useState } from 'react';
import { GetTarif } from '../api/ApiProvaider';
import { Container, List, ListItem, ListItemText, CircularProgress, Typography } from '@mui/material';

export const TarifTable = () => {
    const [tarif, setTarif] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTarif = async () => {
            try {
                const GetTarifData = await GetTarif();
                const dataAll = GetTarifData.data['data']['tariff']
                const allTariff = dataAll.map((i) => i);
             
                
                setTarif(allTariff);
            } catch (error) {
                setError('Failed to fetch data');
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
        return <Typography color="error">{error}</Typography>;
    }
//    return(
//     {tarif}
//    )
}