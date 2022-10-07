// IMPORT CUSTOM HOOKS 
import { exerciseOptions, fetchData } from '../utilities/fetchData';

// DATA FROM API CALLED IN SEARCHEXERCISES COMPONENT FOR HORIZONTAL SCROLLBAR CHILD COMPONENT
// export const bodyPartsDataFromAPI = ['all', 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'];

// get list of body parts from API
export const bodyPartsDataFromAPI = fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);


