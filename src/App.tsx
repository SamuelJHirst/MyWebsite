import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Music from './components/Music';
import Sidebar from './components/Sidebar';
import Software from './components/Software';

const useStyles = makeStyles({
  wrapper: {
    height: '100%',
    overflow: 'hidden',
  },
  sidebar: {
    backgroundColor: '#212121',
    height: '100%',
  },
  main: {
    backgroundColor: '#607d8b',
    height: '100%',
  },
});

function App() {
  const [page, setPage] = useState(0);
  const styles = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Grid container className={styles.wrapper}>
        <Grid item xs={3} className={styles.sidebar}>
          <Sidebar page={page} setPage={setPage} />    
        </Grid>
        <Grid item xs={9} className={styles.main}>
          { page === 0 ? <Home /> : <></> }
          { page === 1 ? <About /> : <></> }
          { page === 2 ? <Software /> : <></> }
          { page === 3 ? <Music /> : <></> }
          { page === 4 ? <Blog /> : <></> }
          { page === 5 ? <Contact /> : <></> }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
