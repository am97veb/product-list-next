import styles from "./Image.module.css";

interface ImageProps {
  url: string;
  alt: string;
}

export default function Image({ url, alt }: ImageProps) {
  return <img src={url} alt={alt} className={styles.image} />;
}
