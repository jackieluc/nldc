import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import MailChimp from '../MailChimp/MailChimp';
import Media from '../../utils/media';
import SocialMedia from './SocialMedia';
// import Media from '../utils/media';

const Wrapper = styled.footer`
  background-color: #F9F9F9;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 60px;
`;


const Footer = () => (
  <Wrapper>
    <Container>
      <MailChimp />
      <Row>
        <Col xs="12">
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default Footer;
