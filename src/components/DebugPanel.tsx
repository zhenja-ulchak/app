import React, { useState, useEffect, useCallback } from 'react';
import useLoginStore from '../store/UserStor';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import { HiArrowDown } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// @ts-ignore
import { GetLoginRefresh } from '../api/ApiProvaider'
import {ClientSchemaType} from '../types/ClientType'


const RotatableArrow = styled(HiArrowDown)(({ rotate }) => ({
  transition: 'transform 0.3s ease',
  transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)',
}));




const Debug = ({ open }: any) => {
  const { data }: any = useLoginStore();

  const client : ClientSchemaType = data

  const login_timeout = !data ? '200' : client.login_timeout
  const page_refresh_time = !data ? '300' : client.page_refresh_time

  const [count, setCount] = useState<number>(Number(login_timeout) );
  const [refresh, setRefresh] = useState<number>(Number(page_refresh_time) );
  const navigate = useNavigate();

  // State for Popover
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);
  const [anchorEl3, setAnchorEl3] = useState<HTMLElement | null>(null);

  const openPopover = Boolean(anchorEl);
  const openPopover2 = Boolean(anchorEl2);
  const openPopover3 = Boolean(anchorEl3);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);


  };

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick3 = (event: any) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const styleButton = {
    background: '#1976d2',
    position: 'fixed',
    width: '100%',
    height: '70px',
    bottom: '0px',
    display: open ? 'block' : 'none'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount: number) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [login_timeout]);

  useEffect(() => {
    if (refresh > 0) {
      const timerRefresh = setInterval(() => {
        setRefresh(refresh - 1);
      }, 1000);
      return () => clearInterval(timerRefresh);
    }
  }, [refresh]);


  useEffect(() => {
    if (count !== 0) {
      if (refresh <= (refresh * 90) / 100) {
        GetLoginRefresh('INDYN\\demo-testa', '1234');

        setRefresh(Number(page_refresh_time) )
      }
    }
  }, [refresh, page_refresh_time, count]);


  const handleMouseMove = useCallback(() => {
    setCount(Number(login_timeout));
  }, [login_timeout]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  if (count === 1) {
    navigate('/');
  }


  if (!client) {
    return <div>Loading...</div>; // Показуємо повідомлення, поки дані не будуть доступні
  }

  return (
    <>
      {
        count <= 50
          ? (
            <>
              <Alert severity="warning" sx={{ width: '86%', marginLeft: '256px', position: "fixed", top: '80px' }}>
                Ваш час сесії закінчується!
              </Alert>
              <Box sx={{ ...styleButton }}>
                <Grid container spacing={2} sx={{ color: '#ffffff', marginLeft: "259px" }}>
                  <Grid item xs={2} sx={{ margin: '20px 20px', color: '#fff' }}>
                    time
                    <IconButton onClick={handleClick}>
                      <RotatableArrow rotate={String(anchorEl)} style={{ color: '#fff' }} />
                    </IconButton>
                    <Popover
                      open={openPopover}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      anchorPosition={{ top: 790, left: 330 }}
                      anchorReference="anchorPosition"
                    >
                      <Box sx={{ p: 2, marginBottom: '50px' }}>
                        <Typography>timeout : {count}</Typography>
                        <Typography>refresh time: {refresh}</Typography>
                        <Typography>display name : {client["display_name"]}</Typography>
                      </Box>
                    </Popover>
                  </Grid>
                  <Grid item xs={2} sx={{ margin: '20px 20px', color: '#fff' }}>
                    user
                    <IconButton onClick={handleClick2}>
                      <RotatableArrow rotate={String(anchorEl2)} style={{ color: '#fff' }} />
                    </IconButton>
                    <Popover
                      open={openPopover2}
                      anchorEl={anchorEl2}
                      onClose={handleClose2}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      anchorPosition={{ top: 790, left: 590 }}
                      anchorReference="anchorPosition"
                    >
                      <Box sx={{ p: 2 }}>
                        <Typography>display name : {client["display_name"]}</Typography>
                        <Typography>id : {client["id"]}</Typography>
                      </Box>
                    </Popover>
                  </Grid>
                  <Grid item xs={2} sx={{ margin: '20px 20px', color: '#fff' }}>
                    list
                    <IconButton onClick={handleClick3}>

                      <RotatableArrow rotate={String(anchorEl3)} style={{ color: '#fff' }} />
                    </IconButton>
                    <Popover
                      open={openPopover3}
                      anchorEl={anchorEl3}
                      onClose={handleClose3}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      anchorPosition={{ top: 790, left: 590 }}
                      anchorReference="anchorPosition"
                    >
                      <Box sx={{ p: 2 }}>
                        {Object.entries(client).map(([key, value], index: number) => (
                         <>
                          <Typography key={index}>
                            <b>{key}</b>: {value}
                          </Typography>
                         </>
                        ))}
                      </Box>
                    </Popover>
                  </Grid>
                </Grid>
              </Box>
            </>
          )
          : (
            <Box sx={{ ...styleButton }}>
              <Grid container spacing={2} sx={{ color: '#ffffff', marginLeft: "259px" }}>
                <Grid item xs={2} sx={{ margin: '20px 20px', color: '#fff' }}>
                  time
                  <IconButton onClick={handleClick}>
                    <RotatableArrow rotate={String(anchorEl)} style={{ color: '#fff' }} />
                  </IconButton>
                  <Popover
                    open={openPopover}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    anchorPosition={{ top: 790, left: 330 }}
                    anchorReference="anchorPosition"
                  >
                    <Box sx={{ p: 2 }}>
                      <Typography>timeout : {count}</Typography>
                      <Typography>refresh time: {refresh}</Typography>
                      <Typography>display name : {client["display_name"]}</Typography>
                    </Box>
                  </Popover>
                </Grid>
                <Grid item xs={2} sx={{ margin: '20px 20px', color: '#fff' }}>
                  user
                  <IconButton onClick={handleClick2}>
                    <RotatableArrow rotate={String(setAnchorEl2)} style={{ color: '#fff' }} />
                  </IconButton>
                  <Popover
                    open={openPopover2}
                    anchorEl={anchorEl2}
                    onClose={handleClose2}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    anchorPosition={{ top: 790, left: 590 }}
                    anchorReference="anchorPosition"
                  >
                    <Box sx={{ p: 2 }}>
                      <Typography>display name : {client["display_name"]}</Typography>
                      <Typography>id : {client["id"]}</Typography>
                    </Box>
                  </Popover>
                </Grid>
                <Grid item xs={2} sx={{ margin: '20px 20px', color: '#fff' }}>
                  list
                  <IconButton onClick={handleClick3}>

                    <RotatableArrow rotate={String(setAnchorEl3)} style={{ color: '#fff' }} />
                  </IconButton>
                  <Popover
                    open={openPopover3}
                    anchorEl={anchorEl3}
                    onClose={handleClose3}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    anchorPosition={{ top: 790, left: 590 }}
                    anchorReference="anchorPosition"
                  >
                    <Box sx={{ p: 2 }}>
                    {Object.entries(client).map(([key, value], index: number) => (
                         <>
                          <Typography key={index}>
                          <b>{key}</b>: {value}
                          </Typography>
                         </>
                        ))}
                    </Box>
                  </Popover>
                </Grid>
              </Grid>
            </Box>
          )
      }
    </>
  );
};

export default Debug;
