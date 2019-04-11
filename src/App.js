import React, { Component } from 'react';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.directLine = new DirectLine({ token: 'lxF61qhvCmc.dAA.NQBBADkANAB4ADgAdAA4AEkARAAyADgARABEAHEAMQBNAGIAUQBPAEIARwAtADMA.1-rPJ5zw1AE.e1G9biwEPyM.imv-_317JzaRy2WznVmhdN6etbqIC803qM1rsb9hKIU' });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ReactWebChat directLine={this.directLine} userID='30da83b6-d9a7-4455-9d8f-cf8b639a629e'/>
      </div>
    );
  }
}

export default App;
