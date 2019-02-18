import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Styles from '../utils/styles';
import MailChimp from './MailChimp/MailChimp';
import Media from '../utils/media';

const HeroSection = styled.section`
  height: 85vh;
  background-image: linear-gradient( 135deg, rgba(116, 199, 217, 0.75) 40%, rgba(3, 126, 243, 0.75) 100%), url(${props => props.bgImage.calgary.childImageSharp.fluid.src});
  background-size: cover;
  background-position: center;
  -webkit-box-shadow: 0 4px 20px rgba(75, 97, 141, 0.4);
  box-shadow: 0 4px 20px rgba(75, 97, 141, 0.4);
  color: white;
`;

const LogoImage = styled(Img)`
  margin: auto auto 0 auto;
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
  ${Media.desktop`font-size: 1.3rem; max-width: 420px;`}
  color: #FFFFFF;
  font-weight: normal;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 1rem auto;
  padding: 5px;
  border: 2px solid white;
`;

const StyledLink = styled.a`
  font-size: 0.7rem;
  ${Media.laptop`font-size: 0.9rem;`}
  padding: 10px 1rem;
  ${Media.tablet`padding: 14px 1.5rem;`}
  letter-spacing 1px;
  text-decoration: none;
  background-color: ${Styles.lightRed};
  border-radius: 30px;
  color: white;
  text-transform: uppercase;
  margin-top: auto;
  margin-bottom: 1rem;
  
  &:hover {
    color: white;
    background-color: ${Styles.red};
    text-decoration: none;
  }
`;

const PageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "nldc2019-logo-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    calgary: file(relativePath: { eq: "calgary.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = (props) => (
  <StaticQuery
    query={PageQuery}
    render={data => (
      <HeroSection bgImage={data}>
        <Container style={{ marginTop: 'auto', padding: '0' }}>
          <LogoImage fluid={data.logo.childImageSharp.fluid} alt="NLDC 2019 Logo" />
          <Title>
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
        <StyledLink href="/atbcontest">Attend for Free</StyledLink>
      </HeroSection>
    )}
  />
);

export default Hero;