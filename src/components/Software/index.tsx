import { Box, Grid } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';
import Project from './Project';
import projects from './projects.json';

function Software() {
  return (
    <BackgroundOverlay src={background} alt="Stock photo of code">
      <Box 
        p={2} 
        style={{
          overflow: 'auto',
          height: '100%',
        }}
      >
        <Grid container spacing={2}>
          {
            projects.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                description={project.description}
                image={project.image}
                status={project.status}
                language={project.language}
                dates={project.dates}
                github={project.github}
                demo={project.demo}
              />
            ))
          }
        </Grid>
      </Box>
    </BackgroundOverlay>
  );
}

export default Software;
