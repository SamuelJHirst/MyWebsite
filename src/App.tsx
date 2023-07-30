import { CssBaseline, Fab, Grid, Hidden } from '@mui/material';
import { Menu, MenuOpen } from '@mui/icons-material';
import { useState } from 'react';

import About from './components/About';
import Blog from './components/Blog';
import Company from './components/Company';
import Contact from './components/Contact';
import Hackathons from './components/Hackathons';
import Home from './components/Home';
import Music from './components/Music';
import Sidebar from './components/Sidebar';
import Software from './components/Software';

import './App.css';

function App() {
    const [page, setPage] = useState(0);
    const [navigation, showNavigation] = useState(false);

    return (
        <div className="App">
            <CssBaseline />
            <Grid container className="wrapper">
                <Hidden smDown>
                    <Grid item md={3} className="sidebar">
                        <Sidebar page={page} setPage={setPage} showNavigation={showNavigation} />
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    {
                        navigation ?
                            <Grid item xs={12} className="sidebar">
                                <Sidebar page={page} setPage={setPage} showNavigation={showNavigation} />
                            </Grid>
                            : <></>
                    }
                </Hidden>
                {
                    navigation ? <></> :
                        <Grid item md={9} xs={12} className="main">
                            {page === 0 ? <Home /> : <></>}
                            {page === 1 ? <About /> : <></>}
                            {page === 2 ? <Software /> : <></>}
                            {page === 3 ? <Music /> : <></>}
                            {page === 4 ? <Hackathons /> : <></>}
                            {page === 5 ? <Blog /> : <></>}
                            {page === 6 ? <Company /> : <></>}
                            {page === 7 ? <Contact /> : <></>}
                        </Grid>
                }
                <Hidden mdUp>
                    {
                        navigation
                            ?
                            <Fab color="secondary" aria-label="Navigation" className="fab" onClick={() => { showNavigation(false); }}>
                                <MenuOpen />
                            </Fab>
                            :
                            <Fab color="secondary" aria-label="Navigation" className="fab" onClick={() => { showNavigation(true); }}>
                                <Menu />
                            </Fab>
                    }
                </Hidden>
            </Grid>
        </div>
    );
}

export default App;
