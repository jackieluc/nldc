import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'reactstrap';
import styled from 'styled-components';
import PartnerDetails from './PartnerDetails';
import Logos from '../../utils/logos';
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

  &.pwc {
    width: 80px;
    ${Media.tablet`width: 135px;`}
  }
  &.marquee {
    width: 120px;
  }
  &.flying-squirrel {
    width: 160px;
  }
  &.partners {
    width: 180px;
  }
`;

const tier = {
  event: 'Event',
  kind: 'In-kind',
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
            <SponsorLink href="http://commonwealthbar.ca/" target="_blank" rel="noopener noreferrer">
              <Logo src={eventLogos.commonwealth} alt="" className="partners" />
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
              <Logo src={kindLogos.esxossmanway} alt="" className="partners" />
            </SponsorLink>
            <SponsorLink href="http://rumbleboxing.com/" target="_blank" rel="noopener noreferrer">
              <Logo src={kindLogos.rumbleboxing} alt="" className="partners" />
            </SponsorLink>
            <SponsorLink href="https://flyingsquirrelsports.ca/" target="_blank" rel="noopener noreferrer">
              <Logo src={kindLogos.flyingsquirrel} alt="" className="flying-squirrel" />
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
