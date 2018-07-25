import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from '../components/Hero';
import logo from '../images/nldc2019-logo.png';

const App = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const AppTitle = styled.h1`
  font-size 1.5em;
`;

const AppIntro = styled.p`
  font-size: large;
`;

class Home extends Component {
  render() {
    return (
      <App>
        <AppHeader>
          <AppLogo src={logo} className="App-logo" alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/pages/Home.js</code> and save to reload.
        </AppIntro>
        <Hero />
      </App>
    );
  }
}

export default Home;
