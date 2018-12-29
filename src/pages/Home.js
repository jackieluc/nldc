import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import AboutAiesec from '../components/About/AboutAiesec';
import SponsorDetails from '../components/SponsorDetails';
import LearnMoreCTA from '../components/SponsorPackage/LearnMoreCTA';
import SponsorList from '../components/SponsorPackage/SponsorList';
import PartnerList from '../components/SponsorPackage/PartnerList';

const Wrapper = styled.div`
  text-align: center;
`;

const Home = () => (
  <Wrapper>
    <Helmet>
      <title>
        NLDC 2019
      </title>
      <link rel="canonical" href="https://www.nldcnow.com/" />
      <meta name="description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
      <meta name="keywords" content="AIESEC, Canada, Calgary, NLDC, national, leadership, development, conference, 2019, AIESEC.org, nldc 2019, national leadership development conference" />
      <meta property="og:title" content="AIESEC | NLDC 2019" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary."
      />
      <meta property="og:url" content="https://www.nldcnow.com/" />
      <meta property="og:site_name" content="AIESEC | NLDC 2019" />
      <meta property="og:image" content="https://www.nldcnow.com/static/media/nldc2019-logo-black.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://www.nldcnow.com/" />
      <meta name="twitter:title" content="AIESEC | NLDC 2019" />
      <meta name="twitter:description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
      <meta name="twitter:image" content="https://www.nldcnow.com/static/media/nldc2019-logo-black.png" />
    </Helmet>
    <Hero />
    <EventDetails />
    <AboutAiesec />
    <SponsorDetails />
    <LearnMoreCTA />
    <SponsorList />
    <PartnerList />
  </Wrapper>
);

export default Home;
