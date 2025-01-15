import React from 'react';
import { Container, Typography, Stack, Box } from '@mui/material';

const About = () => {
  return (
    <Container 
      sx={{ maxWidth: {xs: 'sm', md: 'md', }, mb:'5rem', padding: '50px 40px' }}
      >

      <Typography variant="h4" component="h2" mb="3rem">
        About &#123;
      </Typography>
      <Stack container spacing={2} justifyContent="center" direction={{ xs: 'column', md: 'row' }}>
        
        <Box item xs={12} sm={4}>
          <Typography variant="body1" align="justify" fontFamily='monospace' sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
            I'm Xinyi, a full-stack software engineer. I enjoy tackling projects that allow me to innovate, grow, and make an impact through intuitive design and efficient engineering. 
          </Typography>
        </Box>

        <Box item xs={12} sm={8}>
          <Typography variant="body1" align="justify" fontFamily='monospace' sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
            I thrive in teams where collaboration, curiosity, and a shared vision for creating exceptional user experiences are the foundation.
            I love taking on projects that challenge me and push me outside my comfort zone. Whether it's creating dynamic front-end features, integrating complex APIs, or enhancing performance, I always look for opportunities to learn, adapt, and excel.
            <br/>
            <br/>
            When I'm not coding, you'll find me vlogging my travels, exploring new UI/UX design trends, or experimenting with ways to improve user interfaces.
            <br/>
            <br/>
            Here are a few technologies I've been working with recently:
            <br/>
            &gt;
            JavaScript + TypeScript
            <br/>
            &gt;
            React
            <br/>
            &gt;
            Vue 3
            <br/>
            &gt;
            Tailwind CSS / M-UI / SCSS
            <br/>
            &gt;
            NodeJS + Express
          </Typography>
        </Box>
      </Stack>
      
      <Typography variant="h4" fontFamily='monospace' mt='3rem'>
        &#125;
      </Typography>
    </Container>
  );
};

export default About;
