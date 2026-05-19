'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.brand}>
        <span className={styles.brandName}>The Northern Chapter</span>
        <span className={styles.brandSub}>Frozen Woods · Mukteshwar</span>
      </div>

      <ul className={styles.links}>
        {[['#story','The Space'],['#experience','Experience'],['#gallery','Gallery'],].map(([id, label]) => (
          <li key={id}><a href={id} onClick={e => go(e as any, id)}>{label}</a></li>
        ))}
        <li>
          <a href="#booking" className={styles.cta} onClick={e => go(e as any, '#booking')}>
            Request a Stay
          </a>
        </li>
      </ul>

      <button className={styles.burger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
        <span className={menuOpen ? styles.lineTop + ' ' + styles.cross : styles.lineTop} />
        <span className={menuOpen ? styles.lineMid + ' ' + styles.hide : styles.lineMid} />
        <span className={menuOpen ? styles.lineBot + ' ' + styles.crossBot : styles.lineBot} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {[['#story','The Space'],['#experience','Experience'],['#gallery','Gallery'],['#booking','Request a Stay']].map(([id,label]) => (
            <a key={id} href={id} onClick={e => go(e as any, id)}>{label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
