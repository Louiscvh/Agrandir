import styles from '../styles/components/Infos.module.scss'
import Image from 'next/image'

export default function Reassurances() {
    let data = [
        {
            title: 'Kim',
            text: 'Elle designent toutes les deux la future mascotte de notre Agence AGRANDIR.',
            image: 'https://images.pexels.com/photos/4115538/pexels-photo-4115538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            title: 'Clara',
            text: 'Elle designent toutes les deux la future mascotte de notre Agence AGRANDIR.',
            image: 'https://images.pexels.com/photos/4115538/pexels-photo-4115538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            title: 'Lina',
            text: 'Elle discute avec Henry avec Cécile avec tous les référents de la compèt ',
            image: 'https://images.pexels.com/photos/4115538/pexels-photo-4115538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            title: 'Yves',
            text: 'Il se balade de droite à gauche dans l école en pensant à son avenir.',
            image: 'https://images.pexels.com/photos/4115538/pexels-photo-4115538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ]
  return (
    <section id={"2"} className={styles.reassurances}>
        <div className={styles.reassurances__container}>
            <h2>Toute notre équipe <span>bosse à fond,</span></h2>
            {
                data.map((elt, i) => {
                    return <ReassurancesBlock key={i} title={elt.title} text={elt.text} image={elt.image} />
                })
            }
        </div>
    </section>
  )
}

export function ReassurancesBlock(props) {
  return (
    <div className={styles.reassurance}>
        <Image className={styles.reassuranceImage} src={`${props.image}`} width={60} height={60}/>
        <div className={styles.reassuranceDetails}>
            <h3 className={styles.reassuranceTitle}>{props.title}</h3>
            <p className={styles.reassuranceText}>{props.text}</p>
        </div>
    </div>
  )
}
