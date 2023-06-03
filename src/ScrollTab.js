import React from 'react';
import { Tab } from '@mui/material';
import { ScrollLink } from 'react-scroll/modules';

class ScrollTab extends React.Component {
    render() {
        return <Tab {...this.props}/>;
    }
}

export default ScrollLink(ScrollTab);
