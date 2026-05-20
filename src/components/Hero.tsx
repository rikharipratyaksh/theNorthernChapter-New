'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const bgRef      = useRef<HTMLDivElement>(null);
  const starsRef   = useRef<HTMLDivElement>(null);
  const dayRef     = useRef<HTMLDivElement>(null);
  const m1         = useRef<HTMLDivElement>(null);
  const m2         = useRef<HTMLDivElement>(null);
  const m3         = useRef<HTMLDivElement>(null);
  const treesRef   = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDay, setIsDay]   = useState(false);
  const [mounted, setMounted] = useState(false);

  // Detect theme from document attribute
  const readTheme = () => {
    const t = document.documentElement.getAttribute('data-theme');
    return t !== 'night'; // parchment | mist | nordic = day sky
  };

  useEffect(() => {
    setIsDay(readTheme());
    setMounted(true);

    const obs = new MutationObserver(() => setIsDay(readTheme()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  // Stars — night only
  useEffect(() => {
    const sc = starsRef.current;
    if (!sc || sc.children.length > 0) return;
    for (let i = 0; i < 150; i++) {
      const s = document.createElement('div');
      s.className = styles.star;
      const sz = Math.random() * 2 + 0.4;
      s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*78}%;left:${Math.random()*100}%;--d:${2+Math.random()*5}s;--dl:${Math.random()*6}s;--op:${(0.1+Math.random()*0.65).toFixed(2)}`;
      sc.appendChild(s);
    }
  }, []);

  // Shooting stars — night
  useEffect(() => {
    if (!mounted) return;
    const fire = () => {
      if (readTheme()) return;
      const sc = starsRef.current;
      if (!sc) return;
      const shoot = document.createElement('div');
      shoot.className = styles.shootingStar;
      shoot.style.cssText = `top:${5+Math.random()*35}%;left:${Math.random()*60}%;animation-delay:0s;`;
      sc.appendChild(shoot);
      setTimeout(() => shoot.remove(), 2200);
    };
    const schedule = () => {
      const delay = 4000 + Math.random() * 10000;
      return setTimeout(() => { fire(); timer = schedule(); }, delay);
    };
    let timer = schedule();
    return () => clearTimeout(timer);
  }, [mounted]);

  // Birds — day only
  useEffect(() => {
    if (!mounted) return;
    const dc = dayRef.current;
    if (!dc) return;
    const birds = [
      { startX: -60, y: 22, dur: 28, size: 1.0 },
      { startX: -40, y: 30, dur: 36, size: 0.7 },
      { startX: -80, y: 18, dur: 44, size: 0.85 },
      { startX: -20, y: 38, dur: 32, size: 0.6 },
      { startX: -100, y: 25, dur: 52, size: 0.75 },
    ];
    birds.forEach((b, i) => {
      const el = document.createElement('div');
      el.className = styles.bird;
      el.style.cssText = `top:${b.y}%;left:${b.startX}%;animation-duration:${b.dur}s;animation-delay:${i * 4}s;transform:scale(${b.size})`;
      dc.appendChild(el);
    });
    return () => { if (dc) dc.innerHTML = ''; };
  }, [mounted]);

  // Parallax scroll
  useEffect(() => {
    const fn = () => {
      const sy = window.scrollY;
      if (bgRef.current)     bgRef.current.style.transform     = `translateY(${sy * 0.55}px)`;
      if (starsRef.current)  starsRef.current.style.transform  = `translateY(${sy * 0.25}px)`;
      if (dayRef.current)    dayRef.current.style.transform    = `translateY(${sy * 0.2}px)`;
      if (m1.current)        m1.current.style.transform        = `translateY(${sy * 0.1}px)`;
      if (m2.current)        m2.current.style.transform        = `translateY(${sy * 0.22}px)`;
      if (m3.current)        m3.current.style.transform        = `translateY(${sy * 0.38}px)`;
      if (treesRef.current)  treesRef.current.style.transform  = `translateY(${sy * 0.46}px)`;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${sy * 0.3}px)`;
        contentRef.current.style.opacity   = String(Math.max(0, 1 - sy / 520));
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className={styles.hero}>
      {/* Sky gradient BG */}
      <div ref={bgRef} className={`${styles.bg} ${isDay ? styles.bgDay : styles.bgNight}`} />

      {/* NIGHT — Stars layer */}
      <div
        ref={starsRef}
        className={styles.starsLayer}
        style={{ opacity: isDay ? 0 : 1, transition: 'opacity 2.5s ease' }}
      />

      {/* NIGHT — Moon */}
      <div
        className={styles.moonWrap}
        style={{ opacity: isDay ? 0 : 1, transition: 'opacity 2.5s ease' }}
      >
        <div className={styles.moon} />
        <div className={styles.moonGlow} />
      </div>

      {/* DAY — Container for sun + clouds + birds */}
      <div
        ref={dayRef}
        className={styles.dayLayer}
        style={{ opacity: isDay ? 1 : 0, transition: 'opacity 2.5s ease' }}
      >
        {/* Sun */}
        <div className={styles.sun}>
          <div className={styles.sunCore} />
          <div className={styles.sunHalo} />
          <div className={styles.sunHalo2} />
        </div>
        {/* Clouds */}
        <div className={`${styles.cloud} ${styles.cloud1}`} />
        <div className={`${styles.cloud} ${styles.cloud2}`} />
        <div className={`${styles.cloud} ${styles.cloud3}`} />
        {/* Birds injected by JS */}
      </div>

      {/* Mountain layer — far */}
      <div ref={m1} className={`${styles.layer} ${styles.layerFar}`}>
        <svg viewBox="0 0 1440 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:'block', width:'100%' }}>
          <path
            d="M0,280 L0,190 L80,130 L200,170 L340,70 L500,155 L660,30 L820,120 L960,55 L1120,130 L1280,60 L1440,130 L1440,280Z"
            fill={isDay ? 'var(--sage)' : '#2A3D28'}
            opacity={isDay ? '0.35' : '0.3'}
            style={{ transition: 'fill 2.5s ease, opacity 2.5s ease' }}
          />
        </svg>
      </div>

      {/* Mountain layer — mid */}
      <div ref={m2} className={`${styles.layer} ${styles.layerMid}`}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:'block', width:'100%' }}>
          <path
            d="M0,320 L0,240 L120,160 L260,210 L400,110 L560,190 L700,70 L860,150 L1000,85 L1140,170 L1280,95 L1440,150 L1440,320Z"
            fill={isDay ? 'var(--pine)' : '#1C2A1A'}
            opacity={isDay ? '0.55' : '0.7'}
            style={{ transition: 'fill 2.5s ease, opacity 2.5s ease' }}
          />
          {/* Snow caps */}
          <polygon points="400,110 430,82 460,110"  fill={isDay ? '#F0EEEA' : '#D4D4CC'} opacity={isDay ? '0.5' : '0.18'} style={{ transition: 'fill 2.5s ease' }}/>
          <polygon points="700,70 738,36 776,70"    fill={isDay ? '#F0EEEA' : '#D4D4CC'} opacity={isDay ? '0.55' : '0.22'} style={{ transition: 'fill 2.5s ease' }}/>
          <polygon points="1000,85 1032,54 1064,85" fill={isDay ? '#F0EEEA' : '#D4D4CC'} opacity={isDay ? '0.5' : '0.18'} style={{ transition: 'fill 2.5s ease' }}/>
        </svg>
      </div>

      {/* Trees */}
      <div ref={treesRef} className={styles.trees}>
        <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:'block', width:'100%' }}>
          <g fill={isDay ? 'var(--pine-deep)' : '#0D130C'} style={{ transition: 'fill 2.5s ease' }}>
            {[[40,200,62,108,84],[28,200,62,82,96],[160,200,180,118,200],[148,200,182,88,216],
              [300,200,320,104,340],[288,200,322,76,356],[460,200,480,96,500],[448,200,482,68,516],[474,200,484,52,494],
              [600,200,622,112,644],[640,200,660,100,680],[780,200,800,90,820],[768,200,802,62,836],
              [920,200,942,108,964],[908,200,944,80,980],[1060,200,1080,95,1100],[1048,200,1082,66,1116],
              [1200,200,1220,100,1240],[1188,200,1222,72,1256],[1320,200,1342,108,1364],[1308,200,1344,80,1380],
            ].map(([x1,y1,tx,ty,x2], i) => (
              <polygon key={i} points={`${x1},${y1} ${tx},${ty} ${x2},${y1}`} />
            ))}
          </g>
        </svg>
      </div>

      {/* Near ground */}
      <div ref={m3} className={`${styles.layer} ${styles.layerNear}`}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:'block', width:'100%' }}>
          <path
            d="M0,80 L0,50 L180,35 L380,52 L560,28 L760,48 L960,32 L1160,50 L1440,38 L1440,80Z"
            fill="var(--deep)"
            style={{ transition: 'fill 2.5s ease' }}
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div ref={contentRef} className={styles.content}>
        <p className={styles.prelude}>The Northern Chapter</p>
        <h1 className={styles.title}>
          Frozen<br /><em>Woods</em>
        </h1>
        <p className={styles.tagline}>
          {isDay
            ? <>The valley below is still.<br />Breakfast is on the table.</>
            : <>Not everyone understands<br />this kind of silence.</>
          }
        </p>
        <div className={styles.meta}>
          <span>Mukteshwar</span>
          <span className={styles.metaDot} />
          <span>2,286 m</span>
          <span className={styles.metaDot} />
          <span>Uttarakhand</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => go('#booking')}>
            Request a Stay
          </button>
          <button className={styles.btnGhost} onClick={() => go('#story')}>
            Learn more
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
