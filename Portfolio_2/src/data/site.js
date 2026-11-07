/**
 * Central site configuration.
 * Update identity, assets and links here — no component changes required.
 */

export const identity = {
  name: 'M. Faizan Hassan',
  monogram: 'MFH',
  logo: '< MFH />',
  role: 'Full Stack AI Driven Developer',
  headline: 'Building Intelligent Solutions Through Code.',
  roles: [
    'Full Stack AI Driven Developer',
    'FastAPI Developer',
    'AI & Automation Enthusiast',
    'Software Developer',
  ],
  intro:
    "I'm a self-driven developer passionate about Python, backend engineering, artificial intelligence, and automation. I enjoy transforming complex ideas into practical, efficient, and maintainable software solutions.",
  email: 'mfaizanhassan786@gmail.com',
  phone: {
    display: '+92 321 6719723',
    href: 'tel:+923216719723',
  },
  whatsapp: {
    display: '+92 321 6719723',
    href: 'https://wa.me/923216719723',
  },
  socials: {
    github: {
      label: 'GitHub',
      handle: '@mfaizanhassan786-create',
      url: 'https://github.com/mfaizanhassan786-create',
    },
    linkedin: {
      label: 'LinkedIn',
      handle: 'm-faizan-hassan',
      url: 'https://linkedin.com/in/m-faizan-hassan-579aa43a7/',
    },
  },
};

/**
 * Replace these files inside /public with your own assets.
 * - profileImage: /public/images/profile-placeholder.svg (swap for profile.jpg)
 * - cv: /public/cv/M-Faizan-Hassan-CV.pdf
 */
export const assets = {
  profileImage: '/images/faizan-hassan-portrait.jpeg',
  profileImageAlt: 'Portrait of M. Faizan Hassan',
  cv: '/cv/M-Faizan-Hassan-CV.pdf',
};

/**
 * Availability badge is hidden by default — enable it only when it is accurate.
 */
export const availability = {
  enabled: false,
  label: 'Available for opportunities',
};

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  index: '01',
  eyebrow: 'About',
  title: 'A Little About Me',
  subtitle: 'Driven by Curiosity. Focused on Building.',
  paragraphs: [
    "I'm M. Faizan Hassan, a self-driven developer with a strong interest in Python backend development, artificial intelligence, and modern software engineering.",
    'My focus is on developing practical applications, designing reliable backend architectures, working with APIs and databases, and exploring intelligent automation systems.',
    'I believe good software is more than just writing code. It requires understanding the problem, reviewing requirements carefully, selecting the right architecture, and building solutions that remain maintainable as they grow.',
    "I'm particularly interested in building meaningful technology that solves real-world problems and contributes to the future of AI-powered software.",
  ],
  interests: [
    'Python Backend Engineering',
    'REST API Design',
    'Artificial Intelligence',
    'Computer Vision',
    'Workflow Automation',
    'System Architecture',
  ],
  principles: [
    {
      title: 'Clear Communication',
      text: 'Understanding the requirement properly is part of the engineering work, not a step before it.',
    },
    {
      title: 'Structured Problem-Solving',
      text: 'Breaking a problem into smaller, verifiable parts keeps decisions deliberate and solutions maintainable.',
    },
    {
      title: 'Research & Continuous Learning',
      text: 'Technical research and steady practice turn unfamiliar technologies into dependable tools.',
    },
  ],
};

export const footer = {
  signOff: 'Building today. Learning continuously. Creating tomorrow.',
};

export const contact = {
  index: '06',
  eyebrow: 'Contact',
  title: "Let's Build Something Meaningful",
  copy: "Have an idea, a project, or an opportunity to discuss? I'm always interested in connecting with people who are passionate about technology, software development, and artificial intelligence.",
};
