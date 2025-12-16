import Link  from "next/link"

export const Header = () => {
    console.log('Hello grom Header')


    return (

        <header>
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>              
              </Link>
              <Link href="/store">
                <li>Store</li>              
              </Link>
              <Link href="/store/categories">
                <li>Categories</li>              
              </Link>
              <Link href="/about">
                <li>About</li>              
              </Link>
            </ul>
          </nav>
        </header>
    )
}