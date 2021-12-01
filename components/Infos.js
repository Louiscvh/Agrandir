import styles from '../styles/components/Infos.module.scss'
import Image from 'next/image'
import { useEffect, useRef } from 'react'


export default function Infos() {
    const infos = useRef(null)

    useEffect(() => {

        let infosTexts = document.querySelectorAll('[data-appear]')
        let options = {
            threshold: 0.9
        };
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.intersectionRect)
                    entry.target.setAttribute("style", "opacity: 1; transform: translateY(0px);")
                } else {
                    entry.target.setAttribute("style", "opacity: 0; transform: translateY(30px);")
                }
            })
        }, options)

        infosTexts.forEach(elt => {
            io.observe(elt)
        });
       

    })
    let data = [
        {
            title: 'Clara',
            text: 'Sur 900 000 entrepreneurs en France, Entregens réuni une communauté de 100 000 entrepreneurs français ; Web, Artisanat, Art, Marketing, Vente... Les entrepreneurs de notre communauté viennent tous de secteurs variés ce qui fait la force de notre association.'
        },
        {
            title: 'Lina',
            text: 'Avec le Covid et le confinement, on vous entend, c’est DUR ! Entre l’isolement, le stress, la déprime... C’est pourquoi on vous propose via notre nouvelle plateforme d’entre-aide un blog et une communauté qui sauront vous mettre en contact avec toute sorte d’entrepreneurs ! '
        },
        {
            title: 'Yves',
            text: 'Il se balade de droite à gauche dans l école en pensant à son avenir.'
        }
    ]
    return (
        <section id={"2"} className={styles.infos}>
            <div className={styles.infosContainer} ref={infos}>
                <h2>Entregens t’aide avec ton statut d’entrepreneur,</h2>
                <p className={styles.infosTitleSpan}>Tristique diam sollicitudin praesent</p>
                    {
                        data.map((elt, i) => {
                            return <InfosBlock key={i} title={elt.title} text={elt.text} />
                        })
                    }
            </div>
        </section>
    )
}

export function InfosBlock(props) {
    return (
        <div className={styles.infosContent} data-appear>
            <div className={styles.infoDetails}>
                <h3 className={styles.infoTitle}>{props.title}</h3>
                <p className={styles.infoText}>{props.text}</p>
            </div>
        </div>
    )
}
