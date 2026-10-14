import React from 'react';
import { Project } from '../types';

interface ProjectRowProps {
  project: Project;
  onPointerMove: (e: React.PointerEvent, project: Project) => void;
  onPointerLeave: () => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, onPointerMove, onPointerLeave }) => (
  <div
    className="group relative border-b border-ink/10 py-5 first:pt-0 last:border-none"
    onPointerMove={(e) => onPointerMove(e, project)}
    onPointerLeave={onPointerLeave}
  >
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="font-sans text-[15px] font-medium text-ink">
        <a
          href={project.demoUrl ?? project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 before:absolute before:inset-0 before:content-[''] group-hover:decoration-accent"
        >
          {project.title}
        </a>
      </h3>
      <span className="shrink-0 font-sans text-[11px] uppercase tracking-wider text-muted">
        {project.category === 'ml' ? 'ML' : 'Web'}
        {project.status === 'in-progress' && ' · In Progress'}
      </span>
    </div>
    <p className="mt-1.5 max-w-[50ch] font-sans text-sm leading-relaxed text-muted">
      {project.description}
    </p>
    {project.demoUrl && (
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="relative z-10 mt-1.5 inline-block font-sans text-xs text-muted underline decoration-ink/20 underline-offset-2 transition-colors hover:text-accent"
      >
        Source
      </a>
    )}
  </div>
);
