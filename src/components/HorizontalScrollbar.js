// IMPORT FROM LIBRARIES
import React from 'react';
import {Box} from '@mui/material';

// IMPORT CHILD COMPONENTS
import BodyPart from './BodyPart';

const HorizontalScrollbar = (props) => {

    
  return (
    <div>
        {props.data.map((item) => (
            <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
                <BodyPart item={item} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart} />
            </Box>
            )
        )}
    </div>
  )
}

export default HorizontalScrollbar