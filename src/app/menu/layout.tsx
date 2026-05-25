import type { Metadata } from 'next';

// Hidden QR-only experience — never indexed
export const metadata: Metadata = {
  title: 'The Table — Frozen Woods',
  description: 'A quiet meal at 2,286 metres.',
  robots: { index: false, follow: false },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
