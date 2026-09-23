# SPARK site: handoff for the Finalsite build

For Steven Paluch (Web Content Strategy Manager). Prepared by Brian Hohl, September 2026. This is a working draft; the full package follows after the SPARK team meeting on September 25.

**Preview:** https://brianhohl22.github.io/spark-framework/v3/ (five pages, unlisted, not indexed)

**Repository:** https://github.com/brianhohl22/spark-framework holds only the preview's files (v1, v2, and v3).

**Authoritative copy:** [CONTENT.md](CONTENT.md) holds every word on every page, in reading order. Please build from it rather than from the preview's HTML. The preview shows the intended look and behavior, but it is not code to import.

---

## 1. Nothing here needs custom code

Every block in the preview is a standard Composer element. The preview has no JavaScript, and nothing depends on its stylesheet for meaning. Every "Example" and "Planned" label is real text, so it survives when styles are stripped.

| You see in the preview | Build it with | Notes |
| --- | --- | --- |
| Headings, paragraphs, lists, the promise, the counts line | Content | Plain text |
| Three task buttons on Home | Content in a three-column layout, or theme buttons | They stack on phones, largest first |
| Two study cards on Home; two study overviews on What we're working on | Content blocks (or a Posts element filtered to "Under study") | Overviews link to the public June 23 Board record |
| "Being studied now" board | Posts with the Category Filter, or a Content table | See Section 4 |
| Finder table on Explore options; the three How SPARK works tables | Content table | See Section 2 on phone layout |
| Theme entries on Explore options (8) and "Why most ideas are not studied" (1) | Accordion | One panel per theme, same order as the table |
| Share an idea form, Support an idea form, site feedback form | Embed | Microsoft Forms iframes; see Section 3 |
| Two diagrams on How SPARK works | Image | The alt text and the text version beside each are in CONTENT.md |
| "Planned" cards | Content block with a styled label, or leave them out | Lea decides which stay at launch |
| "Example" items | Remove at launch | Replace each one with real content, or drop it (see Section 5) |

## 2. How the pieces behave, and what to check in Composer

- **Tables on phones.** In the preview, each row turns into a stacked card under 640 px, and each cell is labelled with its column name. If Finalsite tables don't stack, keep the tables and accept sideways scrolling, or drop the board's "Next step" column. The finder table has four columns, and the others have two or three.
- **Accordions.** These are standard open-and-close panels. The finder table's theme names link to their panels (`#arts`, `#college-career`, `#dual-language`, `#early-college`, `#gifted`, `#ib`, `#stem`, `#traditional`). If Composer can't link into an accordion panel, the table and panels still match by name and order.
- **Other anchors used by links:** `#support` (the Support heading on What we're working on; Share an idea links to it twice), `#studies` (the study overviews; Home and Explore options link to it), `#kinds` (the "Three kinds of specialty option" heading; the glossary links to it).
- **Links.** Links to susd.org open in the same tab. The form fallback links ("Open the ... form in a new tab") open in a new tab. The June 23 links go to SUSD's Diligent Community portal and to YouTube.
- **Images.** Use `assets/logo.png` (512 x 512, transparent); the SVG is only for the preview header. `assets/cycle.png` is 800 x 800 and `assets/spark-work.png` is 800 x 560. Each image's alt text is in CONTENT.md, and its numbered-list text version must stay on the page.
- **Indexing.** Keep the section at noindex until public launch.
- **School locations.** The school lists on Explore options are as of September 2026. The October consolidation vote may move some, so please check that page after the vote.

## 3. The forms and their embed codes

**The questions in each form** are in [FORMS.md](FORMS.md), ready for whoever builds the forms.

**What an embed code is.** It is a short piece of HTML, an `<iframe>`, that Microsoft Forms generates for each form. You paste it into Finalsite's Embed element, and the live form appears on the page. Each form owner gets theirs in Forms: **Collect responses**, then the **Embed** option, then **Copy**.

**Who produces them.** Whoever owns each form, which will be district IT or Educational Services once the forms are built. If you are added as a co-owner, you can copy the codes yourself. Otherwise the owner emails them to you. Brian does not create them.

**What the site needs from each embed:**

| Form | Page and spot | iframe `title` | Fallback link text (above the iframe) |
| --- | --- | --- | --- |
| Share an idea (English) | Share an idea, under "Send your idea" | Share an idea form | Open the idea form in a new tab |
| Support an idea | What we're working on, under "Support an idea we're studying" | Support an idea form | Open the support form in a new tab |
| Site feedback | How SPARK works, at the bottom | Site feedback form | Open the form in a new tab |
| Share an idea (Spanish twin) | Planned for launch | Formulario para compartir una idea (suggested; translator to confirm) | Abrir el formulario en una pestaña nueva (suggested) |

**Pattern to use** (replace `FORM-ID` and the title; Forms' own code may differ slightly, which is fine):

```html
<p><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=FORM-ID" target="_blank" rel="noopener">Open the idea form in a new tab</a></p>
<iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=FORM-ID&embed=true"
        title="Share an idea form" width="100%" height="900"
        style="border:0; max-width:100%;" allowfullscreen></iframe>
```

**Allow-list for the Embed element:** forms.office.com, forms.microsoft.com, **and forms.cloud.microsoft**. Microsoft now redirects Forms links to forms.cloud.microsoft (we checked on September 23), so an iframe will load from there.

**Form settings** (the form owner sets these): "Anyone can respond"; record name off; one response per person off; email asked only as a question next to the consent line.

**A test you can run now.** The existing SPARK interest form works for testing the Embed element and the allow-list before the new forms exist. Put it on an unpublished test page only:

```html
<iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=TM3JDHlDMEKtxVSLgwDUhPTDPI3tZwlLq33isczxKahUMlNLTzBTQjFYRzVHUlVNMUhHNElGN1I4Qy4u&embed=true"
        title="SPARK interest form (test)" width="100%" height="900"
        style="border:0; max-width:100%;" allowfullscreen></iframe>
```

## 4. The board as Posts (optional)

A Posts board "SPARK Ideas" with two category groups:
- **Status:** Selected for study, Develop further, Under study, Decided: pilot, Decided: design phase, Decided: deferred, Decided: declined, Implementing, Archived.
- **Theme:** the eight themes.

Each published idea is one post:
- **Title:** ID and public title.
- **Summary:** the public summary.
- **Body:** five short lines: theme and level, status, next step, last update, contributing ideas.
- **Post date:** the last update.

The page shows the posts in list layout with the Category Filter above them. **Fallback:** a Content table with five columns (idea, theme, stage, last update, next step), which is what the preview shows.

## 5. What changes, when, and who sends it

| When | What you receive | What changes on the site |
| --- | --- | --- |
| First of each month (automatic email) | Counts by status; the table of published ideas; the "Already suggested" lines; the count of ideas not listed | The counts line and the "not listed" line on What we're working on; the board rows or posts; the "Already suggested this cycle" bullets on Share an idea |
| Within 2 weeks of each quarterly SPARK team review (the screener sends it) | Decisions, new or changed rows, and two or three "You said, we did" rows | The board; the "You said, we did" table; the next review date if shown |
| After a Governing Board decision affecting schools | A note from Educational Services | The school lists on Explore options and their "as of" line |
| Once, at launch | Real facts for the Dual Language entry, or a decision to drop the Example lines | Remove every "Example" item, and the preview banner |

Example items to replace or remove at launch:
- the counts line
- both "You said, we did" rows
- the "1 more idea is not listed" line
- the seven "Already suggested this cycle" lines
- the two Example lines in the Dual Language Immersion panel

## 6. Needs a Finalsite admin

- The Embed allow-list (Section 3).
- The Posts board and its category groups, if used.
- The SPARK section with its five pages in the theme's mobile menu.
- Editor rights for you, and for an Educational Services designee if agreed.
- Removing noindex at public launch.

## 7. Questions for you

1. What URL and location should the section have: susd.org/spark, or under a parent section?
2. Do Finalsite tables stack on phones, or should we plan for the fallback?
3. Can Composer anchor-link into an accordion panel?
4. Posts or a table for the board?
5. Who is the Finalsite admin for the allow-list, and how long does that take?
6. Is the monthly and quarterly update rhythm workable, and what format of email would make it copy-and-paste for you?
7. Where would you like the package: a district OneDrive or SharePoint folder, or somewhere else?

## 8. Files in the package

| File | What it is |
| --- | --- |
| CONTENT.md | Every page's copy in reading order (authoritative) |
| HANDOFF.md | This document |
| FORMS.md | Every question in each form, with choices, limits, help text, and thank-you messages |
| DATA_INVENTORY.md | Every fact on the site, with its source, check date, and who confirms it |
| assets/logo.png, logo.svg, cycle.png, spark-work.png | Images |
| README.md, BUILD_REPORT.md | How the preview was built and checked |
