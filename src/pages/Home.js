// IMPORT FROM LIBRARIES
import React, {useState, useRef} from 'react';
import {Box} from '@mui/material';

// IMPORT CHILD COMPONENTS
import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = (props) => {

    // Body part selected by user, state is updated when user clicks on BodyPart card. 
    const [bodyPart, setBodyPart] = useState("all");

    // Array of exercises will be updated in Exercises component, when API is called
    const [exercises, setExercises] = useState([]);

    const updateBodyPart = (bodyPartClicked) => {
        setBodyPart(bodyPartClicked);
    }

    return (
    <Box>
        {/* This is the top banner */}
        <Banner />

        {/* This is the searchbar & body part cards */}
        <SearchExercises bodyPart={bodyPart} updateBodyPart={updateBodyPart} setExercises={setExercises} />

        {/* This is the part to display search results */}
        <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises} favouriteExercises={props.favouriteExercises} />
    </Box>
    )
}

export default Home