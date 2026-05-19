import styles from './Voices.module.css';

const voices = [
  {
    quote: 'I came to write. I wrote nothing. I left clearer than I have been in years.',
    name: 'Priya R.',
    detail: 'Stayed 4 nights · came alone',
  },
  {
    quote: 'We stopped talking about work after the first morning. That has never happened anywhere else.',
    name: 'Rohan & Meera',
    detail: 'Stayed 3 nights · Oak Space',
  },
  {
    quote: 'I don\'t know how to describe what changed. But something did.',
    name: 'Vikram M.',
    detail: 'Stayed 5 nights · returned twice',
  },
];

export default function Voices() {
  return (
    <section id="voices" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="eyebrow reveal" style={{ color: 'var(--gold)', justifyContent: 'center' }}>
            From our guests
          </div>
          <h2 className={`${styles.h2} reveal`}>
            They describe it<br /><em>better than we can.</em>
          </h2>
        </div>
        <div className={styles.grid}>
          {voices.map((v, i) => (
            <div key={v.name} className={`${styles.card} voice-card reveal`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <span className={styles.openQuote}>&ldquo;</span>
              <p className={styles.quote}>{v.quote}</p>
              <div className={styles.author}>
                <span className={styles.name}>{v.name}</span>
                <span className={styles.detail}>{v.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
