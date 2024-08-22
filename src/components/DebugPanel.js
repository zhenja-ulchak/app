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

const RotatableArrow = styled(HiArrowDown)(({ theme, rotate }) => ({
  transition: 'transform 0.3s ease',
  transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const Debug = ({ open }) => {
  const { data } = useLoginStore();


  const client = data["data"]["user"][0];


  const [count, setCount] = useState(client.login_timeout || 0);
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

  const handleMouseMove = () => {
    setCount(prevCount => client.login_timeout);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (count === 1) {
    navigate('/');
    // Визвати метод логаут, щоб повністю вийти
  }

  console.log(
    Object.entries(client).forEach(([Key, Value]) => {
      // if (Key === 'gui_config') {
      //   console.log(`${Key} : `);
      //   const allValue = JSON.parse(Value);
    
      //   Object.entries(allValue).forEach(([SubKey, SubValue]) => {
      //     console.log(`${SubKey} : `);
    
      //     if (typeof SubValue === 'object') {
      //       console.log(JSON.stringify(SubValue, null, 2)); // Pretty print the object
      //     } else {
      //       console.log(`${SubKey} : ${SubValue}`);
      //     }
      //   });
      // }
    
      if (Key === 'footer') {
        console.log(`${Key} : `);
        const allValue = JSON.parse(Value);
    
        Object.entries(allValue).forEach(([SubKey, SubValue]) => {
          console.log(`${SubKey} : `);
    
          if (typeof SubValue === 'object') {
            console.log(JSON.stringify(SubValue, null, 2)); // Pretty print the object
          } else {
            console.log(`${SubKey} : ${SubValue}`);
          }
        });
      }

      if (Key !== 'footer' && Key !== 'client_footer' && Key !== 'gui_config') {
        console.log(`${Key} : ${Value}`);
      }
    })
  );

  return (
    <>
      {
        count <= 50
          ? (
            <>
              <Alert severity="warning" sx={{ width: '86%', marginLeft: '256px', position: "fixed", top: '80px' }}>
                Ваш час сесіїї закінчується !!!!!!!!!!!!!!!!!!!!!!!!!!!!
              </Alert>
              <Box sx={{ ...styleButton }}>
                <Grid container spacing={2} sx={{ color: '#ffffff', marginLeft: "259px" }}>
                  <Grid item xs={2} sx={{ margin: '20px 20px' }}>
                    <IconButton onClick={handleClick}>
                      <RotatableArrow rotate={openPopover} style={{ color: '#fff' }} />
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
                        <Typography>timeout : {count} </Typography>
                        <Typography>refresh time: {client["page_refresh_time"]}</Typography>
                        <Typography>display name : {client["display_name"]}</Typography>
                      </Box>
                    </Popover>
                  </Grid>
                  <Grid item xs={2} sx={{ margin: '20px 20px' }}>
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
                <Grid item xs={2} sx={{ margin: '20px 20px' }}>
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
                      <Typography>timeout : {count} </Typography>
                      <Typography>refresh time: {client["page_refresh_time"]}</Typography>

                    </Box>
                  </Popover>
                </Grid>
                <Grid item xs={2} sx={{ margin: '20px 20px' }}>
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
                <Grid item xs={2} sx={{ margin: '20px 20px' }}>
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
