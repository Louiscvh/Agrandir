import Images from "next/image";
import styles from "../styles/components/Header.module.scss";
import { useEffect } from "react";
import logo from "../public/assets/img/logo.webp";

export default function Header() {
  useEffect(() => {
    let sections = document.querySelectorAll("section"),
      nav = document.querySelector("nav");

    sections.forEach((el, i) => {
     nav.innerHTML += `<a href="#${el.id}"><div data-scroll="nav"></div></a>`
    });
  });
  return (
    <header className={styles.header}>
      <Images src={logo} className={styles.logo} height="50" width="50" alt="logo"></Images>
      <nav className={styles.navigation}></nav>
    </header>
  );
}
