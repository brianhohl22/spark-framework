# SPARK v3 prototype: build report

## v3.1 iteration (2026-09-23)

v3.1 applies Brian's review of v3.0, two research passes on SUSD sources, and two independent reviews. The spec's change log (Section 0) lists every change and its source. Copy marked "v3.1 draft, for Lea" in the spec needs Lea Mitchell's confirmation. Sections further down are the original v3.0 record.

**What changed, in short**
- **Facts corrected from susd.org and the June 23, 2026 Board record:**
  - study names
  - AVID, Comprehensive Gifted Program, and Dual Language sites and languages
  - Cheyenne's grades
  - SUSD's three structure labels
  - arts at every school
  - how to enroll
  - Early College
  - the studies' next step
  - Let's Talk links
- **Pages:**
  - Overviews of the two studies, linked to the public June 23 presentation, memo, meeting page, and video. No slide images.
  - "How we list ideas" replaces "How we word things." The reviews line no longer claims reviews are only about strengthening, since SUSD's own SPARK page lists "continuation or removal of program status."
  - Explore options (was Our programs) has eight themes from SUSD's public SPARK Team page, four theme rules, one accordion per theme in table order linked from the table, SUSD's three structure terms, and an "as of" line.
  - How SPARK works opens with SPARK's two parts of work (strengthen what we have; explore what's next), with a new diagram and a three-step "Strengthen what we have" section, before the five-step idea cycle.
- **Vocabulary, Brian's call:** A Governing Board member asked the team to favor "learning environments" built with communities over "program," and made the point that champions, not a website, carry ideas. The site now uses "program" only in proper names and SUSD's three structure labels. All 18 remaining uses are of that kind, on Explore options only. The site also says plainly that it keeps the record while people champion ideas: Home, What we're working on, How SPARK works (opening line, roles table with a new Champions row, glossary), and Share an idea.
- **Access code:** the GitHub Pages copy now asks for the access code (spark2026, the same code, hash, and session behavior as v2). This deviates from spec 2.2 (no password gate) and 1.1 (no JavaScript) at Brian's request. `gate.js` is preview-only: it is not content, it is not in CONTENT.md, and Steven leaves it out. It discourages casual visitors only; the files are readable in the public repository.

**Independent review**
- **Fact check, two rounds:** every fact on the pages was checked against live susd.org pages and the Board record, then re-checked after the fixes. Final result: 105 facts, 102 verified (4 of them after a v3.1 fix), 1 removed from the page, 2 Example, 0 unsourced. DATA_INVENTORY.md lists each fact with its source and who confirms it, plus 14 items to confirm before launch. All 20 external links resolve.
- **Copy audit:**
  - Every spec sentence matches the pages.
  - No vocabulary violations, sensitive names, locations, costs, or partner names.
  - Four sentences over 20 words and several jargon spots were found and fixed.

**QA (Section 10) on v3.1:**
- Nu validator: 0 errors, 0 warnings.
- axe-core: 0 violations at 375, 768, and 1280 px, with accordions closed and open.
- Tab order follows reading order; every focus stop shows the 3 px ring.
- Nothing overflows the viewport; print output fits letter size.
- The Home promise is above the fold at 375 x 667. The longer "Explore options" label first pushed the nav to three rows, so nav type is slightly smaller under 480 px.
- **Gate test:**
  - The page is hidden until the code is entered.
  - A wrong code shows an error, and the correct code unlocks the page.
  - Pages stay unlocked within the tab.
  - The gate has 0 axe violations.

**Word counts, v3.1** (copy only; ranges re-based in the spec to fit v3.1):

| Page | Words | v3.1 range |
| --- | --- | --- |
| index.html | 288 | 260 to 330 |
| working-on.html | 736 | 660 to 780 |
| programs.html | 1,017 | 900 to 1,060 |
| share.html | 574 | 560 to 660 |
| how-it-works.html | 1,036 | 1,000 to 1,150 |
| **Site total** | **3,651** | 3,300 to 3,900 |

**For Steven:** HANDOFF.md replaces the "Notes for Steven" section further down. It covers the element map, how the pieces behave, form embed codes, the update routine, and admin needs. CONTENT.md is now generated from the pages, so it always matches them.

---

## v3.0 build record (2026-09-22)

Built 2026-09-22 from `SPARK/3. Intake system/V3_DETAILED_DESIGN.md` (the spec). CONTENT.md and the spec are authoritative. The HTML is a visual reference.

What was built: five static pages, one stylesheet, and three assets, all in `docs/v3/`. No JavaScript. Every page passes the Section 10 checklist (see QA below). The build left docs/index.html, docs/v2/, and everything under SPARK/ untouched.

## Decisions on the two open items for Friday

Spec Section 13 left these open. Brian delegated both to the build.

**1. Example rows: the board shows only the two real studies.** The "Being studied now" table has two rows: Gifted and Advanced Studies Hub, and Visual and Performing Arts Academy. The spec's third row is left out: "[Example] Elementary maker lab pathway (contributing ideas: 3) · STEM · Decided: pilot". It is the only Example content that sits in the same table as real studies, and it states a decision (a pilot) the SPARK team has not made. Someone skimming the board on Friday could easily take it as real. The sentence under the table still names every stage, including Decided, so the model is still explained. With no Example row, the table caption carries no Example badge.

The other Example content stays, badged and with dashed borders: the counts strip, the two You said / We did rows, the "1 more idea is not listed" sentence, the seven "Already suggested this cycle" lines, and the three illustrative facts in the Dual Language template entry. Each one shows how something works that has no real data yet. Without them those sections would be empty headings. None of them sits beside a real study or reads as a decision.

To restore the row, add this after the second row in working-on.html, and change the caption to `<caption><span class="sr-only">Being studied now</span> <span class="badge-example">Example</span></caption>`:

```html
<tr class="example">
  <th scope="row" data-label="Idea"><span class="badge-example">Example</span> Elementary maker lab pathway (contributing ideas: 3)</th>
  <td data-label="Theme">STEM</td>
  <td data-label="Stage">Decided: pilot</td>
  <td data-label="Last update"><span class="badge-example">Example</span> One-page study summary posted</td>
  <td data-label="Next step">One-year pilot; results reported here</td>
</tr>
```

**2. The trial submission: counted, not listed** (the prototype default in spec Section 13). It is one of the two "Held" ideas in the Example counts strip. It is not listed or described anywhere on the site. Listing it under a neutral title would put a real submission on the board next to the two studies the Governing Board has seen, before Lea and the submitter have decided on it. Spec Section 13 makes that their decision.

## Word count per page

Counted in `main`, with accordion bodies included. "Copy" leaves out the Example and Planned badge labels, the table captions that only screen readers hear, and HTML comments. "All" counts every word in `main`. The shared header, banner, and footer add 60 words to each page and are not in either count.

| Page | Copy | All | Spec range | Result |
| --- | --- | --- | --- | --- |
| index.html | 268 | 270 | 230 to 300 | Inside |
| working-on.html | 473 | 498 | 380 to 460 | 13 over |
| programs.html | 495 | 504 | 520 to 620 | 25 under |
| share.html | 557 | 570 | 560 to 660 | 3 under |
| how-it-works.html | 816 | 837 | 700 to 820 | Inside |
| **Site total** | **2,609** | **2,679** | 2,200 to 2,800 | Inside |

Every word on these pages is the spec's final copy, placed verbatim. The three pages outside their ranges are outside them because of the spec copy itself, not because anything was added or cut. Removing the Example board row took about 25 words off working-on.html, and it would still be over without that change. I did not pad or trim copy to hit the ranges.

## QA against spec Section 10 (step 7)

Tools: headless Chrome through Playwright, run against `docs/` served locally at 375 x 667, 768 x 1024, and 1280 x 800. Each check ran with accordions both closed and open. Other tools: axe-core 4.10.2 (WCAG 2.0 to 2.2 A and AA, plus best practice), the Nu Html Checker (vnu.jar, latest release) on all five pages and the stylesheet, curl for links, and a source scan. I reviewed screenshots of every page at every width. An independent agent compared every spec sentence against the page text in both directions, which covers more than the checklist's ten sentences per page.

| Section 10 line | Result | How checked |
| --- | --- | --- |
| One `h1`; heading levels never skip; `header`, `nav`, `main`, `footer`; skip link to `main` first | Pass | DOM check on each page. The first focusable element is the skip link to `#main`. |
| `title`, `meta viewport`, `meta robots noindex, nofollow` | Pass | Source scan |
| Header, banner, footer byte-identical except `aria-current` | Pass | Source compared against index.html |
| Every Example item has the badge and dashed border; every Planned item has the badge and a phase | Pass | Every `.example` block contains a badge. Every Planned badge reads "Planned: phase". |
| No invented pipeline rows, IDs, or owners; no site names on new ideas; no submitter names | Pass | Copy audit |
| Copy matches the spec verbatim | Pass | Every sentence compared by script. No word differences. |
| Tables: `caption`, `thead`, `scope="col"`, five columns at most, `data-label` on each cell | Pass | DOM check. Each `data-label` also matches its column header. |
| Under 640 px, cells stack with labels and nothing scrolls sideways | Pass | 375 px: page width equals viewport, and no element is wider than the viewport |
| Accordions are `details`/`summary`, contain a heading, and open by keyboard | Pass | Enter opens and Space closes (tested) |
| Every iframe (or placeholder) has a `title` and a visible fallback link above it | Pass | All three placeholders. The link is a placeholder until the forms exist (see Deviations). |
| Every image has alt text; the cycle diagram has a text version | Pass | |
| Logo renders as SVG; PNG copy in assets/ | Pass | assets/logo.svg in the header; assets/logo.png is 512 x 512 with a transparent background |
| All text meets 4.5:1 (3:1 over 24 px); badges do not rely on color | Pass after one fix | axe found 0 violations at every width. The measured table is below. |
| Focus ring visible on every link and summary; tab order follows reading order | Pass | Tabbed through every page and checked for a 3 px solid outline at each stop. The order matched the reading order, and no `tabindex` is used. |
| Buttons and doors at least 44 px tall; nothing needs hover | Pass | Measured |
| Reads correctly at 375, 768, 1280 px; nothing wider than the viewport | Pass | Screenshots and overflow check |
| HTML validates; no inline `style`; no JavaScript except the optional toggle | Pass | Nu checker: 0 errors, 0 warnings. No `style` attributes, `script` elements, or event handlers. The optional menu toggle was not used. |
| No network requests except susd.org links (and forms.office.com when embedded) | Pass | Each page loads only itself, spark.css, and assets/logo.svg; how-it-works.html also loads assets/cycle.png. Zero external requests. |
| Word counts recorded; site total 2,200 to 2,800 | Pass | 2,609 (see above) |
| Print: nav and banner hidden; letter size without clipping | Pass | Print emulation hides the nav, banner, and skip link. PDFs render at letter size, and content fits 7.3 in with accordions open. |

**Contrast, measured** (every text and background pair in spark.css):

| Pair | Ratio |
| --- | --- |
| Body text, ink on page background / on white | 14.83:1 / 15.78:1 |
| Links, teal-dark on page background / on white | 6.21:1 / 6.61:1 |
| Header text, nav, large door, button: white on teal-dark | 6.61:1 |
| Header subline, teal-light on teal-dark | 5.71:1 |
| Banner, small door, Example badge: ink on gold-light | 14.91:1 |
| Planned badge, teal-dark on teal-light | 5.71:1 |
| Table headers and Home cards, ink on teal-light | 13.64:1 |
| Stacked-table labels and the placeholder link, ink-mid on white / on page background | 10.98:1 / 10.32:1 |
| Footer text, white on ink; footer link, gold on ink | 15.78:1; 7.79:1 |
| Focus ring (non-text): gold against the teal-dark header; inner ink ring against white | 3.26:1; 15.78:1 |

axe listed one "needs review" item: the bold step names in the cycle list on how-it-works.html. It could not read the background because of the numbered circle, which is a CSS pseudo-element. The circle sits in the left gutter and never under the text. The actual pair is ink on the page background, 14.83:1.

**External links** (curl, following redirects):

| Link | Result |
| --- | --- |
| https://www.susd.org | 200 |
| https://www.susd.org/academics/academic-programs/dual-language-immersion | 200 |
| https://www.susd.org/academics/academic-programs/math-science-academy | 200 |
| https://saguaro.susd.org/academics/math-science-academy | 200 |
| https://www.susd.org/academics/academic-programs/stem-certified-schools | 200 |
| https://www.susd.org/academics/academic-programs/international-baccalaureate | 200 |
| https://www.susd.org/departments/gifted/comprehensive-gifted-program | 200 |
| https://www.susd.org/academics/traditional-school | 200 |
| https://www.susd.org/academics/academic-programs/career-and-college-readiness | 200 |
| https://www.susd.org/academics/academic-programs/avid | 200 |
| https://forms.office.com/r/rw136NR7ik (interest form) | 200, after a redirect to forms.cloud.microsoft |

No 404s.

**Found and fixed during QA**

1. **Button contrast.** White on --teal measures 4.32:1. WCAG accepts that for bold text at 19 to 20 px, and axe passed it. The spec's own rule allows 3:1 only above 24 px, though, so it failed the spec. The button now uses --teal-dark (6.61:1), with --ink-mid on hover. (spark.css)
2. **Validator notice.** The feedback wrapper on how-it-works.html was a `section` with no heading. It is now a `div`.
3. A false alarm in my own test script: its tab-order check counted links inside closed accordions, which the browser correctly skips. I fixed the script; the page needed no change.

Fixed earlier during the build: a single Planned card stretched full width on desktop (the grid now uses auto-fill). The screen-reader-only caption class was also made robust against the mobile table rule.

**Not verified here:** real iPhone and Android devices, Safari, and screen readers (VoiceOver, NVDA). Everything above ran in desktop Chrome with phone-sized viewports. This is Brian's step 7 review point: open the site on an iPhone and an Android phone, and try keyboard-only on a laptop.

## Deviations from the spec, and why

| # | Where | Spec | Built | Why |
| --- | --- | --- | --- | --- |
| 1 | working-on.html board | Two real rows and one Example row | Two real rows only | The decision above. The restore snippet is above. |
| 2 | Button (how-it-works.html) | Primary buttons use --teal, with --teal-dark on hover | --teal-dark, with --ink-mid on hover | White on --teal is 4.32:1, below the spec's own 4.5:1 rule for text under 24 px |
| 3 | You said, we did table | Badge in the caption, and an asterisk on example rows | Badge in the caption, an Example badge at the start of each cell (the copy's own [Example] markers), and a dashed border on the row. No asterisk. | An asterisk means nothing without a key. A word does, and it stays with each cell when the table stacks on a phone. |
| 4 | Form embeds (3) | Microsoft Forms iframe, with a fallback link above it | No iframe, per the build brief. A teal "Planned: launch" box says "Microsoft Form will be embedded here: ...". The fallback link text shows above it as a link with no address yet. | The forms do not exist yet. The link is visible but not clickable, and it is not a tab stop. The box has a `title`, which the checklist asks for. An HTML comment marks where each iframe goes and its title. The 900 px minimum height applies to the real iframe only, so the placeholder box stays compact. |
| 5 | share.html, under the form | "Versión en español: Planned, launch." | "Versión en español:" followed by the badge "Planned: launch" | Uses the same label format as every other Planned item (spec 1.2) |
| 6 | Accordion titles, Planned card titles, the June row of "The SPARK year" | Trailing periods | Dropped | They end headings and badges, where a period is sentence punctuation |
| 7 | share.html links to the support form (2) | working-on.html | working-on.html#support | Takes the reader straight to the form, not to the top of the page |
| 8 | Captions on the board, the three How SPARK works tables, and You said, we did | Not given | Same text as the heading above, hidden visually (screen readers still read it). The finder table keeps its visible spec caption. | Every table needs a caption, and a visible copy of the heading right under it adds clutter |
| 9 | Tables | Header cells in `thead` | Also `th scope="row"` in the first column of every table except You said, we did, each with a `data-label` | Screen readers announce the row's name with each cell |
| 10 | Home, "Being studied this year" | A bulleted list | The two names shown as cards | Spec 11.1 calls them "Being studied now" cards |
| 11 | Several lists | Plain text | Bold lead-ins with no word changes: cycle step names, time labels in "What happens next", outcome names, the three questions, glossary terms, program field labels | Easier to scan on a phone |
| 12 | Omission sentence (working-on.html) | `"[Example] 1 more idea ..."` | The badge sits just before the opening quotation mark | Keeps the quotation clean |
| 13 | All pages | Not specified | A skip link reading "Skip to main content"; `lang="es"` on "Versión en español"; the logo as the favicon | The spec requires a skip link but gives no text. The `lang` attribute makes screen readers pronounce the Spanish correctly. The favicon stops the browser requesting a missing file. None of these adds visible page copy. |
| 14 | "Why most ideas are not studied" | An accordion | An accordion with an H2 in its summary. The Programs accordions use H3. | It sits between H2 sections as a peer section, not under "What we look for" |

The optional mobile menu toggle was not built. The nav wraps to two rows at 375 px without it.

## Ambiguities resolved

1. **Planned cards on What we're working on.** Section 4 lists three, while the Section 12 table says two. I built three, because the page section is the more specific one.
2. **"No other numbers on the page" (Home).** The final Home copy also contains 2 school days, About 5 minutes, June 23, 2026, Seven themes, and four times a year. The copy is final, so it stayed verbatim.
3. **Planned "never a promise date" (spec 1.2).** The copy uses "Planned: June 2027" and "Planned: spring 2027". I kept them verbatim. Lea may want them changed to phases before launch.
4. **Word-count ranges.** Three pages fall outside their ranges on verbatim copy. The copy wins (see the counts above).
5. **"Share an idea (nine questions)".** The form in spec 8.2(a) has 13 fields plus a branch. "Nine" reads as the questions about the idea itself, not counting name, email, role, and consent. I kept "nine". Confirm it once IT builds the form.
6. **Feedback form fallback text.** Section 7 gives none, so it uses the generic text from Section 2.4: "Open the form in a new tab".
7. **Home page title.** The pattern is "Page name | SPARK | Scottsdale Unified School District". I used "Home", the page's name in Section 3, rather than the nav label "SPARK", which would have produced "SPARK | SPARK".
8. **Banner placement.** It sits inside the `header` element, under the teal bar, so every piece of page content is inside a landmark.
9. **Phase for the form placeholders.** "launch", because the forms go live with the site.
10. **Example numbers.** The seven cluster lines add up to 12 ideas, and the counts strip says 14 received. Both are Example, and the gap can be read as redirected ideas that belong to no theme. I left both as the spec wrote them.
11. **Glossary markup.** A bulleted list with bold terms, as the spec shows it, rather than a definition list, which is easier to reproduce in the CMS.
12. **"The form also asks its theme"** (Share an idea). "Its" means the idea's theme. I kept it verbatim.

## Typos fixed

None. A full read and a scripted scan of the spec copy found no typos, so the copy went in exactly as written.

## Notes for Steven Paluch (moving the content into Finalsite)

1. **Work from CONTENT.md, not the HTML source.** No meaning depends on the CSS class names, because every badge is real text.
2. **The banner is for the preview only.** Remove it at launch, along with the Example items.
3. **Example items to replace or remove at launch:**
   - The counts strip: use the monthly numbers from flow F3.
   - Both You said, we did rows: use the first quarterly note.
   - The "1 more idea is not listed" sentence: use the real count, or drop it.
   - The seven "Already suggested this cycle" lines: use the SPARK Clusters list.
   - The three illustrative facts and the badge in the Dual Language entry: use facts from Educational Services, or "Ask the school".
4. **Planned items.** There are nine Planned cards (Home 1, What we're working on 3, Our programs 2, Share an idea 1, How SPARK works 2). Planned labels also appear on the three form placeholders, the Spanish line under the idea form, and the June row of "The SPARK year". Each card is a Content block with a styled label, or can be left out at launch if Lea decides.
5. **Tables.** Stacking on phones relies on `data-label` attributes and CSS. Finalsite may strip the attributes, so test in Composer. If the tables will not stack, the spec's fallback (11.4) is to drop the board's Next step column. The first column holds row headers (`th scope="row"`).
6. **The board.** In Finalsite it becomes Posts with the Category Filter (spec 11.2). The prototype table is the fallback layout.
7. **Accordions.** Our programs has seven and How SPARK works has one, each a Finalsite Accordion element. The program titles are H3 and "Why most ideas are not studied" is H2.
8. **Form embeds.** Use the iframe titles "Share an idea form", "Support an idea form", and "Site feedback form". Put the fallback link above each iframe, opening in a new tab. Spec 11.3 asks for forms.office.com and forms.microsoft.com on the Embed allow-list. The current interest-form link redirects to **forms.cloud.microsoft**, so ask the admin to allow that domain too.
9. **Anchor.** The "Support an idea we're studying" heading needs the anchor `support`. Share an idea links to it twice.
10. **Program "More:" links** show the full URL as link text, as the spec gives them. Consider using the program name as the link text in Finalsite. It reads better on a phone and with a screen reader. I left the URLs because the copy is final.
11. **Images.** For the CMS, use assets/logo.png (512 x 512, transparent); the SVG is for the prototype header only. assets/cycle.png is 800 x 800 with alt text "The SPARK cycle: share, screen, SPARK team review, study, decide and build". Keep the numbered list beside it on the page, because it is the text version.
12. **Facts to confirm with Educational Services before launch.** The AVID elementary list reads "Tavan, Hohokam, Ingleside, Arcadia". Ingleside appears as a middle school in the Gifted row, and Arcadia is usually a high school name, so confirm the names and levels. The school names match the v2 prototype.
13. **Two items in the spec's update list have no copy on the pages.** Spec 8.5 lists "the next review date on Home and How SPARK works" and "the 'Board updated' date" among the quarterly changes, but the page copy in Sections 3 and 7 has neither. I added nothing. If they are wanted, add them to the spec copy first.
14. **Cycle-dated text.** Update "since August 2026" each cycle. It appears in the counts heading and in the "Already suggested this cycle" intro.
15. **Launch settings.** Keep `noindex, nofollow` until public launch (spec 11.3). Closed accordions print closed, which is normal browser behavior.

## Note for Brian: where the preview lives

Since 2026-09-23 the preview has its own public repository, brianhohl22/spark-framework. It holds only the site files: v1 (the root index.html), v2, and v3. GitHub Pages publishes it at the same address as before, https://brianhohl22.github.io/spark-framework/, so links already shared keep working. The site pages ask for the access code. The Markdown files (CONTENT, HANDOFF, FORMS, DATA_INVENTORY, and this report) are published as ungated pages, and robots.txt blocks crawlers.

Brian's working files, including the spec, the SPARK/ materials, and the earlier history of this build, moved to a separate private repository.
