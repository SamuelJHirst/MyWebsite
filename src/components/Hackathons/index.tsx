import { Box, Grid } from '@mui/material';

import BackgroundOverlay from '../common/BackgroundOverlay';
import Event from './Event';

import background from './background.png';
import events from './events.json';

function Hackathons() {
    return (
        <BackgroundOverlay src={background} alt="">
            <Box
                p={2}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    overflow: 'auto',
                }}
            >
                <Box
                    style={{
                        maxHeight: '100%',
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
            </Box>
        </BackgroundOverlay>
    );
}

export default Hackathons;
