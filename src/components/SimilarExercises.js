import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar.js'
import Loader from './Loader.js';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) =>
(
   // console.log({ targetMusclesExercises });
    <Box sx={{
        mt: { lg: '100px', xs: '0' }
    }}>
        
        <Typography variant='h3' mb='5px'>Exercises that target <span style={{color:'#ff2625'}}>same muscle group</span></Typography >

        <Stack direction='row' sx={{ p: '2', position: 'relative' }}>

            {targetMuscleExercises && targetMuscleExercises.length !==0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
        </Stack>

        <Typography variant='h3' mb='5px'>Exercises that use the <span style={{ color: '#ff2625' }}>same equipments</span></Typography >
        <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
            {equipmentExercises && equipmentExercises.length !== 0 ?
                <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
        </Stack>
    </Box>
)


export default SimilarExercises;