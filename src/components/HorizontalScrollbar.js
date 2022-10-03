// IMPORT FROM LIBRARIES
import React, {useContext} from 'react';
import {Box, Typography} from '@mui/material';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

// IMPORT CHILD COMPONENTS
import BodyPart from './BodyPart';

// IMPORT IMAGES
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// TODO: understand left & right arrow functions below
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = (props) => {

    
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {props.data.map((item) => (
            <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
                <BodyPart item={item} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart} />
            </Box>
            )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar