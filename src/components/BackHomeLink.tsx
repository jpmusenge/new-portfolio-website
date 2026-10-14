import React from 'react';
import { Link } from 'react-router-dom';

export const BackHomeLink: React.FC = () => (
  <Link
    to="/"
    className="inline-flex items-center gap-1.5 font-sans text-sm text-muted transition-colors hover:text-ink"
  >
    ← Home
  </Link>
);
