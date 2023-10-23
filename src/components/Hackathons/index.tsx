import {
    Box,
    Grid,
} from '@mui/material';

import BackgroundOverlay from '../common/BackgroundOverlay';
import Event from './Event';

import background from './background.png';
import events from './events.json';

function Hackathons() {
    return (
        <BackgroundOverlay
            src={background}
        >
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
                    <Grid
                        container
                        spacing={2}
                        style={{
                            paddingBottom: '16px',
                        }}
                    >
                        {
                            events.map((event) => (
                                <Event
                                    collaborators={event.collaborators}
                                    description={event.description}
                                    github={event.github}
                                    key={event.name}
                                    image={event.image}
                                    name={event.name}
                                    outcome={event.outcome}
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
