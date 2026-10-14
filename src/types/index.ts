export interface TimelineEntry {
  label: string;
  detail: string;
  date: string;
}

export type ProjectCategory = 'ml' | 'web' | 'ios';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  repoUrl: string;
  demoUrl?: string;
  image?: ProjectImage;
  status?: 'in-progress';
}
