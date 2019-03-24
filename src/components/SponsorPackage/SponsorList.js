import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'reactstrap';
import styled from 'styled-components';
import { sponsorLogos as Logos } from '../../utils/logos';
import Media from '../../utils/media';
import Styles from '../../utils/styles';
import CompanyProfile from './CompanyProfiles/CompanyProfile';

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

const tiers = {
  title: {
    name: 'Title',
    sponsors: {
      nutrien: {
        name: 'Nutrien',
        image: Logos['nutrien.png'],
        description: `Test description.`,
        website: `https://www.nutrien.com/`,
      },
    },
  },
  innovation: {
    name: 'Innovation',
    sponsors: {
      hunterhub: {
        name: 'Hunter Hub for Entrepreneurial Thinking',
        image: Logos['hunterhub.jpg'],
        description: ``,
        website: ``,
      },
      avnet: {
        name: 'Avnet',
        image: Logos['avnet.png'],
        description: ``,
        website: ``,
      },
      benevity: {
        name: 'Benevity',
        image: Logos['benevity.png'],
        description: ``,
        website: ``,
      },
    },
  },
  gold: {
    name: 'Gold',
    sponsors: {
      ced: {
        name: 'Calgary Economic Development',
        image: Logos['ced.png'],
        description: ``,
        website: ``,
      },
    },
  },
  silver: {
    name: 'Silver',
    sponsors: {
      atb: {
        name: 'ATB Financial',
        image: Logos['atb.png'],
        description: ``,
        website: ``,
      },
      ccal: {
        name: 'Canadian Center for Advanced Learning in Business',
        image: Logos['ccal.jpg'],
        description: ``,
        website: ``,
      },
      atb: {
        name: 'Haskayne School of Business',
        image: Logos['haskayne.jpg'],
        description: ``,
        website: ``,
      },
    },
  },
  bronze: {
    name: 'Bronze',
    sponsors: {
      husky: {
        name: 'Husky',
        image: Logos['Husky.png'],
        description: `<p>Husky Energy is a Canadian-based integrated energy company, with two core businesses. Its <a href="https://huskyenergy.com/operations/#integrated-thermal-corridor" target=_"blank" rel="nopener noreferrer">Integrated Corridor</a> operates in Western Canada and the United States, where thermal production is integrated with the Downstream business and supported by Western Canada operations. <a href="https://huskyenergy.com/operations/#offshore" target=_"blank" rel="nopener noreferrer">Offshore</a> the Company is focused in the Asia Pacific and Atlantic regions.</p>
        
        <p>Our commitment to <a href="https://huskyenergy.com/responsibility/safety.asp" target="_blank" rel="noopener noreferrer">safety</a> helps to protect the public, our employees and contractors, and the environment. We apply what we learn and work to continually improve. At the centre of everything we do are our people, supported by a diverse and inclusive workplace. We strive to contribute positively to the quality of life for those living in the communities where we operate, reducing impacts and creating benefits.</p>
        
        <p>Co-op and Internship positions are offered year-round, with start dates in January, May and September and work terms of 4, 8, 12 or 16 months. Visit Husky’s <a href="https://jobs.huskyenergy.com/" target="_blank" rel="noopener noreferrer">careers website</a> to apply.</p>`,
        website: `http://www.huskyenergy.ca/`,
      },
      aeso: {
        name: 'Aeso',
        image: Logos['aeso.png'],
        description: ``,
        website: ``,
      },
      capp: {
        name: `Canada's Energy Citizens`,
        image: Logos['capp.png'],
        description: ``,
        website: ``,
      },
    },
  },
  meal: {
    name: 'Meal',
    sponsors: {
      pwc: {
        name: 'PWC',
        image: Logos['pwc.png'],
        description: ``,
        website: ``,
      },
    },
  },
};

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
  benevity: Logos['benevity.png'],
};

const goldLogos = {
  ced: Logos['ced.png'],
};

const silverLogos = {
  atb: Logos['atb.png'],
  ccal: Logos['ccal.jpg'],
  haskayne: Logos['haskayne.jpg'],
};

const bronzeLogos = {
  husky: Logos['Husky.png'],
  aeso: Logos['aeso.png'],
  capp: Logos['capp.png'],
};

const mealLogos = {
  pwc: Logos['pwc.png'],
};

const SponsorList = ({ paddingTop }) => (
  <section style={{ paddingTop }}>
    <Container>
      <Tier>
        <TierTitle>
          { tiers.title.name }
        </TierTitle>
        <LogoCard>
          <SponsorLink href={tiers.title.sponsors.nutrien.website} target="_blank" rel="noopener noreferrer">
            <Logo src={tiers.title.sponsors.nutrien.image} alt="" />
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
          <SponsorLink href="https://www.avnet.com/" target="_blank" rel="noopener noreferrer">
            <Logo src={innovationLogos.benevity} alt="" className="" />
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
            <Logo src={silverLogos.ccal} alt="" className="ccal" />
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
          <CompanyProfile profile={tiers.bronze.sponsors.husky} >
            <Logo src={tiers.bronze.sponsors.husky.image} alt="" />
          </CompanyProfile>
          <SponsorLink href="https://www.aeso.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={bronzeLogos.aeso} alt="" className="aeso" />
          </SponsorLink>
          <SponsorLink href="https://www.energycitizens.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={bronzeLogos.capp} alt="" className="capp" />
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
