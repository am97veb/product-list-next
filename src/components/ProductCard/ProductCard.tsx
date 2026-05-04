"use client";
import { Product } from "@/types/api";
import styles from "./ProductCard.module.css";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className={styles.productListItem}>
      <img
        src={product.image.url}
        alt={product.image.altText}
        className={styles.image}
      />
      <div className={styles.productDetails}>
        <h2 className={styles.productName}>{product.title}</h2>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
      <div className={styles.productCost}>
        <p className={styles.price}>{product.price.toFixed(2)}</p>
        <p className={styles.discount}>
          {product.promotion
            ? `On sale: \n ${product.promotion.name} \n ${product.promotion.percentage}% off`
            : null}
        </p>
        <p className={styles.discountedPrice}>
          {getDiscountedPrice({ product })}
        </p>
      </div>
      <button className={styles.addToCartButton}>add to cart</button>
    </li>
  );
}
