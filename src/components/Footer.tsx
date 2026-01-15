import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logoCol}>
                        <span className={styles.logo}>ELITE ESTATES</span>
                    </div>

                    <div className={styles.nav}>
                        <Link href="#">Properties</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Concierge</Link>
                        <Link href="#">Journal</Link>
                        <Link href="#">Contact</Link>
                    </div>

                    <div className={styles.social}>
                        <Link href="#">Instagram</Link>
                        <Link href="#">LinkedIn</Link>
                        <Link href="#">Facebook</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Elite Estates. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
