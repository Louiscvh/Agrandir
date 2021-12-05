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
            title: 'Un réseau DE PLUS DE  100 000 entrepreneurs !',
            text: 'Sur 900 000 entrepreneurs en France, Entregens réuni une communauté de 100 000 entrepreneurs français ; Web, Artisanat, Art, Marketing, Vente... Les entrepreneurs de notre communauté viennent tous de secteurs variés ce qui fait la force de notre association.'
        }
    ]
    return (
        <section id={"2"} className={styles.infos}>
            <div className={styles.infosContainer} ref={infos}>
                <h2><span data-up>Entregens t’accompagne</span> dans tes démarches ✨</h2>
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
