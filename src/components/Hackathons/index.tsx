import { makeStyles, Grid } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';
import Event from './Event';
import hackathons from './hackathons.json';

const useStyles = makeStyles({
  root: {
    padding: 16,
    overflow: 'auto',
    height: '100%',
  },
});

interface EventInfo {
  title: string;
  event: string;
  content: [string, string, string];
  github?: string;
  website?: string;
}

function Hackathons() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="Scottish Parliament">
      <Grid container className={styles.root}>
        {
          (hackathons as EventInfo[]).map((event: EventInfo, index: number) => (
            <Event key={index} event={event} />
          ))
        }
      </Grid>
    </BackgroundOverlay>
  );
}

export default Hackathons;
