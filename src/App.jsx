// react
import React from 'react';
// components
import Sidebar from './components/Sidebar';
// components
import Card from './components/Card';
import Header from './components/Header';
import Menu from './components/Menu';
// style
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <div className="sbar">
          <Header />
          <Sidebar />
        </div>
        <div className="menubar">
          <Menu />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
