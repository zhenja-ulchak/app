import React, { useState, useEffect } from 'react';
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
import {GetLoginRefresh} from '../api/ApiProvaider'
const RotatableArrow = styled(HiArrowDown)(({ theme, rotate }) => ({
  transition: 'transform 0.3s ease',
  transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const Debug = ({ open }) => {
  const { data } = useLoginStore();
  const client = data["data"]["user"][0];
  const [count, setCount] = useState(client.login_timeout || 0);
  const [refresh, setRefresh] = useState(client.page_refresh_time || 0);
  const navigate = useNavigate();

  // State for Popover
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const openPopover = Boolean(anchorEl);
  const openPopover2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
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
      setCount(prevCount => {
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
    if (refresh ===  (refresh*90)/100) {
      GetLoginRefresh('INDYN\\demo-testa', '1234');
    }
  }, [refresh]);
  const handleMouseMove = () => {
    setCount(client.login_timeout);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (count === 1) {
    navigate('/');
  }
  const list = () => {
    const result = [];
    Object.entries(client).forEach(([key, value]) => {
      if (key === 'gui_config' || key === 'footer') {
        const allValue = JSON.parse(value);
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
      } else if (key !== 'client_footer') {
        result.push(
          <in>{`{Key} : ${value}`}</in>
        );
      }
    });
    return result;
  };
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
                    <IconButton onClick={handleClick}>
                    TIME <RotatableArrow rotate={openPopover} style={{ color: '#fff' }} />
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
                    <IconButton onClick={handleClick2}>
                      <RotatableArrow rotate={openPopover2} style={{ color: '#fff' }} />
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
                  <IconButton onClick={handleClick}>
                   <RotatableArrow rotate={openPopover} style={{ color: '#fff' }} />
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
                    <RotatableArrow rotate={openPopover2} style={{ color: '#fff' }} />
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
                  <IconButton onClick={handleClick2}>
            
                   <RotatableArrow rotate={openPopover2} style={{ color: '#fff' }} />
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
                      {list()} {/* Виклик функції list */}
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
