import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import SponsorDetails from '../components/SponsorDetails';
import Footer from '../components/Footer';

const App = styled.div`
  text-align: center;
`;

const Lorem = styled.p`
  max-width: 25vw;
  margin: auto;
  padding: 1rem;
`;

const Home = () => (
  <App>
    <Hero />
    <EventDetails />
    <SponsorDetails />
    <Footer />
  </App>
);

export default Home;
