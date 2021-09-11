import { Accordion, AccordionDetails, AccordionSummary, Box, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import blog from './blog.json';
import background from './background.jpg';
import BackgroundOverlay from '../common/BackgroundOverlay';

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
        backgroundColor: '#121212',
    },
    primary: {
        color: '#FFF',
    },
    secondary: {
        color: 'rgba(255, 255, 255, 0.7)',
    },
    paragraph: {
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 0.7)',
    }
});

interface BlogPost {
    title: string;
    date: string;
    post: [string];
}

function Blog() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="Crook O'Lune Picnic Site">
        <Box p={2} className={styles.root}>
            {
                (blog as BlogPost[]).map((post: BlogPost, index: number) => (
                    <Accordion key={index} className={styles.header}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon className={styles.primary} />}>
                            <ListItem>
                                <ListItemText primary={post.title} secondary={post.date} classes={{primary: styles.primary, secondary: styles.secondary}}></ListItemText>
                            </ListItem>
                        </AccordionSummary>
                        <Box p={2} pt={0}>
                            {
                                post.post.map((paragraph: string, index: number) => (
                                    <AccordionDetails key={index} className={styles.paragraph}>
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
