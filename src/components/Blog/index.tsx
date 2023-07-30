import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ListItem,
    ListItemText,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

import BackgroundOverlay from '../common/BackgroundOverlay';

import './Blog.css';
import background from './background.jpg';
import blog from './blog.json';

interface BlogPost {
    content: [string];
    date: string;
    title: string;
}

function Blog() {
    return (
        <BackgroundOverlay
            src={background}
        >
            <Box
                className="blog"
                p={2}
            >
                {
                    (blog as BlogPost[]).map((post: BlogPost, index: number) => (
                        <Accordion
                            className="header"
                            key={index}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        className="primary"
                                    />
                                }
                            >
                                <ListItem>
                                    <ListItemText
                                        classes={{
                                            primary: "primary",
                                            secondary: "secondary",
                                        }}
                                        primary={post.title}
                                        secondary={post.date}
                                    />
                                </ListItem>
                            </AccordionSummary>
                            <Box
                                p={2}
                                pt={0}
                            >
                                {
                                    post.content.map((paragraph: string, index: number) => (
                                        <AccordionDetails
                                            className="paragraph"
                                            key={index}
                                        >
                                            {paragraph}
                                        </AccordionDetails>
                                    ))
                                }
                            </Box>
                        </Accordion>
                    ))
                }
            </Box>
        </BackgroundOverlay>
    );
}

export default Blog;
