import Head from "next/head";
import styles from "../styles/globals.module.scss";
import Hero from "../components/Hero";
import Reassurances from "../components/Reassurances";
import Quizz from "../components/Quizz";
import Faq from "../components/Faq";
import Temoignage from "../components/Temoignage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Entre gens</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/rzj3zdq.css" />
      </Head>
      <div className={styles.container}>
        <Hero />
        <Reassurances/>
        <Temoignage />
        <Quizz/>
        <Faq/>
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
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
