import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FeaturedPost from "./components/FeaturedPost";
import {Grid} from "@mui/material";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container>
                <Header />
                <FeaturedPost/>
                <br/>
                <Grid>

                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;