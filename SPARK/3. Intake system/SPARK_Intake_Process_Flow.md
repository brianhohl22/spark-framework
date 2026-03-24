# SPARK Intake Process Flow

> **Visual process map** — can be rendered with any Mermaid-compatible viewer (GitHub, VS Code plugin, mermaid.live, etc.)

```mermaid
flowchart TD
    subgraph ENTRY["IDEA ENTRY POINTS"]
        E1["Community / Family"]
        E2["Educators / Staff"]
        E3["Innovation Grants"]
        E4["CTE Pathways"]
        E5["SPARK Team Meetings"]
        E6["Landscape Scan"]
        E7["Student Voice"]
    end

    FORM["INTAKE FORM\n(15-20 min)\nCaptures: concept, alignment,\ndemand, model, feasibility, cost"]

    E1 --> FORM
    E2 --> FORM
    E3 --> FORM
    E4 --> FORM
    E5 --> FORM
    E6 --> FORM
    E7 --> FORM

    FORM --> SCREEN{"PRELIMINARY\nSCREEN\n(Admin)"}

    SCREEN -->|"Duplicate or\nobvious blocker"| PARK["PARK\nin Registry\n(with reason)"]
    SCREEN -->|"Better fit\nelsewhere"| REDIRECT["REDIRECT\nto existing\nprogram/channel"]
    SCREEN -->|"Passes\nminimum bar"| TRIAGE

    TRIAGE["SPARK TRIAGE\n(Core Team)\nPreliminary Alignment\nScorecard (6 QI categories)"]

    TRIAGE -->|"Score 36+\nor strong signal"| ADVANCE["ADVANCE\nto Deep Review"]
    TRIAGE -->|"Promising but\nincomplete"| DEVELOP["DEVELOP\nFURTHER\n(return with\nmore info)"]
    TRIAGE -->|"Not a fit"| ARCHIVE["ARCHIVE\n(with rationale)"]

    DEVELOP --> FORM

    ADVANCE --> ASSIGN{"Assign to\nSPARK Team"}
    ASSIGN -->|"New concept"| DESIGN["DESIGN TEAM\n(develop proposal)"]
    ASSIGN -->|"Existing program\nadjustment"| REVIEW["REVIEW TEAM\n(evaluate & recommend)"]

    DESIGN --> DECISION
    REVIEW --> DECISION

    DECISION{"SPARK\nDECISION"}
    DECISION -->|"Ready"| PILOT["APPROVE\nfor Pilot"]
    DECISION -->|"Needs more work"| DESIGNPHASE["APPROVE\nfor Design Phase"]
    DECISION -->|"Good idea,\nwrong time"| DEFER["DEFER\n(auto re-surface)"]
    DECISION -->|"Not recommended"| DECLINE["DECLINE\n(documented)"]

    PILOT --> IMPLEMENT["IMPLEMENTATION\nPLAN"]
    DEFER --> REGISTRY["IDEA REGISTRY\n(re-surface\non cadence)"]
    PARK --> REGISTRY
    ARCHIVE --> REGISTRY

    style ENTRY fill:#fff3cd,stroke:#ffc107
    style FORM fill:#d1ecf1,stroke:#0dcaf0
    style SCREEN fill:#f8d7da,stroke:#dc3545
    style TRIAGE fill:#d4edda,stroke:#198754
    style DECISION fill:#cfe2ff,stroke:#0d6efd
    style REGISTRY fill:#e2e3e5,stroke:#6c757d
```

## Process Timing

| Stage | Cadence | Duration |
|---|---|---|
| Idea Capture | Continuous (always open) | — |
| Preliminary Screen | Within 2 weeks of submission | 15-30 min per idea |
| SPARK Triage | Quarterly (or as-needed for urgent concepts) | 15-30 min per idea |
| Deep Review | As assigned (Design/Review team schedule) | 4-8 weeks |
| Decision | Quarterly SPARK meeting | — |

## Key: How Ms. Mitchell's "Process Flow" Vision Maps Here

Ms. Mitchell envisioned "a graphic or flow chart that would ultimately be on a forward-facing website where people would be able to see the process visually and access the more detailed information."

This flow chart serves as the backbone. The interactive web mockup (`mockup/index.html`) demonstrates how this could work as a clickable, public-facing experience where:
- A person with a **new idea** clicks "Submit an Idea" and lands on the Intake Form
- A person curious about **what's in the pipeline** clicks "View Idea Registry"
- A person wanting to **learn about existing programs** clicks "Current Programs"
- A SPARK team member clicks "Triage Dashboard" for internal tools

---
*SPARK Intake Process Flow v1.0 — March 2026*
