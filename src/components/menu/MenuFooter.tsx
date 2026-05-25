import styles from './Menu.module.css';

export default function MenuFooter() {
  return (
    <footer className={styles.menuFooter}>
      <p className={styles.footerBrand}>Frozen Woods by The Northern Chapter</p>
      <p className={styles.footerNote}>
        Prices are exclusive of taxes.<br />
        We do not levy any service charge.<br />
        Food takes time here. That is intentional.
      </p>
      <p className={styles.footerMeta}>Mukteshwar · Uttarakhand · 2,286m</p>
    </footer>
  );
}
