import React from 'react';
import styled from 'styled-components';

const MailChimp = () => (
  <div
    id="mc_embed_signup"
    style={{
      background: '#fff',
      clear: 'left',
      font: '14px Helvetica,Arial,sans-serif',
      width: '100%',
    }}
  >
    <form action="https://nldcnow.us19.list-manage.com/subscribe/post?u=fe2fa79735e47235c75788bce&amp;id=fb15ca4f23" method="post" id="subscribe-form" name="subscribe-form" className="validate" target="_blank" noValidate>
      <div>
        <input type="email" value="" name="email" placeholder="you@example.com" required />
        <input type="hidden" name="b_fe2fa79735e47235c75788bce_fb15ca4f23" tabIndex="-1" value="" aria-hidden="true" />
        <button type="submit" name="subscribe">
          Get Updates
        </button>
      </div>
    </form>
  </div>
);

export default MailChimp;
