"use client";
import styles from "./Picture.module.css";

interface PictureProps {
  url: string;
  alt: string;
}

export default function Picture({ url, alt }: PictureProps) {

  return (
    <img
      src={url}
      alt={alt}
      className={styles.picture}
    />
  );
}
