import React from 'react';
import styled from 'styled-components';
import { Container, Card } from 'reactstrap';

const Wrapper = styled.section`
  padding: 4rem 0 2rem 0;
`;

const Tier = styled.div`
  width: 100%;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

const TierTitle = styled.h2`

`;

const LogoCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: initial;
  padding: 10px;
  margin-bottom: 60px;
`;

const SponsorLink = styled.a`
  display: block;
  margin: 20px 10px;
  text-decoration: none;
`;

const Logo = styled.img`
  display: block;
  width: 270px;
  height: auto;
`;

const tier = {
  title: 'Title Sponsors',
  gold: 'Gold Sponsors',
  silver: 'Silver Sponsors',
  bronze: 'Bronze Sponsors',
  event: 'Event Sponsors',
  kind: 'In Kind Sponsors',
};

/**
 * Snippet from:
 * https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
 */
const importAll = (r) => {
  const images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const logos = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

const titleLogos = {

};

const goldLogos = {

};

const silverLogos = {

};

const bronzeLogos = {
  husky: logos['Husky.png'],
};

const eventLogos = {
  knoxville: logos['Knoxville.png'],
};

const kindLogos = {
  esxossmanway: logos['Esxossmanway.png'],
};

const SponsorList = () => (
  <Wrapper>
    <Container>
      <Tier>
        <TierTitle>
          {tier.bronze}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="http://www.huskyenergy.ca/" rel="noopener noreferrer">
            <Logo src={bronzeLogos.husky} alt="" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.event}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.knoxcalgary.com/" rel="noopener noreferrer">
            <Logo src={eventLogos.knoxville} alt="" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.kind}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.esxossmanway.ca/" rel="noopener noreferrer">
            <Logo src={kindLogos.esxossmanway} alt="" />
          </SponsorLink>
        </LogoCard>
      </Tier>
    </Container>
  </Wrapper>
);

export default SponsorList;
