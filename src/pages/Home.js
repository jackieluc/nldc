import React from 'react';
import styled from 'styled-components';
import Div from '../images/divider-right.svg';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import SponsorDetails from '../components/SponsorDetails';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  text-align: center;
`;

const Divider = styled.div`
  background-image: url('${Div}');
  width: 280px;
  height: 34px;
  margin: 1rem auto;
`;

const Home = () => (
  <Wrapper>
    <Hero />
    <EventDetails />
    <Divider />
    <SponsorDetails />
    <Footer />
  </Wrapper>
);

export default Home;
