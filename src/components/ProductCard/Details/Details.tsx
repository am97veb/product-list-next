import styles from "./Details.module.css";

interface DetailsProps {
  title: string;
  description: string;
}

export default function Details({ title, description }: DetailsProps) {
  return (
    <div className={styles.productDetails}>
      <h2 className={styles.productName}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>
    </div>
  );
}
