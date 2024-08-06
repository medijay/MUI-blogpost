import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import blog from './blog-post2.md'
import Link from "@mui/material";
import {picszz} from './images/piczz.svg'

function FeaturedPost() {
    
    const featuredPosts = [
        {
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
        },
        {
          title: 'Post title',
          date: 'Nov 11',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: {picszz},
          imageLabel: 'Image Text',
        },
      ];

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display:'flex' }}>
                    <CardContent sx={{ flex:1 }}>
                        {featuredPosts.map((post) =>(
                         <FeaturedPost   key={post.title} post={post} />
                        )
                        
                           
                        )}
                        <Typography component="h2" variant="h5">
                            {featuredPosts.title}
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary">
                            {featuredPosts.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {featuredPosts.description1}
                        </Typography>
                         <Link to={blog}>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                      </Link>
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