import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Media from '../utils/media';
import Styles from '../utils/styles';
import SeoImage from '../images/seo-image.png';
import team from '../data/teamData';
import ProfileCard from '../components/Cards/ProfileCard';

const Wrapper = styled.section`
  background-image: linear-gradient( 135deg, #74C7D9 40%, #037EF3 100%);
  padding-top: 8rem;
  padding-bottom: 4rem;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${Styles.textColour};
  font-size: 2rem;
  text-align: left;
  margin-bottom: 3rem;

  span {
    display: block;
    font-family: BillyOhio, lato, sans-serif;
    font-size: 80px;
  }
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${Media.laptop`justify-content: space-evenly;  `}
  flex-wrap: wrap;
`;

const Team = () => (
  <Layout noFooter>
    <Wrapper>
      <Helmet>
        <title>
          Team | NLDC 2019
        </title>
        <link rel="canonical" href="https://www.nldcnow.com/team" />
        <meta name="description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
        <meta name="keywords" content="nldc 2019 team, team, nldc team, aiesec team, group, teamwork, leadership, organization" />
        <meta property="og:title" content="Team | NLDC 2019" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
        <meta property="og:url" content="https://www.nldcnow.com/team" />
        <meta property="og:site_name" content="Team | NLDC 2019" />
        <meta property="og:image" content={`https://www.nldcnow.com${SeoImage}`} />
        <meta property="fb:app_id" content="594354454320006" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.nldcnow.com/team" />
        <meta name="twitter:title" content="Team | NLDC 2019" />
        <meta name="twitter:description" content="Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary." />
        <meta name="twitter:image" content={`https://www.nldcnow.com${SeoImage}`} />
      </Helmet>
      <Container>
        <TitleWrapper>
          <Title>
            Meet the <span>Organizing Committee</span>
          </Title>
        </TitleWrapper>
        <TeamWrapper>
        {
          team.map(member => <ProfileCard key={member.name} {...member} />)
        }
        </TeamWrapper>
      </Container>
    </Wrapper>
  </Layout>
);

export default Team;
