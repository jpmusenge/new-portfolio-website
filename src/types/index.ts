export interface TimelineEntry {
  label: string;
  detail: string;
  date: string;
}

export type ProjectCategory = 'ml' | 'web';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  repoUrl: string;
  demoUrl?: string;
  image?: string;
  status?: 'in-progress';
}
