import styles from '../styles/components/Faq/Faq.module.scss'
import { useState } from 'react'

export default function Faq() {
    let faqdata = [
        {
            text: 'azeazeazezeazeazezazaeazeazeazeazeazeazeazeazeazeazeaze zae azezaezaezaeaze azeazeaz aze azeza za eazeazeazezae'
        },
        {
            text: 'azeazeazezeazeazezazaeazeazeazeazeazeazeazeazeazeazeaze zae azezaezaezaeaze azeazeaz aze azeza za eazeazeazezae'
        },
        {
            text: 'azeazeazezeazeazezazaeazeazeazeazeazeazeazeazeazeazeaze zae azezaezaezaeaze azeazeaz aze azeza za eazeazeazezae'
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
    <section id={"5"}>
        {faqdata.map((elt, i) => (
                <div key={i} className={styles.faq} onClick={() => toggle(i)}>
                    <h1>Titre</h1>
                    <p className={selected === i ? styles.faqBlock+styles.show : styles.faqBlock}>{elt.text}</p>
                </div>
            ))}
    </section>
  )
}
