import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: palevioletred;
`;

const AboutSection = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const About = () => (
  <div className="about">
    <AboutSection>
      <Title>
        About Us
      </Title>
    </AboutSection>
    <p className="section about-intro">
      To get started, edit src/pages/About.js and save to reload.
    </p>
  </div>
);

export default About;
