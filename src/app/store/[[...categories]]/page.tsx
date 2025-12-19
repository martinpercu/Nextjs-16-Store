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

    const { categories } = await params
    const search = await searchParams;

    console.log(categories)
    console.log(search)

    return(
        <div>
            <h1>Dynamic Catogory: {categories} </h1>
        </div>
    )
}