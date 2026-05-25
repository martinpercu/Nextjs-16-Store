// Type definition for Shopify products
export interface ShopifyProduct {
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
export interface ShopifyResponse {
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
