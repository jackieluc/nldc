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
  -webkit-box-shadow: 0 4px 20px ${hexToRgba('#9BCDFF', 0.7)};
  box-shadow: 0 4px 20px ${hexToRgba('#9BCDFF', 0.7)};
  color: white;
  ${Media.desktop`padding-bottom: 2rem;`}
`;

const LogoImage = styled.img`
  width: 250px;
  ${Media.tablet`width: 350px;`}
  ${Media.laptop`width: 450px;`}
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  ${Media.tablet`font-size: 1.8rem;`}
  ${Media.desktop`font-size: 2.5rem;`}
  line-height: 1;
  letter-spacing: 1px;
  margin: 0.5rem;
  font-weight: lighter;
`;

const Title = styled.h1`
  width: 100%;
  ${Media.tablet`width: 75%;`}
  ${Media.laptop`width: 50%;`}
  font-size: 1.5rem;
  ${Media.bigPhone`font-size: 1.7rem;`}
  ${Media.tablet`font-size: 2.5rem;`}
  ${Media.desktop`font-size: 3.5rem;`}
  line-height: 1;
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: lighter;
`;

const Info = styled.h3`
  display: block;
  font-size: 0.8rem;
  ${Media.tablet`font-size: 1rem;`}
  ${Media.desktop`font-size: 1.3rem;`}
  color: ${Styles.textColour};
  font-weight: normal;
  line-height: 1;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
`;


const Hero = () => (
  <HeroSection>
    <LogoImage src={LogoNldc} alt="NLDC 2019 Logo" />
    <Subtitle>
      AIESEC CANADA
    </Subtitle>
    <Title>
      National Leadership Development Conference
    </Title>
    <Info>
      May 1&ndash;5, 2019 | Calgary, Alberta
    </Info>
  </HeroSection>
);

export default Hero;
