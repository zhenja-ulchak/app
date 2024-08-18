import { useState, useEffect } from 'react';
import useLoginStore from '../store/UserStor'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Debug = ({ open }) => {
  const { data } = useLoginStore()
  const client = data["data"]["client"]
  const [count, setCount] = useState(client.fa2_key_timeout || 0);
  const navigate = useNavigate();

  const styleButton = {
    // marginLeft: '238px' ,
    background: '#1976d2',
    position: 'fixed',
    width: '100%',
    height: '70px',
    bottom: '0px',
    display: open ? 'block' : 'none'
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);


    return () => clearInterval(timer);
  }, [client.fa2_key_timeout]);

  const handleMouseMove = () => {
    setCount(prevCount => client.fa2_key_timeout);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

    };
  }, []);

  if (count === 1) {
    navigate('/');
    // визвати метод логаут шоб повністю вийти
  }

  return (
    <>
      {
        count <= 150
          ?
          (
            <>
              <Alert severity="warning" sx={{ width: '86%', marginLeft: '256px', position: "fixed", top: '80px' }}>
                Ваш час сесіїї закінчується !!!!!!!!!!!!!!!!!!!!!!!!!!!!
              </Alert>
              <Box sx={{ ...styleButton }}>
                <Grid container spacing={2} sx={{ color: '#ffffff', marginLeft: "259px" }}>
                  <Grid item xs={2} sx={{ margin: '20px 20px' }}>
                    <Typography>timeout : {client["login_timeout"]}</Typography>

                  </Grid>
                  <Grid item xs={2} sx={{ margin: '20px 20px' }}>
                    <Typography>refresh time: {count}</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ margin: '20px 20px' }}>
                    <Typography>display name : {client["display_name"]}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </>

          )
          :
          (<Box sx={{ ...styleButton }}>
            <Grid container spacing={2} sx={{ color: '#ffffff', marginLeft: "259px" }}>
              <Grid item xs={2} sx={{ margin: '20px 20px' }}>
                <Typography>timeout : {client["login_timeout"]}</Typography>

              </Grid>
              <Grid item xs={2} sx={{ margin: '20px 20px' }}>
                <Typography>refresh time: {count}</Typography>
              </Grid>
              <Grid item xs={2} sx={{ margin: '20px 20px' }}>
                <Typography>display name : {client["display_name"]}</Typography>
              </Grid>
            </Grid>
          </Box>)
      }

    </>
  )
}
export default Debug