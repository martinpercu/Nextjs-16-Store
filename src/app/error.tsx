"use client"
import Link  from "next/link"
import Image from "next/image"
import styles from 'app/sass/global-error.module.sass'

export default function GloablError({ reset }: ErrorPageProps) {
    return(
        <main className={styles.Error}>

            <h1 className={styles.Error__title}>An Error !!!</h1>
           
            <Link href="/">
                <Image
                    src='/images/error.png'
                    width={380}
                    height={380}
                    alt='Error'
                />            
            </Link>
            
            <p className={styles.Error__message}>Something happend. We are sorry about this feeling</p>
           
            <button className={styles.Error__button} onClick={reset}>Try AGAIN</button>

        </main>
    )
}