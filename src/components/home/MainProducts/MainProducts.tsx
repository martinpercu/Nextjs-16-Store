import Image from "next/image";
import styles from "./MainProducts.module.sass";

// Type definition for Shopify products
interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  vendor: string;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      }
    }>
  }
}

// Type definition for Shopify GraphQL response
interface ShopifyResponse {
  data?: {
    products: {
      edges: Array<{
        node: ShopifyProduct
      }>
    }
  };
  errors?: Array<{
    message: string;
  }>;
}

const getProducts = async (): Promise<ShopifyProduct[]> => {
  // GraphQL query to fetch the first 10 products
  const graphqlQuery = {
    query: `
      query {
        products(first: 4) {
          edges {
            node {
              id
              title
              handle
              descriptionHtml
              vendor
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `
  };

  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-10/graphql.json`, {
    method: 'POST', // GraphQL always uses POST
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
    },
    body: JSON.stringify(graphqlQuery)
  });

  const { data, errors } = await response.json() as ShopifyResponse;

  if (errors) {
    console.error("Shopify errors:", errors);
    return [];
  }

  if (!data) {
    console.error("No data in response");
    return [];
  }

  // Clean up Shopify's structure to make it easier to use
  return data.products.edges.map((edge) => edge.node);
}


export const MainProducts = async () => {
  const products = await getProducts()
  console.log(products)
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