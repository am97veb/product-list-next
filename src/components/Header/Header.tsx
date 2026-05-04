"use client";
import { useCart } from "@/context/CartContext";
import styles from "./Header.module.css";

interface HeaderProps {
  logo: string;
}

export default function Header({ logo }: HeaderProps) {
  const { count } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={logo} alt="App Logo" className={styles.appLogo} />
        <span className={styles.count}>{count}🛒</span>
      </div>
    </header>
  );
}
