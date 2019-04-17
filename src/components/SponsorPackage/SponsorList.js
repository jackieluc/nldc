import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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

const Logo = styled(Img)`
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
  &.husky {
    width: 180px;
    ${Media.tablet`width: 230px;`}
  }
  &.aeso {
    width: 160px;
    ${Media.tablet`width: 180px;`}
  }
  &.enbridge {
    ${Media.tablet`width: 230px;`}
  }
  &.capp,
  &.rockmount,
  &.pepsico {
    ${Media.tablet`width: 220px;`}
  }
  &.pwc {
    width: 80px;
    ${Media.tablet`width: 135px;`}
  }
`;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    nutrien: file(relativePath: { eq: "sponsors/nutrien.png" }) {
      ...fluidImage
    }
    ced: file(relativePath: { eq: "sponsors/ced.png" }) {
      ...fluidImage
    }
    hunterhub: file(relativePath: { eq: "sponsors/hunterhub.jpg" }) {
      ...fluidImage
    }
    avnet: file(relativePath: { eq: "sponsors/avnet.png" }) {
      ...fluidImage
    }
    benevity: file(relativePath: { eq: "sponsors/benevity.png" }) {
      ...fluidImage
    }
    atb: file(relativePath: { eq: "sponsors/atb.png" }) {
      ...fluidImage
    }
    ccal: file(relativePath: { eq: "sponsors/ccal.jpg" }) {
      ...fluidImage
    }
    haskayne: file(relativePath: { eq: "sponsors/haskayne.jpg" }) {
      ...fluidImage
    }
    husky: file(relativePath: { eq: "sponsors/Husky.png" }) {
      ...fluidImage
    }
    aeso: file(relativePath: { eq: "sponsors/aeso.png" }) {
      ...fluidImage
    }
    capp: file(relativePath: { eq: "sponsors/capp.png" }) {
      ...fluidImage
    }
    enbridge: file(relativePath: { eq: "sponsors/enbridge.png" }) {
      ...fluidImage
    }
    rockmount: file(relativePath: { eq: "sponsors/rockmount.png" }) {
      ...fluidImage
    }
    pepsico: file(relativePath: { eq: "sponsors/pepsico.jpg" }) {
      ...fluidImage
    }
    pwc: file(relativePath: { eq: "sponsors/pwc.png" }) {
      ...fluidImage
    }
  }
`;

const SponsorList = ({paddingTop}) => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <section style={{ paddingTop }}>
        <Container>
          <Tier>
            <TierTitle>
              { allProfiles.title.tierTitle }
            </TierTitle>
            <LogoCard>
              <CompanyProfile profile={allProfiles.title.sponsors.nutrien}>
                <Logo fluid={data.nutrien.childImageSharp.fluid} alt={allProfiles.title.sponsors.nutrien.name + ' logo'} />
              </CompanyProfile>
            </LogoCard>
          </Tier>
          <Tier>
            <TierTitle>
              { allProfiles.gold.tierTitle }
            </TierTitle>
            <LogoCard>
              <CompanyProfile profile={allProfiles.gold.sponsors.ced}>
                <Logo fluid={data.ced.childImageSharp.fluid} alt={allProfiles.gold.sponsors.ced.name + ' logo'} />
              </CompanyProfile>
            </LogoCard>
          </Tier>
          <Tier>
          <Tier>
            <TierTitle>
              { allProfiles.innovation.tierTitle }
            </TierTitle>
            <LogoCard>
              <CompanyProfile profile={allProfiles.innovation.sponsors.hunterhub}>
                <Logo fluid={data.hunterhub.childImageSharp.fluid} alt={allProfiles.innovation.sponsors.hunterhub.name + ' logo'} className="hunter-hub" />
              </CompanyProfile>
              <CompanyProfile profile={allProfiles.innovation.sponsors.avnet}>
                <Logo fluid={data.avnet.childImageSharp.fluid} alt={allProfiles.innovation.sponsors.avnet.name + ' logo'} className="avnet" />
              </CompanyProfile>
              <SponsorLink href={allProfiles.innovation.sponsors.benevity.website} target="_blank" rel="noopener noreferrer">
                <Logo fluid={data.benevity.childImageSharp.fluid} alt={allProfiles.innovation.sponsors.benevity.name + ' logo'} />
              </SponsorLink>
            </LogoCard>
          </Tier>
            <TierTitle>
              { allProfiles.silver.tierTitle }
            </TierTitle>
            <LogoCard>
              <SponsorLink href={allProfiles.silver.sponsors.atb.website} target="_blank" rel="noopener noreferrer">
                <Logo fluid={data.atb.childImageSharp.fluid} alt={allProfiles.silver.sponsors.atb.name + ' logo'} />
              </SponsorLink>
              <CompanyProfile profile={allProfiles.silver.sponsors.ccal}>
                <Logo fluid={data.ccal.childImageSharp.fluid} alt={allProfiles.silver.sponsors.ccal.name + ' logo'} className="ccal" />
              </CompanyProfile>
              <CompanyProfile profile={allProfiles.silver.sponsors.haskayne}>
                <Logo fluid={data.haskayne.childImageSharp.fluid} alt={allProfiles.silver.sponsors.haskayne.name + ' logo'} />
              </CompanyProfile>
            </LogoCard>
          </Tier>
          <Tier>
            <TierTitle>
              { allProfiles.bronze.tierTitle }
            </TierTitle>
            <LogoCard>
              <CompanyProfile profile={allProfiles.bronze.sponsors.husky} >
                <Logo fluid={data.husky.childImageSharp.fluid} alt={allProfiles.bronze.sponsors.husky.name + ' logo'} className="husky" />
              </CompanyProfile>
              <SponsorLink href={allProfiles.bronze.sponsors.aeso.website} target="_blank" rel="noopener noreferrer">
                <Logo fluid={data.aeso.childImageSharp.fluid} alt={allProfiles.bronze.sponsors.aeso.name + ' logo'} className="aeso" />
              </SponsorLink>
              <CompanyProfile profile={allProfiles.bronze.sponsors.capp}>
                <Logo fluid={data.capp.childImageSharp.fluid} alt={allProfiles.bronze.sponsors.capp.name + ' logo'} className="capp" />
              </CompanyProfile>
              <SponsorLink href={allProfiles.bronze.sponsors.enbridge.website} target="_blank" rel="noopener noreferrer">
                <Logo fluid={data.enbridge.childImageSharp.fluid} alt={allProfiles.bronze.sponsors.enbridge.name + ' logo'} className="enbridge" />
              </SponsorLink>
              <SponsorLink href={allProfiles.bronze.sponsors.rockmount.website} target="_blank" rel="noopener noreferrer">
                <Logo fluid={data.rockmount.childImageSharp.fluid} alt={allProfiles.bronze.sponsors.rockmount.name + ' logo'} className="rockmount" />
              </SponsorLink>
              <SponsorLink href={allProfiles.bronze.sponsors.pepsico.website} target="_blank" rel="noopener noreferrer">
                <Logo fluid={data.pepsico.childImageSharp.fluid} alt={allProfiles.bronze.sponsors.pepsico.name + ' logo'} className="pepsico" />
              </SponsorLink>
            </LogoCard>
          </Tier>
          <Tier>
            <TierTitle>
              { allProfiles.meal.tierTitle }
            </TierTitle>
            <LogoCard>
              <CompanyProfile profile={allProfiles.meal.sponsors.pwc}>
                <Logo fluid={data.pwc.childImageSharp.fluid} alt={allProfiles.meal.sponsors.pwc.name + ' logo'} className="pwc" />
              </CompanyProfile>
            </LogoCard>
          </Tier>
        </Container>
      </section>
    )}
  />
);

SponsorList.defaultProps = {
  paddingTop: '0',
};

SponsorList.propTypes = {
  paddingTop: PropTypes.string,
};

export default SponsorList;
