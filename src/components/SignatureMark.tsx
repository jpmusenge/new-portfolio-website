import React, { useEffect, useRef } from 'react';

// The JM mark: Pinyon Script, revealed left-to-right on mount so it reads
// as "written in" on every page load. Decorative only — the real name is
// set as plain text beside it, so this is hidden from assistive tech.
export const SignatureMark: React.FC<{ className?: string }> = ({ className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.clipPath = 'inset(0 0% 0 0)';
      return;
    }

    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled || !ref.current) return;
      requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.transition = 'clip-path 1.1s cubic-bezier(.65,0,.35,1)';
        ref.current.style.clipPath = 'inset(0 0% 0 0)';
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`inline-block font-signature leading-none text-ink ${className}`}
      style={{ clipPath: 'inset(0 100% 0 0)' }}
    >
      JM
    </span>
  );
};
