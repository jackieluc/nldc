import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Form, Label, Input } from 'reactstrap';
import Styles from '../../utils/styles';
import Media from '../../utils/media';

const StyledForm = styled(Form)`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledLabel = styled(Label)`
  width: 290px;
  ${Media.tablet`width: 100%`};
  text-align: center;
  font-weight: bold;
`;

const StyledInput = styled(Input)`
  display: inline-block;
  width: 290px;
  margin: 0.5rem 0;
`;

const SubmitButton = styled(Input)`
  display: inline-block;
  width: 290px;
  border-radius: 40px;
  margin: 0;
  color: #FFFFFF;
  border: none;
  background-color: ${Styles.lightRed};
  ${Styles.shadow}

  &:hover,
  &:focus {
    color: #FFFFFF;
    background-color: ${Styles.red};
    cursor: pointer;
  }

  ${Media.tablet`
    width: 150px;
    margin-left: 8px;
  `}
`;

export default function MailChimp({ className, customContent }) {
  const defaultContent = 'Subscribe for conference updates!';

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
        { customContent !== '' ? customContent : defaultContent }
      </StyledLabel>
      <StyledInput
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        placeholder="Email address"
        required
      />
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_fe2fa79735e47235c75788bce_fb15ca4f23" tabIndex="-1" value="" />
      </div>
      <SubmitButton type="submit" value="Get Updates" name="subscribe" id="mc-embedded-subscribe" />
    </StyledForm>
  );
}

MailChimp.defaultProps = {
  className: '',
  customContent: '',
};

MailChimp.propTypes = {
  className: PropTypes.string,
  customContent: PropTypes.string,
};
