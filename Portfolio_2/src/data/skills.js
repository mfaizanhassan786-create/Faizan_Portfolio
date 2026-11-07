/**
 * Skill categories. `icon` maps to a Lucide icon inside Skills.jsx.
 * No proficiency percentages by design — capabilities are described, not scored.
 */
export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'server',
    blurb: 'Structuring services, endpoints and business logic that stay readable as they grow.',
    skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'SQL'],
  },
  {
    id: 'ai',
    title: 'AI & Data Science',
    icon: 'brain',
    blurb: 'Exploring intelligent systems — from model fundamentals to applied computer vision.',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'AI Agents',
      'Computer Vision',
      'Data Science Fundamentals',
      'LLM Integration',
    ],
  },
  {
    id: 'databases',
    title: 'Database Technologies',
    icon: 'database',
    blurb: 'Modelling relational data and keeping storage choices aligned with the problem.',
    skills: ['PostgreSQL', 'Neon Database', 'MongoDB', 'Relational Database Design'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'monitor',
    blurb: 'Building clean, responsive interfaces that respect the backend contract.',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'React.js', 'Tailwind CSS'],
  },
  {
    id: 'automation',
    title: 'Automation & Tooling',
    icon: 'workflow',
    blurb: 'Connecting tools and workflows to remove repetitive manual work.',
    skills: ['n8n', 'Git', 'GitHub', 'VS Code', 'Linux', 'Command Line'],
  },
  {
    id: 'professional',
    title: 'Professional Skills',
    icon: 'compass',
    blurb: 'The habits that keep technical work accurate, deliberate and understandable.',
    skills: [
      'Problem Solving',
      'Critical Thinking',
      'Technical Research',
      'Structured Thinking',
      'Continuous Learning',
    ],
  },
];
