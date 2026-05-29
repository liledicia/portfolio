# Chengxi Li — Product & Growth Portfolio

Professional portfolio for Chengxi Li, positioned around AI product, growth operations, front-end prototyping, and technical projects.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- Framer Motion

## Dev

```bash
npm install
npm run dev
npm run build
```

## Content Editing

Most portfolio content lives in:

```text
src/data/content.ts
```

Update `profile`, `caseStudies`, `experienceItems`, `skillGroups`, and `languages` there to change copy, links, and future case study details.

The resume CTA points to:

```text
public/assets/chengxi-li-resume.pdf
```

Replace that file when a new resume is ready.

## Structure

```text
src/
├── App.tsx
├── data/content.ts
├── components/
│   ├── Layout.tsx
│   ├── Hero.tsx
│   ├── EducationSection.tsx
│   ├── FeaturedProjects.tsx
│   ├── ProductResearchSection.tsx
│   ├── ProjectCard.tsx
│   ├── WorkPreview.tsx
│   ├── CaseStudyPanel.tsx
│   ├── ExperienceTimeline.tsx
│   ├── SkillsGrid.tsx
│   ├── AboutSection.tsx
│   └── ContactCTA.tsx
└── index.css
```
