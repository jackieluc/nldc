import React from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import '../images/princes-island-park.jpg';

const HeroSection = styled.section`
  height: 85vh;
  background: ${hexToRgba('#2bc0e4', 0.8)};
  background: -webkit-linear-gradient(to bottom, ${hexToRgba('#2bc0e4', 0.8)}, ${hexToRgba('#eaecc6', 0.7)});
  background: linear-gradient(to bottom, ${hexToRgba('#2bc0e4', 0.8)}, ${hexToRgba('#eaecc6', 0.7)}), url('../static/media/princes-island-park.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 6px rgba(75, 97, 141, 0.24);
  color: white;
`;

const Title = styled.h1`
  width: 25rem;
  text-align: left;
  line-height: 1;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h3`
  line-height: 1;
  letter-spacing: 1px;
  margin: 0.5rem;
  font-weight: normal;
`;

const DateInfo = styled.h2`
  line-height: 1;
  letter-spacing: 1px;
  margin: 1rem 0 0.5rem 0;
`;

const LocationInfo = styled.p`
  line-height: 1;
  letter-spacing: 1px;
  margin-top: 0;
`;

const Hero = () => (
  <HeroSection>
    <Title>
      Disrupting the now.
    </Title>
    <Subtitle>
      AIESEC Canada presents
    </Subtitle>
    <Subtitle>
      National Leadership Development Conference
    </Subtitle>
    <DateInfo>
      May 1st - 6th 2019
    </DateInfo>
    <LocationInfo>
      in Calgary, Alberta
    </LocationInfo>
  </HeroSection>
);

export default Hero;
