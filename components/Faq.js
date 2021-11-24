import styles from '../styles/components/Faq.module.scss'
import { useState } from 'react'

export default function Faq() {
    let faqdata = [
        {
            title: 'Question 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin vitae enim id ornare. Proin a massa enim. Aenean luctus non odio id hendrerit. Integer diam justo, bibendum at felis at, consequat laoreet elit. Praesent ultrices non dolor vel tincidunt. In aliquam ornare dapibus. Aliquam dolor arcu, efficitur vitae purus sit amet, tincidunt fringilla orci.'
        },
        {
            title: 'Question 2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin vitae enim id ornare. Proin a massa enim. Aenean luctus non odio id hendrerit. Integer diam justo, bibendum at felis at, consequat laoreet elit. Praesent ultrices non dolor vel tincidunt. In aliquam ornare dapibus. Aliquam dolor arcu, efficitur vitae purus sit amet, tincidunt fringilla orci.'
        },
        {
            title: 'Question 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin vitae enim id ornare. Proin a massa enim. Aenean luctus non odio id hendrerit. Integer diam justo, bibendum at felis at, consequat laoreet elit. Praesent ultrices non dolor vel tincidunt. In aliquam ornare dapibus. Aliquam dolor arcu, efficitur vitae purus sit amet, tincidunt fringilla orci.'
        },
        {
            title: 'Question 4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin vitae enim id ornare. Proin a massa enim. Aenean luctus non odio id hendrerit. Integer diam justo, bibendum at felis at, consequat laoreet elit. Praesent ultrices non dolor vel tincidunt. In aliquam ornare dapibus. Aliquam dolor arcu, efficitur vitae purus sit amet, tincidunt fringilla orci.'
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
                    <h2>{elt.title}</h2>
                    <p className={styles.faqTitle}>{elt.text}</p>
                </div>
            ))}
    </section>
  )
}