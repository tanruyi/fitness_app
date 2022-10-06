// IMPORT FROM LIBRARIES
import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

// IMPORT IMAGES
import Logo2 from '../assets/images/Logo2.png';

const Footer = () => {
  return (
    <Box mt="80px" backgroundColor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo2} alt="logo" style={{width: "150px", margin: "0 20px", borderRadius: "10px"}} />

        <Typography variant='h5' pb="40px" mt="20px">
          Made with 💖 by Ru Yi
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer