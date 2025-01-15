import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, Avatar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import lightModeImg from '.././assets/modeIcon/light.png';
import darkModeImg from '.././assets/modeIcon/dark.webp';


const Header = ({ setLight, light, onScrollTo, refs }) => {
  const { homeRef, aboutRef, experienceRef, contactRef } = refs;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = (ref) => {
    onScrollTo(ref);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ backgroundColor: 'rgba(0, 0, 0, .3)' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Button onClick={() => setLight((prev) => !prev)} color="inherit">
              {light ? (
                <Box>
                  Dark mode
                  <Avatar
                    alt="dark"
                    src={lightModeImg}
                    style={{ width: 50, height: 50, margin: 'auto' }}
                  />
                </Box>
              ) : (
                <Box>
                  Light Mode
                  <Avatar
                    alt="dark"
                    src={darkModeImg}
                    style={{ width: 50, height: 50, margin: 'auto' }}
                  />
                </Box>
              )}
            </Button>
          </Typography>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" onClick={() => onScrollTo(homeRef)}>Home</Button>
            <Button color="inherit" onClick={() => onScrollTo(aboutRef)}>About</Button>
            <Button color="inherit" onClick={() => onScrollTo(experienceRef)}>Experience</Button>
            <Button color="inherit" onClick={() => onScrollTo(contactRef)}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            color: 'white',
          },
        }}
      >
        <Box sx={{ width: 200 }}>
          <List>
            <ListItem button onClick={() => handleNavigation(homeRef)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation(aboutRef)}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation(experienceRef)}>
              <ListItemText primary="Experience" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation(contactRef)}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
