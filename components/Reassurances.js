import styles from '../styles/components/Reassurances/Reassurance.module.scss'

export default function Reassurances() {
    let data = [
        {
            title: 'Ludo',
            text: 'Lortestetettetete',
            image: 'https://images.pexels.com/photos/6663884/pexels-photo-6663884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            title: 'Tibo',
            text: 'Lortestetettetete',
            image: 'https://images.pexels.com/photos/6663884/pexels-photo-6663884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            title: 'Loris',
            text: 'Lortestetettetete',
            image: 'https://images.pexels.com/photos/6663884/pexels-photo-6663884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            title: 'Paulo',
            text: 'Lortestetettetete',
            image: 'https://images.pexels.com/photos/6663884/pexels-photo-6663884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    ]
  return (
    <section id={"2"}>
        {
            data.map((elt, i) => {
                return <ReassurancesBlock key={i} title={elt.title} text={elt.text} image={elt.image} />
            })
        }
    </section>
  )
}

export function ReassurancesBlock(props) {
  return (
    <div className={styles.reassurance}>
        <img className={styles.reassuranceImage} src={props.image}></img>
        <div className={styles.reassuranceDetails}>
            <p className={styles.reassuranceTitle}>{props.title}</p>
            <p className={styles.reassuranceText}>{props.text}</p>
        </div>
        
    </div>
  )
}
