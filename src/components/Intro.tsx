import React from 'react';
import { Cpu } from 'lucide-react';

export const Intro: React.FC = () => (
  <p className="flex flex-wrap items-center gap-2 font-sans text-base text-muted">
    Building ML and infra
    <Cpu size={16} strokeWidth={1.75} className="text-accent" aria-hidden="true" />
    Math underneath, Python at heart.
  </p>
);
