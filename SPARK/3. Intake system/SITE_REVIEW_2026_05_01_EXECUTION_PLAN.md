# SPARK Demo Site — Execution Plan

**Date:** 2026-05-02 (3 days to May 5 SPARK meeting)
**Companion to:** [SITE_REVIEW_2026_05_01.md](SITE_REVIEW_2026_05_01.md)
**Purpose:** Captures decisions on which review findings to act on, refined approaches that respect Mitchell's uplift framing for existing programs, and the parallel-site workflow.

---

## Workflow: parallel `docs/v2/` site

- All improvements happen in `docs/v2/index.html` (sibling of current `docs/index.html`).
- Live URLs: `https://brianhohl22.github.io/spark-framework/` (v1, current — what committee has) and `.../v2/` (improvements, to share with Mitchell first).
- v1 stays unchanged with one exception (M7 — see below). Allows graceful handling of feedback on either version.
- After May 5, if v2 is approved, copy to root and remove `/v2/` (or keep as archive).

**Open questions:**
- Same password for v2, or different?
- "← Original version" link in v2 footer?

---

## Mitchell's uplift framing — the binding constraint for S1 / S2 / S6

Mitchell's Jan 26 email and her overall communication style frame existing-program review as: "**areas of strength, opportunities for growth, and ways we can further support program implementation**." Existing programs have been board-approved with budgets — review is principally an uplift opportunity, not an accountability/retrenchment exercise. Brian, as a community/family member on the team, should not be the one provocatively introducing sunset/consolidate language onto the public-ish site.

This constrains S1, S2, and S6 fixes — see refinements below.

---

## Per-item decisions

### MUST

| ID | Decision | Notes |
|---|---|---|
| **M1** Tagline | DEFER (keep on high-priority list) | User wants to think more before changing the canonical tagline. Stays flagged. |
| **M2** "6 Quality Indicators" → 10 with 6-bucket synthesis footnote | DO in v2 | User likes preferred fix wording. |
| **M3** "Current focus: MSA + STEM" → all 5 programs | (was M3, slot still applies) — DO in v2 | List MSA/STEAM, IB, AVID, DLI, Traditional. |
| **M4** SUSD strategic priorities | DO in v2 — Option A | Replace with SUSD's actual 5: Academic Excellence; Climate, Culture & Community Engagement; Talented and Qualified Professionals; Optimized Resources; Future Focused. |
| **M5** Form labels for/id pairing | DO in v2 | Plain-English: labels currently look connected to sighted users but float free for screen readers. Adding `id` to inputs and `for` to labels glues them. ~30 min mechanical. ADA Title II. |
| **M6** AVID heatmap — add elementary sites | DO in v2 | Verify against susd.org/academics/academic-programs/avid. |
| **M7** Echo Canyon → "[Candidate Site TBD]" | **DO in BOTH v1 and v2** (rare exception — minimize ongoing exposure during the 3-day window) | Pending user confirmation. Tiny patch to v1, full fix in v2. |

### SHOULD

| ID | Decision | Refined approach |
|---|---|---|
| **S1** Decision framework for existing programs | DO in v2, **uplift-only verdicts** | New block on Act page titled "Outcomes from Program Review" with: Affirm & Celebrate / Enhance / Expand / Strategic Redesign. **Drop** Sunset/Consolidate from public-facing language — internal-analytics only. |
| **S2** Program-health surface | DO in v2, **as "Program Spotlight"** | One illustrative spotlight tile on Programs page (asset-flavored): years operating, distinctives, students served (not capacity gap), partnerships, recent wins, what program leads need. Placeholder data under disclaimer. Frames programs as assets. |
| **S3** WIGs reference | DO in v2 — two places, light touch | (a) Cross-Cutting "Strategic Anchor" tile referencing Excellence in Math + Full and Thriving Schools. (b) Optional question in Submit form's Strategic Alignment section. Heatmap-as-WIG-dimension deferred to RETHINK. |
| **S4** Three Program Structures | DO in v2 — informational + structural | (a) Callout on Programs page explaining the 3 structures with examples. (b) Small structure indicator (icon/border) on heatmap cells. (c) Filter on portfolio cards. (d) Submit form Program Type language matches. |
| **S5** Board step in process flow | DO in v2 | Insert "Board Action" step (conditional / dotted line) between Decision and Implement. |
| **S6** ROI / stewardship | DO in v2 — **scoped to new investments only** | Cross-Cutting tile: "**Stewardship of New Investments** — When evaluating new program ideas, SPARK considers cost, sustainability, and long-term impact alongside educational value. Existing programs are treated as community assets — reviewed for enhancement, not retrenchment." Threads needle: honors Areas of Focus #4, signals fiscal discipline for new ideas, reassures program leaders. |
| **S7** Existing Program Leadership presence | DO in v2 — **lighter than new persona** | (a) Inline CTA at bottom of Evaluate page's "Existing Program Enhancement" callout: "Lead an existing SUSD program? Propose an enhancement →". (b) Broaden Educators & Staff persona scenario to include a program-leader voice. No new persona card. |
| **S8** Nav restructure | DO in v2 — **6 tabs** | Framework (Discover/Evaluate/Act anchored within) / Programs / Pipeline / Submit / Get Involved / About (Governance + Use Cases anchored within). Sticky sub-nav inside Framework. Deep-linkable URL fragments. |
| **S9** Closing CTAs on dead-end pages | DO in v2 | Act, Governance, Use Cases each get 2 closing CTAs. |
| **S10** Pipeline Arts Magnet duplicates | DO in v2 | Consolidate or add relationship indicator. Pairs with M7. |
| **S11** CTE persona role pre-fill | DO in v2 | Change `startSubmit('Business / Industry Partner')` to `startSubmit('SPARK Team Member')` or add CTE Coordinator role. |
| **S12** Heatmap density | DO in v2 — **first-pass only** | Add school-count badge per cell + clearer active-vs-pipeline distinction. The richer multi-view (Coverage / Density / Reach / Demand / Aspiration) is RETHINK R4 — needs per-theme objectives defined first by SPARK team, not Brian alone. |
| **S13** Use case for existing-program enhancement | DO in v2 | Add UC-09: existing program leader proposes enhancement. Reinforces partnership tone. |
| **S14** Equity foundational | DO in v2 | Add to Cross-Cutting (or weave into tagline). |
| **S15** "Where SPARK is on the journey" framing | DO in v2 | Live now / Coming next callout on Get Involved or About. |
| **S16** Privacy notice on forms | DO in v2 | One line near Submit and Feedback forms. |
| **S17** SVG logo alt/aria-label | DO in v2 | Add `<title>` or `aria-label`. |
| **S18** Password gate hint | DO in v2 | "If you received an invitation from the SPARK team, the access code is in that message." |

### NICE & RETHINK

User to review later. None critical for May 5.

- RETHINK R1 (IA) → being addressed via S8.
- RETHINK R2 (Program Health page) → being addressed via uplift-flavored S2.
- RETHINK R3 (Process flow swim lanes) — defer.
- RETHINK R4 (Multi-view heatmap) — addressed simply now (S12); richer version requires SPARK team to define per-theme objectives first.
- RETHINK R5 (Submit form wizard) — defer.

---

## Tiered execution plan (3 days, ~Sat 5/2 – Mon 5/4)

### Tier A — must ship (~3-4h, all small/mechanical, low risk)
M4, M5, M6, M7, S5, S9, S10, S11, S13, S15, S16, S17, S18

### Tier B — high-value, doable (~3-4h)
M2, M3, S2 reframe (Program Spotlight tile), S3 (WIG anchor + form question), S4 (callout + heatmap indicator), S6 (Stewardship tile), S8 (nav restructure), S12 (school-count badges), S14 (Equity)

### Tier C — do if time (~2h)
S1 reframe (Outcomes from Program Review block — uplift-only), S7 (Existing Program Enhancement CTA + Educators scenario broadening)

**Rule of thumb:** ship Tier A + B perfectly rather than A + B + C rushed.

---

## Pre-meeting communication

Suggested approach with Mitchell (Brian's call):

- Once v2 is ready, send Mitchell a brief note with the v2 link.
- Frame as "drafted some refinements for review — wanted to flag a few that are in the spirit of uplift framing for existing programs, plus a few content-truth fixes (program count, QI count)."
- Let her steer whether to share v2 with the broader committee before May 5.

---

## Notes

- M1 (canonical tagline restoration) remains on the priority list but parked pending Brian's further thought.
- M7 v1 patch is a rare exception to "no v1 changes" — minimizes ongoing exposure during 3-day window. Pending user confirmation.
- All work uses `docs/v2/index.html` as the single working file. v1 (`docs/index.html`) is frozen except for the M7 patch.

---

*Plan adopted 2026-05-02 based on user review of [SITE_REVIEW_2026_05_01.md](SITE_REVIEW_2026_05_01.md).*

---

## Execution status (2026-05-02 PM)

**v1 patch:** ✅ Done. Echo Canyon → [Candidate Site TBD] (commit `67819d9`).

**v2 setup:** ✅ Done. `docs/v2/index.html` sibling created with v2-Draft banner and "View original version" footer link (commit `5d678ee`). Live at `https://brianhohl22.github.io/spark-framework/v2/` (same password).

**Tier A:** ✅ Done (commit `e152de1`). Items: M3, M4, M5, M6, S5, S9, S10, S11, S13, S15, S16, S17, S18 + N7/N9/N12/N14 fold-ins.

**Tier B:** ✅ Done (commit `ea4f061`). Items: M2, S2 (Program Spotlight tile w/ illustrative MSA mockup), S3 (WIG anchor), S4 (Three Program Structures callout), S6 (Stewardship of New Investments tile), S8 (10-tab nav → 6-tab), S12 (heatmap polish + multi-view future-direction note), S14 (Equity tile), N8.

**Tier C:** Pending user decision. S1 (Outcomes from Program Review uplift-only block) and S7 (Existing Program Enhancement CTA + broader Educators scenario) — both touch existing-program framing where user said they should not unilaterally push. Refined approaches available; awaiting confirmation.

**M1:** Still parked per user direction. Tagline drift remains — the *only* uncorrected canonical drift after v2.

**Pre-brief Mitchell:** Pending. User to draft note before sharing v2 link.

**Cross-Cutting Foundations restructured** from 3 tiles to 6:
1. Strategic Anchor (WIGs) — new
2. Quality Indicators — refined
3. Equity & Access — new
4. Stewardship of New Investments — new
5. Idea Registry — kept
6. Annual Program Spotlight — renamed from "Annual SPARK Report"
