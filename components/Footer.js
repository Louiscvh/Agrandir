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
      <div class={styles.footerBlock}>
        <h3>About Us</h3>
        <ul>
          <li>Qui sommes nous ?</li>
          <li>Entre-aide</li>
        </ul>
      </div>
      <div class={styles.footerBlock}>
        <h3>Mentions légales</h3>
        <ul>
          <li>CGC</li>
        </ul>
      </div>
      <div class={styles.footerBlock}>
        <h3>Mentions légales</h3>
        <ul>
          <li><a href="#">hello@entre-gens.fr</a></li>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <form onSubmit={subscribe}>
          <h3>Newsletter</h3>
          <input
            id="email-input"
            name="email"
            placeholder="you@awesome.com"
            ref={inputEl}
            required
            type="email"
          />
          <div>
            {message
              ? message
              : `I'll only send emails when new content is posted. No spam.`}
          </div>
          <button type="submit">{"S'abonner"}</button>
        </form>
      </div>
    </footer>
  );
}
