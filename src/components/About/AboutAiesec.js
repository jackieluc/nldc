import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Media from '../../utils/media';
import Styles from '../../utils/styles';
import AiesecLogo from '../../images/aiesec-logo.png';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Wrapper = styled.section`
  background-image: linear-gradient( 135deg, #74C7D9 40%, #037EF3 100%);
`;

const About = styled.div`
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-size: 2.5rem;
`;

const Logo = styled.div`
  margin-bottom: 2rem;

  > img {
    width: 300px;
    ${Media.bigPhone`width: 380px`}
  }
`;

const Text = styled.p`
  text-align: left;
  ${Media.tablet`text-align: center;`}
`;

const CTA = styled(OutboundLink)`
  display: inline-block;
  border-radius: 40px;
  margin: 0;
  border: 1px solid white;
  color: white;
  background-color: transparent;
  ${Styles.shadow}
  padding: .7rem 2rem;
  margin-top: 2rem;

  &:hover,
  &:focus {
    color: white;
    background-color: ${Styles.themeColour};
    border-color: ${Styles.themeColour};
    cursor: pointer;
    text-decoration: none;
  }
`;

const AboutAiesec = () => (
  <Wrapper>
    <Container fluid>
      <Row>
        <Col xs="12" md="10" lg="8" xl="6" style={{ margin: '0 auto' }}>
          <About>
            <Logo>
              <img src={AiesecLogo} alt="AIESEC Logo" />
            </Logo>
            <Text>
              { // eslint-disable-next-line
              } AIESEC is the largest  non-governmental not-for-profit organisation offering platforms for young people to explore and develop their leadership through our global exchange program. Since we were founded, we have engaged and developed over 1,000,000 AIESECers.
            </Text>
            <Text>
              { // eslint-disable-next-line
              } We are in consultative status with the United Nations Economic and Social Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and is recognized by UNESCO.
            </Text>
            <CTA href="https://www.aiesec.ca/" target="_blank">
              Find out More About AIESEC
            </CTA>
          </About>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default AboutAiesec;
