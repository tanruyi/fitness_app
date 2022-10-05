// IMPORT FROM LIBRARIES
import React, {useContext} from 'react';
import {Box, Typography} from '@mui/material';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

// IMPORT CHILD COMPONENTS
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

// IMPORT IMAGES
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// define left arrow for horizontal scrollbar
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
};

// define right arrow for horizontal scrollbar
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar = (props) => {
    
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {props.data.map((item) => (

                // For list of body parts in Search Exercises, set item as key, itemId & title
                <Box key={item.id || item} title={item.id || item} m="0 40px">
                    {props.bodyPart ? <BodyPart item={item} bodyPart={props.bodyPart} updateBodyPart={props.updateBodyPart} /> : <ExerciseCard exercise={item} />}
                </Box>
                )
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar