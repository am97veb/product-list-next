"use client";
import Cart from "./Cart/Cart";
import styles from "./Header.module.css";

interface HeaderProps {
  logo: string;
}

export default function Header({ logo }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={logo} alt="App Logo" className={styles.appLogo} />
        <Cart />
      </div>
    </header>
  );
}
