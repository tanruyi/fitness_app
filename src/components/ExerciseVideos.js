// IMPORT FROM LIBRARIES
import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const ExerciseVideos = (props) => {

  const exerciseVideos = props.exerciseVideos;

  if (!exerciseVideos.length) return "Loading...";

    return (
        <Box marginBottom="50px"
            sx={{
                marginTop: {xs: "20px", lg: "100px"},
            }}
        >
            <Typography variant="h4" mb="33px">
                Watch <span style={{color: "#FF2625", textTransform: "capitalize", fontWeight: "bold"}}>{props.name}</span> exercise videos
            </Typography>

            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
                sx={{
                    flexDirection: {lg: "row"},
                    columnGap: {xs: "0", lg: "110px"},
                }}
            >
                {exerciseVideos?.map((video, index) => (
                    <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noreferrer">
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}  />

                        <Box>
                            <Typography variant="h5" color="#000">
                            {video.snippet.title}
                            </Typography>

                            <Typography variant="h6" color="#000">
                            {video.snippet.channelTitle}
                            </Typography>

                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos