import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Card, CardTitle, CardBody, ListGroup, ListGroupItem,
} from 'reactstrap';
import styles from '../../utils/styles';

const CardBodyContainer = styled(CardBody)`
  padding: 0 !important;
`;

const ListGroupItemContainer = styled(ListGroupItem)`
  width: 100%;
  text-align: left;
  border-radius: 0 !important;
  border-right: 0;
  border-left: 0;
  &:last-child {
    border-bottom: 0;
  }
`;

const List = styled(ListGroupItemContainer)``;

const SponsorPackage = ({ title, benefits }) => (
  <Card style={{ boxShadow: '0 3px 6px rgba(75, 97, 141, 0.3)' }}>
    <CardBodyContainer>
      <CardTitle style={{ color: styles.themeColour, margin: '1rem 0', fontWeight: 'bold' }}>
        {title}
      </CardTitle>
      <ListGroup>
        {
          benefits.map(benefit => (
            typeof (benefit) === 'string'
              ? (
                <ListGroupItemContainer>
                  {benefit}
                </ListGroupItemContainer>
              )
              : (
                <List>
                  <li style={{ listStyle: 'none' }}>
                    {benefit[0]}
                  </li>
                  {
                    benefit.slice(1).map(subBenefit => (
                      <li style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        {subBenefit}
                      </li>
                    ))
                  }
                </List>
              )
          ))
        }
      </ListGroup>
    </CardBodyContainer>
  </Card>
);

SponsorPackage.propTypes = {
  title: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(String).isRequired,
};

export default SponsorPackage;
