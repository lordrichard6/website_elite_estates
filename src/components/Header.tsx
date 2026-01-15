import Link from 'next/link';
import styles from './Header.module.css';
import { Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <nav className={styles.navLeft}>
          <Link href="#properties" className={styles.link}>Properties</Link>
          <Link href="#concierge" className={styles.link}>Concierge</Link>
        </nav>

        <Link href="/" className={styles.logo}>
          ELITE ESTATES
        </Link>

        <nav className={styles.navRight}>
          <Link href="#about" className={styles.link}>About</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
          <div className={styles.icons}>
            <Search size={20} className={styles.icon} />
            <User size={20} className={styles.icon} />
          </div>
        </nav>
      </div>
    </header>
  );
}
