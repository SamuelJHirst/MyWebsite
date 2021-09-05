import { makeStyles } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';
import EmailIcon from '@material-ui/icons/Email';

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
      maxWidth: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  email: {
    '& > *': { 
      fontSize: '150%',
    },
    '& > a': {
      marginLeft: 10,
      position: 'relative',
      top: '-5px',
      color: '#FFF',
      textDecoration: 'none',
      transition: 'ease all 200ms',
    },
    '& > a:hover': {
      color: '#AAA',
    },
  },
});

function Contact() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="A Street in Oxford">
      <div className={styles.root}>
        <h1>Can I help?</h1>
        <h2>Let me know if I can!</h2>
        <br />
        <p>My contact details are included in the sidebar on the left. I'd recommend emailing me over using social media.</p>
        <p>Whether you have a question or need some advice - or have a project you'd like me to undertake - I'd love to hear from you!</p>
        <br />
        <div className={styles.email}>
          <EmailIcon />
          <a href="mailto:sam@hirst.me">sam@hirst.me</a>
        </div>
      </div>
    </BackgroundOverlay>
  );
}

export default Contact;
