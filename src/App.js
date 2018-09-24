import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button , Image } from 'semantic-ui-react'
import Griglia from './componenti/griglia'
import Menu from './componenti/Menu'


class App extends Component {
  
  render() {
    return (
      <div>
      <Menu></Menu>
      <Griglia></Griglia>
      <Image src="./immagini/maglietta.png"/>
        <Button>Click Here</Button>
      </div>
          
    );
  }
}

export default App;
