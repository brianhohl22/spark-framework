# SPARK Demo Site — Self-Review Punch-List

**Date:** 2026-05-01
**Reviewer:** Brian (with Claude)
**Site under review:** https://brianhohl22.github.io/spark-framework/ (deployed from `docs/index.html`)
**Purpose of site:** Combo pitch artifact + future-live (Ms. Mitchell endorsed Mar 24-25 2026; site distributed to ~38 SPARK members Apr 1; review feedback expected at next SPARK meeting)
**Next SPARK meeting:** Wed May 6 2026 (~5 days runway from this review)

---

## Context anchors

**Lea Mitchell's two seed ideas the site was built around** (must land especially well):
1. A forward-facing flow diagram visual to facilitate SPARK communication and engagement → realized as the "How It Works" pill chain on the home page
2. A heat map of program ideas alongside existing programs to see gaps across categories → realized as the Theme×Grade-Band heatmap on Programs page

**Canonical sources used in this review:**
- `SPARK Team Areas of Focus.pdf` (the SPARK Belief Statement + 7 Areas of Focus)
- `✅ Quality Indicators for SUSD Specialty School and Signature Programs.pdf` (the canonical 10 QIs)
- `SPARK Launch 1.12.26.pdf` (3 program structures, WIGs, current programs, spring concepts)
- `SPARK Team Overview.pdf` (role, purpose, membership)
- `SPARK New Program Intake Form.pdf` (canonical form structure)
- Lea Mitchell email threads (Jan 15 / Jan 21 / Jan 26 / Feb 5 / Feb 24 / Mar 23–25 / Apr 1 / Apr 10)

**Review approach:** 4 expert lenses (structure & CTA flow, visual design, content) + 4 persona deep reads (board member, parent, specialized program leader, plus committee-skeptic) + quick-scan checks (mobile, accessibility, factual integrity, student/teacher).

---

## Severity counts

| Severity | Count |
|---|---|
| MUST (factual errors / credibility breaks) | 7 |
| SHOULD (meaningful gaps / weaken trust or comprehension) | 18 |
| NICE (polish, elevation) | 17 |
| RETHINK (structural redesign options, optional) | 5 |
| **Total** | **47** |

The site does not have any catastrophic or "do not share" issues. The MUST items are mostly small factual corrections that a board member, parent rep, or program leader would notice on careful read.

---

## MUST-FIX (factual / credibility)

| ID | Where | Observation | Effort | Suggested Fix |
|---|---|---|---|---|
| M1 | [docs/index.html:394-397](docs/index.html#L394-L397) — Home tagline | Tagline drops 3 phrases from canonical Belief Statement (Areas of Focus PDF p1): "**and ROI**", "**strengthening or evolving what exists**", "**that attracts and retains students**". Each is a direct concern of one of our primary personas (board=ROI, program leader=strengthen/evolve, parent+board=attract/retain). | S | Restore canonical phrasing or a faithful adaptation that preserves all three concepts. Suggested: "A sustainable, data-informed, community-driven strategy for specialty schools and signature programs — setting clear standards, **evaluating impact and ROI**, **strengthening or evolving what exists**, and transparently communicating a future-focused vision **that attracts and retains students**." |
| M2 | [docs/index.html:669](docs/index.html#L669) — Evaluate page | Site says "SUSD's **6 Quality Indicator categories**". Canonical Quality Indicators PDF defines **10**. Either correct the count, or footnote that the 6 are an intake-form synthesis of the canonical 10. | S | Add a footnote: "These 6 evaluation categories synthesize SUSD's 10 Quality Indicators for intake purposes. See the [SUSD Quality Indicators reference](link) for the full list." Or change "6 Quality Indicator categories" to "6 evaluation categories aligned to SUSD's Quality Indicators." |
| M3 | [docs/index.html:699](docs/index.html#L699) — Evaluate page | Says "Current focus: MSA (Math/Science Academy) and STEM programs are under collaborative review." Per Lea's Feb 5 email, Program Review covers **5** programs: MSA/STEAM, IB, AVID, DLI, Traditional. Members of the omitted programs reading this would feel left out (or relieved) — either way it's wrong. | S | Update to: "**Current focus:** Program Review for MSA/STEAM, IB, AVID, Dual Language Immersion, and Traditional programs is in collaborative progress this spring." |
| M4 | [docs/index.html:810-817](docs/index.html#L810-L817) — Submit form, "Strategic Alignment" | The 6 strategic-priority checkboxes ("Innovation & future-focused learning", "Student achievement", etc.) don't match SUSD's official 5 priorities (Academic Excellence; Climate, Culture & Community Engagement; Talented and Qualified Professionals; Optimized Resources; Future Focused) per Launch deck p6. | S | Replace with SUSD's 5 official priorities, or relabel section header as "Which benefit themes does this support?" to avoid implying these are SUSD's priorities. |
| M5 | [docs/index.html:782-794](docs/index.html#L782-L794) etc. — Submit form labels | `<label>Your Name</label><input type="text">` — labels are NOT associated with inputs via for/id pairing. Screen readers can't connect them. **Real accessibility break, not just polish.** | S | Add id to every input and matching `for` to every label. Mechanical change. |
| M6 | [docs/index.html:957](docs/index.html#L957) — Programs heatmap, AVID row | AVID cell shows only "Multiple sites" at MS. Launch deck p17 lists AVID as Schoolwide Specialty at Arcadia, Ingleside, Tavan, and Hohokam (and AVID is also at Tavan elementary). Incomplete. | S | Update AVID heatmap cells to reflect actual placements per Launch deck (Tavan, Hohokam, Arcadia, Ingleside, plus secondary sites). Verify against current SUSD AVID page. |
| M7 | [docs/index.html:895, 897](docs/index.html#L895) — Pipeline sample data | "Arts Magnet / Arts Hub School — **Echo Canyon site potential**" and "Arts Magnet Program — **Echo Canyon site — formal proposal**" name a real school by name as a candidate site. Even with an illustrative-prototype banner, this carries optics risk if Echo Canyon families/staff see it. The Echo & Pima scenario PDF in the source folder confirms real scenario work exists; the demo shouldn't preview that publicly. | S | Replace specific site references with placeholders ("[Site TBD]" or "[Elementary site under study]") in sample pipeline rows. Add a Pipeline-specific disclaimer: "Site references in this sample data are illustrative only and do not reflect SPARK or district decisions." |

---

## SHOULD-FIX (meaningful gaps)

| ID | Where | Observation | Effort | Suggested Fix |
|---|---|---|---|---|
| S1 | [docs/index.html:728-750](docs/index.html#L728-L750) — Act page Decision Framework | The 4 outcomes (Approve for Pilot / Design Phase / Defer / Not at This Time) describe **new ideas only**. Areas of Focus #3 explicitly lists 5 outcomes for **existing program review**: Strengthen / Expand / Redesign / Consolidate / Sunset. Currently invisible. A board member or program leader would notice. | M | Add a parallel decision-framework block under Act for "Outcomes for existing programs" with the 5 outcomes from Areas of Focus #3. |
| S2 | Programs page (entire page) | No annual program-health / accountability surface for **active** programs. Areas of Focus #3 ("Audit + Dashboard") and #4 (ROI / minimize "program drag") are not visualized. The single biggest gap for board credibility. Programs page shows existence but no health/demand/cost/outcomes view. | L | Add a "Program Health Snapshot" tile per active program (placeholder dashboard mockup is enough for prototype: enrollment trend, demand signal, year founded, primary outcomes). Even a static mockup tells the story. Could be a separate "Program Dashboard" page. |
| S3 | Home / Cross-Cutting Foundations | SUSD's two Wildly Important Goals (Excellence in Math: 75% of 8th graders complete Algebra 1; Full and Thriving Schools: increase capture rate and maximize capacity) are not referenced anywhere on the site. Board members anchor reasoning on WIGs. | S | Add a one-line WIG anchor on Home or Evaluate: "Every program is evaluated for how it advances SUSD's Wildly Important Goals: Excellence in Math and Full and Thriving Schools." Could go in the Cross-Cutting Foundations card. |
| S4 | Programs page | Launch deck p16-18 defines 3 program structures: Dedicated Specialty School / Schoolwide Specialty Program / Signature Program within a School. Important for parents to understand enrollment access (boundary vs. application vs. lottery). Currently absent. | S | Add a callout on Programs page: "**Three Program Structures**" — brief explainer of each, with examples. Especially valuable for parents trying to understand how their child gets in. |
| S5 | Process flow visual + Governance | The Process Flow on home doesn't show where the **Governing Board** plugs in. Governance table mentions "approves major structural changes" but the Process Flow only goes "Decision → Implement" without showing a Board step. | S | Add an explicit "Board Action" step at the end of the process flow (between Decision and Implement) for changes requiring Board approval. Makes governance visible. |
| S6 | Home / Cross-Cutting Foundations | ROI / fiscal-stewardship framing is missing from the home page despite being Areas of Focus #4. The QIs include "Cost & Resources" and "Sustainability" but the home page frames everything as opportunity. | S | Add a 4th Cross-Cutting Foundation tile: "**Stewardship & ROI** — Specialty programs are evaluated for return on investment and fiscal sustainability. SPARK helps strengthen what works and recommends consolidation when it doesn't." |
| S7 | Discover persona cards | 7 personas are defined; "Existing Program Leadership" is not one of them. Currently lumped into "SPARK Team & Subgroups" (which is more about new concept work) or "Educators & Staff" (which skews toward classroom teachers). Program leaders for MSA/IB/AVID/DLI/Traditional don't have a clear "I'm here" entry. | M | Add an 8th persona card on Discover: "Existing Program Leadership — Propose enhancements, request resources, share challenges." With its own persona panel and CTA. |
| S8 | Top nav | 10 items (Framework, Discover, Evaluate, Act, Submit, Pipeline, Programs, Governance, Use Cases, Get Involved) exceeds the ~7 usability rule. Choice paralysis on first land. | M | Restructure to ~6 items: **Framework** (with Discover/Evaluate/Act as anchors within), **Programs**, **Pipeline**, **Submit an Idea**, **Get Involved**, **About** (collapsing Governance + Use Cases). Or at minimum demote Use Cases out of top nav. |
| S9 | Act / Governance / Use Cases pages | All three pages dead-end with no closing CTA. Visitor reads, then has no next step. | S | Add closing CTA blocks: Act → "View Current Pipeline" + "Submit an Idea"; Governance → "Submit / Get Involved"; Use Cases → "Submit Your Idea" + "See the Process Flow". |
| S10 | [docs/index.html:895, 897](docs/index.html#L895) — Pipeline sample | CON-02 "Arts Magnet / Arts Hub School" (Concept Study) and SPARK-004 "Arts Magnet Program" (Deep Review) read as duplicates of the same idea at two stages with two IDs. Confusing. | S | Either consolidate into one row showing progression, or add a relationship indicator ("CON-02 → advanced as SPARK-004"). Or replace with cleaner sample data. |
| S11 | [docs/index.html:592](docs/index.html#L592) — CTE persona | CTE persona's "Submit Your Idea" button calls `startSubmit('Business / Industry Partner')`. CTE pathway proposals usually come from district CTE staff, not external partners. | S | Change to `startSubmit('SPARK Team Member')` or add a "CTE Coordinator" role to the Submit form's role select and use that. |
| S12 | [docs/index.html:917-987](docs/index.html#L917-L987) — Heatmap | Heatmap is binary (active vs explore vs empty) — doesn't communicate program **density** in each cell. CSS defines heat-1/2/3 intensity classes but none are used. | M | Add per-cell badges showing school count (e.g., "STEM 3 schools"), or color-grade by # schools per cell. Currently the gap-detection value is weak. |
| S13 | Use Cases page | 8 UCs cover board / parent / teacher / community entry points. Missing: a UC about an existing-program leader proposing enhancements to their own program (e.g., "MSA director proposes additional CTE pathway integration"). | S | Add 9th UC: "Existing program leader proposes enhancement — Channel: School / Site Proposal or SPARK Team." |
| S14 | Home / overall framing | Equity & Stakeholder Inclusion is canonical Areas of Focus #5, and Equity & Accessibility is QI #3. Site mentions equity in QI lists but doesn't lead with it as an identity-defining principle. | S | Strengthen equity framing: a Cross-Cutting Foundation tile, or a one-line in tagline, or a callout on Discover/Programs ("**Every program decision is reviewed for equity and access**"). |
| S15 | Site-wide | Site makes claims about Idea Registry, Annual Report, Quarterly Landscape Scan that are aspirational, not yet built. Disclaimers acknowledge this implicitly ("Specific scoring methodology under development", "most contact features not yet active") but no consolidated "phased rollout" view exists. | S | Add a small "**Where SPARK is on the journey**" callout (e.g., on Get Involved or About): "Live now: Intake, Pipeline tracking, Feedback. Coming next: Annual Report dashboard, Landscape Scan, full design-team workflow." |
| S16 | Submit + Feedback forms | No privacy / data-handling note on either form. Feedback form is real (Google Form). Even prototype should disclose. | S | Add 1-line privacy notice near each form: "Your responses are used by the SPARK team only. We don't share submissions with third parties." |
| S17 | Header logo, password gate logo | SVG logos have no `aria-label` or `<title>`. Screen readers announce nothing meaningful. | S | Add `<title>SPARK Team Logo</title>` inside each SVG, or `role="img" aria-label="SPARK Team"`. |
| S18 | [docs/index.html:335](docs/index.html#L335) — Password gate | Says "This is a private preview. Please enter the access code to continue." Visitors who lose the email have no hint where to obtain the code. | S | Add: "If you received an invitation from the SPARK team, the access code is in that message. Otherwise contact leamitchell@susd.org." Or whatever contact path is appropriate. |

---

## NICE-TO-HAVE (polish & elevation)

| ID | Where | Observation | Effort | Suggested Fix |
|---|---|---|---|---|
| N1 | Site-wide typography | Uses Segoe UI / system stack. Reads "official document" rather than "vibrant initiative." | S | Add a display sans (Inter, Manrope, or Source Sans Pro) via Google Fonts for headings only. Body stays system. ~3 lines of CSS. |
| N2 | Process flow on home | Pill-chain is functional but flat. Doesn't feel like the rich "flow diagram" Lea endorsed. | M | Redesign with swim-lanes (Stakeholder layer / Process layer / Outcome layer), branching for park/redirect, decision diamonds. Even an SVG sketch would elevate. |
| N3 | Cross-Cutting Foundations | Three plain text columns. Visually flat. | S | Add icons (magnifying glass / clipboard / chart) and stronger structure (cards instead of plain divs). |
| N4 | Submit form (whole) | 30+ fields presented as one wall. No progress indicator. Intimidating, especially for parents. | M | Split into 3 steps (Identity → Idea → Strategic & Feasibility) with a progress bar. Or visually mark "Optional" sections with a different background. |
| N5 | Header right side | Three small dots (teal/gold/teal) in top-right are decorative without meaning. | S | Either remove or repurpose as functional indicators (e.g., # of programs / # in pipeline / # of new ideas this quarter). |
| N6 | Submit form | A casual parent with a half-formed idea may bounce on the form length. | M | Add a "Quick share" path at top: 3 fields (name, idea, what it serves). Form expands into full intake if user wants to continue. |
| N7 | Submit form success message | "Registered as SPARK-INTAKE-007. The SPARK team will review within 2 weeks." OK but doesn't tell submitter what they'll hear back, when, or how. | S | Expand: "You'll receive an email confirmation within 2 business days. Initial review feedback within 2 weeks. If your idea advances, you'll be invited to participate further." |
| N8 | Pipeline table | No dates, owners, or cadence context — feels like a static dump rather than a living pipeline. | S | Add columns: Submitted Date, Owner, Next Review. Even with sample dates (Mar 2026, Apr 2026) it tells a richer story. |
| N9 | Persona panels (Discover) | Panels expand inline but aren't announced to screen readers. | S | Add `aria-live="polite"` to panel container, or move focus into the panel after expansion. |
| N10 | Mobile nav (10 tabs) | Horizontal scroll with no scroll-indicator — users may not realize there are more tabs. | S | Add a fade-edge gradient on the right when there are more tabs, or collapse into hamburger on mobile. |
| N11 | Annual SPARK Report (Cross-Cutting) | Described in text only. No visual mockup of what it looks like. | M | Add a static example image / mockup tile showing the kind of metrics that would appear (enrollment, demand, outcomes per program). Can be illustrative-only. |
| N12 | Submit form questions | "Estimated startup costs" with $ ranges + "How does this differentiate SUSD from charters/private?" are alienating for students/teachers/early-stage parents. | S | Mark these clearly Optional. Or move to "Optional Details" collapsible section. |
| N13 | Programs page program cards | Each program card is just name + schools + "Active" tag. No distinctives, no founding year, no key outcomes. Thin presentation given that program leaders are an audience. | M | Add a sentence per card with 1 distinctive ("Inquiry-based PYP framework, est. 2008") or expand cards on click to show more. |
| N14 | Discover, Families & Community persona | Scenario uses STEM-shopping-against-charter as the example. Some parents don't see themselves in this. | S | Add a second scenario or genericize: "I see a need that isn't being met for my kid" or "Other districts offer something I wish ours did." |
| N15 | Get Involved page | Most cards have CTAs that lead to dead ends in prototype ("See upcoming meetings" with no link). Disclaimer at bottom acknowledges this, but feels weak. | M | Either link to actual SUSD pages where they exist (parent reps, meeting schedules), or replace dead-end CTAs with stronger placeholder messaging ("Coming when SPARK launches publicly"). |
| N16 | Persona cards (emoji icons) | Emoji rendering varies across platforms (Windows vs Mac vs old Outlook web preview). For future-live, consider an SVG icon set. | M | Replace emoji with Lucide / Phosphor / Heroicons SVG icon set. Matches site's mature palette better. |
| N17 | Site-wide content | No testimonials, no real success stories, no photos. Prototype constraint, but worth flagging for future-live. | M | When SPARK has 1-2 wins to showcase, add a "Stories" or "Spotlight" callout. Q3-Q4 2026 candidate. |

---

## RETHINK (structural, optional)

These aren't fixes per se — they are bigger redesign options to consider only if time allows. Each touches multiple Should-fix items.

| ID | What | Why consider | Why maybe not |
|---|---|---|---|
| R1 | Information architecture: collapse 10-tab nav to ~6 grouped categories | Cleaner first impression, less choice paralysis (S8) | Some site visitors arrive via direct deep links; restructure could break URLs |
| R2 | Add a separate "Program Health" / "Annual Report Dashboard" page or section | Closes the biggest board-credibility gap (S2). Realizes Areas of Focus #3. | Requires real data or substantial mockup work; out of scope for May 6 |
| R3 | Redesign Process Flow visual with swim-lanes + decision diamonds | The "flow diagram visual" was Lea's seed idea — elevating it would land | Risk of over-engineering; current pill chain is endorsed |
| R4 | Redesign Heatmap with density / school-count / clearer active-vs-pipeline distinction | Heatmap was Lea's other seed idea — elevating it would land. (S12) | Requires careful data work to count programs per cell |
| R5 | Split Submit form into 3-step wizard | Less intimidating for parents (N4, N6) | Might feel over-engineered for a 15-min form |

---

## Notes / housekeeping

- **`SPARK/3. Intake system/mockup/index.html` is stale** (~82KB) relative to deployed `docs/index.html` (~100KB). The local mockup folder hasn't tracked deployed changes. Either delete it (single source of truth = `docs/`) or sync it. Minor — but accumulates if not addressed.
- **All content fixes apply to `docs/index.html`**, not the mockup folder.
- **No catastrophic findings:** the site is genuinely good. The MUST-fix items are mostly small factual corrections (tagline, count of QIs, current programs under review, accessibility labels). Any of them caught by a board member would be embarrassing but not damaging.
- **Where to start (recommended sequence for time-bounded fix sprint):** M1 → M2 → M3 → M4 → M5 (these are all small, high-value), then S3 / S4 / S6 (small content additions that close real gaps), then S2 if time (the dashboard placeholder is the single biggest credibility lift).

---

*Review conducted 2026-05-01 in preparation for May 6 SPARK meeting.*
