import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'reactstrap';
import styled from 'styled-components';
import { y2bLogos as Logos } from '../../utils/logos';
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

const Y2bTitle = styled.h2`
  color: ${Styles.themeColour}
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
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

  &.td {
    width: 135px;
    ${Media.tablet`width: 180px;`}
  }
  &.nec,
  &.edc,
  &.via-rail {
    width: 160px;
    ${Media.tablet`width: 250px;`}
  }
  &.smith {
    width: 180px;
    ${Media.tablet`width: 300px;`}
  }
  &.gold {
    width: 160px;
    ${Media.tablet`width: 210px;`}
  }
  &.schulich,
  &.economist {
    width: 145px;
    ${Media.tablet`width: 170px;`}
  }
  &.cpa {
    width: 200px;
    ${Media.tablet`width: 270px;`}
  }
  &.qs {
    width: 90px;
    ${Media.tablet`width: 110px;`}
  }
`;

const tier = {
  title: 'Platinum',
  gold: 'Gold',
  silver: 'Silver',
};

const platinumLogos = {
  nec: Logos['national-experience-canada.jpg'],
  td: Logos['td.jpg'],
  edc: Logos['edc.jpg'],
  viarail: Logos['via-rail.png'],
  smith: Logos['smith.jpg'],
};

const goldLogos = {
  bmo: Logos['bmo.jpg'],
  apf: Logos['asia-pacific-foundation.png'],
  rbc: Logos['rbc.jpg'],
  agf: Logos['agf.png'],
};

const silverLogos = {
  cpa: Logos['cpa.png'],
  schulich: Logos['schulich-york.jpg'],
  qs: Logos['qs.png'],
  economist: Logos['economist.png'],
};

const Y2bList = ({ paddingTop }) => (
  <section style={{ paddingTop }}>
    <Container>
      <Y2bTitle>
        National Partner Group
      </Y2bTitle>
      <Tier>
        <TierTitle>
          {tier.title}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.nutrien.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={platinumLogos.nec} alt="" className="nec" />
          </SponsorLink>
          <SponsorLink href="https://www.nutrien.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={platinumLogos.td} alt="" className="td" />
          </SponsorLink>
          <SponsorLink href="https://www.nutrien.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={platinumLogos.edc} alt="" className="edc" />
          </SponsorLink>
          <SponsorLink href="https://www.nutrien.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={platinumLogos.viarail} alt="" className="via-rail" />
          </SponsorLink>
          <SponsorLink href="https://www.nutrien.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={platinumLogos.smith} alt="" className="smith" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.gold}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://www.calgaryeconomicdevelopment.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={goldLogos.bmo} alt="" className="gold" />
          </SponsorLink>
          <SponsorLink href="https://www.calgaryeconomicdevelopment.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={goldLogos.apf} alt="" className="gold" />
          </SponsorLink>
          <SponsorLink href="https://www.calgaryeconomicdevelopment.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={goldLogos.rbc} alt="" className="gold" />
          </SponsorLink>
          <SponsorLink href="https://www.calgaryeconomicdevelopment.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={goldLogos.agf} alt="" className="gold" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.silver}
        </TierTitle>
        <LogoCard>
          <SponsorLink href="https://haskayne.ucalgary.ca/ccal/" target="_blank" rel="noopener noreferrer">
            <Logo src={silverLogos.schulich} alt="" className="schulich" />
          </SponsorLink>
          <SponsorLink href="https://haskayne.ucalgary.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={silverLogos.economist} alt="" className="economist" />
          </SponsorLink>
          <SponsorLink href="https://www.atb.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={silverLogos.cpa} alt="" className="cpa" />
          </SponsorLink>
          <SponsorLink href="https://haskayne.ucalgary.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={silverLogos.qs} alt="" className="qs" />
          </SponsorLink>
        </LogoCard>
      </Tier>
    </Container>
  </section>
);

Y2bList.defaultProps = {
  paddingTop: '0',
};

Y2bList.propTypes = {
  paddingTop: PropTypes.string,
};

export default Y2bList;
