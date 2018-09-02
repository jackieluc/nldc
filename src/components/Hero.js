import React from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import Media from '../utils/media';
import Styles from '../utils/styles';
import LogoNldc from '../images/nldc2019-logo.png';
import '../images/princes-island-park.jpg';

const HeroSection = styled.section`
  height: 85vh;
  background: ${hexToRgba('#2BC0E4', 0.8)};
  background: -webkit-linear-gradient(to bottom, ${hexToRgba('#2BC0E4', 0.8)}, ${hexToRgba('#EAECC6', 0.7)});
  background: linear-gradient(to bottom, ${hexToRgba('#2BC0E4', 0.8)}, ${hexToRgba('#EAECC6', 0.7)}), url('../static/media/princes-island-park.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 6px rgba(75, 97, 141, 0.4);
  color: white;
  ${Media.desktop`padding-bottom: 2rem;`}
`;

const LogoImage = styled.img`
  width: 250px;
  ${Media.tablet`width: 350px;`}
  ${Media.laptop`width: 450px;`}
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  ${Media.desktop`font-size: 2rem;`}
  line-height: 1;
  letter-spacing: 1px;
  margin: 0.5rem;
  font-weight: lighter;
`;

const Title = styled.h1`
  width: 100%;
  ${Media.tablet`width: 50%;`}
  font-size: 2rem;
  ${Media.laptop`font-size: 2.5rem;`}
  ${Media.desktop`font-size: 4rem;`}
  line-height: 1;
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: lighter;
`;

const InfoWrapper = styled.div`
  display: block;
  ${Media.tablet`display: inline-flex;`}
  
  & > h3 {
    font-size: 1rem;
    ${Media.desktop`font-size: 1.5rem;`}
    font-weight: normal;
    line-height: 1;
    letter-spacing: 1px;
    margin: 0;
  }
`;

const DateInfo = styled.h3`
  color: ${Styles.lightRed};
`;

const LocationInfo = styled.h3`
  ${Media.tablet`margin-left: 1rem !important;`}
  color: ${Styles.themeColour};
`;

const Hero = () => (
  <HeroSection>
    <LogoImage src={LogoNldc} alt="NLDC 2019 Logo" />
    <Subtitle>
      AIESEC CANADA&apos;S
    </Subtitle>
    <Title>
      National Leadership Development Conference
    </Title>
    <InfoWrapper>
      <DateInfo>
        May 1st&ndash;5th 2019
      </DateInfo>
      <LocationInfo>
        Calgary, Alberta
      </LocationInfo>
    </InfoWrapper>
  </HeroSection>
);

export default Hero;
