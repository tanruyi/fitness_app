// IMPORT FROM LIBRARIES
import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';

// IMPORT CUSTOM HOOKS 
import { exerciseOptions, fetchData } from '../utilities/fetchData';

// IMPORT CHILD COMPONENTS
import ExerciseCard from './ExerciseCard';

const Exercises = (props) => {
    console.log(props.exercises);

  return (
    <Box id="exercises" mt="50px" p="20px"
        sx={{mt: {lg: "110px"}}}
    >
        <Typography variant="h3" mb="46px">
            Showing Results
        </Typography>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{gap: {xs: "50px", lg: "110px"}}}>
            {props.exercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
            ))}
        </Stack>
    </Box>
  )
}

export default Exercises