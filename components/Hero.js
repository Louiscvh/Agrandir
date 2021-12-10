import styles from "../styles/components/Hero.module.scss";
import { useEffect, useRef, useState, Suspense } from "react";
import Header from '../components/Header'
import { Canvas, useFrame } from '@react-three/fiber'
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader, Box } from '@react-three/fiber'

let pos = 0;

export default function Hero() {

    const heroBackground = useRef()
    const mesh = useRef()

    useEffect(() => {
        let canva = document.querySelector('#canvas canvas')
        window.addEventListener('load',() => {
            canva.style.top = "0vh"
        } )
        window.addEventListener('scroll', () => {
            pos = window.scrollY / 200
            if (window.scrollY < 1280) heroBackground.current.style.transform = `scale(${(window.scrollY + 250) * 2})`;
        })

        
    }, [pos])

    const Model = () => {
        
        const materials = useLoader(MTLLoader, "./assets/models/model.mtl");
        const obj = useLoader(OBJLoader, "./assets/models/model.obj", (loader) => {
          materials.preload();
          loader.setMaterials(materials);
        });
        useFrame((state, delta) => (mesh.current.rotation.y = pos))
              return <primitive ref={mesh} object={obj} scale={0.01} position={[0, -1.5, 0]}/>;
      };
  

    return (
        <section id={"1"} data-name="Accueil" className={styles.hero}>
            <Canvas camera={{ fov: 12, position: [0, 10, 35]}} id="canvas" colorManagement={false}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5}/>
                    <pointLight position={[10, 10, 10]} intensity={0.05} color="pink"/>
                    <Model />
                </Suspense>
            </Canvas>
            <Header />
            <div>
                <h1 className={styles.hero__text}>
                    <div>
                        <p>Toi aussi tu veux <span data-up>te lancer ?</span></p>
                        <p>T’inquiète pas, <span data-up>on va t’aider !</span></p>
                    </div>
                    <small>Entregens te donne un avant goût de <span data-up>l’entrepreneuriat à distance</span></small>
                </h1>
                <div className={styles.hero__background} ref={heroBackground} data-scroll="bg"></div>
            </div>
            <aside className={styles.hero__footer}>
                <div>
                    <h4>Réseaux</h4>
                    <div className={styles.hero__social}>
                        <a target="_blank" rel="noreferrer" title="Instagram" href="https://www.instagram.com/entregens_/" className={styles.hero__social__block}>IN - </a>
                        <a target="_blank" rel="noreferrer" title="Linkedin" href="https://www.linkedin.com/company/entregens-officiel/" className={styles.hero__social__block}>LI</a>
                    </div>
                </div>
            </aside>
        </section>
    );
}
