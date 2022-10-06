// IMPORT FROM LIBRARIES
import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// IMPORT IMAGES
import Logo from '../assets/images/Logo.png';

const Navbar = () => {

    const theme = useTheme();

    return (
    <Stack direction="row" justifyContent="space-around" px="20px" sx={
        {
            gap: {xs: "40px", sm: "122px"}, 
            mt: {xs: "20px", sm: "32px"},
            justifyContent: "none"
        }
    }>
        <Link to="/">
            <img src={Logo} alt="logo" style={{width: "150px", margin: "0 20px", borderRadius: "10px"}} />
        </Link>

        <Stack direction="row" gap="40px" fontSize="24px" alignItems="center" justifyContent="flex-end" bgcolor={theme.palette.primary.light} borderRadius="5px" width="80%">
            <Link to="/" className="navbar-button" style={{textDecoration: "none", color: theme.palette.primary.contrastText, fontWeight: "bold"}}>
                Home
            </Link>

            <a href="#exercises" className="navbar-button" style={{textDecoration: "none", color: theme.palette.primary.contrastText}}>
                Exercises
            </a>

            <Link to="/favourites" className="navbar-button" style={{textDecoration: "none", color: theme.palette.primary.contrastText, marginRight: "20px"}}>
                Favourites
            </Link>
        </Stack>
    </Stack>
    )
}

export default Navbar