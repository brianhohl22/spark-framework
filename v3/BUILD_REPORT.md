# SPARK v3 prototype: build report

## v3.3 iteration (2026-10-26)

v3.3 builds the October 3 candidate list: accuracy fixes A1 to A7, credibility B1 and B2, and enrollment usefulness C1 to C4. It also adds one line about the Board's approved school closures. The site author approved the list on October 26, 2026. [V3.3_CHANGES.md](V3.3_CHANGES.md) has every item as W18 to W31, with the final copy, its placement, and the reason for each edit to the proposed copy.

**What changed, page by page**
- **Our programs:**
  - **Intro (B1):** it says where the facts come from and when they were checked ("checked October 2026", a preview value). Gifted services are "for identified students". The line 'Where a fact is not yet confirmed, we say "Ask the school"' is gone.
  - **Finder table and the lines under it (B2, A5, W31):**
    - The AVID cells link each school's website.
    - The Early College and Gifted high school cells link SUSD's dual enrollment page and the high school planning guide.
    - "Schools listed as of October 2026" gains a neutral line on the approved school closures, with a link to SUSD's Phase II page.
    - "Programs, clubs, and pilots" becomes "clubs, activities, and programs. These are not on SUSD's specialty list."
  - **Applying and key dates:**
    - The open enrollment date is now posted: November 2, 2026, at 8 a.m.
    - The "Specialty schools and programs" bullet says "many" signature programs have an application or sign-up.
    - The "Seats" bullet is gone. Two new blocks follow the bullets:
      - "How students join" (C1, anchor `how-students-join`): a two-column table with eight rows and a line on priority groups.
      - "Check for a seat" (A1 and C2, anchor `check-for-a-seat`): what SUSD's capacity list shows and doesn't, who to call, and five questions to ask the school.
  - **Three kinds (W27):** SUSD's three definitions are unchanged, with one line after them: "These labels describe the usual pattern."
  - **Theme panels (C3, A6, B2, C4):** in five panels, each program now has an H4 and up to three lines: How to join, Key dates, and Program page and contact. Arts and Traditional have one program, so their three lines replace the two old ones directly.
    - Lines about the whole theme (Recognition, Being studied, More on susd.org) move above the program headings.
    - The academy no longer says "Students apply". Every Mohave student can take part, and the STEM Scholar distinction needs the application. Saguaro students sign up on a form. Kiva's gifted program students move on to Mohave's academy.
    - No phone numbers are copied. Each line names an office or role, and links the page that lists the number.
- **How SPARK works (A2, A4):**
  - The lead says "specialty schools and programs".
  - "What SPARK covers, and what it doesn't" has seven bullets. Single-school programs are SPARK's too. Only things like clubs are the school's to decide.
  - The "Who does what" first row is now "School principal", with a **Planned: launch** badge.
  - "About 38" became "more than 30", twice.
  - The glossary says a specialty program "can be at one school or several".
- **Share an idea (A3):** question 1 asks about "one school's clubs, activities, or events". "Every school has a SPARK contact" is gone.
- **Home and What we're working on:** unchanged.
- **Stylesheet:** one rule for H4 spacing inside accordion panels.
- **Handoff files:**
  - V3.3_CHANGES.md is new, and V3.2_SPEC.md points to it.
  - CONTENT.md is regenerated, and DATA_INVENTORY.md is updated (A7, below).
  - HANDOFF.md maps the new blocks, anchors, refresh steps, and three new questions for the Web Content team.
  - README.md is updated.
  - FORMS.md is unchanged, so its PDF printout needs no reprint.

**Fact check, October 26, 2026** (every added or changed fact, against the live SUSD page; DATA_INVENTORY.md has the quotes):
- **Corrected or refreshed at build time:**
  - **Open enrollment 2027-28 is now posted:** "open on November 2, 2026 @ 8:00 a.m." The page said "early November 2026".
  - **CGP kindergarten dates are posted** (A7): January 4 and February 8, 2027. The page now shows them.
  - **The high school planning guide does not list CTE pathways by school,** as the candidate list assumed. It lists every pathway, and says courses "vary by site annually". The copy links the guide for the list and sends families to the counselor.
  - **Cheyenne's contact route is now stated** on its tour page ("contact the front office"). Its inventory row moved from Confirm to Verified.
  - **The SPARK Team page lists 34 members** (counted).
  - **The capacity list is unchanged:** the same file, last uploaded May 7, 2026, with the same columns and note.
  - **The tour link now redirects** (301) from susd.org/services/enrollment/schedule-a-tour to the Our Schools page. That page still describes tours and links each school's tour page, so the link text still fits. Consider pointing the link at the new URL in Finalsite.
- **Dates rolled:**
  - The CGP grades 1 to 8 priority window (October 12) now says "opened".
  - Mohave's information night (October 27, 2026, the day after the build) is replaced by a date-free line. Mohave posts no later date.
  - Still ahead, and date-bound at the content freeze: November 2 (open enrollment), November 3, 10, and 16 (Cheyenne tours), November 16 (CGP, all applicants), January 4 and February 8, 2027 (CGP kindergarten).
- **School consolidation (verified):** SUSD's School Repurposing Phase II page has a Parent FAQ: "Under the approved Phase II plan – Option C, Copper Ridge and Laguna Prep will close." It also says "Laguna Prep will close following the 2026-2027 school year."
  - The page does not give the date of the vote. A web search to confirm October 6 could not be run, so the site's line carries no date.
  - The same page's introduction still says the options "will be provided to the Governing Board in the fall of 2026".
  - The site now says "as of October 2026" and adds the neutral closures line with the link. As instructed, it does **not** edit or annotate any Laguna line.
- **No lottery or first-come claim.** The priority line names SUSD's priority groups and says nothing about order within a group. The open enrollment page ("processed as received") and Policy JFB ("random selection") still disagree.

**DATA_INVENTORY.md (A7 and the rest):**
- 219 facts: 186 Verified, 22 Confirm, and 11 removed from the page.
- 48 rows are new (#172 to #219). 51 earlier rows are marked "v3.3".
- #108 and #109 (seats) are rewritten to match the capacity list.
- #135 has the kindergarten dates. To confirm item 23 (K17) is rewritten.
- Five new items to confirm before launch (30 to 34): Laguna, how students join, IB Middle Years, scope routing, and AVID.
- Coverage now includes the scope lines on How SPARK works and Share an idea.

**Open decisions**
- **For the Assistant Superintendent:**
  1. **Laguna during open enrollment for 2027-28.** Laguna Prep closes after 2026-27. Our programs still lists it as STEM-certified (the finder table, the How students join table, the STEM panel, and Recognition). Should the site keep it, mark it ("closes after 2026-27"), or drop it? Who tells families in Laguna's STEM program about other STEM programs? Copper Ridge is not on the pages; it appears only in the inventory's AVID notes.
  2. **May the site describe how each program admits students** (C1, C3; scope question 6)? If yes, the program owners confirm their rows. The Mohave academy needs a ruling: its page says every Mohave student can take part, but slide 7 calls it a signature program within a school, where only accepted students take part.
  3. **Scope routing** (A2, A3, A4):
     - "Start with the principal"
     - who may bring a school's own program forward
     - "each year it studies a few in depth"
     - the School principal role, now shown as Planned
     - and, still open from October 3, scope questions 1 to 5
  4. **AVID:** how students are chosen, and the contact route.
- **For the Web Content team** (HANDOFF.md section 7, questions 9 to 11):
  - Can the capacity list get a stable, labelled link or anchor?
  - Could the open enrollment page carry a short "Specialty programs: how to apply" block?
  - Can a Composer accordion hold H4 headings?
  - Also: the tour link's new URL, and whether Finalsite tables stack on phones (question 2, now with a second table on Our programs).
- **For the program owners:** confirm the new How to join, Key dates, and contact lines (DATA_INVENTORY.md, items 30 to 34 and the Confirm rows). This includes the IB Middle Years criteria and dates, and the 2027-28 Diploma application when it's posted.
- **Issues found on SUSD's own pages** during the check go to the site author privately, for the Assistant Superintendent to pass on. As the candidate list asks, they are not listed on the public pages.

**Edits to the candidate copy** (each is explained in V3.3_CHANGES.md):
- **How students join** has eight rows, not six:
  - Gifted services and middle school dual language get their own rows.
  - IB Middle Years moves to "application or sign-up", because no SUSD page posts its criteria.
  - Arts in the first row is elementary only.
  - Mohave's row notes that STEM Scholar needs an application.
- **"Check for a seat"** is an H3 block rather than a bullet. It holds C2's list, and the Pueblo lines link to its anchor.
- **The "Who does what" principal row** also drops "Handles local ideas", to match A2.
- **Share question 1** keeps "Ideas grow best with a champion at the school."

**Independent review**
- A separate agent compared the diff with the candidate list and V3.3_CHANGES.md, read-only.
- **Result:** every A, B, and C item is built, and no change in the diff is unexplained. The copy in V3.3_CHANGES.md matches the pages.
- **Fixed after the review:**
  - the "Three kinds" line (SUSD's definition of a signature program says "with its own application", which the new table qualifies)
  - Mohave's wording, aligned between the table and the panel
  - "Joining later" now names the front office
  - the AVID "each school's website" links
  - documented reasons for the Check for a seat format and the principal row cells
  - the small C1 wording edits, now listed
  - the W23 Kiva quote
  - the reason the Desert Mountain IB dates cover both programmes (the IB guide's sentence covers both)
- **Not changed:** a suggestion to say the seat list "has no date". That is an SUSD page issue, raised privately instead.

**QA on v3.3** (scripts in the session's scratchpad, not in the repo)
- **Links:** all 51 unique external URLs return HTTP 200 after redirects, and each link's text fits its target's title. All 70 internal links and 29 anchors resolve, including the new `#how-students-join` and `#check-for-a-seat`. The existing anchors are unchanged.
- **Layout:** Playwright (Chromium) at 320, 390, and 1280 px, on all five pages, with accordions closed and open:
  - The page width equals the viewport every time. No element runs past the right edge, so there is no sideways scroll.
  - The new two-column table stacks into labelled cards under 640 px.
  - I reviewed the 320 px screenshots of Our programs.
- **Gate:**
  - The page is hidden until the code is entered.
  - A wrong code shows an error, and spark2026 unlocks the page.
  - The next page opens unlocked.
- **Accessibility and structure:**
  - axe-core 4.10.2 (WCAG 2.0 to 2.2 A and AA, plus best practice): 0 violations on all five pages, with accordions closed and open.
  - The "needs review" items are the same as in v3.2: the numbered timeline steps on Share an idea and How SPARK works, where axe can't read the background behind the number circles.
  - One H1 per page, and no skipped heading levels (H4s sit under H3 panels).
  - No inline styles, and no script but `gate.js`. Every table cell's `data-label` matches its column header.
- **HTML validation: the Nu validator was not run this time.** Downloading and running its jar was blocked by this session's permissions. A static check stood in for it: tag balance and nesting, list and paragraph content, summary placement, duplicate IDs, image alt text, and CSS brace balance. It found 0 problems on all five pages. Please run vnu.jar before launch.
- **Privacy and vocabulary:**
  - The added lines have no personal names; a capitalized-pair scan found only quotes and place names. They have no email addresses, and no "@susd.org".
  - The pages show no phone numbers, and no "options" used as a name for programs.
  - The pages make no lottery or first-come claim.
  - No new sentence is over 20 words. Two were shortened during QA.
- **CONTENT.md matches the pages:** a word-by-word and link-by-link comparison, with annotations stripped. Our programs (2,559 words, 70 links) and How SPARK works (1,254 words, 7 links) match exactly. Home, What we're working on, and Share an idea differ only by CONTENT.md's annotations, which were already there in v3.2.

**Word counts, v3.3** (measured the same way as v3.2; the v3.3 figures are the v3.2 figures plus the measured change):

| Page | v3.2 | v3.3 | Main reason |
| --- | --- | --- | --- |
| index.html | 299 | 299 | Unchanged |
| working-on.html | 990 | 990 | Unchanged |
| programs.html | 1,544 | 2,572 | How students join and Check for a seat (+415 always visible); per-program lines in the closed theme panels (+613) |
| share.html | 647 | 647 | Same length (question 1 reworded) |
| how-it-works.html | 1,166 | 1,256 | "What SPARK covers" has seven bullets |
| **Site total** | **4,646** | **5,764** | |

Our programs is now the longest page by far. Most of the growth is inside closed panels, but the two new blocks add about a screen and a half on phones. If that's too long, the "What to ask the school" list could move into its own accordion.

---

## v3.2 iteration (2026-10-02)

v3.2 builds [V3.2_SPEC.md](V3.2_SPEC.md) (revision 2), changes W1 to W17. [FEEDBACK_MAP.md](FEEDBACK_MAP.md) explains why each change is proposed. Items the spec marks Draft or Confirm are built with the spec's defaults, and wait on the decisions and confirmations listed there.

**What changed, in short**
- **Home (W1):** three equal doors in the order of the loop: Find a program, See what we're working on, Share an idea. The study cards show "Now: decide and plan".
- **Our programs (W2 to W5, W11):**
  - a "Being studied, not offered yet" note box; the finder table no longer mentions the studies
  - two lines on what the page covers
  - a new "Applying and key dates" section, which replaces the "How to enroll" paragraph
  - Status and key dates, Contact and visits, and Recognition lines in each theme panel
  - an A+ Schools of Excellence line
  - the Dual Language Example lines deleted, so the page has no Example content
- **What we're working on (W6, W7, W13, W14):**
  - "Where we are now"
  - in each study card: a five-phase list with "Done" and "Now" as words, the target school year (not set yet), and related programs
  - "two or three more ideas this school year"
  - the counts strip replaced by "Ideas this school year, by theme": a three-column table (Example numbers), a reply list, and an "As of" line
  - support notes are never posted; a Let's Talk line for suggestions, questions, and concerns
  - the "Support summary per idea" Planned card no longer promises "who wrote in"
- **Share an idea (W10, W15, W17):**
  - "(13 questions)"
  - step 1 links to a new "Check your idea's status" block (a Planned embed, with a Spanish twin)
  - "Already suggested this school year": eight Example lines, including Other, that match the theme table
- **How SPARK works (W8, W9, W15):** "What SPARK covers, and what it doesn't"; "We are here" under "The SPARK year" (anchor `year`); a status check row in "What you can expect from us".
- **Stylesheet:**
  - equal doors
  - a note box with a solid teal edge, so it never reads as Example
  - the phase list, where a tint repeats the word "Now"
  - the counts table, with right-aligned numbers, a bold total, and a 40rem cap at desktop
  - the unused counts-strip rules removed
- **Handoff files:** HANDOFF.md, FORMS.md (four public forms, the status check, Other), README.md, DATA_INVENTORY.md, and CONTENT.md (regenerated from the pages) follow W12.

**Corrected at build time from the sources** (V3.2_SPEC.md is updated to match):
- **Desert Canyon Elementary tours:** its tour page takes requests online, so the panel links the form. The spec said "call the front office".
- **Desert Mountain IB:** SUSD's IB guide says Middle Years and Diploma applications "are available at Desert Mountain". The panel now says both have an application; Anasazi and Mountainside enroll at the school.
- **Dual language, joining later:** the middle school planning guide requires prior dual language, which conflicts with the placement-test line. The panel now says "some later grades ... Ask the school which ones" (a confirm item).
- **Posts (HANDOFF section 4):**
  - Theme categories stay the eight program themes. An "Other" idea gets a theme before it is published (W16).
  - Post titles and the support form's idea list carry no idea IDs (spec 8.1).
- **README.md:** it no longer says "no JavaScript" and "no password gate". It describes `gate.js`, the preview-only access code.

**Deliberate exceptions and preview values**
- **The counts table stays a table on phones.** Every other table stacks into labelled cards under 640 px. This one has three short columns, and stacking turned it into ten cards (about 1,500 px of scrolling). It fits at 320 px with no sideways scroll. Its cells keep `data-label`, so stacking can be switched back by removing the `.table--counts` phone rules.
- **Content-freeze values in the preview:** "Where we are now: late fall 2026", "We are here: late fall 2026", "the next SPARK team review is in January 2027", "As of October 1, 2026" (inside the Example block), and "Schools listed as of September 2026". CONTENT.md marks each one.
  - These are the spec's values for a November launch. They assume the launch comes after the SPARK year's mid-October review.
  - The same goes for the key dates in the copy: October 12, October 27, November 3, 10, and 16, and November 16, 2026.
- **Launch variant A:** the forms are Planned embeds. The variant B wording (a staged launch, D1) is ready in W10 but not applied.

**Independent review**
- **Data inventory:** every new fact on the pages was checked against live SUSD pages and the June 23, 2026 Board deck on 2026-10-02.
  - Totals: 171 facts, 143 Verified, 22 Confirm, and 6 removed from the page.
  - 15 new items to confirm before launch (K9 to K19, D2, D3, the Let's Talk topic, and dual language joining later).
  - All 33 unique external links return HTTP 200.
- **Conformance audit against the spec:**

- **Result:** an independent agent compared the pages with the spec word by word. Every W1 to W17 item is in place, with the spec's copy and placement. Other checks it ran:
    - all 26 in-page and cross-page anchors resolve
    - the counts agree (14 ideas by theme, 14 in the "Already suggested" lines, replies 4+3+5+2+0 = 14, 2 studies)
    - no study lines, no Example content, and no "Other" on Our programs
    - no support numbers and no location breakdown
    - "Done" and "Now" written as words
    - roles only, no "options" for programs, no new sentence over 19 words
    - CONTENT.md matches the pages
  - **Fixed after the review:**
    - this report section was added
    - the dates set at the content freeze are now marked in CONTENT.md and HANDOFF.md
    - "Where we are now" and "We are here" now say "late fall 2026", so they fit the SPARK year's mid-October review
    - the counts-table exception is noted in HANDOFF.md and CONTENT.md
    - DATA_INVENTORY gained rows #169 to #171 for the W3 copy
    - HANDOFF.md says what to write if the Let's Talk SPARK topic isn't live at launch
    - a line under the counts table: "Being studied now" includes studies that began in earlier years
    - "Themes with an application list their dates below"
    - the four levels of Saguaro academy recognition
    - the stylesheet's unused counts-strip rules and a stale print rule were removed
    - the old printout of FORMS.md (v3.1) was reprinted from the v3.2 FORMS.md
  - **Not changed:**
    - the board's "Next step" column keeps its name, as the spec sets it
    - links to a theme panel land on the closed accordion, as in v3.1 (HANDOFF question 3)

**QA on v3.2**
- **Nu validator:** 0 errors and 0 warnings on the five pages and spark.css.
- **qa.py at 375, 768, and 1280 px:** 0 problems. This covers:
  - axe-core, with accordions closed and open
  - one H1 per page and no skipped heading levels
  - landmarks
  - tab order follows reading order, with a 3 px focus ring on every stop
  - table headers, scopes, and data-labels
  - embed fallback links before the boxes
  - Example and Planned badges
  - 44 px door targets
  - print width
  - no inline styles, and no scripts other than `gate.js`
- **axe "needs review":** color contrast on the numbered timeline steps on How SPARK works. axe can't read the background behind the number circles, which are pseudo-elements. Unchanged since v3.1: dark text on the page background.
- **Gate test:** passes. The page is hidden until the code is entered. A wrong code shows an error. The right code unlocks this page and the next. The gate itself has 0 axe violations.
- **No sideways scrolling** at 320, 375, 768, and 1280 px, with accordions open and closed.
- **Journeys:** the seven journeys in spec 2.4 each take two taps or fewer between parts.

**Word counts, v3.2** (copy only; the ranges are re-based to v3.2):

| Page | v3.1 | v3.2 | v3.2 range | Main reason |
| --- | --- | --- | --- | --- |
| index.html | 288 | 299 | 270 to 330 | New door lines |
| working-on.html | 736 | 990 | 900 to 1,060 | Phase lists, the counts table and reply list, Where we are now |
| programs.html | 1,017 | 1,544 | 1,430 to 1,650 | Profile fields in the closed theme panels (+362 words inside panels; the always-visible copy grew by 163) |
| share.html | 574 | 647 | 600 to 700 | The status check block, Other line |
| how-it-works.html | 1,036 | 1,166 | 1,080 to 1,250 | "What SPARK covers" |
| **Site total** | **3,651** | **4,646** | 4,300 to 4,950 | |

---

## v3.1 iteration (2026-09-23)

v3.1 applies the site author's review of v3.0, two research passes on SUSD sources, and two independent reviews. The spec's change log (Section 0) lists every change and its source. Copy marked "v3.1 draft, for the Assistant Superintendent" in the spec needs the Assistant Superintendent's confirmation. Sections further down are the original v3.0 record.

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
  - Our programs has eight themes from SUSD's public SPARK Team page, four theme rules, one accordion per theme in table order linked from the table, SUSD's three structure terms, and an "as of" line.
  - How SPARK works opens with SPARK's two parts of work (strengthen what we have; explore what's next), with a new diagram and a three-step "Strengthen what we have" section, before the five-step idea cycle.
- **Vocabulary, the site author's call:** A Governing Board member asked the team to favor "learning environments" built with communities over "program," and made the point that champions, not a website, carry ideas. The site uses "ideas" and "learning environments" for new concepts, and the district's own words, "specialty schools" and "programs," for what SUSD already offers, matching susd.org's Academic Programs page. An interim "options" wording was dropped as unclear and not SUSD vocabulary. The Assistant Superintendent is asked to confirm the wording. The site also says plainly that it keeps the record while people champion ideas: Home, What we're working on, How SPARK works (opening line, roles table with a Champions row, glossary), and Share an idea.
- **Access code:** the GitHub Pages copy now asks for the access code (spark2026, the same code, hash, and session behavior as v2). This deviates from spec 2.2 (no password gate) and 1.1 (no JavaScript) at the site author's request. `gate.js` is preview-only: it is not content, it is not in CONTENT.md, and the Web Content team leaves it out. It discourages casual visitors only; the files are readable in the public repository.

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
- The Home promise is above the fold at 375 x 667. Nav type is slightly smaller under 480 px so the five links fit on two rows.
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

**For the Web Content team:** HANDOFF.md replaces the "Notes for the Web Content team" section further down. It covers the element map, how the pieces behave, form embed codes, the update routine, and admin needs. CONTENT.md is now generated from the pages, so it always matches them.

---

## v3.0 build record (2026-09-22)

Built 2026-09-22 from `SPARK/3. Intake system/V3_DETAILED_DESIGN.md` (the spec). CONTENT.md and the spec are authoritative. The HTML is a visual reference.

What was built: five static pages, one stylesheet, and three assets, all in `docs/v3/`. No JavaScript. Every page passes the Section 10 checklist (see QA below). The build left docs/index.html, docs/v2/, and everything under SPARK/ untouched.

## Decisions on the two open items for Friday

Spec Section 13 left these open. The site's author delegated both to the build.

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

**2. The trial submission: counted, not listed** (the prototype default in spec Section 13). It is one of the two "Held" ideas in the Example counts strip. It is not listed or described anywhere on the site. Listing it under a neutral title would put a real submission on the board next to the two studies the Governing Board has seen, before the Assistant Superintendent and the submitter have decided on it. Spec Section 13 makes that their decision.

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

**Not verified here:** real iPhone and Android devices, Safari, and screen readers (VoiceOver, NVDA). Everything above ran in desktop Chrome with phone-sized viewports. This is the author's step 7 review point: open the site on an iPhone and an Android phone, and try keyboard-only on a laptop.

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
3. **Planned "never a promise date" (spec 1.2).** The copy uses "Planned: June 2027" and "Planned: spring 2027". I kept them verbatim. The Assistant Superintendent may want them changed to phases before launch.
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

## Notes for the Web Content team (moving the content into Finalsite)

1. **Work from CONTENT.md, not the HTML source.** No meaning depends on the CSS class names, because every badge is real text.
2. **The banner is for the preview only.** Remove it at launch, along with the Example items.
3. **Example items to replace or remove at launch:**
   - The counts strip: use the monthly numbers from flow F3.
   - Both You said, we did rows: use the first quarterly note.
   - The "1 more idea is not listed" sentence: use the real count, or drop it.
   - The seven "Already suggested this cycle" lines: use the SPARK Clusters list.
   - The three illustrative facts and the badge in the Dual Language entry: use facts from Educational Services, or "Ask the school".
4. **Planned items.** There are nine Planned cards (Home 1, What we're working on 3, Our programs 2, Share an idea 1, How SPARK works 2). Planned labels also appear on the three form placeholders, the Spanish line under the idea form, and the June row of "The SPARK year". Each card is a Content block with a styled label, or can be left out at launch if the Assistant Superintendent decides.
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

## Where the preview lives

Since 2026-09-23 the preview has its own public repository, brianhohl22/spark-framework. It holds only the site files: v1 (the root index.html), v2, and v3. GitHub Pages publishes it at the same address as before, https://brianhohl22.github.io/spark-framework/, so links already shared keep working. The site pages ask for the access code. The Markdown files (CONTENT, HANDOFF, FORMS, DATA_INVENTORY, and this report) are published as ungated pages, and robots.txt blocks crawlers.

The site author's working files, including the spec, the SPARK/ materials, and the earlier history of this build, moved to a separate private repository.
