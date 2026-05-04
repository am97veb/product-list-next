import fetchApi from "@/api/fetchApi";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { ColumbusRecruitmentData } from "@/types/api";

export default async function ProductList() {
  const { products }: ColumbusRecruitmentData = await fetchApi();

  return (
    <main className={styles.main}>
      <ul className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.articleNumber} product={product} />
        ))}
      </ul>
    </main>
  );
}
