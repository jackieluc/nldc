import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Styles from '../../utils/styles'
import { Container } from 'reactstrap'
import MailChimp from '../MailChimp/MailChimp'
import SocialMedia from './SocialMedia'

const FooterSection = styled.footer`
	background-image: linear-gradient(135deg, #74c7d9 40%, #037ef3 100%);
	margin: 0;
	padding-top: 80px;
	padding-bottom: 60px;
`

const Wrapper = styled.div`
	position: relative;
	display: block;
	text-align: center;
`

const StyledLink = styled(Link)`
	position: absolute;
	top: -135px;
	margin-left: -120px;
`

const ContactLink = styled.a`
	display: inline-block;
	margin-top: 1rem;
	color: black;

	&:hover {
		color: ${Styles.red};
		text-decoration: underline;
	}
`

const PageQuery = graphql`
	query {
		logo: file(relativePath: { eq: "nldc2019-logo-black.png" }) {
			childImageSharp {
				fixed(width: 240) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`

const Footer = props => (
	<StaticQuery
		query={PageQuery}
		render={data => (
			<FooterSection>
				<Wrapper>
					<StyledLink to='/'>
						<Img fixed={data.logo.childImageSharp.fixed} alt='NLDC 2019 Logo' />
					</StyledLink>
					<Container>
						<MailChimp />
						<SocialMedia />
						<ContactLink href='mailto:kkaren.ngo@aiesec.net'>Contact Us</ContactLink>
					</Container>
				</Wrapper>
			</FooterSection>
		)}
	/>
)

export default Footer
