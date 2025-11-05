import * as React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box, Container } from '@mui/material';
import { mainFeaturedPost } from '../Data/Data';

const FeaturedPost = () => {
    const coverImage = mainFeaturedPost.image;

    return (
        <Container maxWidth="lg" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
                <Card
                    elevation={4}
                    sx={{
                        width: '100%',
                        maxWidth: 980,
                        color: 'common.white',
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${coverImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 2,
                    }}
                >
                    <CardContent sx={{ px: { xs: 4, sm: 6 }, py: { xs: 6, sm: 6 } }}>
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: { xs: 24, sm: 32, md: 40 },
                                fontWeight: 600,
                                mb: 1.5,
                                fontFamily: "'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto",
                            }}
                            gutterBottom
                        >
                            {mainFeaturedPost.title}
                        </Typography>

                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                color: 'rgba(255,255,255,0.92)',
                                maxWidth: { xs: '100%', md: '70%' },
                                lineHeight: 1.6,
                            }}
                        >
                            {mainFeaturedPost.description}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ px: { xs: 2, sm: 4 }, pb: { xs: 2, sm: 3 } }}>
                        <Button variant="text" sx={{ color: '#90caf9', fontWeight: 700 }} href="#">
                            {mainFeaturedPost.linkText}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
};

export default FeaturedPost;