// IMPORT FROM LIBRARIES
import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';

// IMPORT IMAGES
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box position="relative" p="20px" 
        sx={{
            mt: {xs: "70px", lg: "212px"},
            ml: {sm: "50px"}
        }}
    >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography fontWeight="700" mb="23px" mt="30px"
            sx={{
                fontSize: {xs: "40px", lg: "44px"}
            }}
        >
            Sweat, Smile <br /> and Repeat
        </Typography>
            
        <Typography fontWeight="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>

        <Button href="#exercises" variant="contained" color="error"
            sx={{
                backgroundColor: "#FF2625",
                padding: "10px"
            }}
        >
            Explore Exercises
        </Button>

        <Typography fontSize="200px" fontWeight="600" color="#FF2625" 
            sx={{
                opacity: 0.1,
                display: {xs: "none", lg: "block"}
            }}
        >
            Exercise
        </Typography>

        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner