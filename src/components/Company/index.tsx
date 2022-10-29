import { makeStyles } from '@material-ui/core';
import BackgroundOverlay from '../common/BackgroundOverlay';
import background from './background.jpg';

const useStyles = makeStyles({
  root: {
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
    '& > p > a': {
      color: '#FFF',
      transition: 'ease all 200ms',
    },
    '& > p > a:hover': {
      color: '#AAA',
    },
  },
});

function Company() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="A Path in a Field">
      <div className={styles.root}>
        <h2>Introducing Naeviant Software...</h2>
        <br />
        <p>I'm proud to announce that I have founded my own software enginnering company: Naeviant Software.</p>
        <p>The company will be creating bespoke websites and desktop software for paying clients, as well as creating some projects of its own for wider use.</p>
        <p>For more information, check out the company website <a href="https://naeviant.com" rel="noreferrer" target="_blank">here</a>.</p>
      </div>
    </BackgroundOverlay>
  );
}

export default Company;
