import styles from "../styles/components/Hero.module.scss";
import { useEffect, useRef, useState, Suspense } from "react";
import Header from '../components/Header'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import Image from 'next/image'

let pos = 0;


export default function Hero() {

    const heroBackground = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            pos = window.scrollY / 200
            if (window.scrollY < 1280) heroBackground.current.style.transform = `scale(${(window.scrollY + 250) * 2})`;
        })
    }, [pos])

    const Model = () => {
        const mesh = useRef()
        const gltf = useLoader(GLTFLoader, "./assets/models/scene.gltf");
        useFrame(({camera}) => {
            mesh.current.rotation.y = -pos / 3
        })
        return (
            <>
                <primitive ref={mesh} object={gltf.scene} scale={0.7} />
            </>
        );
    };

    return (
        <section id={"1"} className={styles.hero}>
            <Canvas camera={{ fov: 12, position: [0, 10, 35]}} colorManagement={false} id="canvas">
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
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
            <div className={styles.hero__footer}>
                <div>
                    <h4>Réseaux</h4>
                    <div className={styles.hero__social}>
                        <a href="#" className={styles.hero__social__block}>
                            IN
                        </a>
                        <span>-</span>
                        <a href="#" className={styles.hero__social__block}>
                            LI
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
