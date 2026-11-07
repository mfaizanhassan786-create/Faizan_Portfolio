/**
 * Featured projects.
 *
 * IMPORTANT: only add `links.github` or `links.live` when a real, public URL exists.
 * Empty strings hide the corresponding button — nothing is invented.
 * `visual` selects the generated abstract artwork: 'vision' | 'api' | 'workflow'.
 */
export const projects = [
  {
    id: 'isop',
    number: '01',
    title: 'iSOP — Industrial Safety AI',
    shortTitle: 'iSOP',
    category: 'Artificial Intelligence / Computer Vision',
    summary: 'Computer-vision-based PPE detection concept for industrial safety monitoring.',
    description:
      'An industrial safety monitoring prototype focused on computer-vision-based Personal Protective Equipment (PPE) detection. The project explores how AI-powered visual analysis can support workplace safety monitoring and identify potential compliance gaps in industrial environments.',
    stack: ['Computer Vision', 'PPE Detection', 'AI Architecture', 'Safety Monitoring'],
    focus: [
      'Computer Vision',
      'PPE Detection',
      'AI System Architecture',
      'Technical Gap Analysis',
      'Detection Workflow Design',
      'Industrial Safety Monitoring',
    ],
    highlight:
      'The project emphasises understanding technical requirements, evaluating system architecture, identifying implementation gaps, and designing a practical AI-based monitoring approach.',
    visual: 'vision',
    links: {
      github: '',
      live: '',
    },
    detail: {
      overview:
        'iSOP is a prototype concept for an industrial safety layer that analyses camera frames to detect whether required protective equipment is present. It is framed as a monitoring and review aid: the system highlights where compliance looks uncertain so a human can inspect it, rather than replacing a safety officer.',
      problem:
        'Industrial environments depend on protective equipment being worn consistently, but manual supervision across multiple zones is difficult to sustain. Visual checks are periodic, inconsistent between observers, and produce very little structured data that could be reviewed afterwards. The question the project works through is how a computer-vision pipeline could be positioned as a reliable, low-friction supporting tool in that environment.',
      approach: [
        'Defined the monitoring scope: which zones are observed, what counts as a compliance gap, and who acts on an alert.',
        'Evaluated detection architecture options and how PPE classes would be represented in the pipeline.',
        'Mapped the detection workflow from frame capture through inference to a reviewable result.',
        'Documented technical gaps — lighting, occlusion, camera placement, class imbalance — that would affect real-world accuracy.',
        'Outlined how findings would be surfaced for human review instead of being treated as an automatic verdict.',
      ],
      architecture: [
        {
          step: '01',
          title: 'Frame capture',
          text: 'Camera input is normalised into a consistent frame size so downstream detection steps receive predictable data.',
        },
        {
          step: '02',
          title: 'Detection model',
          text: 'A computer-vision model locates people and protective equipment, producing regions with class labels and confidence scores.',
        },
        {
          step: '03',
          title: 'Compliance logic',
          text: 'Detected items are associated with each person and compared against the required equipment set for that zone.',
        },
        {
          step: '04',
          title: 'Review layer',
          text: 'Flagged frames are surfaced with confidence context so a human reviewer decides what action, if any, is needed.',
        },
      ],
      challenges: [
        {
          title: 'Environmental variability',
          text: 'Dust, low light, motion blur and occlusion all degrade visual detection. The design has to acknowledge those limits instead of assuming clean footage.',
        },
        {
          title: 'False positives cost trust',
          text: 'In a safety context, noisy alerts get ignored quickly. Thresholds and human review matter as much as raw model accuracy.',
        },
        {
          title: 'Requirement clarity',
          text: 'A compliance gap only means something when the required equipment per zone is defined precisely — that specification turned out to be the core engineering problem.',
        },
      ],
      learnings: [
        'A computer-vision feature is a system, not a model: capture, inference, decision and review all need design.',
        'Documenting technical gaps early keeps later implementation honest and focused.',
        'Safety-adjacent AI should assist human judgement, and its outputs must be reviewable.',
      ],
    },
  },
  {
    id: 'flight-management',
    number: '02',
    title: 'Flight Management System',
    shortTitle: 'Flight Management',
    category: 'Backend Development / API Engineering',
    summary: 'Structured FastAPI backend exploring relational data and REST API design.',
    description:
      'A structured flight management backend designed to explore the engineering principles behind modern flight-related information systems. The project focuses on building organized REST APIs, managing relational data, and implementing reliable backend business logic.',
    stack: ['Python', 'FastAPI', 'REST APIs', 'Relational Data', 'Validation'],
    focus: [
      'Python',
      'FastAPI',
      'REST API Architecture',
      'Relational Database Management',
      'Data Validation',
      'Backend Business Logic',
      'API Documentation',
    ],
    highlight:
      'The emphasis is on maintainable architecture, structured database relationships, clear API design, and reliable data handling.',
    visual: 'api',
    links: {
      github: '',
      live: '',
    },
    detail: {
      overview:
        'A backend service that models flight-related information — flights, routes, airports and bookings — behind a documented REST API. The project is an exercise in structure: separating request handling, validation, business logic and persistence so each layer has one clear responsibility.',
      problem:
        'Flight information is highly relational and easy to model badly. Flat tables, duplicated values and logic mixed into request handlers make a backend difficult to extend and risky to change. The project addresses that by treating schema relationships and API contracts as first-class design decisions.',
      approach: [
        'Modelled entities and relationships first — flights, routes, aircraft references and passenger bookings.',
        'Separated request schemas from database models so validation stays explicit at the API boundary.',
        'Defined REST endpoints around resources, with consistent status codes and predictable error responses.',
        'Kept business rules in a dedicated layer instead of embedding them in route handlers.',
        'Documented the API so consumers can explore endpoints and payloads without reading the implementation.',
      ],
      architecture: [
        {
          step: '01',
          title: 'API layer',
          text: 'FastAPI routes accept requests, apply request validation, and delegate immediately to the service layer.',
        },
        {
          step: '02',
          title: 'Validation',
          text: 'Typed request schemas reject malformed payloads before any business logic runs.',
        },
        {
          step: '03',
          title: 'Business logic',
          text: 'Rules such as seat availability and scheduling constraints live in service functions, independent from HTTP concerns.',
        },
        {
          step: '04',
          title: 'Persistence',
          text: 'A relational schema stores entities with explicit relationships, queried through a single data-access path.',
        },
        {
          step: '05',
          title: 'Documentation',
          text: 'Auto-generated API documentation stays in sync with the implemented contracts.',
        },
      ],
      challenges: [
        {
          title: 'Schema design decisions',
          text: 'Choosing how to represent schedules, route segments and bookings required thinking about queries up front rather than normalising blindly.',
        },
        {
          title: 'Keeping layers honest',
          text: 'It is easy to let validation and business rules blur into route handlers; the structure has to be maintained deliberately.',
        },
        {
          title: 'Error consistency',
          text: 'A predictable error shape across all endpoints matters more than any single endpoint being clever.',
        },
      ],
      learnings: [
        'A clean separation between request schemas, services and persistence makes a backend far easier to reason about.',
        'API contracts should be designed before implementation, not documented afterwards.',
        'Relational modelling is a design activity: the schema shapes what the application can do later.',
      ],
    },
  },
  {
    id: 'document-agent',
    number: '03',
    title: 'AI Document Processing Agent',
    shortTitle: 'Document Agent',
    category: 'AI Automation / Workflow Engineering',
    summary: 'n8n workflow that turns document content into structured JSON output.',
    description:
      'An intelligent document-processing workflow designed to automate the extraction and organization of information from PDFs and other documents. Using n8n and AI-powered processing, the system explores converting unstructured document content into structured JSON outputs.',
    stack: ['n8n', 'AI Integration', 'PDF Processing', 'JSON Output', 'Orchestration'],
    focus: [
      'n8n Automation',
      'AI Integration',
      'PDF Processing',
      'Information Extraction',
      'Structured JSON',
      'Workflow Orchestration',
      'Data Transformation',
    ],
    highlight:
      'The workflow shows how automation can reduce repetitive manual tasks and improve document-processing efficiency.',
    visual: 'workflow',
    links: {
      github: '',
      live: '',
    },
    detail: {
      overview:
        'A workflow built in n8n that ingests documents, extracts their text, and uses AI-assisted processing to return consistent, structured JSON. The goal is to turn a manual read-and-retype task into a repeatable pipeline whose output can be stored or passed to another system.',
      problem:
        'Documents arrive as unstructured content: inconsistent layouts, mixed formatting and no reliable field boundaries. Manually pulling the same details out of every document is slow, repetitive and inconsistent between runs. The project explores a pipeline that produces the same shape of output every time, regardless of how the source document is formatted.',
      approach: [
        'Defined the target JSON schema first so the extraction target was unambiguous.',
        'Built the ingestion step: receive a file, validate it, and extract readable text from the PDF.',
        'Added an AI processing step with a prompt constrained to the target schema.',
        'Normalised and validated the result before output, so malformed responses fail visibly instead of silently.',
        'Organised the workflow into distinct nodes so each stage can be tested and adjusted independently.',
      ],
      architecture: [
        {
          step: '01',
          title: 'Trigger & intake',
          text: 'The workflow starts from a document upload or watched location and validates file type before processing.',
        },
        {
          step: '02',
          title: 'Text extraction',
          text: 'PDF content is converted into clean text, stripping layout noise that would confuse extraction.',
        },
        {
          step: '03',
          title: 'AI extraction',
          text: 'A constrained prompt asks for values that match the target schema, returning structured data rather than prose.',
        },
        {
          step: '04',
          title: 'Normalisation',
          text: 'Fields are trimmed, typed and checked against the schema so downstream consumers receive predictable JSON.',
        },
        {
          step: '05',
          title: 'Output',
          text: 'The structured result is returned for storage or handed to the next system in the chain.',
        },
      ],
      challenges: [
        {
          title: 'Schema drift',
          text: 'Unconstrained model output tends to vary between runs. Fixing the schema and validating against it was the difference between a demo and something reusable.',
        },
        {
          title: 'Messy document text',
          text: 'Extracted text carries headers, footers and line breaks that are not part of the actual information, so cleaning has to happen before extraction.',
        },
        {
          title: 'Failures must be visible',
          text: 'An automation that quietly returns half-filled JSON is worse than one that stops with a clear error.',
        },
      ],
      learnings: [
        'Workflow automation is mostly about defining contracts: input, schema and failure behaviour.',
        'Constraining AI output to a schema is the practical route to reliable structured extraction.',
        'Small, single-purpose workflow steps are far easier to debug than one large processing node.',
      ],
    },
  },
];
