import React from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import '../images/princes-island-park.jpg';

const HeroSection = styled.section`
  height: 85vh;
  background: ${hexToRgba('#2BC0E4', 0.7)};
  background: -webkit-linear-gradient(to bottom, ${hexToRgba('#2BC0E4', 0.7)}, ${hexToRgba('#EAECC6', 0.6)});
  background: linear-gradient(to bottom, ${hexToRgba('#2BC0E4', 0.7)}, ${hexToRgba('#EAECC6', 0.6)}), url('../static/media/princes-island-park.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 6px rgba(75, 97, 141, 0.4);
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
      May 1st - 5th 2019
    </DateInfo>
    <LocationInfo>
      in Calgary, Alberta
    </LocationInfo>
  </HeroSection>
);

export default Hero;
