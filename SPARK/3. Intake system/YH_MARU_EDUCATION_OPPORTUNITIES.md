# YH Maru × Education — Opportunity Plan

> **Purpose**: Codified opportunities at the intersection of YH Maru capabilities and Brian's SUSD/SPARK engagement. For phased implementation after the intake system is stable.

---

## Opportunity 1: MJ Auto-Scan of SUSD Board Agendas

**What**: Configure MJ's collector/analyst pipeline to automatically pull and analyze SUSD Governing Board meeting agendas, minutes, and public documents on a regular cadence.

**Why**: SUSD publishes board agendas with program-relevant decisions (budget allocations, enrollment data, facility plans, new program approvals). Currently Brian would need to manually monitor these. MJ can surface relevant items proactively.

**How to build**:
- Add SUSD board agenda URL(s) to `pie_mj/context/learned/radar_sources.yaml`
- Configure Scout to flag items matching SPARK-relevant keywords (specialty programs, enrollment, facility, signature, magnet, CTE)
- Surface in MJ briefing under a "SUSD Watch" section

**Effort**: Small (~1 hour). Leverages existing Scout + radar infrastructure.
**Priority**: High — low effort, immediate value for staying informed ahead of meetings.

---

## Opportunity 2: School Performance Data Integration

**What**: Integrate kids' school performance data (MAP scores, CogAT, report cards) into a unified tracking view — conceptually extending what Emi Tracker does for Emi to also cover Irie.

**Why**: Brian already tracks Emi's developmental data in emi-tracker. Irie's MAP scores (97th percentile Math, 88th percentile Verbal from Alpha School shadow day) and future school data could benefit from similar structured tracking. This creates a complete family education intelligence picture.

**How to build**:
- Phase 1: Add Irie data folder structure to emi-tracker (or a parallel lightweight tracker)
- Phase 2: Normalize MAP/CogAT scores into comparable metrics across both kids
- Phase 3: Surface in MJ Family Pulse channel alongside school calendar events

**Effort**: Medium (Irie tracker could be very lightweight initially — a few context files).
**Priority**: Medium — valuable but not urgent. Wait until emi-tracker multi-channel input is stable.

**Note**: Irie is the younger daughter (separate from Emi). This is complementary to Emi Tracker, not a replacement.

---

## Opportunity 3: Echo Canyon Analysis as Credibility Asset

**What**: Package Brian's Echo Canyon break-even financial model (v1.0-v3.1) as a referenceable artifact that demonstrates analytical rigor in education policy contexts.

**Why**: Brian built a sophisticated multi-scenario financial model evaluating SUSD's consideration of repurposing/closing Echo Canyon and Pima Elementary. This same analytical approach (data-driven, scenario-based, financially rigorous) is exactly what gives the SPARK intake system proposal credibility. The Echo analysis shows Brian isn't just proposing process — he has a track record of applying structured analysis to district decisions.

**How to build**:
- Create a one-page summary of the Echo analysis methodology and key findings
- Reference in SPARK meeting contexts when credibility matters (e.g., "I've done similar analysis for the Echo Canyon question")
- Optionally create a clean PDF version of the model summary

**Effort**: Small (~30 min to create summary).
**Priority**: Low-medium — useful as context, not a standalone deliverable.

---

## Opportunity 4: Intake System as Reusable Framework

**What**: Design the SPARK intake system architecture to be reusable beyond SUSD — as a template for structured idea intake in any organizational context.

**Why**: The three-pillar framework (Discover → Evaluate → Act), QI-aligned scoring, and transparent pipeline pattern is applicable to:
- Other school districts considering specialty programs
- Corporate innovation pipelines
- Municipal program evaluation
- YH Maru's own project intake (Brian evaluates many initiatives)

This aligns with the "context-as-code" philosophy — the framework documents are the durable, portable IP.

**How to build**:
- Phase 1: Ensure all artifacts are clean, well-documented, and separable from SUSD-specific content
- Phase 2: Create a "template" version with placeholder branding and generic QI categories
- Phase 3: If demand exists, package as an open-source starter kit

**Effort**: Low for Phase 1 (already mostly done). Medium for Phase 2.
**Priority**: Low — opportunistic. Focus on SUSD-specific value first.

---

## Implementation Sequence

| Order | Opportunity | When | Dependency |
|---|---|---|---|
| 1 | MJ Auto-Scan SUSD Board | After intake system deployed | Scout + radar infra |
| 2 | School Performance Integration | After emi-tracker multi-channel stable | Emi Tracker Phase 1 |
| 3 | Echo Canyon Summary | When needed for credibility context | None |
| 4 | Reusable Framework | After SPARK adopts intake system | SPARK feedback |

---
*YH Maru × Education Opportunities v1.0 — March 2026*
