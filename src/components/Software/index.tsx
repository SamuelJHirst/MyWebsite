import { makeStyles } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

const useStyles = makeStyles({
  root: {

  },
});

function Software() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="Sam at a Hackathon in 2018">
      <div className={styles.root}>

      </div>
    </BackgroundOverlay>
  );
}

export default Software;
