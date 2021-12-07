import styles from "../styles/components/Footer.module.scss";
import React, { useRef, useState } from 'react';

export default function Footer() {
  const [searchString, setSearchString] = useState('');

  const handleChange = (event) => {
    setSearchString(event.target.value)
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
