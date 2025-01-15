import React from 'react';
import { Container, Typography, Box, Stack, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import './Shero.css'
import memoji from '.././assets/memoji.png'

const Shero = () => {
  return (
    <Container maxWidth='lg' sx={{ height: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Stack spacing={2} alignItems= 'center'  direction={{ xs: 'column', md: 'row' }} sx={{ mx:'auto', padding: {xs:'20px', sm: '0'} }} >
        <Box>
          <Typography variant="h4"  gutterBottom fontFamily='monospace' sx={{ fontSize: { xs: '5vw', md: '2.5vw' } }}>
            function <Box component="span" color="text.secondary">xinyiZhao</Box>() &#123;
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '5vw', md: '2.5vw' } }}>
            <pre> full-stack software engineer</pre>
          </Typography>

          <Typography variant="h4" gutterBottom fontFamily='monospace' sx={{ 
              fontSize: { xs: '5vw', md: '2.5vw' },
            }}>
            &#125;
          </Typography>

          <Typography variant="h5" gutterBottom fontFamily='monospace' sx={{ fontSize: { xs: '3vw', md: '1.5vw' } }}>
            console.log(github, resume)
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '3vw', md: '1.5vw' } }}>
            &gt;&gt;
            <Link href='https://github.com/smudgebaby' target="_blank" underline="none" color="inherit">
              <GitHubIcon className='icon' sx={{ width: {xs: '3.5vw', md: '2.5vw'}, height: {xs: '3.5vw', md:'2.5vw'} }} />
            </Link>

            <Link
              href="/Zoey Zhao resume.pdf"
              download="Zoey_Zhao_Resume.pdf"
              underline="none"
              color="inherit"
            >
              <SystemUpdateAltIcon className="icon" sx={{ width: {xs: '3.5vw', md: '2.5vw'}, height: {xs: '3.5vw', md:'2.5vw'} }} />
            </Link>
          </Typography>
        </Box>

        <Box component="img" src={memoji} alt="Memoji" sx={{ width: {xs: '40vw', md:'30vw'} }}>
        </Box>
      </Stack>
    </Container>
  );
};

export default Shero;
