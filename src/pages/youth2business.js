import React from 'react';
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {
  Container, Row, Col,
} from 'reactstrap';
import Media from '../utils/media';
import Styles from '../utils/styles';
import Y2bList from '../components/SponsorPackage/Y2bList';
import Y2bLogo from '../images/y2b/y2b-logo.png';

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 300px;
  margin-bottom: 2rem;
`;

const TitleSection = styled.section`
  margin-top: 4rem;
`;

const Description = styled(Col)`
  text-align: center;
  margin: 0 auto 2rem auto;
  max-width: 700px;
`;

const Benefits = styled.section`
  background: linear-gradient( 135deg, #74C7D9 40%, #037EF3 100%);
  width: 100%;
  padding: 2rem 0 6rem 0;
  ${Media.laptop`padding: 2rem 0 10rem 0`}
  margin-bottom: 0;
`;

const BenefitsTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const Y2b = () => (
  <Layout>
    <Wrapper>
      <Helmet>
        <title>
          Youth 2 Business | NLDC 2019
        </title>
        <link rel="canonical" href="https://www.nldcnow.com/youth2business" />
        <meta name="description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
        <meta name="keywords" content="nldc 2019 youth2business, youth2business, youth, nldc sponsor, abusiness, youth to business, youthtobusiness, aiesec" />
        <meta property="og:title" content="Youth 2 Business | NLDC 2019" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary."
        />
        <meta property="og:url" content="https://www.nldcnow.com/youth2business" />
        <meta property="og:site_name" content="Youth 2 Business | NLDC 2019" />
        <meta property="og:image" content="https://www.nldcnow.com/static/media/nldc2019-logo-black.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.nldcnow.com/youth2business" />
        <meta name="twitter:title" content="Youth 2 Business | NLDC 2019" />
        <meta name="twitter:description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
        <meta name="twitter:image" content="https://www.nldcnow.com/static/media/nldc2019-logo-black.png" />
      </Helmet>
      <Container>
        <TitleSection>
          <Image src={Y2bLogo} alt="Youth 2 Business Logo" />
        </TitleSection>
      </Container>
      <Y2bList />
    </Wrapper>
  </Layout>
);

export default Y2b;
