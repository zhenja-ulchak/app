
import React, { useEffect, useState } from 'react';
import { getHealth, GetLogin } from '../api/ApiProvaider';
import { Container, List, ListItem, ListItemText, CircularProgress, Typography } from '@mui/material';

const Tools = () => {
  const [resData, setResData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHealth();
        setResData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


if (loading) {
  return (
    <Container>
    
      <Typography>Loading...   <CircularProgress /></Typography>
    </Container>
  );
}
  return (
    <div >
      < p >{JSON.stringify(resData)}</p>
    </div>
  );
};



export default Tools;
