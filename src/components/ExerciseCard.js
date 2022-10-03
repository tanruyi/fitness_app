// IMPORT FROM LIBRARIES
import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const ExerciseCard = (props) => {
  return (
    <Link className="exercise-card" to={`/exercise/${props.exercise.id}`}>
        <img src={props.exercise.gifUrl} alt={props.exercise.name} loading="lazy" />

        <Stack direction="row">
            <Button
                sx={{
                    ml: "21px",
                    color: "#FFF",
                    backgroundColor: "#FFA9A9",
                    fontSize: "14px",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                }}
            >
                {props.exercise.bodyPart}
            </Button>

            <Button
                sx={{
                    ml: "21px",
                    color: "#FFF",
                    backgroundColor: "#FCC757",
                    fontSize: "14px",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                }}
            >
                {props.exercise.target}
            </Button>
        </Stack>

        <Typography ml="21px" color="#000" fontSize="22px" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize">
            {props.exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard