import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'reactstrap';
import styled from 'styled-components';
import PartnerDetails from './PartnerDetails';
import Styles from '../../utils/styles';
import allProfiles from '../../data/partnerData';

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

  &.last {
    margin-top: 0;
  }
`;

const Logo = styled.img`
  display: block;
  width: 190px;
  height: auto;
  
  &.partners {
    width: 180px;
  }
  &.marquee {
    width: 90px;
  }
  &.rumble-boxing {
    width: 220px;
  }
  &.flying-squirrel {
    width: 160px;
  }
  &.xerox {
    width: 210px;
  }
  &.phoneloops {
    width: 200px;
  }
`;

const PartnerList = ({ paddingTop }) => (
  <React.Fragment>
    <PartnerDetails />
    <section style={{ paddingTop }}>
      <Container>
        <Tier>
          <TierTitle>
            { allProfiles.event.tierTitle }
          </TierTitle>
          <LogoCard>
            <SponsorLink href={allProfiles.event.partners.knoxville.website} target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.event.partners.knoxville.logo} alt={allProfiles.event.partners.knoxville.name + ' logo'} className="partners" />
            </SponsorLink>
            <SponsorLink href={allProfiles.event.partners.commonwealth.website} target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.event.partners.commonwealth.logo} alt={allProfiles.event.partners.commonwealth.name + ' logo'} className="partners" />
            </SponsorLink>
            <SponsorLink href={allProfiles.event.partners.marquee.website} target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.event.partners.marquee.logo} alt={allProfiles.event.partners.marquee.name + ' logo'} className="marquee" />
            </SponsorLink>
          </LogoCard>
        </Tier>
        <Tier>
          <TierTitle>
            { allProfiles.inKind.tierTitle }
          </TierTitle>
          <LogoCard>
            <SponsorLink href={allProfiles.inKind.partners.esxossmanway.website} target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.inKind.partners.esxossmanway.logo} alt={allProfiles.inKind.partners.esxossmanway.name + ' logo'} />
            </SponsorLink>
            <SponsorLink href={allProfiles.inKind.partners.rumbleboxing.website} target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.inKind.partners.rumbleboxing.logo} alt={allProfiles.inKind.partners.rumbleboxing.name + ' logo'} className="rumble-boxing" />
            </SponsorLink>
            <SponsorLink href={allProfiles.inKind.partners.flyingsquirrel.website} target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.inKind.partners.flyingsquirrel.logo} alt={allProfiles.inKind.partners.flyingsquirrel.name + ' logo'} className="flying-squirrel" />
            </SponsorLink>
            <SponsorLink href={allProfiles.inKind.partners.xerox.website} target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.inKind.partners.xerox.logo} alt={allProfiles.inKind.partners.xerox.name + ' logo'} className="xerox" />
            </SponsorLink>
            <SponsorLink href={allProfiles.inKind.partners.phoneloops.website} className="last" target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.inKind.partners.phoneloops.logo} alt={allProfiles.inKind.partners.phoneloops.name + ' logo'} className="phoneloops" />
            </SponsorLink>
            <SponsorLink href={allProfiles.inKind.partners.brettwilson.website} className="last" target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.inKind.partners.brettwilson.logo} alt={allProfiles.inKind.partners.brettwilson.name + ' logo'} className="" />
            </SponsorLink>
            <SponsorLink href={allProfiles.inKind.partners.beyondscarf.website} className="last" target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.inKind.partners.beyondscarf.logo} alt={allProfiles.inKind.partners.beyondscarf.name + ' logo'} className="" />
            </SponsorLink>
            <SponsorLink href={allProfiles.inKind.partners['5s17'].website} className="last" target="_blank" rel="noopener noreferrer">
              <Logo src={allProfiles.inKind.partners['5s17'].logo} alt={allProfiles.inKind.partners['5s17'].name + ' logo'} className="" />
            </SponsorLink>
          </LogoCard>
        </Tier>
      </Container>
    </section>
  </React.Fragment>
);

PartnerList.defaultProps = {
  paddingTop: '0',
};

PartnerList.propTypes = {
  paddingTop: PropTypes.string,
};

export default PartnerList;
