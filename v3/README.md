# SPARK site v3.1 prototype

**This folder is a visual reference only. CONTENT.md and the spec are authoritative.**

- Spec: V3_DETAILED_DESIGN.md, v3.1, kept in Brian's private workspace and in the living Claude Doc (not in this repository)
- Copy for the CMS, page by page in reading order: [CONTENT.md](CONTENT.md), generated from the pages so it always matches them
- How each block maps to Finalsite, the form embed codes, and the update routine: [HANDOFF.md](HANDOFF.md)
- Every question in each Microsoft Form: [FORMS.md](FORMS.md)
- Every fact on the site, with its source and who confirms it: [DATA_INVENTORY.md](DATA_INVENTORY.md)
- What was built, what differs from the spec, and how it was checked: [BUILD_REPORT.md](BUILD_REPORT.md)

If the HTML and CONTENT.md ever disagree, CONTENT.md and the spec win.

## What is here

| File | What it is |
| --- | --- |
| index.html | Home |
| working-on.html | What we're working on |
| programs.html | Explore options (file name kept from v3.0) |
| share.html | Share an idea |
| how-it-works.html | How SPARK works |
| spark.css | The only stylesheet; all styling lives here |
| assets/logo.svg | SPARK logo, used in the prototype header |
| assets/logo.png | SPARK logo as PNG (512 x 512, transparent), for the CMS |
| assets/cycle.png | The five-step idea cycle; its text version is on how-it-works.html |
| assets/spark-work.png | SPARK's two parts of work; its text version is on how-it-works.html |

Five static pages with real links between them. There is no JavaScript, no build step, and no include system: the header, banner, and footer are copied into every page. Accordions are native `details` and `summary` elements. Forms are placeholders until district IT creates the Microsoft Forms.

## Viewing it

Open index.html in a browser, or serve the `docs/` folder with any static server, for example `python -m http.server` run from `docs/`, then go to http://localhost:8000/v3/. The published preview is at https://brianhohl22.github.io/spark-framework/v3/.

Every page has `noindex, nofollow`. The preview is unlisted, with no password gate.
