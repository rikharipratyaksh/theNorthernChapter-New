import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Frozen Woods by The Northern Chapter — Mukteshwar',
  description:
    'A mountain home for those who have outgrown noise. Frozen Woods is the first space by The Northern Chapter — a quiet, intentional collection of mountain retreats in the Himalayas.',
  openGraph: {
    title: 'Frozen Woods — a TNC stay',
    description: 'Not everyone understands this kind of silence.',
    siteName: 'The Northern Chapter',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Instrument+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
