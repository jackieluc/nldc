import React from 'react'
import { Card, CardImg, CardSubtitle } from 'reactstrap'
import styled from 'styled-components'
import Media from '../../utils/media'
import Styles from '../../utils/styles'
import MailIcon from '../../images/mail-icon.png'

const StyledCard = styled(Card)`
	width: 360px;
	margin: 3rem 0;
	${Media.tablet`margin: 3rem 15px;`}
	padding: 30px 10px;
	${Media.medPhone`padding: 30px;`}
	border-radius: 8px;
	border: 0;

	// Make President be at the top
	&:first-of-type {
		${Media.laptop`margin: 3rem 14rem;`}
	}
`

const StyledImage = styled(CardImg)`
	margin-top: -60px;
	margin-bottom: 30px;
	border-radius: 8px;
	${Styles.shadow}
`

const Name = styled.div`
	width: 210px;
	text-align: center;
	background-color: ${Styles.lightRed};
	margin-left: -10px;
	${Media.medPhone`margin-left: -30px;`}
	margin-bottom: 20px;
	padding: 20px 30px;
	border-radius: 0 8px 8px 0;
	${Styles.buttonShadow}

	h2 {
		color: white;
		font-size: 1.5rem;
		margin: 0;
	}
`

const Info = styled.div`
	text-align: center;
	color: ${Styles.themeColour};
	display: flex;
	flex-direction: column;

	.email {
		font-size: 14px;
		margin-top: 20px;

		&:before {
			content: '';
			display: inline-block;
			background: url(${MailIcon}) center no-repeat;
			height: 24px;
			width: 24px;
			vertical-align: middle;
			margin-right: 5px;
		}
	}
`

const ProfileCard = ({ name, title, position, image, email }) => (
	<StyledCard>
		<StyledImage top width='100%' src={image} alt='image' />
		<div>
			<Name>
				<h2>{name}</h2>
			</Name>
			<Info>
				{title ? <CardSubtitle style={{ marginBottom: '10px' }}>{title}</CardSubtitle> : ''}
				<CardSubtitle style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{position}</CardSubtitle>
				{email ? (
					<a href={'mailto:' + email} className='email'>
						{email}
					</a>
				) : (
					''
				)}
			</Info>
		</div>
	</StyledCard>
)

export default ProfileCard
