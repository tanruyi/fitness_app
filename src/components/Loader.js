// IMPORT FROM LIBRARIES
import React from 'react';
import {Stack} from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';
import { useTheme } from '@mui/material/styles';

const Loader = () => {

    const theme = useTheme();

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%" >
            <ThreeDots color={theme.palette.primary.dark} />
        </Stack>
    )
}

export default Loader