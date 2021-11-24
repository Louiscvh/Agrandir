import Head from "next/head";
import Images from "next/image";
import styles from "../styles/components/Header.module.scss";
import { useEffect, useRef } from "react";
import logo from "../public/assets/img/logo.png";

export default function Header() {
  useEffect(() => {
    let sections = document.querySelectorAll("section"),
      compteur = document.querySelector("h1"),
      nav = document.querySelector("nav");

    sections.forEach((el, i) => {
     nav.innerHTML += `<a href="#${el.id}"><div></div></a>`
    });

    document.querySelectorAll("nav a").forEach((el, i) => {
      el.addEventListener("click", (e) => {
        document.querySelectorAll("nav a").forEach((el, i) => {
        });
      });
    });
  });
  return (
    <header className={styles.header}>
      <Images src={logo} className={styles.logo} height="50" width="50"></Images>
      <nav className={styles.navigation}></nav>
    </header>
  );
}
