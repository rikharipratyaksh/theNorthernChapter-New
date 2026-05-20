'use client';
import { useEffect, useState, useCallback } from 'react';

type Theme = 'parchment' | 'mist' | 'nordic' | 'night';

const LIGHT_THEMES: Theme[] = ['parchment', 'mist', 'nordic'];

const THEME_META: Record<Theme, { label: string; icon: string; swatch: string; desc: string }> = {
  parchment: { label: 'Alpine Parchment', icon: '𝐀', swatch: '#EDE8DC', desc: 'Warm · Literary' },
  mist:      { label: 'Morning Mist',     icon: '𝐌', swatch: '#E8ECEE', desc: 'Airy · Serene'  },
  nordic:    { label: 'Nordic Retreat',   icon: '𝐍', swatch: '#F0F0EE', desc: 'Cool · Minimal' },
  night:     { label: 'Deep Forest',      icon: '☽', swatch: '#141410', desc: 'Dark · Intimate' },
};

// Between 06:00 and 18:30 → parchment (day), else night
function getAutoTheme(): Theme {
  const mins = new Date().getHours() * 60 + new Date().getMinutes();
  return (mins >= 360 && mins < 1110) ? 'parchment' : 'night';
}

export default function ThemeController() {
  const [theme, setTheme]   = useState<Theme>('night');
  const [manual, setManual] = useState(false);
  const [open, setOpen]     = useState(false);
  const [mounted, setMounted] = useState(false);

  const apply = useCallback((t: Theme) => {
    document.documentElement.setAttribute('data-theme', t);
    setTheme(t);
  }, []);

  useEffect(() => {
    apply(getAutoTheme());
    setMounted(true);
    const iv = setInterval(() => { if (!manual) apply(getAutoTheme()); }, 60_000);
    return () => clearInterval(iv);
  }, [apply, manual]);

  const pick = (t: Theme) => { setManual(true); apply(t); setOpen(false); };

  const toggleNight = () => {
    setManual(true);
    pick(theme === 'night' ? 'parchment' : 'night');
  };

  if (!mounted) return null;

  const isNight = theme === 'night';

  return (
    <>
      {/* ── Panel ── */}
      <div style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 9000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 10,
      }}>

        {/* Theme swatches — slide up when open */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8,
          overflow: 'hidden',
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
          transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease',
          pointerEvents: open ? 'all' : 'none',
        }}>
          {(['parchment', 'mist', 'nordic', 'night'] as Theme[]).map(t => (
            <button
              key={t}
              onClick={() => pick(t)}
              title={THEME_META[t].desc}
              aria-label={`Switch to ${THEME_META[t].label}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 14px 8px 10px',
                borderRadius: 2,
                border: `1px solid ${theme === t ? 'var(--gold)' : 'var(--stone)'}`,
                background: theme === t
                  ? 'var(--surface)'
                  : 'color-mix(in srgb, var(--surface) 85%, transparent)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                cursor: 'none',
                transition: 'border-color 0.3s, background 0.3s, transform 0.2s',
                transform: theme === t ? 'translateX(-4px)' : 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(-4px)'; }}
              onMouseLeave={e => { if (theme !== t) e.currentTarget.style.transform = 'none'; }}
            >
              {/* Swatch circle */}
              <span style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: THEME_META[t].swatch,
                border: '1px solid var(--stone)',
                flexShrink: 0,
                boxShadow: theme === t ? `0 0 0 2px var(--gold)` : 'none',
                transition: 'box-shadow 0.3s',
              }} />
              {/* Label */}
              <span style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
              }}>
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: theme === t ? 'var(--gold)' : 'var(--ash)',
                  transition: 'color 0.3s',
                }}>
                  {THEME_META[t].label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontSize: '0.7rem',
                  color: 'var(--slate)',
                }}>
                  {THEME_META[t].desc}
                </span>
              </span>
              {/* Active dot */}
              {theme === t && (
                <span style={{
                  width: 4, height: 4,
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  marginLeft: 4,
                  flexShrink: 0,
                }} />
              )}
            </button>
          ))}
        </div>

        {/* ── Button row: palette toggle + day/night ── */}
        <div style={{ display: 'flex', gap: 8 }}>

          {/* Day / Night toggle */}
          <button
            onClick={toggleNight}
            aria-label={isNight ? 'Switch to day mode' : 'Switch to night mode'}
            style={btnBase}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span style={{ fontSize: '1rem', lineHeight: 1 }}>
              {isNight ? '☀' : '☽'}
            </span>
          </button>

          {/* Palette picker toggle */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle theme picker"
            style={{
              ...btnBase,
              background: open ? 'var(--gold)' : 'var(--surface)',
              borderColor: open ? 'var(--gold)' : 'var(--stone)',
              color: open ? 'var(--void)' : 'var(--gold)',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {/* Palette icon — 4 mini swatches */}
            <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
              {(['#EDE8DC','#E8ECEE','#F0F0EE','#141410'] as string[]).map((c, i) => (
                <span key={i} style={{
                  width: 7, height: 7,
                  borderRadius: 1,
                  background: c,
                  border: '0.5px solid rgba(0,0,0,0.12)',
                  display: 'block',
                }} />
              ))}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

const btnBase: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: '1px solid var(--stone)',
  background: 'var(--surface)',
  color: 'var(--gold)',
  cursor: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.25s, color 0.3s',
  boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
  flexShrink: 0,
};
