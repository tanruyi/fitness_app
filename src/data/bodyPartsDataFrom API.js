// IMPORT CUSTOM HOOKS 
import { exerciseOptions, fetchData } from '../utilities/fetchData';

// get list of body parts from API
export const bodyPartsDataFromAPI = fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);