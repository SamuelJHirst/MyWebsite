import { makeStyles } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

const useStyles = makeStyles({
  root: {

  },
});

function About() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="Scottish Parliament">
      <div className={styles.root}>

      </div>
    </BackgroundOverlay>
  );
}

export default About;
