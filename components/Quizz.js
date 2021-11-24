import styles from '../styles/components/Quizz/Quizz.module.scss'

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

  return (
    <section id={"3"}>
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