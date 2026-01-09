import { getProducts } from "app/services/shopify"

getProducts() 

export async function GET() {
    const mesagge = "jajajaj"

    const products = await getProducts()

    // return Response.json({mesagge})
    return Response.json({products})
}