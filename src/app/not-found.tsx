import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <p>404 - Nie znaleziono strony.</p>
      <a className={styles.homeLink} href="/">
        Wróć na stronę główną.
      </a>
    </div>
  );
}
