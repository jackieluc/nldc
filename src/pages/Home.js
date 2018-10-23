import React from 'react';
import styled from 'styled-components';
import Divider from '../components/Dividers/RightDivider';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import SponsorDetails from '../components/SponsorDetails';
import SponsorList from '../components/SponsorPackage/SponsorList';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  text-align: center;
`;

const Home = () => (
  <Wrapper>
    <Hero />
    <EventDetails />
    <Divider />
    <SponsorDetails />
    <SponsorList />
  </Wrapper>
);

export default Home;
