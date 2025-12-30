import styles from './Description.module.sass';
import Image from 'next/image';


export const Description = () => {
    return(
        <section className={styles.Description}>
            <Image 
                src="/images/back-1.png"    
                alt="example" 
                width={480}
                height={280}
                priority={false} // this is to cancel Lazy Loading ==> this is in the main page!!!
                quality={50}
            />
            <div className={styles.Description__text}>
                <h2>Description .. . . . .</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
         </section>
    )
}