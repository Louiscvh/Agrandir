import styles from '../styles/components/Infos.module.scss'
import { useRef } from 'react'


export default function Infos() {
    const infos = useRef(null)

    return (
        <section id={"2"} className={styles.infos} data-appear>
            <div className={styles.infosContainer} ref={infos}>
                <h2><span data-up>Entregens t’accompagne</span><br></br> dans tes démarches ✨</h2>
                <div className={styles.infosContent}>
                    <div className={styles.infoDetails}>
                        <h3 className={styles.infoTitle}>Un réseau de plus de <span>100 000 entrepreneurs !</span></h3>
                        <p className={styles.infoText}>Sur 900 000 entrepreneurs en France, on a réunis une communauté de 100 000 entrepreneurs français: Web, Artisanat, Art, Marketing, Vente... Les entrepreneurs de notre communauté viennent de tous les secteurs possibles et imaginables, ce qui fait la force de notre association.<br></br><br></br>
                        Sur entre-aide.fr, tu pourras retrouver un catalogue complet d’articles, conseils et informations vérifiés et écrient par des professionnels qui ont éprouvés leurs compétences dans leur domaine, ces articles traitent de l’entrepreneuriat et de tout ce qui gravite autour, santé mentale, argent, amis, télétravail etc... En plus de ça tu peux rentrer en contact avec ces professionnels et tous les autres membres de la communauté (y compris nous) grâce à nos salons textuels.</p>
                        <a target="_blank" rel="noreferrer"href="https://principle.app/share?id=VN5yEE24Bg5Ssqf2Zey5" className={styles.btnPrimary}>Découvrir le site entre-aide.fr</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
