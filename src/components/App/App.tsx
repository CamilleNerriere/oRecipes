import { useState } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Content from '../Content/Content';

function App() {
  return (
    <div className="container">
      <Nav />
      <Content />
    </div>
  );
}

export default App;
