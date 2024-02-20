import React from 'react'
import { TextField, Typography, Button, MenuItem, Select, FormControl, InputLabel, FormLabel, Radio, RadioGroup, AppBar, Toolbar, Menu, IconButton } from "@mui/material"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TranslateIcon from '@mui/icons-material/Translate';
import { ArrowRightAlt as ArrowRightAltIcon } from '@mui/icons-material';
import { Hidden } from '@mui/material';


const MySvgIcon = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 309 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      maxWidth: '150px',
      '@media (max-width: 600px)': {
        maxWidth: '100px',
      },
    }}
  >
    <path d="M238.626 75.3097C242.971 75.6476 247.3 76.0015 251.645 76.3877V0H238.626V75.3097ZM29.3052 46.962L12.3594 0H0V82.9839C4.32899 82.3726 8.65799 81.7773 13.0192 81.2142V36.0863L28.0821 79.364C32.8134 78.817 37.5769 78.2861 42.3244 77.8035V0H29.3052V46.962ZM54.8286 76.5968C66.8178 75.5028 78.8714 74.6019 90.9732 73.9101V61.0876C83.2486 61.5381 75.524 62.069 67.8477 62.6643V43.2778C72.8848 43.2295 79.5312 43.0686 85.4212 43.1491V30.3266C80.722 30.3105 73.1584 30.391 67.8477 30.4553V12.9351H90.9732V0H54.8286V76.5968ZM99.3254 12.9351H112.94V72.8804C117.269 72.7195 121.614 72.5747 125.959 72.4621V12.9351H139.574V0H99.3254V12.9351ZM147.91 72.1082H160.929V42.5216H178.567V29.6992H160.913V12.9351H184.232V0H147.91V72.1082ZM308.984 0H294.693L285.279 21.8319L276.798 0H262.717L277.844 39.0143L261.349 77.2886C265.919 77.7391 270.474 78.2057 275.028 78.7044L284.635 56.4542L294.146 80.9889C299.103 81.6325 304.043 82.2921 308.984 83L309 82.9839L292.054 39.2878L308.984 0ZM205.587 0H192.584V72.7517C204.412 73.1539 216.192 73.7492 227.908 74.5375V61.7151C220.489 61.2163 213.054 60.798 205.587 60.4602V0Z" fill="#E50914" />
  </svg>
);
const Main = () => {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    handleMenuClose();
  };

  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url('/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}>
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={1} />
            <Grid item xs={12} sm={10}>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <div style={{ width: '100%', maxWidth: '500px' }}>
                    <MySvgIcon />
                  </div>
                </Typography>
                <Button
                  variant='outlined'
                  color="inherit"
                  startIcon={<TranslateIcon sx={{ fontSize: { xs: 'small', sm: 'default' } }} />}
                  sx={{ margin: 2, fontSize: { xs: 'small', sm: 'default' } }}
                  onClick={handleMenuOpen}
                >
                  <Hidden smDown>
                    {selectedLanguage}
                  </Hidden>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handleLanguageSelect('English')}>English</MenuItem>
                  <MenuItem onClick={() => handleLanguageSelect('Hindi')}>Hindi</MenuItem>
                </Menu>
                <Button color="inherit" sx={{ bgcolor: 'red', fontSize: { xs: 'small', sm: 'default' } }}>Sign In</Button>
              </Toolbar>
            </Grid>
            <Grid item xs={12} sm={1} />
          </Grid>
        </AppBar>


        <Box p={{ xs: 2, md: 20 }}> {/* Adjust the padding value as needed */}
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
              <Typography variant="h3" align="center" sx={{ color: "#fff" }}>
                Unlimited movies, TV shows and more
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="center" color="white">
                Watch anywhere. Cancel anytime.
              </Typography>
              <Grid item>
                <Typography variant="h5" align="center" color="white">
                  Ready to watch? Enter your email to create or restart your membership.
                </Typography>
              </Grid>

            </Grid>
            <Grid item container justifyContent="center">
              <TextField
                label="Enter your email"
                variant="outlined"
                sx={{
                  width: { xs: 200, md: 500 },
                  marginRight: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'red',
                    },
                    '&:hover fieldset': {
                      borderColor: 'red',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'red',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                  },
                }}
              />
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  bgcolor: 'red',
                  color: "white",
                  mt: { xs: 2, sm: 0 },
                  '&:hover': {
                    backgroundColor: 'darkred', // Change this to any color you want on hover
                  },
                }}
                endIcon={<ArrowRightAltIcon />}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Box>

      </div></div>
  )
}

export default Main




