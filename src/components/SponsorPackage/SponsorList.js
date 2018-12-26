import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'reactstrap';
import styled from 'styled-components';
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
    ${Media.tablet`width: 540px;`}
  }
  &.avnet {
    width: 100px;
    ${Media.tablet`width: 160px`}
  }
  &.aeso {
    width: 135px;
    ${Media.tablet`width: 180px;`}
  }
  &.pwc {
    width: 80px;
    ${Media.tablet`width: 135px;`}
  }
  &.marquee {
    width: 120px;
    ${Media.tablet`width: 160px;`}
  }
`;

const tier = {
  title: 'Title Partner',
  innovation: 'Innovation Partners',
  gold: 'Gold Partner',
  silver: 'Silver Partners',
  bronze: 'Bronze Partners',
  event: 'Event Partners',
  kind: 'In-kind Partners',
  meal: 'Meal Partner',
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
  nutrien: logos['nutrien.png'],
};

const innovationLogos = {
  hunterhub: logos['hunterhub.jpg'],
  avnet: logos['avnet.png'],
};

const goldLogos = {
  ced: logos['ced.png'],
};

const silverLogos = {
  atb: logos['atb.png'],
  ccal: logos['ccal.png'],
  haskayne: logos['haskayne.jpg'],
};

const bronzeLogos = {
  husky: logos['Husky.png'],
  aeso: logos['aeso.png'],
};

const eventLogos = {
  knoxville: logos['Knoxville.png'],
  commonwealth: logos['commonwealth.png'],
  marquee: logos['marquee.jpeg'],
};

const kindLogos = {
  esxossmanway: logos['Esxossmanway.png'],
  flyingsquirrel: logos['flyingsquirrel.png'],
  rumbleboxing: logos['rumbleboxing.jpg'],
};

const mealLogos = {
  pwc: logos['pwc.png'],
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
            <Logo src={bronzeLogos.husky} alt="" />
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
      <Tier>
        <TierTitle>
          {tier.event}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.knoxcalgary.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={eventLogos.knoxville} alt="" />
          </SponsorLink>
          <SponsorLink href="http://commonwealthbar.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={eventLogos.commonwealth} alt="" />
          </SponsorLink>
          <SponsorLink href="http://marqueecalgary.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={eventLogos.marquee} alt="" className="marquee" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.kind}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.esxossmanway.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={kindLogos.esxossmanway} alt="" />
          </SponsorLink>
          <SponsorLink href="http://rumbleboxing.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={kindLogos.rumbleboxing} alt="" />
          </SponsorLink>
          <SponsorLink href="https://flyingsquirrelsports.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={kindLogos.flyingsquirrel} alt="" />
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
