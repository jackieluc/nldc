import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Media from '../../utils/media'
import DesktopMenu from './DesktopMenu'

const ResponsiveWrapper = styled.div`
	display: none;
	${Media.laptop`display: block;`}
`

const DesktopNavigation = ({ routes }) => (
	<ResponsiveWrapper>
		<DesktopMenu routes={routes} />
	</ResponsiveWrapper>
)

DesktopNavigation.propTypes = {
	routes: PropTypes.arrayOf(Object).isRequired,
}

export default DesktopNavigation
