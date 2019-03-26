import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'reactstrap';
import styled from 'styled-components';
import Media from '../../utils/media';
import Styles from '../../utils/styles';
import CompanyProfile from './CompanyProfiles/CompanyProfile';
import allProfiles from '../../data/sponsorData';

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
  border-radius: 6px;
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
    width: 280px;
    ${Media.tablet`width: 500px;`}
  }
  &.avnet {
    width: 150px;
    ${Media.tablet`width: 200px`}
  }
  &.ccal {
    width: 210px;
    ${Media.tablet`width: 310px;`}
  }
  &.husky,
  &.capp {
    width: 180px;
    ${Media.tablet`width: 230px;`}
  }
  &.aeso {
    width: 160px;
    ${Media.tablet`width: 180px;`}
  }
  &.pwc {
    width: 80px;
    ${Media.tablet`width: 135px;`}
  }
`;

const SponsorList = ({ paddingTop }) => (
  <section style={{ paddingTop }}>
    <Container>
      <Tier>
        <TierTitle>
          { allProfiles.title.tierTitle }
        </TierTitle>
        <LogoCard>
          <SponsorLink href={allProfiles.title.sponsors.nutrien.website} target="_blank" rel="noopener noreferrer">
            <Logo src={allProfiles.title.sponsors.nutrien.logo} alt="" />
          </SponsorLink>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          { allProfiles.gold.tierTitle }
        </TierTitle>
        <LogoCard>
          <CompanyProfile profile={allProfiles.gold.sponsors.ced}>
            <Logo src={allProfiles.gold.sponsors.ced.logo} alt="" />
          </CompanyProfile>
        </LogoCard>
      </Tier>
      <Tier>
      <Tier>
        <TierTitle>
          { allProfiles.innovation.tierTitle }
        </TierTitle>
        <LogoCard>
          <SponsorLink href={allProfiles.innovation.sponsors.hunterhub.website} target="_blank" rel="noopener noreferrer">
            <Logo src={allProfiles.innovation.sponsors.hunterhub.logo} alt="" className="hunter-hub" />
          </SponsorLink>
          <SponsorLink href={allProfiles.innovation.sponsors.avnet.website} target="_blank" rel="noopener noreferrer">
            <Logo src={allProfiles.innovation.sponsors.avnet.logo} alt="" className="avnet" />
          </SponsorLink>
          <SponsorLink href={allProfiles.innovation.sponsors.benevity.website} target="_blank" rel="noopener noreferrer">
            <Logo src={allProfiles.innovation.sponsors.benevity.logo} alt="" />
          </SponsorLink>
        </LogoCard>
      </Tier>
        <TierTitle>
          { allProfiles.silver.tierTitle }
        </TierTitle>
        <LogoCard>
          <SponsorLink href={allProfiles.silver.sponsors.atb.website} target="_blank" rel="noopener noreferrer">
            <Logo src={allProfiles.silver.sponsors.atb.logo} alt="" />
          </SponsorLink>
          <SponsorLink href={allProfiles.silver.sponsors.ccal.website} target="_blank" rel="noopener noreferrer">
            <Logo src={allProfiles.silver.sponsors.ccal.logo} alt="" className="ccal" />
          </SponsorLink>
          <CompanyProfile profile={allProfiles.silver.sponsors.haskayne}>
            <Logo src={allProfiles.silver.sponsors.haskayne.logo} alt="" />
          </CompanyProfile>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          { allProfiles.bronze.tierTitle }
        </TierTitle>
        <LogoCard>
          <CompanyProfile profile={allProfiles.bronze.sponsors.husky} >
            <Logo src={allProfiles.bronze.sponsors.husky.logo} alt="" className="husky" />
          </CompanyProfile>
          <SponsorLink href={allProfiles.bronze.sponsors.aeso.website} target="_blank" rel="noopener noreferrer">
            <Logo src={allProfiles.bronze.sponsors.aeso.logo} alt="" className="aeso" />
          </SponsorLink>
          <CompanyProfile profile={allProfiles.bronze.sponsors.capp}>
            <Logo src={allProfiles.bronze.sponsors.capp.logo} alt="" className="capp" />
          </CompanyProfile>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          { allProfiles.meal.tierTitle }
        </TierTitle>
        <LogoCard>
          <CompanyProfile profile={allProfiles.meal.sponsors.pwc}>
            <Logo src={allProfiles.meal.sponsors.pwc.logo} alt="" className="pwc" />
          </CompanyProfile>
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
