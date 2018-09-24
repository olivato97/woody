import React, { Component } from 'react';
import './App.css';
import Griglia from './componenti/griglia'
import Menu from './componenti/Menu'


class App extends Component {
  
  render() {
    return (
      <div>
      <Menu></Menu>
      <Griglia></Griglia>
      </div>
    );
  }
}

export default App;
