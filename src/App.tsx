import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Index } from './components/Launch/index';
import { LaunchIndexDetail } from './components/LaunchDetail/index';
import { Header } from './components/Header/Header';
import { MissionKey } from './components/MissionKey/MissionKey';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path='/' component={MissionKey} />
        <Route exact path='/' component={Index} />
        <Route exact path='/:launch' component={LaunchIndexDetail} />
      </Router>
    </div>
  );
}

export default App;