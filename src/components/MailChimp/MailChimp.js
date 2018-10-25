import React from 'react';

export default function MailChimp() {
  return (
    <div id="mc_embed_signup">
      <form
        action="//nldcnow.us19.list-manage.com/subscribe/post?u=fe2fa79735e47235c75788bce&amp;id=fb15ca4f23"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <label htmlFor="EMAIL">
          Subscribe for Conference Updates!
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
        </label>
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_fe2fa79735e47235c75788bce_fb15ca4f23" tabIndex="-1" value="" />
        </div>
        <input type="submit" value="Get Updates" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary" />
      </form>
    </div>
  );
}
