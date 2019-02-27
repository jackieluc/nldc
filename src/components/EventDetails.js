import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Styles from '../utils/styles';
import AddToCalendar from './Calendar/AddToCalendar';
import Media from '../utils/media';
import Motto from './Motto';

const TallerContainer = styled(Container)`
  ${Media.laptop`
    margin-top: 3rem;
    margin-bottom: 3rem;
  `}
`;

const ConferenceDescription = styled.div`
  width: 100%;
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MottoWrapper = styled.div`
  margin: 0 auto 2rem auto;
  ${Media.medPhone`width: 20rem;`}
  ${Media.laptop`margin: 0 auto;`}
`;

const IframeWrapper = styled.div`
  display: none;
  ${Media.tablet`
    display: block;
    margin-bottom: 2rem;
  `}
  ${Media.laptop`
    margin-top: 2rem;
    margin-bottom: 0;
  `}

  iframe {
    ${Styles.shadow}
    ${Media.laptop`
      width: 440px;
      height: 247.5px;
    `}
    ${Media.desktop`
      width: 480px;
      height: 270px;
    `}
  }
`;

const BgOffset = styled.div`
  background-color: rgb(207, 66, 79);
  position: absolute;
  margin-top: 2rem;
  top: 195px;
  bottom: 0px;
  z-index: -1;
  ${Media.tablet`
    width: 480px;
    height: 270px;
    right: 40px;
  `}
  ${Media.laptop`
    width: 440px;
    height: 247.5px;
    right: 5px;
  `}
  ${Media.desktop`
    width: 480px;
    height: 270px;
    right: 75px;
  `}
`;

const DescriptionWrapper = styled(Col)`
  display: block;
  align-items: center;
  text-align: left;

  ${Media.tablet`
    border: 1px solid #ccc;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 10px;
    ${Styles.shadow}
  `}
`;

const EventDescription = styled.div`
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 2rem;
  
  div {
    display: inline-block;
    text-align: center;
    
    &:last-of-type {
      margin-top: 10px;
      ${Media.tablet`margin: 0 0 0 20px;`}
    }
  }
`;

const AddressLink = styled.a`
  text-align: left;
  display: block;
`;

const EventInfoTitle = styled.h2`
  display: inline;
  margin-bottom: 1rem;
  padding: 0px 0.1em;
  font-weight: bold;
  color: ${Styles.textColour};
  ${Styles.highlight}
`;

const EventDetails = () => (
  <section>
    <TallerContainer>
      <ConferenceDescription>
        <StyledRow>
          <Col xs="12" sm="10" lg="6" xl="7">
            {/* <MottoWrapper src={Motto} alt="Disrupting the now." /> */}
            <MottoWrapper>
              <Motto />
            </MottoWrapper>
            <IframeWrapper>
              <iframe width="480" height="270" src="https://www.youtube.com/embed/QEl_5L_37B0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <BgOffset />
            </IframeWrapper>
          </Col>
          <DescriptionWrapper xs="12" sm="10" lg="6" xl="5">
            <EventInfoTitle>
              What is NLDC?
            </EventInfoTitle>
            <EventDescription>
              <p>
                { // eslint-disable-next-line
                } AIESEC Canada’s National Leadership Development Conference is an annual 5-day event that brings together 300 business leaders from 30+ universities across Canada to network and develop their skills in teamwork, sales, finance, and marketing. In 2019, we are introducing the Innovation Series to connect our delegates with the leading businesses in technology and disruption.
              </p>
            </EventDescription>
            <EventInfoTitle>
              Where
            </EventInfoTitle>
            <EventDescription>
              <p>
                SAIT (Southern Alberta Institute of Technology)
              </p>
              <AddressLink href="https://www.google.com/maps/place/SAIT/@51.0640269,-114.0907061,17z/data=!3m1!4b1!4m5!3m4!1s0x53716f9268a69e81:0xb1db5e68bd61e28!8m2!3d51.065755!4d-114.0897771" target="_blank" rel="noopener noreferrer">
                1301-16 Avenue NW Calgary AB, T2M OL4
              </AddressLink>
            </EventDescription>
            <EventInfoTitle>
              Save the Date!
            </EventInfoTitle>
            <EventDescription>
              <div>
                <h4>AIESEC Delegates</h4>
                <AddToCalendar category="aiesec" />
              </div>
              <div>
                <h4>External Delegates</h4>
                <AddToCalendar category="external" />
              </div>
            </EventDescription>
          </DescriptionWrapper>
        </StyledRow>
      </ConferenceDescription>
    </TallerContainer>
  </section>
);

export default EventDetails;
