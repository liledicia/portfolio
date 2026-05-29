export const profile = {
  name: "Chengxi Li",
  externalName: "Lédicia",
  title: "AI Product & Growth Builder",
  education: "Computer Science student at Barnard College, Columbia University",
  email: "liledicia@gmail.com",
  emails: [
    "liledicia@gmail.com",
    "cl4830@barnard.edu",
    "19803861212@163.com",
  ],
  phoneUS: "+1 574-301-2457",
  phoneChina: "+86 198-0386-1212",
  phones: [
    { label: "US", display: "574-301-2457", href: "tel:+15743012457" },
    { label: "CN", display: "19803861212", href: "tel:+8619803861212" },
  ],
  github: "https://github.com/liledicia",
  resumeUrl: "/assets/chengxi-li-resume.pdf",
  resumes: [
    { label: "Chinese Version", href: "" },
    { label: "English Version", href: "" },
  ],
  location: "New York, NY",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  website: string;
  logo: string;
  logoAlt: string;
  highlights: string[];
}

export const educationItems: EducationItem[] = [
  {
    school: "Barnard College, Columbia University",
    degree: "B.A. in Computer Science",
    period: "Expected May 2028",
    location: "New York, NY",
    website: "https://barnard.edu/",
    logo: "/assets/barnard-logo.png",
    logoAlt: "Barnard College logo",
    highlights: [
      "Dean's List.",
      "Relevant coursework: Intro to Computer Science / Programming in Java, Data Structures in Java, Discrete Mathematics, Intermediate Microeconomics.",
    ],
  },
  {
    school: "Purdue University",
    degree: "Prior study in Aeronautics and Astronautics Engineering",
    period: "Aug 2024 - May 2025",
    location: "West Lafayette, IN",
    website: "https://www.purdue.edu/",
    logo: "/assets/purdue-logo.png",
    logoAlt: "Purdue University logo",
    highlights: [
      "Dean's List.",
      "GPA: 3.98 / 4.00.",
    ],
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  summary: string;
  tools: string[];
  overview: string;
  problem: string;
  solution: string;
  process: string[];
  deliverables: string[];
  impact: string;
  preview: {
    kind: "landing" | "spreadsheet" | "dashboard" | "recommender";
    eyebrow: string;
    title: string;
    description: string;
    image?: string;
    detailImage?: string;
  };
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
    product?: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "bite-campus-eats-merchant-dashboard",
    title: "Bite Campus Eats Admin Portal",
    subtitle:
      "Merchant-side product and operations tools for campus food vendors",
    category: "B2B Product · Operations Dashboard · Campus Growth",
    role: "Product & Technical Intern",
    tools: [
      "React",
      "Supabase/PostgreSQL",
      "SQL",
      "Product Operations",
      "UI/UX",
    ],
    summary:
      "Supported backend operations and merchant-facing workflows for a campus food ordering platform, including coupons, merchant configuration, menu onboarding, permissions, portal views, and OTP login.",
    overview:
      "B2B admin tools that make campus food operations easier to configure, filter, and manage.",
    problem:
      "Merchant setup, coupon distribution, and admin roles required repeated manual configuration.",
    solution:
      "Turned manual workflows into clearer admin paths for coupons, menus, merchant settings, and access control.",
    process: [
      "Mapped coupon, vendor, menu, and role workflows.",
      "Built dashboard updates with React, Supabase/PostgreSQL, and SQL.",
      "Refined onboarding, OTP login, portal views, and mobile touchpoints.",
    ],
    deliverables: [
      "Coupon management",
      "Targeted distribution",
      "Vendor filtering",
      "Menu onboarding form",
      "Role-based portal views",
      "OTP login flow",
    ],
    impact:
      "Reduced setup friction and made merchant operations easier to scale.",
    preview: {
      kind: "dashboard",
      eyebrow: "Dashboard preview",
      title: "Merchant workflow",
      description: "Coupons, vendors, menu onboarding, roles, login, and mobile UI/UX.",
      image: "/assets/bite-dashboard-ui.png",
    },
    links: {
      demo: "https://dashboard.bitecampuseats.com/admin/coupons",
    },
  },
  {
    id: "novelmind-recommendation-system",
    title: "NovelMind Recommendation System",
    subtitle: "Personalized Chinese web novel recommendation prototype",
    category: "Data Product · Recommendation System · Hackathon",
    role: "Product + Data + Engineering",
    tools: [
      "Python",
      "BeautifulSoup",
      "pandas",
      "SQLite",
      "Recommendation Logic",
    ],
    summary:
      "Built a lightweight recommendation prototype for Chinese web novels using scraped metadata, SQLite storage, and preference matching.",
    overview:
      "A data-product prototype that turns web novel metadata into searchable recommendations.",
    problem:
      "Large catalogs and uneven metadata make it hard for readers to find relevant novels.",
    solution:
      "Matched users to novels through cleaned metadata, genre tags, and preference signals.",
    process: [
      "Scraped and cleaned metadata with Python, BeautifulSoup, and pandas.",
      "Stored structured records in SQLite.",
      "Designed and deployed a preference-matching demo.",
    ],
    deliverables: [
      "Metadata scraper",
      "SQLite dataset",
      "Search interface",
      "Recommendation flow",
      "Deployed demo",
    ],
    impact:
      "Built a full loop from data collection to an interactive recommendation demo.",
    preview: {
      kind: "recommender",
      eyebrow: "Data product preview",
      title: "Recommendation flow",
      description: "Scraping, metadata cleaning, SQLite storage, and preference matching.",
      image: "/assets/novelmind-main-ui.png",
      detailImage: "/assets/novelmind-detail-ui.png",
    },
    links: {
      demo: "https://novel-mind.vercel.app/",
    },
  },
  {
    id: "cuecue-beauty-landing",
    title: "CueCue Beauty Landing Page",
    subtitle: "SEO-friendly landing page for nail & lash artists",
    category: "AI Product · SEO Landing Page · Front-End Prototype",
    role: "Product Strategy · Front-End Prototype · Growth Experiment",
    tools: ["HTML/CSS", "SEO", "Prompt Design", "Vibe Coding"],
    summary:
      "Designed a vertical landing page that translates CueCue's AI card-generation concept into a clear beauty-provider use case.",
    overview:
      "A focused product and growth prototype for nail and lash artists.",
    problem:
      "CueCue's AI-card concept needed a concrete vertical use case.",
    solution:
      "Created an SEO-friendly, mobile-first landing page with clear positioning and CTAs.",
    process: [
      "Mapped discovery-to-booking user intent.",
      "Converted the scenario into SEO-aware sections and CTAs.",
      "Prototyped service cards, pricing, studio details, and a mobile mockup.",
    ],
    deliverables: [
      "Hero positioning",
      "Mobile mockup",
      "CTA hierarchy",
      "Use-case cards",
      "Pricing examples",
      "Studio info cards",
    ],
    impact:
      "Made the AI-product idea easier to explain, demo, and test.",
    preview: {
      kind: "landing",
      eyebrow: "Landing page preview",
      title: "Beauty booking page",
      description: "Hero, trust strip, mobile mockup, services, pricing, and booking CTAs.",
      image: "/assets/beauty-landing-ui.png",
    },
    links: {
      product: "https://cuecue.im/",
    },
  },
];

export interface ProductResearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  summary: string;
  methods: string[];
  artifacts: string[];
  examples: string[];
  insight: string;
  tools: string[];
  links: {
    product?: string;
  };
}

export const productResearchItems: ProductResearchItem[] = [
  {
    id: "cuecue-ai-card-prompt-system",
    title: "CueCue AI Card Prompt System",
    subtitle:
      "Prompt design and use-case testing for AI-generated mobile-first pages",
    category: "AI Product Operations · Prompt Design · Product Research",
    role: "AI Product Operations · Prompt Testing · Scenario Design",
    summary:
      "Created and tested structured prompts for AI-generated mobile-first cards across scenarios such as campus matching, event RSVP, roommate finding, housing rental, small business pages, and service booking.",
    methods: [
      "User scenario mapping",
      "Use-case segmentation",
      "Competitor and category pattern review",
      "Prompt variant testing",
      "CTA and form-field quality evaluation",
      "Product requirement analysis",
    ],
    artifacts: [
      "Scenario matrix",
      "Prompt templates",
      "Output evaluation notes",
      "CTA checklist",
      "Form-field relevance criteria",
      "PRD-style requirement notes",
    ],
    examples: [
      "Campus matching",
      "Event RSVP",
      "Roommate finding",
      "Housing rental",
      "Small business pages",
      "Service booking",
    ],
    insight:
      "Refined card outputs around CTA clarity, form-field relevance, scenario completeness, and shareability, helping translate broad AI-card concepts into testable product requirements.",
    tools: ["Prompt Engineering", "SEO/GEO", "Google Ads", "Content Strategy", "User Analysis"],
    links: {
      product: "https://cuecue.im/",
    },
  },
];

export interface ExperienceItem {
  type: "internship" | "project";
  company: string;
  role: string;
  focus: string;
  website?: string;
  logoText: string;
  period?: string;
  highlights: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    type: "internship",
    company: "SpringBrand / CueCue",
    role: "AI Product Operations / Growth / Vibe Coding",
    website: "https://cuecue.im/",
    logoText: "CQ",
    focus:
      "AI-generated cards, prompt testing, SEO/GEO, overseas growth, landing page prototyping.",
    highlights: [
      "Structured prompts and scenario tests for AI-generated mobile-first pages.",
      "Translated broad product concepts into vertical landing pages and growth experiments.",
      "Connected content strategy, search intent, and prototype design for early market testing.",
    ],
  },
  {
    type: "internship",
    company: "Bite Campus Eats",
    role: "Product & Technical Intern",
    website: "https://www.bitecampuseats.com/",
    logoText: "B",
    focus:
      "Merchant dashboard, coupon management, menu onboarding, OTP login, mobile UI/UX, campus growth.",
    highlights: [
      "Supported merchant-facing and internal operation tools for campus food vendors.",
      "Worked with React, Supabase/PostgreSQL, SQL, and product operations workflows.",
      "Improved coupon, vendor, onboarding, and role-based portal experiences.",
    ],
  },
  {
    type: "internship",
    company: "Agricultural Bank of China",
    role: "IT Intern",
    website: "https://www.abchina.com.cn/en/",
    logoText: "ABC",
    focus:
      "E-stamping workflow, customer signature and corporate seal upload, car-loan contract module, secure enterprise workflow.",
    highlights: [
      "Contributed to secure document workflow improvements for banking operations.",
      "Worked on e-stamping and upload flows involving signatures, seals, and contract modules.",
      "Gained exposure to reliability requirements in enterprise financial systems.",
    ],
  },
  {
    type: "project",
    company: "NovelMind / Columbia ADI CodeCollab",
    role: "Hackathon Project",
    logoText: "NM",
    focus:
      "Recommendation system, data scraping, cleaning, SQLite, prototype demo.",
    highlights: [
      "Built a lightweight recommendation prototype for Chinese web novels.",
      "Scraped, cleaned, and structured metadata for preference-based matching.",
      "Presented a working data-product flow under hackathon constraints.",
    ],
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Product & Growth",
    items: [
      "Product strategy",
      "User scenarios",
      "Prompt design",
      "SEO/GEO",
      "Google Ads basics",
      "Growth experiments",
      "Content strategy",
      "User research",
    ],
  },
  {
    title: "Technical",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Supabase/PostgreSQL",
      "HTML/CSS",
      "pandas",
      "SQLite",
    ],
  },
  {
    title: "Design & Prototyping",
    items: [
      "Tailwind CSS",
      "Figma/Canva basics",
      "Responsive UI",
      "Landing page design",
      "Information architecture",
      "Mobile-first design",
    ],
  },
];

export interface LanguageItem {
  name: string;
  level: string;
  strength: string;
  certificate?: string;
  certificateUrl?: string;
}

export const languages: LanguageItem[] = [
  {
    name: "Mandarin Chinese",
    level: "Native",
    strength: "Native communication across product, business, and technical contexts.",
  },
  {
    name: "English",
    level: "Fluent",
    certificate: "IELTS 7.5",
    certificateUrl: "/assets/ielts.pdf",
    strength: "IELTS 7.5. Fluent spoken communication for interviews, presentations, and team collaboration.",
  },
  {
    name: "French",
    level: "Fluent",
    certificate: "TCF B2",
    certificateUrl: "/assets/tcf.pdf",
    strength: "TCF B2. Fluent spoken communication and comfortable cross-cultural conversation.",
  },
];

export const about =
  "I'm Chengxi Li, a Computer Science student at Barnard College, Columbia University. My work sits at the intersection of AI product, growth operations, and front-end prototyping. I enjoy turning ambiguous business ideas into structured user scenarios, testable product flows, and polished digital experiences.";
