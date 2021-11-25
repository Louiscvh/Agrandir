import Head from "next/head";
import styles from "../styles/globals.module.scss";
import Hero from "../components/Hero";
import Infos from "../components/Infos";
import Quizz from "../components/Quizz";
import Faq from "../components/Faq";
import Interview from "../components/Interview";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scrollbar = useRef(null)
  let scrollPourcent

  useEffect(() => {
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
      <div className={styles.scrollbar} ref={scrollbar}></div>
      <div className={styles.container}>
        <Hero />
        <Infos/>
        <Interview />
        <Quizz/>
        <Faq/>
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
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
