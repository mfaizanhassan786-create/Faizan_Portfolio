import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  BrainCircuit,
  Briefcase,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Rocket,
  X,
  Globe,
  Cpu,
  Layers3,
  Sun,
  Moon,
} from 'lucide-react'
import NetworkGlobe from './components/NetworkGlobe'
import CosmicBackdrop from './components/CosmicBackdrop'
import CustomCursor from './components/CustomCursor'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
const profileImage = publicAsset('images/faizan-hassan-portrait.jpeg')
const cvUrl = publicAsset('documents/Faizan-CV.pdf')

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const skillCategories = [
  {
    label: 'Programming',
    icon: Code2,
    skills: ['Python', 'C++'],
  },
  {
    label: 'Backend Development',
    icon: Database,
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Supabase', 'Neon Database', 'MongoDB', 'Relational Database Design', 'Node.js', 'SQL'],
  },
  {
    label: 'AI & Automation',
    icon: BrainCircuit,
    skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'AI Agents', 'Computer Vision', 'n8n', 'Automation', 'Pandas', 'NumPy', 'LLM Integration'],
  },
  {
    label: 'Frontend',
    icon: Layers3,
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  {
    label: 'Tools & Workflow',
    icon: Rocket,
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Command Line', 'Technical Research', 'Problem Solving', 'Continuous Learning'],
  },
]

const projects = [
  {
    id: 'isop',
    number: '02',
    title: 'iSOP | Industrial Safety AI',
    category: 'Artificial Intelligence / Computer Vision',
    description:
      'An industrial safety monitoring prototype focused on computer-vision-based Personal Protective Equipment (PPE) detection. The project explores how AI-powered visual analysis can support workplace safety monitoring and identify potential compliance gaps in industrial environments.',
    summary: 'A practical vision system that checks PPE compliance in industrial spaces and surfaces risk signals where safety gaps appear.',
    technicalFocus: ['Computer Vision', 'PPE Detection', 'AI System Architecture', 'Technical Gap Analysis', 'Detection Workflow Design', 'Industrial Safety Monitoring'],
    stack: ['Python', 'YOLO', 'OpenCV', 'Computer Vision', 'AI', 'Safety Systems'],
    highlights: [
      'Maps industrial safety needs to a realistic monitoring workflow instead of a speculative demo-only approach.',
      'Explores how detection logic can highlight missing protective gear and safety gaps in real operations.',
      'Emphasizes system thinking, architecture review, and technical feasibility over inflated claims.',
    ],
    problem:
      'Industrial environments need reliable monitoring of PPE compliance, but the workflow is often fragmented and inconsistent. The challenge is to understand the operational requirements, identify implementation gaps, and design a realistic AI-based detection approach.',
    approach:
      'The project analyses the end-to-end monitoring pipeline, from camera input to PPE detection, and focuses on designing a practical safety-checking architecture that aligns with industrial workflow realities.',
    architecture: [
      { label: 'Input capture', value: 'Industrial video or image feeds' },
      { label: 'Detection layer', value: 'Computer-vision-based PPE recognition' },
      { label: 'Inspection logic', value: 'Safety compliance analysis' },
      { label: 'Output', value: 'Monitoring insights and operational flags' },
    ],
    learnings: 'This project strengthened my understanding of technical requirements, architecture evaluation, and how to design AI systems around practical industry needs.',
    link: '',
  },
  {
    id: 'flight-management',
    number: '03',
    title: 'Flight Management System',
    category: 'Backend Development / API Engineering',
    description:
      'A structured flight management backend designed to explore the engineering principles behind modern flight-related information systems. The project focuses on building organized REST APIs, managing relational data, and implementing reliable backend business logic.',
    summary: 'A backend-first system centered on maintainable architecture, relational data design, and clean API behavior.',
    technicalFocus: ['Python', 'FastAPI', 'REST API Architecture', 'Relational Database Management', 'Data Validation', 'Backend Business Logic', 'API Documentation'],
    stack: ['Python', 'FastAPI', 'REST', 'SQL', 'Database Design', 'API Design'],
    highlights: [
      'Builds a clean information model for flight operations and data management.',
      'Prioritizes structured API design, maintainable architecture, and reliable data handling.',
      'Shows the value of good backend design for complex operational systems.',
    ],
    problem:
      'Flight-related information systems require disciplined logic, careful schema design, and reliable handling of operational data. The challenge is to create a backend foundation that is organized and robust enough to scale.',
    approach:
      'This project centres on creating a backend structure that separates concerns, validates requests, preserves relational integrity, and documents the API clearly for future integration.',
    architecture: [
      { label: 'API layer', value: 'FastAPI endpoints and request validation' },
      { label: 'Logic layer', value: 'Business rules and data handling' },
      { label: 'Storage layer', value: 'Relational database management' },
      { label: 'Documentation', value: 'Structured API references and clarity' },
    ],
    learnings: 'The project reinforced the importance of data modelling, validation, and backend structure in building dependable software systems.',
    link: '',
  },
  {
    id: 'document-processing',
    number: '04',
    title: 'AI Document Processing Agent',
    category: 'AI Automation / Workflow Engineering',
    description:
      'An intelligent document-processing workflow designed to automate the extraction and organization of information from PDFs and other documents. Using n8n and AI-powered processing, the system explores converting unstructured document content into structured JSON outputs.',
    summary: 'A workflow-driven automation system designed to reduce repetitive manual work and structure document information for downstream use.',
    technicalFocus: ['n8n Automation', 'AI Integration', 'PDF Processing', 'Information Extraction', 'Structured JSON', 'Workflow Orchestration', 'Data Transformation'],
    stack: ['n8n', 'AI', 'Automation', 'PDF', 'JSON', 'Workflow'],
    highlights: [
      'Shows how automation can streamline repetitive document work and reduce manual overhead.',
      'Focuses on extracting useful information from unstructured sources and converting it into structured outputs.',
      'Introduces automation patterns that can be adapted to operational productivity workflows.',
    ],
    problem:
      'Documents often arrive in inconsistent formats, and manual extraction is time-consuming and error-prone. The challenge is to convert unstructured information into a useful, structured structure with minimal human effort.',
    approach:
      'The system explores workflow orchestration and AI-assisted extraction to turn document content into structured JSON, making it easier to automate downstream processing and analysis.',
    architecture: [
      { label: 'Input flow', value: 'PDF and document ingestion' },
      { label: 'Processing', value: 'Extraction and transformation logic' },
      { label: 'AI layer', value: 'Intelligent parsing and structuring' },
      { label: 'Output', value: 'Structured JSON results' },
    ],
    learnings: 'This project sharpened my understanding of workflow automation, information extraction, and how AI can improve practical operational efficiency.',
    link: '',
  },
  {
    id: 'sales-inventory-analytics',
    number: '01',
    title: 'Sales & Inventory Analytics API',
    category: 'Backend Development / Data Analytics',
    description:
      'An analytics API built with Python, FastAPI, Supabase/PostgreSQL, Pandas, and NumPy.',
    summary: 'Sales and inventory analytics, built with a Python data and API stack.',
    technicalFocus: ['Python', 'FastAPI', 'Supabase / PostgreSQL', 'Pandas', 'NumPy'],
    stack: ['Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'Pandas', 'NumPy'],
    highlights: [],
    problem: 'An API focused on sales and inventory analytics.',
    approach: '',
    architecture: [],
    learnings: '',
    link: '',
  },
]

const certificates = [
  { title: 'Python Essentials 1', issuer: 'Cisco Networking Academy', date: '22 Feb 2026', type: 'Verified', image: publicAsset('certificates/python-essentials-1.png') },
  { title: 'Cybersecurity Essentials', issuer: 'Cisco Networking Academy · Saylani Welfare International Trust', date: '11 Apr 2026', type: 'Verified', image: publicAsset('certificates/cybersecurity-essentials.png') },
  { title: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy · Saylani Welfare International Trust', date: '08 Mar 2026', type: 'Verified', image: publicAsset('certificates/modern-ai.png') },
  { title: 'Cybersecurity Essentials (Batch 1)', issuer: 'Saylani Mass Training Programme', date: 'Dec 2025 – Apr 2026', type: 'Verified', image: publicAsset('certificates/smit-cybersecurity-essentials.png') },
  { title: 'Critical Thinking in the AI Era', issuer: 'HP LIFE', date: '28 Feb 2026', type: 'Verified', image: publicAsset('certificates/critical-thinking.png') },
  { title: 'Youth Survival Workshop', issuer: 'Al Hadid Institute · Al Bakah Institute', date: '09 Feb 2026', type: 'Verified', image: publicAsset('certificates/youth-survival.png') },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy · Saylani Welfare International Trust', date: '08 Mar 2026', type: 'Verified', image: publicAsset('certificates/introduction-to-cybersecurity.png') },
  { title: 'Artificial Intelligence Using Python', issuer: 'DigiSkills.pk · Virtual University · Ignite', date: '20 Jul 2026', type: 'Verified', image: publicAsset('certificates/ai-using-python.png') },
]

const displayedProjects = [
  ...projects.filter((project) => project.id === 'sales-inventory-analytics'),
  ...projects.filter((project) => project.id !== 'sales-inventory-analytics'),
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/mfaizanhassan786-create', icon: GitBranch },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/m-faizan-hassan-579aa43a7/', icon: Globe },
  { label: 'Email', href: 'mailto:mfaizanhassan786@gmail.com', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/923216719723?text=Hello%20Faizan!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.', icon: MessageCircle },
]

function App() {
  const [activeNav, setActiveNav] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const progressRef = useRef(null)

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    let frame = 0
    const updateScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
        progressRef.current?.querySelector('span')?.style.setProperty('transform', `scaleX(${progress / 100})`)
        progressRef.current?.setAttribute('aria-valuenow', String(Math.round(progress)))
        setShowBackToTop(window.scrollY > 560)
        setIsScrolled(window.scrollY > 16)
      })
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          setActiveNav(visible.target.id)
        }
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: [0.2, 0.4, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Portfolio enquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:mfaizanhassan786@gmail.com?subject=${subject}&body=${body}`
  }

  const openProject = (project) => setSelectedProject(project)
  const openCertificate = (certificate) => setSelectedCertificate(certificate)

  return (
    <MotionConfig reducedMotion="user">
    <div className={`site-shell ${theme === 'dark' ? 'theme-dark' : ''} bg-[var(--color-offwhite)] text-[var(--color-dark)] selection:bg-[var(--color-purple)] selection:text-white`}>
      <div
        ref={progressRef}
        className="scroll-progress"
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <span />
      </div>
      <CustomCursor />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className={`site-header sticky top-0 z-40 border backdrop-blur-xl ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button className="flex items-center gap-3 text-lg font-semibold text-[var(--color-dark)]" onClick={() => handleNavClick('#home')} aria-label="Faizan Hassan — home">
            <span className="font-mono text-xl tracking-tight">&lt; FH /&gt;</span>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeNav === item.href.replace('#', '') ? 'bg-[var(--color-purple)] text-white shadow-[0_10px_25px_rgba(108,59,219,0.2)]' : 'text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-dark)]'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-purple)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(108,59,219,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--color-purple-dark)]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-dark)] md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-navigation" className="mobile-navigation border-t border-[var(--color-border)] bg-[rgba(255,255,255,0.95)] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`rounded-full px-4 py-2 text-left text-sm font-medium ${activeNav === item.href.replace('#', '') ? 'bg-[var(--color-purple)] text-white' : 'text-[var(--color-muted)]'}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={cvUrl}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-purple)] px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <button
                type="button"
                onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-dark)]"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {theme === 'light' ? 'Dark theme' : 'Light theme'}
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="home" className="hero-section relative overflow-hidden pt-16 pb-20 sm:pt-20">
          <CosmicBackdrop className="hero-stars" />
          <div className="hero-nebula" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-medium">
                <span className="eyebrow-pill rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-[var(--color-purple)]">FAIZAN HASSAN</span>
                <span className="eyebrow-pill rounded-full bg-[var(--color-soft-purple)] px-3 py-1.5 text-[var(--color-purple)]">AI · BACKEND · AUTOMATION</span>
              </div>

              <h1 className="hero-title max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-[var(--color-dark)] sm:text-6xl lg:text-[5rem]">
                Building Intelligent Solutions Through Code.
              </h1>

              <div className="hero-role mt-5 min-h-[3rem] text-xl font-medium tracking-[-0.04em] text-[var(--color-purple)] sm:text-2xl">
                <span className="flex min-h-10 flex-wrap items-center">AI Engineer | Python Developer | Automation Enthusiast</span>
              </div>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                I&apos;m a self-driven developer passionate about Python, backend engineering, artificial intelligence, and automation. I enjoy transforming complex ideas into practical, efficient, and maintainable software solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button onClick={() => handleNavClick('#projects')} className="inline-flex items-center gap-2 rounded-full bg-[var(--color-purple)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(108,59,219,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--color-purple-dark)]">
                  Explore My Work
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => handleNavClick('#contact')} className="hero-secondary inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:-translate-y-0.5 hover:border-[var(--color-purple)] hover:text-[var(--color-purple)]">
                  Let&apos;s Connect
                </button>
                <a href={cvUrl} download className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-purple)]">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="hero-social inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-dark)] transition hover:-translate-y-0.5 hover:border-[var(--color-purple)] hover:text-[var(--color-purple)]" aria-label={link.label}>
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex items-center justify-center">
              <div className="hero-core portfolio-card relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white/85 p-5 shadow-[0_26px_80px_rgba(17,17,24,0.12)] backdrop-blur-sm sm:p-7">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(108,59,219,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(108,59,219,0.045)_1px,transparent_1px)] [background-size:40px_40px]" />
                <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-4 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(232,189,83,0.15),transparent_70%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-purple)]">
                      <Cpu className="h-4 w-4" />
                      Connected systems
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-yellow)]" />
                      Interactive network
                    </span>
                  </div>

                  <div className="identity-card mt-4 flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/75 p-3">
                    <img src={profileImage} alt="" width="56" height="56" className="h-14 w-14 rounded-xl object-cover object-[center_32%]" />
                    <div className="min-w-0">
                      <p className="font-semibold text-[var(--color-dark)]">M. Faizan Hassan</p>
                      <p className="text-xs text-[var(--color-muted)]">AI &amp; Full Stack Development · Python &amp; FastAPI</p>
                    </div>
                  </div>

                  <div className="flex min-h-[17rem] items-center justify-center py-2 sm:min-h-[19rem]">
                    <NetworkGlobe />
                  </div>

                  <div className="grid grid-cols-3 divide-x divide-[var(--color-border)] border-t border-[var(--color-border)] pt-4">
                    {[
                      { label: 'Backend', value: 'Python · FastAPI' },
                      { label: 'Approach', value: 'Research-driven' },
                      { label: 'Focus', value: 'AI · Automation' },
                    ].map((item) => (
                      <div key={item.label} className="px-2 first:pl-0 last:pr-0 sm:px-4">
                        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-muted)] sm:text-[10px]">{item.label}</p>
                        <p className="mt-1 text-[11px] font-semibold text-[var(--color-dark)] sm:text-xs">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="about-section bg-[var(--color-offwhite)] py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="about-heading mb-14 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-purple)]">
                <Briefcase className="h-4 w-4" />
                About Me
              </span>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.065em] text-[var(--color-dark)] sm:text-6xl">A Little About Me</h2>
              <p className="mt-4 text-xl text-[var(--color-muted)] sm:text-2xl">Driven by curiosity. Focused on building.</p>
            </div>

            <div className="about-editorial">
              <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="about-portrait">
                <img src={profileImage} alt="Portrait of M. Faizan Hassan" width="800" height="1000" loading="lazy" decoding="async" />
                <figcaption className="identity-card about-caption">
                  <span className="about-monogram">FH</span>
                  <span><strong>M. Faizan Hassan</strong><small>AI · Backend · Automation</small></span>
                </figcaption>
              </motion.figure>
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="about-copy">
                <p className="about-lede">I&apos;m a self-driven developer with a strong interest in Python backend development, artificial intelligence, and modern software engineering.</p>
                <p>My focus is on developing practical applications, designing reliable backend architectures, working with APIs and databases, and exploring intelligent automation systems.</p>
                <p>I believe good software starts with understanding the problem. Research, thoughtful architecture, and maintainable implementation matter as much as the code itself.</p>
                <div className="about-note">
                  <Cpu className="h-5 w-5" aria-hidden="true" />
                  <span>Learning with intention. Building toward practical AI engineering.</span>
                </div>
                <ul className="about-interests" aria-label="Technical interests">
                  {['Python backend', 'Artificial intelligence', 'API design', 'Automation', 'Data architecture'].map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-purple)]">
                <Code2 className="h-4 w-4" />
                Technical Expertise
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[var(--color-dark)] sm:text-5xl">Technologies I Explore and Work With</h2>
            </div>

            <div className="skills-universe">
              <svg className="skills-constellation" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
                <path d="M500 310 235 135M500 310 765 135M500 310 235 485M500 310 765 485M500 310 500 65" />
                <circle cx="235" cy="135" r="3" /><circle cx="765" cy="135" r="3" /><circle cx="235" cy="485" r="3" /><circle cx="765" cy="485" r="3" /><circle cx="500" cy="65" r="3" />
              </svg>
              <div className="skills-core" aria-hidden="true">
                <span className="skills-core-orbit" />
                <span className="skills-core-icon"><BrainCircuit className="h-9 w-9" /></span>
                <small>TECHNOLOGY<br />CONSTELLATION</small>
              </div>
              {skillCategories.map(({ label, icon: Icon, skills }, index) => (
                <motion.article key={label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className={`skill-cluster skill-cluster-${index + 1}`}>
                  <div className="skill-cluster-heading">
                    <span className="skill-cluster-icon"><Icon className="h-4 w-4" /></span>
                    <h3>{label}</h3>
                  </div>
                  <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section bg-[var(--color-offwhite)] py-20">
          <CosmicBackdrop className="projects-stars" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-purple)]">
                <FileText className="h-4 w-4" />
                Featured Projects
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[var(--color-dark)] sm:text-5xl">Selected Projects</h2>
              <p className="mt-4 text-lg text-[var(--color-muted)]">Turning Technical Ideas Into Practical Solutions</p>
            </div>

                    <div className="project-showcases">
                      {displayedProjects.map((project, index) => {
                        const ProjectIcon = project.id === 'sales-inventory-analytics'
                          ? Database
                          : project.id === 'isop'
                            ? BrainCircuit
                            : project.id === 'document-processing'
                              ? Rocket
                              : Code2

                        return (
                          <motion.article key={project.id} data-project={project.id} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className={`project-showcase portfolio-card ${index % 2 ? 'project-reverse' : ''}`}>
                            <div className="project-art">
                              <div className="project-art-grid" aria-hidden="true" />
                              <span className="project-art-icon" aria-hidden="true"><ProjectIcon className="h-9 w-9" /></span>
                              <span className="project-art-caption">{project.id === 'sales-inventory-analytics' ? 'DATA / API' : project.category.split(' / ')[0]}</span>
                              <div className="project-art-orbit" aria-hidden="true"><i /><i /><i /><i /></div>
                              <span className="project-art-index">{project.number}</span>
                            </div>
                            <div className="project-copy">
                              <p className="project-kicker">{project.category}</p>
                              <h3>{project.title}</h3>
                              <p className="project-description">{project.description}</p>
                              {project.technicalFocus.length > 0 && (
                                <ul className="project-focus">
                                  {project.technicalFocus.slice(0, 3).map((focus) => <li key={focus}>{focus}</li>)}
                                </ul>
                              )}
                              <ul className="project-stack" aria-label="Technology stack">
                                {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                              </ul>
                              <div className="project-actions">
                                <button onClick={() => openProject(project)} className="inline-flex items-center gap-2 rounded-full bg-[var(--color-purple)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-purple-dark)]">
                                  Explore project <ArrowRight className="h-4 w-4" />
                                </button>
                                {project.link?.startsWith('https://github.com/') && (
                                  <a href={project.link} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-purple)] hover:text-[var(--color-purple)]">
                                    <GitBranch className="h-4 w-4" /> GitHub
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.article>
                        )
                      })}
                    </div>
          </div>
        </section>

        <section id="certificates" className="certificates-section py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-purple)]">
                <GraduationCap className="h-4 w-4" />
                Certificates & Achievements
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[var(--color-dark)] sm:text-5xl">Continuous Learning. Practical Knowledge. Professional Growth.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {certificates.map((certificate, index) => (
                <motion.button key={`${certificate.title}-${index}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} onClick={() => openCertificate(certificate)} className="certificate-card portfolio-card group rounded-[1.8rem] border border-[var(--color-border)] bg-white p-5 text-left shadow-[0_18px_40px_rgba(17,17,24,0.04)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-[var(--color-soft-purple)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-purple)]">{certificate.type}</span>
                    <span className="text-xs font-medium text-[var(--color-muted)]">{certificate.date}</span>
                  </div>
                  <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-[1.4rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,#f7f7fb,#eef3ff)]">
                    <img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-dark)]">{certificate.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{certificate.issuer}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section bg-[var(--color-dark)] py-20 text-white">
          <CosmicBackdrop className="contact-stars" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-blue)]">
                <MessageCircle className="h-4 w-4" />
                Contact
              </span>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">Have an Idea? Let&apos;s Build Something Intelligent.</h2>
              <p className="mt-4 text-lg text-white/70">Have an idea, a project, or an opportunity to discuss? I&apos;m always interested in connecting with people who are passionate about technology, software development, and artificial intelligence.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'mfaizanhassan786@gmail.com', href: 'mailto:mfaizanhassan786@gmail.com' },
                  { icon: Phone, label: 'WhatsApp', value: '+92 321 6719723', href: 'https://wa.me/923216719723?text=Hello%20Faizan!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.' },
                  { icon: Globe, label: 'LinkedIn', value: 'm-faizan-hassan-579aa43a7', href: 'https://linkedin.com/in/m-faizan-hassan-579aa43a7/' },
                  { icon: GitBranch, label: 'GitHub', value: 'mfaizanhassan786-create', href: 'https://github.com/mfaizanhassan786-create' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="portfolio-card flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-white/80 transition hover:bg-white/10">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-soft-purple)] text-[var(--color-purple)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-white/50">{label}</p>
                        <p className="mt-1 text-base font-medium text-white">{value}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/50" />
                  </a>
                ))}
              </div>

              <form onSubmit={handleFormSubmit} className="portfolio-card rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-white/80">Name</span>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-[#171822] px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--color-purple)] outline-none" placeholder="Your name" required />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-white/80">Email</span>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-[#171822] px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--color-purple)] outline-none" placeholder="you@example.com" required />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-medium text-white/80">Subject</span>
                  <input value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-[#171822] px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--color-purple)] outline-none" placeholder="Project discussion" required />
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-medium text-white/80">Message</span>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="6" className="w-full rounded-2xl border border-white/10 bg-[#171822] px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--color-purple)] outline-none" placeholder="Tell me about your idea or opportunity..." required />
                </label>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-purple)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-purple-dark)]">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="mailto:mfaizanhassan786@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Use Email</a>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-white/50">Selecting Send Message opens your email app with the message details filled in.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#101018] py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-mono text-2xl tracking-tight text-white">&lt; MFH /&gt;</div>
              <p className="mt-4 max-w-md text-white/70">Building today. Learning continuously. Creating tomorrow.</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              {navItems.map((item) => (
                <button key={item.href} onClick={() => handleNavClick(item.href)} className="transition hover:text-white">{item.label}</button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-[var(--color-purple)] hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} M. Faizan Hassan. All rights reserved.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">
              Back to top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#111118]/70 p-4 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[0_30px_80px_rgba(17,17,24,0.2)]">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-soft-purple)] px-6 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-purple)]">{selectedProject.category}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-[var(--color-dark)]">{selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-dark)]">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[calc(90vh-92px)] overflow-y-auto p-6">
                <div className="space-y-6 text-[var(--color-muted)]">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-purple)]">Overview</p>
                    <p className="leading-7">{selectedProject.problem}</p>
                  </div>

                  {selectedProject.approach && <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-purple)]">Technical approach</p>
                    <p className="leading-7">{selectedProject.approach}</p>
                  </div>}

                  {selectedProject.architecture.length > 0 && (
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-purple)]">Architecture</p>
                      <div className="grid gap-3 md:grid-cols-2">
                        {selectedProject.architecture.map((block) => (
                          <div key={block.label} className="portfolio-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-offwhite)] p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-purple)]">{block.label}</p>
                            <p className="mt-2 text-sm text-[var(--color-dark)]">{block.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-purple)]">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-[var(--color-border)] bg-[var(--color-offwhite)] px-3 py-1.5 text-sm text-[var(--color-dark)]">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.highlights.length > 0 && <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-purple)]">Challenges & learning</p>
                    <ul className="space-y-2 leading-7">
                      {selectedProject.highlights.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-soft-purple)] text-[var(--color-purple)]"><Check className="h-3 w-3" /></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>}

                  {selectedProject.learnings && <div className="portfolio-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-offwhite)] p-4 text-sm text-[var(--color-dark)]">
                    <span className="font-semibold text-[var(--color-purple)]">Outcome:</span> {selectedProject.learnings}
                  </div>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#111118]/70 p-4 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} className="max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[0_30px_80px_rgba(17,17,24,0.2)]">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-soft-purple)] px-6 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-purple)]">Certificate</p>
                  <h3 className="mt-1 text-xl font-semibold text-[var(--color-dark)]">{selectedCertificate.title}</h3>
                </div>
                <button onClick={() => setSelectedCertificate(null)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-dark)]">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,#fafafa,#f1f5ff)] p-2">
                  <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate issued by ${selectedCertificate.issuer}`} className="max-h-[55vh] w-full rounded-[1.1rem] object-contain" />
                </div>

                <div className="space-y-3 text-sm text-[var(--color-muted)]">
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-[var(--color-offwhite)] p-3"><span>Issuer</span><strong className="text-[var(--color-dark)]">{selectedCertificate.issuer}</strong></div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-[var(--color-offwhite)] p-3"><span>Date</span><strong className="text-[var(--color-dark)]">{selectedCertificate.date}</strong></div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-[var(--color-offwhite)] p-3"><span>Status</span><strong className="text-[var(--color-dark)]">{selectedCertificate.type}</strong></div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button onClick={() => setSelectedCertificate(null)} className="flex-1 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-dark)]">Close</button>
                  <a href={selectedCertificate.image} target="_blank" rel="noreferrer noopener" className="flex-1 rounded-full bg-[var(--color-purple)] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[var(--color-purple-dark)]">Open Certificate</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </MotionConfig>
  )
}

export default App
