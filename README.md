# starAIdeveloper Portfolio

Source for the portfolio website at https://starAIdeveloper.github.io/.

## Deploy

1. In GitHub repository Settings → Pages, choose **Deploy from a branch**.
2. Select branch **main** and folder **/(root)**, then save.
3. The site will be published at `https://starAIdeveloper.github.io/` after GitHub Pages finishes deployment.

## Custom domain

If you own a domain, set it under Settings → Pages → Custom domain and configure matching DNS with your domain registrar. Do not add a CNAME file until the actual domain is known.

## Site files

- `index.html`: homepage layout and content
- `style.css`: responsive dark theme
- `projects.js`: 34 projects and image links to public GitHub repository screenshots when available
- `app.js`: project search, filtering, dialogs, mobile navigation
- `favicon.svg`: site icon

To preview locally, run `python -m http.server 8000` and open `http://localhost:8000`.

Note: the portfolio contains project concepts and visual demonstrations supplied by the portfolio owner. Repository screenshots are hosted by their individual GitHub repositories. Validate project attribution, features and public contact details before sharing professionally.
