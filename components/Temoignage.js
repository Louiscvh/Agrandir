import styles from '../styles/components/Temoignage/Temoignage.module.scss'

export default function Temoignage() {
    let data = [
        {
            title: 'Témoignage',
            text: 'Volutpat orci elementum risus  Proin odio et sagittis vulputate morbi eget interdum. Sit lobortis viverra felis, orci odio justo maecenas curabitur augue. Convallis porttitor aliquet ipsum dui. Sit ipsum vestibulum, malesuada facilisi elit, proin in diam. Erat aliquam, ultrices aliquet leo. Ut gravida tempus risus magna purus. Iaculis sed dignissim suspendisse imperdiet eget nunc pharetra diam malesuada. '
        }
    ]
  return (
    <section id={"3"}>
        {
            data.map((elt, i) => (
                <div key={i} className={styles.temoignageBlock}>
                    <h1>{elt.title}</h1>
                    <p>{elt.text}</p>
                </div>
            ))
        }
    </section>
  )
}
