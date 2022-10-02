// IMPORT FROM LIBRARIES
import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';

// IMPORT CUSTOM HOOKS 
import { exerciseOptions, fetchData } from '../utilities/fetchData';

// IMPORT CHILD COMPONENTS
import HorizontalScrollbar from './HorizontalScrollbar';

// IMPORT DATA
import { bodyPartsDataFromAPI } from '../data/bodyPartsDataFrom API';
import { exercisesDataFromAPI } from '../data/exercisesDataFromAPI';

const SearchExercises = (props) => {

    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

            setBodyParts(["all", ...bodyPartsData])

            // console.log(bodyParts); // this is for retrieving API data and saving it to a file on our laptop for development purpose
        }

        // TODO: uncomment below section when development is complete, and ensure that everything is running
        // fetchExercisesData();

        // TODO: comment out below section, it is a temporary code for development to replace calling function fetchExercisesData
        setBodyParts(bodyPartsDataFromAPI);
    }, [])

    const handleSearch = async () => {
        if (search) {
            // TODO: uncomment below section when development is complete, and ensure that everything is running
            // const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

            // console.log(exercisesData); // this is for retrieving API data and saving it to a file on our laptop for development purpose

            // TODO: comment out below section, it is a temporary code for development to replace calling function fetchData
            const exercisesData = exercisesDataFromAPI;

            const searchedExercises = exercisesData.filter((exercise) => 
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            setSearch("");
            props.setExercises(searchedExercises);
        }  
    }

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
        <Typography fontWeight="700" textAlign="center" mb="50px"
            sx={{
                fontSize: {sx: "30px", lg: "44px"}
            }}
        >
            Awesome Exercises You <br /> Should Know
        </Typography>

        <Box position="relative" mb="72px">
            <TextField height="76px" value={search} onChange={(e)=> {setSearch(e.target.value.toLowerCase())}} placeholder="Search Exercises" type="text" 
                sx={{
                    input: {
                        fontWeight: "700",
                        border: "none",
                        borderRadius: "4px"
                    },
                    width: {xs: "350px", lg: "800px"},
                    backgroundColor: "#FFF",
                    borderRadius: "40px"
                }}
                    />

            <Button className="search-btn" onClick={handleSearch}
                sx={{
                    bgcolor: "#FF2625",
                    color: "#FFF",
                    textTransform: "none",
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

        <Box
            sx={{
                position: "relative",
                width: "100%",
                p: "20px"
            }}
        >
            <HorizontalScrollbar data={bodyParts} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises