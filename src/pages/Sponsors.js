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

class Home extends Component {
  render() {
    return (
      <div className="sponsors">
        <Wrapper>
          <Title>
            Welcome to Sponsors
          </Title>
        </Wrapper>
        <p className="sponsors-intro">
          To get started, edit <code>src/pages/Sponsors.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
