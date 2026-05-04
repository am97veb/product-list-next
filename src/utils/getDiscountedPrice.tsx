import { Product } from "@/types/api";

export const getDiscountedPrice = ({ product }: { product: Product }) => {
  if (!product.promotion) {
    return null;
  }
  const discoutendPrice =
    product.price * (1 - product.promotion.percentage / 100);

  return discoutendPrice.toFixed(2);
};
