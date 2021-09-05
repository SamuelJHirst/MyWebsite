import { makeStyles } from '@material-ui/core';
import background from './background.jpg';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  background: {
    width: '100%',
    height: '100%',
    objectPosition: 'center',
    objectFit: 'cover',
  },
  overlay: {
    width: '75%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.6,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  content: {
    width: '75%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    color: '#CCC',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
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
      maxWidth: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
});

function About() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
        <img src={background} alt="Sam in Tanzania" className={styles.background} />
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>Hi, I'm Sam.</h1>
          <h2>Welcome to My Website!</h2>
          <br />
          <p>I am a web developer who likes to make stuff! This is my portfolio where I upload my projects - finished, in progress or abandoned. You'll also find my blog here too.</p>
          <p>Want to know more? Click the About Me button on the sidebar!</p>
        </div>
    </div>
  );
}

export default About;
