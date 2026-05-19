'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Numbers.module.css';

const stats = [
  { val: 2286, suffix: 'm', label: 'Above sea level' },
  { val: 3,    suffix: '',  label: 'Spaces. No more.' },
  { val: 6,    suffix: '+', label: 'Years of stillness' },
  { val: 500,  suffix: '+', label: 'Guests who returned' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800, step = target / (dur / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur = Math.min(cur + step, target);
          setCount(Math.round(cur));
          if (cur >= target) clearInterval(t);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Numbers() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <div key={s.label} className={`${styles.item} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className={styles.val}>
              <Counter target={s.val} suffix={s.suffix} />
            </span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
