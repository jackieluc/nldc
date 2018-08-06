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

class Team extends Component {
  render() {
    return (
      <div className="team">
        <Wrapper>
          <Title>
            Welcome to Tean
          </Title>
        </Wrapper>
        <p className="team-intro">
          To get started, edit <code>src/pages/Team.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Team;
