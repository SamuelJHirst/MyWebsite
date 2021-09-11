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
  },
});

function Software() {
  const styles = useStyles();

  return (
    <BackgroundOverlay src={background} alt="Sam at a Hackathon in 2018">
      <div className={styles.root}>
        <h2>Still Under Development...</h2>
        <br />
        <p>In the old version of this website, I had nine projects listed. Some of these were old Hackathon solutions, some were games and some were intended as useful applications. Sadly, some of them now use technologies which are now widely considered outdated. Others were uploaded but unfinished.</p>
        <p>This website is intended to show off the best of my work. So I have decided to pull all of them down for now while I improve them. Come back soon to see them!</p>
        <p>For now though, I hope this website is a sufficient demonstration of my work. Please get in touch if you'd like to see more!</p>
      </div>
    </BackgroundOverlay>
  );
}

export default Software;
