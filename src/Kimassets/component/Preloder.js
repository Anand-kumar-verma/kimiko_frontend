// Preloader.js
import React from 'react';
import { Box, CircularProgress, useTheme } from '@mui/material';
import loder from '../../Kimassets/images/loader.svg';

function Preloader() {
  const theme = useTheme(); // Access theme for custom colors if needed

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: '#89EA5F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 100,
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div id="loading-icon"><img src={loder} alt="" /></div>
        <Box
          id="loading-icon"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100px',
          }}
        >
        </Box>
      </Box>
    </Box>
  );
}

export default Preloader;




