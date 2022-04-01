import './App.css';
import React from 'react';
import Header from './Components/Header/Header'
import MemeGenerator from './Components/MemeGenerator/MemeGenerator'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MemeGenerator></MemeGenerator>
    </div>
  );
}

export default App;
