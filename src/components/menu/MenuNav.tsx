'use client';
import { useEffect, useRef, useState } from 'react';
import { MENU_SECTIONS } from '@/lib/menuData';
import styles from './Menu.module.css';

export default function MenuNav() {
  const [activeId, setActiveId] = useState('');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = MENU_SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActiveId(e.target.id);
          // Scroll the active nav link into view
          const link = navRef.current?.querySelector(`[data-id="${e.target.id}"]`) as HTMLElement;
          link?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const NAV_LABELS: Record<string, string> = {
    beverages:   'Beverages',
    shakes:      'Shakes',
    breakfast:   'Breakfast',
    snacks:      'Snacks',
    bbq:         'Bar-be-Que',
    sandwiches:  'Sandwiches',
    chinese:     'Chinese',
    continental: 'Continental',
    indian:      'Indian',
    'rice-roti': 'Rice & Roti',
    buffet:      'Buffet',
  };

  return (
    <nav className={styles.navBar} id="menu-nav">
      <div className={styles.navInner} ref={navRef}>
        {MENU_SECTIONS.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-id={s.id}
            className={`${styles.navLink} ${activeId === s.id ? styles.navLinkActive : ''}`}
            onClick={e => go(e, s.id)}
          >
            {NAV_LABELS[s.id] ?? s.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
