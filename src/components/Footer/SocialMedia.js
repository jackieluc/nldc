import React from 'react'
import styled from 'styled-components'
import FacebookLogo from '../../images/social-media/facebook.png'
import LinkedinLogo from '../../images/social-media/linkedin.png'
import InstagramLogo from '../../images/social-media/instagram.png'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	p,
	a {
		margin: 0 6px;
		font-weight: bold;

		img {
			width: 32px;
			height: 32px;
		}
	}
`

export default function SocialMedia() {
	return (
		<Wrapper>
			<p>#DisruptingTheNow</p>
			<a href='https://www.facebook.com/AIESECCanadaNLDC/' target='_blank' rel='noopener noreferrer'>
				<img src={FacebookLogo} alt='Facebook Logo - link to NLDC 2019 Facebook page' />
			</a>
			<a href='https://www.linkedin.com/company/aiesec-canada/' target='_blank' rel='noopener noreferrer'>
				<img src={LinkedinLogo} alt='LinkedIn Logo - link to NLDC 2019 LinkedIn page' />
			</a>
			<a href='https://www.instagram.com/aieseccanadanldc/' target='_blank' rel='noopener noreferrer'>
				<img src={InstagramLogo} alt='Instagram Logo - link to NLDC 2019 Instagram page' />
			</a>
		</Wrapper>
	)
}
