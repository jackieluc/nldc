import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import MailChimp from '../MailChimp/MailChimp';
import SocialMedia from './SocialMedia';
import NldcLogo from '../../images/nldc2019-logo.png';

const Wrapper = styled.footer`
  background-color: #F9F9F9;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 60px;
`;

const Div = styled.div`
  position: relative;
  display: block;
  text-align: center;
`;

const Link = styled.a`
  position: absolute;
  top: -140px;
  margin-left: -120px;
`;

const Img = styled.img`
  width: 240px;
`;

const Footer = () => (
  <Wrapper>
    <Div>
      <Link href="/">
        <Img src={NldcLogo} alt="NLDC Logo" />
      </Link>
      <Container>
        <MailChimp />
        <SocialMedia />
      </Container>
    </Div>
  </Wrapper>
);

export default Footer;