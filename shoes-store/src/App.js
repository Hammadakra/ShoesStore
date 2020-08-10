import React from 'react';
import './App.css';
import Routes from './Router.js';
import Header from './Header'
function App() {
  return (
    <div className="App">
    
      <Header></Header>
    
        <Routes/>
    </div>
  );
}

export default App;
