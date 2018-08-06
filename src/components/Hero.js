import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../utils/media';

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: palevioletred;
  ${media.desktop`color: tomato;`}
`;

const HeroSection = styled.section`
  height: 85vh;
  background: papayawhip;
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
