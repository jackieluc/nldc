import React from 'react'
import styled from 'styled-components'
import loadScript from 'load-script'

const AddToCalendar = styled.button`
	// Overwrite AddEvent 'Add to Calendar' styling
	border-radius: 40px !important;
	padding: 13px 12px 12px 35px !important;

	&:focus {
		outline-color: -webkit-focus-ring-color;
	}
	&.addeventatc {
		font-family: 'Lato', sans-serif !important;
		font-size: 1rem !important;
		z-index: 2 !important;
		font-weight: 400;
		width: 12rem;
		-webkit-box-shadow: 0 3px 6px rgba(75, 97, 141, 0.3), 0 3px 6px rgba(75, 97, 141, 0.5) !important;
		box-shadow: 0 3px 6px rgba(75, 97, 141, 0.3), 0 3px 6px rgba(75, 97, 141, 0.5) !important;
		&:hover {
			-webkit-box-shadow: 0 5px 8px rgba(75, 97, 141, 0.4), 0 5px 8px rgba(75, 97, 141, 0.6) !important;
			box-shadow: 0 5px 8px rgba(75, 97, 141, 0.4), 0 5px 8px rgba(75, 97, 141, 0.6) !important;
		}

		// Overwrite AddEvent dropdown styles
		.addeventatc_dropdown {
			font-family: 'Lato', sans-serif !important;
			font-size: 1rem !important;
			width: 12rem !important;

			> span {
				font-weight: 400;
			}

			&.addeventatc-selected {
				left: 0 !important;
				z-index: 2 !important;
				-webkit-box-shadow: rgba(75, 97, 141, 0.3) 0px 10px 26px !important;
				box-shadow: rgba(75, 97, 141, 0.3) 0px 10px 26px !important;
			}

			.copyx,
			.ateyahoo,
			em {
				display: none !important;
			}
		}

		// Overwrite AddEvent icon position
		.addeventatc_icon {
			left: 20px !important;
			top: 16px !important;
			width: 24px;
			height: 24px;
			background-size: 24px 24px;
		}
	}
`

const CalendarSubtitle = styled.em`
	display: block;
	font-size: 12px;
	margin: 3px 20px 0 0 !important;
	color: #777777;
`

export default class CalendarCta extends React.Component {
	constructor(props) {
		super(props)
		this.state = { loading: true }
	}

	componentDidMount() {
		this.loadExternalScript('https://addevent.com/libs/atc/1.6.1/atc.min.js')
			.then(success => this.setState({ loading: false }))
			.catch(error => this.setState({ loading: true }))
	}

	loadExternalScript = url =>
		new Promise((resolve, reject) => {
			loadScript(url, error => {
				if (error) {
					reject(error)
				}
				return resolve()
			})
		})

	render() {
		const { loading } = this.state
		const { category } = this.props

		if (loading) return null

		return (
			<AddToCalendar className='addeventatc' aria-label='Add to Calendar'>
				{category === 'aiesec' ? 'May 1-5, 2019' : 'May 1-2, 2019'}
				<CalendarSubtitle>Add to Calendar</CalendarSubtitle>
				<span className='start'>05/01/2019 09:00 AM</span>
				<span className='end'>{category === 'aiesec' ? '05/05/2019 11:59 PM' : '05/02/2019 11:59 PM'}</span>
				<span className='timezone'>America/Edmonton</span>
				<span className='title'>NLDC 2019 | AIESEC in CANADA</span>
				<span className='description'>
					{
						// eslint-disable-next-line
					}{' '}
					Join AIESEC in Canada in &quot;Disrupting the Now&quot; at the National Leadership Development Conference in
					Calgary, Alberta from May 1&ndash;5, 2019.
				</span>
				<span className='location'>1301-16 Avenue NW Calgary AB, T2M OL4</span>
				<span className='organizer'>AIESEC in Canada</span>
				<span className='organizer_email'>kkaren.ngo@aiesec.net</span>
				<span className='all_day_event'>true</span>
			</AddToCalendar>
		)
	}
}
