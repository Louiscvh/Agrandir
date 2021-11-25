import styles from '../styles/components/Quizz.module.scss'
import { useEffect, useRef } from 'react'

export default function Quizz() {
    let quizzdata = [
        {
            question: 'zaejazlkeza ?',
            reponse : [
                {
                    title: 'reponse1',
                    value: 50,
                    correct: true
                },

                {
                    title: 'reponse2',
                    value: 0,
                    correct: false
                },

                {
                    title: 'reponse3',
                    value: 0,
                    correct: false
                }
            ]
        },
        {
            question: 'zaejazlkeza ?',
            reponse : [
                {
                    title: 'reponse1',
                    value: 50,
                    correct: true
                },

                {
                    title: 'reponse2',
                    value: 0,
                    correct: false
                },

                {
                    title: 'reponse3',
                    value: 0,
                    correct: false
                }
            ]
        },
        {
            question: 'zaejazlkeza ?',
            reponse : [
                {
                    title: 'reponse1',
                    value: 50,
                    correct: true
                },

                {
                    title: 'reponse2',
                    value: 0,
                    correct: false
                },

                {
                    title: 'reponse3',
                    value: 0,
                    correct: false
                }
            ]
        }
    ]

    const quiz = useRef()
    useEffect(() => {
        let options = {
            threshold: 0.8
        };
        const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting ) {
                document.querySelectorAll('[data-scroll="nav"]').forEach(elt => {
                    elt.style.backgroundColor = "white"
                });
                document.querySelector('[data-scroll="bg"]').style.backgroundColor = "black"
            } else {
                document.querySelector('[data-scroll="bg"]').style.backgroundColor = "#F8F8F8"
                document.querySelectorAll('[data-scroll="nav"]').forEach(elt => {
                    elt.style.backgroundColor = "black"
                });
            }
        })
        }, options)
        io.observe(quiz.current)
    })

  return (
    <section id={"4"} className={styles.quiz} ref={quiz}>
        {
            quizzdata.map((elt, i) => (
                <div key={i}>
                    <h3>{elt.question}</h3>
                    <div>
                        {
                            elt.reponse.map((eltreponse, index) => (
                                <div key={index}>
                                    <label>{eltreponse.title}</label>
                                    <label>{eltreponse.value}</label>
                                    <label>{eltreponse.correct}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </section>
  )
}