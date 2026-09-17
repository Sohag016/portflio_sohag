# Sohag's Portfolio — Project Structure

```
portfolio/
├── index.html                     # Main page (content/design unchanged)
├── a1.css                         # Original stylesheet (unchanged)
├── skills.json                    # Skills list (used by assets/js/script.js)
├── projects.json                  # Project list (used by the filter script in index.html)
├── README.md                      # This file
└── assets/
    ├── css/
    │   └── responsive-fixes.css   # NEW — small mobile safety-net, adds fixes only
    ├── js/
    │   ├── app.js                 # particles.js config
    │   ├── script.js              # nav, scroll-spy, typed.js, skills loader, form
    │   └── particles.min.js       # particles.js library (was "particles_min.js")
    ├── images/
    │   ├── projects/              # put project thumbnails here (see projects.json "image")
    │   └── educat/                # education/certificate images referenced in index.html
    └── certificates/              # certificate images referenced in index.html
```

## What was changed
- **Organized files** into `assets/css`, `assets/js`, `assets/images`, `assets/certificates`
  to match the paths `index.html` already expects (e.g. `./assets/js/app.js`).
- **Renamed** `particles_min.js` → `assets/js/particles.min.js` (the page was loading
  `./assets/js/particles.min.js`, so the old filename would have 404'd).
- **Removed a duplicate `<script>` tag** that loaded `script.js` twice.
- **Removed dead/broken code** in `script.js` that targeted `#work .box-container`
  (an element that no longer exists — the real project cards are rendered by the
  filter script already inside `index.html`). This was throwing a console error
  and doing nothing visible.
- **Removed `404.js`** — it wasn't linked from `index.html` (no `404.html` was
  provided either), so it was unused dead weight.
- **Added `assets/css/responsive-fixes.css`** — a small, additive stylesheet
  (linked right after `a1.css`) that fixes mobile-specific issues: horizontal
  overflow from decorative background blobs, oversized headings on small
  phones, and section padding on very small screens. It does not change your
  existing design — it only adds missing mobile fixes on top of it.

## What you still need to add
This upload didn't include any image/certificate files, so drop your existing
images into the folders above using the same filenames referenced in
`index.html` / `projects.json` (e.g. `assets/images/hero.png`,
`assets/images/profile2.jpg`, `assets/images/logo.png`,
`assets/images/projects/<name>.png`, `assets/certificates/*.jpg`).

## Notes
- `projects.json` and `skills.json` stay at the project root because that's
  what the fetch calls in `index.html` / `script.js` expect.
- The site design, sections, and content are otherwise unchanged.
