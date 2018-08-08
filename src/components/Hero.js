import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../utils/media';
import hexToRgba from 'hex-to-rgba';
import '../images/princes-island-park.jpg';

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: palevioletred;
  ${media.desktop`color: white;`}
`;

const HeroSection = styled.section`
  height: 85vh;
  background: ${hexToRgba('#9CECFB', 0.8)};
  background: -webkit-linear-gradient(to right, ${hexToRgba('#0052D4', 0.8)}, ${hexToRgba('#65C7F7', 0.8)}, ${hexToRgba('#9CECFB', 0.8)});
  background: linear-gradient(to right, ${hexToRgba('#0052D4', 0.8)}, ${hexToRgba('#65C7F7', 0.8)}, ${hexToRgba('#9CECFB', 0.8)}), url('../static/media/princes-island-park.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 6px rgba(75, 97, 141, 0.24);
  color: white;
`;

class Hero extends Component {
  render() {
    return (
      <HeroSection>
        <Title>
          Disrupt the now!
        </Title>
      </HeroSection>
    );
  }
}

export default Hero;
