import styles from '../styles/components/Quizz.module.scss'
import { useEffect, useRef } from 'react'

export default function Quizz() {
    let questions = [{
        titre: "Avez-vous un projet concret ?",
        necessary: true,
        index: 0,
        answers: [{
            titre: "Oui",
            value: 100
          },
          {
            titre: "Non",
            value: -1
          }
        ]
      },
      {
        titre: "Combien d'année d'expérience avez-vous dans ce milieu ?",
        necessary: true,
        index: 1,
        answers: [{
            titre: "0 - 1",
            value: 100
          },
          {
            titre: "2 - 5",
            value: 200
          },
          {
            titre: "5 - 7",
            value: 300
          }
        ]
      },
      {
        titre: "Que pensez-vous du télétravail à titre personnel ?",
        necessary: true,
        index: 2,
        answers: [{
            titre: "Oui à full time je kiff",
            value: 300
          },
          {
            titre: "Oui à temps partiel",
            value: 200
          },
          {
            titre: "None",
            value: 0
          }
        ]
      }
    ]
    
    const quiz = useRef()
    useEffect(() => {
        let container = document.querySelector('form')
        
        let currentQuestion = []
        let indexCurrent = 0;
        let score = 0;
        
        
        const scoring = (currentScore) => {
        score += currentScore
        //document.getElementById('score').innerHTML = score
        }
        
        document.querySelector('[data-button-next]').addEventListener('click', function(){
            document.querySelectorAll('input').forEach((elt) => {
                if (elt.checked) scoring(parseInt(elt.value))
            })
            indexCurrent++;
            changeQuestion(indexCurrent);
        })

        
        const changeQuestion = (id) => {
        
        currentQuestion.push(questions.filter(question => question.index == id))
        currentQuestion.map((elt, i) => {
            if(i >= questions.length) {
                  if(score > 600) alert("MashAllah t'as gagné")
            else  {
                score = 0
                //document.querySelector('h2').innerHTML = score
                alert('Tu pues') 
                }
            }
            let question = elt[0]
            document.getElementById('totalQuestions').innerHTML = `${i + 1} / ${questions.length}`
            container.innerHTML = `<h2>${question.titre}</h2>
                ${question.answers.map((elt,i) => {
            return `<div>
                        <label for='${i}'>
                          ${elt.titre}
                          <input type='radio' name='${i}' value='${elt.value}' required>
                          <span></span>
                        </label>
                    </div>`
            }).join('')}`
        })
        }
        
        changeQuestion(0)
    })
  return (
    <section id={"4"} className={styles.quizzContainer} ref={quiz}>
        {
            <div className={styles.quizzBlock}>
              <h1 className={styles.quizzHeader}>On t’a parlé de nous, et toi ?<br></br><span>dis nous touT !</span></h1>
              <p className={styles.quizzIntroduction}>Nous te proposons un <span>test de personnalité</span> qui permettra de te diriger vers la solution la plus adaptée à ton ( futur ) profil d’entrepreneur.</p>  
              <form></form>
              <button className={styles.btnPrimary} data-button-next>
                  Question Suivante - <span id={'totalQuestions'}></span>
              </button>
            </div>
        }
    </section>
  )
}