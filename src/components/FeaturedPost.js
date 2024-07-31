import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function FeaturedPost() {
    
    const featuredPosts = [
        {
          title1: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
        },
        {
          title2: 'Post title',
          date: 'Nov 11',
          description1:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
        },
      ];

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display:'flex' }}>
                    <CardContent sx={{ flex:1 }}>
                        <Typography component="h2" variant="h5">
                            {featuredPosts.title1}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {featuredPosts.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {featuredPosts.description1}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                    component="img"
                    sx={{ width:160, display: {xs: 'none', sm: 'block'} }}
                    image={featuredPosts.image}
                    alt={featuredPosts.imageLabel}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}


export default FeaturedPost;