import Head from 'next/head'
import Images from 'next/image'
import styles from '../styles/components/Header/Home.module.scss'
import { useEffect, useRef } from 'react'
import logo from '../public/assets/img/logo.png'

export default function Header() {
    const navi = useRef(null)
    useEffect(() => {
        let sections = document.querySelectorAll('section'),
            compteur = document.querySelector('h1'),
            nav = document.querySelector('nav')
            console.log(navi.current)
    })
  return (
    <header className={styles.header}>
        <Images src={logo}></Images>
        <nav className={styles.navigation} ref={navi}></nav>
    </header>
  )
}
