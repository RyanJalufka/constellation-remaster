import React, { Component } from 'react';
import MonthDropdown from './components/MonthDropdown';
import Constellation from './components/Constellation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonthDropdown />
        <Constellation />
      </div>
    );
  }
}

export default App;
