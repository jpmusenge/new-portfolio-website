import React from 'react';
import { BackHomeLink } from '../components/BackHomeLink';
import { SectionHeading } from '../components/SectionHeading';

export const WritingPage: React.FC = () => (
  <div>
    <BackHomeLink />
    <div className="mt-8">
      <SectionHeading>Writing</SectionHeading>
    </div>
    <p className="mt-6 max-w-[50ch] font-sans text-sm leading-relaxed text-muted">
      First posts on ML and data-analysis projects are coming soon. Check back here once
      they're up.
    </p>
  </div>
);
