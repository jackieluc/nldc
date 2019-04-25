import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Media from '../../utils/media'
import AiesecLogo from '../../images/aiesec-logo.png'
import ButtonCTA from '../Button/Button'

const Wrapper = styled.section`
	background-image: linear-gradient(135deg, #74c7d9 40%, #037ef3 100%);
`

const About = styled.div`
	color: white;
`

const Logo = styled.div`
	margin-bottom: 2rem;

	> img {
		width: 300px;
		${Media.tablet`width: 380px`}
	}
`

const Text = styled.p`
	text-align: left;
	${Media.tablet`text-align: center;`}
`

const AboutAiesec = () => (
	<Wrapper id='about-aiesec'>
		<Container fluid>
			<Row>
				<Col xs='12' md='10' lg='8' xl='6' style={{ margin: '0 auto' }}>
					<About>
						<Logo>
							<img src={AiesecLogo} alt='AIESEC Logo' />
						</Logo>
						<Text>
							{
								// eslint-disable-next-line
							}{' '}
							AIESEC is the largest non-governmental not-for-profit organisation offering platforms for young people to
							explore and develop their leadership through our global exchange program. Since we were founded, we have
							engaged and developed over 1,000,000 AIESECers.
						</Text>
						<Text>
							{
								// eslint-disable-next-line
							}{' '}
							We are in consultative status with the United Nations Economic and Social Council (ECOSOC), affiliated
							with the UN DPI, member of ICMYO, and is recognized by UNESCO.
						</Text>
						<ButtonCTA type='ghost' link='https://www.aiesec.ca/'>
							Find out More About AIESEC
						</ButtonCTA>
					</About>
				</Col>
			</Row>
		</Container>
	</Wrapper>
)

export default AboutAiesec
