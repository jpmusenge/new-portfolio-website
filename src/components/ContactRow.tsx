import React from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface ContactLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

// Spotify is pending a real profile link — Spotify profile URLs need the
// account's ID, not a display name, so "Joseph Musenge" alone isn't enough
// to link to. Add it back (with SpotifyIcon from ./icons/SpotifyIcon) once
// the actual open.spotify.com/user/... or artist URL is known.
const links: ContactLink[] = [
  { label: 'Email', href: 'mailto:josephmusengep62@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/jpmusenge', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/joseph-musenge', icon: Linkedin },
  { label: 'X', href: 'https://x.com/_josephmusenge', icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com/_josephmusenge', icon: Instagram },
];

export const ContactRow: React.FC = () => (
  <section aria-labelledby="contact-heading">
    <div id="contact-heading">
      <SectionHeading>Contact</SectionHeading>
    </div>
    <div className="mt-6 flex items-center gap-5">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          className="group relative text-muted transition-colors duration-200 hover:text-accent"
        >
          <Icon size={19} strokeWidth={1.6} />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-ink px-2 py-1 font-sans text-[11px] font-medium text-paper opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  </section>
);
