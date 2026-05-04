import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <p>Loading products...</p>
      <div className={styles.spinner}></div>
    </div>
  );
}
