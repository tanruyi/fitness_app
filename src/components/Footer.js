// IMPORT FROM LIBRARIES
import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

// IMPORT IMAGES
import QubyHeart from "../assets/quby/sticker_26.gif";
import GitHubLogo from "../assets/icons/GitHub_Logo.png";

const Footer = () => {
    return (
        <Box mt="80px" backgroundColor="#FFF3F4">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px" direction="row">
                <img src={QubyHeart} alt="quby-heart" style={{width: "150px", margin: "0 20px", borderRadius: "10px"}} />

                <Stack>
                    <Typography variant='h5' mb="20px" mt="20px">
                        Made by Ru Yi
                    </Typography>
                    <a href="https://github.com/tanruyi/fitness_app" target="_blank">
                        <img src={GitHubLogo} alt="GitHub" width="100px" />
                    </a>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer