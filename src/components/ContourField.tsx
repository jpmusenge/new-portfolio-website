import React, { useEffect, useRef } from 'react';

// The background: a quiet field of contour lines, drawn on a canvas.
// Replaces the earlier math-glyph version — same cursor-reactive idea,
// redrawn as thin topographic strokes instead of characters.
const LINE_COUNT = 22;
const LINE_SPACING = 26;
const DISTURB_RADIUS = 160;

type Mode = 'margin' | 'band' | 'hidden';

function getMode(width: number): Mode {
  if (width >= 1280) return 'margin';
  if (width >= 768) return 'band';
  return 'hidden';
}

function isDarkMode(): boolean {
  return document.documentElement.classList.contains('dark');
}

export const ContourField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef<Mode>('hidden');
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const layout = () => {
      const mode = getMode(window.innerWidth);
      modeRef.current = mode;

      if (mode === 'hidden') {
        canvas.width = 0;
        canvas.height = 0;
        canvas.style.display = 'none';
        return;
      }

      canvas.style.display = 'block';
      const width = mode === 'margin' ? Math.min(280, window.innerWidth - 900) : window.innerWidth;
      const height = mode === 'margin' ? window.innerHeight : 220;

      canvas.style.left = mode === 'margin' ? 'auto' : '0';
      canvas.style.right = '0';
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      const mode = modeRef.current;
      if (mode === 'hidden') return;

      const rect = canvas.getBoundingClientRect();
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const baseAlpha = mode === 'margin' ? 1 : 0.5;
      const stroke = isDarkMode() ? '243,243,243' : '17,17,17';

      ctx.clearRect(0, 0, w, h);

      const lines = mode === 'margin' ? Math.ceil(h / LINE_SPACING) : LINE_COUNT;

      for (let i = 0; i < lines; i++) {
        const baseY = i * LINE_SPACING;
        if (baseY > h + LINE_SPACING) break;

        ctx.beginPath();
        for (let x = 0; x <= w; x += 8) {
          const screenX = rect.left + x;
          const screenY = rect.top + baseY;
          const dx = mouseRef.current.x - screenX;
          const dy = mouseRef.current.y - screenY;
          const dist = Math.hypot(dx, dy);
          const influence = reduceMotion ? 0 : Math.max(0, 1 - dist / DISTURB_RADIUS);

          const wobble = Math.sin(x * 0.02 + t * 0.35 + i * 0.6) * 4;
          const push = influence * 20 * Math.sin(dist * 0.045 - t * 1.2);
          const y = baseY + wobble + push;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const opacity = (0.05 + (i / lines) * 0.12) * baseAlpha;
        ctx.strokeStyle = `rgba(${stroke}, ${opacity.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const loop = (now: number) => {
      draw(now / 1000);
      rafRef.current = requestAnimationFrame(loop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      } else if (!reduceMotion && modeRef.current !== 'hidden') {
        rafRef.current = requestAnimationFrame(loop);
      }
    };

    const themeObserver = new MutationObserver(() => {
      if (reduceMotion) draw(0);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    layout();
    if (reduceMotion) {
      draw(0);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
      rafRef.current = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', layout);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', layout);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      themeObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 z-0"
    />
  );
};
