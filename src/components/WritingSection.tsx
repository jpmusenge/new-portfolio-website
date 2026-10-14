import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';

export const WritingSection: React.FC = () => (
  <section aria-labelledby="writing-heading">
    <div id="writing-heading">
      <SectionHeading>Writing</SectionHeading>
    </div>
    <p className="mt-6 max-w-[50ch] font-sans text-sm leading-relaxed text-muted">
      First posts on ML and data-analysis projects are coming soon.
    </p>
    <Link
      to="/writing"
      className="mt-5 inline-block font-sans text-sm text-muted underline decoration-ink/20 underline-offset-4 transition-colors hover:text-accent"
    >
      All writing →
    </Link>
  </section>
);
