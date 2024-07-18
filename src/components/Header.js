import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid, Divider } from '@mui/material';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>

        <Typography
          component="h2"
          variant="h3"
          color="#004d40"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" position="absolute">
          Sign up
        </Button>
      
        <Grid container justifyContent={'center'} spacing={8} divider={<Divider orientation='vertical' />} >

        
          
       <Typography component="nav"
        variant="dense"          
        sx={{ overflowX: 'visible', m:'4rem', fontWeight:'bold',  }}
        >
        {sections.map((section) => (         
          <Link  >
            {section.title}
          </Link>
          
        ))}
      </Typography>
      
        </Grid>
        
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;