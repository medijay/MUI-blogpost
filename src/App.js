import React from 'react';
import { CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon  from '@mui/icons-material/X';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import post1 from './components/blog-post1.md';
import post2 from './components/blog-post2.md';
import post3 from './components/blog-post3.md';


const sidebar = {
  title: 'About',
  description:
  'Ahmed Adekunle aka mr medijay blogging website',
  archives: [
    {title: 'March 2020', url: '#'},
    {title: 'February 2020', url: '#'},
    {title: 'January 2020', url: '#'},
    {title: 'November 1999', url: '#'},
    {title: 'October 1999', url: '#'},
    {title: 'September 1999', url: '#'},
    {title: 'August 1999', url: '#'},
    {title: 'July 1999', url: '#'},
    {title: 'June 1999', url: '#'},
  ],
  social : [
    {name:'GitHub', icon:GitHubIcon},
    {name:'X', icon:XIcon},
    {name:'Facebook', icon: FacebookIcon },
  ],
};

const posts = [post1, post2, post3];

const sections = [
   { title: 'Technology', url: '#'},
   { title: 'Markets', url: '#'},
   { title: 'Culture', url: '#'},
   { title: 'Business', url: '#'},
   { title: 'Politics', url: '#'},
   { title: 'Policy', url: '#'},
   { title: 'Opinion', url: '#'},
   { title: 'Health', url: '#'},
   { title: 'Travel', url: '#'},
];



const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
    <CssBaseline />
    <Container maxwidth="lg">
    <Header title="Blog" sections={sections} />

    <Grid container spacing={5} sx={{ mt:3 }}>
      <Main title="From the firehouse" posts={posts} />
      <Sidebar
      title={sidebar.title}
      description={sidebar.description}
      archives={sidebar.archives}
      social={sidebar.social}
      />
    </Grid>
      </Container>
      <Footer
      title="Mj Inc"
      description="Designed and created TrukSaint!!!!!"
      />
    </ThemeProvider>
  );
};

