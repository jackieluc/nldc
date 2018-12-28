import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Media from '../../utils/media';
import Styles from '../../utils/styles';

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

const Text = styled.p`
  text-align: left;
  ${Media.tablet`text-align: center;`}
`;

const CTA = styled.a`
  display: inline-block;
  border-radius: 40px;
  margin: 0;
  border: 2px solid white;
  color: white;
  background-color: transparent;
  ${Styles.shadow}
  padding: .7rem 3rem .7rem 1.7rem;
  margin-top: 2rem;

  &:hover,
  &:focus {
    color: white;
    background-color: ${Styles.themeColour};
    border: 2px solid ${Styles.themeColour};
    cursor: pointer;
    text-decoration: none;
  }

  &:after {
    content: "→";
    display: inline-block;
    margin-left: .236em;
    margin-right: -1.618em;
    position: relative;
    top: .01em;
  }
`;

const AboutAiesec = () => (
  <Wrapper>
    <Container fluid>
      <Row>
        <Col xs="12" md="10" lg="8" xl="6" style={{ margin: '0 auto' }}>
          <About>
            <Title>
              About AIESEC
            </Title>
            <Text>
              { // eslint-disable-next-line
              } AIESEC is the largest  non-governmental not-for-profit organisation offering platforms for young people to explore and develop their leadership through our global exchange program. Since we were founded, we have engaged and developed over 1,000,000 AIESECers.
            </Text>
            <Text>
              { // eslint-disable-next-line
              } We are in consultative status with the United Nations Economic and Social Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and is recognized by UNESCO.
            </Text>
            <CTA href="https://www.aiesec.org/" target="_blank" rel="noopener noreferrer">
              Find out more about AIESEC
            </CTA>
          </About>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default AboutAiesec;
