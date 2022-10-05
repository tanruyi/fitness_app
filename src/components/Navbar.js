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
            <img src={Logo} alt="logo" style={{width: "48px", height: "48px", margin: "0 20px"}} />
        </Link>

        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
            <Link to="/" style={{textDecoration: "none", color: theme.palette.primary.contrastText, borderBottom: "3px solid", borderBottomColor: theme.palette.primary.main}}>
                Home
            </Link>

            <a href="#exercises" style={{textDecoration: "none", color: theme.palette.primary.contrastText}}>
                Exercises
            </a>

            <Link to="/favourites" style={{textDecoration: "none", color: theme.palette.primary.contrastText}}>
                Favourites
            </Link>
        </Stack>
    </Stack>
    )
}

export default Navbar