'use client';
import { useEffect, useRef } from 'react';
import styles from './Story.module.css';

export default function Story() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      if (stackRef.current)
        stackRef.current.style.transform = `perspective(1200px) rotateY(${cx * 5}deg) rotateX(${-cy * 3.5}deg)`;
    };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <section id="story" className={styles.section}>
      <div className={styles.inner}>

        {/* Left — copy */}
        <div className={styles.left}>
          <div className={`eyebrow reveal`}>The Space</div>

          <h2 className={`${styles.h2} reveal`}>
            Frozen Woods<br />
            <em>was built on a question.</em>
          </h2>

          <p className={`${styles.body} reveal`} style={{ transitionDelay: '0.1s' }}>
            What if a place asked nothing of you?<br/>
            No itinerary. No curated experiences. No pressure to feel something by sunset.
          </p>

          <p className={`${styles.body} reveal`} style={{ transitionDelay: '0.18s' }}>
            The Northern Chapter is a collection of mountain homes built for a specific kind of person —
            someone who understands that stillness is not empty. That silence has texture.
            That the best mornings are the ones where nothing happens, and everything does.
          </p>

          <p className={`${styles.body} reveal`} style={{ transitionDelay: '0.26s' }}>
            Frozen Woods is where we began. A single home in the oak forests above Mukteshwar,
            at 2,286 metres, where the Nanda Devi range fills the window and time moves differently.
          </p>

          <div className={`${styles.notForWrap} reveal`} style={{ transitionDelay: '0.34s' }}>
            <span className={styles.notForLabel}>This may not be for you if —</span>
            <ul className={styles.notForList}>
              <li>you need a packed itinerary to feel like you travelled well</li>
              <li>silence makes you restless</li>
              <li>you're comparing options side by side</li>
            </ul>
          </div>
        </div>

        {/* Right — illustration */}
        <div className={`${styles.right} reveal-right`}>
          <div ref={stackRef} className={styles.stack}>
            <div className={styles.card1}>
              <svg viewBox="0 0 360 440" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
                <defs>
                  <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#060A06"/>
                    <stop offset="100%" stopColor="#141C13"/>
                  </linearGradient>
                </defs>
                <rect width="360" height="440" fill="url(#sg1)"/>
                {/* Moon */}
                <circle cx="290" cy="72" r="30" fill="#EAE8E0" opacity="0.12"/>
                <circle cx="290" cy="72" r="22" fill="#D4D4CC" opacity="0.18"/>
                {/* Stars */}
                {[[40,38],[90,22],[150,48],[200,30],[60,88],[260,50],[320,35],[110,65]].map(([x,y],i) => (
                  <circle key={i} cx={x} cy={y} r="1.2" fill="#EAE8E0" opacity={0.3+i*0.05}/>
                ))}
                {/* Mountains */}
                <polygon points="0,240 90,120 180,240" fill="#1A2818" opacity="0.6"/>
                <polygon points="120,240 240,90 360,200 360,240" fill="#1C2A1A" opacity="0.7"/>
                <polygon points="240,90 275,55 310,90" fill="#C4C4BC" opacity="0.15"/>
                {/* Trees */}
                <polygon points="20,440 44,345 68,440" fill="#0D130C"/>
                <polygon points="10,440 44,318 78,440" fill="#0D130C"/>
                <polygon points="90,440 112,352 134,440" fill="#0D130C"/>
                <polygon points="78,440 112,328 146,440" fill="#0D130C"/>
                <polygon points="220,440 244,340 268,440" fill="#0D130C"/>
                <polygon points="208,440 244,312 280,440" fill="#0D130C"/>
                <polygon points="290,440 314,348 338,440" fill="#0D130C"/>
                <polygon points="278,440 314,320 350,440" fill="#0D130C"/>
                {/* Warm window */}
                <ellipse cx="176" cy="400" rx="50" ry="16" fill="#C4A96B" opacity="0.08"/>
                <rect x="152" y="374" width="48" height="50" fill="#1C1C18"/>
                <rect x="160" y="380" width="16" height="22" fill="#C4A96B" opacity="0.6"/>
                <rect x="180" y="380" width="16" height="22" fill="#C4A96B" opacity="0.45"/>
                <polygon points="144,374 176,342 208,374" fill="#252520"/>
              </svg>
            </div>

            <div className={styles.card2}>
              <svg viewBox="0 0 260 300" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
                <defs>
                  <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3A5A70"/>
                    <stop offset="60%" stopColor="#C4A96B" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#EAE8E0" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                <rect width="260" height="300" fill="url(#sg2)"/>
                {/* Dawn sun */}
                <circle cx="130" cy="230" r="65" fill="#EAE8E0" opacity="0.2"/>
                <circle cx="130" cy="230" r="40" fill="#C4A96B" opacity="0.35"/>
                {/* Ridgeline */}
                <polygon points="0,300 0,195 50,140 110,185 160,115 220,160 260,135 260,300" fill="#0D0D0B" opacity="0.85"/>
                {/* Snow */}
                <polygon points="160,115 180,88 200,115" fill="#D4D4CC" opacity="0.6"/>
                {/* Cloud wisps */}
                <ellipse cx="55" cy="88" rx="42" ry="14" fill="white" opacity="0.1"/>
                <ellipse cx="200" cy="65" rx="34" ry="11" fill="white" opacity="0.08"/>
              </svg>
            </div>

            <div className={styles.badge}>
              <span className={styles.badgeYear}>Est. 2019</span>
              <span className={styles.badgeName}>Frozen Woods</span>
              <span className={styles.badgeTnc}>by TNC</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
