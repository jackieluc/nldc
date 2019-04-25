import React from 'react'
import styled from 'styled-components'

const Disrupting = styled.text`
	font-family: BillyOhio, lato, sans-serif;
	font-size: 23px;
`

const The = styled.text`
	font-family: lato, sans-serif;
	font-weight: 300;
`

const Now = styled.text`
	font-family: lato, sans-serif;
	font-weight: 700;
	font-style: italic;
`

const Dot = styled(The)``

const Motto = () => (
	<svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 70 40' width='100%' height='100%'>
		<Disrupting x='0' y='20'>
			Disrupting
		</Disrupting>
		<The x='0' y='35'>
			the
		</The>
		<Now x='23' y='35'>
			now
		</Now>
		<Dot x='55' y='35'>
			.
		</Dot>
	</svg>
)

export default Motto
