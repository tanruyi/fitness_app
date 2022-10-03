// IMPORT FROM LIBRARIES
import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

// IMPORT CHILD COMPONENTS
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import { ClassNames } from '@emotion/react';

const SimilarExercises = (props) => {

  return (
    <Box 
      sx={{
        mt: {xs: "0", lg: "100px"},
      }}
    >
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>

      <Stack direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {props.targetMuscleExercises.length ? <HorizontalScrollbar data={props.targetMuscleExercises} /> : <Loader />}
      </Stack>

      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>

      <Stack direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {props.equipmentExercises.length ? <HorizontalScrollbar data={props.equipmentExercises} /> : <Loader />}
      </Stack>

    </Box>
  )
}

export default SimilarExercises