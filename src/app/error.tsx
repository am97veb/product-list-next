"use client";
import styles from "./error.module.css";

export default function Error() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>
        We couldn't load the products. Please try again.
      </p>
    </div>
  );
}