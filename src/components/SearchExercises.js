import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';

import { exerciseOptions, fetchData } from '../utilities/fetchData';

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {

    const [search, setSearch] = useState("");
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

            setBodyParts(["all", ...bodyPartsData])
        }

        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

            const searchedExercises = exercisesData.filter((exercise) => 
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            setSearch("");
            setExercises(searchedExercises);
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
            <HorizontalScrollbar data={bodyParts} />
        </Box>
    </Stack>
  )
}

export default SearchExercises