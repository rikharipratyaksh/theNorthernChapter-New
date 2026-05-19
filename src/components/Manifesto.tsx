import styles from './Manifesto.module.css';

const items = [
  'A philosophy, not a property',
  'Built for stillness',
  'Mukteshwar · 2,286m',
  'The first chapter',
  'Silence is the offering',
  'For those who have outgrown noise',
  'An intentional collection in the making',
  'Frozen Woods',
];

export default function Manifesto() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.mark}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
