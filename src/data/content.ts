// All bilingual content for the portfolio sections.

export const profile = {
  nameEn: "Chengxi Li",
  nameZh: "李成蹊",
  alias: "Lédicia",
  taglineEn: "CS @ Columbia · Technology, Product, etc.",
  taglineZh: "Columbia 计算机 · 技术、产品、其他",
  email: "liledicia@gmail.com",
  phone: "+1 574-301-2457",
  github: "https://github.com/liledicia",
};

export interface EducationItem {
  schoolEn: string;
  schoolZh: string;
  degreeEn: string;
  degreeZh: string;
  period: string;
  location: string;
  noteEn?: string;
  noteZh?: string;
}

export const education: EducationItem[] = [
  {
    schoolEn: "Barnard College, Columbia University",
    schoolZh: "哥伦比亚大学 Barnard College",
    degreeEn: "B.A. in Computer Science",
    degreeZh: "计算机科学 学士",
    period: "Expected Dec 2027",
    location: "New York, NY",
    noteEn: "Current — coursework in algorithms, systems, software engineering.",
    noteZh: "在读 — 算法、系统、软件工程方向。",
  },
  {
    schoolEn: "Purdue University",
    schoolZh: "普渡大学",
    degreeEn: "Aeronautics and Astronautics Engineering",
    degreeZh: "航空航天工程",
    period: "Aug 2024 – May 2025",
    location: "West Lafayette, IN",
    noteEn: "Transferred to Columbia for CS.",
    noteZh: "后转入 Columbia 攻读 CS。",
  },
];

export const about = {
  en: `I'm Chengxi Li, and you can also call me Lédicia. I'm a CS student at Barnard @ Columbia who likes building things, learning languages, and seeing the world from different perspectives.

My interests sit at the intersection of technology and product. I enjoy turning ideas into software and solving real-world problems.`,
  zh: `我是李成蹊，也可以叫我 Lédicia~ 目前就读于哥伦比亚大学 Barnard College 计算机系。我喜欢做东西、学语言，也喜欢从不同的视角看世界。

我的兴趣在技术与产品的交叉地带——把想法变成可以用的软件，解决一些真实世界里的问题。`,
};

export interface ExperienceItem {
  roleEn: string;
  roleZh: string;
  orgEn: string;
  orgZh: string;
  location: string;
  period: string;
  bulletsEn: string[];
  bulletsZh: string[];
}

export const experience: ExperienceItem[] = [
  {
    roleEn: "Software Engineering Intern",
    roleZh: "软件工程实习生",
    orgEn: "Bite Campus Eats",
    orgZh: "Bite Campus Eats",
    location: "New York, NY",
    period: "Feb 2026 – Present",
    bulletsEn: [
      "Contributed to mobile app UI/UX by defining core user flows, information architecture, and wireframes for the web-to-mobile transition.",
      "Developed core Admin Dashboard features: coupon management (creation, bulk generation, multi-dimensional filtering, targeted distribution) with serverless delivery via Supabase Edge Functions.",
      "Implemented cross-role admin views and optimized OTP-based email auth, improving permission switching, login flow, and usability.",
      "Helped split the original monorepo into separate GitHub repos (main, dashboard, notification, infra), improving maintainability.",
    ],
    bulletsZh: [
      "参与移动 App 的 UI/UX 设计，梳理核心用户流程、信息架构与线框图，支撑产品从 Web 端向 Mobile 端的过渡。",
      "迭代 Admin Dashboard 核心功能：优惠券管理（创建、批量生成、多维筛选、定向投放），通过 Supabase Edge Functions 实现 Serverless 发券逻辑。",
      "实现跨角色管理员视图，优化基于 OTP 的邮箱认证，改进权限切换、登录流与整体可用性。",
      "参与代码库模块化重构，把原来的主仓库拆分为 main / dashboard / notification / infra 四个独立仓库，提升可维护性与协作效率。",
    ],
  },
  {
    roleEn: "IT Intern",
    roleZh: "信息科技部实习生",
    orgEn: "Agricultural Bank of China · Zhengzhou Branch",
    orgZh: "中国农业银行 · 郑州分行",
    location: "Zhengzhou, China",
    period: "Jun 2025 – Aug 2025",
    bulletsEn: [
      "Optimized the PDF stamping pipeline (render → canvas → coordinate mapping → write-back), improving accuracy, performance, and exception handling.",
      "Implemented unified stamping supporting mixed seal + signature; integrated into the car-loan contract workflow and validated via joint debugging.",
    ],
    bulletsZh: [
      "优化 PDF 盖章链路（渲染 → 画布 → 坐标映射 → 回写），提升准确率、性能与异常处理能力。",
      "实现支持印章 + 签名混合盖章的统一方案，并接入车贷合同流程，与下游联调验证通过。",
    ],
  },
  {
    roleEn: "Undergraduate Research Assistant",
    roleZh: "本科生研究助理",
    orgEn: "Industrial Engineering Lab, Purdue University",
    orgZh: "普渡大学 工业工程实验室",
    location: "West Lafayette, IN",
    period: "Mar 2025 – May 2025",
    bulletsEn: [
      "Configured VR / EMG experiments and automated log processing in Python, reducing manual data entry time by ~40%.",
      "Supported experiment setup and data quality checks across 20+ sessions, improving signal reliability by ~15%.",
    ],
    bulletsZh: [
      "配置 VR / EMG 实验环境，并用 Python 自动化日志处理流程，把人工录入时间减少约 40%。",
      "参与 20+ 次实验布置与数据质量检查，把信号可靠性提升约 15%。",
    ],
  },
];

export interface Project {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  descEn: string;
  descZh: string;
  url?: string;
  iframable: boolean;
  comingSoon?: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "bite-toc",
    titleEn: "Bite Campus Eats — Web App",
    titleZh: "Bite Campus Eats — Web 端",
    subtitleEn: "Consumer-facing (toC)",
    subtitleZh: "面向用户端（toC）",
    descEn: "Main consumer web app for campus food ordering. Contributed to UI/UX during the web-to-mobile transition.",
    descZh: "面向校园用户的点餐 Web 应用主站。在 Web 转 Mobile 过程中参与 UI/UX 设计。",
    url: "https://bitecampuseats.com/",
    iframable: false,
    tags: ["React", "TypeScript", "Supabase"],
  },
  {
    id: "bite-admin",
    titleEn: "Bite — Admin Dashboard",
    titleZh: "Bite — 管理后台",
    subtitleEn: "Business-facing (toB)",
    subtitleZh: "面向商户端（toB）",
    descEn: "Internal admin portal for coupon management, multi-role views, and serverless coupon delivery via Supabase Edge Functions.",
    descZh: "内部管理后台，包含优惠券管理、多角色视图，以及基于 Supabase Edge Functions 的 Serverless 发券。",
    url: "https://dashboard.bitecampuseats.com/admin/coupons",
    iframable: false,
    tags: ["React", "Supabase", "Edge Functions"],
  },
  {
    id: "novelmind",
    titleEn: "NovelMind — Recommender System",
    titleZh: "NovelMind — 推荐系统",
    subtitleEn: "ADI CodeCollab Hackathon",
    subtitleZh: "ADI CodeCollab 黑客松",
    descEn: "Personalized recommender for Chinese web novels. Built data pipeline (Python, BeautifulSoup, pandas, SQLite) and a content-based prototype.",
    descZh: "中文网文个性化推荐系统。负责数据管线（Python、BeautifulSoup、pandas、SQLite）与基于内容的推荐原型。",
    iframable: false,
    comingSoon: true,
    tags: ["Python", "pandas", "SQLite"],
  },
  {
    id: "french-history",
    titleEn: "History of French in Québec",
    titleZh: "魁北克法语史",
    subtitleEn: "Static site (GitHub Pages)",
    subtitleZh: "静态网站（GitHub Pages）",
    descEn: "An interactive timeline-style page about the history of the French language in Québec, deployed on GitHub Pages.",
    descZh: "讲述法语在魁北克演变史的交互式静态页面，部署在 GitHub Pages。",
    url: "https://liledicia.github.io/Practice-for-Historique-Fran-aise/history.html",
    iframable: true,
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export const skills = {
  groups: [
    {
      titleEn: "Languages & Frameworks",
      titleZh: "语言与框架",
      items: ["Python", "JavaScript", "TypeScript", "Java", "React", "SQL"],
    },
    {
      titleEn: "Data & Backend",
      titleZh: "数据与后端",
      items: ["PostgreSQL", "Supabase", "Edge Functions", "pandas", "BeautifulSoup", "SQLite"],
    },
    {
      titleEn: "Tools",
      titleZh: "工具",
      items: ["Git", "GitHub", "Figma", "Vite", "Tailwind"],
    },
  ],
};

export interface LanguageRow {
  nameEn: string;
  nameZh: string;
  level: string;
  certEn?: string;
  certZh?: string;
  pdf?: string;
  flag: string;
}

export const languages: LanguageRow[] = [
  {
    nameEn: "Mandarin",
    nameZh: "中文",
    level: "Native",
    certEn: "Native speaker",
    certZh: "母语",
    flag: "🇨🇳",
  },
  {
    nameEn: "English",
    nameZh: "英语",
    level: "Fluent",
    certEn: "IELTS 7.5",
    certZh: "雅思 7.5",
    pdf: "/assets/ielts.pdf",
    flag: "🇬🇧",
  },
  {
    nameEn: "French",
    nameZh: "法语",
    level: "B2",
    certEn: "TCF B2",
    certZh: "TCF B2",
    pdf: "/assets/tcf.pdf",
    flag: "🇫🇷",
  },
];

export interface TravelCountry {
  nameEn: string;
  nameZh: string;
  iso3: string; // ISO 3166-1 alpha-3, for map matching
}

export const travel: Record<string, TravelCountry[]> = {
  Asia: [
    { nameEn: "Japan",         nameZh: "日本",         iso3: "JPN" },
    { nameEn: "South Korea",   nameZh: "韩国",         iso3: "KOR" },
    { nameEn: "Thailand",      nameZh: "泰国",         iso3: "THA" },
    { nameEn: "Indonesia",     nameZh: "印度尼西亚",   iso3: "IDN" },
    { nameEn: "United Arab Emirates", nameZh: "阿联酋", iso3: "ARE" },
  ],
  Europe: [
    { nameEn: "Germany",       nameZh: "德国",         iso3: "DEU" },
    { nameEn: "France",        nameZh: "法国",         iso3: "FRA" },
    { nameEn: "Italy",         nameZh: "意大利",       iso3: "ITA" },
    { nameEn: "Switzerland",   nameZh: "瑞士",         iso3: "CHE" },
    { nameEn: "Austria",       nameZh: "奥地利",       iso3: "AUT" },
    { nameEn: "Vatican City",  nameZh: "梵蒂冈",       iso3: "VAT" },
    { nameEn: "Denmark",       nameZh: "丹麦",         iso3: "DNK" },
    { nameEn: "Sweden",        nameZh: "瑞典",         iso3: "SWE" },
    { nameEn: "Norway",        nameZh: "挪威",         iso3: "NOR" },
    { nameEn: "Finland",       nameZh: "芬兰",         iso3: "FIN" },
  ],
  "North America": [
    { nameEn: "United States", nameZh: "美国",         iso3: "USA" },
    { nameEn: "Canada",        nameZh: "加拿大",       iso3: "CAN" },
  ],
  Africa: [
    { nameEn: "Egypt",         nameZh: "埃及",         iso3: "EGY" },
    { nameEn: "South Africa",  nameZh: "南非",         iso3: "ZAF" },
  ],
  Oceania: [
    { nameEn: "Australia",     nameZh: "澳大利亚",     iso3: "AUS" },
  ],
};

export const continentLabels: Record<string, { en: string; zh: string }> = {
  Asia: { en: "Asia", zh: "亚洲" },
  Europe: { en: "Europe", zh: "欧洲" },
  "North America": { en: "North America", zh: "北美洲" },
  Africa: { en: "Africa", zh: "非洲" },
  Oceania: { en: "Oceania", zh: "大洋洲" },
};

export interface VolunteerItem {
  titleEn: string;
  titleZh: string;
  eventEn: string;
  eventZh: string;
  period: string;
  descEn: string;
  descZh: string;
  status: "completed" | "in-progress";
}

export const volunteer: VolunteerItem[] = [
  {
    titleEn: "Volunteer",
    titleZh: "志愿者",
    eventEn: "Paris 2024 Summer Olympics",
    eventZh: "2024 巴黎夏季奥运会",
    period: "Jul – Aug 2024",
    descEn: "Served as an on-site volunteer during the Paris 2024 Olympics — supporting visitors, language assistance, and on-the-ground operations.",
    descZh: "在 2024 年巴黎奥运会担任现场志愿者，负责观众引导、语言协助与现场运营支持。",
    status: "completed",
  },
  {
    titleEn: "Volunteer (in training)",
    titleZh: "志愿者（培训中）",
    eventEn: "FIFA World Cup 2026 (USA / Canada / Mexico)",
    eventZh: "2026 国际足联世界杯（美国 / 加拿大 / 墨西哥）",
    period: "2026",
    descEn: "Selected and currently in training for the 2026 FIFA World Cup volunteer program.",
    descZh: "已入选并正在参加 2026 年国际足联世界杯志愿者培训。",
    status: "in-progress",
  },
];

export const ui = {
  en: {
    explore: "Click a branch to explore",
    close: "Close",
    visit: "Visit live",
    code: "Source",
    comingSoon: "Coming soon — currently being deployed.",
    iframeBlocked: "This site can't be embedded directly. Click below to open it in a new tab.",
    openCert: "Open certificate",
    countriesCount: "countries & regions",
    continents: "continents",
  },
  zh: {
    explore: "点击分支展开探索",
    close: "关闭",
    visit: "访问网站",
    code: "源码",
    comingSoon: "即将上线 — 部署中。",
    iframeBlocked: "该站点不支持直接嵌入预览，点击下方按钮在新标签页打开。",
    openCert: "查看证书",
    countriesCount: "个国家与地区",
    continents: "大洲",
  },
};
