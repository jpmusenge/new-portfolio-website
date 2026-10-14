import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { ProjectRow } from './ProjectRow';
import { ProjectPreviewTile } from './ProjectPreviewTile';
import { useProjectHover } from '../hooks/useProjectHover';
import { projects } from '../data/projects';
import { PROJECT_FILTERS, ProjectFilter } from '../lib/projectFilters';

const VISIBLE_LIMIT = 4;

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const { hovered, setHovered, handlePointer, tileX, tileY, shouldReduceMotion } = useProjectHover();

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const visible = filtered.slice(0, VISIBLE_LIMIT);

  return (
    <section aria-labelledby="projects-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div id="projects-heading">
          <SectionHeading>Projects</SectionHeading>
        </div>
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

      <div className="mt-6">
        {visible.map((project) => (
          <ProjectRow
            key={project.title}
            project={project}
            onPointerMove={handlePointer}
            onPointerLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {filtered.length > VISIBLE_LIMIT && (
        <Link
          to="/projects"
          className="mt-5 inline-block font-sans text-sm text-muted underline decoration-ink/20 underline-offset-4 transition-colors hover:text-accent"
        >
          View all projects →
        </Link>
      )}

      <ProjectPreviewTile hovered={hovered} x={tileX} y={tileY} reduceMotion={shouldReduceMotion} />
    </section>
  );
};
