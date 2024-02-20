import React from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

const MyGrid = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: '#000000',
          minHeight: '70vh',
          width: '100%',
          padding: '0 5%',
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant={isSmallScreen ? "h4" : "h2"} align="center" color="white">
            Enjoy on your TV
          </Typography>
          <Typography variant={isSmallScreen ? "subtitle1" : "h6"} align="center" color="white">
            Watch on smart TVs, PlayStation, Xbox,
          </Typography>
          <Typography variant={isSmallScreen ? "subtitle1" : "h6"} align="center" color="white">
            Chromecast, Apple TV, Blu-ray players and more.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ position: 'relative', maxWidth: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ position: 'relative' }}>
              <video
                src="./video-tv-in-0819.m4v"
                style={{ position: 'absolute', top: 0, left: 40, width: '80%', height: '80%', objectFit: 'cover', zIndex: 0 }}
                loop
                autoPlay
                muted
              />
              <img
                src="./tv.png"
                alt="TV"
                style={{ position: 'relative', zIndex: 1, maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyGrid;
