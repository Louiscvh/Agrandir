import Head from "next/head";
import styles from "../styles/globals.module.scss";
import Hero from "../components/Hero";
import Infos from "../components/Infos";
import Quizz from "../components/Quizz";
import Faq from "../components/Faq";
import Interview from "../components/Interview";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scrollbar = useRef(null)
  const scrollbarIndicator = useRef(null)
  const cursor = useRef(null)
  let scrollPourcent

  const scrollToTop = (height) => {
    window.scrollTo({
      top: height,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {

    document.addEventListener('mousemove', (e) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
    let windowHeight = window.innerHeight;
    //document.querySelector('#canvas canvas').style.transform = `translateY(0%)`
    window.addEventListener("scroll", () => {
      scrollPourcent = (window.scrollY / (document.body.offsetHeight - windowHeight)) * 100;
      scrollbarIndicator.current.style.height = `${scrollPourcent}%`;
      if (scrollPourcent > 0 && scrollPourcent < 5) document.querySelector('#canvas canvas').style.transform = `translateX(0%)`
      if (scrollPourcent > 5 && scrollPourcent < 45) document.querySelector('#canvas canvas').style.transform = `translateX(30%)`
      if (scrollPourcent > 45 && scrollPourcent < 75) document.querySelector('#canvas canvas').style.transform = `translateX(-30%)`
      if (scrollPourcent > 75 && scrollPourcent < 100) document.querySelector('#canvas canvas').style.transform = `translateX(30%)`
      if (scrollPourcent > 100) {
        scrollbar.current.style.transform = 'rotate(180deg)'
      }
      else scrollbar.current.style.transform = 'rotate(0deg)'
    });

  })
  return (
    <>
      <Head>
        <title>Entre gens</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cursor} ref={cursor}></div>
      <div ref={scrollbar} className={styles.scrollbar} onClick={() => scrollToTop(0)}>
        <div ref={scrollbarIndicator} className={styles.scrollbarIndicator}>
        </div>
        <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 2C11.25 1.30964 10.6904 0.75 10 0.75C9.30964 0.75 8.75 1.30964 8.75 2L11.25 2ZM9.11612 32.8839C9.60427 33.372 10.3957 33.372 10.8839 32.8839L18.8388 24.9289C19.327 24.4408 19.327 23.6493 18.8388 23.1612C18.3507 22.673 17.5592 22.673 17.0711 23.1612L10 30.2322L2.92893 23.1612C2.44078 22.673 1.64932 22.673 1.16116 23.1612C0.673009 23.6493 0.673009 24.4408 1.16116 24.9289L9.11612 32.8839ZM8.75 2L8.75 32L11.25 32L11.25 2L8.75 2Z" fill="#F2F2F2" />
        </svg>
      </div>
      <div className={styles.container}>
        <Hero />
      </div>
        <Infos />
      <div className={styles.container}>
        <Interview />
        <Quizz />
        <Faq />
        <Footer />
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth!important;
          overflow-x: hidden;
          cursor: none;
        }

        body {
          margin: 0px;
          padding: 0px;
        }

        section:not(:first-of-type){
          padding: 100px 20px;
        }
      `}</style>
    </>
  )
}
