import styles from '../styles/components/Quizz.module.scss'
import { useEffect, useRef } from 'react'

export default function Quizz() {
  let questions = [{
    titre: "Avez-vous un projet concret ?",
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
    index: 2,
    answers: [{
      titre: "Oui à full time",
      value: 300
    },
    {
      titre: "Oui à temps partiel",
      value: 200
    },
    {
      titre: "Non pas fou",
      value: 0
    }
    ]
  },
  {
    titre: "Comment imaginez vous votre vie professionelle plus tard ?",
    index: 3,
    answers: [{
      titre: "Salarié dans une grande boite",
      value: 300
    },
    {
      titre: "Freelance digital nomade",
      value: 400
    },
    {
      titre: "Artisan ébéniste",
      value: 100
    }
    ,
    {
      titre: "J'y penserai demain",
      value: 0
    }
    ]
  },
  {
    titre: "Quel type de personne être-vous ?",
    index: 4,
    answers: [{
      titre: "Un loup indépendant",
      value: 300
    },
    {
      titre: "Un bon chef d'équipe (pas trop tyrannique)",
      value: 400
    },
    {
      titre: "Un bon salarié soumis",
      value: 100
    }
    ]
  }
  ]

  const quizzContent = useRef()
  const quizzTitle = useRef()

  useEffect(() => {
    let container = document.querySelector('form')

    let currentQuestion = []
    let indexCurrent = 0;
    let score = 0;

    const scoring = (currentScore) => {
      score += currentScore
      if (score < 0) {
        currentQuestion.push(questions.filter(question => question.index == 1))
        indexCurrent = 1
      }
    }

    document.querySelector('[data-button-next]').addEventListener('click', function () {
      document.querySelectorAll('input').forEach((elt) => {
        if (elt.checked) {
          scoring(parseInt(elt.value))
        }
      })
      indexCurrent++;
      changeQuestion(indexCurrent);
    })

    const finalScreen = (title, text) => {
      quizzTitle.current.innerHTML = `${title}`
      quizzContent.current.innerHTML = `<h4>Votre score est de <span data-up>${score}</span></h4><p>${text}</p><a href="https://www.entre-gens.fr/#4" id="totalQuestions">Rejouer</a>`
    }

    const changeQuestion = (id) => {

      currentQuestion.push(questions.filter(question => question.index == id))
      currentQuestion.map((elt, i) => {
        if (i >= questions.length) {
          if (score > 700) finalScreen("Nous estimons que tu es prêt à te lancer, pour plus d’informations pratique, rendez-vous sur Entraide.fr !", "Nous sommes ravis de te présenter notre plateforme Entraide.fr qui pourra t’orienter dans tes premiers(ou seconds pas) d’entrepreneurs. En créant ton compte sur Entraide.fr tu rejoins une communauté de 100 000 Entrepreneurs Français et Internationaux où le mot d’ordre est entraide (c’est évident non ? ☺️). À travers un système d’hashtags tu accéderas à un contenu qui te seras entièrement personnalisé en fonction de ton profil, des articles et des salons de discussions textuels pour entepreneurs. ") 
          else {
            finalScreen("Nous estimons que tu es relativement prêt à te lancer, mais ne te presse pas !", "Nous te conseillons de checker cette liste d’article “Les premiers pas de L’entreuprenariat” rédigés sur Entraide.fr qui peuvent t’aider dans ta démarche. En créant ton compte sur Entraide.fr tu rejoins une communauté de 100 000 Entrepreneurs Français et Internationaux où le mot d’ordre est entraide") 
          }
        }

        else {
          let question = elt[0]
          document.querySelector('#totalQuestions').innerHTML = `${i + 1} / ${questions.length}`
          container.innerHTML = `<h3>${question.titre}</h3>
                    ${question.answers.map((elt, i) => {
            return `<div>
                            <label for='options'>
                              ${elt.titre}
                              <input type='radio' name='options' value='${elt.value}' required>
                              <span></span>
                            </label>
                        </div>`
          }).join('')}`
        }

      })
    }

    changeQuestion(0)
  })
  return (
    <section id={"4"} className={styles.quizzContainer}>
      {
        <div className={styles.quizzBlock}>
          <h2 className={styles.quizzHeader} ref={quizzTitle}>On t’a parlé de nous, et toi ? <span data-up>dis nous tout !</span></h2>
          <div ref={quizzContent}>
            <p className={styles.quizzIntroduction}>Nous te proposons un <span>test de personnalité</span> qui permettra de te diriger vers la solution la plus adaptée à ton ( futur ) profil d’entrepreneur.</p>
            <form></form>
            <button className={styles.btnPrimary} data-button-next>
              Question Suivante - <span id={'totalQuestions'}></span>
            </button>
          </div>
        </div>
      }
    </section>
  )
}