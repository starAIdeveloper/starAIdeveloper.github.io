(() => {
  "use strict";
  const projects = window.PORTFOLIO_PROJECTS || [];
  document.getElementById("project-total").textContent = projects.length;
  const grid = document.getElementById("project-grid");
  const search = document.getElementById("project-search");
  const more = document.getElementById("load-more");
  const dialog = document.getElementById("project-dialog");
  const dialogContent = document.getElementById("dialog-content");
  let category = "all", query = "", visible = 9;

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function(char) {
      return {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[char];
    });
  }

  function render() {
    const matches = projects.filter(function(project) {
      const inCategory = category === "all" || project.category === category;
      const term = [project.name, project.description].concat(project.tags).join(" ").toLowerCase();
      return inCategory && term.includes(query);
    });
    grid.innerHTML = matches.slice(0, visible).map(function(project) {
      return '<article class="project-card">' +
        '<div class="project-cover"><img src="' + esc(project.image) + '" alt="' + esc(project.name) +
        ' project image" loading="lazy" decoding="async"></div>' +
        '<div class="project-card-body">' +
        '<div class="project-card-meta">' + esc(project.categoryLabel) + ' / ' + String(project.id).padStart(2, "0") + '</div>' +
        '<h3>' + esc(project.name) + '</h3><p>' + esc(project.description) + '</p>' +
        '<div class="tags">' + project.tags.slice(0,3).map(t => '<span>' + esc(t) + '</span>').join("") + '</div>' +
        '<div class="project-card-footer"><button type="button" data-project="' + project.id + '">View gallery ↗</button>' +
        '<a href="' + esc(project.repo) + '" target="_blank" rel="noopener noreferrer">Repository ↗</a></div>' +
        '</div></article>';
    }).join("");
    document.getElementById("empty").hidden = matches.length !== 0;
    more.hidden = visible >= matches.length;
    document.getElementById("result-count").textContent = "Showing " + Math.min(visible, matches.length) + " of " + matches.length + " projects";
  }

  document.querySelectorAll(".filter").forEach(function(button) {
    button.addEventListener("click", function() {
      category = button.dataset.filter;
      visible = 9;
      document.querySelectorAll(".filter").forEach(function(item) {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", selected ? "true" : "false");
      });
      render();
    });
  });
  search.addEventListener("input", function() {
    query = search.value.trim().toLowerCase();
    visible = 9;
    render();
  });
  more.addEventListener("click", function() { visible += 9; render(); });

  grid.addEventListener("click", function(event) {
    const button = event.target.closest("[data-project]");
    if (!button) return;
    const project = projects.find(p => p.id === Number(button.dataset.project));
    if (!project) return;
    const gallery = project.gallery && project.gallery.length ? project.gallery :
      [{url:project.image, title:project.name, kind:"Repository image"}];
    const initial = gallery[0];
    const thumbnails = gallery.map(function(image, index) {
      return '<button type="button" class="gallery-thumb' + (index === 0 ? ' selected' : '') +
        '" data-slide="' + index + '" aria-label="Show ' + esc(image.title) +
        '" aria-pressed="' + (index === 0 ? 'true' : 'false') + '">' +
        '<img src="' + esc(image.url) + '" alt="" loading="lazy"></button>';
    }).join("");
    dialogContent.innerHTML =
      '<div class="gallery-main">' +
      '<img id="gallery-current" src="' + esc(initial.url) + '" alt="' + esc(initial.title) + '">' +
      '<div class="gallery-caption" id="gallery-caption">' + esc(initial.title) +
      ' <span class="gallery-kind">' + esc(initial.kind) + '</span></div></div>' +
      '<div class="dialog-body"><p class="project-card-meta">' + esc(project.categoryLabel) + '</p>' +
      '<h2>' + esc(project.name) + '</h2><p>' + esc(project.description) + '</p>' +
      '<div class="tags">' + project.tags.map(t => '<span>' + esc(t) + '</span>').join("") + '</div>' +
      (project.note ? '<p class="project-note">' + esc(project.note) + '</p>' : '') +
      '<a class="readme-link" href="' + esc(project.repo + '#readme') + '" target="_blank" rel="noopener noreferrer">View project README ↗</a>' +
      '<div class="gallery-heading">Project images <small>' + gallery.length + ' verified file' +
      (gallery.length === 1 ? '' : 's') + '</small></div>' +
      '<div class="gallery-thumbs" role="group" aria-label="Select project image">' + thumbnails + '</div>' +
      '<a class="dialog-repo-link" href="' + esc(project.repo) + '" target="_blank" rel="noopener noreferrer">View GitHub repository ↗</a></div>';
    dialog.showModal();
    dialogContent.querySelectorAll("[data-slide]").forEach(function(thumb) {
      thumb.addEventListener("click", function() {
        const index = Number(thumb.dataset.slide);
        const selection = gallery[index];
        const image = document.getElementById("gallery-current");
        image.src = selection.url;
        image.alt = selection.title;
        const caption = document.getElementById("gallery-caption");
        caption.textContent = selection.title + " — " + selection.kind;
        dialogContent.querySelectorAll("[data-slide]").forEach(function(other) {
          const active = other === thumb;
          other.classList.toggle("selected", active);
          other.setAttribute("aria-pressed", active ? "true" : "false");
        });
      });
    });
  });
  document.getElementById("close-dialog").addEventListener("click", function() { dialog.close(); });
  dialog.addEventListener("click", function(event) { if (event.target === dialog) dialog.close(); });
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("mobile-nav");
  toggle.addEventListener("click", function() {
    nav.hidden = !nav.hidden;
    toggle.setAttribute("aria-expanded", nav.hidden ? "false" : "true");
  });
  nav.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() {
      nav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    });
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
