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
  font-size: 14px;

  a {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  ${({ gradient }) => gradient
    ? `color: white;`
    : `color: ${Styles.themeColour};`
  }
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const Half = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0 20px 3rem 20px;
  overflow-y: auto;

  ${({ gradient }) => gradient
    ? `
        background-image: linear-gradient( 135deg, #74C7D9 40%, #037EF3 100%);
        color: white;

        a {
          color: black;
          text-decoration: underline;
        }
      `
    : ``
  }
`;

const Highlight = styled.span`
  ${Styles.highlight};
  font-weight: bold;
`;

const StyledHeader = styled.div`
  margin: 2rem 0;

  p {
    ${Media.tablet`width: 40rem;`}
    ${Media.laptop`width: 100%;`}
    ${Media.desktop`width: 40rem;`}
    margin: 0 auto;
    text-align: center;
  }
`;

const ContestDescription = styled.div`
  ${Media.tablet`width: 40rem;`}
  ${Media.laptop`width: 100%;`}
  ${Media.desktop`width: 40rem;`}
  margin: 0 auto;
`;

const EligibilityDescription = styled.div`
  font-size: 12px;

  p {
    padding-left: 1rem;
  }

  ol {
    li {
      margin-bottom: 0.5rem;
    }
    margin-bottom: 0.5rem;
  }
`;

const OrderedList = styled.ol`
  padding-left: 2rem;
  
  > li {
    margin-bottom: 1rem;
  }
`;

const SubList = styled.ul`
  padding-left: 2rem;
  margin-bottom: 1rem;
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
    manifesto: allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
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
          <Half gradient>
            <StyledHeader>
              <Title gradient>I am a Transformer Contest</Title>
              <p>Calling all transformers...</p>
              <p>Attend the National Leadership Development Conference 2019... on ATB!</p>
            </StyledHeader>
            <ContestDescription>
              <p style={{ marginBottom: '1rem' }}>
                Consistently named one of Canada’s top employers, <a href="https://www.atb.com/careers/Pages/default.aspx" target="_blank" rel="noopener noreferrer">ATB Financial</a> is actively <a href="http://atbalphabeta.com" target="_blank" rel="noopener noreferrer">disrupting banking</a> in order deliver happiness to Albertans, and the world. Within ATB’s 5,300 person strong team, you’ll find 1,000 dedicated transformers working at the forefront of technology, data, CX, AI, blockchain and everything in between.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                ATB invests in its transformers, future and current. If you’re a transformer, then enter ATB’s “I am a Transformer” contest in order to win a chance to have your NLDC delegate fee covered. ATB is always on the search for those that live and breathe our mission and culture. When we find them, we invest in them. Here’s your chance for ATB to invest in you as you continue your leadership journey by attending the NLDC - on us. There are 10 spots up for grabs, valued at $400... enter now!
              </p>
              <EligibilityDescription>
                <h4>Eligibility Requirements</h4>
                <OrderedList eligibility>
                  <li>Must be a member in good standing of AIESEC Canada and registered for post secondary at a Canadian Institution.</li>
                  <li>18 years or older</li>
                </OrderedList>
                <p>Click <a href="https://docs.google.com/document/d/1YuQa8JHHKwqHI-OlmxT69AqQWYtVSt6FKTQ_En_VMKw/edit?fbclid=IwAR3BVSn0G8knXNSePGjN1jUCG58xAW4th0vf9VebtHbjGXqBtbSf1J719Sc" target="_blank" rel="noopener noreferrer">here</a> for full contest terms & conditions.</p>
              </EligibilityDescription>
            </ContestDescription>
          </Half>
          <Half>
            <Title>How to enter</Title>
            <ContestDescription>
              <OrderedList>
                <li>Watch the <a href="https://alphabeta.atb.com/careers" target="_blank" rel="noopener noreferrer">Transformation anthem</a> on ATB alphaBeta and get to know the  <a href={data.manifesto.edges[0].node.publicURL} target="_blank" rel="noopener noreferrer">transformation manifesto</a>.</li>
                <li>Answer the following questions using a social media post, funny meme, boomerang, &lt;90 second video or any creative means:</li>
                <SubList>
                  <li>How do you live the transformation manifesto every day?</li>
                  <li>What excites you about ATB & transformation</li>
                  <li>How will the NLDC help you continue your journey as a transformative leader?</li>
                </SubList>
                <li>Follow us on Instagram and tag us:</li>
                <SubList>
                  <li>@ATBfinancial</li>
                  <li>@aieseccanadanldc</li>
                  <li>@aiesecincanada</li>
                </SubList>
                <li>Make your post public and use the following hashtags:</li>
                <SubList>
                  <li>#ATBTransforms</li>
                  <li>#ATBListens</li>
                  <li>#DisruptingTheNow</li>
                  <li>#NLDC2019</li>
                </SubList>
                <li>Make sure we don’t miss your entry - send us an email at <a href="mailto:alphabeta@atb.com">alphabeta@atb.com</a> with your full name, public link to contest entry, telephone and email for contest communication purposes only.</li>
              </OrderedList>
              <p>
                A Panel of 4 Judges (2 from ATB, 2 from AIESEC Calgary) will review each entry for eligibility, creativity, completeness and applicability of response. 10 of those entries will be randomly chosen for <Highlight>free</Highlight> registration to NLDC (valued at $400).
              </p>
            </ContestDescription>
            <a href="https://www.atb.com/Pages/default.aspx" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <Img fixed={data.atblistens.childImageSharp.fixed} alt="ATB Listens logo" />
            </a>
          </Half>
        </Wrapper>
      </Layout>
    )}
  />
);

export default ATBContest;
