import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import Media from '../utils/media'
import Styles from '../utils/styles'
import SeoImage from '../images/seo-image.png'
import leaders from '../data/leaderData'
import LeaderCard from '../components/Cards/LeaderCard'
import CCAL from '../images/dinner-with-leaders/ccal.png'

const Wrapper = styled.section`
	background-image: linear-gradient(135deg, #74c7d9 40%, #037ef3 100%);
	padding-top: 8rem;
	padding-bottom: 4rem;
`

const TitleWrapper = styled.div`
	max-width: 360px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 15px;
	margin: 0 auto 1rem auto;

	img {
		width: 260px;
		${Media.tablet`
			width: 360px;
		`}
	}
`

const Title = styled.h1`
	color: ${Styles.textColour};
	font-size: 2rem;
	text-align: left;

	span {
		font-family: BillyOhio, lato, sans-serif;
		font-size: 80px;
	}
`

const Subtitle = styled.p`
	color: ${Styles.textColour};
	text-align: center;
	max-width: 560px;
	margin: 0 auto 2rem auto;
	${Media.tablet`
    margin: 0 auto;
  `}
`

const LeadersWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	${Media.laptop`justify-content: space-evenly;`}
	flex-wrap: wrap;
`

const DinnerWithLeaders = () => (
	<Layout noFooter>
		<Wrapper>
			<Helmet>
				<title>Dinner with Leaders | NLDC 2019</title>
				<link rel='canonical' href='https://www.nldcnow.com/dinner-with-leaders' />
				<meta
					name='description'
					content='Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary.'
				/>
				<meta
					name='keywords'
					content='nldc 2019 team, team, nldc team, aiesec team, group, teamwork, leadership, organization'
				/>
				<meta property='og:title' content='Dinner with Leaders | NLDC 2019' />
				<meta property='og:type' content='website' />
				<meta
					property='og:description'
					content='Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary.'
				/>
				<meta property='og:url' content='https://www.nldcnow.com/dinner-with-leaders' />
				<meta property='og:site_name' content='Dinner with Leaders | NLDC 2019' />
				<meta property='og:image' content={`https://www.nldcnow.com${SeoImage}`} />
				<meta property='fb:app_id' content='594354454320006' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:url' content='https://www.nldcnow.com/dinner-with-leaders' />
				<meta name='twitter:title' content='Dinner with Leaders | NLDC 2019' />
				<meta
					name='twitter:description'
					content='Join us in &#34;Disrupting the Now!&#34; May 1&ndash;5, 2019 at the National Leadership Development Conference in Calgary.'
				/>
				<meta name='twitter:image' content={`https://www.nldcnow.com${SeoImage}`} />
			</Helmet>
			<Container fluid style={{ zIndex: '0' }}>
				<TitleWrapper>
					<img src={CCAL} alt='CCAL Logo' />
					<Title>
						Dinner with <span>Leaders</span>
					</Title>
				</TitleWrapper>
				<Subtitle>
					Please meet our esteemed Calgary business leaders who will be joining us in the CCAL Dinner with Leaders event
					as part of the Youth to Business Launch 2019!
				</Subtitle>
				<LeadersWrapper>
					{leaders.map(leader => (
						<LeaderCard key={leader.organization} {...leader} />
					))}
				</LeadersWrapper>
			</Container>
		</Wrapper>
	</Layout>
)

export default DinnerWithLeaders
