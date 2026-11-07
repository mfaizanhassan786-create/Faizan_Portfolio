/**
 * Certificate records — exactly eight slots.
 *
 * Editing rules:
 * - Only verified details are filled in. Anything unknown stays `null`.
 * - `image`  -> path to a certificate image inside /public/certificates (e.g. '/certificates/python-essentials-1.jpg')
 * - `file`   -> path to a PDF inside /public/certificates
 * - `url`    -> external verification link, if the issuer provides one
 * - When no image/file/url exists, the card shows as "Preview pending"
 *   and the preview button stays disabled instead of opening an empty viewer.
 */
export const certificates = [
  {
    id: 'python-essentials-1',
    number: '01',
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    issued: '22 Feb 2026',
    verified: true,
    image: '/certificates/python-essentials-1.png',
    file: null,
    url: null,
    note: 'Programming fundamentals, data structures and problem solving with Python.',
  },
  {
    id: 'cybersecurity-essentials',
    number: '02',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy · Saylani Welfare International Trust',
    issued: '11 Apr 2026',
    verified: true,
    image: '/certificates/cybersecurity-essentials.png',
    file: null,
    url: null,
    note: 'Core security concepts, threat awareness and defensive practices.',
  },
  {
    id: 'modern-ai',
    number: '03',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy · Saylani Welfare International Trust',
    issued: '08 Mar 2026',
    verified: true,
    image: '/certificates/modern-ai.png',
    file: null,
    url: null,
    note: 'Foundational concepts behind modern artificial intelligence systems.',
  },
  {
    id: 'cybersecurity-smit',
    number: '04',
    title: 'Cybersecurity Essentials (Batch 1)',
    issuer: 'Saylani Mass Training Programme',
    issued: 'Dec 2025 – Apr 2026',
    verified: true,
    image: '/certificates/smit-cybersecurity-essentials.png',
    file: null,
    url: null,
    note: 'Four-month cybersecurity training programme completed through SMIT.',
  },
  {
    id: 'critical-thinking',
    number: '05',
    title: 'Critical Thinking in the AI Era',
    issuer: 'HP LIFE',
    issued: '28 Feb 2026',
    verified: true,
    image: '/certificates/critical-thinking.png',
    file: null,
    url: null,
    note: 'Strategies for evaluating AI-generated content, reducing bias and fact-checking information.',
  },
  {
    id: 'youth-survival',
    number: '06',
    title: 'Youth Survival Workshop',
    issuer: 'Al Hadid Institute · Al Bakah Institute',
    issued: '09 Feb 2026',
    verified: true,
    image: '/certificates/youth-survival.png',
    file: null,
    url: null,
    note: 'Participation in a one-day workshop focused on focus, earning and road mapping.',
  },
  {
    id: 'introduction-to-cybersecurity',
    number: '07',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy · Saylani Welfare International Trust',
    issued: '08 Mar 2026',
    verified: true,
    image: '/certificates/introduction-to-cybersecurity.png',
    file: null,
    url: null,
    note: 'Foundational cybersecurity concepts completed through the Cisco Networking Academy programme.',
  },
  {
    id: 'ai-using-python',
    number: '08',
    title: 'Artificial Intelligence Using Python',
    issuer: 'DigiSkills.pk · Virtual University · Ignite',
    issued: '20 Jul 2026',
    verified: true,
    image: '/certificates/ai-using-python.png',
    file: null,
    url: null,
    note: 'Training in artificial intelligence using Python through the DigiSkills programme.',
  },
];

export function hasPreview(certificate) {
  return Boolean(certificate.image || certificate.file || certificate.url);
}
