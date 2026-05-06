"use client";
import { useState } from "react";
import styles from "./Picture.module.css";
import Image from "next/image";

interface PictureProps {
  url: string;
  alt: string;
}

export default function Picture({ url, alt }: PictureProps) {
  const [src, setSrc] = useState(url);

  return (
    <Image
      src={src}
      width={170}
      height={170}
      alt={alt}
      className={styles.picture}
      onError={() => {
        setSrc("/noImage.svg");
      }}
    />
  );
}
