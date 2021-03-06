import styles from "../styles/components/Footer.module.scss";
import React, { useRef, useState } from 'react';
import Images from "next/image";
import footerimage1 from "../public/assets/img/footer/footer_image1.webp";
import footerimage2 from "../public/assets/img/footer/footer_image2.webp";
import Link from 'next/link'


export default function Footer() {
  const [searchString, setSearchString] = useState('');

  const handleChange = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <footer className={styles.footer} data-appear>
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
          <li><Link href="/mentions"><a target="_blank">CGU</a></Link></li>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <h3>Contact</h3>
        <ul>
          <li><Link href="mailto:hello@entre-gens.com">
            <a>hello@entre-gens.fr</a>
            </Link></li>
          <li>
            <Link href="https://www.instagram.com/entregens_/">
              <a className={styles.hero__social__block}>IN - </a> 
              </Link>
            <Link href="https://www.linkedin.com/company/entregens-officiel/">
              <a className={styles.hero__social__block}>LI</a>
              </Link>
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
      <div className={styles.footerBottom}>
        <div className={styles.footerImg}>
          <Images src={footerimage1} className={styles.img} height="70" width="80" alt="Ministère du travail"></Images>
          <Images src={footerimage2} className={styles.img} height="19" width="76" alt="CCI France"></Images>
        </div>
        <p>© ENTREGENS 2021</p>
      </div>
    </footer>
  );
}
