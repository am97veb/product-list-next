interface GetDiscountedPriceProps {
  price: number;
  percentage?: number | null;
}

export const getDiscountedPrice = ({
  price,
  percentage,
}: GetDiscountedPriceProps) => {
  if (!percentage) {
    return null;
  }
  const discountedPrice = price * (1 - percentage / 100);

  return discountedPrice.toFixed(2);
};
