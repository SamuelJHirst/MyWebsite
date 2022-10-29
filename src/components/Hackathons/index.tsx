import { Box, Grid } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.png';
import Event from './Event';
import events from './events.json';

function Hackathons() {
  return (
    <BackgroundOverlay src={background} alt="Lots of people coding at HackZurich 2022">
      <Box 
        p={2} 
        style={{
          overflow: 'auto',
          height: '100%',
        }}
      >
        <Grid container spacing={2}>
          {
            events.map((event) => (
              <Event
                key={event.name}
                name={event.name}
                description={event.description}
                image={event.image}
                collaborators={event.collaborators}
                outcome={event.outcome}
                github={event.github}
              />
            ))
          }
        </Grid>
      </Box>
    </BackgroundOverlay>
  );
}

export default Hackathons;
