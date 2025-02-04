import React from 'react';
import { Container, Box, Stack, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  return (
    <Container 
      sx={{
        maxWidth: {
          xs: 'sm',
          md: 'md',
        },
        my: '5rem',
        padding: '50px 40px'
      }} 
      >
      <Typography variant="h4" component="h2" mb="3rem">
        Contact &#123;
      </Typography>

      <Stack spacing={2} justifyContent="center" >
        
        <Box item xs={12} sm={4}>
          <Typography variant="body1" align="justify" fontFamily='monospace' sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, ml: '0.5rem', mb:'5rem' }}>
            Please reach out to me at <Link href={`mailto:victoriazhao.dev@gmail.com`} color='text.secondary'>victoriazhao.dev@gmail.com</Link> for inquiries 
          </Typography>

          <Typography gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.3rem' }, fontFamily:'monospace', '&:hover':{color: 'text.secondary'}, }}>
            <Link href='https://github.com/smudgebaby' target="_blank" underline="none" color="inherit">
              <GitHubIcon className='icon' /> smudgebaby
            </Link>
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.3rem' }, fontFamily:'monospace', '&:hover':{color: 'text.secondary'}, }} >
            <Link href={`mailto:victoriazhao.dev@gmail.com`} underline="none" color="inherit">
              <MailOutlineIcon className='icon' /> victoriazhao.dev@gmail.com
            </Link>
          </Typography>
        </Box>

      </Stack>

      <Typography variant="h4" fontFamily='monospace' mt='3rem'>
        &#125;
      </Typography>
    </Container>
  );
};

export default Contact;