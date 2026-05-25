import { env } from "app/config/env"
import { shopifyUrls } from "./urls"
import { ShopifyProduct, ShopifyResponse } from "./types"

export * from "./types"

export const getProducts = async (): Promise<ShopifyProduct[]> => {
  // GraphQL query to fetch the first 4 products
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

  const response = await fetch(shopifyUrls.products.all, {
    method: 'POST', // GraphQL always uses POST
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': env.SHOPIFY_API_KEY || ""
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
  return data.products.edges.map((edge) => {
    const product = edge.node;
    return {
      ...product,
      // Extraemos la URL de la primera imagen o devolvemos null
      image: product.images.edges[0]?.node?.url || null 
    };
  });
}