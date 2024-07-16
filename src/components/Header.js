import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Grid } from '@mui/material';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <div>
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
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </div>
      <Grid container gap={6}>

      <Box
        component="nav"
        variant="dense"
        sx={{ flexDirection:'row', overflowX: 'auto', display:'block', m:'2rem', textAlign:'center', fontWeight:'bold' }}
        >
        {sections.map((section) => (
          
          
          <Link  >
          
            {section.title}
          </Link>
          
        ))}
      </Box>
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