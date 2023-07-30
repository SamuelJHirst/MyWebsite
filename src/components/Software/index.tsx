import {
    Box,
    Grid,
} from '@mui/material';

import BackgroundOverlay from '../common/BackgroundOverlay';
import Project from './Project';

import background from './background.jpg';
import projects from './projects.json';

function Software() {
    return (
        <BackgroundOverlay
            src={background}
        >
            <Box
                p={2}
                style={{
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                <Grid
                    container
                    spacing={2}
                >
                    {
                        projects.map((project) => (
                            <Project
                                key={project.name}
                                dates={project.dates}
                                demo={project.demo}
                                description={project.description}
                                github={project.github}
                                image={project.image}
                                language={project.language}
                                name={project.name}
                                status={project.status}
                            />
                        ))
                    }
                </Grid>
            </Box>
        </BackgroundOverlay>
    );
}

export default Software;
