import React from 'react';
import { SignatureMark } from './SignatureMark';

export const Header: React.FC = () => (
  <header className="flex items-center gap-4">
    <SignatureMark className="text-5xl sm:text-6xl" />
    <div>
      <h1 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
        Joseph Musenge
      </h1>
      <p className="mt-1 whitespace-nowrap font-serif text-sm text-accent sm:text-lg md:text-xl">
        Software Engineer, CS &amp; Math at Rust College
      </p>
    </div>
  </header>
);
