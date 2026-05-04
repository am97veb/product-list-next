"use client";
import { Product } from "@/types/api";
import styles from "./ProductCard.module.css";
import Image from "./Image/Image";
import Details from "./Details/Details";
import Price from "./Price/Price";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className={styles.productListItem}>
      <Image url={product.image.url} alt={product.image.altText} />
      <Details title={product.title} description={product.description} />
      <Price price={product.price} promotion={product.promotion} />
      <button className={styles.addToCartButton}>
        add to cart
      </button>
    </li>
  );
}
