import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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

const Logo = styled(Img)`
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

export const partnerLogosQuery = graphql`
  query {
    knoxville: file(relativePath: { eq: "partners/Knoxville.png" }) {
      ...fluidImage
    }
    commonwealth: file(relativePath: { eq: "partners/commonwealth.png" }) {
      ...fluidImage
    }
    marquee: file(relativePath: { eq: "partners/marquee.jpeg" }) {
      ...fluidImage
    }
    esxossmanway: file(relativePath: { eq: "partners/Esxossmanway.png" }) {
      ...fluidImage
    }
    rumbleboxing: file(relativePath: { eq: "partners/rumbleboxing.png" }) {
      ...fluidImage
    }
    flyingsquirrel: file(relativePath: { eq: "partners/flyingsquirrel.png" }) {
      ...fluidImage
    }
    xerox: file(relativePath: { eq: "partners/xerox.jpg" }) {
      ...fluidImage
    }
    phoneloops: file(relativePath: { eq: "partners/phoneloops.jpg" }) {
      ...fluidImage
    }
    canoefinancial: file(relativePath: { eq: "partners/canoefinancial.png" }) {
      ...fluidImage
    }
    beyondscarf: file(relativePath: { eq: "partners/beyondscarf.png" }) {
      ...fluidImage
    }
    fivesseventeen: file(relativePath: { eq: "partners/5s17.jpeg" }) {
      ...fluidImage
    }
  }
`;

const PartnerList = ({ paddingTop }) => (
  <StaticQuery
    query={partnerLogosQuery}
    render={data => (
      <>
        <PartnerDetails />
        <section style={{ paddingTop }}>
          <Container>
            <Tier>
              <TierTitle>
                { allProfiles.event.tierTitle }
              </TierTitle>
              <LogoCard>
                <SponsorLink href={allProfiles.event.partners.knoxville.website} target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.knoxville.childImageSharp.fluid} alt={allProfiles.event.partners.knoxville.name + ' logo'} className="partners" />
                </SponsorLink>
                <SponsorLink href={allProfiles.event.partners.commonwealth.website} target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.commonwealth.childImageSharp.fluid} alt={allProfiles.event.partners.commonwealth.name + ' logo'} className="partners" />
                </SponsorLink>
                <SponsorLink href={allProfiles.event.partners.marquee.website} target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.marquee.childImageSharp.fluid} alt={allProfiles.event.partners.marquee.name + ' logo'} className="marquee" />
                </SponsorLink>
              </LogoCard>
            </Tier>
            <Tier>
              <TierTitle>
                { allProfiles.inKind.tierTitle }
              </TierTitle>
              <LogoCard>
                <SponsorLink href={allProfiles.inKind.partners.esxossmanway.website} target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.esxossmanway.childImageSharp.fluid} alt={allProfiles.inKind.partners.esxossmanway.name + ' logo'} />
                </SponsorLink>
                <SponsorLink href={allProfiles.inKind.partners.rumbleboxing.website} target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.rumbleboxing.childImageSharp.fluid} alt={allProfiles.inKind.partners.rumbleboxing.name + ' logo'} className="rumble-boxing" />
                </SponsorLink>
                <SponsorLink href={allProfiles.inKind.partners.flyingsquirrel.website} target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.flyingsquirrel.childImageSharp.fluid} alt={allProfiles.inKind.partners.flyingsquirrel.name + ' logo'} className="flying-squirrel" />
                </SponsorLink>
                <SponsorLink href={allProfiles.inKind.partners.xerox.website} target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.xerox.childImageSharp.fluid} alt={allProfiles.inKind.partners.xerox.name + ' logo'} className="xerox" />
                </SponsorLink>
                <SponsorLink href={allProfiles.inKind.partners.phoneloops.website} className="last" target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.phoneloops.childImageSharp.fluid} alt={allProfiles.inKind.partners.phoneloops.name + ' logo'} className="phoneloops" />
                </SponsorLink>
                <SponsorLink href={allProfiles.inKind.partners.canoefinancial.website} className="last" target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.canoefinancial.childImageSharp.fluid} alt={allProfiles.inKind.partners.canoefinancial.name + ' logo'} className="" />
                </SponsorLink>
                <SponsorLink href={allProfiles.inKind.partners.beyondscarf.website} className="last" target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.beyondscarf.childImageSharp.fluid} alt={allProfiles.inKind.partners.beyondscarf.name + ' logo'} className="" />
                </SponsorLink>
                <SponsorLink href={allProfiles.inKind.partners['5s17'].website} className="last" target="_blank" rel="noopener noreferrer">
                  <Logo fluid={data.fivesseventeen.childImageSharp.fluid} alt={allProfiles.inKind.partners['5s17'].name + ' logo'} className="" />
                </SponsorLink>
              </LogoCard>
            </Tier>
          </Container>
        </section>
      </>
    )}
  />
);

PartnerList.defaultProps = {
  paddingTop: '0',
};

PartnerList.propTypes = {
  paddingTop: PropTypes.string,
};

export default PartnerList;
