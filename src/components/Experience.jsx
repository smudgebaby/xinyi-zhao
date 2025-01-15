import React from 'react';
import { Container, Box, Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import osuIcon from '.././assets/logo/osu.png';
import buIcon from '.././assets/logo/bu.png';
import appleIcon from '.././assets/logo/apple.png';
import artiskaiIcon from '.././assets/logo/artiskai.jpg';
import chuwaIcon from '.././assets/logo/chuwa.png';


const Experience = ({ lightMode }) => {
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
      <Typography variant="h4" component="h2" mb='2rem'>
        Experience &#123;
      </Typography>
      <TimeLine lightMode={lightMode} />

      <Typography variant="h4" fontFamily='monospace' mt='2rem'>
        &#125;
      </Typography>
    </Container>
  );
};

export default Experience;



function TimeLine({lightMode}) {
  const colors = {
    background: '#E4B1F0',
    background_dark: '#29293a',
    background_now: '#C8A1E0',
  }

  return (
    <VerticalTimeline
      layout="2-columns"
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        date="Oct 2023 - Present"
        iconStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        icon={<Box item xs={12} sm={4}>
        <Avatar
          alt="dark"
          src={chuwaIcon}
          sx={{ width: {lg:'3.5rem', xs: '2.5rem'}, height: {lg:'3.5rem', xs: '2.5rem'}, margin: 'auto', mt:{ lg:'3px', md: '0'} }}
        />
        </Box>}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Chuwa</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        date="2024"
        iconStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        icon={<Box item xs={12} sm={4}>
        <Avatar
          alt="dark"
          src={artiskaiIcon}
          sx={{ width: {lg:'3.5rem', xs: '2.5rem'}, height: {lg:'3.5rem', xs: '2.5rem'}, margin: 'auto',  mt:{ lg:'3px', md: '0'} }}
        />
        </Box>}
      >
        <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Artisk AI</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        date="Mar 2022 - July 2023"
        iconStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        icon={<Box item xs={12} sm={4}>
          <Avatar
            alt="dark"
            src={appleIcon}
            sx={{ width: {lg:'3.5rem', xs: '2.5rem'}, height: {lg:'3.5rem', xs: '2.5rem'}, margin: 'auto' }}
          />
        </Box>}
      >
        <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Apple</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        date="Sept 2020 - Jan 2022"
        iconStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        icon={<Box item xs={12} sm={4}>
          <Avatar
            alt="dark"
            src={buIcon}
            sx={{ width: {lg:'3rem', xs: '2rem'}, height: {lg:'3rem', xs: '2rem'}, margin: 'auto', p:'5px', mt:'5px' }}
          />
        </Box> }
      >
        <h3 className="vertical-timeline-element-title">Boston University</h3>
        <h4 className="vertical-timeline-element-subtitle">Master of Science</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        date="Aug 2016 - May 2020"
        iconStyle={lightMode? {background: `${colors.background}` }: { background: `${colors.background_dark}` }}
        icon={<Box item xs={12} sm={4}>
          <Avatar
            alt="dark"
            src={osuIcon}
            sx={{ width: {lg:'3.5rem', xs: '2.5rem'}, height: {lg:'3.5rem', xs: '2.5rem'}, margin: 'auto' }}
          />
          </Box> }
        >
        <h3 className="vertical-timeline-element-title">Ohio State University</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor of Science</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
