import styles from '../styles/components/Faq.module.scss'
import { useState } from 'react'

export default function Faq() {
    let faqdata = [
        {
            title: 'Qui êtes vous ?',
            text: "Entregens c’est une association fondée en Janvier 2021 par une centaine d’entrepreneur passionné par leur métier. Ca peut paraître bateau, mais les motivations qui poussent des profils comme le tiens à se lancer dans l’entrepreneuriat sont généralement la liberté professionnelle et/ou le fait de pouvoir travailler d’où l’on veut. Mais avant de pouvoir satisfaire ces envies nous, en tant qu’entrepreneur, devons tous passer par des moments pas toujours amusantes. C’est face à ces frustrations que nous avons aussi vécus que l’on s’est dit qu’en tant que professionnels experimentés, on se devait de mettre à disposition de ceux qui viendrait derrière nous, toutes les infos, conseils et outils qu’on aurait aimer connaitre avant de nous lancer. Nous avons donc rassemblé sur une plateforme entraide.fr sur lequel tu trouveras tout ce dont tu as besoin. Mais avant de te jetter dessus, continu ta lecture encore un peu, tu seras pas déçu 😜."
        },
        {
            title: 'Pourquoi des partenariats ?',
            text: "Étant donné que chez entregens nous ne fournissons pas de services en tant que tel, nous avons trouvé intéressant de recommander à travers ses partenariats des services que la communauté a déjà approuvée et tester, pour que ceux qui viendront après nous puisse profiter de notre contenu et se concentrer sur leurs objectifs."
        },
        {
            title: "C'est qui l'entrepreneur qui vous inspire à Entregens ?",
            text: "Chez nous c'est Elon Musk"
        },
        { 
            title: 'Quelles sont vos valeurs ?',
            text: 'Chez Entregens nos valeurs sont le partage, l’entraide, la bonne humeur et les amis.'
        }
    ]
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    
  return (
    <section id={"5"} className={styles.faqContainer} data-appear>
        {faqdata.map((elt, i) => (
                <div key={i} className={styles.faqBlock} onClick={() => toggle(i)}>
                    <div className={styles.faqHeader}>
                        <h2>{elt.title}</h2>
                        <div id={"crossbar"+i} className={selected === i ? styles.faqCrossContainer+' '+styles.isOpen : styles.faqCrossContainer}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <p className={selected === i ? styles.faqTitle +' '+ styles.show : styles.faqTitle}>{elt.text}</p>
                </div>
            ))}
    </section>
  )
}