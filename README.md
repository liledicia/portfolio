# Portfolio — Chengxi Li (Lédicia)

Personal portfolio site. Bilingual (EN / 中). Radial-tree layout with click-to-expand panels.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- react-simple-maps (travel world map)

## Dev

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # production build → dist/
```

## Structure

```
src/
├── App.tsx                   # root, switches desktop tree vs mobile accordion
├── i18n/context.tsx          # EN/中 language toggle context
├── data/
│   ├── branches.ts           # 7 branch nodes config (label, angle, color)
│   └── content.ts            # all bilingual content (about, exp, projects, …)
├── components/
│   ├── RadialTree.tsx        # desktop layout: center + branches + SVG lines
│   ├── CenterNode.tsx        # avatar + name + tagline
│   ├── BranchNode.tsx        # one branch button
│   ├── ExpandedPanel.tsx     # click-to-expand modal
│   ├── MobileAccordion.tsx   # mobile fallback
│   └── sections/             # content for each branch
└── index.css                 # tailwind + global styles
```

## Deploy

Pushed to `main` → Vercel auto-builds and ships. Preview URLs are generated for every branch.
