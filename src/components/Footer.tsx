import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logoWrapper}>
                            <Image src="/icon.png" alt="ELITE ESTATES" width={50} height={50} />
                            <span className={styles.logoText}>ELITE ESTATES</span>
                        </div>
                        <p>Curating extraordinary properties for extraordinary individuals.</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Explore</h4>
                            <Link href="/listings">Listings</Link>
                            <Link href="/about">About</Link>
                            <Link href="/#concierge">Concierge</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Connect</h4>
                            <Link href="/#contact">Contact</Link>
                            <Link href="#">Careers</Link>
                            <Link href="#">Press</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Legal</h4>
                            <Link href="/privacy">Privacy</Link>
                            <Link href="/terms">Terms</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} ELITE ESTATES. All rights reserved.</p>
                    <p>Built by <a href="https://lopes2tech.com" target="_blank" rel="noopener">Lopes2Tech</a></p>
                </div>
            </div>
        </footer>
    );
}
