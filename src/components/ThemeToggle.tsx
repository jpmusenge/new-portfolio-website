import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  try {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage unavailable — fall through to system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // ignore — theme just won't persist across visits
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:text-ink"
    >
      <Sun
        size={17}
        strokeWidth={1.75}
        className={`absolute transition-all duration-300 ${
          theme === 'dark' ? 'scale-50 opacity-0 -rotate-45' : 'scale-100 opacity-100 rotate-0'
        }`}
      />
      <Moon
        size={17}
        strokeWidth={1.75}
        className={`absolute transition-all duration-300 ${
          theme === 'dark' ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 rotate-45'
        }`}
      />
    </button>
  );
};
