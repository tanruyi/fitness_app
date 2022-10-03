// IMPORT FROM LIBRARIES
import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const ExerciseVideos = (props) => {

  console.log(props.exerciseVideos);

  const exerciseVideos = props.exerciseVideos;

  if (!exerciseVideos.length) return "Loading...";

  return (
    <Box p="20px"
      sx={{
        marginTop: {xs: "20px", lg: "200px"},
      }}
    >
      <Typography variant="h3" mb="33px">
        Watch <span style={{color: "#FF2625", textTransform: "capitalize"}}>{props.name}</span> exercise videos
      </Typography>

      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: {lg: "row"},
          gap: {xs: "0", lg: "110px"},
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />

            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>

              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>

            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos