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

const Lorem = styled.p`
  max-width: 25vw;
  margin: auto;
  padding: 1rem;
`;

class Home extends Component {
  render() {
    return (
      <App>
        <AppHeader>
          <AppLogo src={logo} className="App-logo" alt="logo" />
          <AppTitle>Welcome to NLDC 2019</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/pages/Home.js</code> and save to reload.
        </AppIntro>
        <Hero />
        <Lorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Etiam dignissim diam quis enim lobortis scelerisque. Suspendisse ultrices gravida dictum fusce ut placerat orci. At quis risus sed vulputate odio. Ultrices eros in cursus turpis massa tincidunt dui ut. Donec pretium vulputate sapien nec sagittis. Non nisi est sit amet. Augue eget arcu dictum varius duis at consectetur lorem.

        Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Ante metus dictum at tempor. Odio morbi quis commodo odio. Faucibus in ornare quam viverra orci sagittis eu volutpat. Non arcu risus quis varius quam. Pretium fusce id velit ut tortor. Eu volutpat odio facilisis mauris sit amet massa vitae. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Nulla facilisi nullam vehicula ipsum a. Diam quis enim lobortis scelerisque fermentum. In egestas erat imperdiet sed euismod nisi porta lorem. Augue eget arcu dictum varius duis. Tincidunt id aliquet risus feugiat in ante metus dictum at. Pretium viverra suspendisse potenti nullam ac. Magna fringilla urna porttitor rhoncus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae.
        </Lorem>
      </App>
    );
  }
}

export default Home;
