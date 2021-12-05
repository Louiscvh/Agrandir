import styles from "../styles/components/Footer.module.scss";
import React, { useRef, useState } from 'react';

export default function Footer() {

    // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
    }
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <h3>About Us</h3>
        <ul>
          <li>Qui sommes nous ?</li>
          <li>Entre-aide</li>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <h3>Mentions légales</h3>
        <ul>
          <li>CGC</li>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <h3>Mentions légales</h3>
        <ul>
          <li><a href="#">hello@entre-gens.fr</a></li>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <div id="mc_embed_signup">
          <form action="https://gmail.us4.list-manage.com/subscribe/post?u=17a0be9527ab15dda24728fbe&amp;id=f444bebad9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Adresse mail" required></input>
                <div aria-hidden="true">
                  <input type="text" name="b_17a0be9527ab15dda24728fbe_f444bebad9" tabIndex="-1" value=""></input>
                </div>
                  <div className="optionalParent">
                      <div className="clear foot">
                          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
                          <p className="brandingLogo">
                            <a href="http://eepurl.com/hOsTh5" title="Mailchimp - email marketing made easy and fun">
                              <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></img>
                            </a>
                          </p>
                      </div>
                  </div>
              </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
