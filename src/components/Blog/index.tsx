import { Accordion, AccordionDetails, AccordionSummary, Box, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import blog from './blog.json';

const useStyles = makeStyles({
    root: {
        overflow: 'auto',
        height: '100%',
    },
    card: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    header: {
        textAlign: 'center',
        padding: 5
    },
});

interface BlogPost {
    title: string;
    date: string;
    post: [string];
}

function Blog() {
  const styles = useStyles();

  return (
    <Box p={2} className={styles.root}>
        {
            (blog as BlogPost[]).map((post: BlogPost) => (
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ListItem>
                            <ListItemText primary={post.title} secondary={post.date}></ListItemText>
                        </ListItem>
                    </AccordionSummary>
                    {
                        post.post.map((paragraph: string) => (
                            <AccordionDetails>
                                {paragraph}
                            </AccordionDetails>
                        ))
                    }
                </Accordion>
            ))
        }
    </Box>
  );
}

export default Blog;
