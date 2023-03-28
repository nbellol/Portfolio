import React, { useState } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [shownView, setShownView] = useState<string>('About')
  return (
    <div className="App">
      <NavBar setView={setShownView}/>
      {shownView === 'About' ? <About/> : null}
      {shownView === 'Skill' ? <Skill/> : null}
      {shownView === 'Projects' ? <Projects/> : null}
    </div>
  );
}

export default App;
