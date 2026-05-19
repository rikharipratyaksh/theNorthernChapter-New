import styles from './Experience.module.css';

const items = [
  {
    num: '01',
    title: 'The weight of your week lifts.',
    body: 'There is no programme. No checkout experience. Just the slow realisation, usually by the second morning, that your shoulders have dropped.',
  },
  {
    num: '02',
    title: 'Dawn here arrives differently.',
    body: 'The Nanda Devi range fills your window before you have found words for the day. Most guests stop looking for their phones. Some forget they have them.',
  },
  {
    num: '03',
    title: 'Food cooked the way it used to be.',
    body: 'Kumaoni meals from a chulha. Aloo ke gutke, bhatt ki churkani, rotis with the smell of smoke. Nothing on a menu. Everything on the table.',
  },
  {
    num: '04',
    title: 'The forest has its own rhythm.',
    body: 'Oak and rhododendron trails begin at the door. We will not give you a map. You will not need one. The forest asks only that you go slowly.',
  },
  {
    num: '05',
    title: 'Evenings around a real fire.',
    body: 'Conversations happen here that wouldn\'t happen anywhere else. Or nothing happens, and that feels right too.',
  },
  {
    num: '06',
    title: 'Three spaces. No more.',
    body: 'Frozen Woods hosts a maximum of six people at a time. This is not a limitation. It is the point. You will not share this silence with strangers.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="eyebrow reveal" style={{ color: 'var(--gold)', justifyContent: 'flex-start' }}>
            What You Will Experience
          </div>
          <h2 className={`${styles.h2} reveal`}>
            Not amenities.<br /><em>Feelings.</em>
          </h2>
          <p className={`${styles.subhead} reveal`} style={{ transitionDelay: '0.1s' }}>
            If you are here to tick places off a list,<br />
            you may feel restless here.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div
              key={item.num}
              className={`${styles.card} feature-card reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className={styles.num}>{item.num}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
