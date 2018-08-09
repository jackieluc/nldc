import React from 'react';
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

const Team = () => (
  <div className="team">
    <TeamSection>
      <Title>
        Welcome to Team
      </Title>
    </TeamSection>
    <p className="section team-intro">
      To get started, edit src/pages/Team.js and save to reload.
    </p>
  </div>
);

export default Team;
