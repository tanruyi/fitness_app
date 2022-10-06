// IMPORT FROM LIBRARIES
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {autocompleteClasses, Box} from '@mui/material';

// IMPORT CUSTOM HOOKS 
import { exerciseOptions, fetchData } from '../utilities/fetchData';

// IMPORT CHILD COMPONENTS
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

// IMPORT DATA
import { exercisesDataFromAPI } from '../data/exercisesDataFromAPI';

const ExerciseDetail = (props) => {

    // this is the exercise data for exercise selected
    const [exerciseDetail, setExerciseDetail] = useState({});

    // this is an array of related youtube videos for the selected exercise
    const [exerciseVideos, setExerciseVideos] = useState([]);

    // this is an array of exercises with the same target muscle
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

    // this is an array of exercises with the same equipment
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    // to retrieve the id parameter from URL. id parameter was set in ExerciseCard component
    const { id } = useParams();

    useEffect(() => {

        window.scrollTo({top: 0, left: 0, behavior: "auto"});

        const fetchExercisesData = async () => {

            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl = `https://youtube.googleapis.com/youtube/v3`;

            // TODO: uncomment below section when development is complete, and ensure that everything is running
            // const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

            // TODO: comment out below section, it is a temporary code for development to replace calling function fetchExercisesData
            const exerciseDetailData = exercisesDataFromAPI.find((exercise) => exercise.id === id);

            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?part=snippet&maxResults=3&order=relevance&q=${exerciseDetailData.name}&safeSearch=moderate&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
            setExerciseVideos(exerciseVideosData.items);

            // TODO: uncomment below section when development is complete, and ensure that everything is running
            // const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);

            // TODO: comment out below section, it is a temporary code for development to replace calling function fetchExercisesData
            const targetMuscleExerciseData = exercisesDataFromAPI.filter((exercise) => exercise.target === exerciseDetailData.target);

            setTargetMuscleExercises(targetMuscleExerciseData);

            // TODO: uncomment below section when development is complete, and ensure that everything is running
            // const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);

            // TODO: comment out below section, it is a temporary code for development to replace calling function fetchExercisesData
            const equipmentExerciseData = exercisesDataFromAPI.filter((exercise) => exercise.equipment === exerciseDetailData.equipment);

            setEquipmentExercises(equipmentExerciseData);

        }

        fetchExercisesData();
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} addFavouriteExercise={props.addFavouriteExercise} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetail