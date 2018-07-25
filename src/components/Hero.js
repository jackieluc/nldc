import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: palevioletred;
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
