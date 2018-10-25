import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import MailChimp from '../MailChimp/MailChimp';
import SocialMedia from './SocialMedia';

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
      <SocialMedia />
    </Container>
  </Wrapper>
);

export default Footer;
