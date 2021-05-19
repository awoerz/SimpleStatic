import React from 'react';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import './Global.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Button label='test'/>
    </div>
  );
}

export default App;
