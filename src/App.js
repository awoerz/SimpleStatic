import React, {useState} from 'react';
import Header from './Components/Header/Header';
import CardPalette from './Components/CardPalette/CardPalette';
import Modal from './Components/Modal/Modal';
import './Global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CardPalette />
    </div>
  );
}

export default App;