import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Dataset Size × Dropout in Fine-Tuning',
    description:
      'An in-progress replication-style study testing how training-set size changes the effect of dropout when fine-tuning DistilBERT on SST-2, under a fixed training recipe. Results pending.',
    tech: ['PyTorch', 'Hugging Face Transformers', 'DistilBERT', 'scikit-learn'],
    category: 'ml',
    status: 'in-progress',
    repoUrl: 'https://github.com/jpmusenge/dropout-finetuning',
  },
  {
    title: 'Prostate Cancer Gene Classifier',
    description:
      'An OmicsLogic capstone comparing four ML classifiers on TCGA RNA-Seq data to find the smallest gene signature that still classifies prostate adenocarcinoma accurately — 97.3% accuracy with as few as 100–500 genes, validated against known clinical biomarkers.',
    tech: ['Python', 'scikit-learn', 'pandas', 'Weka'],
    category: 'ml',
    repoUrl: 'https://github.com/jpmusenge/omics-capstone-project',
  },
  {
    title: 'SafeLink HoverGuard',
    description:
      'A Chrome extension that previews link safety on hover: target domain, final URL after redirects, HTTP status, and risk signals like punycode, shortened links, and IP hosts.',
    tech: ['TypeScript', 'Python', 'Flask', 'Gemini API'],
    category: 'web',
    repoUrl: 'https://github.com/jpmusenge/SafeLink-HoverGuard',
  },
  {
    title: 'MindBank Reading Companion',
    description:
      'An AI-powered second brain that captures, defines, and organizes quotes and vocabulary by voice and text.',
    tech: ['React', 'Tailwind CSS', 'Gemini API', 'Firebase'],
    category: 'web',
    repoUrl: 'https://github.com/jpmusenge/MindBank',
    demoUrl: 'https://mind-bank.vercel.app/',
  },
  {
    title: 'RecipeMind',
    description:
      'Matches grocery lists to recipe recommendations with content filtering, the Spoonacular API, and a custom ranking system.',
    tech: ['TypeScript', 'Python', 'Flask', 'OpenAI API'],
    category: 'web',
    repoUrl: 'https://github.com/jpmusenge/RecipeMind',
  },
  {
    title: 'African Music Discovery',
    description:
      'Explore Afrobeats and other genres across African countries, with interactive country and genre selection.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    repoUrl: 'https://github.com/jpmusenge/African-Music-Discovery',
  },
];
