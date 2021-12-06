import styles from "../styles/components/Interview.module.scss";
import { useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';

export default function Temoignage() {
  const temoignage = useRef(null);
  const audio = useRef(null);
  const activationText = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  /* 
    useEffect(() => {
      
      let div = document.querySelector('.test')
  
      let typewriter = new Typewriter(div, {
        loop: true,
        delay: 75,
      });
  
      typewriter.typeString("J'ai 29 ans et je suis créatrice de bijoux. Et pourtant j'étais partie pour être prothésiste dentaire ! C'est en 2020 que j'ai décidé de tenter l'aventure. J'ai pris le statut d'auto-entrepreneur et j'ai commencé à vendre mes bijoux tout en gardant mon métier, car j’avais un peu peur de rater mes débuts, je n’avais pas trop d’infos,  je me suis un peu précipité. Bref... 1 an est passé et j’ai donc décidé de me poser et de reprendre les choses à 0, c’est-à-dire savoir comment organiser mon emploi du temps, gérer et prévoir ma trésorerie et surtout, important pour moi, apprendre à faire une transition de salarié à entrepreneur. Et c’est là qu’un je suis tombé sur l’article d’une asso qu’un pote m’avait partagé, et cétait la votre, Entregens, c’était comme une révélation pour moi, il y avait vraiment tout ce dont j’avais besoin. Quelques temps après avoir eu les infos dont j’avais besoin et avoir été sûre que j’étais sur la bonne voie, c'est devenu mon activité principale; Grâce à entregens et à l’argent que j’avais de côté, j’ai pu commencer à vivre de ma passion et de mon talent !")
      
      isPlaying ? typewriter.start() : typewriter.stop()
        
    }, [isPlaying])
    */
  var text = "J'ai 29 ans et je suis créatrice de bijoux. Et pourtant j'étais partie pour être prothésiste dentaire ! C'est en 2020 que j'ai décidé de tenter l'aventure. J'ai pris le statut d'auto-entrepreneur et j'ai commencé à vendre mes bijoux tout en gardant mon métier, car j’avais un peu peur de rater mes débuts, je n’avais pas trop d’infos,  je me suis un peu précipité. Bref... 1 an est passé et j’ai donc décidé de me poser et de reprendre les choses à 0, c’est-à-dire savoir comment organiser mon emploi du temps, gérer et prévoir ma trésorerie et surtout, important pour moi, apprendre à faire une transition de salarié à entrepreneur. Et c’est là qu’un je suis tombé sur l’article d’une asso qu’un pote m’avait partagé, et cétait la votre, Entregens, c’était comme une révélation pour moi, il y avait vraiment tout ce dont j’avais besoin. Quelques temps après avoir eu les infos dont j’avais besoin et avoir été sûre que j’étais sur la bonne voie, c'est devenu mon activité principale; Grâce à entregens et à l’argent que j’avais de côté, j’ai pu commencer à vivre de ma passion et de mon talent !";
  var delay = 50;
  var currentChar = 1;
  var destination = "temoignage";
  var typeTimer = null;
  var typing = true;
  useEffect(() => {


    function type(tick) {
      var dest = document.getElementById(destination);

      if (!typing) return;

      if (dest) {
        dest.innerHTML = text.substr(0, currentChar) + "_";
        currentChar++;

        if (currentChar > text.length) {
          currentChar = 1;
          tick = 5000;
        }

        typeTimer = setTimeout(function () { type(delay); }, tick);
      }
    }

    function startTyping(textParam, delayParam, destinationParam) {
      if (currentChar > 1) {
        typing = true;
        return type();
      }

      text = textParam;
      delay = delayParam;
      currentChar = 1;
      destination = destinationParam;
      type(delay);
    }

    function pauseTyping() {
      typing = false;
    }
    document.querySelector('#control').addEventListener('click', () => {
      if (document.querySelector('#control').classList.contains('play')) {
        startTyping(text, 50, "temoignage");
        audio.current.play()
        activationText.current.innerHTML = 'Désactiver le son'
        document.querySelector('#control').setAttribute('class', 'pause')
        document.querySelector('#control div').innerHTML = `<svg
            id={"Calque1"}
            data-name="Calque 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92.4 10.94"
            >
            <path
                className={styles.audioPath}
                d="M92.4,7a3.78,3.78,0,0,1-2.7-.7c-.8-.7-1.6-1.5-2.4-2.3-1.2-1.3-4.1-1.6-5.3-.2-.8.9-1.6,1.9-2.4,2.9a3.46,3.46,0,0,1-5.3.2c-.8-1.1-1.6-2.2-2.4-3.4a3.36,3.36,0,0,0-2.6-1.6,2.72,2.72,0,0,0-2.6,1.4c-.8,1.3-1.6,2.6-2.4,4C63,9.4,60.2,9.7,59,7.5L56.6,3C55.4.6,52.5.3,51.3,2.8q-1.2,2.4-2.4,5.1A3.28,3.28,0,0,1,46.2,10a3.47,3.47,0,0,1-2.7-2.1c-.8-1.8-1.6-3.4-2.4-5.1C39.9.3,37,.6,35.8,3L33.4,7.5c-1.2,2.2-4,1.9-5.3-.2-.8-1.4-1.6-2.7-2.4-4a2.72,2.72,0,0,0-2.6-1.4,3.36,3.36,0,0,0-2.6,1.6c-.8,1.2-1.6,2.3-2.4,3.4a3.46,3.46,0,0,1-5.3-.2c-.8-1-1.6-2-2.4-2.9-1.2-1.4-4.1-1-5.3.2A25.51,25.51,0,0,1,2.7,6.3,3.78,3.78,0,0,1,0,7"
            ></path>
            </svg>`
      } else {
        pauseTyping();
        audio.current.pause()
        activationText.current.innerHTML = 'Activer le son'
        document.querySelector('#control div').innerHTML = `<svg width="50" height="3" viewBox="0 0 50 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.5 2.5C49.0523 2.5 49.5 2.05228 49.5 1.5C49.5 0.947715 49.0523 0.5 48.5 0.5V2.5ZM0 2.5H48.5V0.5H0V2.5Z" fill="#F9BB5D" />
      </svg>`
        document.querySelector('#control').setAttribute('class', 'play')
      }
    });
  })


  return (
    <section id={"3"} className={styles.temoignageContainer}>
      {
        <div className={styles.temoignageBlock} ref={temoignage}>
          <div className={styles.temoignageText}>
            <h2>Trouves toi un coin calme et <span data-up>écoute</span> ce qu’ils en disent.</h2>
            <div className={styles.temoignageButtonBlock}>
              <div
                id="control"
                className="play"
                data-control
              >
                <div className={styles.wrapperPath}>
                <svg width="50" height="3" viewBox="0 0 50 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.5 2.5C49.0523 2.5 49.5 2.05228 49.5 1.5C49.5 0.947715 49.0523 0.5 48.5 0.5V2.5ZM0 2.5H48.5V0.5H0V2.5Z" fill="#F9BB5D" />
      </svg>

                </div>
                <div className={styles.labelButton}>
                  <p ref={activationText} className={styles.activationText}>Activer le son</p>
                </div>
              </div>
            </div>
            <p id="temoignage"></p>
            <audio
              ref={audio}
              src="https://www.pacdv.com/sounds/ambience_sounds/wind-breeze-1.mp3"
            ></audio>
          </div>
        </div>
      }
    </section>
  );
}
