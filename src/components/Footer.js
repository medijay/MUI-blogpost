import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Stack} from '@mui/material';

  
  function Footer(props) {
    const { description, title, social } = props;

    return (
          <Box component="footer" sx={{ bgcolor: '#212121', py: 2}}>

        <Typography variant="body2" color="#fafafa" align="center">
          {'Copyright © '}
          <Link color="#fafafa" href="https://medijay.github.io">
            Get the website feeling
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      
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
          </Container>

    
          <Typography>
            <Stack direction={'row'} spacing={2} justifyContent={'flex-end'}>


            {social.map((network) => (
              <Link
              display="grid"
              variant="body1"
              href="#"
              key={network.name}
              sx={{ mb: 0.5, }}
              >
                    <Stack direction="row" spacing={1} alignItems="center" color={'white'} >
                        <network.icon />
                    </Stack>
                </Link>
            ))}
            </Stack>
            </Typography>
        
        </Box>
      );
      
    }

    Footer.prototype = {
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,

                social: PropTypes.arrayOf(
                    PropTypes.shape({
                        icon: PropTypes.elementType,
                        name: PropTypes.string.isRequired,
                    })
                  ),
    };

    export default Footer;
    
    