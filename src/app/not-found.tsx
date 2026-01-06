import Image from 'next/image'
import Link from 'next/link'
import styles from 'app/sass/not-found.module.sass'

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <h1 className={styles.NotFound__title}>404</h1>
      <Link href="/">

      <Image
        src="/images/404.png"
        alt="404"
        width={350}
        height={350}
      />
    </Link>

      <h2 className={styles.NotFound__subtitle}>
        Sorry resource not found
      </h2>
      <p className={styles.NotFound__description}></p>
      <Link className={styles.NotFound__link} href="/store">
        Go find some products!
      </Link>
    </main>
  );
}