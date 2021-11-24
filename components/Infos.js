import styles from '../styles/components/Infos.module.scss'
import Image from 'next/image'

export default function Reassurances() {
    let data = [
        {
            title: 'Ludo',
            text: 'Integer blandit elit, velit turpis. Eget magna at pretium sit accumsan, nisi, pellentesque bibendum mollis. Libero id quis at sed facilisis.',
            image: 'https://images.pexels.com/photos/4115538/pexels-photo-4115538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            title: 'Tibo',
            text: 'Integer blandit elit, velit turpis. Eget magna at pretium sit accumsan, nisi, pellentesque bibendum mollis. Libero id quis at sed facilisis.',
            image: 'https://images.pexels.com/photos/4115538/pexels-photo-4115538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            title: 'Loris',
            text: 'Integer blandit elit, velit turpis. Eget magna at pretium sit accumsan, nisi, pellentesque bibendum mollis. Libero id quis at sed facilisis.',
            image: 'https://images.pexels.com/photos/4115538/pexels-photo-4115538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            title: 'Paulo',
            text: 'Integer blandit elit, velit turpis. Eget magna at pretium sit accumsan, nisi, pellentesque bibendum mollis. Libero id quis at sed facilisis.',
            image: 'https://images.pexels.com/photos/4115538/pexels-photo-4115538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ]
  return (
    <section id={"2"} className={styles.reassurances}>
        <div className={styles.reassurances__container}>
            <h2>Turpis a egestas <span>senectus habit,</span></h2>
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
