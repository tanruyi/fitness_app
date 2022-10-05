// IMPORT FROM LIBRARIES
import React, {useState} from 'react';
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
    }
})

const App = () => {

    const [favouriteExercises, setFavouriteExercises] = useState([]);

    const addFavouriteExercise = (newFavouriteExercise) => {

        console.log("star clicked");
        
        setFavouriteExercises((prevState) => {
            
            // Check if the exercise is already in the favouriteExercises, and add only if it is not in the list 
            if (prevState.some((exercise) => exercise.id === newFavouriteExercise.id)) {
                return [...prevState];
            } else {
                return [...prevState, newFavouriteExercise];
            }            
            
        });
    }

    return (
        <ThemeProvider theme={theme}>
            <Box width="400px" sx={{width: {xl: "1488px"}}} m="auto">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercise/:id' element={<ExerciseDetail addFavouriteExercise={addFavouriteExercise} />} />
                    <Route path='/favourites' element={<Favourites favouriteExercises={favouriteExercises} />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default App;