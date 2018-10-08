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
  border-right: 0;
  border-left: 0;

  &:first-child {
    border-radius: 0;
  }

  &:last-child {
    border-bottom: 0;
    border-radius: 0 0 10px 10px !important;
  }
`;

const List = styled(ListGroupItemContainer)``;

const SponsorPackage = ({ title, benefits }) => (
  <Card style={{ boxShadow: '0 3px 6px rgba(75, 97, 141, 0.3)', borderRadius: '10px' }}>
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
                  <li style={{ listStyle: 'none', marginBottom: '10px' }}>
                    {benefit[0]}
                  </li>
                  {
                    benefit.slice(1).map(subBenefit => (
                      <li style={{ listStylePosition: 'inside', paddingLeft: '1rem', paddingBottom: '6px' }}>
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
