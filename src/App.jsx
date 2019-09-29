// react
import React from 'react';
// router
import { Route, Switch } from 'react-router-dom';
// components
import Sidebar from './components/Sidebar';
// components
import Balances from './components/Balances';
import Card from './components/Card';
import Header from './components/Header';
import Transfers from './components/Transfers';
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
          <Switch>
            <Route exact path="/" component={Card}  />
            <Route exact path="/balances" component={Balances}  />
            <Route exact path="/transfers" component={Transfers}  />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
