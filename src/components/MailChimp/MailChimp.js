import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Form, Label, Input } from 'reactstrap';
import styles from '../../utils/styles';
import Media from '../../utils/media';

const StyledForm = styled(Form)`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledLabel = styled(Label)`
  display: inline-block;
  width: 290px;
  text-align: left;
`;

const StyledInput = styled(Input)`
  margin-top: 0.5rem;
`;

const SubmitButton = styled(Input)`
  display: inline-block;
  border-radius: 4px;
  width: 290px;
  padding: 6px;
  margin: 0;
  color: #FFFFFF;
  border: none;
  background-color: ${styles.themeColour};
  ${styles.shadow}

  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: ${styles.hoverColour};
    cursor: pointer;
  }

  ${Media.tablet`
    width: 150px;
    margin-left: 8px;
  `}
`;

export default function MailChimp({ className }) {
  return (
    <StyledForm
      className={className}
      action="//nldcnow.us19.list-manage.com/subscribe/post?u=fe2fa79735e47235c75788bce&amp;id=fb15ca4f23"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
    >
      <StyledLabel htmlFor="EMAIL">
        Subscribe for conference updates!
        <StyledInput
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Email address"
          required
        />
      </StyledLabel>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_fe2fa79735e47235c75788bce_fb15ca4f23" tabIndex="-1" value="" />
      </div>
      <SubmitButton type="submit" value="Get Updates" name="subscribe" id="mc-embedded-subscribe" />
    </StyledForm>
  );
}

MailChimp.defaultProps = {
  className: '',
};

MailChimp.propTypes = {
  className: PropTypes.string,
};
