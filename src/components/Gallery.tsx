'use client';
import { useEffect, useId } from 'react';
import styles from './Gallery.module.css';

type Scene = { label: string; type: string; c: [string, string, string] };

const scenes: Scene[] = [
  { label: 'Before dawn', type: 'dawn',   c: ['#3A5A70','#5A7A90','#EAE8E0'] },
  { label: 'The Oak Space', type: 'room',  c: ['#1C1C18','#2A2A24','#C4A96B'] },
  { label: 'Forest floor', type: 'forest', c: ['#1A2818','#2A3D28','#4A5E48'] },
  { label: 'Fireplace',    type: 'fire',   c: ['#C4A96B','#8A7245','#141410'] },
  { label: 'The ridge',    type: 'valley', c: ['#1A2818','#5A7A90','#EAE8E0'] },
  { label: 'Morning meal', type: 'food',   c: ['#EAE8E0','#C4A96B','#5C3A1E'] },
  { label: 'Clear night',  type: 'night',  c: ['#060A06','#0D130C','#1A2818'] },
  { label: 'Reading hour', type: 'nook',   c: ['#1C1C18','#2A2A24','#8A7245'] },
];

function seed(n: number) {
  let s = (n * 16807 + 1) % 2147483647;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

function buildSVG(sc: Scene, w: number, h: number, uid: string): string {
  const c = sc.c;
  const r = seed(w * 3 + h + c[0].charCodeAt(1));
  if (sc.type === 'dawn') return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="dg${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${c[0]}"/><stop offset="100%" stop-color="${c[2]}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#dg${uid})"/><circle cx="${w/2}" cy="${h}" r="${h*.65}" fill="${c[2]}" opacity=".18"/><circle cx="${w/2}" cy="${h}" r="${h*.35}" fill="${c[2]}" opacity=".28"/><polygon points="0,${h} ${w*.22},${h*.42} ${w*.5},${h}" fill="#0D0D0B" opacity=".75"/><polygon points="${w*.3},${h} ${w*.62},${h*.35} ${w*.88},${h}" fill="#0D0D0B" opacity=".82"/><ellipse cx="${w*.18}" cy="${h*.28}" rx="44" ry="14" fill="white" opacity=".08"/></svg>`;
  if (sc.type === 'forest') { const trees=[0,1,2,3,4,5,6,7].map(i=>`<polygon points="${i*w/7},${h} ${i*w/7+w/14},${h*.22+i%3*18} ${i*w/7+w/7},${h}" fill="${c[0]}" opacity="${(.55+i*.04).toFixed(2)}"/>`).join(''); return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="${c[0]}"/><rect x="0" y="${h*.6}" width="${w}" height="${h*.4}" fill="${c[1]}" opacity=".3"/>${trees}<circle cx="${w*.62}" cy="${h*.22}" r="18" fill="#EAE8E0" opacity=".55"/></svg>`; }
  if (sc.type === 'room') return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="${c[0]}"/><rect x="${w*.08}" y="${h*.08}" width="${w*.84}" height="${h*.52}" rx="3" fill="${c[1]}" opacity=".7"/><rect x="${w*.18}" y="${h*.18}" width="${w*.26}" height="${h*.34}" fill="#EAE8E0" opacity=".12"/><rect x="${w*.56}" y="${h*.18}" width="${w*.26}" height="${h*.34}" fill="#EAE8E0" opacity=".12"/><rect x="${w*.32}" y="${h*.65}" width="${w*.36}" height="${h*.22}" rx="2" fill="${c[2]}" opacity=".4"/><ellipse cx="${w/2}" cy="${h*.78}" rx="${w*.28}" ry="${h*.07}" fill="${c[2]}" opacity=".18"/></svg>`;
  if (sc.type === 'fire') return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="${c[2]}"/><ellipse cx="${w/2}" cy="${h}" rx="${w*.52}" ry="${h*.5}" fill="${c[0]}" opacity=".35"/><ellipse cx="${w/2}" cy="${h*.88}" rx="${w*.14}" ry="${h*.28}" fill="#EAE8E0" opacity=".55"/><ellipse cx="${w*.44}" cy="${h*.83}" rx="${w*.08}" ry="${h*.22}" fill="#F5EDD8" opacity=".4"/><ellipse cx="${w*.57}" cy="${h*.86}" rx="${w*.06}" ry="${h*.16}" fill="${c[0]}" opacity=".75"/><rect x="${w*.28}" y="${h*.82}" width="${w*.44}" height="${h*.18}" rx="2" fill="${c[2]}"/></svg>`;
  if (sc.type === 'valley') return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="vg${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${c[1]}"/><stop offset="100%" stop-color="${c[2]}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#vg${uid})"/><polygon points="0,${h} ${w*.18},${h*.32} ${w*.48},${h*.52} ${w*.68},${h*.18} ${w},${h*.38} ${w},${h}" fill="${c[0]}" opacity=".85"/><polygon points="${w*.68},${h*.18} ${w*.78},${h*.04} ${w*.88},${h*.18}" fill="#D4D4CC" opacity=".5"/></svg>`;
  if (sc.type === 'night') { const stars=Array.from({length:55},(_,i)=>{const rr=seed(i*41+w); const x=Math.floor(rr()*w); const y=Math.floor(rr()*h*.72); const rad=(rr()*1.8+.4).toFixed(1); const op=(rr()*.55+.1).toFixed(2); return `<circle cx="${x}" cy="${y}" r="${rad}" fill="#EAE8E0" opacity="${op}"/>`;}).join(''); return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="${c[0]}"/>${stars}<polygon points="0,${h} ${w*.28},${h*.54} ${w*.58},${h}" fill="${c[1]}"/><polygon points="${w*.38},${h} ${w*.74},${h*.46} ${w},${h*.6} ${w},${h}" fill="${c[1]}"/><rect x="${w*.41}" y="${h*.8}" width="${w*.16}" height="${h*.2}" fill="#C4A96B" opacity=".55"/></svg>`; }
  if (sc.type === 'food') return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="${c[0]}"/><circle cx="${w/2}" cy="${h*.5}" r="${w*.32}" fill="${c[2]}" opacity=".6"/><circle cx="${w/2}" cy="${h*.5}" r="${w*.22}" fill="${c[1]}" opacity=".8"/><ellipse cx="${w*.28}" cy="${h*.7}" rx="${w*.11}" ry="${h*.055}" fill="${c[2]}" opacity=".5"/><ellipse cx="${w*.72}" cy="${h*.72}" rx="${w*.09}" ry="${h*.046}" fill="${c[2]}" opacity=".5"/></svg>`;
  const books=[0,1,2,3,4,5,6].map(i=>`<rect x="${w*.07+i*w*.12}" y="${h*.08}" width="${w*.08}" height="${h*.38}" rx="2" fill="${c[2]}" opacity="${(.3+i*.06).toFixed(2)}"/>`).join('');
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="${c[0]}"/><rect x="${w*.04}" y="${h*.04}" width="${w*.92}" height="${h*.52}" rx="3" fill="${c[1]}" opacity=".45"/>${books}<rect x="${w*.18}" y="${h*.62}" width="${w*.64}" height="${h*.28}" rx="4" fill="${c[1]}" opacity=".5"/></svg>`;
}

function GalleryItem({ scene, idx, uid }: { scene: Scene; idx: number; uid: string }) {
  const svg = buildSVG(scene, 320, 240, uid + idx);
  const openLightbox = () => {
    const ev = new CustomEvent('open-lightbox', { detail: buildSVG(scene, 800, 600, uid + idx + 'lb') });
    window.dispatchEvent(ev);
  };
  return (
    <div className={`${styles.item} gallery-item`} onClick={openLightbox}>
      <div dangerouslySetInnerHTML={{ __html: svg }} style={{ width: '100%', height: '100%', display: 'block' }} />
      <div className={styles.overlay}>
        <span className={styles.label}>{scene.label}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const uid = useId().replace(/:/g, '');
  const row1 = scenes;
  const row2 = [...scenes].reverse();

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <div className="eyebrow reveal">Through the lens</div>
        <h2 className={`${styles.h2} reveal`}>
          Frozen Woods<br /><em>in stills</em>
        </h2>
        <p className={`${styles.sub} reveal`} style={{ transitionDelay: '0.1s' }}>
          A place too quiet to describe accurately. These come close.
        </p>
      </div>

      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {[...row1, ...row1].map((s, i) => <GalleryItem key={i} scene={s} idx={i} uid={uid + 'r1'} />)}
        </div>
      </div>
      <div className={styles.trackWrap} style={{ marginTop: 12 }}>
        <div className={`${styles.track} ${styles.trackReverse}`}>
          {[...row2, ...row2].map((s, i) => <GalleryItem key={i} scene={s} idx={i} uid={uid + 'r2'} />)}
        </div>
      </div>
    </section>
  );
}
