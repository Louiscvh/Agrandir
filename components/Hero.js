import styles from "../styles/components/Hero.module.scss";
import { useEffect, useRef, useState, Suspense } from "react";
import Header from '../components/Header'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

let pos = 0;


export default function Hero() {
    const heroBackground = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            pos = window.scrollY / 200
        })
    }, [pos])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 1280) heroBackground.current.style.transform = `scale(${(window.scrollY + 250) * 2})`;
        })
    });

    const Model = () => {
        const mesh = useRef()
        const gltf = useLoader(GLTFLoader, "./assets/models/scene.gltf");
        useFrame(({camera}) => {
            mesh.current.rotation.y = -pos / 5
            camera.position.x = -pos
            if(camera.position.x > -5) console.log('scroll')
            else  camera.position.x = -5
        })
        return (
            <>
                <primitive ref={mesh} object={gltf.scene} scale={0.7} />
            </>
        );
    };

    return (
        <section id={"1"} className={styles.hero}>
            <Canvas camera={{ fov: 12, position: [0, 10, 35]}} colorManagement={false}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
            <Header />
            <div>
                <h1 className={styles.hero__text}><span>Lorem ipsum dolor sit amet,</span><span> consectetur adipiscing elit.</span></h1>
                <div className={styles.hero__background} ref={heroBackground}></div>
            </div>
            <div className={styles.hero__footer}>
                <div></div>
                <p>#entregens2021</p>
                <div className={styles.hero__social}>
                    <div className={styles.hero__social__block}>
                        <div className={styles.hero__social__wrapper}></div>
                    </div>
                    <div className={styles.hero__social__block}>
                        <div className={styles.hero__social__wrapper}></div>
                    </div>
                    <div className={styles.hero__social__block}>
                        <div className={styles.hero__social__wrapper}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
