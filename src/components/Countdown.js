import React from 'react';
import Countdown from 'react-countdown-now';
import styled from 'styled-components';
import Styles from '../utils/styles';
import Media from '../utils/media';

const StyledLink = styled.a`
  font-size: 12px;
  padding: 14px 6px;
  width: 180px;
  letter-spacing 2px;
  text-decoration: none;
  background-image: linear-gradient( 135deg, rgba(232, 93, 94, 1) 40%, rgba(207, 66, 79, 1) 100%);
  border-radius: 6px;
  color: white;
  text-transform: uppercase;
  margin-top: auto;
  margin-bottom: auto;
  ${Styles.shadow}
  
  &:hover {
    color: white;
    background: ${Styles.red};
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: block;
  margin: 2rem 0 1rem 0;
  padding: 8px;
  background-color: white;
  border: 2px solid white;
  border-radius: 8px;
  ${Styles.shadow}
`;

const TimeComponent = styled.p`
  display: inline-block;
  font-size: 1rem;
  ${Media.tablet`font-size: 1.6rem;`}
  color: ${Styles.themeColour};
  font-weight: bold;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0 5px;
  ${Media.tablet`padding: 0 10px;`}

  span {
    font-size: 0.7rem;
  }
`;

const RenderTimer = ({ days, hours, minutes, seconds }) => (
  <>
    <TimeComponent>
      { days }
      <br/>
      <span>days</span>
    </TimeComponent>
    <TimeComponent>
      { hours }
      <br/>
      <span>hours</span>
    </TimeComponent>
    <TimeComponent>
      { minutes }
      <br/>
      <span>minutes</span>
    </TimeComponent>
    <TimeComponent>
      { seconds }
      <br />
      <span>seconds</span>
    </TimeComponent>
  </>
);

const renderer = (props) => {
  const { completed } = props;

  if (completed) {
    return <></>;
  } 
  else {
    return <>
            <Wrapper>
              <RenderTimer {...props} />
            </Wrapper>
            <StyledLink href="https://bit.ly/Y2B2019Forum">Get your tickets</StyledLink>
          </>;
  }
};

export default () => ( 
  <Countdown date={new Date('May 1, 2019 15:00:00')} renderer={renderer} />
);
