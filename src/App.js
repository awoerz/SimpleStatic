import React from 'react';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import CardPalette from './Components/CardPalette/CardPalette';
import './Global.css'
import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <CardPalette />
    </div>
  );
}

export default App;
