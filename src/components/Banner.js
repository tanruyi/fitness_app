// IMPORT FROM LIBRARIES
import React from 'react'
import {Box, Typography, Button} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// IMPORT IMAGES
import QubyExerciseImage from '../assets/images/quby-exercising.gif';

const Banner = () => {

    const theme = useTheme();

    return (
    <Box position="relative" p="20px" 
        sx={{
            mt: {xs: "70px", lg: "212px"},
            ml: {sm: "50px"}
        }}
    >
        {/* Title of website */}
        <Typography color={theme.palette.primary.main} variant="h1" fontWeight="bold">
            Fitness App
        </Typography>

        {/* Inspirational quote */}
        <Typography fontWeight="700" mb="23px" mt="30px"
            sx={{
                fontSize: {xs: "14px", lg: "30px"}
            }}
        >
            <span style={{fontStyle: "italic"}}>I'm</span> WORKING 
            <br /> 
            <span style={{fontStyle: "italic"}}>on</span> MYSELF
            <br /> 
            <span style={{fontStyle: "italic"}}>for</span> MYSELF
            <br /> 
            <span style={{fontStyle: "italic"}}>by</span> MYSELF
        </Typography>
            
        {/* Click on this button to scroll to the list of search results */}
        <Button href="#exercises" variant="contained" color="error"
            sx={{
                backgroundColor: "#FF2625",
                padding: "10px"
            }}
        >
            Explore Exercises
        </Button>

        <img src={QubyExerciseImage} alt="exercisegif" className="banner-img" />
    </Box>
    )
}

export default Banner