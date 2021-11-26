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
  const cursor = useRef(null)
  let scrollPourcent
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
      scrollbar.current.style.height = `${scrollPourcent}%`;
      if(scrollPourcent > 0 && scrollPourcent < 5) document.querySelector('#canvas canvas').style.transform = `translateX(0%)`
      if(scrollPourcent > 5 && scrollPourcent < 45) document.querySelector('#canvas canvas').style.transform = `translateX(30%)`
      if(scrollPourcent > 45 && scrollPourcent < 75) document.querySelector('#canvas canvas').style.transform = `translateX(-30%)`
      if(scrollPourcent > 75 && scrollPourcent < 100) document.querySelector('#canvas canvas').style.transform = `translateX(30%)`
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
      <div className={styles.scrollbar}>
          <div ref={scrollbar} className={styles.scrollbar__indicator}></div>
      </div>
      <div className={styles.container}>
        <Hero />
        <Infos/>
        <Interview />
        <Quizz/>
        <Faq/>
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
