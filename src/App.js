import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from './utils/Theme';
import LandingBackground from './components/pages/LandingBackground';
import Example from './Example';
import { Box, Typography, Stack, Button } from "@mui/material";
import RootMarginTester from './RootMarginTester';


function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <LandingBackground/>
            {/* <Example/> */}
            {/* <RootMarginTester rootMargin={250}/> */}
        </ThemeProvider>
    );
}

export default App;
