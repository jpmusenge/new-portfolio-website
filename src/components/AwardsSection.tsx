import React from 'react';
import { SectionHeading } from './SectionHeading';
import { awards } from '../data/awards';

export const AwardsSection: React.FC = () => (
  <section aria-labelledby="awards-heading">
    <div id="awards-heading">
      <SectionHeading>Awards</SectionHeading>
    </div>
    <div className="mt-6">
      {awards.map((entry) => (
        <div
          key={`${entry.label}-${entry.date}`}
          className="border-b border-ink/10 py-5 first:pt-0 last:border-none"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-sans text-[15px] font-medium text-ink">{entry.label}</h3>
            <span className="shrink-0 font-sans text-xs tabular-nums text-muted">
              {entry.date}
            </span>
          </div>
          <p className="mt-1.5 max-w-[50ch] font-sans text-sm leading-relaxed text-muted">
            {entry.detail}
          </p>
        </div>
      ))}
    </div>
  </section>
);
