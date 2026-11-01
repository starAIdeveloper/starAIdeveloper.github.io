# starAIdeveloper — Engineering Portfolio

Source for the public portfolio at https://starAIdeveloper.github.io/.

The website presents **38 project profiles** across computer vision, AI software, robotics, sports technology, industrial vision, CAD/BIM and interactive games.

## Featured project repositories

| Project | What the README documents | Source |
| --- | --- | --- |
| SportsVision | Fixed-camera tracks, planar calibration, occupancy heatmaps and manual events | [SportVision](https://github.com/starAIdeveloper/SportVision) |
| Video Synopsis System | Motion-based synopsis and activity reels, event search, review exports | [Video-Synopsis-System](https://github.com/starAIdeveloper/Video-Synopsis-System) |
| Baseball Analysis | OpenCV candidate detection, manual image-plane pitch review and annotated video exports | [Baseball-Analysis](https://github.com/starAIdeveloper/Baseball-Analysis) |
| VirtualTour Studio | 360° viewer, scene/hotspot editor and navigation map | [VirtualTour](https://github.com/starAIdeveloper/VirtualTour) |
| ToothAssist CV | Local dental imaging filters, patient records and reports | [ToothAssist](https://github.com/starAIdeveloper/ToothAssist) |
| X-Ray 3D Reconstruction | Parallel-beam reconstruction, synthetic volume views and mesh export | [X-Ray](https://github.com/starAIdeveloper/X-Ray) |
| 3D-BIM Desktop | Python/PySide6 architectural concept editor | [3D-BIM](https://github.com/starAIdeveloper/3D-BIM) |
| 3D Reconstruction Workbench | Calibrated sparse two-view reconstruction and PLY point cloud | [3D-Reconstruction](https://github.com/starAIdeveloper/3D-Reconstruction) |
| Coastline Rush | Three.js stylized arcade racing game | [ThreeJS-Racing-Game](https://github.com/starAIdeveloper/ThreeJS-Racing-Game) |
| Scene Reconstruction Studio | Image-to-world workspace and spatial preview workflow | [SceneReconstruction](https://github.com/starAIdeveloper/SceneReconstruction) |
| TurnORA | Vacation rental cleaning operations prototype | [TurnORA](https://github.com/starAIdeveloper/TurnORA) |
| Hunting Boat | Unity 6 source project for a fishing and boating game | [Hunting-Boat](https://github.com/starAIdeveloper/Hunting-Boat) |
| Three.js Game Skills | Agent skills/tooling to build and test Three.js games | [ThreeJS-Game](https://github.com/starAIdeveloper/ThreeJS-Game) |
| Turnpoint | Public showcase of short-term rental operations software | [turnpoint](https://github.com/starAIdeveloper/turnpoint) |

Additional showcased concepts and projects appear on the website. Some codebases reference upstream third-party open-source projects. Inclusion does **not** imply that all original code or designs were authored by the portfolio owner. Read individual READMEs for actual scope and limitations.

## Portfolio functionality

- Responsive dark-theme design
- Searchable project catalog with filters and project detail dialogs
- Project-specific descriptions and technology tags
- Links to source repositories where available
- Screenshot thumbnails sourced from versioned public GitHub repository paths
- Implementation notes distinguishing tested functionality, demonstrations and research references

The homepage draws from the static `projects.js` catalog. Updating a project README **does not automatically update the portfolio**; corresponding project data must also be reviewed and edited.

## Run locally

No build dependencies are required.

```bash
python -m http.server 8000
```

Then open http://localhost:8000/.

## GitHub Pages publishing

1. In repository **Settings → Pages**, choose **Deploy from a branch**.
2. Choose **main**, **/(root)** and **Save**.
3. The site will be published at https://starAIdeveloper.github.io/ after deployment.

## Custom domain

Once a domain is purchased and its exact name is known, add it under **Settings → Pages → Custom domain** and configure DNS with the domain registrar. Do not create a `CNAME` file using an unconfirmed domain name.

## Files

- `index.html`: homepage, navigation, expertise and contact content
- `style.css`: layout and responsive design
- `projects.js`: current 38-project catalog, verified screenshot paths and repository links
- `app.js`: search, category filters, project dialogs and mobile navigation
- `favicon.svg`: site icon
- `.nojekyll`: serve files directly using GitHub Pages

**Project accuracy:** Metrics and diagrams supplied in the underlying design references should not be represented as production benchmarks unless validated. Some repositories are local demonstrations, others are prototypes or upstream open-source references. Refer to each linked README for distinctions.
