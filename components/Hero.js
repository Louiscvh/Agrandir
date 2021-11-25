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
            //camera.position.x = -pos
            //if(camera.position.x < -5) camera.position.x = -5
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
                <h1 className={styles.hero__text}><span>Agrandir</span><span>vos horizons.</span></h1>
                <div className={styles.hero__background} ref={heroBackground} data-scroll="bg"></div>
            </div>
            <div className={styles.hero__footer}>
                <div></div>
                <p>#entregens2021</p>
                <div className={styles.hero__social}>
                    <a href="#" className={styles.hero__social__block}>
                        <div className={styles.hero__social__wrapper}></div>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5306 1.395C9.74 1.35875 9.5025 1.35125 7.5 1.35125C5.4975 1.35125 5.26 1.35875 4.46938 1.395C3.99385 1.40065 3.52283 1.48796 3.07688 1.65313C2.75334 1.77793 2.45951 1.96909 2.2143 2.2143C1.96909 2.45951 1.77793 2.75334 1.65313 3.07688C1.48796 3.52283 1.40065 3.99385 1.395 4.46938C1.35875 5.26 1.35125 5.4975 1.35125 7.5C1.35125 9.5025 1.35875 9.74 1.395 10.5306C1.40065 11.0062 1.48796 11.4772 1.65313 11.9231C1.77793 12.2467 1.96909 12.5405 2.2143 12.7857C2.45951 13.0309 2.75334 13.2221 3.07688 13.3469C3.52283 13.512 3.99385 13.5994 4.46938 13.605C5.26 13.6412 5.4975 13.6487 7.5 13.6487C9.5025 13.6487 9.74 13.6412 10.5306 13.605C11.0062 13.5994 11.4772 13.512 11.9231 13.3469C12.2467 13.2221 12.5405 13.0309 12.7857 12.7857C13.0309 12.5405 13.2221 12.2467 13.3469 11.9231C13.512 11.4772 13.5994 11.0062 13.605 10.5306C13.6412 9.74 13.6487 9.50375 13.6487 7.50062C13.6487 5.4975 13.6412 5.26 13.605 4.46938C13.5994 3.99385 13.512 3.52283 13.3469 3.07688C13.2221 2.75334 13.0309 2.45951 12.7857 2.2143C12.5405 1.96909 12.2467 1.77793 11.9231 1.65313C11.4772 1.48796 11.0062 1.40065 10.5306 1.395ZM4.4075 0.045C5.2075 0.00875002 5.46313 0 7.5 0C9.5375 0 9.79187 0.00812497 10.5919 0.045625C11.2141 0.0579145 11.8297 0.175625 12.4125 0.39375C12.9108 0.586436 13.3633 0.881111 13.7411 1.25889C14.1189 1.63666 14.4136 2.0892 14.6063 2.5875C14.8245 3.1701 14.9424 3.78548 14.955 4.4075C14.9913 5.2075 15 5.4625 15 7.5C15 9.5375 14.9913 9.79187 14.955 10.5919C14.9427 11.2141 14.825 11.8297 14.6069 12.4125C14.4142 12.9108 14.1195 13.3633 13.7417 13.7411C13.364 14.1189 12.9114 14.4136 12.4131 14.6063C11.8303 14.8246 11.2147 14.9425 10.5925 14.955C9.7925 14.9913 9.53687 15 7.5 15C5.46313 15 5.20813 14.9913 4.40813 14.955C3.7859 14.9425 3.1703 14.8246 2.5875 14.6063C2.0892 14.4136 1.63666 14.1189 1.25889 13.7411C0.881111 13.3633 0.586436 12.9108 0.39375 12.4125C0.175481 11.8299 0.0575601 11.2145 0.045 10.5925C0.00875002 9.7925 0 9.5375 0 7.5C0 5.4625 0.00875002 5.20813 0.045 4.40813C0.0574896 3.7859 0.175412 3.1703 0.39375 2.5875C0.586436 2.0892 0.881111 1.63666 1.25889 1.25889C1.63666 0.881111 2.0892 0.586436 2.5875 0.39375C3.1701 0.175481 3.78548 0.0575601 4.4075 0.045ZM11.5039 4.39617C12.001 4.39617 12.4039 3.99323 12.4039 3.49617C12.4039 2.99912 12.001 2.59617 11.5039 2.59617C11.0068 2.59617 10.6039 2.99912 10.6039 3.49617C10.6039 3.99323 11.0068 4.39617 11.5039 4.39617ZM7.49924 3.64982C6.73753 3.64982 5.99293 3.87569 5.3596 4.29887C4.72626 4.72205 4.23264 5.32353 3.94114 6.02726C3.64965 6.73098 3.57339 7.50534 3.72199 8.25241C3.87059 8.99947 4.23738 9.6857 4.77599 10.2243C5.3146 10.7629 6.00082 11.1297 6.74789 11.2783C7.49496 11.4269 8.26932 11.3506 8.97304 11.0592C9.67677 10.7677 10.2783 10.274 10.7014 9.6407C11.1246 9.00737 11.3505 8.26277 11.3505 7.50106C11.3505 6.47965 10.9447 5.50007 10.2225 4.77782C9.50023 4.05557 8.52065 3.64982 7.49924 3.64982ZM7.49924 10.0011C7.00478 10.0011 6.52143 9.85444 6.11031 9.57974C5.69919 9.30503 5.37876 8.91459 5.18954 8.45777C5.00032 8.00096 4.95081 7.49829 5.04727 7.01334C5.14374 6.52839 5.38184 6.08293 5.73147 5.7333C6.0811 5.38367 6.52656 5.14556 7.01151 5.0491C7.49646 4.95264 7.99913 5.00215 8.45594 5.19137C8.91276 5.38058 9.30321 5.70102 9.57791 6.11214C9.85261 6.52326 9.99924 7.00661 9.99924 7.50106C9.99924 8.1641 9.73584 8.79999 9.267 9.26883C8.79816 9.73767 8.16228 10.0011 7.49924 10.0011Z" fill="#181611"/>
                        </svg>
                    </a>
                    <a href="#" className={styles.hero__social__block}>
                        <div className={styles.hero__social__wrapper}></div> 
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 1.00729C16 1.00729 14.6241 1.87088 13.8591 2.11575C13.4485 1.61405 12.9027 1.25846 12.2957 1.09707C11.6887 0.935677 11.0497 0.976274 10.4651 1.21337C9.88045 1.45046 9.37848 1.87262 9.02703 2.42273C8.67558 2.97285 8.49161 3.62438 8.5 4.28922V5.01371C7.3018 5.04672 6.1145 4.76435 5.04387 4.19174C3.97323 3.61913 3.05249 2.77405 2.36364 1.73177C2.36364 1.73177 -0.363636 8.25218 5.77273 11.1501C4.36854 12.1629 2.69579 12.6708 1 12.5991C7.13636 16.2216 14.6364 12.5991 14.6364 4.26749C14.6364 4.06608 14.6173 3.86467 14.5818 3.66616C15.2773 2.93732 16 1.00729 16 1.00729Z" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href="#" className={styles.hero__social__block}>
                        <div className={styles.hero__social__wrapper}></div>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.21591 0C0.998153 0 0 0.998153 0 2.21591C0 3.43367 0.998153 4.43182 2.21591 4.43182C3.43366 4.43182 4.43182 3.43367 4.43182 2.21591C4.43182 0.998153 3.43366 0 2.21591 0ZM2.21591 1.02273C2.88094 1.02273 3.40909 1.55088 3.40909 2.21591C3.40909 2.88094 2.88094 3.40909 2.21591 3.40909C1.55088 3.40909 1.02273 2.88094 1.02273 2.21591C1.02273 1.55088 1.55088 1.02273 2.21591 1.02273ZM11.0795 4.43182C10.1124 4.43182 9.41385 4.79529 8.86364 5.24148C8.84244 4.98825 8.60639 4.77187 8.35227 4.77273H5.625C5.35726 4.77275 5.11366 5.01635 5.11364 5.28409V14.4886C5.11366 14.7564 5.35726 15 5.625 15H8.52273C8.79047 15 9.03406 14.7564 9.03409 14.4886V9.375C9.03409 8.97808 9.16156 8.60319 9.33771 8.3576C9.51387 8.11203 9.70584 8.01136 9.88636 8.01136H10.2273C10.4078 8.01136 10.5998 8.11203 10.7759 8.3576C10.9521 8.60319 11.0795 8.97808 11.0795 9.375V14.4886C11.0796 14.7564 11.3232 15 11.5909 15H14.4886C14.7564 15 15 14.7564 15 14.4886V8.52273C15 7.36447 14.7824 6.3324 14.1371 5.57706C13.4917 4.82172 12.4565 4.43182 11.0795 4.43182ZM0.799006 4.77273C0.549487 4.79888 0.339567 5.03321 0.340909 5.28409V14.4886C0.340936 14.7564 0.584531 15 0.852273 15H3.75C4.01774 15 4.26134 14.7564 4.26136 14.4886V5.28409C4.26134 5.01635 4.01774 4.77275 3.75 4.77273C2.7684 4.77273 1.77647 4.77273 0.799006 4.77273ZM11.0795 5.45455C12.2715 5.45455 12.9424 5.75484 13.3594 6.2429C13.7763 6.73096 13.9773 7.49552 13.9773 8.52273V13.9773H12.1023V9.375C12.1023 8.77094 11.9237 8.20269 11.6069 7.76101C11.2901 7.31934 10.8022 6.98864 10.2273 6.98864H9.88636C9.31143 6.98864 8.82354 7.31934 8.50675 7.76101C8.18995 8.20269 8.01136 8.77094 8.01136 9.375V11.25C7.99362 11.2491 8.0291 11.2471 8.01136 11.248C8.01136 11.8077 8.01136 11.5392 8.01136 11.8077C8.01136 12.0761 8.01136 11.8856 8.01136 12.2727V12.6136C8.0291 12.6127 7.99362 12.6127 8.01136 12.6136C8.01136 13.2215 8.01136 12.9389 8.01136 13.2102C8.01136 13.4659 8.01136 13.2102 8.01136 13.6364V13.9773H6.13636V5.79545H7.84091V6.47727C7.8408 6.68761 7.98453 6.89046 8.183 6.9601C8.38147 7.02974 8.62043 6.96115 8.75178 6.79688C9.31887 6.08984 9.86595 5.45455 11.0795 5.45455ZM1.36364 5.79545H3.23864V11.25C3.2919 11.25 3.2209 11.2491 3.23864 11.25C3.23864 11.982 3.23864 11.547 3.23864 11.8269C3.23864 12.0927 3.23864 12.0857 3.23864 12.2727V12.6136C3.25638 12.6127 3.2209 12.6127 3.23864 12.6136C3.23864 13.089 3.23864 12.8337 3.23864 13.102C3.23864 13.3703 3.23864 13.2955 3.23864 13.6364V13.9773H1.36364V5.79545Z" fill="black"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
