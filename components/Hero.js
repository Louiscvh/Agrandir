import styles from "../styles/components/Hero/Hero.module.scss";
import { useEffect, useRef, useState } from "react";
import Header from '../components/Header'

export default function Hero() {
  const heroBackground = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY < 1280) heroBackground.current.style.transform = `scale(${(window.scrollY + 250) * 2})`;
    })  
  });

  return (
    <section id={"1"} className={styles.hero}>
        <Header />
        <div>
            <h1 className={styles.hero__text}><span>Lorem ipsum dolor sit amet,</span><span> consectetur adipiscing elit.</span></h1>
            <div className={styles.hero__background} ref={heroBackground}></div>
        </div>
        <div className={styles.hero__footer}>
            <div></div>
            <p>#entregens2021</p>
            <div className={styles.hero__social}>
                <div className={styles.hero__social__block}>
                    <div className={styles.hero__social__wrapper}></div>
                </div>
                <div className={styles.hero__social__block}>
                    <div className={styles.hero__social__wrapper}></div>
                </div>
                <div className={styles.hero__social__block}>
                    <div className={styles.hero__social__wrapper}></div>
                </div>
            </div>
        </div>
        <section id={"2"} className={styles.hero}></section>
        <section id={"3"} className={styles.hero}></section>

    </section>
  );
}
