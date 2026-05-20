import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Story from '@/components/Story';
import Experience from '@/components/Experience';
import Gallery from '@/components/Gallery';
import Numbers from '@/components/Numbers';
import Booking from '@/components/Booking';
import Voices from '@/components/Voices';
import Expansion from '@/components/Expansion';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import RevealInit from '@/components/RevealInit';
import ThemeController from '@/components/ThemeController';

export default function Home() {
  return (
    <>
      <Cursor />
      <ThemeController />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Story />
        <Experience />
        <Gallery />
        <Numbers />
        <Booking />
        <Voices />
        <Expansion />
      </main>
      <Footer />
      <Lightbox />
      <RevealInit />
    </>
  );
}
