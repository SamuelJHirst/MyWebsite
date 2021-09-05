import React from 'react';
import bg from './bg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="bg-img" src={bg} alt="Background" />
      <div id="bg-overlay"></div>
      <div id="content">
        <h1>Back Soon!</h1>
        <h3>I'm in the process of improving my websites.</h3>
        <p>Lots of my websites use technologies which are no outdated. Upgrading them will make them faster, more resource friendly and more visually appealing.</p>
      </div>
    </div>
  );
}

export default App;
