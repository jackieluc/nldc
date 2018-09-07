import React from 'react';
import styled from 'styled-components';
import loadScript from 'load-script';

const AddToCalendar = styled.a`
  // Overwrite AddEvent 'Add to Calendar' styling
  &:focus {
    outline: none;
  }
  &.addeventatc {
    font-family: 'Lato', sans-serif !important;
    font-size: 1rem !important;
    padding: 13px 12px 12px 58px !important;
    z-index: 2 !important;
    font-weight: 400;
    width: 150px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !important;
    &:hover {
      box-shadow: 0 5px 8px rgba(0,0,0,0.25), 0 5px 8px rgba(0,0,0,0.22) !important;
    }

    // Overwrite AddEvent dropdown styles
    .addeventatc_dropdown {
      font-family: 'Lato', sans-serif !important;
      font-size: 1rem !important;
      width: 222px !important;

      > span {
        font-weight: 400;
      }

      &.addeventatc-selected {
        left: 0 !important;
        top: 58px !important;
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
      top: 18px !important;
    }
  }
`;

const CalendarSubtitle = styled.em`
  display: block;
  font-size: 12px;
  margin: 3px 0 0 0 !important;
  color: #777777;
`;

export default class CalendarCta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.loadExternalScript('https://addevent.com/libs/atc/1.6.1/atc.min.js')
      .then(success => this.setState({ loading: false }))
      .catch(error => this.setState({ loading: true }));
  }

  loadExternalScript = url => new Promise((resolve, reject) => {
    loadScript(url, (error) => {
      if (error) { reject(error); }
      return (resolve());
    });
  });

  render() {
    const { loading } = this.state;

    if (loading) return null;

    return (
      <AddToCalendar title="Add to Calendar" className="addeventatc" href="void(0)">
        May 1&ndash;5, 2019
        <CalendarSubtitle>
          Add to Calendar
        </CalendarSubtitle>
        <span className="start">
          05/01/2019 09:00 AM
        </span>
        <span className="end">
          05/05/2019 11:59 PM
        </span>
        <span className="timezone">
          America/Edmonton
        </span>
        <span className="title">
          AIESEC CANADA | NLDC 2019
        </span>
        <span className="description">
          { // eslint-disable-next-line
          } Join AIESEC Canada in &quot;Disrupting the Now&quot; at the National Leadership Development Conference in Calgary, Alberta from May 1&ndash;5, 2019.
        </span>
        <span className="location">
          1301-16 Avenue NW Calgary AB, T2M OL4
        </span>
        <span className="organizer">
          AIESEC Canada
        </span>
        <span className="organizer_email">
          kkaren.ngo@aiesec.net
        </span>
        <span className="all_day_event">
          true
        </span>
      </AddToCalendar>
    );
  }
}