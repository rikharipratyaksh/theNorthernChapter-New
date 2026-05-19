import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.brandLabel}>The Northern Chapter</p>
          <p className={styles.brandSub}>A collection of mountain homes built for stillness.</p>
          <p className={styles.brandProperty}>Frozen Woods · Mukteshwar, Uttarakhand 263132</p>
        </div>
        <div className={styles.cols}>
          <div className={styles.col}>
            <h4>Navigate</h4>
            <ul>
              <li><a href="#story">The Space</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#booking">Request a Stay</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Reach us</h4>
            <ul>
              <li>hello@northernchapter.in</li>
              <li>+91 98765 43210</li>
              <li>Near Chauli Ki Jali</li>
              <li>Mukteshwar 263132</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} The Northern Chapter. All rights reserved.</p>
        <p className={styles.made}>Built with intention.</p>
      </div>
    </footer>
  );
}
