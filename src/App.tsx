import { CssBaseline, Fab, Grid, Hidden, makeStyles } from '@material-ui/core';
import { Menu, MenuOpen } from '@material-ui/icons';
import { useState } from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Hackathons from './components/Hackathons';
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
  fab: {
    position: 'fixed',
    top: 8,
    left: 8,
    opacity: 0.5
  }
});

function App() {
  const [page, setPage] = useState(0);
  const [navigation, showNavigation] = useState(false);
  const styles = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Grid container className={styles.wrapper}>
        <Hidden smDown>
          <Grid item md={3} className={styles.sidebar}>
            <Sidebar page={page} setPage={setPage} showNavigation={showNavigation} />    
          </Grid>
        </Hidden>
        <Hidden mdUp>
          {
            navigation ?
            <Grid item xs={12} className={styles.sidebar}>
              <Sidebar page={page} setPage={setPage} showNavigation={showNavigation} />    
            </Grid>
            : <></>
          }
        </Hidden>
        {
          navigation ? <></> :
          <Grid item md={9} xs={12} className={styles.main}>
            { page === 0 ? <Home /> : <></> }
            { page === 1 ? <About /> : <></> }
            { page === 2 ? <Software /> : <></> }
            { page === 3 ? <Music /> : <></> }
            { page === 4 ? <Hackathons /> : <></> }
            { page === 5 ? <Blog /> : <></> }
            { page === 6 ? <Contact /> : <></> }
          </Grid>
        }
        <Hidden mdUp>
          {
            navigation
            ?
            <Fab color="secondary" aria-label="Navigation" className={styles.fab} onClick={() => { showNavigation(false); }}>
              <MenuOpen />
            </Fab>
            :
            <Fab color="secondary" aria-label="Navigation" className={styles.fab} onClick={() => { showNavigation(true); }}>
              <Menu />
            </Fab>
          }
        </Hidden>
      </Grid>
    </div>
  );
}

export default App;
