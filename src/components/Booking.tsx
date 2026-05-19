'use client';
import { useState } from 'react';
import styles from './Booking.module.css';

export default function Booking() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1400);
  };

  return (
    <section id="booking" className={styles.section}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className="eyebrow reveal">Request a Stay</div>
          <h2 className={`${styles.h2} reveal`}>
            We host<br /><em>selectively.</em>
          </h2>
          <p className={`${styles.body} reveal`} style={{ transitionDelay: '0.1s' }}>
            Frozen Woods is not a hotel. We do not have a front desk or a confirmation email with a booking reference.
            We have a conversation.
          </p>
          <p className={`${styles.body} reveal`} style={{ transitionDelay: '0.18s' }}>
            Tell us when you would like to come, and — if you feel like it — why.
            We will write back within a day.
          </p>

          <div className={`${styles.contact} reveal`} style={{ transitionDelay: '0.26s' }}>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Write to us</span>
              <span className={styles.contactVal}>hello@northernchapter.in</span>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Or call</span>
              <span className={styles.contactVal}>+91 98765 43210</span>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Find us</span>
              <span className={styles.contactVal}>Near Chauli Ki Jali, Mukteshwar — 263132</span>
            </div>
          </div>

          {/* <div className={`${styles.pricing} reveal`} style={{ transitionDelay: '0.34s' }}>
            <span className={styles.pricingLabel}>From</span>
            <span className={styles.pricingVal}>₹3,500</span>
            <span className={styles.pricingNote}>per night · includes all meals</span>
          </div> */}
        </div>

        {/* Right — form */}
        <div className={`${styles.right} reveal-right`}>
          {sent ? (
            <div className={styles.success}>
              <p className={styles.successIcon}>◆</p>
              <p className={styles.successTitle}>We've received your note.</p>
              <p className={styles.successBody}>
                We'll write back within 24 hours. No automated responses — an actual person will reach out.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Your name</label>
                  <input type="text" placeholder="—" required />
                </div>
                <div className={styles.group}>
                  <label>Email or phone</label>
                  <input type="text" placeholder="—" required />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Arriving</label>
                  <input type="date" required />
                </div>
                <div className={styles.group}>
                  <label>Leaving</label>
                  <input type="date" required />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>People staying with us</label>
                  <select>
                    <option>Just me</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5–6 people</option>
                  </select>
                </div>
                <div className={styles.group}>
                  <label>Space preference</label>
                  <select>
                    <option>The Oak Space</option>
                    <option>The Pine Space</option>
                    <option>The Valley Space</option>
                    <option>No preference</option>
                  </select>
                </div>
              </div>
              <div className={styles.group}>
                <label>Why are you coming? <span className={styles.optional}>(optional, but we love to know)</span></label>
                <textarea rows={3} placeholder="No right answer." />
              </div>
              <button type="submit" className={styles.submit} disabled={sending}>
                {sending ? 'Sending...' : 'Send Enquiry →'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
