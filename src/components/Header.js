import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Divider, Stack } from '@mui/material';


function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>


 <Box m={12}  gap={4}  sx={{border: '2px'}} >

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

        <Box display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'} height={60}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" sx={{height:40}}>
          Sign up
        </Button>
        </Box>


          <Typography
          sx={{minWidth: 100, display: 'grid', spacing: 2, direction: 'unset'}} >
      <Stack direction={'row'} 
      divider={<Divider orientation='vertical' flexItem />} spacing={3} >

        {sections.map((section) => (         
          <Link >
          {section.title}
          
          </Link>
          
        ))}
        </Stack>
        </Typography>
        </Box>
        
        
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