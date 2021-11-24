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
    quizzdata.map((elt) => {

        console.log(elt.reponse)
    })

  return (
    <section id={"4"}>
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