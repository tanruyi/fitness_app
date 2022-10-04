// IMPORT FROM LIBRARIES
import React from 'react';
import {Stack, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// IMPORT IMAGES
import allIcon from '../assets/icons/all.svg';
import BackIcon from '../assets/icons/back.svg';
import CardioIcon from '../assets/icons/cardio.svg';
import ChestIcon from '../assets/icons/chest.svg';
import LowerArmIcon from '../assets/icons/lower-arm.svg';
import LowerLegIcon from '../assets/icons/lower-leg.svg';
import NeckIcon from '../assets/icons/neck.svg';
import ShoulderIcon from '../assets/icons/shoulder.svg';
import UpperArmIcon from '../assets/icons/upper-arm.svg';
import UpperLegIcon from '../assets/icons/upper-leg.svg';
import WaistIcon from '../assets/icons/waist.svg';

const BodyPart = (props) => {

    const theme = useTheme();

    // this is the event handler when user clicks on body part card
    const handleClick = () => {

        // update body part state in Home component to body part card clicked
        props.setBodyPart(props.item);
        window.scrollTo({
            top: 1600, 
            left: 100, 
            behavior: "smooth"
        });
    }

    let iconImage = "";

    switch (props.item) {
        case "all":
            iconImage = allIcon;
            break;
        case "back":
            iconImage = BackIcon;
            break;
        case "cardio":
            iconImage = CardioIcon;
            break;
        case "chest":
            iconImage = ChestIcon;
            break;
        case "lower arms":
            iconImage = LowerArmIcon;
            break;
        case "lower legs":
            iconImage = LowerLegIcon;
            break;
        case "neck":
            iconImage = NeckIcon;
            break;
        case "shoulders":
            iconImage = ShoulderIcon;
            break;
        case "upper arms":
            iconImage = UpperArmIcon;
            break;
        case "upper legs":
            iconImage = UpperLegIcon;
            break;
        case "waist":
            iconImage = WaistIcon;
            break;  
        default:
            iconImage = allIcon;
    }

    return (
        <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card"
            sx={{
                // Adds border on card clicked by user
                border: props.bodyPart === props.item ? `4px solid ${theme.palette.primary.main}` : "",
                backgroundColor: "#FFF",
                borderRadius: "15px",
                width: "270px",
                height: "270px",
                cursor: "pointer",
                gap: "10px",
            }}
            onClick={handleClick}
        >
            <img src={iconImage} alt={props.item} className='bodyPart-card-image' />

            <Typography fontSize="24px" fontWeight="bold" color={theme.palette.secondary.main} textTransform="capitalize">{props.item}</Typography>
        </Stack>
    )
}

export default BodyPart