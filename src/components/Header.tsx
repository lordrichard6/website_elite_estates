'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { Search, User, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.navLeft} ${isOpen ? styles.open : ''}`}>
          <Link href="/listings" onClick={() => setIsOpen(false)}>Listings</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        </nav>

        <Link href="/" className={styles.logo}>
          <Image src="/icon.png" alt="ELITE ESTATES" width={50} height={50} priority />
          <span>ELITE ESTATES</span>
        </Link>

        <nav className={`${styles.navRight} ${isOpen ? styles.open : ''}`}>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className={styles.icons}>
            <Search size={20} className={styles.icon} />
            <User size={20} className={styles.icon} />
          </div>
        </nav>
      </div>
    </header>
  );
}
