import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Blog from './components/Blog';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

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
          <Sidebar setPage={setPage} />    
        </Grid>
        <Grid item xs={9} className={styles.main}>
          { page === 0 ? <Home /> : <></> }
          { page === 3 ? <Blog /> : <></> }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
