import Link  from "next/link"
import styles from './Header.module.sass'

export const Header = () => {
    console.log('Hello grom Header')

    return (

        <header>
          <nav>
            <ul className={styles.Header__list}>
              <Link href="/">
                <li>Home</li>              
              </Link>
              <Link href="/store">
                <li>Store</li>              
              </Link>
              {/* <Link href="/nowhere">
                <li>nowhere</li>              
              </Link> */}
            </ul>
          </nav>
        </header>
    )
}