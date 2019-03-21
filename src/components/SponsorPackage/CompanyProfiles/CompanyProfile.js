/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  margin: 20px 10px;
`;

const ImageModalButton = styled(Button)`
  padding: 0;

  & :hover,
  & :focus {
    outline: none;
    box-shadow: none;
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
    const { name, image, description, website } = profile;

    return (
      <Wrapper>
        <ImageModalButton onClick={this.toggle} color="none">
          { children }
        </ImageModalButton>
        <Modal isOpen={isOpen} toggle={this.toggle} size="lg" centered>
          <ModalBody>
            <h2>{ name }</h2>
            <img src={image} />
            <p>{ description }</p>
            <a href={website}>Website</a>
          </ModalBody>
        </Modal>
      </Wrapper>
    );
  }
};