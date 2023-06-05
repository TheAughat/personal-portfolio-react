import React from 'react';
import { Box } from '@mui/material';

function RootMarginTester({rootMargin = 0}) {
    return (
        <>
            <Box
                sx={{
                    // background: 'red',
                    width: 'stretch',
                    height: 'stretch',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1000,
                    margin: rootMargin + 'px',
                    // margin: '250px 0px',
                    border: rootMargin !== 0? '8px dashed black' : undefined,
                    borderRadius: '10px',
                }}
            />
            <Box
                sx={{
                    // background: 'red',
                    width: 'stretch',
                    height: 'stretch',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1000,
                    // margin: '100px',
                    border: rootMargin !== 0? (rootMargin + 'px solid rgba(0,0,0,0.2)') : undefined,
                    // borderRadius: '10px',
                }}
            />
        </>
    );
}

export default RootMarginTester;
