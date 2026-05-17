export type BranchId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "languages"
  | "travel"
  | "volunteer";

export interface Branch {
  id: BranchId;
  labelEn: string;
  labelZh: string;
  icon: string;
  angle: number; // degrees, 0 = right, -90 = top, clockwise +
  color: string; // accent color for this branch
}

// 7 branches distributed around the center. Start at top (-90°), 360/7 ≈ 51.43°
// Reorder so heavy/important sections take prominent positions.
export const BRANCHES: Branch[] = [
  { id: "about",      labelEn: "About",      labelZh: "关于我",     icon: "✦", angle: -90,   color: "#0ea5e9" },
  { id: "experience", labelEn: "Experience", labelZh: "经历",       icon: "◆", angle: -38.57, color: "#0284c7" },
  { id: "projects",   labelEn: "Projects",   labelZh: "作品",       icon: "▲", angle: 12.86,  color: "#38bdf8" },
  { id: "skills",     labelEn: "Skills",     labelZh: "技能",       icon: "●", angle: 64.29,  color: "#7dd3fc" },
  { id: "languages",  labelEn: "Languages",  labelZh: "语言",       icon: "✿", angle: 115.71, color: "#0ea5e9" },
  { id: "travel",     labelEn: "Travel",     labelZh: "旅行",       icon: "✈", angle: 167.14, color: "#0284c7" },
  { id: "volunteer",  labelEn: "Volunteer",  labelZh: "志愿者",     icon: "♥", angle: -141.43, color: "#38bdf8" },
];
