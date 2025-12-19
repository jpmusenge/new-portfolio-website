export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "SafeLink HoverGuard",
    description: "A Chrome Extension that helps users preview and evaluate the safety of links before clicking. On hover, it displays a tooltip showing the target domain, final URL after redirects, HTTP status, and potential risk signals (e.g., HTTP-only, shortened links, punycode, IP hosts, suspiciously long URLs).",
    tech: ["Typescript", "Python", "Flask", "Machine Learning", "Gemini API"],
    link: "#",
    repo: "https://github.com/jpmusenge/SafeLink-HoverGuard",
    featured: true
  },
  {
    title: "MindBank Reading Companion",
    description: "An AI-powered second brain (and mobile app) that captures, defines, and organizes your favorite quotes and vocabulary using Voice and Text. Built with React, Firebase, and Google Gemini.",
    tech: ["React", "Tailwind CSS", "Gemini API", "Firebase (Auth & Firestore)", "Web Search API"],
    link: "https://mind-bank.vercel.app/",
    repo: "https://github.com/jpmusenge/MindBank",
    featured: true
  },
  {
    title: "RecipeMind",
    description: "Full-stack web app using ML-powered content filtering to match grocery lists with personalized recipe recommendations. Integrated Spoonacular API with custom AI ranking system.",
    tech: ["TypeScript", "Python", "Flask", "OpenAI API"],
    link: "https://github.com/jpmusenge/RecipeMind", 
    repo: "https://github.com/jpmusenge/RecipeMind",
    featured: false
  },
  {
    title: "African Music Discovery",
    description: "Web app designed to explore and discover Afrobeats and diverse musical genres across African countries. Features interactive country selection and genre exploration interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    link: "https://github.com/jpmusenge/African-Music-Discovery",
    repo: "https://github.com/jpmusenge/African-Music-Discovery",
    featured: false
  }
];