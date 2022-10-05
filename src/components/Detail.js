// IMPORT FROM LIBRARIES
import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// IMPORT IMAGES
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = (props) => {

    const theme = useTheme();

    // destructured assignment to save the key-value pairs in exerciseDetail as variables
    const { bodyPart, gifUrl, name, target, equipment } = props.exerciseDetail;

    const extraDetail = [
    {
        icon: BodyPartImage,
        name: bodyPart,
    },
    {
        icon: TargetImage,
        name: target,
    },
    {
        icon: EquipmentImage,
        name: equipment,
    },
    ]

    return (
        <Stack gap="60px"
            sx={{
            flexDirection: {lg: "row"},
            p: "20px",
            alignItems: "center",
            }}
        >
            <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />

            <Stack
            sx={{
                gap: {xs: "20px", lg: "35px"},
            }}
            >
                <Typography variant='h3' textTransform="capitalize" color={theme.palette.primary.main} fontWeight="bold" >
                    {name}
                </Typography>

                <Typography variant='h6'>
                    Exercises keep you strong. <span style={{textTransform: "capitalize"}}>{name}</span> is one of the best exercises to target your {target}.
                </Typography>

                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button 
                            sx={{
                            backgroundColor: theme.palette.secondary.light,
                            borderRadius: "50%",
                            width: "100px",
                            height: "100px",
                            }}
                        >
                            <img src={item.icon} alt={bodyPart} style={{width: "50px", height: "50px"}} />
                        </Button>

                        <Typography variant="h5" textTransform="capitalize">
                            {item.name === bodyPart ? `Body Part: ${item.name}` : ""}
                            {item.name === target ? `Target Muscle: ${item.name}` : ""}
                            {item.name === equipment ? `Equipment: ${item.name}` : ""}
                        </Typography>
                    </Stack>
            ))}

            </Stack>
        </Stack>
    )
}

export default Detail