import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import MailChimp from './MailChimp/MailChimp';
import Media from '../utils/media';
// import Media from '../utils/media';

const Wrapper = styled.footer`
  background-color: #F9F9F9;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 60px;
  ${Media.laptop`padding-bottom: 0;`}
`;


const Footer = () => (
  <Wrapper>
    <Container>
      <MailChimp />
    </Container>
  </Wrapper>
);

export default Footer;
