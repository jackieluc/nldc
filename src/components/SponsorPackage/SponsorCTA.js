import React from 'react'
import styled from 'styled-components'
import Styles from '../../utils/styles'

const CTA = styled.a`
	display: inline-block;
	border-radius: 40px;
	padding: 0.7rem 2rem;
	margin: 0;
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

const SponsorCTA = () => (
	<CTA href='mailto:jacoby.holder@aiesec.net?subject=Sponsorship Inquiry'>Become Our Partner</CTA>
)

export default SponsorCTA
