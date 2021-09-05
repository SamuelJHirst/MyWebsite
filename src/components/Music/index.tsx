import { makeStyles } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

const useStyles = makeStyles({
  root: {

  },
});

function Music() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="A Path in a Field">
      <div className={styles.root}>

      </div>
    </BackgroundOverlay>
  );
}

export default Music;
