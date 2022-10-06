// IMPORT FROM LIBRARIES
import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// IMPORT CUSTOM HOOKS 
import { exerciseOptions, fetchData } from '../utilities/fetchData';

// IMPORT CHILD COMPONENTS
import HorizontalScrollbar from './HorizontalScrollbar';

// IMPORT DATA
import { bodyPartsDataFromAPI } from '../data/bodyPartsDataFrom API';
import { exercisesDataFromAPI } from '../data/exercisesDataFromAPI';

const SearchExercises = (props) => {

    const theme = useTheme();

    // This is the text input by user into the text field component below for search bar
    const [search, setSearch] = useState("");

    // This is the array of body parts available in the exercise API
    const [bodyParts, setBodyParts] = useState([]);

    // To fetch list of body parts from exercises API only on component mount
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

            setBodyParts(["all", ...bodyPartsData])
        }

        // TODO: uncomment below section when development is complete, and ensure that everything is running
        // fetchExercisesData();

        // TODO: comment out below section, it is a temporary code for development to replace calling function fetchExercisesData
        setBodyParts(bodyPartsDataFromAPI);
    
    }, [])

    // to add event listener that listens to user pressing enter key to call handlesearch function
    useEffect(() => {
        const handleKeyDown = (e) => {

            if (e.key === "Enter" && search) {

                e.preventDefault();

                handleSearch();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        // Clean up function to remove event listener when component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }

    })

    // to save the text value input by user in search bar in a state
    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    // This is the event handler for when user clicks on search button below
    const handleSearch = () => {

        if (search) {
            // TODO: uncomment below section when development is complete, and ensure that everything is running
            // const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

            // TODO: comment out below section, it is a temporary code for development to replace calling function fetchData
            const exercisesData = exercisesDataFromAPI;

            // to filter out the exercises where name, target, equipment or body part includes the text user typed in search bar
            const searchedExercises = exercisesData.filter((exercise) => 
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            // to clear the search state and reset to empty value once search button is clicked
            setSearch("");

            // to update the exercises state in Home component to filtered exercises
            props.setExercises(searchedExercises);
        }  
    }

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">

        {/* Search Bar */}
        <Box position="relative" mb="72px">
            <TextField height="76px" value={search} onChange={handleChange} placeholder="Search exercises by name, target muscle, body part or equipment" type="text" 
                sx={{
                    input: {
                        fontWeight: "bold",
                        border: "none",
                    },
                    width: {xs: "350px", lg: "800px"},
                    backgroundColor: "#FFF",
                }}
            />

            <Button className="search-btn" onClick={handleSearch}
                sx={{
                    bgcolor: theme.palette.primary.main,
                    color: "#FFF",
                    width: {sx: "80px", lg: "175px"},
                    fontSize: {xs: "14px", lg: "20px"},
                    height: "56px",
                    position: "absolute",
                    right: "0"
                }}
            >
                Search
            </Button>
        </Box>

        {/* Horizontal Scrolling Cards for Body Parts */}
        <Box
            sx={{
                position: "relative",
                width: "100%",
                p: "20px",
            }}
        >
            <Typography fontWeight="700" textAlign="center" mb="50px"
                sx={{
                    fontSize: {sx: "30px", lg: "44px"}
                }}
            >
                Search Exercises By Body Parts
            </Typography>

            <HorizontalScrollbar data={bodyParts} bodyPart={props.bodyPart} updateBodyPart={props.updateBodyPart} />

        </Box>
    </Stack>
  )
}

export default SearchExercises