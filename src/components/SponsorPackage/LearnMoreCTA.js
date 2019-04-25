import React from 'react'
import styled from 'styled-components'
import Styles from '../../utils/styles'

const CTA = styled.a`
	display: inline-block;
	border-radius: 40px;
	padding: 0.7rem 2rem;
	margin: 0;
	margin-bottom: 2rem;
	color: #ffffff;
	border: none;
	background-color: ${Styles.lightRed};
	${Styles.shadow}

	&:hover,
  &:focus {
		color: #ffffff;
		background-color: ${Styles.red};
		cursor: pointer;
		text-decoration: none;
	}
`

const LearnMoreCTA = () => <CTA href='/sponsors'>Discover Sponsorship Benefits</CTA>

export default LearnMoreCTA
