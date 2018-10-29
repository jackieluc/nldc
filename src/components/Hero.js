import React from 'react';
import styled from 'styled-components';
import MailChimp from './MailChimp/MailChimp';
import Media from '../utils/media';
import WhiteNldcLogo from '../images/nldc2019-logo-white.png';
import '../images/princes-island-park.jpg';

const HeroSection = styled.section`
  height: 95vh;
  background: rgba(20,20,20,0.8);
  background: -webkit-linear-gradient(to bottom, rgba(20,20,20,0.8), rgba(20,20,20,0.8));
  background: linear-gradient(to bottom, rgba(20,20,20,0.8), rgba(20,20,20,0.8)), url('../static/media/princes-island-park.jpg');
  background-size: cover;
  background-position: center;
  -webkit-box-shadow: 0 4px 20px rgba(75, 97, 141, 0.4);
  box-shadow: 0 4px 20px rgba(75, 97, 141, 0.4);
  color: white;
  ${Media.desktop`padding-bottom: 2rem;`}
`;

const LogoImage = styled.img`
  margin-top: auto;
  width: 250px;
  ${Media.tablet`width: 350px;`}
  ${Media.laptop`width: 450px;`}
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  ${Media.medPhone`font-size: 1.6rem;`}
  ${Media.tablet`font-size: 1.8rem;`}
  ${Media.desktop`font-size: 2.5rem;`}
  line-height: 1;
  letter-spacing: 1px;
  margin: 0.5rem;
  font-weight: 300;
`;

const Title = styled.h1`
  width: 320px;
  font-size: 1.5rem;
  ${Media.medPhone`
    font-size: 1.9rem;
    width: 375px;
  `}
  ${Media.tablet`
    font-size: 2.5rem;
    width: 600px;
  `}
  ${Media.desktop`
    font-size: 3.5rem;
    width: 800px;
  `}
  line-height: 1;
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 300;
`;

const Info = styled.h3`
  display: block;
  font-size: 0.7rem;
  ${Media.tablet`font-size: 1rem;`}
  ${Media.desktop`font-size: 1.3rem;`}
  color: #FFFFFF;
  font-weight: normal;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  padding: 5px;
  border: 2px solid white;
`;

const HeroMailChimp = styled(MailChimp)`
  margin-top: auto;
  margin-bottom: 1rem;
  font-size: 0.7rem;
  ${Media.tablet`font-size: 1rem;`}
`;

const Hero = () => (
  <HeroSection>
    <LogoImage src={WhiteNldcLogo} alt="NLDC 2019 Logo" />
    <Subtitle>
      AIESEC CANADA
    </Subtitle>
    <Title>
      National Leadership Development Conference
    </Title>
    <Info>
      May 1&ndash;5, 2019 | Calgary, Alberta
    </Info>
    <HeroMailChimp />
  </HeroSection>
);

export default Hero;
