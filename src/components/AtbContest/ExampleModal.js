/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const PageQuery = graphql`
  query {
    example: file(relativePath: { eq: "atbcontest-example.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;

export default class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <StaticQuery
      query={PageQuery}
      render={data => (
      <Wrapper>
        <Button color="danger" onClick={this.toggle} style={{ fontSize: '14px' }}>Click here to see an example</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" centered>
          <ModalBody>
            <Img fluid={data.example.childImageSharp.fluid} alt="ATB Contest Example" />
          </ModalBody>
        </Modal>
      </Wrapper>
      )}
      />
    );
  }
}
