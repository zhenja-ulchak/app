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
import {GetLoginRefresh} from '../api/ApiProvaider'

const RotatableArrow = styled(HiArrowDown)(({ theme, rotate }) => ({
  transition: 'transform 0.3s ease',
  transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)',
}));

type Client =  {
  [key: string]: any;
}


const Debug = ({ open }: any) => {
  const { data }: any = useLoginStore();




  const dataOne =    {
    "id": "103",
    "bsl_type": "core",
    "display_name": "INDYN",
    "active": false,
    "lic_key": "NWE1ODZjNGI0ZDZjNzA1ODRlNTc3NDY5NGQzMDZjNzA1NDMyNmM0YjUzNmM1MjczNTQ2YjcwNTM1MjU2NWE0NjU2MzE1NTMxNTE2YzUyNTY2MjQ1NTI0YTYxNTg2NDcwNTc1NDRhMzQ2MzQ2NzA1ODRlNTQ0MjRhNjE2ZDM5NzA1NTU0NGEzNDYzNDY3MDU4NGU1NDQyNGE2MTU4NjQ3MDU5NmI2MzM1NjE2YzZjNTk1NTZlNDI2OTRkNmE1MjcwNTQzMjZjNGI1MzZjNTI3MjU1NmM3MDU1NjE1NTZjN2E1MzU3MzE1NzRlNDc0ZTQ4NjI0ODZjNjE1NjZhNmM3MjU3NTY2ODcyNjE1NTM5NzA1MzU4NmM0ZTUyNDU2YjdhNTQ0NjU2NjE2MjQ2NmM3MDRkNDg2YzUwNTEzMDZmMzU=",
    "name": "indyn",
    "asset_version": "5eb21e29e6b911ee8c8cb62304048e10",
    "country_iso": "en",
    "logo": "https://insidedynamic.de/assets/images/Logo/logo-inside-dynamic.svg",
    "page_refresh_time": 301,
    "login_timeout":200,
    "fa2_key_timeout": 600,
    "languages": "ru, de, en",
    "time_format": "YYYY-MMM-DD",
    "file_provider_id": null,
    "config_change": "2024-02-15 19:34:24",
    "lastchange": "2024-03-20 13:57:04",
    "lastchange_by": "tester",
    "created_by": "System",
    "created": "2024-04-24 21:53:42",
    "api_expires_in_hours": "24",
    "is_debug_on": true
  };

  const client = data 
 
    
    const [count, setCount] = useState<number>(client.login_timeout || 0);
  const [refresh, setRefresh] = useState<number>(client.page_refresh_time / 10 || 0);
  const navigate = useNavigate();

  // State for Popover
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);


  const openPopover = Boolean(anchorEl);
  const openPopover2 = Boolean(anchorEl2);

  
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);

    
  };

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
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
  }, [client.login_timeout]);

  useEffect(() => {
    if (refresh > 0) {
      const timerRefresh = setInterval(() => {
        setRefresh(refresh - 1);
      }, 1000);
      return () => clearInterval(timerRefresh);
    }
  }, [refresh]);


  useEffect(() => {
    if(count !== 0){
      if (refresh  <= (refresh*90)/100) {
        GetLoginRefresh('INDYN\\demo-testa', '1234');
  
        setRefresh(client.page_refresh_time || 0)
      }
    }
  }, [refresh, client.page_refresh_time,count ]);


  const handleMouseMove = useCallback(() => {
    setCount(client.login_timeout);
  }, [client.login_timeout]);
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  if (count === 1) {
    navigate('/');
  }
  const List = ({ client }: { client: Client }) => {
    const result: JSX.Element[] = [];
    if (client && typeof client === 'object') {
    Object.entries(client).forEach(([key, value]) => {
      if (key === 'gui_config' || key === 'footer') {
        try {
          const allValue: Record<string, any> = JSON.parse(String(value));
          
          Object.entries(allValue).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'object' && subValue !== null) {
              result.push(
                <Typography key={subKey}>
                  <strong>{subKey}:</strong> {JSON.stringify(subValue, null, 2)}
                </Typography>
              );
            } else {
              result.push(
                <Typography key={subKey}>
                  <strong>{subKey}:</strong> {subValue}
                </Typography>
              );
            }
          });
        } catch (error) {
          console.error(`Failed to parse JSON for key ${key}`, error);
        }
      } else if (key !== 'client_footer') {
        result.push(
          <Typography key={key}>
            <i>{`${key}: ${value}`}</i>
          </Typography>
        );
      }
   
    });
  }
    return result;
  };

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
                  <Grid item xs={2} sx={{ margin: '20px 20px',  color: '#fff'  }}>
                  time
                    <IconButton onClick={ handleClick}>
                    TIME <RotatableArrow rotate={String(anchorEl)} style={{ color: '#fff' }} />
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
                  <Grid item xs={2} sx={{ margin: '20px 20px',  color: '#fff' }}>
                  user
                    <IconButton onClick={ handleClick2}>
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
                        <Typography>Додатковий контент</Typography>
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
                  <IconButton onClick={ handleClick}>
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
                  <IconButton onClick={ handleClick2}>
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
                  <IconButton onClick={ handleClick2}>
            
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
               {List( client )}
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
