import React from 'react';
import styled from 'styled-components';
import Div from '../images/divider-right.svg';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import SponsorDetails from '../components/SponsorDetails';
import Footer from '../components/Footer';

const Home = styled.div`
  text-align: center;
`;

const Divider = styled.div`
  background-image: url('${Div}');
  width: 280px;
  height: 34px;
  margin: 0 auto;
`;

const Home = () => (
  <Home>
    <Hero />
    <EventDetails />
    <Divider />
    <SponsorDetails />
    <Footer />
  </Home>
);

export default Home;
