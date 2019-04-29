import React from 'react'
import { Card, CardImg, CardSubtitle } from 'reactstrap'
import styled from 'styled-components'
import Media from '../../utils/media'
import Styles from '../../utils/styles'

const StyledCard = styled(Card)`
	width: 360px;
	margin: 1rem 0;
	${Media.tablet`margin: 3rem 15px;`}
	padding: 30px 10px;
	${Media.medPhone`padding: 30px 15px;`}
	border-radius: 8px;
	border: 0;

	&:last-of-type {
		${Media.laptop`
      width: 850px;
    `}
	}
`

const StyledImage = styled(CardImg)`
	max-height: 120px;
	width: auto;
	max-width: 200px;
	margin: 0 auto 2rem auto;
`

const Leaders = styled.div`
	text-align: center;

	&:last-of-type {
		${Media.laptop`
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    `}

		.leader {
			margin: 1rem;
		}
	}

	.leader {
		margin-bottom: 1rem;
	}

	.name {
		font-size: 1.5rem;
		color: ${Styles.themeColour};
	}

	.position {
		color: ${Styles.textColour};
	}
`

const ProfileCard = ({ logo, leaders }) => (
	<StyledCard>
		<StyledImage top src={logo} alt='image' />
		<Leaders>
			{leaders.map(leader => (
				<div className='leader'>
					<p className='name'>{leader.firstName + ' ' + leader.lastName}</p>
					<p className='position'>{leader.position}</p>
				</div>
			))}
		</Leaders>
	</StyledCard>
)

export default ProfileCard
