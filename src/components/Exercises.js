// IMPORT FROM LIBRARIES
import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';

// IMPORT CUSTOM HOOKS 
import { exerciseOptions, fetchData } from '../utilities/fetchData';

// IMPORT CHILD COMPONENTS
import ExerciseCard from './ExerciseCard';

// IMPORT DATA
import { exercisesDataFromAPI } from '../data/exercisesDataFromAPI';

const Exercises = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = props.exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({top: 1800, behavior: "smooth"});
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (props.bodyPart === "all") {
                // TODO: uncomment below section when development is complete, and ensure that everything is running
                // exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

                exercisesData = exercisesDataFromAPI;

            } else {
                // TODO: uncomment below section when development is complete, and ensure that everything is running
                // exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${props.bodyPart}`, exerciseOptions);

                exercisesData = exercisesDataFromAPI.filter((exercise) => exercise.bodyPart.includes(props.bodyPart));
            }

            props.setExercises(exercisesData);
        }

        fetchExercisesData();
        
    }, [props.bodyPart])

  return (
    <Box id="exercises" mt="50px" p="20px"
        sx={{mt: {lg: "110px"}}}
    >
        <Typography variant="h3" mb="46px">
            Showing Results
        </Typography>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{gap: {xs: "50px", lg: "110px"}}}>
            {currentExercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
            ))}
        </Stack>

        <Stack mt="100px" alignItems="center">
            {props.exercises.length > exercisesPerPage && (
                <Pagination shape="rounded" size="large" count={Math.ceil(props.exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} />
            )}
        </Stack>
    </Box>
  )
}

export default Exercises