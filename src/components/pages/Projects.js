import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Type } from './About';
import { defaultTheme } from '../../utils/Theme';


function Projects() {
    const commonSx = {
        fontWeight: 'bold',
        letterSpacing: '0.02em',
        color: defaultTheme.palette.primary.dark
    };


    return (
            <Box>
                <Stack direction='column' spacing={3} display='flex' alignItems='flex-start' justifyContent='flex-start'>
                    <Typography sx={{...commonSx, color: defaultTheme.palette.primary.light}} variant='h4'>My Projects</Typography>
                    <Type>Work in progress... Section will be available soon.</Type>
                </Stack>
            </Box>
    );
}

export default Projects;
