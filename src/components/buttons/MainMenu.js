import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import { defaultTheme } from '../../utils/Theme';


function MainMenu({selected, setSelected}) {
    const btnSx = {
        pl: '3em',
        color: defaultTheme.palette.primary.light,
        my: '1em',
        mr: 0
    };

    const btnSelectedSx = {
        color: defaultTheme.palette.primary.main,
        boxShadow: `0 0 5px ${defaultTheme.palette.secondary.main}, 0 0 25px ${defaultTheme.palette.secondary.main}, 0 0 50px ${defaultTheme.palette.secondary.main}, 0 0 200px ${defaultTheme.palette.secondary.main}`
    };

    const labelSx = {fontWeight: 'bold', fontSize: '1.5em', transition: '0.6s'};

    const iconSx = {fontSize: '3em', pr: '0.5em'};
    const iconProps = {color: 'primary', sx: iconSx};


    function showLabelHover(buttonFor) {
        if (buttonFor === selected) return {};
        return {'&:hover': {color: defaultTheme.palette.primary.main, textShadow: '0 0 10px rgb(0, 102, 255), 0 0 20px rgb(0, 102, 255)'}};
    }


    const buttons = [
        {
            label: 'About',
            value: 'about',
            icon: <InfoIcon {...iconProps}/>
        },
        {
            label: 'Resume',
            value: 'resume',
            icon: <DescriptionIcon {...iconProps}/>
        },
        {
            label: 'Contact',
            value: 'contact',
            icon: <AccountCircleIcon {...iconProps}/>
        },
        {
            label: 'Projects',
            value: 'projects',
            icon: <CodeIcon {...iconProps}/>
        },
    ];


    return (
        <FormControl sx={{letterSpacing: '0.02rem'}} fullWidth>
            <RadioGroup value={selected} name='main-menu' onChange={e => setSelected(e.target.value)}>
                {buttons.map((e, i) => (
                    <FormControlLabel
                        key={`${e.value}-${i}`}
                        control={<Radio checkedIcon={e.icon} icon={e.icon}/>}
                        value={e.value}
                        label={<Typography sx={{...labelSx, ...showLabelHover(e.value)}}>{e.label}</Typography>}
                        sx={selected === e.value? {...btnSx, ...btnSelectedSx, background: theme => theme.palette.secondary.main} : btnSx}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}

export default MainMenu;

