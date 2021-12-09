import styles from '../styles/components/Infos.module.scss'
import { useRef } from 'react'


export default function Infos() {
    let data = [
        {
            title: 'Un réseau de plus de 100 000 entrepreneurs !',
            text: 'Sur 900 000 entrepreneurs en France, on a r\u00E9unis une communaut\u00E9 de 100 000 entrepreneurs fran\u00E7ais: Web, Artisanat, Art, Marketing, Vente... Les entrepreneurs de notre communaut\u00E9 viennent de tous les secteurs possibles et imaginables, ce qui fait la force de notre association.\r\n\r\nSur entre-aide.fr, tu pourras retrouver un catalogue complet d\u2019articles, conseils et informations v\u00E9rifi\u00E9s et \u00E9crient par des professionnels qui ont \u00E9prouv\u00E9s leurs comp\u00E9tences dans leur domaine, ces articles traitent de l\u2019entrepreneuriat et de tout ce qui gravite autour, sant\u00E9 mentale, argent, amis, t\u00E9l\u00E9travail etc... En plus de \u00E7a tu peux rentrer en contact avec ces professionnels et tous les autres membres de la communaut\u00E9 (y compris nous) gr\u00E2ce \u00E0 nos salons textuels.'
        }
    ]
    return (
        <section id={"2"} className={styles.infos} data-appear>
            <div className={styles.infosContainer}>
                <h2><span data-up>Entregens t’accompagne</span><br></br> dans tes démarches ✨</h2>
                <div className={styles.infosContent}>
                    <div className={styles.infoDetails}>
                        <h3 className={styles.infoTitle}>Un réseau de plus de <span>100 000 entrepreneurs !</span></h3>
                        <p className={styles.infoText}>Sur 900 000 entrepreneurs en France, on a réunis une communauté de 100 000 entrepreneurs français: Web, Artisanat, Art, Marketing, Vente... Les entrepreneurs de notre communauté viennent de tous les secteurs possibles et imaginables, ce qui fait la force de notre association.<br></br><br></br>
                        Sur entre-aide.fr, tu pourras retrouver un catalogue complet d’articles, conseils et informations vérifiés et écrient par des professionnels qui ont éprouvés leurs compétences dans leur domaine, ces articles traitent de l’entrepreneuriat et de tout ce qui gravite autour, santé mentale, argent, amis, télétravail etc... En plus de ça tu peux rentrer en contact avec ces professionnels et tous les autres membres de la communauté (y compris nous) grâce à nos salons textuels.</p>
                        <a target="_blank" rel="noreferrer"href="https://principle.app/share?id=5UtML33iHHpQP2gkYAv9" className={styles.btnPrimary}>Découvrir le site entre-aide.fr</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
