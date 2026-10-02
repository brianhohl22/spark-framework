# SPARK site: handoff for the Finalsite build

For the Web Content team. October 2026, v3.2. This is a working draft. [V3.2_SPEC.md](V3.2_SPEC.md) lists every change from v3.1 and the decisions still open. [FEEDBACK_MAP.md](FEEDBACK_MAP.md) maps the feedback from the September 25 SPARK team meeting to those changes.

**Preview:** https://brianhohl22.github.io/spark-framework/v3/ (five pages, unlisted, not indexed)

**Repository:** https://github.com/brianhohl22/spark-framework holds only the preview's files (v1, v2, and v3).

**Authoritative copy:** [CONTENT.md](CONTENT.md) holds every word on every page, in reading order. Please build from it rather than from the preview's HTML. The preview shows the intended look and behavior, but it is not code to import.

**What the site needs from the SPARK list:** the Web Content team builds the intake form, the SPARK list (a SharePoint list), and the SPARK team's internal portal. Section 8 of [V3.2_SPEC.md](V3.2_SPEC.md) lists what the public site needs from them. It covers the fields, the stage names, the status check, the counts, and the privacy rules.

---

## 1. Nothing here needs custom code

Every block in the preview is a standard Composer element. Nothing depends on the preview's stylesheet for meaning. The only JavaScript is the preview's access code (`gate.js`). It is not part of the site, so leave it out. Every "Example" and "Planned" label is real text, so it survives when styles are stripped.

| You see in the preview | Build it with | Notes |
| --- | --- | --- |
| Headings, paragraphs, lists, the promise | Content | Plain text |
| Three task doors on Home: Find a program, See what we're working on, Share an idea | Content in a three-column layout with equal columns, or theme buttons | Equal doors, in the order of the loop; they stack in the same order on phones |
| "Being studied, not offered yet" note on Our programs | Content block, styled as a note box | Set it apart from the programs. Don't use the gold "Example" style. As plain text, a bold first sentence is enough |
| "Applying and key dates" on Our programs | Content (a heading and a bulleted list) | Dates refresh yearly, and the seat line when Enrollment updates its list (Section 5) |
| Two study cards on Home; two study overviews on What we're working on | Content blocks (or a Posts element filtered to "Under study") | Overviews link to the public June 23 Board record |
| "Where it stands" phase list in each study overview | Content (an ordered list) | "Done" and "Now" are words, so the meaning never depends on color. "Target school year" and "Related programs today" lines follow it |
| "Being studied now" board | Posts with the Category Filter, or a Content table | See Section 4 |
| "Ideas this school year, by theme" on What we're working on | Content table with three columns: Theme, Ideas shared this school year, Being studied now. A reply list and an "As of" line follow it | Updated monthly (Section 5). A chart image is optional; the table is required for accessibility |
| Finder table on Our programs; the three How SPARK works tables | Content table | See Section 2 on phone layout |
| Theme entries on Our programs (8) and "Why most ideas are not studied" (1) | Accordion | One panel per theme, same order as the table |
| Status and key dates, Contact and visits, and Recognition in each theme panel | Bold-labelled lines inside each Accordion panel | Leave out a field when there's nothing to say. The order is in V3.2_SPEC.md W5 |
| Share an idea form, Support an idea form, site feedback form | Embed | Microsoft Forms iframes; see Section 3 |
| "Check your idea's status" on Share an idea | Embed | A Microsoft Forms iframe; see Section 3. The page never shows a status |
| Let's Talk SPARK topic links on What we're working on and Our programs | Content (a paragraph, and a list line) | They point to https://www.susd.org/letstalk until the topic has its own link (Section 3) |
| Two diagrams on How SPARK works | Image | The alt text and the text version beside each are in CONTENT.md |
| "Planned" cards | Content block with a styled label, or leave them out | The Assistant Superintendent decides which stay at launch |
| "Example" items | Remove at launch | Replace each one with real content, or drop it (see Section 5) |

## 2. How the pieces behave, and what to check in Composer

- **Tables on phones.** In the preview, each row turns into a stacked card under 640 px, and each cell is labelled with its column name. If Finalsite tables don't stack, keep the tables and accept sideways scrolling, or drop the board's "Next step" column. The board has five columns and the finder table four. The others, including the ideas-by-theme table, have two or three. Finalsite tables read best at 2 to 3 columns on phones. **Exception in the preview:** the ideas-by-theme table stays a three-column table on phones instead of stacking, because stacked it became ten cards.
- **Accordions.** These are standard open-and-close panels. The finder table's theme names link to their panels (`#arts`, `#college-career`, `#dual-language`, `#early-college`, `#gifted`, `#ib`, `#stem`, `#traditional`). The study overviews' "Related programs today" lines link to `#gifted` and `#arts`. If Composer can't link into an accordion panel, the table and panels still match by name and order.
- **Other anchors used by links:**
  - `#support`: the Support heading on What we're working on. Share an idea links to it twice.
  - `#studies`: the study overviews. Home and Our programs link to it.
  - `#kinds`: the "Three kinds of specialty school and program" heading. The glossary and "Applying and key dates" link to it.
  - `#year`: the "The SPARK year" heading on How SPARK works. "Where we are now" on What we're working on links to it.
  - `#ideas-by-theme`: the "Ideas this school year, by theme" heading on What we're working on. The "Already suggested" intro on Share an idea links to it.
  - `#status`: the "Check your idea's status" block on Share an idea. Step 1 of "What happens next" links to it.
- **Links.** Links to susd.org open in the same tab. The form fallback links ("Open the ... in a new tab") open in a new tab. The June 23 links go to SUSD's Diligent Community portal and to YouTube.
- **Images.** Use `assets/logo.png` (512 x 512, transparent); the SVG is only for the preview header. `assets/cycle.png` is 800 x 800 and `assets/spark-work.png` is 800 x 560. Each image's alt text is in CONTENT.md, and its numbered-list text version must stay on the page.
- **Indexing.** Keep the section at noindex until public launch.
- **School locations.** The school lists on Our programs are as of September 2026. The October Board decisions on consolidation may move some. Please check that page after them, and update its "as of" line (Section 5).

## 3. The forms and their embed codes

**The questions in each form** are in [FORMS.md](FORMS.md), ready for whoever builds the forms. The site has four public forms: the idea form, the support form, the status check, and the site feedback form.

**What an embed code is.** It is a short piece of HTML, an `<iframe>`, that Microsoft Forms generates for each form. You paste it into Finalsite's Embed element, and the live form appears on the page. Each form owner gets theirs in Forms: **Collect responses**, then the **Embed** option, then **Copy**.

**Who produces them.** Whoever creates and owns each form in Microsoft Forms. If the Web Content team owns a form, or is added as a co-owner, it can copy the code directly. Otherwise the owner sends it over.

**What the site needs from each embed:**

| Form | Page and spot | iframe `title` | Fallback link text (above the iframe) |
| --- | --- | --- | --- |
| Share an idea (English) | Share an idea, under "Send your idea" | Share an idea form | Open the idea form in a new tab |
| Check your idea's status | Share an idea, under "Check your idea's status", after "What happens next" | Check your idea's status form | Open the status check in a new tab |
| Support an idea | What we're working on, under "Support an idea we're studying" | Support an idea form | Open the support form in a new tab |
| Site feedback | How SPARK works, at the bottom | Site feedback form | Open the form in a new tab |
| Share an idea (Spanish twin) | Planned for launch | Formulario para compartir una idea (suggested; translator to confirm) | Abrir el formulario en una pestaña nueva (suggested) |
| Check your idea's status (Spanish twin) | Planned for launch | Translator to supply | Translator to supply |

**Pattern to use** (replace `FORM-ID` and the title; Forms' own code may differ slightly, which is fine):

```html
<p><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=FORM-ID" target="_blank" rel="noopener">Open the idea form in a new tab</a></p>
<iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=FORM-ID&embed=true"
        title="Share an idea form" width="100%" height="900"
        style="border:0; max-width:100%;" allowfullscreen></iframe>
```

**Allow-list for the Embed element:** forms.office.com, forms.microsoft.com, **and forms.cloud.microsoft**. Microsoft now redirects Forms links to forms.cloud.microsoft (we checked on September 23), so an iframe will load from there.

**Form settings** (the form owner sets these): "Anyone can respond"; record name off; one response per person off; email asked only as a question. FORMS.md has the details.

**A test you can run now.** The existing SPARK interest form works for testing the Embed element and the allow-list before the new forms exist. Put it on an unpublished test page only:

```html
<iframe src="https://forms.office.com/Pages/ResponsePage.aspx?id=TM3JDHlDMEKtxVSLgwDUhPTDPI3tZwlLq33isczxKahUMlNLTzBTQjFYRzVHUlVNMUhHNElGN1I4Qy4u&embed=true"
        title="SPARK interest form (test)" width="100%" height="900"
        style="border:0; max-width:100%;" allowfullscreen></iframe>
```

**Behind the status check.** The Web Content team builds the flow behind it and decides the final method. The recommended method is a Microsoft Form plus a flow, using standard Microsoft 365 connectors. It is in V3.2_SPEC.md section 8.3, and FORMS.md summarizes it. The flow emails the stored address only when the ID and email both match, at most once a day.

**If the forms open later (launch variant B, decision D1).** While the forms aren't live, replace each embed and its fallback link with a dated note. The status check, the ideas-by-theme table, the "Already suggested" lines, and the Home promise also get a dated line. The wording is in V3.2_SPEC.md W10. With a single launch (variant A), use the embeds as above.

**Let's Talk "SPARK" topic** (Communications sets it up; readiness item P6). Suggestions, questions, and concerns about an idea being studied go through Let's Talk, not a SPARK form. So do suggestions about a program. Comments are never posted. They are summarized in "You said, we did."
- Create a "SPARK" topic, owned by a named SPARK team member.
- Add a "Which idea or program is this about?" dropdown: the studies, the eight themes, and "Something else". Confirm it can be required.
- Add an optional "Idea ID" field.
- Confirm a Spanish version of the topic.
- The site's comment links point to https://www.susd.org/letstalk until the topic has its own link. Then point them at the topic. One is on What we're working on, after the support embed. The other is the last "Applying and key dates" bullet on Our programs. Other Let's Talk links, such as the footer, stay as they are.
- **If the SPARK topic isn't live at launch,** change "choose the SPARK topic" in both places to "mention SPARK and the idea's or program's name".

## 4. The board as Posts (optional)

A Posts board "SPARK Ideas" with two category groups:
- **Status:** Selected for study, Under study, Decided: pilot, Decided: design phase, Decided: deferred, Decided: declined, Implementing. Develop further and Archived are not categories. Those ideas get an email only, and are not on the board.
- **Theme:** the eight program themes. Other is not a category: an Other idea gets a theme before it is published (spec W16).

Each published idea is one post:
- **Title:** the public title. No idea ID: IDs are shown only to the person who sent the idea (spec 8.1).
- **Summary:** the public summary.
- **Body:** seven short lines: theme and level, status, phase, target school year, next step, last update, contributing ideas.
- **Post date:** the last update.

The page shows the posts in list layout with the Category Filter above them. **Fallback:** a Content table with five columns (idea, theme, stage, last update, next step), which is what the preview shows.

## 5. What changes, when, and who sends it

| When | What you receive | What changes on the site |
| --- | --- | --- |
| First of each month (automatic email: the monthly summary from the SPARK list; S3 and S16) | Counts by theme (ideas shared this school year, and being studied now); counts by outcome; the topic lines by theme; the table of published ideas | The ideas-by-theme table, its reply list, and its "As of" line on What we're working on; the board rows or posts; the "Already suggested this school year" lines on Share an idea |
| Within 2 weeks of each quarterly SPARK team review (the screener sends it) | Decisions, new or changed rows, and two or three "You said, we did" rows | The board; the "You said, we did" table |
| After each SPARK team review, and whenever a study changes phase (S12) | Each study's phase and target school year, and the next review month | Each study's "Where it stands" list and target year; the Home study cards; the board's "Next step" cells; "Where we are now" on What we're working on and "We are here" on How SPARK works |
| Yearly for the dates, and whenever Enrollment updates its seat list (S11) | New dates and facts from each fact's owner (DATA_INVENTORY.md lists them) | "Applying and key dates" on Our programs, and each theme's "Status and key dates" |
| After a Governing Board decision affecting schools (S13) | A note from Educational Services | The school lists on Our programs, and their "as of" line |
| Once, at the content freeze before launch | The launch date (decision D1) and the confirmed facts | Set the preview dates: "late fall 2026" and "January 2027" in "Where we are now" and "We are here", the "As of" line, and "Schools listed as of". CONTENT.md marks each one "(preview value; set at the content freeze)". Drop, reword, or roll forward any date that will be past on launch day. Remove every "Example" item, and the preview banner |

**Checks for each monthly update** (V3.2_SPEC.md W13 and W17):
- A school year runs August 1 to July 31. Each idea counts once, by its current theme and its latest outcome.
- The reply counts plus "still being screened" equal the total.
- The theme counts equal the counts in the "Already suggested" lines.
- Counts are by theme only, never by school or location. No support numbers appear on the site.
- Topic lines are short and neutral, and the screener writes them. They never name a school, site, group, or person.

Example items to replace or remove at launch:
- the numbers in the ideas-by-theme table and its reply list
- both "You said, we did" rows
- the eight "Already suggested this school year" lines

Our programs has no Example content in v3.2.

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
8. Which status check method will you use? The recommended one is in V3.2_SPEC.md section 8.3.

## 8. Files in the package

| File | What it is |
| --- | --- |
| CONTENT.md | Every page's copy in reading order (authoritative) |
| HANDOFF.md | This document |
| FORMS.md | Every question in each form, with choices, limits, help text, and thank-you messages |
| V3.2_SPEC.md | The changes from v3.1, the open decisions, the facts to confirm, and what the public site needs from the SPARK list (section 8) |
| FEEDBACK_MAP.md | The feedback from the September 25 SPARK team meeting, mapped to the v3.2 changes |
| DATA_INVENTORY.md | Every fact on the site, with its source, check date, and who confirms it |
| assets/logo.png, logo.svg, cycle.png, spark-work.png | Images |
| README.md, BUILD_REPORT.md | How the preview was built and checked |
