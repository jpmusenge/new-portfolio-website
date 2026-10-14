import React, { useState } from 'react';
import { BackHomeLink } from '../components/BackHomeLink';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectRow } from '../components/ProjectRow';
import { ProjectPreviewTile } from '../components/ProjectPreviewTile';
import { useProjectHover } from '../hooks/useProjectHover';
import { projects } from '../data/projects';
import { PROJECT_FILTERS, ProjectFilter } from '../lib/projectFilters';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const { hovered, setHovered, handlePointer, tileX, tileY, shouldReduceMotion } = useProjectHover();

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <BackHomeLink />

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
        <SectionHeading>Projects</SectionHeading>
        <div className="flex items-center gap-3 font-sans text-xs">
          {PROJECT_FILTERS.map(({ id, label }, i) => (
            <React.Fragment key={id}>
              {i > 0 && <span className="text-muted/50">·</span>}
              <button
                type="button"
                onClick={() => setFilter(id)}
                aria-pressed={filter === id}
                className={`border-b pb-0.5 transition-colors duration-200 ${
                  filter === id
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {label}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      <p className="mt-3 font-sans text-xs text-muted">
        {visible.length} project{visible.length === 1 ? '' : 's'}
      </p>

      <div className="mt-4">
        {visible.map((project) => (
          <ProjectRow
            key={project.title}
            project={project}
            onPointerMove={handlePointer}
            onPointerLeave={() => setHovered(null)}
          />
        ))}
      </div>

      <ProjectPreviewTile hovered={hovered} x={tileX} y={tileY} reduceMotion={shouldReduceMotion} />
    </div>
  );
};
