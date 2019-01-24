import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'reactstrap';
import styled from 'styled-components';
import { sponsorLogos as Logos } from '../../utils/logos';
import Media from '../../utils/media';
import Styles from '../../utils/styles';

const Tier = styled.div`
  width: 100%;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

const TierTitle = styled.h3`
  color: ${Styles.textColour};
  margin-bottom: 1rem;
`;

const LogoCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: initial;
  padding: 10px;
  margin-bottom: 60px;
  border-radius: 0;
  border: 0;
  ${Styles.blueShadow}
`;

const SponsorLink = styled.a`
  display: block;
  margin: 20px 10px;
  text-decoration: none;
`;

const Logo = styled.img`
  display: block;
  width: 190px;
  ${Media.tablet`width: 270px;`}
  height: auto;

  &.hunter-hub {
    width: 270px;
    ${Media.tablet`width: 500px;`}
  }
  &.avnet {
    width: 100px;
    ${Media.tablet`width: 160px`}
  }
  &.husky {
    width: 180px;
    ${Media.tablet`width: 230px;`}
  }
  &.aeso {
    width: 150px;
    ${Media.tablet`width: 180px;`}
  }
  &.pwc {
    width: 80px;
    ${Media.tablet`width: 135px;`}
  }
`;

const tier = {
  title: 'Title',
  innovation: 'Innovation',
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  meal: 'Meal',
};

const titleLogos = {
  nutrien: Logos['nutrien.png'],
};

const innovationLogos = {
  hunterhub: Logos['hunterhub.jpg'],
  avnet: Logos['avnet.png'],
};

const goldLogos = {
  ced: Logos['ced.png'],
};

const silverLogos = {
  atb: Logos['atb.png'],
  ccal: Logos['ccal.png'],
  haskayne: Logos['haskayne.jpg'],
};

const bronzeLogos = {
  husky: Logos['Husky.png'],
  aeso: Logos['aeso.png'],
};

const mealLogos = {
  pwc: Logos['pwc.png'],
};

const SponsorList = ({ paddingTop }) => (
  <section style={{ paddingTop }}>
    <Container>
      <Tier>
        <TierTitle>
          {tier.title}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.nutrien.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={titleLogos.nutrien} alt="" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.innovation}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://go.ucalgary.ca/hunter-hub/" target="_blank" rel="noopener noreferrer">
            <Logo src={innovationLogos.hunterhub} alt="" className="hunter-hub" />
          </SponsorLink>
          <SponsorLink href="https://www.avnet.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={innovationLogos.avnet} alt="" className="avnet" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.gold}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.calgaryeconomicdevelopment.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={goldLogos.ced} alt="" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.silver}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.atb.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={silverLogos.atb} alt="" />
          </SponsorLink>
          <SponsorLink href="https://haskayne.ucalgary.ca/ccal/" target="_blank" rel="noopener noreferrer">
            <Logo src={silverLogos.ccal} alt="" />
          </SponsorLink>
          <SponsorLink href="https://haskayne.ucalgary.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={silverLogos.haskayne} alt="" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.bronze}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="http://www.huskyenergy.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={bronzeLogos.husky} alt="" className="husky" />
          </SponsorLink>
          <SponsorLink href="https://www.aeso.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={bronzeLogos.aeso} alt="" className="aeso" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.meal}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.pwc.com/ca/en/" target="_blank" rel="noopener noreferrer">
            <Logo src={mealLogos.pwc} alt="" className="pwc" />
          </SponsorLink>
        </LogoCard>
      </Tier>
    </Container>
  </section>
);

SponsorList.defaultProps = {
  paddingTop: '0',
};

SponsorList.propTypes = {
  paddingTop: PropTypes.string,
};

export default SponsorList;
