# SPARK site: the forms and their questions

For the Web Content team, and whoever builds the Microsoft Forms. September 2026, v3.1. Where to embed each form, and how embed codes work, is in [HANDOFF.md](HANDOFF.md) section 3.

The site uses three public forms, embedded on three pages. A fourth form, the Develop packet, is sent only by invitation and is not on the site.

| Form | Embedded on | iframe title | About |
| --- | --- | --- | --- |
| Share an idea | Share an idea, under "Send your idea" | Share an idea form | 5 minutes |
| Support an idea | What we're working on, under "Support an idea we're studying" | Support an idea form | 2 minutes |
| Site feedback | How SPARK works, at the bottom | Site feedback form | 1 minute |

**Settings for every form:**
- "Anyone can respond."
- "One response per person" off.
- "Record name" off.
- Ask for email only as a question, next to the consent line.
- Turn on a custom thank-you message.

**Spanish:** duplicate each public form and translate it, keeping the same questions. Responses from the Spanish copy are marked Spanish, so replies go out in Spanish.

---

## 1. Share an idea

The public page describes this form as "About 5 minutes." It has 13 questions: 4 about the person and consent, and 9 about the idea. Question 10 has one follow-up.

| # | Question | Type | Required | Limit or choices | Help text shown under the question |
| --- | --- | --- | --- | --- | --- |
| 1 | Your name | Text | Yes | 100 characters | So we can reply to you. Never published. |
| 2 | Email | Text | Yes | 150 characters | We reply here within 3 weeks. |
| 3 | I am a... | Choice | Yes | Parent or guardian; Student; SUSD teacher or staff; Principal or school leader; Community member; Other | |
| 4 | School connection | Text | No | 100 characters | Which SUSD school is this about or connected to, if any? |
| 5 | Idea title | Text | Yes | 80 characters | Ten words or fewer. |
| 6 | What is the idea? | Long text | Yes | 1,000 characters | What would students do differently? Keep it plain. |
| 7 | Level | Multiple answers | Yes | Elementary; Middle; High; All levels | |
| 8 | Theme | Choice | Yes | Arts; College and Career; Dual Language Immersion; Early College; Gifted and Advanced; International Baccalaureate; STEM; Traditional | Pick the closest fit. |
| 9 | What kind of idea is this? | Choice | Yes | New school model or learning environment; New option within a school; Change to something SUSD already offers; Something else | "Something else" is fine; we'll point you to the right team. |
| 10 | Similar to anything already listed on the site? | Choice | Yes | No; Yes (Yes opens 10b) | |
| 10b | Which one? | Text | No | 200 characters | Name the study or option; your idea may be joined to it. |
| 11 | Why does SUSD need this, and who wants it? | Long text | Yes | 1,000 characters | Who has asked for it? Anything you know about demand. |
| 12 | Would you help? | Choice | Yes | Help develop it; Updates only; No thanks | |
| 13 | Consent | Choice | Yes | I understand | Your name and email are never published. Your idea may appear on susd.org/spark in summary form, without your name. |

**Thank-you message:** "Thanks. Your idea ID and reply-by date are on the way to your email. If you chose 'Something else,' these channels may act faster: Let's Talk, your school office, the school repurposing input page, or public comment at a Governing Board meeting."

## 2. Support an idea

About 2 minutes. It is for the ideas the SPARK team is studying now.

| # | Question | Type | Required | Limit or choices | Help text |
| --- | --- | --- | --- | --- | --- |
| 1 | Which idea? | Choice | Yes | The ideas listed on What we're working on, as "ID, public title". Refreshed after each quarterly review. Today: Gifted and Advanced Studies Magnet School (K-8); Visual and Performing Arts Magnet School (K-8) | |
| 2 | Your relationship | Choice | Yes | Parent or guardian at that school; Parent or guardian elsewhere in SUSD; Student; SUSD staff; Community member | |
| 3 | Anything to add? | Long text | No | 600 characters (about 100 words) | One input the SPARK team reads at review; not a vote. |
| 4 | Email | Text | No | 150 characters | Only if you want that idea's updates. |
| 5 | Consent | Choice | Yes | I understand | I understand notes are read by the SPARK team and summarized, never posted. |

**Thank-you message (proposed; not in the spec):** "Thanks. Your note goes to the idea's design team before its next meeting. We summarize what we heard each quarter in You said, we did."

## 3. Site feedback (proposed; not in the spec, confirm with the Assistant Superintendent)

About 1 minute. How SPARK works ends with "Something unclear on this site? Tell us."

| # | Question | Type | Required | Limit or choices | Help text |
| --- | --- | --- | --- | --- | --- |
| 1 | Which page? | Choice | No | SPARK home; What we're working on; Explore options; Share an idea; How SPARK works; The whole site | |
| 2 | What was unclear, or what would help? | Long text | Yes | 500 characters | |
| 3 | Email | Text | No | 150 characters | Only if you want a reply. |

**Thank-you message (proposed):** "Thanks. The SPARK team reads every note and uses it to improve this site."

## 4. Develop packet (invitation only, not on the site)

The SPARK team sends this to an idea's submitter, or to their school contact, after a SPARK team review asks for more detail. It takes 30 to 45 minutes. It asks for links rather than uploads, because people outside the district cannot attach files. Sections:
- Idea ID, name, email.
- **Strategic alignment:** which SPARK areas of focus; fit with the strategic plan; the student problem it solves.
- **Demand evidence:** who has asked, and how many; comparable schools or programs elsewhere, with links; enrollment or waitlist facts; expected draw from outside SUSD.
- **Instructional model:** structure (dedicated specialty school, schoolwide specialty program, or signature program within a school); what a week looks like; curriculum or certification; staffing.
- **Feasibility:** space and transport; earliest realistic start (2027-28, 2028-29, later); prerequisites and risks.
- **Cost:** start-up estimate; annual estimate; funding sources.
- **Partnerships:** organizations and commitments; permission to contact them.
- **Involvement:** your role; hours per month; others to invite.
- Consent.

---

**Behind the forms** (for whoever builds them): responses go to a SharePoint list, "SPARK Ideas." Power Automate sends the confirmation email and the reply templates, and a monthly summary email feeds the site updates. The detailed design spec has the list columns, the flows, and the email templates.
