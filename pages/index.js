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
      if (scrollPourcent > 0 && scrollPourcent < 8) document.querySelector('#canvas canvas').style.transform = `translateX(0%)`
      if (scrollPourcent > 8 && scrollPourcent < 30) document.querySelector('#canvas canvas').style.transform = `translateX(30%)`
      if (scrollPourcent > 30 && scrollPourcent < 50) document.querySelector('#canvas canvas').style.transform = `translateX(-30%)`
      if (scrollPourcent > 50 && scrollPourcent < 100) document.querySelector('#canvas canvas').style.transform = `translateX(30%)`
      if (scrollPourcent > 75) document.querySelector('#canvas canvas').style.transform = `translateX(200%)`
      if (scrollPourcent > 100) {
        scrollbar.current.style.transform = 'translateY(-270px)'
      }
      else scrollbar.current.style.transform = 'translateY(0px)'
    });

    let sections = document.querySelectorAll('[data-appear]')
    let options = {
        threshold: 0.3
    };
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute("style", "transition: all 0.3s ease; opacity: 1; transform: translateY(0px);")
            } else {
                entry.target.setAttribute("style", "transition: all 0.3s ease; opacity: 0; transform: translateY(30px);")
            }
        })
    }, options)

    sections.forEach(elt => {
      io.observe(elt)
    });

    let container = document.querySelectorAll('section')
    let observeroptions = {
      threshold: 0.2
    };
    let nav = document.querySelector("nav");
    const containerio = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            nav.setAttribute('data-before', entry.target.getAttribute('data-name'))
          }
        })
    }, observeroptions)

    container.forEach(elt => {
        containerio.observe(elt)
    });

  })
  return (
    <>
      <Head>
        <html lang="fr" />
        <title>Entre gens</title>
        <meta name="description" content="Sur 900 000 entrepreneurs en France, on a réunis une communauté de 100 000 entrepreneurs français: Web, Artisanat, Art, Marketing, Vente... Les entrepreneurs de notre communauté viennent de tous les secteurs possibles et imaginables, ce qui fait la force de notre association." />
        <link rel="canonical" href="https://www.entre-gens.fr/" />
        <meta name="msapplication-config" content="browserconfig.xml"></meta>
        <meta property="og:url" content="https://www.entre-gens.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entre gens" />
        <meta property="og:description" content="Sur 900 000 entrepreneurs en France, on a réunis une communauté de 100 000 entrepreneurs français: Web, Artisanat, Art, Marketing, Vente... Les entrepreneurs de notre communauté viennent de tous les secteurs possibles et imaginables, ce qui fait la force de notre association." />
        <meta property="og:image" content="../assets/img/logo.webp" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Entregens" />
        <meta name="twitter:creator" content="@Agrandir" />
        <meta property="og:url" content="https://www.entre-gens.fr/" />
        <meta property="og:title" content="Entregens" />
        <meta property="og:description" content="Sur 900 000 entrepreneurs en France, on a réunis une communauté de 100 000 entrepreneurs français: Web, Artisanat, Art, Marketing, Vente... Les entrepreneurs de notre communauté viennent de tous les secteurs possibles et imaginables, ce qui fait la force de notre association." />
        <meta property="og:image" content="../assets/img/logo.webp" />
        <link rel="dns-prefetch" href="https://www.entre-gens.fr/" />
        <link rel="preconnect" href="https://www.entre-gens.fr/" />
        <script async src={"https://www.googletagmanager.com/gtag/js?id=G-TT2S1Y8VMN"}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

            gtag('config', 'G-TT2S1Y8VMN');
            `,
          }}
        />
      </Head>
      <div className={styles.noise}></div>
      <div className={styles.cursor} ref={cursor}></div>
      <aside ref={scrollbar} className={styles.scrollbar} onClick={() => scrollToTop(0)}>
        <div className={styles.scrollbarWrapper}>
          <div ref={scrollbarIndicator} className={styles.scrollbarIndicator}></div>
        </div>
        <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 2C11.25 1.30964 10.6904 0.75 10 0.75C9.30964 0.75 8.75 1.30964 8.75 2L11.25 2ZM9.11612 32.8839C9.60427 33.372 10.3957 33.372 10.8839 32.8839L18.8388 24.9289C19.327 24.4408 19.327 23.6493 18.8388 23.1612C18.3507 22.673 17.5592 22.673 17.0711 23.1612L10 30.2322L2.92893 23.1612C2.44078 22.673 1.64932 22.673 1.16116 23.1612C0.673009 23.6493 0.673009 24.4408 1.16116 24.9289L9.11612 32.8839ZM8.75 2L8.75 32L11.25 32L11.25 2L8.75 2Z" fill="#F2F2F2" />
        </svg>
      </aside>
      <div className={styles.fullContainer}>
        <Hero />
      </div>
      <main>
        <div className={styles.container}>
          <Infos />
          <Interview />
          <Quizz />
          <Faq />
        </div>
      </main>
      <div className={styles.fullContainer}>
        <Footer />
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth!important;
          overflow-x: hidden;
        }

        body {
          margin: 0px;
          padding: 0px;
          background:#fbfbfb url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEUAAAD8/vz09vT8+vz08vQ/kKNDAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAqxJREFUOI0VVNkVxCAItAWFBgQa4GhAsf+aMvnKvqyBOR3kRl12M9q4pGZYOyuN47L3mzZt1303BAdi0xuekStm9d75nMQ4ltStcbcR12HxMO9jR+dybx/1gu/Zh3asJeeYS4RjR63iiKy7LOnKy8So5TzuO+IrMpkDT6WMe1fJyNSld970eZ4tucI3q2zIXXoYh1Topawt/XiGDKuid5iz+67Wczs13owhZnta99pAUbOtebf3HIs67dqELO1aws3s+t4IrGbH75D1QvyJrZB3x9wR9y0CK0/jdKkgLATB3kR7Voi+9TRIJo6uMef0oJO2b/LbxxLCJ9FwbMj2eQ/kpqo+US+Bqv/Hs4yKOkQvjkD9bPBwtpN6IVFVcKjsioihtaEtx1xvirADpDZrjjjHL6B46waX8P2Odq4Bz97VWHPiyIPo5rbYfYTCl7IZEBHwrQCcKO6QkzDQ9YIjL4L2AcF4jwMRV6oR3PnDM/Wd0xXjHLItZHlfV/mvxkMIc3SrnDWfx+p1uGrmKyofcNgDlDxr7t7GtNXE5niJxDpdlpV7eQdGnwgb623HDCAsv2/fnUmPc48soV6CpKnxFWXYaIFRtSg3VfMBx7BDFx8D7yD/8de2vXpOMz+bH70aE6MDqrLoJUUYSkCgQRCNaIS92cDuPFhhIQd/zClxaV1NoJjCkaT78nB3xXhwkvtnktRMUKSBGBsZkhMhjeRStD6FiNBDEhGD+EpWk47kTIuR0hctxAtyJKV5nszbOlbVxropBGOCnhzi1ZnjlVIt4A3dvv/eogqElEDayC7NnDAd8h4pRqZGa8xbxiiy3al7Ipe4IZBEKuASRcku9OY/mRHMI/bDddFo8zklgloh4kVrbAdVgHV1g0+MoNDEfTQaltaCerAK98wuyqUz8gP09MIlooc17AAAAABJRU5ErkJggg==);        }
      `}</style>
      <noscript>Please enable Javascript !</noscript>
    </>
  )
}
