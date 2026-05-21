export type BranchId = "about" | "experience" | "projects" | "skills";

export interface Branch {
  id: BranchId;
  labelEn: string;
  labelZh: string;
  icon: string;
  angle: number; // degrees, 0 = right, -90 = top
  color: string;
}

// 4 main branches, evenly distributed. 360/4 = 90°, starting at -135° (top-left).
// Order chosen so the most "impressive" content (experience, projects) lands on the right side
// where the eye lands first after avatar.
export const BRANCHES: Branch[] = [
  { id: "about",      labelEn: "About",      labelZh: "关于我", icon: "✦", angle: -135, color: "#0ea5e9" },
  { id: "experience", labelEn: "Experience", labelZh: "实习经历", icon: "◆", angle: -45,  color: "#0284c7" },
  { id: "projects",   labelEn: "Projects",   labelZh: "项目",   icon: "▲", angle: 45,   color: "#38bdf8" },
  { id: "skills",     labelEn: "Skills",     labelZh: "技能",   icon: "●", angle: 135,  color: "#7dd3fc" },
];
