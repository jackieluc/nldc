import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'reactstrap';
import styled from 'styled-components';
import PartnerDetails from './PartnerDetails';
import { partnerLogos as Logos } from '../../utils/logos';
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

  &.vertical-margins {
    margin: 0 10px;
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
`;

const tier = {
  event: 'Event',
  kind: 'In-Kind',
};

const eventLogos = {
  knoxville: Logos['Knoxville.png'],
  commonwealth: Logos['commonwealth.png'],
  marquee: Logos['marquee.jpeg'],
};

const kindLogos = {
  esxossmanway: Logos['Esxossmanway.png'],
  flyingsquirrel: Logos['flyingsquirrel.png'],
  rumbleboxing: Logos['rumbleboxing.jpg'],
  xerox: Logos['xerox.jpg'],
};

const PartnerList = ({ paddingTop }) => (
  <React.Fragment>
    <PartnerDetails />
    <section style={{ paddingTop }}>
      <Container>
        <Tier>
          <TierTitle>
            {tier.event}
          </TierTitle>
          <LogoCard>
            <SponsorLink href="https://www.knoxcalgary.com/" target="_blank" rel="noopener noreferrer">
              <Logo src={eventLogos.knoxville} alt="" className="partners" />
            </SponsorLink>
            {/* <SponsorLink href="http://commonwealthbar.ca/" target="_blank" rel="noopener noreferrer">
              <Logo src={eventLogos.commonwealth} alt="" className="partners" />
            </SponsorLink>
            <SponsorLink href="http://marqueecalgary.com/" target="_blank" rel="noopener noreferrer">
              <Logo src={eventLogos.marquee} alt="" className="marquee" />
            </SponsorLink> */}
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
              <Logo src={kindLogos.rumbleboxing} alt="" className="rumble-boxing" />
            </SponsorLink>
            <SponsorLink href="https://flyingsquirrelsports.ca/" target="_blank" rel="noopener noreferrer">
              <Logo src={kindLogos.flyingsquirrel} alt="" className="flying-squirrel" />
            </SponsorLink>
            <SponsorLink href="https://www.xerox.ca/" className="vertical-margins" target="_blank" rel="noopener noreferrer">
              <Logo src={kindLogos.xerox} alt="" className="xerox" />
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
