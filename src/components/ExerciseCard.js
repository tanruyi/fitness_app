// IMPORT FROM LIBRARIES
import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, Typography, IconButton} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const ExerciseCard = (props) => {

    const theme = useTheme();
    const favouriteExercises = props.favouriteExercises;

    const favouritedButton = (
        <IconButton color="primary" size="large" sx={{position: "absolute", top: "10px", right: "10px"}}>
            <StarIcon fontSize="large" />
        </IconButton>
    )

    let favouritedButtonDisplay = "";

    if (favouriteExercises) {
        if (favouriteExercises.some((favouriteExercise) => favouriteExercise.id === props.exercise.id)) {
            favouritedButtonDisplay = true;
        }
    } else {
        favouritedButtonDisplay = false;
    }

    return (
        <Link className="exercise-card" to={`/exercise/${props.exercise.id}`}>
            <img src={props.exercise.gifUrl} alt={props.exercise.name} loading="lazy" />

            <Stack direction="row">
                <Button
                    sx={{
                        ml: "21px",
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.primary.light,
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
                        color: theme.palette.secondary.contrastText,
                        backgroundColor: theme.palette.secondary.light,
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                    }}
                >
                    {props.exercise.target}
                </Button>

                <Button
                    sx={{
                        ml: "21px",
                        color: theme.palette.info.contrastText,
                        backgroundColor: theme.palette.info.light,
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                    }}
                >
                    {props.exercise.equipment}
                </Button>
                    
                {favouritedButtonDisplay ? favouritedButton : ""}
            </Stack>

            <Typography ml="21px" color="#000" fontSize="22px" fontWeight="bold" mt="14px" pb="10px" textTransform="capitalize">
                {props.exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard