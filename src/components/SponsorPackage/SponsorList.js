import React from 'react'
import PropTypes from 'prop-types'
import { Container, Card } from 'reactstrap'
import styled from 'styled-components'
import Media from '../../utils/media'
import Styles from '../../utils/styles'
import CompanyProfile from './CompanyProfiles/CompanyProfile'
import allProfiles from '../../data/sponsorData'

const Tier = styled.div`
	width: 100%;
	max-width: 640px;
	margin-left: auto;
	margin-right: auto;
`

const TierTitle = styled.h3`
	color: ${Styles.textColour};
	margin-bottom: 1rem;
`

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
`

const SponsorLink = styled.a`
	display: block;
	margin: 20px 10px;
	text-decoration: none;
`

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
`

const SponsorList = ({ paddingTop }) => (
	<section style={{ paddingTop }}>
		<Container>
			<Tier>
				<TierTitle>{allProfiles.title.tierTitle}</TierTitle>
				<LogoCard>
					<CompanyProfile profile={allProfiles.title.sponsors.nutrien}>
						<Logo
							src={allProfiles.title.sponsors.nutrien.logo}
							alt={allProfiles.title.sponsors.nutrien.name + ' logo'}
						/>
					</CompanyProfile>
				</LogoCard>
			</Tier>
			<Tier>
				<TierTitle>{allProfiles.gold.tierTitle}</TierTitle>
				<LogoCard>
					<CompanyProfile profile={allProfiles.gold.sponsors.ced}>
						<Logo src={allProfiles.gold.sponsors.ced.logo} alt={allProfiles.gold.sponsors.ced.name + ' logo'} />
					</CompanyProfile>
				</LogoCard>
			</Tier>
			<Tier>
				<Tier>
					<TierTitle>{allProfiles.innovation.tierTitle}</TierTitle>
					<LogoCard>
						<CompanyProfile profile={allProfiles.innovation.sponsors.hunterhub}>
							<Logo
								src={allProfiles.innovation.sponsors.hunterhub.logo}
								alt={allProfiles.innovation.sponsors.hunterhub.name + ' logo'}
								className='hunter-hub'
							/>
						</CompanyProfile>
						<CompanyProfile profile={allProfiles.innovation.sponsors.avnet}>
							<Logo
								src={allProfiles.innovation.sponsors.avnet.logo}
								alt={allProfiles.innovation.sponsors.avnet.name + ' logo'}
								className='avnet'
							/>
						</CompanyProfile>
						<SponsorLink
							href={allProfiles.innovation.sponsors.benevity.website}
							target='_blank'
							rel='noopener noreferrer'
						>
							<Logo
								src={allProfiles.innovation.sponsors.benevity.logo}
								alt={allProfiles.innovation.sponsors.benevity.name + ' logo'}
							/>
						</SponsorLink>
					</LogoCard>
				</Tier>
				<TierTitle>{allProfiles.silver.tierTitle}</TierTitle>
				<LogoCard>
					<SponsorLink href={allProfiles.silver.sponsors.atb.website} target='_blank' rel='noopener noreferrer'>
						<Logo src={allProfiles.silver.sponsors.atb.logo} alt={allProfiles.silver.sponsors.atb.name + ' logo'} />
					</SponsorLink>
					<CompanyProfile profile={allProfiles.silver.sponsors.ccal}>
						<Logo
							src={allProfiles.silver.sponsors.ccal.logo}
							alt={allProfiles.silver.sponsors.ccal.name + ' logo'}
							className='ccal'
						/>
					</CompanyProfile>
					<CompanyProfile profile={allProfiles.silver.sponsors.haskayne}>
						<Logo
							src={allProfiles.silver.sponsors.haskayne.logo}
							alt={allProfiles.silver.sponsors.haskayne.name + ' logo'}
						/>
					</CompanyProfile>
				</LogoCard>
			</Tier>
			<Tier>
				<TierTitle>{allProfiles.bronze.tierTitle}</TierTitle>
				<LogoCard>
					<CompanyProfile profile={allProfiles.bronze.sponsors.husky}>
						<Logo
							src={allProfiles.bronze.sponsors.husky.logo}
							alt={allProfiles.bronze.sponsors.husky.name + ' logo'}
							className='husky'
						/>
					</CompanyProfile>
					<SponsorLink href={allProfiles.bronze.sponsors.aeso.website} target='_blank' rel='noopener noreferrer'>
						<Logo
							src={allProfiles.bronze.sponsors.aeso.logo}
							alt={allProfiles.bronze.sponsors.aeso.name + ' logo'}
							className='aeso'
						/>
					</SponsorLink>
					<CompanyProfile profile={allProfiles.bronze.sponsors.capp}>
						<Logo
							src={allProfiles.bronze.sponsors.capp.logo}
							alt={allProfiles.bronze.sponsors.capp.name + ' logo'}
							className='capp'
						/>
					</CompanyProfile>
					<SponsorLink href={allProfiles.bronze.sponsors.enbridge.website} target='_blank' rel='noopener noreferrer'>
						<Logo
							src={allProfiles.bronze.sponsors.enbridge.logo}
							alt={allProfiles.bronze.sponsors.enbridge.name + ' logo'}
							className='enbridge'
						/>
					</SponsorLink>
					<SponsorLink href={allProfiles.bronze.sponsors.rockmount.website} target='_blank' rel='noopener noreferrer'>
						<Logo
							src={allProfiles.bronze.sponsors.rockmount.logo}
							alt={allProfiles.bronze.sponsors.rockmount.name + ' logo'}
							className='rockmount'
						/>
					</SponsorLink>
					<SponsorLink href={allProfiles.bronze.sponsors.pepsico.website} target='_blank' rel='noopener noreferrer'>
						<Logo
							src={allProfiles.bronze.sponsors.pepsico.logo}
							alt={allProfiles.bronze.sponsors.pepsico.name + ' logo'}
							className='pepsico'
						/>
					</SponsorLink>
				</LogoCard>
			</Tier>
			<Tier>
				<TierTitle>{allProfiles.meal.tierTitle}</TierTitle>
				<LogoCard>
					<CompanyProfile profile={allProfiles.meal.sponsors.pwc}>
						<Logo
							src={allProfiles.meal.sponsors.pwc.logo}
							alt={allProfiles.meal.sponsors.pwc.name + ' logo'}
							className='pwc'
						/>
					</CompanyProfile>
				</LogoCard>
			</Tier>
		</Container>
	</section>
)

SponsorList.defaultProps = {
	paddingTop: '0',
}

SponsorList.propTypes = {
	paddingTop: PropTypes.string,
}

export default SponsorList
