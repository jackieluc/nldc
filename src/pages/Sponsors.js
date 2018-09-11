import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: palevioletred;
`;

const SponsorSection = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Sponsors = () => (
  <div className="about">
    <SponsorSection>
      <Title>
        Sponsors
      </Title>
    </SponsorSection>
    <p className="section about-intro">
      To get started, edit src/pages/Sponsors.js and save to reload.
    </p>
  </div>
);

export default Sponsors;
