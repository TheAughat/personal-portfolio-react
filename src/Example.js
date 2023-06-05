import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProjectCard from './components/pages/ProjectCard';
import { Typography, Stack } from '@mui/material';
import bs from './utils/images/battleship_ubisoft.jpg';
import cw from './utils/images/codewalker_image.jpg';
import pf from './utils/images/portfolio_image.JPG';
import gg from './utils/images/gridgames_image.JPG';
import UtilityButton from './components/buttons/UtilityButton';


function Example(props) {
    const [autoPlay, setAutoPlay] = React.useState(true);

    var items = [
        {
            // title: '',
            descriptionText: [
                'The board game Battleship created in Java, using Java Swing for the GUI.',
            ],
            rest: {
                title: 'Battleship', link: 'https://github.com/TheAughat/Battleship', image: bs
            },
            // image: undefined,
            // link: undefined,
            // firstBtnLabel: undefined,
            // secondBtn: undefined,
        },
    ];


    return (
        <Carousel
            NextIcon={<ChevronRightIcon/>}
            PrevIcon={<ChevronLeftIcon/>}
            // onChange={(e) => console.log(e)}
            // prev={() => {
            //     setAutoPlay(false);
            //     setTimeout(() => setAutoPlay(true), 4000);
            // }}
            // next={() => {
            //     setAutoPlay(false);
            //     setTimeout(() => setAutoPlay(true), 1000);
            // }}
            sx={{borderRadius: '20px'}}
            navButtonsAlwaysVisible
            autoPlay={autoPlay}
            interval={4000}
            navButtonsProps={{
                className: 'carousel-btns',
                style: {
                    // position: 'relative',
                    background: 'rgba(0,0,0,0.2)',
                    height: '120%',
                    borderRadius: '0',
                    padding: '0.5em',
                    margin: '0',
                },
                // onClick: () => console.log('test')
            }}
            // fullHeightHover={false}
            animation='slide'
            navButtonsWrapperProps={{
                style: {
                    background: 'transparent',
                    // top: '10em',
                    // height: '100%',
                    top: '-50%',
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    padding: '0 0.1em'
                }
            }}
            indicatorContainerProps={{
                style: {
                    position: 'relative',
                    background: 'rgba(100,150,238,0.4)',
                    marginTop: '0',
                    paddingTop: '0.2em',
                    paddingBottom: '0.2em',
                    // borderTop: '5px solid khaki',
                    top: '-1px'
                }
            }}
        >
            {/* {
                items.map( (item, i) => <Item key={i} item={item} /> )
            } */}
            <Item item={
                <ProjectCard
                    title='CodeWalker'
                    description={(
                        <Stack spacing={1}>
                            <Typography sx={{color: 'white'}}>
                                Created a website with React and SpringBoot to run code and perform multiple checks
                                and tests on it to help classmates struggling to pass their coding assignments.
                            </Typography>
                            <Typography sx={{color: 'white'}}>
                                Website was used by dozens of classmates to prepare for tests and assignments through the year.
                            </Typography>
                            <Typography sx={{color: 'white'}}>
                                Backend is available as a JAR file, and can be run as an executable on a PC with a JRE.
                            </Typography>
                        </Stack>
                    )}
                    link='https://codewalker-cs2004.netlify.app/'
                    firstBtnLabel='Visit Frontend'
                    // titleToContentSpacing={5}
                    // contentToButtonsSpacing={3}
                    secondBtn={(
                        <UtilityButton 
                            styleType='classic'
                            newTabLink='https://drive.google.com/file/d/18SOIHFZQiaNM9REx4Gid4UIARSyGqLoY/view'
                        >
                            Download Backend
                        </UtilityButton>
                    )}
                    image={cw}
                />
            }/>
            <Item item={
                <ProjectCard
                    title='Grid Games / Tile Rotation Game'
                    description={(
                        <Stack spacing={1}>
                            <Typography sx={{color: 'white'}}>
                                React app that lets you select an image from a collection.
                            </Typography>
                            <Typography sx={{color: 'white'}}>
                                The image is then broken into square tiles and scrambled, and you must rotate them back into their original position to reform the original image.
                            </Typography>
                            <Typography sx={{color: 'white'}}>
                                The game is timed.
                            </Typography>
                        </Stack>
                    )}
                    link='https://grid-games-rotation.netlify.app/'
                    firstBtnLabel='Visit Frontend'
                    secondBtn={(
                        <UtilityButton 
                            styleType='classic'
                            newTabLink='https://github.com/TheAughat/grid-games-react'
                        >
                            View on GitHub
                        </UtilityButton>
                    )}
                    image={gg}
                />
            }/>
            <Item item={
                <ProjectCard
                    title='Battleship'
                    description={(
                        <Typography sx={{color: 'white'}}>
                            The board game Battleship created in Java, using Java Swing for the GUI.
                        </Typography>
                    )}
                    link='https://github.com/TheAughat/Battleship'
                    image={bs}
                />
            }/>
            <Item item={
                <ProjectCard
                    title='Personal Portfolio'
                    description={(
                        <Stack spacing={1}>
                            <Typography sx={{color: 'white'}}>
                                A personal portfolio to introduce myself, my experience, and showcase my projects.
                            </Typography>
                            <Typography sx={{color: 'white'}}>
                                Made using React.js and Material-UI.
                            </Typography>
                        </Stack>
                    )}
                    link='https://github.com/TheAughat/Personal-Portfolio'
                    image={pf}
                />
            }/>
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper sx={{background: 'rgba(100,150,238,0.4)', boxShadow: 'none'}}>
            {props.item}
        </Paper>
    );
}

export default Example;
