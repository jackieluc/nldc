import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import MailChimp from './MailChimp/MailChimp';
import Media from '../utils/media';
import Styles from '../utils/styles';
import WhiteNldcLogo from '../images/nldc2019-logo-white.png';
import '../images/calgary.jpg';

const HeroSection = styled.section`
  height: 85vh;
  background-image: linear-gradient( 135deg, rgba(116, 199, 217, 0.75) 40%, rgba(3, 126, 243, 0.75) 100%), url('../static/media/calgary.jpg');
  background-size: cover;
  background-position: center;
  -webkit-box-shadow: 0 4px 20px rgba(75, 97, 141, 0.4);
  box-shadow: 0 4px 20px rgba(75, 97, 141, 0.4);
  color: white;
`;

const LogoImage = styled.img`
  margin-top: auto;
  width: 250px;
  ${Media.tablet`width: 350px;`}
  ${Media.laptop`width: 450px;`}
`;

const Title = styled.h1`
  display: block;
  font-size: calc(24px + 46 * (100vw - 450px) / 900);
  ${Media.laptop`font-size: 2.5rem;`}
  line-height: 1;
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 300;

  span {
    display: block;
    text-align: center;
    margin: 0 auto;
    font-size: 1.5rem;
    font-size: calc(32px + 46 * (100vw - 450px) / 900);
    ${Media.laptop`font-size: 3.5rem;`}
  };
`;

const Info = styled.h3`
  display: block;
  max-width: 240px;
  font-size: 0.7rem;
  ${Media.tablet`font-size: 1rem; max-width: 320px;`}
  ${Media.desktop`font-size: 1.3rem; max-width: 400px;`}
  color: #FFFFFF;
  font-weight: normal;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 auto 1rem auto;
  padding: 5px;
  border: 2px solid white;
`;

const HeroMailChimp = styled(MailChimp)`
  margin-top: auto;
  margin-bottom: 1rem;
`;

const Hero = () => (
  <HeroSection>
    <Container style={{ marginTop: 'auto', padding: '0' }}>
      <LogoImage src={WhiteNldcLogo} alt="NLDC 2019 Logo" />
      <Title>
        AIESEC CANADA
        <span>
          National Leadership
        </span>
        <span>
          Development Conference
        </span>
      </Title>
      <Info>
        May 1&ndash;5, 2019 | Calgary, Alberta
      </Info>
    </Container>
    <HeroMailChimp customContent="Tickets Available in Spring 2019. Please Subscribe for Conference Updated!" />
  </HeroSection>
);

export default Hero;
