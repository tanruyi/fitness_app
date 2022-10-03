// IMPORT FROM LIBRARIES
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

// IMPORT CUSTOM HOOKS 
import { exerciseOptions, fetchData, youtubeOptions } from '../utilities/fetchData';

// IMPORT CHILD COMPONENTS
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

// IMPORT DATA
import { exercisesDataFromAPI } from '../data/exercisesDataFromAPI';

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      // TODO: uncomment below section when development is complete, and ensure that everything is running
      // const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

      // TODO: comment out below section, it is a temporary code for development to replace calling function fetchExercisesData`
      const exerciseDetailData = exercisesDataFromAPI.find((exercise) => exercise.id === id);

      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

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
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail