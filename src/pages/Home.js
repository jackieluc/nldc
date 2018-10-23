import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import AboutAiesec from '../components/About/AboutAiesec';
import SponsorDetails from '../components/SponsorDetails';
import SponsorList from '../components/SponsorPackage/SponsorList';

const Wrapper = styled.div`
  text-align: center;
`;

const Home = () => (
  <Wrapper>
    <Hero />
    <EventDetails />
    <AboutAiesec />
    <SponsorDetails />
    <SponsorList />
  </Wrapper>
);

export default Home;
