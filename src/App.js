// IMPORT FROM LIBRARIES
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// IMPORT STYLESHEET
import './App.css';

// IMPORT CHILD COMPONENTS
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Favourites from './pages/Favourites';

const theme = createTheme({
    palette: {
        primary: {
            light: "#FF7961",
            main: "#F44336",
            dark: "#BA000D",
            contrastText: "#000"
        },
        secondary: {
            light: "#88FFFF",
            main: "#4DD0E1",
            dark: "#009FAF",
            contrastText: "#000"
        },
        info: {
            light: "#FED766",
            main: "#FECB34",
            dark: "#FEC10B",
            contrastText: "#000",
        },
    },
})

const App = () => {

    const [favouriteExercises, setFavouriteExercises] = useState([]);

    // function to check new favourite exercise before it is added to array in state
    const addFavouriteExercise = (newFavouriteExercise) => {
        
        setFavouriteExercises((prevState) => {
            
            // Check if the exercise is already in the favouriteExercises, and add only if it is not in the list 
            if (prevState.some((exercise) => exercise.id === newFavouriteExercise.id)) {
                return [...prevState];
            } else {
                return [...prevState, newFavouriteExercise];
            }            
            
        });
    }

    // to retrieve the array of favourite exercises saved in local storage to key favouriteExercises & convert to JSON object
    useEffect(() => {
        
        const favouriteExercisesFromLocalStorage = JSON.parse(localStorage.getItem("favouriteExercises"));

        // only update state if array is not empty
        if (favouriteExercisesFromLocalStorage) {
            setFavouriteExercises(favouriteExercisesFromLocalStorage);
        }

    }, [])

    // to save the array of favourite exercises in local storage across browser sessions as JSON text to key favouriteExercises
    useEffect(() => {

      localStorage.setItem("favouriteExercises", JSON.stringify(favouriteExercises));
    
    }, [favouriteExercises]);
    

    return (
        <ThemeProvider theme={theme}>
            <Box width="400px" sx={{width: {xl: "1488px"}}} m="auto">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home favouriteExercises={favouriteExercises} />} />
                    <Route path='/exercise/:id' element={<ExerciseDetail addFavouriteExercise={addFavouriteExercise} />} />
                    <Route path='/favourites' element={<Favourites favouriteExercises={favouriteExercises} />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default App;