import styles from "../styles/components/Interview.module.scss";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

export default function Temoignage() {
  const temoignage = useRef(null);
  const audio = useRef(null);
  const activationText = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const playPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audio.current.pause() : audio.current.play();
    isPlaying ? audio.current.pause() : audio.current.play();
    isPlaying ? activationText.current.innerHTML = "Activer le son" :  activationText.current.innerHTML = "Désactiver le son"
  };

  return (
    <section id={"3"} className={styles.temoignageContainer}>
      {
        <div className={styles.temoignageBlock} ref={temoignage}>
          <div className={styles.temoignageText}>
            <h2>Trouves toi un coin calme et <span>écoute</span> ce qu’ils en disent.</h2>
            <div className={styles.temoignageButtonBlock}>
                <div
                className={styles.temoignageButton}
                onClick={() => playPause()}
                >
                <div className={styles.wrapperPath}>
                    <svg
                    id={"Calque1"}
                    data-name="Calque 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 92.4 10.94"
                    >
                    <path
                        className={styles.audioPath}
                        d="M92.4,7a3.78,3.78,0,0,1-2.7-.7c-.8-.7-1.6-1.5-2.4-2.3-1.2-1.3-4.1-1.6-5.3-.2-.8.9-1.6,1.9-2.4,2.9a3.46,3.46,0,0,1-5.3.2c-.8-1.1-1.6-2.2-2.4-3.4a3.36,3.36,0,0,0-2.6-1.6,2.72,2.72,0,0,0-2.6,1.4c-.8,1.3-1.6,2.6-2.4,4C63,9.4,60.2,9.7,59,7.5L56.6,3C55.4.6,52.5.3,51.3,2.8q-1.2,2.4-2.4,5.1A3.28,3.28,0,0,1,46.2,10a3.47,3.47,0,0,1-2.7-2.1c-.8-1.8-1.6-3.4-2.4-5.1C39.9.3,37,.6,35.8,3L33.4,7.5c-1.2,2.2-4,1.9-5.3-.2-.8-1.4-1.6-2.7-2.4-4a2.72,2.72,0,0,0-2.6-1.4,3.36,3.36,0,0,0-2.6,1.6c-.8,1.2-1.6,2.3-2.4,3.4a3.46,3.46,0,0,1-5.3-.2c-.8-1-1.6-2-2.4-2.9-1.2-1.4-4.1-1-5.3.2A25.51,25.51,0,0,1,2.7,6.3,3.78,3.78,0,0,1,0,7"
                    ></path>
                    </svg>
                </div>
                <div className={styles.labelButton}>
                    <p ref={activationText} className={styles.activationText}>Activer le son</p>
                </div>
                </div>
          </div>
            <Typewriter
              options={{
                strings:
                  "Les Entrep’ est un programme dispensé par des professionnels pour tester l’entrepreneuriat pendant cinq mois (de novembre à mars et c’est compatible en plus des études ou d’un job.). Pas  de théorie, que de l’expérience hors les murs… car seul BRISER les murs peut élargir les horizons ! Entraînez-vous à créer une entreprise ou une startup en équipe multi-compétences de 3 à 5 jeunes (30 ans et moins, post-bac, étudiant, jeune diplômé ou en recherche d’activité).",
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
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
