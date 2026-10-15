import React from 'react';
import { SectionHeading } from './SectionHeading';
import { experience } from '../data/experience';

export const ExperienceSection: React.FC = () => (
  <section aria-labelledby="experience-heading">
    <div id="experience-heading">
      <SectionHeading>Experience</SectionHeading>
    </div>
    <div className="mt-6">
      {experience.map((entry) => (
        <div
          key={`${entry.label}-${entry.date}`}
          className="flex items-start justify-between gap-4 border-b border-ink/10 py-4 first:pt-0 last:border-none"
        >
          <p className="min-w-0 flex-1 font-sans text-[15px] leading-relaxed">
            {entry.url ? (
              <a
                href={entry.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-accent"
              >
                {entry.label}
              </a>
            ) : (
              <span className="font-medium text-ink">{entry.label}</span>
            )}{' '}
            <span className="text-muted">{entry.detail}</span>
          </p>
          <span className="shrink-0 font-sans text-xs tabular-nums text-muted">
            {entry.date}
          </span>
        </div>
      ))}
    </div>
  </section>
);
