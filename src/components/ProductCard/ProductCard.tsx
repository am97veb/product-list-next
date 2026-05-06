"use client";
import { Product } from "@/types/api";
import styles from "./ProductCard.module.css";
import Picture from "./Picture/Picture";
import Details from "./Details/Details";
import Price from "./Price/Price";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <li className={styles.productListItem}>
      <Picture url={product.image.url} alt={product.image.altText} />
      <Details title={product.title} description={product.description} />
      <Price price={product.price} promotion={product.promotion} />
      <button className={styles.addToCartButton} onClick={addToCart}>
        add to cart
      </button>
    </li>
  );
}
