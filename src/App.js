import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header'
import MainFeaturedPost from './components/MainFeaturedPost';
import FeaturedPost from './components/FeaturedPost';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';



const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Cryptocurrencies', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Learn', url: '#' },
];







const defaultTheme = createTheme({

  palette:{
    background: {
      default:'#e0f2f1'
    }
  }
});

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title='blog'  sections={sections} />
        <main>
          <MainFeaturedPost  />
          <Grid container spacing={4}>
              <FeaturedPost key={FeaturedPost.title} />
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose"  />
            <Sidebar />

             
          </Grid>
        </main>
      </Container>
      <Footer
        title="Mj Inc"
      />
    </ThemeProvider>
  );
}