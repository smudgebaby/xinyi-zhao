import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useRef, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Header from './components/Header';
import Shero from './components/Shero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#D4BEE4"
    },
    text: {
      primary: "#000000",
      secondary: "#9e56ff"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#1a1a24"
    },
    text: {
      primary: "#ffffff",
      secondary: "#9e56ff"
    }
  }
});

function App() {
  const [light, setLight] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setShowBackToTop(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Header setLight={setLight} light={light} onScrollTo={scrollToSection} refs={{ homeRef, aboutRef, experienceRef, contactRef }} />
      <div ref={homeRef}><Shero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={experienceRef}><Experience lightMode={light} /></div>
      <div ref={contactRef}><Contact /></div>
      
      {showBackToTop && (
        <Fab
          size="small"
          onClick={() => scrollToSection(homeRef)}
          sx={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </ThemeProvider>
  );
}

export default App;
