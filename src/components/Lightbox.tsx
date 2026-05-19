'use client';
import { useEffect, useState } from 'react';
import styles from './Lightbox.module.css';

export default function Lightbox() {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    const open = (e: Event) => setSvg((e as CustomEvent).detail);
    window.addEventListener('open-lightbox', open);
    return () => window.removeEventListener('open-lightbox', open);
  }, []);

  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setSvg(null); };
    if (svg) document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [svg]);

  if (!svg) return null;
  return (
    <div className={styles.overlay} onClick={() => setSvg(null)}>
      <button className={styles.close} onClick={() => setSvg(null)}>✕</button>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div dangerouslySetInnerHTML={{ __html: svg }} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}
