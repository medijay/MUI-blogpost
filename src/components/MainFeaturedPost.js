import React, { useEffect, useState } from "react";
import Paper  from "@mui/material/Paper";
import Typography  from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import blog from './blog-post1.md'
import ReactMarkdown from 'react-markdown'

function MainFeaturedPost() {


    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
          "Multiple lines of text that form the lead, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random?wallpapers',
        imageText: 'main image description',
        linkText: 'Continue reading…',
      };

    const [postMarkdown, setPostMarkdown] = useState('');

    useEffect(() => {
        fetch(blog)
        .then((response) => response.text())
        .then((text) => {
            setPostMarkdown(text);
        });
    });

    

    return (
        <Paper
        sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${mainFeaturedPost.image})`,
        }}
        >
            {<img style={{ display: 'none' }} src={mainFeaturedPost.image} alt={mainFeaturedPost.mageText} />}
            <Box
            sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
            }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                    sx={{
                        position: 'relative',
                        p: {xs: 3, md: 6 },
                        pr: {md: 0},
                    }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {mainFeaturedPost.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {mainFeaturedPost.description}
                        </Typography>
                        <Link>
                        <ReactMarkdown 
                         children ={postMarkdown} variant="subtitle1"  href="#" />
                            {MainFeaturedPost.linkText}
                        </Link>
                        
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}


export default MainFeaturedPost;