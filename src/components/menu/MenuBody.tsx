import { MENU_SECTIONS, MenuItem, VariantItem, Subsection } from '@/lib/menuData';
import styles from './Menu.module.css';

// ─── Item card ─────────────────────────────────────────────
function ItemCard({ item }: { item: MenuItem }) {
  return (
    <div className={`${styles.itemCard} reveal`}>
      <div className={styles.itemBody}>
        <p className={styles.itemName}>
          {item.name}
          {item.note && <span className={styles.itemNote}>{item.note}</span>}
        </p>
        {item.desc && <p className={styles.itemDesc}>{item.desc}</p>}
        {item.tags && item.tags.length > 0 && (
          <div className={styles.itemTags}>
            {item.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        )}
      </div>
      <span className={styles.itemPrice}>₹{item.price}/-</span>
    </div>
  );
}

// ─── Variant item (pizza / pasta / non-veg curry) ──────────
function VariantItemCard({ item }: { item: VariantItem }) {
  return (
    <div className={`${styles.itemCardVariant} reveal`}>
      <div className={styles.itemBody}>
        <p className={styles.itemName}>{item.name}</p>
      </div>
      <div className={styles.variantPrices}>
        {item.prices.map((p, i) => (
          <span key={i} className={styles.variantPrice}>
            {typeof p === 'number' ? `₹${p}` : p}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Subsection ────────────────────────────────────────────
function SubsectionBlock({ sub }: { sub: Subsection }) {
  const isVariant = !!sub.variant;

  return (
    <>
      {sub.label && (
        isVariant ? null : // label shown in variant header instead
        <div className={styles.subsectionLabel}>{sub.label}</div>
      )}

      {isVariant && sub.variant && (
        <>
          {sub.label && <div className={styles.subsectionLabel}>{sub.label}</div>}
          <div className={styles.variantHeader}>
            <span className={styles.variantHeaderName} />
            <div className={styles.variantHeaderPrices}>
              {sub.variant.cols.map(col => (
                <span key={col} className={styles.variantHeaderPrice}>{col}</span>
              ))}
            </div>
          </div>
          {(sub.items as VariantItem[]).map((item, i) => (
            <VariantItemCard key={i} item={item} />
          ))}
        </>
      )}

      {!isVariant && (sub.items as MenuItem[]).map((item, i) => (
        <ItemCard key={i} item={item} />
      ))}
    </>
  );
}

// ─── Section title helper ──────────────────────────────────
function SectionTitle({ title }: { title: string }) {
  const words = title.trim().split(' ');
  if (words.length === 1) {
    return <h2 className={styles.sectionTitle}><em>{title}</em></h2>;
  }
  const last = words[words.length - 1];
  const rest = words.slice(0, -1).join(' ');
  return (
    <h2 className={styles.sectionTitle}>
      {rest} <em>{last}</em>
    </h2>
  );
}

// ─── Buffet section ────────────────────────────────────────
function BuffetSection({ section }: { section: (typeof MENU_SECTIONS)[0] }) {
  return (
    <section className={styles.menuSection} id={section.id}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionEyebrow}>{section.eyebrow}</span>
        <SectionTitle title={section.title} />
      </div>
      <div className={styles.sectionDivider}>
        <span className={styles.sectionDividerMark}>◆</span>
      </div>

      {section.buffets?.map((b, i) => (
        <div key={i} className={`${styles.buffetBlock} reveal`}>
          <p className={styles.buffetTitle}>{b.title}</p>
          <p className={styles.buffetIncludes}>{b.includes}</p>
          <div className={styles.buffetPricing}>
            {b.prices.map((p, j) => (
              <div key={j}>
                <span className={styles.buffetPriceLabel}>{p.label}</span>
                <span className={styles.buffetPriceVal}>{p.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {section.timings && (
        <div className={`${styles.timingsGrid} reveal`}>
          {section.timings.map((t, i) => (
            <div key={i} className={styles.timingCell}>
              <span className={styles.timingMeal}>{t.meal}</span>
              <span className={styles.timingHours}>{t.hours}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// ─── MenuBody ──────────────────────────────────────────────
export default function MenuBody() {
  return (
    <main className={styles.menuBody}>
      {MENU_SECTIONS.map(section => {
        if (section.type === 'buffet') {
          return <BuffetSection key={section.id} section={section} />;
        }

        return (
          <section key={section.id} className={styles.menuSection} id={section.id}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>{section.eyebrow}</span>
              <SectionTitle title={section.title} />
              {section.note && <p className={styles.sectionNote}>{section.note}</p>}
            </div>
            <div className={styles.sectionDivider}>
              <span className={styles.sectionDividerMark}>◆</span>
            </div>

            {section.subsections?.map((sub, i) => (
              <SubsectionBlock key={i} sub={sub} />
            ))}
          </section>
        );
      })}
    </main>
  );
}
