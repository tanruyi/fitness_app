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

// IMPORT IMAGES
import quby1 from '../assets/quby/sticker_1.gif';
import quby2 from '../assets/quby/sticker_4.gif';
import quby3 from '../assets/quby/sticker_6.gif';
import quby4 from '../assets/quby/sticker_7.gif';
import quby5 from '../assets/quby/sticker_9.gif';

const Exercises = (props) => {

    // this state refers to the current page of the search results section
    const [currentPage, setCurrentPage] = useState(1);

    // to hard code the number of exercise cards displayed per page
    const exercisesPerPage = 9;

    // this is the set of exercises that will be displayed on each page
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = props.exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    // callback function for Pagination component
    const paginate = (event, page) => {
        setCurrentPage(page);

        window.scrollTo({top: 1800, behavior: "smooth"});
    }

    // this will update the search results based on selected body part card, whenever bodyPart state is updated
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

            // to update the exercises state in Home component based on exercises result filtered based on body part card clicked
            props.setExercises(exercisesData);
        }

        // to call the function declared above
        fetchExercisesData();
        
    }, [props.bodyPart])

    // Generate a random number
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Generate random quby gifs in search results section
    const qubyGifs = [quby1, quby2, quby3, quby4, quby5];

    const qubyRandomDisplay = qubyGifs.map((qubyGif, index) => {

        return (<img src={qubyGif} alt="quby-gif" key={index} className="quby-gif" 
            style={{
                top: randomIntFromRange(1602, 4574) + "px", 
                left: randomIntFromRange(10, 90) + "%"
            }} />
        )
    })
    
    return (
        <Box id="exercises" mt="50px" p="20px"
            sx={{mt: {lg: "110px"}}}
        >
            {qubyRandomDisplay}

            <Stack>
                <Typography variant="h3" mb="20px" >
                    Search Results
                </Typography>

                <Typography variant="h6" mb="20px">
                    {exercisesPerPage} results per page
                </Typography>
            </Stack>

            {/* this will render the exercise cards for the set of exercises on current page */}
            <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{gap: {xs: "50px", lg: "110px"}}}>
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} favouriteExercises={props.favouriteExercises} />
                ))}
            </Stack>

            <Stack mt="100px" alignItems="center">
                {props.exercises.length > exercisesPerPage && (
                    <Pagination color="secondary" shape="circular" variant="outlined" size="large" count={Math.ceil(props.exercises.length / exercisesPerPage)} page={currentPage} showFirstButton showLastButton onChange={paginate} />
                )}
            </Stack>

            
        </Box>
    )
}

export default Exercises