import { makeStyles } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

const useStyles = makeStyles({
  root: {

  },
});

function Contact() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="A Street in Oxford">
      <div className={styles.root}>

      </div>
    </BackgroundOverlay>
  );
}

export default Contact;
