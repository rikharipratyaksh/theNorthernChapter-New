import styles from './Expansion.module.css';

export default function Expansion() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>The Collection</div>
        <h2 className={`${styles.h2} reveal`}>
          Frozen Woods is<br /><em>the first chapter.</em>
        </h2>
        <p className={`${styles.body} reveal`} style={{ transitionDelay: '0.1s' }}>
          The Northern Chapter is being built slowly, deliberately — one space at a time.
          Each future home will carry its own name, its own character, its own silence.
          All will share the same intention.
        </p>
        <p className={`${styles.body} reveal`} style={{ transitionDelay: '0.18s', fontStyle: 'italic', color: 'var(--slate)' }}>
          More spaces will follow, quietly.
        </p>
        <div className={`${styles.chapterRow} reveal`} style={{ transitionDelay: '0.26s' }}>
          <div className={styles.chapter}>
            <span className={styles.chapterNum}>01</span>
            <span className={styles.chapterName}>Frozen Woods</span>
            <span className={styles.chapterLoc}>Mukteshwar · Open</span>
          </div>
          <div className={styles.chapter + ' ' + styles.chapterFuture}>
            <span className={styles.chapterNum}>02</span>
            <span className={styles.chapterName}>—</span>
            <span className={styles.chapterLoc}>In the making</span>
          </div>
          <div className={styles.chapter + ' ' + styles.chapterFuture}>
            <span className={styles.chapterNum}>03</span>
            <span className={styles.chapterName}>—</span>
            <span className={styles.chapterLoc}>Coming quietly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
