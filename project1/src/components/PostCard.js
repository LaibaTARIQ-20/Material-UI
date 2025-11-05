import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, CardActions, Button, Typography, Grid } from '@mui/material';

const PostCard = ({ title, date, description, image, href = '#' }) => {
    return (
        <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ bgcolor: 'background.paper' }}>
                <CardActionArea component="a" href={href}>
                    {image && (
                        <CardMedia
                            component="div"
                            sx={{
                                height: { xs: 120, sm: 140 },
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            role="img"
                            aria-label={title}
                        />
                    )}

                    <CardContent>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {date}
                        </Typography>

                        <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                            {title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ px: 2, pb: 2 }}>
                        <Button size="small">Continue reading…</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default PostCard;