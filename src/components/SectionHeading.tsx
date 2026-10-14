import React from 'react';

export const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-serif text-xl italic text-ink">
    {children}
    <span className="not-italic text-accent">.</span>
  </h2>
);
