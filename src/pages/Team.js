import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: palevioletred;
`;

const TeamSection = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Team extends Component {
  render() {
    return (
      <div className="team">
        <TeamSection>
          <Title>
            Welcome to Tean
          </Title>
        </TeamSection>
        <p className="section team-intro">
          To get started, edit src/pages/Team.js and save to reload.
        </p>
      </div>
    );
  }
}

export default Team;
