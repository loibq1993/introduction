import React from 'react';
import Header from './component/header';
import Wrapper from './component/wrapper';
import About from './component/about';
import Skill from './component/skill';
import Blog from './component/blog';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper />
      <About />
      <Skill />
      <Blog />
    </div>
  );
}

export default App;
