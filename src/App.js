// IMPORT FROM LIBRARIES
import React from 'react';
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
        }
    }
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box width="400px" sx={{width: {xl: "1488px"}}} m="auto">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercise/:id' element={<ExerciseDetail />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default App;