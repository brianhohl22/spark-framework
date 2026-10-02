# SPARK site v3.2 prototype

**This folder is a visual reference only. CONTENT.md and the spec are authoritative.**

- Spec: V3_DETAILED_DESIGN.md, v3.1, kept in the author's private workspace and in the living Claude Doc (not in this repository)
- The v3.2 changes, with the open decisions, the facts to confirm, and what the public site needs from the SPARK list: [V3.2_SPEC.md](V3.2_SPEC.md)
- The feedback from the September 25 SPARK team meeting, and the change each item leads to: [FEEDBACK_MAP.md](FEEDBACK_MAP.md)
- Copy for the CMS, page by page in reading order: [CONTENT.md](CONTENT.md), generated from the pages so it always matches them
- How each block maps to Finalsite, the form embed codes, and the update routine: [HANDOFF.md](HANDOFF.md)
- Every question in each Microsoft Form: [FORMS.md](FORMS.md)
- Every fact on the site, with its source and who confirms it: [DATA_INVENTORY.md](DATA_INVENTORY.md)
- What was built, what differs from the spec, and how it was checked: [BUILD_REPORT.md](BUILD_REPORT.md)

If the HTML and CONTENT.md ever disagree, CONTENT.md and the spec win.

**What v3.2 changed:** equal Home doors, in the order of the loop. On Our programs, a "not offered yet" note, key dates, and Status, Contact, and Recognition fields in each theme. Phase lists for the studies, and ideas counted by theme. A SPARK topic on Let's Talk for comments, a status check for submitters, and an "Other" theme for ideas. Details are in [V3.2_SPEC.md](V3.2_SPEC.md).

## What is here

| File | What it is |
| --- | --- |
| index.html | Home |
| working-on.html | What we're working on |
| programs.html | Our programs |
| share.html | Share an idea |
| how-it-works.html | How SPARK works |
| spark.css | The only stylesheet; all styling lives here |
| assets/logo.svg | SPARK logo, used in the prototype header |
| assets/logo.png | SPARK logo as PNG (512 x 512, transparent), for the CMS |
| assets/cycle.png | The five-step idea cycle; its text version is on how-it-works.html |
| assets/spark-work.png | SPARK's two parts of work; its text version is on how-it-works.html |

Five static pages with real links between them. There is no build step and no include system: the header, banner, and footer are copied into every page. Accordions are native `details` and `summary` elements. The only JavaScript is `gate.js`, the preview's access code; it is not part of the site and stays out of the Finalsite build. The four public forms are placeholders until they are built in Microsoft Forms.

## Viewing it

Open index.html in a browser, or serve the `docs/` folder with any static server, for example `python -m http.server` run from `docs/`, then go to http://localhost:8000/v3/. The published preview is at https://brianhohl22.github.io/spark-framework/v3/.

Every page has `noindex, nofollow`. The preview is unlisted and asks for an access code, which the SPARK team has. The code only discourages casual visitors: the files are readable in the public repository.
