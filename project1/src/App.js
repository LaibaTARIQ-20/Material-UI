import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FeaturedPost from "./components/FeaturedPost";
import { Grid } from "@mui/material";
import { featuredPosts } from "./Data/Data";
import PostCard from "./components/PostCard";

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
                <FeaturedPost />
                <br />
                {/* Make Grid a container and give spacing */}
                <Grid container spacing={3}>
                    {featuredPosts.map((post, index) => (
                        <PostCard
                            key={post.title + index}
                            {...post}
                            gridProps={{ xs: 12, sm: 6 }}
                        />
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;