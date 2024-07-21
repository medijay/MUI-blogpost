import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'; 
import { GitHub, Instagram, X } from '@mui/icons-material';



  
  function Footer(props) {
    const { description, title } = props;

    return (
          <Box component="footer" sx={{ bgcolor: '#212121', py: 2}}>

        <Typography  variant="body2" color="inherit" align="center">
          {'Copyright © '}
          <Link color="#b2dfdb" href="https://medijay.github.io">
            Get the website feeling
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      
          <Container maxWidth="lg">
            <Typography  color="inherit" variant="h4" align="center" gutterBottom>
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="#fafafa"
              component="p"
              >
              {description}
            </Typography>
          </Container>

          <Container maxWidth='md' >
            <Stack direction={'row'} spacing={2} justifyContent={'flex-end'}>

            <Link href='https://github.com/medijay'
            color={'inherit'}
            >
              <GitHub />
            </Link>
            <Link href="https://x.com/Medihuncho"
             color={'inherit'}
            >
              <X/>
            </Link>
            <Link href="https://www.linkedin.com/in/ahmed-gbenjo-81404a210/"
             color={'inherit'}
            >
              <Instagram />
            </Link>
              </Stack>

          </Container>

    
        
        
        </Box>
      );
      
    }

    Footer.prototype = {
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    };

    export default Footer;
    
    