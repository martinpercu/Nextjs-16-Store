import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify"



interface CategoriesProps {
    params: Promise<{
        categories: string[]
    }>
    searchParams: Promise<{ 
        [key: string]: string | string[] | undefined 
    }>
}

export default async function Category({
        params,
        searchParams
}: CategoriesProps) {
    const products = await getProducts()

    const { categories } = await params

    const search = await searchParams;

    console.log(products)
    console.log(categories)
    console.log(search)

    return(
        <ProductsWrapper products={products}/>
        // <div>
        //     <h1>Dynamic Catogory: {categories} </h1>
        // </div>
    )
}