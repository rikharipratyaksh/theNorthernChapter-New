'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Menu.module.css';

export default function MenuHero() {
  const bgRef    = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const dayRef   = useRef<HTMLDivElement>(null);
  const moonRef  = useRef<HTMLDivElement>(null);
  const [isDay, setIsDay] = useState(false);

  // Mirror theme from <html data-theme>
  useEffect(() => {
    const read = () => setIsDay(document.documentElement.getAttribute('data-theme') !== 'night');
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  // Stars
  useEffect(() => {
    const sc = starsRef.current;
    if (!sc || sc.children.length) return;
    for (let i = 0; i < 130; i++) {
      const s = document.createElement('div');
      s.className = styles.star;
      const sz = Math.random() * 2 + 0.4;
      s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*78}%;left:${Math.random()*100}%;--d:${2+Math.random()*5}s;--dl:${Math.random()*6}s;--op:${(0.1+Math.random()*0.6).toFixed(2)}`;
      sc.appendChild(s);
    }
  }, []);

  // Shooting stars
  useEffect(() => {
    const fire = () => {
      if (document.documentElement.getAttribute('data-theme') === 'night') {
        const sc = starsRef.current;
        if (!sc) return;
        const el = document.createElement('div');
        el.className = styles.shootingStar;
        el.style.cssText = `top:${5+Math.random()*35}%;left:${Math.random()*55}%`;
        sc.appendChild(el);
        setTimeout(() => el.remove(), 2200);
      }
    };
    let t: ReturnType<typeof setTimeout>;
    const schedule = () => { t = setTimeout(() => { fire(); schedule(); }, 5000 + Math.random() * 12000); };
    schedule();
    return () => clearTimeout(t);
  }, []);

  // Birds
  useEffect(() => {
    const dl = dayRef.current;
    if (!dl || dl.querySelector(`.${styles.bird}`)) return;
    [
      { y: 20, dur: 30, size: 1.0, delay: 0 },
      { y: 28, dur: 42, size: 0.7, delay: 6 },
      { y: 16, dur: 52, size: 0.85, delay: 14 },
      { y: 36, dur: 35, size: 0.6, delay: 22 },
    ].forEach(b => {
      const el = document.createElement('div');
      el.className = styles.bird;
      el.style.cssText = `top:${b.y}%;left:-10%;animation-duration:${b.dur}s;animation-delay:${b.delay}s;transform:scale(${b.size})`;
      dl.appendChild(el);
    });
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const fn = () => {
      const sy = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${sy * 0.45}px)`;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Live clock
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      const h = new Date().getHours().toString().padStart(2, '0');
      const m = new Date().getMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    update();
    const iv = setInterval(update, 30000);
    return () => clearInterval(iv);
  }, []);

  const scrollToNav = () => document.getElementById('menu-nav')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.hero}>
      <div ref={bgRef} className={styles.heroBg} />

      {/* Night */}
      <div ref={starsRef} className={styles.starsLayer} style={{ opacity: isDay ? 0 : 1 }} />
      <div ref={moonRef} className={styles.moonWrap} style={{ opacity: isDay ? 0 : 1 }}>
        <div className={styles.moonCore} />
        <div className={styles.moonGlow} />
      </div>

      {/* Day */}
      <div ref={dayRef} className={styles.dayLayer} style={{ opacity: isDay ? 1 : 0 }}>
        <div className={styles.sunWrap}>
          <div className={styles.sunCore} />
          <div className={styles.sunHalo} />
        </div>
        <div className={`${styles.cloud} ${styles.cloud1}`} />
        <div className={`${styles.cloud} ${styles.cloud2}`} />
        <div className={`${styles.cloud} ${styles.cloud3}`} />
      </div>

      {/* Mountains */}
      <div className={styles.mountainLayer}>
        <svg viewBox="0 0 390 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:'block', width:'100%' }}>
          <path d="M0,90 L0,65 L55,38 L110,58 L165,22 L220,52 L270,18 L325,48 L375,30 L390,42 L390,90Z" fill="var(--deep)" style={{ transition: 'fill 2.5s ease' }}/>
        </svg>
      </div>

      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Frozen Woods · The Northern Chapter</p>
        <h1 className={styles.heroTitle}>
          The<br /><em>Table</em>
        </h1>
        <p className={styles.heroSubtitle}>
          {isDay
            ? <>A quiet meal at altitude.<br />Take your time.</>
            : <>Dine under open skies.<br />The night is clear tonight.</>
          }
        </p>
        <div className={styles.heroMeta}>
          <span>Mukteshwar</span>
          <span className={styles.heroMetaDot} />
          <span>À la Carte</span>
          {time && <><span className={styles.heroMetaDot} /><span>{time}</span></>}
        </div>
      </div>

      <button onClick={scrollToNav} className={styles.scrollCue} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Explore</span>
      </button>
    </section>
  );
}
