import { useCart } from "@/context/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { count } = useCart();

  return (
    <div className={styles.cart}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 4H5L4 6H6L9.6 14.59L8.24 17.03C8.09 17.32 8 17.65 8 18C8 19.1 8.9 20 10 20H19V18H10.42C10.3 18 10.2 17.9 10.2 17.78L10.23 17.67L11.1 16H17.55C18.3 16 18.96 15.59 19.3 14.97L22 9H6.21"
          fill="white"
        />
      </svg>

      <span className={styles.badge}>{count}</span>
    </div>
  );
}
