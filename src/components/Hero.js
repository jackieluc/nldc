import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../utils/media';

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: palevioletred;
  ${media.desktop`color: red;`}
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Disrupt the now!
        </Title>
      </Wrapper>
    );
  }
}

export default Hero;
