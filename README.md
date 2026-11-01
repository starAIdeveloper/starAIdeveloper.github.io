# starAIdeveloper — AI & Software Engineering Portfolio

Portfolio source: **https://starAIdeveloper.github.io/**

## Current website

- **24 selected repository-backed portfolio entries**, each with a real image asset in the respective GitHub repository
- Original **six SVG illustrations** in the `Built at the intersection of vision & execution` section
- Project descriptions refreshed from linked project README files
- Full-text search, category filters and project detail modals
- Source links and scope disclaimers for prototypes, reference artwork and upstream projects
- Responsive static GitHub Pages site with no build step

## Portfolio image policy

An entry is listed only when its GitHub repository contains a usable committed image file. Project images use the literal public raw GitHub URL of the corresponding existing image in that repository. The website does **not** invent substitute screenshots for projects without images.

**Entries removed from this gallery:** previous standalone project concepts without linked image-bearing repositories, plus repositories with no suitable project image. These removals affect the portfolio catalog only; no source repositories or their files were deleted.

Some repositories contain **reference concept artwork**, rather than screenshots of the running software. Those entries are labeled in their project detail notes. Public mirrors, forks and upstream open-source codebases are identified without implying sole original authorship.

## Primary project sources

| Category | Repo | Main image |
| --- | --- | --- |
| Sports | [SportVision](https://github.com/starAIdeveloper/SportVision) | `artifacts/desktop.webp` |
| Vision | [Video-Synopsis-System](https://github.com/starAIdeveloper/Video-Synopsis-System) | `artifacts/synopsis-desktop.webp` |
| Sports | [Baseball-Analysis](https://github.com/starAIdeveloper/Baseball-Analysis) | `artifacts/desktop.webp` |
| 3D / CAD | [VirtualTour](https://github.com/starAIdeveloper/VirtualTour) | `docs/screenshots/dashboard.webp` |
| Healthcare | [ToothAssist](https://github.com/starAIdeveloper/ToothAssist) | `docs/screenshots/dashboard.webp` |
| Healthcare | [X-Ray](https://github.com/starAIdeveloper/X-Ray) | `docs/screenshots/dashboard.webp` |
| 3D / BIM | [3D-BIM](https://github.com/starAIdeveloper/3D-BIM) | `docs/screenshots/modern-villa.webp` |
| Robotics | [3D-Reconstruction](https://github.com/starAIdeveloper/3D-Reconstruction) | `docs/desktop.png` |
| Games | [ThreeJS-Racing-Game](https://github.com/starAIdeveloper/ThreeJS-Racing-Game) | `docs/desktop.png` |
| 3D | [SceneReconstruction](https://github.com/starAIdeveloper/SceneReconstruction) | `docs/walkthrough/app-walkthrough-poster.jpg` |
| Games | [Hunting-Boat](https://github.com/starAIdeveloper/Hunting-Boat) | `docs/reference/unity3d-2.png` |
| Construction | [CloudES](https://github.com/starAIdeveloper/CloudES) | `docs/reference/cloudes_personal-0.png` |

Additional included repositories are catalogued in `projects.js` (Pascal CAD Editor, VibeStudio, VibeRadiant, Q2 Gladiator Bot, openQ4, SpeedBreaker, Medical-SAM3, MIP Candy, TorchXRayVision, OpenMVS, Three.js Game Skills, and Clips Kitty).

## Category illustration assets

These are **original, lightweight vector SVGs** committed to this portfolio repository; they are separate from project thumbnails.

- `assets/expertise/vision.svg` — computer vision detection scene
- `assets/expertise/ai.svg` — connected AI agents
- `assets/expertise/robotics.svg` — robotic mapping and navigation
- `assets/expertise/3d.svg` — isometric CAD building
- `assets/expertise/stack.svg` — web application dashboard
- `assets/expertise/games.svg` — interactive game controller

## Website files

- `index.html` — homepage, project filters, expertise section and contact
- `style.css` — layout, dark color system, responsive styling
- `projects.js` — **24 verified image-backed project entries**
- `app.js` — filtering, search and project details
- `assets/expertise/*.svg` — category artwork
- `favicon.svg` — icon
- `.nojekyll` — GitHub Pages static assets

## Local preview

```bash
python -m http.server 8000
```

Open http://localhost:8000/.

## Publishing

Repository **Settings → Pages → Deploy from a branch → main → /(root)**.

The intended public address is https://starAIdeveloper.github.io/ after Pages successfully deploys. Configure a custom domain via Pages settings only once the actual owned domain is supplied.

## Maintenance

Project README changes are not automatically synchronized. To update a project, review its README and current image tree, then update `projects.js`. Keep descriptions within demonstrated or documented scope. Avoid claiming clinical accuracy, production model performance, or original authorship without evidence.
