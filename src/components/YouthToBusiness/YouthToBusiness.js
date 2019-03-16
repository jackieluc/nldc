import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Media from '../../utils/media';
import Styles from '../../utils/styles';
import Testimonials from './Testimonials';

const Wrapper = styled.section`
  ${Media.laptop`
    margin-top: 3rem;
  `}
`;

const CenteredRow = styled(Row)`
  justify-content: center;
`;

const LogoWrapper = styled.div`
  width: 290px;
  margin: 0 auto;

  ${Media.laptop`
    width: 380px;
  `}
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: ${Styles.themeColour};
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  
  ${Media.tablet`
    text-align: left;
    font-size: 1.75rem;
    padding: 0 10px;
  `}
`;

const PrimaryCTA = styled.a`
  display: inline-block;
  border-radius: 40px;
  padding: .7rem 2rem;
  margin: 0;
  color: white;
  border: none;
  background-color: ${Styles.lightRed};
  ${Styles.shadow}

  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: ${Styles.red};
    cursor: pointer;
    text-decoration: none;
  }
`;

const SecondaryCTA = styled(PrimaryCTA)`
  color: ${Styles.lightRed};
  background-color: white;
  margin-top: 20px;
  
  ${Media.tablet`
    margin-left: 20px;
  `}
`;

const IframeWrapper = styled.div`
  display: none;
  ${Media.tablet`
    display: block;
    margin-top: 3rem;
    margin-bottom: 2rem;
  `}
  ${Media.laptop`
    margin-top: 2rem;
    margin-bottom: 0;
  `}

  iframe {
    ${Styles.shadow}
    ${Media.laptop`
      width: 440px;
      height: 247.5px;
    `}
    ${Media.desktop`
      width: 480px;
      height: 270px;
    `}
  }
`;

const BgOffset = styled.div`
  background-color: rgb(207, 66, 79);
  position: absolute;
  margin-top: 2rem;
  top: 35px;
  bottom: 0px;
  z-index: -1;

  ${Media.tablet`
    width: 480px;
    height: 270px;
    right: 40px;
  `}
  ${Media.laptop`
    width: 440px;
    height: 247.5px;
    top: 15px;
    right: 5px;
  `}
  ${Media.desktop`
    width: 480px;
    height: 270px;
    top: 15px;
    right: 25px;
  `}
`;

const ResponsiveSvg = styled.svg`
  position: absolute;
  left: 15px;
  width: 290px;
  height: 290px;
  margin-top: 2rem;
  display: none;

  ${Media.tablet`
    display: block;
    left: -60px;
    top: 120px;
    width: 390px;
    height: 390px;
  `}

  ${Media.laptop`
    left: -60px;
    top: 0;
    width: 470px;
    height: 470px;
    float: left;
  `}
`;

const TestimonialBackground = () => (
  <ResponsiveSvg viewBox="0 0 470 470" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="235" cy="235" r="235" fill="url(#paint0_linear)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="68.4361" y1="86.1787" x2="399.753" y2="406.271" gradientUnits="userSpaceOnUse">
        <stop stopColor="#30C39F"/>
        <stop offset="1" stopColor="#037EF3"/>
      </linearGradient>
    </defs>
  </ResponsiveSvg>
);

const PageQuery = graphql`
  query {
    y2blogo: file(relativePath: { eq: "youthtobusiness/youthtobusiness.png" }) {
      childImageSharp {
        fluid(maxWidth: 380) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;

const YouthToBusiness = (props) => (
  <StaticQuery
    query={PageQuery}
    render={data => (
      <Wrapper>
        <Container>
          <CenteredRow>
            <Col xs={12} sm={10} lg={6}>
              <LogoWrapper>
                <Img fluid={data.y2blogo.childImageSharp.fluid} alt="Youth to Business Forum Logo" />
              </LogoWrapper>
              <Subtitle>Connecting the leaders of tomorrow with the leaders of today through dialogue on relvant global topics.</Subtitle>
              <PrimaryCTA href="https://bit.ly/Y2B2019Forum" target="_blank" rel="noopener noreferrer">Get Your Tickets</PrimaryCTA>
              <SecondaryCTA href="https://www.aiesec.ca/youthtobusiness/" target="_blank" rel="noopener noreferrer">Find out More About Y2B</SecondaryCTA>
            </Col>
            <Col xs={12} sm={10} lg={6}>
              <IframeWrapper>
                <iframe width="480" height="270" src="https://www.youtube.com/embed/lhaJpXna_tw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                <BgOffset />
              </IframeWrapper>
            </Col>
          </CenteredRow>
          <CenteredRow>
            <Col xs={12} xl={10} style={{ position: 'relative' }}>
            <TestimonialBackground />
            <Testimonials />
            </Col>
          </CenteredRow>
        </Container>
      </Wrapper>
    )}
  />
);

export default YouthToBusiness;
