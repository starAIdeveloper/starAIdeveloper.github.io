# starAIdeveloper portfolio

Live site: https://starAIdeveloper.github.io/

## README image refresh

The portfolio showcases 20 projects with 76 gallery images selected from their current README files. Reference galleries take priority when provided. All selected files were checked against their repository trees.

- Refreshed hero, project covers, galleries and six category visuals.
- Removed the previous category illustration assets.
- Full-size images use contain sizing to keep desktop interface details visible.
- Search, category filters, load more, and image gallery controls are retained.
- Project notes distinguish reference artwork, running applications and upstream codebases.

## Project image sources

| Project | README | Gallery images |
| --- | --- | --- |
| SportsVision | [README](https://github.com/starAIdeveloper/SportVision#readme) | 4 |
| Video Synopsis System | [README](https://github.com/starAIdeveloper/Video-Synopsis-System#readme) | 5 |
| Baseball Analysis | [README](https://github.com/starAIdeveloper/Baseball-Analysis#readme) | 5 |
| VirtualTour Studio | [README](https://github.com/starAIdeveloper/VirtualTour#readme) | 5 |
| ToothAssist CV | [README](https://github.com/starAIdeveloper/ToothAssist#readme) | 6 |
| X-Ray 3D Reconstruction | [README](https://github.com/starAIdeveloper/X-Ray#readme) | 5 |
| 3D-BIM Desktop | [README](https://github.com/starAIdeveloper/3D-BIM#readme) | 3 |
| 3D Reconstruction Workbench | [README](https://github.com/starAIdeveloper/3D-Reconstruction#readme) | 1 |
| Coastline Rush | [README](https://github.com/starAIdeveloper/ThreeJS-Racing-Game#readme) | 5 |
| Scene Reconstruction | [README](https://github.com/starAIdeveloper/SceneReconstruction#readme) | 1 |
| Hunting Boat | [README](https://github.com/starAIdeveloper/Hunting-Boat#readme) | 4 |
| CloudES | [README](https://github.com/starAIdeveloper/CloudES#readme) | 4 |
| Pascal CAD Editor | [README](https://github.com/starAIdeveloper/cad-editor#readme) | 6 |
| VibeRadiant | [README](https://github.com/starAIdeveloper/VibeRadiant#readme) | 1 |
| openQ4 | [README](https://github.com/starAIdeveloper/openQ4#readme) | 5 |
| SpeedBreaker | [README](https://github.com/starAIdeveloper/speedbreaker#readme) | 9 |
| Medical-SAM3 | [README](https://github.com/starAIdeveloper/Medical-SAM3#readme) | 1 |
| MIP Candy | [README](https://github.com/starAIdeveloper/MIPCandy#readme) | 1 |
| TorchXRayVision | [README](https://github.com/starAIdeveloper/torchxrayvision#readme) | 4 |
| Clips Kitty | [README](https://github.com/starAIdeveloper/clips-studio#readme) | 1 |

## Selection rules

Use useful project visuals referenced by the current README and committed in the corresponding repository. Exclude badges, avatars, sponsor graphics and logo-only entries. Remove duplicate image paths. When a README includes a supplied reference gallery, use that gallery rather than older application screenshots.

The following entries were removed from the showcase because their current README did not provide a suitable committed project visual: VibeStudio, Quake2-Gladiator-Bot, openMVS, ThreeJS-Game. No project repositories were changed.

`image-sources.json` records the source README, image paths and verified blob hashes. `projects.js` contains the display catalog. Image references are a reviewed snapshot, not a live GitHub API dependency.

## Files and local preview

- `index.html`: homepage and category visuals
- `style.css`: responsive layout and gallery styling
- `projects.js`: README-derived image catalog and project notes
- `app.js`: search, filters, navigation and gallery interactions
- `image-sources.json`: image provenance

Run `python -m http.server 8000` and open http://localhost:8000/.

## Publishing

GitHub Pages serves the root of the `main` branch. Changes are published through the existing Pages workflow. Check the repository Actions page for deployment status.
