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
        logo: Logos['nutrien.png'],
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
        logo: Logos['hunterhub.jpg'],
        description: ``,
        website: ``,
      },
      avnet: {
        name: 'Avnet',
        logo: Logos['avnet.png'],
        description: ``,
        website: ``,
      },
      benevity: {
        name: 'Benevity',
        logo: Logos['benevity.png'],
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
        logo: Logos['ced.png'],
        description: `
          <p>Calgary is the city of choice in Canada for the world’s best entrepreneurs. We embrace innovation and create solutions to meet the world’s needs in food, health, energy and transportation.<p>

          <p>Calgary Economic Development is an agency of the municipal government that collaborates with stakeholders to advance economic growth and diversification to create opportunities for all Calgarians. We work with businesses, governments, educators and community partners to position Calgary as a location of choice for business investment, which provides opportunities for our highly skilled workforce. We are conduits, catalysts, connectors and storytellers to facilitate prosperity in an innovative and entrepreneurial city. Guided by the economic strategy for Calgary, <em>Calgary in the New Economy</em>, our focus is on four key pillars: Talent, Innovation, Place, and Business Environment. We are committed to growing our established and emerging industry clusters which include Agribusiness, Energy, Transportation & Logistics, Creative Industries, Financial Services, Life Sciences/Health, and Tourism.</p>
        `,
        website: `https://www.calgaryeconomicdevelopment.com/`,
      },
    },
  },
  silver: {
    name: 'Silver',
    sponsors: {
      atb: {
        name: 'ATB Financial',
        logo: Logos['atb.png'],
        description: ``,
        website: ``,
      },
      ccal: {
        name: 'Canadian Center for Advanced Learning in Business',
        logo: Logos['ccal.jpg'],
        description: ``,
        website: ``,
      },
      haskayne: {
        name: 'Haskayne School of Business',
        logo: Logos['haskayne.jpg'],
        description: `
          <p>The Haskayne School of Business was founded at the University of Calgary in 1967, and is home to some of Canada’s brightest and most accomplished minds. An important member of the Canadian and international business communities, Haskayne maintains partnerships spanning the globe and an alumni network of over 25,000 in over 89 countries worldwide. The Haskayne School of Business was one of the first business schools in Canada to be accredited by the Association to Advance Collegiate Schools of Business (AACSB) in 1985, a stamp of quality held by less than five per cent of the world’s 16,000 business programs. The Haskayne School of Business offers a full range of degree programs including: Bachelor of Commerce, Master of Management (MMGMT), Master of Business Administration (MBA), Executive MBA, Global Energy Executive MBA, PhD in Management, Doctor of Business Administration (DBA), an interdisciplinary Master of Science degree in Sustainable Energy Development and a full range of open and customized Executive Education programs. For more information visit <a href="https://haskayne.ucalgary.ca" target="_blank" rel="noopener noreferrer">haskayne.ucalgary.ca</a></p>
        `,
        website: `https://haskayne.ucalgary.ca`,
      },
    },
  },
  bronze: {
    name: 'Bronze',
    sponsors: {
      husky: {
        name: 'Husky',
        logo: Logos['Husky.png'],
        description: `
          <p>Husky Energy is a Canadian-based integrated energy company, with two core businesses. Its <a href="https://huskyenergy.com/operations/#integrated-thermal-corridor" target=_"blank" rel="nopener noreferrer">Integrated Corridor</a> operates in Western Canada and the United States, where thermal production is integrated with the Downstream business and supported by Western Canada operations. <a href="https://huskyenergy.com/operations/#offshore" target=_"blank" rel="nopener noreferrer">Offshore</a> the Company is focused in the Asia Pacific and Atlantic regions.</p>
        
          <p>Our commitment to <a href="https://huskyenergy.com/responsibility/safety.asp" target="_blank" rel="noopener noreferrer">safety</a> helps to protect the public, our employees and contractors, and the environment. We apply what we learn and work to continually improve. At the centre of everything we do are our people, supported by a diverse and inclusive workplace. We strive to contribute positively to the quality of life for those living in the communities where we operate, reducing impacts and creating benefits.</p>
        
          <p>Co-op and Internship positions are offered year-round, with start dates in January, May and September and work terms of 4, 8, 12 or 16 months. Visit Husky’s <a href="https://jobs.huskyenergy.com/" target="_blank" rel="noopener noreferrer">careers website</a> to apply.</p>
        `,
        website: `http://www.huskyenergy.ca/`,
      },
      aeso: {
        name: 'Aeso',
        logo: Logos['aeso.png'],
        description: ``,
        website: ``,
      },
      capp: {
        name: `Canada's Energy Citizens`,
        logo: Logos['capp.png'],
        description: `
          <p>Canada’s Energy Citizens is the largest Canadian pro-oil and natural gas grassroots organization. Since launching in 2014, it has been successful in creating a network 500,000 industry supporters who are motivated to advocate and vocally defend oil and natural gas developed the Canadian way.</p>
        `,
        website: `https://www.energycitizens.ca/`,
      },
    },
  },
  meal: {
    name: 'Meal',
    sponsors: {
      pwc: {
        name: 'PWC',
        logo: Logos['pwc.png'],
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
            <Logo src={tiers.title.sponsors.nutrien.logo} alt="" />
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
          <CompanyProfile profile={tiers.gold.sponsors.ced}>
            <Logo src={tiers.gold.sponsors.ced.logo} alt="" />
          </CompanyProfile>
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
          <CompanyProfile profile={tiers.silver.sponsors.haskayne}>
            <Logo src={tiers.silver.sponsors.haskayne.logo} alt="" />
          </CompanyProfile>
        </LogoCard>
      </Tier>
      <Tier>
        <TierTitle>
          {tier.bronze}
        </TierTitle>
        <LogoCard>
          <CompanyProfile profile={tiers.bronze.sponsors.husky} >
            <Logo src={tiers.bronze.sponsors.husky.logo} alt="" />
          </CompanyProfile>
          <SponsorLink href="https://www.aeso.ca/" target="_blank" rel="noopener noreferrer">
            <Logo src={bronzeLogos.aeso} alt="" className="aeso" />
          </SponsorLink>
          <CompanyProfile profile={tiers.bronze.sponsors.capp}>
            <Logo src={tiers.bronze.sponsors.capp.logo} alt="" className="capp" />
          </CompanyProfile>
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
