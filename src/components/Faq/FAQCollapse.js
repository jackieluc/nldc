import React, { Component } from 'react';
import {
  Collapse, CardBody, Card,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Styles from '../../utils/styles';
// import '../../images/plus.png';
// import '../../images/subtract.png';

const Wrapper = styled.div`
  width: 100%;

  ol,
  ul {
    margin-bottom: 0;
  }
  
  span {
    ${Styles.highlight}
    font-weight: bold;
  }

  &:last-of-type {
    border-bottom: 1px solid #DADADA;
    margin-bottom: 3rem;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background: white;
  color: ${Styles.textColour};
  border: 0;
  border-top: 1px solid #DADADA;
  border-radius: 0;
  text-align: left;
  cursor: pointer;
  padding: 1.25rem;
  font-size: 1.25rem;
  font-weight: bold;

  &:focus,
  &:hover {
    color: ${Styles.themeColour};
    outline: 0;
  }

  // &.open:after {
  //   display: inline-block;
  //   content: url('../static/media/plus.png');
  //   width: 32px;
  //   height: 32px;
  // }

  // &.closed:after {
  //   display: inline-block;
  //   content: url('../static/media/subtract.png');
  //   width: 32px;
  //   height: 32px;
  // }
`;

const StyledCard = styled(Card)`
  border: 0;
  text-align: left;
`;

const StyledCardBody = styled(CardBody)`
  padding: 0 1.25rem 1.25rem 1.25rem;
`;

class FAQCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }

  render() {
    const { collapse } = this.state;
    const { question, answer } = this.props;
    return (
      <Wrapper>
        <StyledButton onClick={this.toggle} className={collapse ? 'open' : 'closed'}>
          { question }
        </StyledButton>
        <Collapse isOpen={collapse}>
          <StyledCard>
            <StyledCardBody dangerouslySetInnerHTML={{ __html: answer }} />
          </StyledCard>
        </Collapse>
      </Wrapper>
    );
  }
}

FAQCollapse.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQCollapse;
