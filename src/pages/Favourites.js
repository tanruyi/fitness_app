// IMPORT FROM LIBRARIES
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// IMPORT CHILD COMPONENTS
import ExerciseCard from '../components/ExerciseCard';

const Favourites = (props) => {

    const theme = useTheme();

    const favouriteExercises = props.favouriteExercises;

    return (
        <Box marginTop="40px">
            <Typography variant="h3" fontWeight="bold" marginLeft="30px" marginBottom="40px" color={theme.palette.primary.main} >
                Favourite Exercises
            </Typography>

            <Stack direction="row" flexWrap="wrap" justifyContent="center" margin="15px" sx={{gap: {xs: "50px", lg: "110px"}}}>
                {favouriteExercises?.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>

        </Box>
    )
}

export default Favourites