import React from 'react';
import { SignatureMark } from './SignatureMark';

export const Footer: React.FC = () => (
  <footer className="flex items-center gap-3 border-t border-ink/10 pt-8 font-sans text-xs text-muted">
    <SignatureMark className="text-2xl" />
    <span>Joseph Musenge, {new Date().getFullYear()}.</span>
  </footer>
);
