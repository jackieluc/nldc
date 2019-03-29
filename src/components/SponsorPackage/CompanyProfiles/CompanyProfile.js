/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import Media from '../../../utils/media';
import ButtonCTA from '../../Button/Button';

const Wrapper = styled.div`
  display: block;
  margin: 20px 10px;
`;

const ImageModalButton = styled(Button)`
  padding: 0;
  border: 0;

  & :hover,
  & :focus {
    outline: none;
    box-shadow: none;
  }
`;

const StyledHeader = styled(ModalHeader)`
  .modal-title {
    font-size: 1.5rem;

    ${Media.tablet`
      margin-left: 1rem;
    `}
  }
  .close {
    font-size: 2.5rem;
  }
`;

const StyledBody = styled(ModalBody)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin: 10px 0;
    max-width: 280px;
    ${Media.tablet`
      max-width: 400px;
      max-height: 100px;
    `}
  }
`;

const StyledDescription = styled.div`
  width: 100%;
  padding: 20px 5px 0 5px;
  ${Media.tablet`
    padding: 20px;
  `}

  p {
    margin-bottom: 10px;
  }
`;

export default class CompanyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { children, profile } = this.props;
    const { name, shortName, logo, description, website } = profile;

    return (
      <Wrapper>
        <ImageModalButton onClick={this.toggle} color="none">
          { children }
        </ImageModalButton>
        <Modal isOpen={isOpen} toggle={this.toggle} size="lg" centered>
          <StyledHeader toggle={this.toggle}>
            { name }
          </StyledHeader>
          <StyledBody>
            <img src={logo} />
            <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
          </StyledBody>
          <ModalFooter>
            <ButtonCTA link={website}>Visit { shortName ? shortName : name }</ButtonCTA>
          </ModalFooter>
        </Modal>
      </Wrapper>
    );
  }
};