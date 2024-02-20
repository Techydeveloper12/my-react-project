import React from 'react';
import { Link } from '@mui/material';
import { TextField, Typography, Button, MenuItem, Select, FormControl, InputLabel, FormLabel, Radio, RadioGroup, AppBar, Toolbar, Menu, IconButton } from "@mui/material"

import Grid from '@mui/material/Grid';
import TranslateIcon from '@mui/icons-material/Translate';
import { ArrowRightAlt as ArrowRightAltIcon } from '@mui/icons-material';
import { Hidden } from '@mui/material';


function Footer() {

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
        <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
            <Grid container spacing={2} justifyContent="center" style={{marginLeft:"25px"}}>
                <Grid item xs={3} style={{ textAlign: 'left' }}>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>FAQ</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>Investor Relations</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>Speed Test</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>Link 4</Link>
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
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'left' }}>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>
                        Help Centre</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>Jobs</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>Cookie Preferences</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>
                        Legal Notices</Link>
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'left' }}>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>
                        Account</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>
                        Ways to Watch</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>
                        Corporate Information</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>Only on Netflix</Link>
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'left' }}>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>
                        Media Centre</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>
                        Terms of Use</Link>
                    <Link href="#" color="inherit" sx={{ margin: '10px 0', display: 'block' }}>
                        Contact Us</Link>

                </Grid>
            </Grid>

        </footer>
    );
}

export default Footer;
