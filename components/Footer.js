import styles from "../styles/components/Footer.module.scss";
import React, { useRef, useState } from 'react';

export default function Footer() {
  const [searchString, setSearchString] = useState('');
    // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setSearchString(event.target.value)
  }

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
        <h3>Contact</h3>
        <ul>
          <li><a href="#">hello@entre-gens.fr</a></li>
          <li>
            <a href="#" className={styles.hero__social__block}>
                  IN
              </a>
              <span>-</span>
              <a href="#" className={styles.hero__social__block}>
                  LI
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <h3>Newsletter</h3>
        <div id="mc_embed_signup">
          <form action="https://gmail.us4.list-manage.com/subscribe/post?u=17a0be9527ab15dda24728fbe&amp;id=f444bebad9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                  <div className={styles.inputBlock}>
                    <input type="email" name="EMAIL" className={styles.email} id="mce-EMAIL" placeholder="Adresse mail" value={searchString} onChange={handleChange} required></input>
                    <div className="optionalParent">
                        <div className="clear foot">
                            <input type="submit" value="ok" name="subscribe" id="mc-embedded-subscribe" className={styles.subscribe}></input>
                        </div>
                    </div>
                  </div>
              </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
