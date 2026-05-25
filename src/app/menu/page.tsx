import MenuHero from '@/components/menu/MenuHero';
import MenuNav from '@/components/menu/MenuNav';
import MenuBody from '@/components/menu/MenuBody';
import MenuFooter from '@/components/menu/MenuFooter';
import RevealInit from '@/components/RevealInit';
import ThemeController from '@/components/ThemeController';
import Cursor from '@/components/Cursor';

export default function MenuPage() {
  return (
    <>
      <Cursor />
      <ThemeController />
      <MenuHero />
      <MenuNav />
      <MenuBody />
      <MenuFooter />
      <RevealInit />
    </>
  );
}
