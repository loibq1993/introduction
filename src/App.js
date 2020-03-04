import React from 'react';
import Header from './component/header';
import Wrapper from './component/wrapper';
import About from './component/about';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper />
      <About />
    </div>
  );
}

export default App;
