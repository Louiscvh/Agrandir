import styles from '../styles/components/Faq.module.scss'
import { useState } from 'react'

export default function Faq() {
    let faqdata = [
        {
            title: 'Question numéro 1',
            text: 'Quelle est la meilleure et la pire chose dans le fait d\'être un homme? Quel film aimez-vous tant que vous pouvez regarder à plusieurs reprises ?'
        },
        {
            title: 'Question numéro 2',
            text: 'Que feriez-vous / ne feriez-vous pas pour un million de dollars? Quelle est une chose que vous appréciez quand vous étiez enfant et que vous appréciez encore ?'
        },
        {
            title: 'Question numéro 3',
            text: 'Quelle est la situation de pression la plus élevée dans laquelle vous ayez jamais été et comment l avez-vous gérée? Qu est-ce qui vous stresse ?'
        },
        { 
            title: 'Question numéro 4',
            text: 'Quelle personne ou quel événement a eu le plus grand impact sur votre vie ? Si vous pouviez faire une chose chaque jour de votre vie pour le reste de votre vie, quelle serait-elle ?'
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
    <section id={"5"} className={styles.faqContainer}>
        {faqdata.map((elt, i) => (
                <div key={i} className={selected === i ? styles.faqBlock+' '+ styles.show : styles.faqBlock} onClick={() => toggle(i)}>
                    <div className={styles.faqHeader}>
                        <h2>{elt.title}</h2>
                        <div id={"crossbar"+i} className={selected === i ? styles.faqCrossContainer+' '+styles.isOpen : styles.faqCrossContainer}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <p className={styles.faqTitle}>{elt.text}</p>
                </div>
            ))}
    </section>
  )
}