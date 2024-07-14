import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Copyright() {

    return (
        <Typography variant="body2" color="#fafafa" align="center">
          {'Copyright © '}
          <Link color="#fafafa" href="https://medijay.github.io">
            Get the website feeling
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }
    
    function Footer(props) {
      const { description, title } = props;
    
      return (
        <Box component="footer" sx={{ bgcolor: '#212121', py: 6 }}>
          <Container maxWidth="lg">
            <Typography  color="#fafafa" variant="h5" align="center" gutterBottom>
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
            <Copyright />
          </Container>
        </Box>
      );
    };

    Footer.prototype = {
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    };

    export default Footer;
    
    