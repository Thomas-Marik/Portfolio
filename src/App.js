import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar'
import Navigation from './components/Navigation/Navigation';

const App=()=> {
  return (
    <div className="app">
      <div className='navbar'>
        <NavBar/>
      </div>
      <div className='content'>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
