import Image from "next/image";
import styles from "./MainProducts.module.sass";
import { getProducts } from "app/services/shopify";

export const MainProducts = async () => {
  const products = await getProducts()

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products !!!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product) => {
          const imageSrc = product.images.edges[0]?.node.url;
          const imageAlt = product.images.edges[0]?.node.altText || product.title;

          return (
            <article key={product.id}>
              <p>{product.title}</p>
              {imageSrc && (
                <Image src={imageSrc} fill alt={imageAlt} loading="eager" />
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}