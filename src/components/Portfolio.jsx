import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1', imageUrl: '/path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description of Project 2', imageUrl: '/path/to/image2.jpg' },
    // Add more projects
  ];

  return (
    <Container maxWidth="lg" style={{ padding: '50px 0' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        My Work
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
