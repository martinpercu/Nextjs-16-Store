interface CategoryProps {
    params: Promise<{
        category: string
    }>
}

export default async function Category(props: CategoryProps) {

    const { category } = await props.params

    return(
        <h1>Dynamic Catogory: {category} </h1>
    )
}