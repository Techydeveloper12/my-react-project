import React from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

const Third = () => {
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
          <img
            src="./mobile-0819.jpg"
            alt="TV"
            style={{ maxWidth: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant={isSmallScreen ? "h4" : "h2"} align="left" color="white">
            Download your shows 
          </Typography>
          <Typography variant={isSmallScreen ? "h4" : "h2"} align="left" color="white">
            to watch offline
          </Typography>
          <Typography variant={isSmallScreen ? "subtitle1" : "h6"} align="left" color="white">
            Save your favourites easily and always have something to watch.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Third;