import React from 'react';

// Lucide has no Spotify glyph — hand-drawn to match the library's stroke
// weight and rounded caps so it sits consistently among the other icons.
export const SpotifyIcon: React.FC<{ size?: number; strokeWidth?: number }> = ({
  size = 24,
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M7.5 14.5c3-1.2 6-1.2 9 0" />
    <path d="M6.8 11.3c4-1.6 7.4-1.6 10.4 0" />
    <path d="M6.2 8.3c4.6-2 8.8-2 13.6 0" />
  </svg>
);
