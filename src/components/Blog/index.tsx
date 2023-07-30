import { Accordion, AccordionDetails, AccordionSummary, Box, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import BackgroundOverlay from '../common/BackgroundOverlay';

import './Blog.css';
import blog from './blog.json';
import background from './background.jpg';

interface BlogPost {
    title: string;
    date: string;
    post: [string];
}

function Blog() {
  return (
    <BackgroundOverlay src={background} alt="">
        <Box p={2} className="blog">
            {
                (blog as BlogPost[]).map((post: BlogPost, index: number) => (
                    <Accordion key={index} className="header">
                        <AccordionSummary expandIcon={<ExpandMoreIcon className="primary" />}>
                            <ListItem>
                                <ListItemText primary={post.title} secondary={post.date} classes={{primary: "primary", secondary: "secondary"}}></ListItemText>
                            </ListItem>
                        </AccordionSummary>
                        <Box p={2} pt={0}>
                            {
                                post.post.map((paragraph: string, index: number) => (
                                    <AccordionDetails key={index} className="paragraph">
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
