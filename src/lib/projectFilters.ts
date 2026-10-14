import { ProjectCategory } from '../types';

export type ProjectFilter = 'all' | ProjectCategory;

export const PROJECT_FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ml', label: 'ML' },
  { id: 'web', label: 'Web' },
];
