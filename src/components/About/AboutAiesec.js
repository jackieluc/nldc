import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Styles from '../../utils/styles';
import Media from '../../utils/media';

const About = styled.div`
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Text = styled.p`
  padding: 0 15px;
  text-align: left;
  ${Media.tablet`text-align: center;`}
`;

const CTA = styled.a`
  color: white;
  display: block;
  padding-top: 2rem;
  margin-left: -25px;

  &:hover {
    color: white;
    text-decoration: underline;
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
  <section>
    <Container fluid style={{ background: Styles.themeColour, padding: '3rem 0' }}>
      <Row>
        <Col xs="12" md="10" lg="8" xl="6" style={{ margin: '0 auto' }}>
          <About>
            <Title>
              About AIESEC
            </Title>
            <Text>
              { // eslint-disable-next-line
              } AIESEC is the largest  non-governmental not-for-profit organisation offering platforms for young people to explore and develop their leadership through our global exchange program. Since we were founded, we have engaged and developed over 1,000,000 young people who have been through an AIESEC experiences.
            </Text>
            <Text>
              { // eslint-disable-next-line
              } We are in consultative status with the United Nations Economic and Social Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and is recognized by UNESCO.
            </Text>
            <CTA href="https://aiesec.org/about-us" target="_blank" rel="noopener noreferrer">
              Find out more about AIESEC
            </CTA>
          </About>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutAiesec;
