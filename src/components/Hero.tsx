import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/hero.png"
                alt="Luxury Estate"
                fill
                className={styles.bgImage}
                priority
            />
            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.subtitle}>Discover Your Legacy</span>
                    <h1 className={styles.title}>
                        Exquisite Living<br />
                        <span className="text-gold">Redefined</span>
                    </h1>

                    <div className={styles.search}>
                        <input type="text" placeholder="Search by location, property type, or ID..." className={styles.input} />
                        <button className={styles.searchBtn}>Search Properties</button>
                    </div>
                </div>
            </div>

            <div className={styles.scroll}>
                <span>Explore</span>
                <div className={styles.line}></div>
            </div>
        </section>
    );
}
