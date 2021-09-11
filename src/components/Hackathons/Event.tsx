import { makeStyles, Button, Card, CardActions, CardContent, Grid, ListItemText, Typography } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        padding: 8,
    },
    buttons: {
        justifyContent: 'center',
    },
    cell: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    icon: {
        margin: 'auto',
        color: 'rgba(255, 255, 255, 0.7)',
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
});

interface EventProps {
    event: {
        title: string;
        event: string;
        content: [string, string, string];
        github?: string;
        website?: string;
    }
}

function Event(props: EventProps) {
  const { title, event, content, github, website } = props.event;
  const styles = useStyles();

  return (
    <Grid item xs={12} className={styles.root}>
        <Card className={styles.header}>
            <CardContent>
                <ListItemText primary={title} secondary={event} classes={{primary: styles.primary, secondary: styles.secondary}}></ListItemText>
                <Grid container>
                    <Grid item xs={3} className={styles.cell}>
                        <Typography variant="body2" className={styles.secondary}>{content[0]}</Typography>
                    </Grid>
                    <Grid item xs={1} className={styles.cell}>
                        <ArrowRight className={styles.icon} />
                    </Grid>
                    <Grid item xs={4} className={styles.cell}>
                        <Typography variant="body2" className={styles.secondary}>{content[1]}</Typography>
                    </Grid>
                    <Grid item xs={1} className={styles.cell}>
                        <ArrowRight className={styles.icon} />
                    </Grid>
                    <Grid item xs={3} className={styles.cell}>
                        <Typography variant="body2" className={styles.secondary}>{content[2]}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={styles.buttons}>
                {
                    github
                    ? <Button size="small" color="secondary" href={github} target="_blank" rel="noreferrer">GitHub</Button>
                    : <></>
                }
                {
                    website
                    ? <Button size="small" color="secondary" href={website} target="_blank" rel="noreferrer">Demo</Button>
                    : <></>
                }
            </CardActions>
        </Card>
    </Grid>
  );
}

export default Event;
