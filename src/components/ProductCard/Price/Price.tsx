import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import styles from "./Price.module.css";

interface PriceProps {
  price: number;
  promotion?: { name: string; percentage: number } | null;
}

export default function Price({ price, promotion }: PriceProps) {
  return (
    <div className={styles.productCost}>
      <p className={styles.price}>{price.toFixed(2)}</p>
      <p className={styles.discount}>
        {promotion
          ? `On sale: \n ${promotion.name} \n ${promotion.percentage}% off`
          : null}
      </p>
      <p className={styles.discountedPrice}>
        {getDiscountedPrice({ price, percentage: promotion?.percentage })}
      </p>
    </div>
  );
}
