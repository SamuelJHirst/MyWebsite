import { makeStyles } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

const useStyles = makeStyles({
  root: {
    '& > h1': {
      fontSize: '4rem',
      marginTop: 0,
      marginBottom: 0,
    },
    '& > h2': {
      fontSize: '2rem',
      marginTop: 0,
      marginBottom: 0,
    },
    '& > *': {
      maxWidth: '75%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function Home() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="Sam in Tanzania">
      <div className={styles.root}>
        <h1>Hi, I'm Sam.</h1>
        <h2>Welcome to My Website!</h2>
        <br />
        <p>I am a web developer who likes to make stuff! This is my portfolio where I upload my projects - finished, in progress or abandoned.</p>
        <p>Want to know more? Click the About Me button on the sidebar!</p>
      </div>
    </BackgroundOverlay>
  );
}

export default Home;
