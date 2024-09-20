import React, { useEffect, useState } from 'react';
// @ts-ignore
import { getHealth } from '../api/ApiProvaider';
import { Container, CircularProgress, Typography } from '@mui/material';

type HealthData = {
  // Визначте структуру даних, які ви очікуєте від getHealth
}

const Tools = () => {
  const [resData, setResData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHealth();
        setResData(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography>Loading... <CircularProgress /></Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">Error: {error.message}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h6">Response Data:</Typography>
      <pre>{JSON.stringify(resData, null, 2)}</pre>
    </Container>
  );
};

export default Tools;
