import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader.js';


const ExerciseVideos = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) return <Loader/>
    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">

            <Typography variant='h3' mb='33px'>
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '110px', xs: '0' }
                }}>
                {exerciseVideos?.slice(0, 4).map((item, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        href={item.video ? `https://www.youtube.com/watch?v=
                        ${item.video.videoId}` : ''}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {item.video && item.video.thumbnails && (
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        )}

                    </a>
                ))}

            </Stack>

        </Box>
    )
}

export default ExerciseVideos