import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Media from '../utils/media';
import Styles from '../utils/styles';
import Logo from '../images/nldc2019-logo-black.png';

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  ${Media.laptop`flex-direction: row;`}
  justify-content: center;
  ${Media.laptop`padding-top: 4rem;`}
  font-size: 1rem;

  a {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  color: ${Styles.themeColour};
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const Highlight = styled.span`
  ${Styles.highlight};
  font-weight: bold;
`;

const ContestDescription = styled.div`
  ${Media.tablet`width: 40rem;`}
  ${Media.laptop`width: 100%;`}
  ${Media.desktop`width: 40rem;`}
  margin: 0 auto;

  p {
    margin-bottom: 1rem;
  }
`;

const PageQuery = graphql`
  query {
    atblistens: file(relativePath: { eq: "atb-listens.png" }) {
      childImageSharp {
        fixed(width: 265) {
          ...GatsbyImageSharpFixed
        }
      }
    },
  }
`;

const ATBContest = (props) => (
  <StaticQuery
    query={PageQuery}
    render={data => (
      <Layout noFooter>
        <Wrapper>
          <Helmet>
            <title>
              ATB Contest | NLDC 2019
            </title>
            <link rel="canonical" href="https://www.nldcnow.com/atbcontest" />
            <meta name="description" content="I am a Transformer Contest. Calling all transformers... Attend the National Leadership Development Conference 2019... on ATB!" />
            <meta name="keywords" content="nldc 2019 atb contest, atb contest, nldc atb contest, aiesec atb contest, contest, atb, free, flights" />
            <meta property="og:title" content="ATB Contest | NLDC 2019" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="I am a Transformer Contest. Calling all transformers... Attend the National Leadership Development Conference 2019... on ATB!" />
            <meta property="og:url" content="https://www.nldcnow.com/atbcontest" />
            <meta property="og:site_name" content="ATB Contest | NLDC 2019" />
            <meta property="og:image" content={`https://www.nldcnow.com${Logo}`} />
            <meta property="fb:app_id" content="594354454320006" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://www.nldcnow.com/atbcontest" />
            <meta name="twitter:title" content="ATB Contest | NLDC 2019" />
            <meta name="twitter:description" content="I am a Transformer Contest. Calling all transformers... Attend the National Leadership Development Conference 2019... on ATB!" />
            <meta name="twitter:image" content={`https://www.nldcnow.com${Logo}`} />
          </Helmet>
          <div>
            <Title>"I am a Transformer Contest" is now over!</Title>
            <ContestDescription>
              <p style={{ fontWeight: 'bold' }}>
                We would like to thank ATB Financial for sponsoring this contest. We will make special announcements regarding the winners shortly. Please make sure you like our <a href="https://www.facebook.com/AIESECCanadaNLDC/" target="_blank" rel="noopener noreferrer">Facebook</a> and follow our <a href="https://www.instagram.com/aieseccanadanldc/" target="_blank" rel="noopener noreferrer">Instagram</a> to stay tuned!
              </p>
              <p>
                Make sure we don’t miss your entry - send us an email at <a href="mailto:alphabeta@atb.com">alphabeta@atb.com</a> with your full name, public link to contest entry, telephone and email for contest communication purposes only.
              </p>
              <p>
                A Panel of 4 Judges (2 from ATB, 2 from AIESEC Calgary) will review each entry for eligibility, creativity, completeness and applicability of response. 10 of those entries will be randomly chosen for <Highlight>free</Highlight> registration to NLDC (valued at $400).
              </p>
            </ContestDescription>
            <a href="https://www.atb.com/Pages/default.aspx" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <Img fixed={data.atblistens.childImageSharp.fixed} alt="ATB Listens logo" />
            </a>
          </div>
        </Wrapper>
      </Layout>
    )}
  />
);

export default ATBContest;
