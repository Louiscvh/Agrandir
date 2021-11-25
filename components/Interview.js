import styles from '../styles/components/Interview.module.scss'

export default function Temoignage() {
    let data = [
        {
            title: 'L’entraînement à l’entrepreneuriat',
            text: 'Les Entrep’ est un programme dispensé par des professionnels pour tester l’entrepreneuriat pendant cinq mois (de novembre à mars et c’est compatible en plus des études ou d’un job.). Pas  de théorie, que de l’expérience hors les murs… car seul BRISER les murs peut élargir les horizons ! Entraînez-vous à créer une entreprise ou une startup en équipe multi-compétences de 3 à 5 jeunes (30 ans et moins, post-bac, étudiant, jeune diplômé ou en recherche d’activité).',
        }
    ]
  return (
    <section id={"3"} className={styles.temoignageContainer}>
        {
            data.map((elt, i) => (
                <div key={i} className={styles.temoignageBlock}>
                    <h2>{elt.title}</h2>
                    <p>{elt.text}</p>
                </div>
            ))
        }
    </section>
  )
}
