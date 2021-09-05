import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles({
  wrapper: {
    height: '100%',
  },
  sidebar: {
    backgroundColor: '#212121',
    height: '100%',
  },
  main: {
    backgroundColor: '#81d4fa',
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
          
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
