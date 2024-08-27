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




const defaultTheme = createTheme({

  palette:{
    background: {
      default:'#e0f2f1'
    }
  }
});

export default function Blog() {
  return (

      <main>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title='blog'  />
          <MainFeaturedPost  />
          <Grid container spacing={4}>
              <FeaturedPost />
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main/>
            <Sidebar />

             
          </Grid>
      </Container>
      <Footer
        title="Mj Inc"
        />
    </ThemeProvider>
        </main>
        
  );
}