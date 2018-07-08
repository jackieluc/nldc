import React, { Component } from 'react';
import logo from '../images/nldc2019-logo.png';
import '../styles/pages/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/pages/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
