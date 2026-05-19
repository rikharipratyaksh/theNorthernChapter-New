'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0;

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      if (dotRef.current) { dotRef.current.style.left = `${mx}px`; dotRef.current.style.top = `${my}px`; }
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
      if (ringRef.current) { ringRef.current.style.left = `${rx}px`; ringRef.current.style.top = `${ry}px`; }
      raf = requestAnimationFrame(tick);
    };

    const grow = () => {
      dotRef.current && (dotRef.current.style.cssText += 'width:6px;height:6px;');
      ringRef.current && (ringRef.current.style.cssText += 'width:64px;height:64px;opacity:0.3;');
    };
    const shrink = () => {
      dotRef.current && (dotRef.current.style.cssText += 'width:8px;height:8px;');
      ringRef.current && (ringRef.current.style.cssText += 'width:40px;height:40px;opacity:0.5;');
    };

    document.addEventListener('mousemove', move);
    raf = requestAnimationFrame(tick);

    const attach = () => {
      document.querySelectorAll('a,button,.gallery-item,.feature-card,.voice-card').forEach(el => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };
    attach();
    const t = setInterval(attach, 2000);

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      clearInterval(t);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{ position:'fixed', width:8, height:8, borderRadius:'50%', background:'var(--gold)', pointerEvents:'none', zIndex:9999, transform:'translate(-50%,-50%)', transition:'width .25s,height .25s', mixBlendMode:'screen' }} />
      <div ref={ringRef} style={{ position:'fixed', width:40, height:40, borderRadius:'50%', border:'1px solid var(--gold)', pointerEvents:'none', zIndex:9998, transform:'translate(-50%,-50%)', transition:'width .3s,height .3s,opacity .3s', opacity:0.5 }} />
    </>
  );
}
